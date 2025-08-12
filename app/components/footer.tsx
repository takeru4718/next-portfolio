// import Link from "next/link"

// const Footer=()=>{
//     return(
//         <footer className="flex items-center justify-center text-center bg-gray-800 h-auto py-8">
//             <div className="flex flex-col items-center justify-center md:mx-6 mb-4">
//                 <div className="flex items-center justify-center">
//                     <a href="https://github.com/takeru4718" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/github.svg" alt="logo"/></a>
//                     <a href="https://www.google.com/" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/linkedin.svg" alt="logo"/></a>
//                     <a href="https://www.google.com/" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/twitter.svg" alt="logo"/></a>
//                     <a href="https://www.google.com/" className="no-underline mx-6 text-white hover:opacity-80"><img className="w-12 h-12" src="/images/facebook.svg" alt="logo"/></a>
//                 </div>
//                 <hr className="my-4 w-full max-w-xs border-t-2 border-white"/>
//                 <div className="flex items-center justify-center mb-4">
//                     <Link className="no-underline mx-6 text-white hover:opacity-80" href="/blog">Blog</Link>
//                     <Link className="no-underline mx-6 text-white hover:opacity-80" href="/contact">Contact</Link>
//                 </div>
//                 <p className="text-white text-sm">©{new Date().getFullYear()}Hiragi Takeru</p>
//             </div>
//         </footer>
//     )
// }

// export default Footer

import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-center bg-gray-800 h-auto py-8">
      <div className="flex flex-col items-center justify-center md:mx-6 mb-4">
        <div className="flex items-center justify-center">
          {/* GitHub（有効リンク） */}
          <a
            href="https://github.com/takeru4718"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline mx-6 text-white hover:opacity-80"
            aria-label="GitHub (外部サイト)"
          >
            <img className="w-12 h-12" src="/images/github.svg" alt="GitHub" />
          </a>

          {/* 準備中アイコンのパターン（共通） */}
          <div className="relative group mx-6">
            <span
              className="opacity-50 cursor-not-allowed"
              role="img"
              aria-label="LinkedIn 準備中"
            >
              <img className="w-12 h-12" src="/images/linkedin.svg" alt="LinkedIn" />
            </span>

            {/* カスタムツールチップ */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 transition-opacity group-hover:opacity-100"
            >
              準備中
            </span>
          </div>

          <div className="relative group mx-6">
            <span
              className="opacity-50 cursor-not-allowed"
              role="img"
              aria-label="Twitter 準備中"
            >
              <img className="w-12 h-12" src="/images/twitter.svg" alt="Twitter" />
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 transition-opacity group-hover:opacity-100"
            >
              準備中
            </span>
          </div>

          <div className="relative group mx-6">
            <span
              className="opacity-50 cursor-not-allowed"
              role="img"
              aria-label="Facebook 準備中"
            >
              <img className="w-12 h-12" src="/images/facebook.svg" alt="Facebook" />
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 transition-opacity group-hover:opacity-100"
            >
              準備中
            </span>
          </div>
        </div>

        <hr className="my-4 w-full max-w-xs border-t-2 border-white" />

        <div className="flex items-center justify-center mb-4">
          <Link className="no-underline mx-6 text-white hover:opacity-80" href="/blog">Blog</Link>
          <Link className="no-underline mx-6 text-white hover:opacity-80" href="/contact">Contact</Link>
        </div>

        <p className="text-white text-sm">©{new Date().getFullYear()} Hiragi Takeru</p>
      </div>
    </footer>
  )
}

export default Footer
