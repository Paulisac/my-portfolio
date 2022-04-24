import React, { useCallback, useEffect, useState } from 'react'
import Mythought from './Mythought'
import { useParams } from 'react-router-dom'
import { collection, getDocs,  query,  where, } from "firebase/firestore";
import db from "./index.js";

function Blog() {

    
    const { slug } = useParams()

    const [blog, setBlog] = useState(null)
    const [content, setContent] = useState([])

    const q = query(collection(db, "blogs"), where("slug", "==", slug));
    /*  console.log(q); */
     
     const getData = useCallback(async () => {
       const querySnapshot = await getDocs(q);
       const querys = await getDocs(
           collection(db, "blogs"),
           where("slug", "==", slug)
         );
       querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         setBlog(doc.data());
         
       });
       setContent(querys.docs.map((doc) => ({...doc.data(), id:doc.id})));
     
     }, [ slug]);
   
     useEffect(() => {
       getData();
     }, [getData]);

     console.log(content);

    const days = blog ? Math.floor(((Date.now() / 1000) - (blog.time.seconds)) / 60 /60 / 24) : "";

    return (<>
        <div className="my-28 px-4 md:px-0">
            {blog ?
                <>
                    <div className="max-w-screen-sm m-auto"><img alt="_" src={blog.image} /></div>
                    <div className="max-w-screen-sm m-auto py-8 ">
                        <h1 className="text-loose font-bold text-2xl py-2">{blog.title}</h1>
                        <span className="text-loose font-normal text-sm py-2">Updated {days ? `${days} day${days > 1 ? 's' : ''} ago` : 'today'}</span>
                        {
                            content.map((cont, i) => {
                                if (cont.type === 'para')
                                    return <p dangerouslySetInnerHTML={{__html: cont.content}} className="font-normal blog text-lg py-4" key={i}></p>
                                else if (cont.type === 'image')
                                    return <img key={i} className="py-8" src={cont.url} alt="" />
                            })
                        }
                    </div> </> : <></>}

            <div>
                <div className="pt-28 px-4">

                
                    {
                      content.filter((r)=>r.slug !== slug).slice(0, 3).map((r, id) => <Mythought key={id} time={r.time} title={r.title} snippet={r.snippet} slug={r.slug} />)
                    }
 
                </div>
            </div>
        </div>
    </>)
}

export default Blog