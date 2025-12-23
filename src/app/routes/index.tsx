import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChallengeLayout from "../layout/ChallengeLayout";
import MainLayout from "../layout/MainLayout";
import NonSelected from "@/features/assignment/pages/NonSelected";
import Assignment from "@/features/assignment/pages/Assignment";
import Challenge from "@/features/challenge/components/Challenge";
import { ShowroomLayout } from "@/showroom/ShowroomLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
          { index: true, element: <NonSelected /> }, // nothing selected
          { path: '/assignment', element: <Assignment /> }, // nothing selected

    ],
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
      // add path to the showroom
      // Example:
      // { path: "design/buttons", element: <ButtonsShowroom /> },
      // { path: "design/dialogs", element: <DialogsShowroom /> },
      // { path: "layout/app-shell", element: <AppShellShowroom /> },
      // { path: "features/assignment-card", element: <AssignmentCardShowroom /> },
    ],
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
