const CreateClassroomButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-black text-white text-3xl"
    >
      +
    </button>
  );
};


export default CreateClassroomButton;