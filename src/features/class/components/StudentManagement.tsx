import { useStudents } from "../hooks/useStudent"
import { useStudentPage } from "..//hooks/useStudentPage"
import StudentHeader from "../components/students/Studentheader"
import StudentTab from "./students/StudentTaps"
import StudentToolbar from "./students/Studenttoolbar"
import StudentTable from "./students/StudentTables"
import StudentDialogs from "./students/StudentDialogs"

export default function StudentManagement() {
  const { students, filtered, search, setSearch, inviteStudent, removeStudent, exportStudents } = useStudents()
  const { inviteOpen, setInviteOpen, confirmStudent, openConfirmRemove, closeConfirmRemove, contextMenu, openContextMenu, closeContextMenu } = useStudentPage()

  const handleRemoveConfirm = () => {
    if (!confirmStudent) return
    removeStudent(confirmStudent.id)
    closeConfirmRemove()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-3xl overflow-hidden">
        <StudentHeader totalCount={students.length} onInviteClick={() => setInviteOpen(true)} />
        <StudentTab />
        <StudentToolbar search={search} onSearchChange={setSearch} onExport={exportStudents} />
        <StudentTable students={filtered} isFiltered={search.length > 0} onContextMenu={openContextMenu} />
      </div>

      <StudentDialogs
        inviteOpen={inviteOpen}
        onInviteOpenChange={setInviteOpen}
        onInvite={inviteStudent}
        confirmStudent={confirmStudent}
        onConfirmRemoveOpenChange={(open) => { if (!open) closeConfirmRemove() }}
        onConfirmRemove={handleRemoveConfirm}
        contextMenu={contextMenu}
        onContextMenuRemove={openConfirmRemove}
        onContextMenuClose={closeContextMenu}
      />
    </div>
  )
}
