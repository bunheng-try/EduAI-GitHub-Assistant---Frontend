import { useState, useEffect, useRef } from "react"
import { Link2, AlertCircle, Copy, Check } from "lucide-react"
import { FormDialog } from "../dialog"
import { CLASS_CODE } from "../../../../features/class/Students.data"

interface InviteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onInvite: (name: string) => { success: boolean; error?: string }
}

export default function InviteDialog({
  open,
  onOpenChange,
  onInvite,
}: InviteDialogProps) {
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [open])

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setName("")
      setError("")
      setCopied(false)
    }
    onOpenChange(nextOpen)
  }

  const handleSubmit = () => {
    const result = onInvite(name)

    if (!result.success) {
      setError(result.error ?? "Something went wrong.")
      return
    }

    handleOpenChange(false)
  }

  const handleCopy = () => {
    navigator.clipboard?.writeText(CLASS_CODE).catch(() => {})
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <FormDialog
      open={open}
      onOpenChange={handleOpenChange}
      title="Add Students"
      onSubmit={handleSubmit}
      submitText="Add"
      cancelText="Cancel"
    >
      <div className="space-y-4 py-4">
        {/* Name input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Student Name
          </label>

          <input
            ref={inputRef}
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setError("")
            }}
            placeholder="Enter student email"
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border outline-none transition-all
              ${
                error
                  ? "border-red-400 ring-2 ring-red-100"
                  : "border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              }`}
          />

          {error && (
            <p className="flex items-center gap-1.5 mt-2 text-xs text-red-500">
              <AlertCircle size={13} className="shrink-0" />
              {error}
            </p>
          )}
        </div>

        {/* Class code */}
        <div className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
              <Link2 size={16} className="text-violet-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700">
                Or Copy Class Code
              </p>
              <p className="text-xs text-gray-500 font-mono">
                {CLASS_CODE}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 shrink-0"
          >
            {copied ? (
              <Check size={13} className="text-emerald-500" />
            ) : (
              <Copy size={13} />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </FormDialog>
  )
}
