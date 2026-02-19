export function LeftBarClassesSkeleton() {
    return (
        <div className="flex flex-col gap-1 px-2 py-2 flex-1">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="
            h-12 rounded-lg
            bg-[hsl(var(--muted))] 
            animate-pulse
          "
                />
            ))}
        </div>
    )
}
