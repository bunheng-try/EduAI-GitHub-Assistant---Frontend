import Spinner from "./Spinner";

interface LoadingProps {
    size?: number;
    message?: string;
    className?: string;
}

export default function Loading({ size = 40, message, className = "" }: LoadingProps) {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
            <Spinner size={size} />
            {message && <span className="text-sm text-gray-500">{message}</span>}
        </div>
    );
}