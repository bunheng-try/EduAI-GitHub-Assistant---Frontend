import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { useEditorLogic } from '../hooks/logic/useEditor';
import { DEFAULT_LANGUAGE, DEFAULT_THEME } from '@/shared/constansts/editor';
import { ButtonPrimary } from '@/shared/components/design/button';

export const CodeEditor = () => {
  const { run, job, isRunning, isPolling } = useEditorLogic();
  const [code, setCode] = useState('');

  return (
    <div className="flex h-screen flex-col bg-slate-950">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2">
        <span className="text-sm font-semibold text-slate-200">
          Code Editor
        </span>

        <ButtonPrimary
          onClick={() => run({ language: DEFAULT_LANGUAGE, code })}
          disabled={isRunning || isPolling}
        >
          {isRunning ? 'Running…' : 'Run'}
        </ButtonPrimary>
      </div>

      {/* Editor */}
      <div className="flex-1">
        <Editor
          language={DEFAULT_LANGUAGE}
          theme={DEFAULT_THEME}
          value={code}
          onChange={(v) => setCode(v ?? '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
          }}
        />
      </div>

      {/* Output */}
      <div className="max-h-48 overflow-auto border-t border-slate-800 bg-black px-4 py-3 text-sm">
        {isPolling && (
          <p className="text-yellow-400">Running…</p>
        )}

        {job?.state === 'completed' && (
          <pre className="whitespace-pre-wrap text-green-400">
            {job.result || 'No output'}
          </pre>
        )}

        {job?.state === 'failed' && (
          <pre className="text-red-400">
            Execution failed
          </pre>
        )}
      </div>
    </div>
  );
};
