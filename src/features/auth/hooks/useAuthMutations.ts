// features/auth/hooks/useAuthMutations.ts
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../apis/auth.api";
import { useNavigate } from "react-router-dom";

export const useAuthMutations = () => {
  const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationFn: authApi.signIn,
    onSuccess: (data) => {
      // Store token (in real app, use localStorage or context)
      console.log("Signed in:", data);
      navigate("/"); // Redirect to dashboard
    },
  });

  const signUpMutation = useMutation({
    mutationFn: authApi.signUp,
    onSuccess: (data) => {
      console.log("Signed up:", data);
      navigate("/"); // Redirect to dashboard
    },
  });

  return {
    signIn: signInMutation.mutateAsync,
    signUp: signUpMutation.mutateAsync,
    isLoading: signInMutation.isPending || signUpMutation.isPending,
    error: signInMutation.error || signUpMutation.error,
  };
};