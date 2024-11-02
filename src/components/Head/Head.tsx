import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

export const Head = ({ title }: { title: string }) => {
  const baseStylePath = "/assets/styles/index.css"

  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="author" content="GotPop"></meta>
      <title>{title}</title>
      <link rel="icon" href="/assets/img/favicon.png" />
      <link rel="stylesheet" href={baseStylePath} />
      {/* <script type="module" src="/assets/js/HeroItem.js"></script> */}
      <script type="module" src="/assets/js/script.js"></script>
      <script>CSS.paintWorklet.addModule('/assets/js/grid.js');</script>
      {process.env.NODE_ENV === "production" ? (
        <script type="speculationrules">
          {`{
            "prerender": [
              {
                "urls": [
                  "/", 
                  "features/feature-1", 
                  "features/feature-2", 
                  "features/feature-3", 
                  "features/feature-4", 
                  "features/feature-5", 
                  "features/feature-6",
                  "features",
                  "docs",
                  "components",
                ]
              }
            ]
        }`}
        </script>
      ) : null}
    </head>
  )
}
