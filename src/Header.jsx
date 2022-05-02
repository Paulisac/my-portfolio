import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

function Header() {

    const tabClasses = 'px-8 py-2 font-medium my-6 mx-8 sm:mx-2 rounded navlink text-gray-700 w-max '

    const [isNavOpen, toggleNav] = useState(false)
   

    useEffect(() => {
        if(isNavOpen) {
            $('body').addClass('scroll-disable')
        } else {
            $('body').removeClass('scroll-disable')
        }
    }, [isNavOpen])

    return <>
        <div className="header flex sm:justify-center justify-end m-auto ">
            <div className="float-right menuicon p-12 sm:hidden visible"><button className=" text-3xl  " onClick={() => { toggleNav(!isNavOpen) }}>
                {isNavOpen ? 'X' : '☰'}
                </button></div>

            <div className={`navg flex-wrap container justify-center sm:flex-row  sm:items-center sm:flex hidden sm:bg-white ${isNavOpen ? 'visible' : ''}`}>
                <NavLink onClick={()=>{toggleNav(false)}} to="/" className={tabClasses}>Case Studies</NavLink>
                <NavLink onClick={()=>{toggleNav(false)}} to="/notes" className={tabClasses}>Notes</NavLink>
                <NavLink onClick={()=>{toggleNav(false)}} to="/display" className={tabClasses}>Display</NavLink>
                <NavLink onClick={()=>{toggleNav(false)}} to="/about" className={tabClasses}>About</NavLink>
            </div>
        </div>
    </>
}



export default Header
