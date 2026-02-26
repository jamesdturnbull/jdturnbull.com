import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPostBySlug, getSortedPostsData } from '../../../lib/blog'
import { NewsletterSignup } from '../../../components/NewsletterSignup'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    }
  } catch {
    return { title: 'Post Not Found' }
  }
}

export function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  let post

  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  const allPosts = getSortedPostsData()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const components = {
    h1: (props: any) => <h1 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6 leading-tight" {...props} />,
    h2: (props: any) => <h2 className="text-2xl lg:text-3xl font-bold text-primary-900 mt-8 mb-4 leading-tight" {...props} />,
    h3: (props: any) => <h3 className="text-xl lg:text-2xl font-semibold text-primary-900 mt-6 mb-3" {...props} />,
    p: (props: any) => <p className="mb-4 leading-relaxed text-primary-700" {...props} />,
    a: (props: any) => <a className="text-accent-600 hover:text-accent-700 font-medium underline decoration-2 underline-offset-2 transition-colors" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
    li: (props: any) => <li className="leading-relaxed text-primary-700" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-accent-200 pl-6 italic text-primary-600 my-6" {...props} />,
    strong: (props: any) => <strong className="font-semibold text-primary-900" {...props} />,
  }

  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="mb-4">
            <Link href="/blog" className="text-accent-600 hover:text-accent-700 font-medium text-sm">
              ← Back to Blog
            </Link>
          </div>
          {post.sector && (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-accent-100 text-accent-800 rounded-full mb-4 capitalize">
              {post.sector.replace('-', ' ')}
            </span>
          )}
          <h1 className="text-3xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-sm text-primary-500 border-b border-primary-200 pb-6">
            <time>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
            <span>5 min read</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>

        <div className="mt-12 bg-accent-50 border border-accent-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-primary-900 mb-3">
            Want to see what AI could do for your business?
          </h3>
          <p className="text-primary-600 mb-6">
            Book a free 30-minute discovery call. No pitch, no pressure, just a practical conversation about where AI could help most.
          </p>
          <Link 
            href="https://cal.com/james-turnbull/30min" 
            target="_blank"
            className="btn btn-primary"
          >
            Book Your Free Call →
          </Link>
        </div>

        <div className="mt-12 bg-primary-50 rounded-xl p-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Want more like this?</h3>
            <p className="text-primary-600 mb-6 text-sm">
              Get practical AI insights for your business. One email a week. No jargon, no fluff.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        {(previousPost || nextPost) && (
          <nav className="mt-12 pt-8 border-t border-primary-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {previousPost && (
                <div>
                  <p className="text-sm text-primary-500 mb-2">Previous Post</p>
                  <Link 
                    href={`/blog/${previousPost.slug}`}
                    className="text-lg font-semibold text-primary-900 hover:text-accent-600 transition-colors"
                  >
                    {previousPost.title}
                  </Link>
                </div>
              )}
              {nextPost && (
                <div className={previousPost ? 'text-right' : ''}>
                  <p className="text-sm text-primary-500 mb-2">Next Post</p>
                  <Link 
                    href={`/blog/${nextPost.slug}`}
                    className="text-lg font-semibold text-primary-900 hover:text-accent-600 transition-colors"
                  >
                    {nextPost.title}
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </article>
  )
}
