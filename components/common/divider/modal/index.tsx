import CancelIcon from "@/components/icons/cancel";
import styles from "./styles.module.css";


interface Props {
  children: React.ReactNode;
  onClose: VoidFunction;
  isOpen: boolean;
}
const Modal = ({
  children,
  onClose,
  isOpen,
}:Props) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal_container}>
          <div className={styles.modal_content}>
            {children}

            <span onClick={onClose} className={styles.modal_cancelContainer}>
              <CancelIcon />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 className={styles.modal_title}>{children}</h3>;
};
const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.modal_content_custom}>{children}</div>;
};

Modal.title = Title;
Modal.content = Content;

export default Modal;
