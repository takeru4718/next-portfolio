import Link from "next/link"
import Image from "next/image"
import logoImg from "../icon.ico"

export default function Header(){
    return(
        <header className="sticky top-0 w-full z-10 bg-white">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
                <div className="flex flex-row flex-wrap items-center h-16 md:h-16 lg:h-16">
                    <Link className="text-inherit font-medium text-decoration-none" href="/">
                        <Image className="w-12 h-12 md:w-16 md:h-16" src={logoImg} alt="logo"/>
                    </Link>
                    <ul className="list-none m-0 p-0 flex-grow flex justify-end">
                        <li className="inline-block ml-4 md:ml-6 lg:ml-8"><Link className="text-inherit font-medium text-decoration-none" href="/blog">Blog</Link></li>
                        <li className="inline-block ml-4 md:ml-6 lg:ml-8"><Link className="text-inherit font-medium text-decoration-none" href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}