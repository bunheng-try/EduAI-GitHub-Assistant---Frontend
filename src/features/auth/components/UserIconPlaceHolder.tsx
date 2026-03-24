import { getInitials } from '@/shared/utils/strings'
import { cn } from '@/lib/utils'

interface UserIconPlaceHolderProps {
    text: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    shape?: 'circle' | 'rounded' | 'square'
    bgColor?: string
    className?: string
}

const sizeMap = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base',
    xl: 'h-12 w-12 text-lg',
}

const shapeMap = {
    circle: 'rounded-full',
    rounded: 'rounded-md',
    square: 'rounded-none',
}

const UserIconPlaceHolder = ({
    text,
    size = 'lg',
    shape = 'circle',
    bgColor = 'bg-[hsl(var(--primary))]',
    className,
}: UserIconPlaceHolderProps) => {
    const initials = getInitials(text)

    return (
        <div
            className={cn(
                'flex items-center justify-center font-semibold text-[hsl(var(--primary-foreground))]',
                sizeMap[size],
                shapeMap[shape],
                bgColor,
                className
            )}
        >
            {initials}
        </div>
    )
}

export default UserIconPlaceHolder