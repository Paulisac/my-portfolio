function Collections({image1,image2,image3,title,snippet,snippet1,snippet2,snippet3,isReverse}) {

    return <>
    <div onContextMenu={(e)=>{e.preventDefault()}} className={'collections sm:grid-col-1 grid md:grid-cols-12 md:gap-x-12 max-w-screen-xl m-auto my-28 pb-8'} style={{direction: isReverse ? 'rtl' : 'ltr'}}>
        <div className="col-span-6 px-4 md:px-0"><img src={image1} className="" alt=""/></div>
        <div className=" col-span-6">
            <div className="col-span-6  grid grid-cols-2 md:gap-x-12 pt-4 md:pt-0">
                <div className=" col-span-1  pr-2 pl-4 md:px-0"><img alt="_" src={image2}/></div>
                <div className=" col-span-1  pr-4 pl-2 md:px-0"><img alt="_" src={image3}/></div>
            </div>
            <div className="col-span-6 py-4 px-4 md:px-0" style={{direction: 'ltr'}}>
                <h1 className="font-semibold text-lg py-1">{title}</h1>
                <p className="text-base py-1">{snippet}</p>
                <p className="text-base py-1">{snippet1}</p>
                <p className="text-base py-1">{snippet2}</p>
                <p className="text-base py-1">{snippet3}</p>
            </div>
        </div>
    </div>
    </>
}


export default Collections