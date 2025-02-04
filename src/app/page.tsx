import {articles} from "@/data/mock";
import ArticlePreview from "@/components/article-preview";

export default function Home() {
  return (
    <div>
      <section className={'p-5 px-10 flex flex-col gap-10 sm:grid grid-cols-2 lg:grid-cols-3'}>
        {articles.map(article => (
          <ArticlePreview
            previewImageUrl={article.previewImageUrl}
            title={article.title}
            content={article.content}
            publishedAt={article.publishedAt}
            id={article.id}
            key={article.id}
          />
        ))}
      </section>
    </div>
  )
}
