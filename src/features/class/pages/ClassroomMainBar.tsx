import { useClassroomMainBar } from "../hooks/useClassmainBar";

export const ClassroomMainBar = () => {
  const { selectedClassroom, hasSelection } = useClassroomMainBar();

  if (!hasSelection) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Select a classroom to get started
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-white">
          {selectedClassroom?.name}
        </h1>
      </div>

      <div className="text-gray-300">
        Classroom content goes here
      </div>
    </div>
  );
};
