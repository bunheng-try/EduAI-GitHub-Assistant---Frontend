import { useState ,useEffect } from 'react';
import { MainBar } from '@/shared/components/layout/MainBar'
import {type Assignment } from "@/shared/types/types";
import AssignmentCard from '@/shared/components/ui/assignmentCard';

const Lassignments: Assignment[] = [
  { id: '1', title: 'Math Homework', dueDate: '2025-01-15', status: 'active', totalSubmitted: 12 },
  { id: '2', title: 'Science Project', dueDate: '2026-01-20', status: 'inactive', totalSubmitted: 8 },
  { id: '3', title: 'History Essay', dueDate: '2027-01-25', status: 'active', totalSubmitted: 15 },
  { id: '4', title: 'English Reading', dueDate: '2025-02-01', status: 'active', totalSubmitted: 10 },
  { id: '5', title: 'Chemistry Lab', dueDate: '2026-02-03', status: 'inactive', totalSubmitted: 5 },
  { id: '6', title: 'Physics Worksheet', dueDate: '2027-02-05', status: 'active', totalSubmitted: 18 },
  { id: '7', title: 'Biology Report', dueDate: '2025-02-07', status: 'inactive', totalSubmitted: 7 },
  { id: '8', title: 'Geography Quiz', dueDate: '2026-02-10', status: 'active', totalSubmitted: 20 },
  { id: '9', title: 'Art Project', dueDate: '2027-02-12', status: 'active', totalSubmitted: 14 },
  { id: '10', title: 'Music Assignment', dueDate: '2025-02-15', status: 'inactive', totalSubmitted: 3 },
  { id: '11', title: 'PE Activity Log', dueDate: '2026-02-17', status: 'active', totalSubmitted: 11 },
  { id: '12', title: 'French Essay', dueDate: '2027-02-19', status: 'inactive', totalSubmitted: 6 },
  { id: '13', title: 'Spanish Presentation', dueDate: '2025-02-21', status: 'active', totalSubmitted: 9 },
  { id: '14', title: 'Economics Case Study', dueDate: '2026-02-23', status: 'active', totalSubmitted: 16 },
  { id: '15', title: 'Computer Lab', dueDate: '2027-02-25', status: 'inactive', totalSubmitted: 4 },
  { id: '16', title: 'History Debate', dueDate: '2025-02-27', status: 'active', totalSubmitted: 13 },
  { id: '17', title: 'Math Quiz', dueDate: '2026-03-01', status: 'active', totalSubmitted: 21 },
  { id: '18', title: 'Science Experiment', dueDate: '2027-03-03', status: 'inactive', totalSubmitted: 2 },
  { id: '19', title: 'English Poem', dueDate: '2025-03-05', status: 'active', totalSubmitted: 17 },
  { id: '20', title: 'Art Sketch', dueDate: '2026-03-07', status: 'active', totalSubmitted: 19 },
];



const MainBarClassrooom = () => {

  const [assignments,setassignments]=useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  useEffect(()=>{
    setassignments(Lassignments);
  },[])

  const handleSelect = (assignment: Assignment): void => {
    setSelectedAssignment(assignment);
  };

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
      title="Group 2" 
      student={34} 
      openSetting={handleSetting}
      openStudentList={openStudentList}
      create={handleCreate}
    >
      {/* Render assignments */}
      <div className="flex flex-col ">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onDelete={handleDelete}
            onClick={handleSelect}
            isSelect={selectedAssignment?.id===assignment.id}
            totalStudent={34}
          />
        ))}
      </div>
    </MainBar>
  )
}

export default MainBarClassrooom