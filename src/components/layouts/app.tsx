import { Head } from "../Head"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

interface AppProps {
  children?: string | JSX.Element | JSX.Element[]
  title: string
  scriptPaths: Record<string, string>[]
  Config: Record<any, any>
}

export const AppTheme = ({ title, scriptPaths, Config, children }: AppProps) => {
  const doc = "<!DOCTYPE html>"

  return (
    doc +
    (
      <html lang="en">
        <Head title={title} scriptPaths={scriptPaths} Config={Config} />
        <body class="body">{children}</body>
      </html>
    )
  )
}
