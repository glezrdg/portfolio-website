"use client";

import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodePreviewProps {
  code: string;
}

export function CodePreview({ code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [displayedCode, setDisplayedCode] = useState("");
  const controls = useAnimation();

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const typeCode = async () => {
      // Wait 1.5 seconds before starting
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const lines = code.split("\n");
      for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j <= lines[i].length; j++) {
          setDisplayedCode(
            (prev) =>
              prev.split("\n").slice(0, i).join("\n") +
              (i > 0 ? "\n" : "") +
              lines[i].slice(0, j)
          );
          // Delay for each character
          await new Promise((resolve) => setTimeout(resolve, 10));
        }

        // Extra delay between lines
        if (i < lines.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    };

    typeCode();
  }, [code]);

  return (
    <div className="relative group rounded-lg overflow-hidden w-full">
      {/* Copy button */}
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

      {/* Larger SyntaxHighlighter for lg and up */}
      <div className="hidden lg:block">
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
            codeTagProps={{
              style: {
                fontSize: "1rem",
              },
            }}
            // wrapLines={true}
          >
            {displayedCode}
          </SyntaxHighlighter>
        </motion.div>
      </div>

      {/* Smaller SyntaxHighlighter for mobile (below lg) */}
      <div className="block lg:hidden !text-xs sm:text-sm w-full">
        <motion.div animate={controls}>
          <SyntaxHighlighter
            language="jsx"
            style={materialDark}
            showLineNumbers={true}
            customStyle={{
              margin: 0,
              padding: "0rem",
              background: "transparent",
              width: "100%",
              boxSizing: "border-box",
              lineHeight: "15px",
            }}
            codeTagProps={{
              style: {
                fontSize: "10px",
              },
            }}
          >
            {displayedCode}
          </SyntaxHighlighter>
        </motion.div>
      </div>
    </div>
  );
}
