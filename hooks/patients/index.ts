import { IPatients } from "@/types/patients";
import { useState } from "react";
import { FieldErrors } from "react-hook-form";
import { usePatientsRequest } from "../services/patients";

export const usePatients = () => {
  const { setUsers, users } = usePatientsRequest();

  const [activeCard, setActiveCard] = useState<IPatients>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOnEdit = (user: IPatients) => {
    setIsOpenModal(true);
    setActiveCard(user);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const onValidForm = (data: IPatients) => {
    console.log({ data });
    setUsers((prevState) => {
      return prevState.map((item) => {
        return item.uuid == data.uuid ? { ...data } : item;
      });
    });
    closeModal();
  };

  const onInvalid = (error: FieldErrors<IPatients>) => {
    console.log({ error });
  };

  return {
    onValidForm,
    onInvalid,
    users,
    isOpenModal,
    activeCard,
    handleOnEdit,
    closeModal
  };
};
