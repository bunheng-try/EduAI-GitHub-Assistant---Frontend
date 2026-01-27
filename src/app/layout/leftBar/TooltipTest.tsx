import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip"

export default function TooltipTest() {
  return (
    <div className="p-20">
      <Tooltip>
        <TooltipTrigger>
          <button className="bg-red-500 text-white px-4 py-2">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent className="bg-black text-white">
          TEST TOOLTIP
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
