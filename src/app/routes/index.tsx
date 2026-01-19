import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChallengeLayout from "../layout/ChallengeLayout";
import MainLayout from "../layout/MainLayout";
import NonSelected from "@/features/assignment/pages/NonSelected";
import Assignment from "@/features/assignment/pages/Assignment";
import Challenge from "@/features/challenge/components/Challenge";
import { ShowroomLayout } from "@/showroom/ShowroomLayout";
import { ButtonsShowroom } from "@/showroom/routes/design/buttons.page";
import EditorShowroom from "@/showroom/routes/features/codeEditor/Editor.page";
import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <NonSelected /> },
      { path: '/assignment', element: <Assignment /> },
      // REMOVE auth routes from here
    ],
  },
  // Add auth routes OUTSIDE MainLayout
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup", 
    element: <SignUpPage />,
  },
  {
    path: "/challenge",
    element: <ChallengeLayout />,
    children: [
      { path: "/challenge/:challengeId", element: <Challenge /> },
    ],
  },
  {
    path: "/showroom",
    element: <ShowroomLayout />,
    children: [
      { path: "design/buttons", element: <ButtonsShowroom /> },
      { path: "features/code-editor", element: <EditorShowroom />},
    ],
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}