function Summary({title,snippet}) {
    return <>
    <div className="Summary flex flex-col justify-center text-center py-16 px-4">
    <h1 className="font-black text-3xl leading-loose">{title} </h1>
    <p className="text-xl">{snippet}</p>
    </div>
    
    </>
}


export default Summary