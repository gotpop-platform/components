import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { useCSS } from "@gotpop-platform/package-utilities"

export function MenuSide({ allPageMetadata }: { allPageMetadata: Map<string, any> }): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  const renderMenuItems = (metadata: Map<string, any>) => {
    return Array.from(metadata.entries()).map(([key, value]) => {
      if (value instanceof Map) {
        return (
          <li key={key}>
            <details id={key}>
              <summary>{key}</summary>
              <div class="content">
                <ul>{renderMenuItems(value)}</ul>
              </div>
            </details>
          </li>
        )
      } else {
        return (
          <li key={key}>
            <details id={key}>
              <summary>{value.title}</summary>
              <div class="content">
                <p>{value.description}</p>
                <a href={`/${value.slug}`}>Read Article</a>
              </div>
            </details>
          </li>
        )
      }
    })
  }

  return (
    <nav class="menu-side">
      <style>{css}</style>
      <ul>{renderMenuItems(allPageMetadata)}</ul>
    </nav>
  )
}
