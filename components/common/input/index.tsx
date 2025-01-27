import { ChangeEvent, InputHTMLAttributes } from "react";
// Styles
import styles from "./styles.module.css";

type Props = {
  placeholder: string;
  defaultValue?: string;
  value?: string;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  type ?: InputHTMLAttributes<HTMLInputElement>['type']
};

const CustomInput = ({error, ...props }: Props) => {
  return (
    <div className={`${styles.input_container} ${error && styles.input_container_error}`}>
      <input  {...props} />
    </div>
  );
};

export default CustomInput;
