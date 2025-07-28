import Link from 'next/link';
import { notFound } from 'next/navigation';
import BackHomeButton from '../../components/BackHomeButton'

const projectData: Record<string, {
  title: string;
  description: string;
  tech: string[];
  details: string;
}> = {
  'tabelog-crawler': {
    title: '食べログ店舗情報クローラー(sample)',
    description: '特定地域の飲食店情報を自動収集し、CSV出力までを行うPythonベースのスクレイピングツール。',
    tech: ['Python', 'BeautifulSoup', 'pandas'],
    details: 'ユーザーが指定した地域に応じて、飲食店情報を自動でクロールし、CSVに保存します。カテゴリ・営業時間・予算なども取得対象。',
  },
  'job-crawler': {
    title: '求人情報の自動収集ツール(sample)',
    description: 'IndeedやGreenなど複数の求人サイトからキーワード検索による自動クロールと保存。',
    tech: ['Playwright', 'Node.js'],
    details: '週次で特定の求人情報を収集し、スプレッドシートに保存。正規表現による条件抽出や通知機能も。'
  },
  'price-monitor-bot': {
    title: '価格比較サイト自動更新ボット(sample)',
    description: '商品価格の変動を追跡し、Slackに通知する仕組み。',
    tech: ['Selenium', 'Slack API'],
    details: '一定時間ごとに対象URLの商品価格を比較し、変動があればSlackに自動通知。'
  }
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export default function ScrapingDetail({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug];

  if (!project) return notFound();

  return (
    <section className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 戻るボタン */}
        {/* <Link
          href="/scraping"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-indigo-700 font-semibold rounded-lg border-2 border-indigo-700
                     hover:bg-indigo-700 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          戻る
        </Link> */}

        <BackHomeButton href="/scraping" label="戻る" />
        

        <h1 className="text-4xl font-bold text-indigo-700 mb-6">{project.title}</h1>
        <p className="text-gray-700 text-lg mb-4">{project.description}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">技術スタック</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-2">詳細</h2>
        <p className="text-gray-700 leading-relaxed">{project.details}</p>
      </div>
    </section>
  );
}
