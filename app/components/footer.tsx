import Link from "next/link"

const Footer=()=>{
    return(
        <footer className="flex items-center justify-center text-center bg-gray-800 h-auto py-8">
            <div className="flex flex-col items-center justify-center md:mx-6 mb-4">
                <div className="flex items-center justify-center">
                    <a href="https://github.com/takeru4718" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/github.svg" alt="logo"/></a>
                    <a href="https://www.google.com/" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/linkedin.svg" alt="logo"/></a>
                    <a href="https://www.google.com/" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/twitter.svg" alt="logo"/></a>
                    <a href="https://www.google.com/" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/facebook.svg" alt="logo"/></a>
                </div>
                <hr className="my-4 w-full max-w-xs border-t-2 border-white"/>
                <div className="flex items-center justify-center mb-4">
                    <Link className="no-underline mx-6 text-white hover:opacity-80" href="/blog">Blog</Link>
                    <Link className="no-underline mx-6 text-white hover:opacity-80" href="/contact">Contact</Link>
                </div>
                <p className="text-white text-sm">©{new Date().getFullYear()}Hiragi Takeru</p>
            </div>
        </footer>
    )
}

export default Footer