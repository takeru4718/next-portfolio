import Link from 'next/link'
import Image from "next/image"
import profilePic from "/public/images/profile.jpg"
import heroPic from "/public/images/gausu2.png"

export const metadata={
  title: "Hiragi Takeru",
  description: "Hiragi Takeruのポートフォリオサイトです"
}

export default function Home(){
  return(
    <>
      <div className="hero text-center relative">
        <Image className="max-h-350 w-full object-cover" src={heroPic} alt="hero" />
        <div className="textContainer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gray-500 bg-opacity-80 px-6 md:px-8 py-4 rounded-md md:text-center md:w-96 lg:w-120 xl:w-96 lg:p-4 lg:pb-6">
          <h1 className="text-4xl md:text-2xl lg:text-4xl font-medium mb-2">平木 尊</h1>
          <h3 className="text-3xl md:text-2xl lg:text-3xl font-medium m-0">ポートフォリオ</h3>
        </div>
     </div>

     
     <div className="container mx-auto px-4 md:px-10 lg:px-64 ">
     {/* className="profile py-10 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center" */}
      <div className="profile py-10 md:py-16 lg:py-20 grid justify-items-center md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left md:w-80 lg:w-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Web Developer(予定)</h2>
          <p className="text-base md:text-lg">
            はじめまして!関西大学 システム理工学部 電気電子情報工学科に在籍している平木 尊です。
            学業の傍ら、アルバイトでweb系のプログラミングに携わっています(予定)。
            プログラミングは私の趣味でもあり、技術を磨くために日々勉強しています。
            また、ゲームや読書、スポーツ観戦も大好きで、多様な趣味を持っています。
            新しいプロジェクトに取り組むことに情熱を持ち、常に成長し続けることを目指しています。
            どうぞよろしくお願いします!
          </p>
        </div>
        <div>
          <Image className="w-full h-72 md:h-96 object-cover" src={profilePic} alt="hero" />
        </div>
      </div>

      <div className="skills py-10 md:py-16 lg:py-10">
        <h2 className="text-center mb-8 md:mb-14 font-medium text-2xl md:text-3xl lg:text-4xl">Skills</h2>
        <div className="skillsContainer py-10 grid grid-cols-2 md:grid-cols-2 gap-y-12 md:gap-x-8">
          <div className="flex items-center gap-4 font-medium ">
            <img className="w-24" src="/images/javascript.svg" alt="javascript"/>
            <span>JavaScript / 1 years</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <img className="w-24" src="/images/react.svg" alt="react"/>
            <span>React / 3 months</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <img className="w-24" src="https://skillicons.dev/icons?i=c&theme=light" alt="gatsby"/>
            <span>C / 3 years</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <img className="w-24" src="/images/next.svg" alt="next"/>
            <span>Next.JS / 1 month</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <img className="w-24" src="https://skillicons.dev/icons?i=typescript&theme=light" alt="next"/>
            <span>typescript / 1 month</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <img className="w-24" src="https://skillicons.dev/icons?i=python&theme=light" alt="next"/>
            <span>python / 1 year</span>
          </div>
        </div>
      </div>
      <div className="ctaButton py-10 text-center">
        <Link href="contact" className="inline-block my-10 px-12 py-3 bg-red-500 rounded-full text-white hover:opacity-80 text-decoration-none">お問い合わせ</Link>
      </div>
    </div>

    </>
  )
}