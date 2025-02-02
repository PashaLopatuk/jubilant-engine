import {} from 'react'

import type {FC} from 'react'
import {IArticle} from "@/lib/models/article";
import Image from "next/image";
import Link from "next/link";
import {articleRoute} from "@/lib/routing-links";
import {Badge} from "@/components/ui/badge";
import {dater} from "@/lib/dates";


type PropsType = {} & IArticle

const ArticlePreview: FC<PropsType> = (
  {
    content, publishedAt, title, id, previewImageUrl
  }
) => {

  return (
    <Link
      href={articleRoute(id)}
    >
      <article>
        <Image
          alt={''}
          src={previewImageUrl}
          blurDataURL={previewImageUrl}
          loading={'lazy'}
          placeholder={'blur'}
          width={1000}
          height={1000}
          className='w-full aspect-[4/3] object-cover'
        />
        <div className={'p-2'}>
          <span className={'text-sm font-medium text-accent-foreground'}>{
            dater({date: publishedAt})
          }</span>
          <h3 className={'font-semibold text-xl py-1'}>{title}</h3>
          <p className={'text-muted-foreground '}>{content.slice(0, 100)}</p>
        </div>
      </article>
    </Link>
  )
}

export default ArticlePreview