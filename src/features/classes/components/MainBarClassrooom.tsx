import { MainBar } from '@/shared/components/layout/MainBar'
import {assignments, classrooms, type Assignment } from "@/shared/types/types";
import AssignmentCard from '@/shared/components/ui/assignmentCard';
import { useNavigate, useParams } from 'react-router-dom';


const MainBarClassrooom = () => {

  const navigate = useNavigate()
  const { classId, assignmentId } = useParams()

  const classroom = classrooms.find(
    (c) => c.id === classId
  )
  
   const classroomAssignments = assignments.filter(
    (a) => a.classroomId === classId
  )


  const openStudentList= ():void=>{
      console.log("open student list");
  }

  const handleSetting=():void=>{
      console.log("open setting");
  }

  const handleCreate=():void=>{
      console.log("open modal")
  }
  
  const handleDelete=():void=>{
      console.log("open modal")
  }
  
  return (
    <MainBar 
      title={classroom?.name ?? "Classroom"}
      student={34} 
      openSetting={handleSetting}
      openStudentList={openStudentList}
      create={handleCreate}
    >
      {/* Render assignments */}
      <div className="flex flex-col ">
        {classroomAssignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onDelete={handleDelete}
            onClick={() =>
              navigate(
                `/classrooms/${classId}/assignments/${assignment.id}`
              )
            }
            isSelect={assignment.id === assignmentId}
            totalStudent={34}
          />
        ))}
      </div>
    </MainBar>
  )
}

export default MainBarClassrooom