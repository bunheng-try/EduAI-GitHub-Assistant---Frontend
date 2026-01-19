import { useEffect } from "react";
import { fetchClasses } from "../services/classesAPI";
import { useClassesStore } from "../store/classesStore";

export const useClasses = () => {
  const { classes, selectedClass, selectedAssignment, setClasses, selectClass, selectAssignment } = useClassesStore();

  useEffect(() => {
    fetchClasses().then(setClasses);
  }, [setClasses]);

  return { classes, selectedClass, selectedAssignment, selectClass, selectAssignment };
};