import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

interface ScriptPath {
  entryPoint: string
  hashedPath: string
  type: "script" | "worklet"
}

export const Head = ({
  title,
  scriptPaths,
}: {
  title: string
  scriptPaths: Record<string, string>
}) => {
  const baseStylePath = "/assets/styles/index.css"
  // console.log("scriptPaths >>>>>>>:", scriptPaths)

  const renderScripts = (scripts: Record<string, string>) => {
    return scripts.map((script) => {
      if (script.type === "worklet") {
        return <script>{`CSS.paintWorklet.addModule('${script.hashedPath}');`}</script>
      }
      return <script type="module" src={script.hashedPath} />
    })
  }

  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="author" content="GotPop"></meta>
      <title>{title}</title>
      <link rel="icon" href="/assets/img/favicon.png" />
      <link rel="stylesheet" href={baseStylePath} />
      {renderScripts(scriptPaths)}
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
