import { PropsWithChildren } from "react";
import Styles from "./Modal.module.scss";

type ModalProps = {
  className?: string;
  clonsingModal: () => void;
};

export const Modal = ({
  className = "",
  clonsingModal,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <div className={`${Styles.Modal} ${className}`}>
      <div className={Styles.content}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={Styles.minus}
          onClick={() => {
            clonsingModal();
          }}
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        {children}
      </div>
    </div>
  );
};
