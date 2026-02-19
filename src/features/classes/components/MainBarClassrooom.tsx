
import { MainBar } from "@/shared/components/layout/MainBar";
import { useClassroomRoute } from "@/features/class/hooks/useClassroomRoute";
import { useAssignmentClassrooms, useCreateAssignment } from "@/features/assignment/hooks/useAssignmentQuery";
import AssignmentCard from "@/shared/components/ui/assignmentCard";
import { useSelectedClassroom } from "../hooks/useClassroom";
import type {  AssignmentDto } from "@/shared/types/types";
import { useNavigate} from "react-router-dom"

const MainBarClassroom = () => {
  const navigate =useNavigate();
  const { classroomId,assignmentId } = useClassroomRoute();
  const { data: classroom} = useSelectedClassroom(classroomId);
  const { mutate: createAssignment} = useCreateAssignment(classroomId);

  const { data: assignments = [], isLoading } =
    useAssignmentClassrooms(classroomId);

  const openStudentList = () => {
    console.log("open student list");
  };

  const handleSetting = () => {};

  const handleCreate = () => {
    // TODO - Create Assignment

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // add 1 day
    tomorrow.setHours(23, 59, 0, 0);

    if(classroomId==null) return;
    
    const newAssignmentPayload:AssignmentDto = {
      title: "New Assignment",
      classroomId: Number(classroomId),
      dueAt: tomorrow.toISOString(),
      description:"",
      position:0
    };

    createAssignment(newAssignmentPayload)
  };


  return (
    <MainBar
      title={classroom?.name}
      student={67}
      openSetting={handleSetting}
      openStudentList={openStudentList}
      create={handleCreate}
    >
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <p>Loading assignments...</p>
        ) : assignments.length === 0 ? (
          <p>No assignments found</p>
        ) : (
          assignments.map((a) => (
            <AssignmentCard
              key={a.id}           
              assignment={a}        
              isSelect={a.id==assignmentId}  
              onDelete={() => {}}
              onClick={() => {
                navigate(
                  `/classrooms/${classroomId}/assignments/${a.id}`
                )
              }}
              totalStudent={67}
            />
          ))
        )}
      </div>
    </MainBar>
  );
};


export default MainBarClassroom;
