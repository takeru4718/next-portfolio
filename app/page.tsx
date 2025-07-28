import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-6">
      <div className="max-w-4xl bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-12">
        {/* 左の写真 */}
        <div className="relative flex-shrink-0 w-56 h-56 rounded-full overflow-hidden shadow-lg border-8 border-white">
          <Image
            src="/images/irasuto_profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* 右のテキスト */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
            平木 尊
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            関西大学大学院　理工学研究科所属．  
            グラフ最適化について研究しています．
            Webプログラミングやスクレイピングやります．
            お肉食べるために，コード書いてます．
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* 有効なリンク */}
            <Link
              href="/scraping"
              className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
            >
              スクレイピング
            </Link>

            {/* 無効ボタンたち */}
            <div className="flex flex-wrap gap-4">
              {["Webサイト", "アプリ開発", "研究", "趣味"].map((label, idx) => (
                <div key={idx} className="relative group">
                  <button
                    disabled
                    className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full shadow cursor-not-allowed opacity-50"
                  >
                    {label}
                  </button>
                  {/* ボタンだけのhoverに限定 */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 rounded bg-pink-200 text-pink-900 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    💡 Coming Soon!
                  </div>
                </div>
              ))}
            </div>



            <Link
              href="/contact"
              className="px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
