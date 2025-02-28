"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodePreviewProps {
  code: string
}

export function CodePreview({ code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)
  const [displayedCode, setDisplayedCode] = useState("")
  const controls = useAnimation()

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const typeCode = async () => {
      const lines = code.split("\n")
      for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j <= lines[i].length; j++) {
          setDisplayedCode(
            (prev) => prev.split("\n").slice(0, i).join("\n") + (i > 0 ? "\n" : "") + lines[i].slice(0, j),
          )
          await new Promise((resolve) => setTimeout(resolve, 10)) // Adjust typing speed here
        }
        if (i < lines.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 100)) // Pause between lines
        }
      }
    }

    typeCode()
  }, [code])

  return (
    <div className="relative group rounded-lg overflow-hidden">
      <div className="absolute right-4 top-4 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="relative text-slate-400 hover:text-slate-100"
        >
          <Copy className="h-4 w-4" />
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-12 -left-4 px-2 py-1 rounded bg-slate-800 text-slate-200 text-xs whitespace-nowrap"
            >
              Copied!
            </motion.div>
          )}
        </Button>
      </div>
      <motion.div animate={controls}>
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
          }}
          showLineNumbers={true}
          wrapLines={true}
        >
          {displayedCode}
        </SyntaxHighlighter>
      </motion.div>
    </div>
  )
}

