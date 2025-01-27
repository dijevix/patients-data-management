import styles from "./styles.module.css";

interface TextArea
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: boolean;
}

const TextArea = ({error, ...props}: TextArea) => {
  return (
  <div className={`${styles.input_container} ${error && styles.input_container_error}`}>
    <textarea className={styles.textarea_container} {...props} />
  </div> )
};

export default TextArea;
