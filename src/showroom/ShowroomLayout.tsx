// showroom/ShowroomLayout.tsx
import { Outlet, Link } from "react-router-dom"

export function ShowroomLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r p-4 space-y-2">
        <Link to="/showroom/design/buttons">Buttons</Link>
        <Link to="/showroom/design/dialogs">Dialogs</Link>
        <Link to="/showroom/layout/app-shell">App Shell</Link>
        <Link to="/showroom/features/assignment-card">Assignment Card</Link>
      </aside>

      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
