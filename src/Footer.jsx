function Footer() {
    
    const tabClasses = 'mx-8 my-4 font-bold md:font-normal'

    return <> 

    <div className="Footer flex flex-col m-auto justify-center text-left py-12 sm:flex-row">
        <a href="mailto:luapteg@gmail.com" className={tabClasses} target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://www.linkedin.com/in/paul-isac-16213a148/" className={tabClasses} target="_blank" rel="noopener noreferrer">Linked In</a>
        <a href="https://dribbble.com/luapteg" className={tabClasses} target="_blank" rel="noopener noreferrer">Dribbble</a>
        <a href="https://www.behance.net/luapteg" className={tabClasses} target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://www.instagram.com/luapteg/" className={tabClasses} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com/luapteg" className={tabClasses} target="_blank" rel="noopener noreferrer">Twitter</a>
    </div>
    </>
}


export default Footer