import CodeEditor from '@/features/codeEditor/components/CodeEditor'
import React, { useState } from 'react'

const EditorShowroom = () => {
    const [code, setCode] = useState<string>(
  `print("Hello from Monaco")`
    )

    return (
      <div className="flex flex-col h-screen">
        <CodeEditor
          language="javascript"
          value={code}
          onChange={setCode}
        />
      </div>
    )
}

export default EditorShowroom