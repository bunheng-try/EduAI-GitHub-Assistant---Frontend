import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Challenge from "@/features/challenge/components/Challenge";

import { ShowroomLayout } from "@/showroom/ShowroomLayout";
import { ButtonsShowroom } from "@/showroom/routes/design/buttons.page";
import EditorShowroom from "@/showroom/routes/features/codeEditor/Editor.page";

import { AppShell } from "../layout/AppShell";
import MainBarClassrooom from "@/features/classes/components/MainBarClassrooom";
import AssignmentEditor from "@/features/assignment/pages/AssignmentEditorPage";
import { ClassroomLayout } from "../layout/ClassroomLayout";
import { ClassroomHome } from "@/features/classes/components/ClassroomHome";
import { ProtectedRoute } from "./protectedRoute";
import SignInPage from "@/features/auth/pages/SignInPage";

const router = createBrowserRouter([
  { path: "/signin", element: <SignInPage /> },
  // { path: "/signup", element: <SignUpPage /> },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppShell />
      </ProtectedRoute>
    ),
    children: [
    {
      path: "classrooms/:classId",
      element: <ClassroomLayout />,
      children: [
        {
          index: true,
          element: <ClassroomHome />
        },
        {
          path: "assignments/:assignmentId",
          element: <AssignmentEditor />,
        },
      ],
    },
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
