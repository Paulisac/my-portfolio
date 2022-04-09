import { NavLink } from "react-router-dom"

function Casestudycard({title,snippet, thumb, slug}) {

    return <> 
   
    <NavLink to={"/case-studies/" + slug} onContextMenu={(e)=>{e.preventDefault()}} className="Casestudycard col-span-4 rounded shadow h-96">
    <div className="h-4/6 bg-gray-100">
        <img className="w-full h-full object-cover" src={thumb} alt="" />
    </div>
    <div className="h-1/3 p-4">
        <h1 className="font-medium text-xl leading-loose">{title}</h1>
        <p className="text-base">{snippet}</p>
    </div>
    
    </NavLink>
    </>
}


export default Casestudycard