import React from "react";
import { ClassList, AssignmentList, AssignmentDetail } from ".././features/classes";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ClassList />
      <AssignmentList />
      <AssignmentDetail />
    </div>
  );
};

export default Dashboard;
