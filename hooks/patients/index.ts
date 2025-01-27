import { useState } from "react";
// Third party 
import { toast  } from 'react-toastify'
// Utils
import { IPatients } from "@/types/patients";
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

  const onValidForm = (data: IPatients ) => {
    console.log({ data });
    setUsers((prevState) => {
      return prevState.map((item) => {
        return item.uuid == data.uuid ? { ...data } : item;
      });
    });
    toast('Successfully updated !')
    closeModal();
  };


  return {
    onValidForm,
    users,
    isOpenModal,
    activeCard,
    handleOnEdit,
    closeModal,
  };
};
