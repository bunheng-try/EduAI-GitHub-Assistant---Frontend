const CreateClassroomButton: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  return (
    <div
      onClick={openModal}
      className="
      flex items-start justify-center
      w-14 aspect-square
      absolute right-4 bottom-4
      rounded-full bg-black
      cursor-pointer text-5xl leading-none
      "
    >
      +
    </div>
  );
};

export default CreateClassroomButton;