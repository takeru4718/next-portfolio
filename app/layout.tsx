import "./globals.css";

import Header from "./components/header"
import Footer from "./components/footer"

export const metadata = {
  title: '平木 尊 | ポートフォリオ',
  description:
    '関西大学大学院所属｜Web開発・スクレイピング・最適化研究などに取り組む平木 尊のポートフォリオサイトです。',
  keywords: ['平木 尊', 'ポートフォリオ', '関西大学', 'スクレイピング', 'Web開発', '最適化', '研究'],
  authors: [{ name: '平木 尊', url: 'https://next-portfolio-peach-pi.vercel.app/' }],
  creator: '平木 尊',
  openGraph: {
    title: '平木 尊 | ポートフォリオ',
    description:
      '関西大学大学院所属｜Web開発・スクレイピング・最適化研究などに取り組む平木 尊のポートフォリオサイトです。',
    url: 'https://next-portfolio-peach-pi.vercel.app/',
    siteName: 'Hiragi Takeru Portfolio',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '平木 尊のポートフォリオ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '平木 尊 | ポートフォリオ',
    description:
      '関西大学大学院所属｜Web開発・スクレイピング・最適化研究などに取り組む平木 尊のポートフォリオサイトです。',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return(
    <html lang="ja">
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