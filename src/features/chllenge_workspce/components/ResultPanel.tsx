import { useState } from "react"

type Tab = "tests" | "custom"

export default function ResultPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("tests")
  const [collapsed, setCollapsed] = useState(false)
  const [customInput, setCustomInput] = useState("")
  const [output, setOutput] = useState("")

  const testCases = [
    {
      id: 1,
      input: "[1,2,4], [1,3,4]",
      expected: "[1,1,2,3,4,4]",
      output: "[1,1,2,3,4,4]",
      passed: true
    },
    {
      id: 2,
      input: "[1], [2]",
      expected: "[1,2]",
      output: "[1,2]",
      passed: true
    },
    {
      id: 3,
      input: "Hidden",
      expected: "Hidden",
      passed: false
    }
  ]

  if (collapsed) {
    return (
      <div className="border-t p-2 flex justify-end">
        <button onClick={() => setCollapsed(false)}>Expand</button>
      </div>
    )
  }

  return (
    <div className="border-t bg-white flex flex-col h-full">

      {/* header */}
      <div className="flex justify-between border-b p-2">

        <div className="flex gap-4">

          <button
            onClick={() => setActiveTab("tests")}
            className={activeTab === "tests" ? "font-bold" : ""}
          >
            Tests Result
          </button>

          <button
            onClick={() => setActiveTab("custom")}
            className={activeTab === "custom" ? "font-bold" : ""}
          >
            Custom
          </button>

        </div>

        <button onClick={() => setCollapsed(true)}>
          Collapse
        </button>

      </div>

      <div className="flex-1 overflow-auto p-3">

        {activeTab === "tests" && (
          <div className="space-y-3">

            {testCases.map((t) => (
              <div
                key={t.id}
                className={`border p-3 rounded ${
                  t.passed ? "bg-green-50" : "bg-red-50"
                }`}
              >
                <div><b>Input:</b> {t.input}</div>
                <div><b>Expected:</b> {t.expected}</div>

                {t.output && (
                  <div><b>Your Output:</b> {t.output}</div>
                )}

              </div>
            ))}

          </div>
        )}

        {activeTab === "custom" && (
          <div className="space-y-3">

            <textarea
              className="w-full border p-2"
              placeholder="Enter custom input"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
            />

            <div className="flex gap-2">

              <button
                onClick={() => setOutput(`Run with input:\n${customInput}`)}
                className="border px-3 py-1"
              >
                Run Code
              </button>

              <button
                onClick={() => setOutput("")}
                className="border px-3 py-1"
              >
                Clear
              </button>

            </div>

            <div className="bg-black text-white p-3 min-h-[80px]">
              {output || "Output will appear here"}
            </div>

          </div>
        )}

      </div>

    </div>
  )
}