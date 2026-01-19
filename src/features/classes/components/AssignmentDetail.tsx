import React from "react";
import { useClasses } from "../hooks/useClasses";
import { formatDate } from "../../../shared/utils/formatDate";

export const AssignmentDetail: React.FC = () => {
  const { selectedAssignment } = useClasses();

  if (!selectedAssignment) return <div style={{ padding: 10 }}>Select an assignment</div>;

  return (
    <div style={{ padding: 10, flex: 1 }}>
      <h3>{selectedAssignment.title}</h3>
      <p>{selectedAssignment.description}</p>
      <p>Due: {formatDate(selectedAssignment.dueDate)}</p>
    </div>
  );
};
