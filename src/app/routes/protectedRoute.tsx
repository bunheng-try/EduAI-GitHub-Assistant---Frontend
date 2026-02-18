import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/autStore";

type ProtectedRouteProps = {
    children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const token = useAuthStore((state) => state.token);

    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    return <>{children}</>;
}
