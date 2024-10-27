import type { MarkdownFileProps } from "@gotpop-platform/package-markdown"
import { mkClass, mkUrl, useCSS } from "@gotpop-platform/package-utilities"

import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

type ArticleComponentProps = {
  markdownFile: MarkdownFileProps
  layout: Record<string, string | number>
}

export function ArticleItem({ markdownFile, layout }: ArticleComponentProps): JSX.Element {
  const { css } = useCSS({
    meta: import.meta,
    styles: layout,
  })

  const {
    pageMetadata: { title, description, slug },
  } = markdownFile

  return (
    <article class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <a className="link-header" href={mkUrl(slug)}>
        <h3>
          <span>{title}</span>
        </h3>
      </a>
      <p>{description}</p>
    </article>
  )
}
