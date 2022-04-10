import React, { useCallback, useEffect, useState } from "react";
import Casestudycard from "./Casestudycard";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import PageView from "./PageView";
import db from "./index.js";

function Casestudy() {
  const { slug } = useParams();

  const [casestudy, setCasestudy] = useState(null);
  const [content, setContent] = useState([]);
  const q = query(collection(db, "casestudies"), where("slug", "==", slug));
  console.log(q);
  
  const getData = useCallback(async () => {
    const querySnapshot = await getDocs(q);
    const querys = await getDocs(
        collection(db, "casestudies"),
        where("slug", "==", slug)
      );
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setCasestudy(doc.data());
    });
    setContent(querys.docs.map((doc) => ({...doc.data(), id:doc.id})));
    
  }, [collection]);
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <div className="banner max-w-screen-xl m-auto my-24 px-4 md:px-0 ">
        <div className=" ">
          <PageView src={casestudy?.image} crossorigin />
        </div>

        {/* <ph1 className="font-bold text-center m-auto text-2xl text-loose py-8">{casestudy.title} </ph1> --> */}
      </div>
      <div path="/casestudies">
        {content.filter((r)=>r.slug !== slug).slice(0,3).map((r, id) => (
            <Casestudycard
              key={id}
              thumb={r.thumb}
              title={r.title}
              snippet={r.snippet}
              slug={r.slug}
            />
          ))}
      </div>
    </>
  );
}

export default Casestudy;
