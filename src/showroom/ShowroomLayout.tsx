// showroom/ShowroomLayout.tsx
import { ButtonPrimary } from "@/shared/components/design/button"
import { Outlet, Link } from "react-router-dom"

export function ShowroomLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r p-4 space-y-2 space-x-2">
        <ButtonPrimary>
         <Link to="/showroom/design/buttons">Buttons</Link>
        </ButtonPrimary>
        <ButtonPrimary>
         <Link to="/showroom/design/dialogs">Dialogs</Link>
        </ButtonPrimary>
        <ButtonPrimary>
         <Link to="/showroom/layout/app-shell">App Shell</Link>
        </ButtonPrimary>
        <ButtonPrimary>
          <Link to="/showroom/features/assignment-card">Assignment Card</Link>
        </ButtonPrimary>
       </aside>

      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
