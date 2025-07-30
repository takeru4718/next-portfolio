import { notFound } from 'next/navigation'
import { getSlugs, getBySlug } from '../../utils/mdScraping'
import { marked } from 'marked'
import BackHomeButton from '../../components/BackHomeButton'

export async function generateStaticParams() {
  const slugs = getSlugs('scraping')
  return slugs.map((slug) => ({ slug }))
}

export default async function ScrapingDetail({ params }: { params: { slug: string } }) {
  let post
  try {
    post = getBySlug('scraping', params.slug)
  } catch {
    return notFound()
  }

  const { frontmatter, content } = post
  const html = marked(content)

  return (
    <section className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <BackHomeButton href="/scraping" label="戻る" />

        <h1 className="text-4xl font-bold text-indigo-700 mb-6">{frontmatter.title}</h1>
        <p className="text-gray-700 text-lg mb-4">{frontmatter.description}</p>

        {frontmatter.tech?.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-8 mb-2">技術スタック</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tech.map((t: string, i: number) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </>
        )}

        <article
          className="prose prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  )
}
