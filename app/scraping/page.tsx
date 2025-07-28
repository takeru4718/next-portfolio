import Link from 'next/link';
import BackHomeButton from '../components/BackHomeButton'

export const metadata = {
  title: 'スクレイピング | 平木 尊のポートフォリオ',
  description: 'スクレイピングを用いたプロジェクト紹介ページ',
};

export default function ScrapingPortfolio() {
  const projects = [
    {
      slug: 'tabelog-crawler',
      title: '食べログ店舗情報クローラー(sample)',
      description: '特定地域の飲食店情報を自動収集し、CSV出力までを行うPythonベースのスクレイピングツール。',
      tech: ['Python', 'BeautifulSoup', 'pandas'],
    },
    {
      slug: 'job-crawler',
      title: '求人情報の自動収集ツール(sample)',
      description: 'IndeedやGreenなど複数の求人サイトからキーワード検索による自動クロールと保存。',
      tech: ['Playwright', 'Node.js'],
    },
    {
      slug: 'price-monitor-bot',
      title: '価格比較サイト自動更新ボット(sample)',
      description: '商品価格の変動を追跡し、Slackに通知する仕組み。',
      tech: ['Selenium', 'Slack API'],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <BackHomeButton label="ホームに戻る" href="/"/>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">スクレイピングポートフォリオ</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 transition hover:shadow-xl">
              <Link href={`/scraping/${project.slug}`}>
                <h2 className="text-2xl font-semibold text-indigo-700 mb-2 hover:underline">
                  {project.title}
                </h2>
              </Link>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span key={j} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
