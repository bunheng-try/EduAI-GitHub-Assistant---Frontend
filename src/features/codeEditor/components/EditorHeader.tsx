import type { SupportedLanguage } from "../types/editor.types";

type Props = {
  language: SupportedLanguage;
};

export default function EditorHeader({ language }: Props) {
  return (
    <div
      style={{
        height: 40,
        background: "#1e1e1e",
        borderBottom: "1px solid #2d2d2d",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        color: "#ccc",
        fontSize: 13,
      }}
    >
      <span>{language.toUpperCase()}</span>
    </div>
  );
}
