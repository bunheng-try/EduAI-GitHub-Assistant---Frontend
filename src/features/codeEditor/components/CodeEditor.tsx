import Editor from "@monaco-editor/react";
import EditorHeader from "./EditorHeader";
import type { CodeEditorProps } from "../types/editor.types";

export default function CodeEditor({
  value,
  language,
  onChange,
  readOnly = false,
}: CodeEditorProps) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#1e1e1e",
        borderRadius: 6,
        overflow: "hidden",
      }}
    >
      <EditorHeader language={language} />

      <div style={{ flex: 1 }}>
        <Editor
          theme="vs-dark"
          defaultLanguage={language}
          language={language}
          value={value}
          onChange={(v) => onChange(v || "")}
          options={{
            readOnly,
            fontSize: 14,
            fontFamily:
              "JetBrains Mono, Fira Code, Consolas, monospace",
            minimap: { enabled: false },
            padding: { top: 12 },
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}
