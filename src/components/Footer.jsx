function Footer() {
    return (
        <footer className="bg-black h-1/6 p-11 w-screen flex items-center justify-between text-white text-xs md:text-sm">
            <div className="icones flex flex-col gap-3 ">
                <div className="w-6/12 flex gap-2">
                    <img className="w-7" src="images/icons/github.png" alt="icone-github" />
                    <p><a className="hover:underline cursor-pointer" href="https://github.com/Julianagft">GitHub</a></p>
                </div>
                <div className="w-6/12 flex gap-2">
                    <img className="w-7" src="images/icons/linkedin.png" alt="icone-github" />
                    <p><a className="hover:underline cursor-pointer" href="https://www.linkedin.com/in/juliana-campos-rodrigues/">Linkedin</a></p>
                </div>
            </div>  

            <div className="flex justify-end">
                <p className="text-end block w-44">Design e criação por <a className="hover:underline cursor-pointer" href="https://github.com/Julianagft">Maria Juliana Rodrigues</a>.</p>
            </div>
            
        </footer>
    )
}

export default Footer;