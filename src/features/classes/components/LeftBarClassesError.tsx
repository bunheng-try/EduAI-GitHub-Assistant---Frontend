type Props = {
    onRetry?: () => void
}

export function LeftBarClassesError({ onRetry }: Props) {
    return (
        <div className="flex flex-col items-center justify-center flex-1 px-3 text-center">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Failed to load classes
            </p>

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="
            mt-2 text-xs font-medium
            text-[hsl(var(--primary))]
            hover:underline
          "
                >
                    Retry
                </button>
            )}
        </div>
    )
}
