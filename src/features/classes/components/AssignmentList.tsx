import React from "react";
import { useClasses } from "../hooks/useClasses";
import { Button } from "../../../shared/components/Button";
import type { Assignment } from "../types/classesType";

export const AssignmentList: React.FC = () => {
  const { selectedClass, selectedAssignment, selectAssignment } = useClasses();

  if (!selectedClass) return <div style={{ padding: 10 }}>Select a class</div>;

  return (
    <div style={{ width: 200, borderRight: "1px solid #ccc", padding: 10 }}>
      <h4>Assignments</h4>
      {selectedClass.assignments.map((a: Assignment) => (
        <Button
          key={a.id}
          onClick={() => selectAssignment(a)}
          style={{ fontWeight: selectedAssignment?.id === a.id ? "bold" : "normal" }}
        >
          {a.title}
        </Button>
      ))}
    </div>
  );
};
