import Mythought from "./Mythought"
import Summary from "./Summary"
import db from './index.js';
import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";



function Notes() {

    const [state, setState] = useState([]);
  
      
    const getData=useCallback(async () => {
        const querySnapshot= await getDocs(collection(db, "blogs"));
        setState(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
    },[])
    
    useEffect(() => {
        getData()
    },[getData])

    return <>
        <div className="Note">
            <Summary title="My views" snippet="It's all about frameworks, strategies, development, and creating awesome products." />
        </div>
        <div className="pt-28 px-4 pb-8">

           
          {
             state.map((data, id) => <Mythought key={id} time={data.time} title={data.title} snippet={data.snippet} slug={data.slug} />)
          }
       
         

            {/* <Mythought title="Secrets about People: A Short and Dangerous Introduction" snippet="What I've learned from studying interviewing principles and analyzing the meta elements of my favorite interviewers." time="Updated 4 days ago" />
    <Mythought title="Secrets about People: A Short and Dangerous Introduction" snippet="What I've learned from studying interviewing principles and analyzing the meta elements of my favorite interviewers." time="Updated 4 days ago" /> */}
        </div>
    </>
}

export default Notes