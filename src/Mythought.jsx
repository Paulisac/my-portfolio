import React from 'react'
import { NavLink } from 'react-router-dom';


function Mythought({title, snippet, time, slug}) {
    /* const days = Math.floor(((Date.now() / 1000) - (time.seconds)) / 60 /60 / 24);
    console.log(days); */
    const myDay = new Date( time.seconds *1000); 
    return (

        <div>
            <div className="mythought max-w-screen-sm m-auto mb-7">
                <NavLink to={"/notes/" + slug}  className="text-loose font-bold text-xl title ">{title} </NavLink>
                <p className="text-loose font-normal text-base py-2">{snippet}</p>
                <span className="text-loose font-base text-sm text-gray-500">Updated on {(myDay.toLocaleString()).split(' ')[0]}</span>
                {/* <span className="text-loose font-base text-sm text-gray-500">Updated {days ? `${days} day${days > 1 ? 's' : ''} ago` : 'today'}</span> */}
            </div>

        </div>
    )
}

export default Mythought
