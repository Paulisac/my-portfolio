import Collections from "./Collections";
import Summary from "./Summary";
import db from './index.js';
import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";

function Display() {

    const [state, setState] = useState([]);
     
         
   const getData=useCallback(async () => {
       const querySnapshot= await getDocs(collection(db, "displays"));
       setState(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
   },[])
   
   useEffect(() => {
       getData()
   },[getData])

    return <>
    <div className="Display">
        <Summary title="Collections" snippet="Compilation of client projects, achievements, and personal interests." />
    </div>
    <div className="Collections">

    
          
                    {
                       state.map((data, id) => <Collections key={id} isReverse={id%2} image1={data.image1} image2={data.image2} image3={data.image3} title={data.title} snippet={data.snippet} snippet1={data.snippet1} snippet2={data.snippet2} snippet3={data.snippet3}/>)
                    }
        
      
 

    {/* <Collections isReverse={true} image1="images/abc.png" image2="images/abc.png" image3="images/abc.png" title="Collections" 
        snippet="42 words 316 characters, blog 90's pok pok franzen af cray meggings pork belly hexagon. Freegan post-ironic lo-fi chambray. Yuccie banh mi pop-up fingerstache kinfolk chillwave everyday carry. Bushwick taxidermy craft beer literally. Irony microdosing pour-over narwhal iceland, meditation small batch gastropub." />
    

    <Collections isReverse={false} image1="images/abc.png" image2="images/abc.png" image3="images/abc.png" title="Collections" 
        snippet="42 words 316 characters, blog 90's pok pok franzen af cray meggings pork belly hexagon. Freegan post-ironic lo-fi chambray. Yuccie banh mi pop-up fingerstache kinfolk chillwave everyday carry. Bushwick taxidermy craft beer literally. Irony microdosing pour-over narwhal iceland, meditation small batch gastropub." /> */}
    </div></>
}

export default Display