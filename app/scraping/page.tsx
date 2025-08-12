import Link from 'next/link';
import BackHomeButton from '../components/BackHomeButton';
import Image from 'next/image';
import { getSlugs, getBySlug } from '../utils/mdScraping';

export const metadata = {
  title: 'スクレイピング | 平木 尊のポートフォリオ',
  description: 'スクレイピングを用いたプロジェクト紹介ページ',
};

export default function ScrapingPortfolio() {
  const slugs = getSlugs('scraping'); // ← カテゴリ名を指定
  const projects = slugs.map((slug) => {
    const { frontmatter } = getBySlug('scraping', slug); // ← 同じく
    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      tech: frontmatter.tech || [],
      image: frontmatter.image || null,
    };
  });

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <BackHomeButton label="ホームに戻る" href="/" />
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">スクレイピングポートフォリオ</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-xl shadow-lg p-6 transition hover:shadow-xl"
            >
              <Link href={`/scraping/${project.slug}`}>
                <h2 className="text-2xl font-semibold text-indigo-700 mb-2 hover:underline">
                  {project.title}
                </h2>
              </Link>

              {project.image && (
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={`${project.title}の画像`}
                    width={300}
                    height={180}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full"
                  >
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
