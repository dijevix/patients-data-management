import CustomInput from "@/components/common/input";

import styles from "./styles.module.css";
import { Controller,  useForm } from "react-hook-form";
import HelperText from "@/components/common/helperText";
import UploadFile from "@/components/common/uploadFile";
import { IPatients } from "@/types/patients";
import TextArea from "@/components/common/textArea";

interface Props {
  initialValues: IPatients;
  onCancel: VoidFunction;
  onValid?: (data: IPatients) => void;
}
const PatientsForm = ({
  initialValues,
  onCancel,
  onValid,
}: Props) => {
  const { handleSubmit, control } = useForm({
    defaultValues: initialValues,
    mode: "all",
  });


  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className={styles.form_container}
    >
      <label className={styles.form_input_label}>Name</label>
      <Controller
        control={control}
        name="name"
        rules={{
          required: { value: true, message: "This field is required" },
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <CustomInput {...field} error={!!error} placeholder="Type a name" />
              <HelperText>{error?.message}</HelperText>
            </>
          );
        }}
      />
      <label className={styles.form_input_label}>Description</label>
      <Controller
        control={control}
        name="description"
        rules={{
          required: { value: true, message: "This field is required" },
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <TextArea {...field} placeholder="Type a description" />
              <HelperText>{error?.message}</HelperText>
            </>
          );
        }}
      />
      <label className={styles.form_input_label}>Website</label>
      <Controller
        control={control}
        name="website"
        rules={{
          required: { value: true, message: "This field is required" },
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <CustomInput {...field} error={!!error}  placeholder="Type a Website" />
              <HelperText>{error?.message}</HelperText>
            </>
          );
        }}
      />
      <label className={styles.form_input_label}>Avatar</label>

      <Controller
        control={control}
        name="avatar"
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <UploadFile
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  const file = e.target.files[0];
                  const imageUrl = URL.createObjectURL(file);
                  field.onChange(imageUrl);
                }}
                accept="image/*"
              />
              <HelperText>{error?.message}</HelperText>
            </>
          );
        }}
      />

      <div className={styles.form_action_container}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.contained}>
          Done
        </button>
      </div>
    </form>
  );
};

export default PatientsForm;
