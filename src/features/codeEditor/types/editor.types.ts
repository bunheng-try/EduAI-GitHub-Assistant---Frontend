export type SupportedLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "java";

export interface CodeEditorProps {
  value: string;
  language: SupportedLanguage;
  onChange: (code: string) => void;
  readOnly?: boolean;
}
