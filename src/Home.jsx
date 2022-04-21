
import Casestudycard from "./Casestudycard";
import Summary from "./Summary";
import db from './index.js';
import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";



 function Home() {

 const [state, setState] = useState([]);
  
      
const getData=useCallback(async () => {
    const querySnapshot= await getDocs(collection(db, "casestudies"));
    setState(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
},[])

useEffect(() => {
    getData()
},[getData])


    return <>
        <div className="Home">
            <Summary title="Hey, I'm Paul" snippet="UX designer at Amnet Digital." />

            <div className="Casestudycontainer sm:grid-cols-1 m-auto container max-w-screen-xl grid md:grid-cols-12 gap-x-12 gap-y-12 my-28 px-4">

                {/* <Casestudycard title="Takshashila" snippet="Building Ed-tech app from the Scratch. Giving back to the community." />
                <Casestudycard title="Kartinal" snippet="Building Ed-tech app from the Scratch. Giving back to the community." />
                <Casestudycard title="Personal Growth" snippet="Building Ed-tech app from the Scratch. Giving back to the community." /> */}

               
                    
        
                                
            {
             state.map((data, id) => <Casestudycard key={id} thumb={data.thumb} title={data.title} snippet={data.snippet} slug={data.slug} />)
            }
     
                        
                    
                
            </div>

        </div>
    </>

}

export default Home