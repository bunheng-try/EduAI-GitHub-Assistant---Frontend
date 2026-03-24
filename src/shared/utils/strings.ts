export function getInitials(name: string): string {
    return name
        .trim()
        .split(" ")
        .filter(Boolean)
        .map(n => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}