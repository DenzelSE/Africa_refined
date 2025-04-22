import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { newsArticles } from "../../config/news"
import { notFound } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { MDXRemote } from "next-mdx-remote/rsc"

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    id: article.id,
  }))
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = newsArticles.find((a) => a.id === params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/news" className="flex items-center text-amber-700 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
            </Link>
          </div>

          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
            <Image src={article.imageUrl || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-amber-700 mb-6">{article.date}</p>

          <Separator className="mb-8" />

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={article.content} />
          </div>

          <div className="mt-12">
            <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
              <Link href="/news">Back to All News</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
