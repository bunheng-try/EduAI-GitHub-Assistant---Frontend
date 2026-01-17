// features/class/apis/deleteClass.ts
export const deleteClass = (classId: number) =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      console.log(`Deleted class with id: ${classId}`);
      resolve();
    }, 800)
  );