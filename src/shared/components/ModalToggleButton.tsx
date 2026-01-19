import React from "react";
import { useUIStore } from "../../app/store/uiStore";

const ModalToggleButton: React.FC = () => {
  const openModal = useUIStore((state) => state.openModal);

  return <button onClick={openModal}>Open Modal</button>;
};

export default ModalToggleButton;
