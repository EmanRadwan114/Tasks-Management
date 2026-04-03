import { useState } from "react";

export const useHandleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    handleModalClose,
    handleModalOpen,
  };
};
