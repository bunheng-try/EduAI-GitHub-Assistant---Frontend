import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../apis/auth.api";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await authApi.signup( name, email, password );
            navigate("/signin");
        } catch (err: any) {
            setError(err.response?.data?.message || err.message || "Sign up failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))]">
            <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-[hsl(var(--card))] animate__animated animate__fadeIn">
                <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))] text-center">
                    Sign Up
                </h2>

                {error && (
                    <div className="mb-4 p-2 rounded bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] font-semibold animate__animated animate__shakeX">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-3 rounded-md border border-[hsl(var(--input))] focus:ring-2 focus:ring-[hsl(var(--ring))] bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-3 rounded-md border border-[hsl(var(--input))] focus:ring-2 focus:ring-[hsl(var(--ring))] bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="p-3 rounded-md border border-[hsl(var(--input))] focus:ring-2 focus:ring-[hsl(var(--ring))] bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="p-3 rounded-md bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:bg-[hsl(var(--ring))] transition disabled:opacity-50"
                    >
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center text-[hsl(var(--muted-foreground))]">
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/signin")}
                        className="text-[hsl(var(--primary))] font-semibold hover:underline"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}