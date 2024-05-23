// components/common/Modal.tsx

import React, { useEffect } from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="p-4 border-b border-light-gray flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-deep-blue">
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="p-4 border-t border-light-gray flex justify-end">
          <Button onClick={onClose} className="bg-coral hover:bg-red-700">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
