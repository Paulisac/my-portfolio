import React, { useEffect, useState } from 'react'
import Casestudycard from './Casestudycard'
import { useParams } from 'react-router-dom'
import { FirestoreCollection } from 'react-firestore'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import PageView from './PageView'
import db from './index.js';



function Casestudy() {

    const { slug } = useParams()

    const [casestudy, setCasestudy] = useState(null)
    const [content, setContent] = useState([])

    useEffect(() => {

            /* collection(db, 'casestudies').where('slug', '==', slug).get().then(res => {
                
                if (!res.empty) {
                    res.forEach(doc => {
                        
                        doc.ref.collection('content').get().then(res => setContent(res.docs.map(doc => doc.data())))
                        setCasestudy(doc.data())
                        window.scrollTo({top: 0, left: 0})
                    })
                }
            }) */
        const docRef=db.collection("casestudies").doc(slug);
        docRef.get().then(function(doc) {
            if(doc.exists){
                console.log(doc.data())
            }
            else{
                console.log("no")}
        }).catch(function(error){
            console.log(error)
        })

    }, [])

    console.log(casestudy, content, slug)

    return (<>
        <div className="banner max-w-screen-xl m-auto my-24 px-4 md:px-0 ">
            {casestudy ?
                <>
                    <div className=" ">
                        <PageView  src={casestudy.image} crossorigin /></div>
                    {/* <ph1 className="font-bold text-center m-auto text-2xl text-loose py-8">{casestudy.title} </ph1> --> */}
                    <div className=" m-auto ">
                    {
                        content.map((cont, i) => {
                            if (cont.type === 'para')
                                return <p className="font-normal text-lg py-4" key={i}>{cont.content}</p>
                            else if (cont.type === 'image')
                                return <img key={i} className="py-8" src={cont.url} alt="" />
                        })
                    }</div>
                </> :
                <></>}
        </div>
        <div className="Casestudycontainer sm:grid-cols-1 m-auto container max-w-screen-xl grid md:grid-cols-12 gap-x-12 gap-y-12 my-28 px-4 ">
  {/*           <FirestoreCollection path="/casestudies" >
                    {
                        d => (
                            d.isLoading ? <h1 className="text-center" >Loading...</h1> :
                                <>
                                    {
                                        d.value.filter((doc) => doc.slug !== slug).slice(0, 3).map((doc, id) => <Casestudycard key={id} thumb={doc.thumb} title={doc.title} snippet={doc.snippet} slug={doc.slug} />)
                                    }
                                </>
                        )
                    }
            </FirestoreCollection> */}
        </div>
    </>
    )
}

export default Casestudy
