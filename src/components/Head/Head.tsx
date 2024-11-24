import { Config } from "../../../../../sites/site-baseline/src/config"
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
  scriptPaths: Record<string, string>[]
}) => {
  const baseStylePath = "/assets/styles/index.css"

  const renderScripts = (scripts: Record<string, string>[]) => {
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
      {process.env.NODE_ENV === "development" ? (
        <script>
          {`
          const ws = new WebSocket('ws://localhost:${Config.SERVER.PORT}');
          
          ws.onmessage = (event) => {
            console.log('🔄 Reloading page...');
            window.location.reload(true);
          };
          
          ws.onclose = () => {
            console.log('WebSocket disconnected');
            // Try to reconnect after a delay
            setTimeout(() => {
              window.location.reload(true);
            }, 1000);
          };
        `}
        </script>
      ) : null}
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
