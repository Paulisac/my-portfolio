import React, { useEffect, useState } from 'react'
import Mythought from './Mythought'
import { useParams } from 'react-router-dom'
import { getFirestore, collection } from 'firebase/firestore/lite'
import { FirestoreCollection } from 'react-firestore'

function Blog() {

    
    const { slug } = useParams()

    const [blog, setBlog] = useState(null)
    const [content, setContent] = useState([])

    useEffect(() => {
            const firestore = getFirestore();
            collection(firestore, 'blogs').where('slug', '==', slug).get().then(res => {
                if (!res.empty) {
                    res.forEach(doc => {
                        doc.ref.collection('content').get().then(res => setContent(res.docs.map(doc => doc.data())))
                        setBlog(doc.data())
                    })
                }
            })
    }, [slug])

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

                <FirestoreCollection path="/blogs">
                    {
                    d => (
                        d.isLoading ? <h1>Loading</h1> :
                            <>
                                {
                                    d.value.filter((doc) => doc.slug !== slug).slice(0, 3).map((doc, id) => <Mythought key={id} time={doc.time} title={doc.title} snippet={doc.snippet} slug={doc.slug} />)
                                }
                            </>
                    )
                    }
                    </FirestoreCollection>
                </div>
            </div>
        </div>
    </>)
}

export default Blog