import "./globals.css";

import Header from "./components/header"
import Footer from "./components/footer"

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return(
    <html lang="jp" >
      <body className="font-sans font-normal text-base text-black antialiased bg-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}