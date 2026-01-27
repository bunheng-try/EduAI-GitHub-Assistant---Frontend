import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ChallengeLayout from "../layout/ChallengeLayout";
import Challenge from "@/features/challenge/components/Challenge";

import { ShowroomLayout } from "@/showroom/ShowroomLayout";
import { ButtonsShowroom } from "@/showroom/routes/design/buttons.page";
import EditorShowroom from "@/showroom/routes/features/codeEditor/Editor.page";

import SignInPage from "./auth/SignInPage";
import SignUpPage from "./auth/SignUpPage";
import { AppShell } from "../layout/AppShell";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },

  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true },

      {
        path: "classrooms",
        children: [
          { index: true },
          { path: ":classId" },
          { path: ":classId/assignments/:assignmentId" },
        ],
      },
    ],
  },

  {
    path: "/challenge",
    element: <ChallengeLayout />,
    children: [
      { path: ":challengeId", element: <Challenge /> },
    ],
  },

  {
    path: "/showroom",
    element: <ShowroomLayout />,
    children: [
      { path: "design/buttons", element: <ButtonsShowroom /> },
      { path: "features/code-editor", element: <EditorShowroom /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
