import React from "react";
import { useClasses } from "../hooks/useClasses";
import { Button } from "../../../shared/components/Button";
import type { Class } from "../types/classesType";

export const ClassList: React.FC = () => {
  const { classes, selectedClass, selectClass } = useClasses();

  return (
    <div style={{ width: 200, borderRight: "1px solid #ccc", padding: 10 }}>
      <h3>Classes</h3>
      {classes.map((cls: Class) => (
        <Button key={cls.id} onClick={() => selectClass(cls)}>
          {cls.name}
        </Button>
      ))}
    </div>
  );
};
