import { AVATAR_GRADIENTS } from "../../Students.data"

interface AvatarProps {
  name: string
  initials: string
}

export default function Avatar({ name, initials }: AvatarProps) {
  const index = (name.charCodeAt(0) || 0) % AVATAR_GRADIENTS.length

  return (
    <div
      className={`w-9 h-9 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[index]} flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm`}
    >
      {initials}
    </div>
  )
}