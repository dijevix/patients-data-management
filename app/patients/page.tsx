"use client";
// Third party
import {  ToastContainer } from 'react-toastify'
// Custom Components
import UserCard from "@/components/card";
import Divider from "@/components/common/divider";
import Modal from "@/components/common/divider/modal";
import PatientsForm from "@/components/forms/patients";
// hooks
import { usePatients } from "@/hooks/patients";
// Styles
import styles from "./styles.module.css";
import Loader from '@/components/common/loader';


const Patients = () => {
  
  const {activeCard , isOpenModal , handleOnEdit , onValidForm , users , closeModal , isLoading }  = usePatients()

  return (
    <>
    {isLoading && <Loader />}
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.title>Manage Patient Information</Modal.title>
        <Divider />
        <Modal.content>
          <PatientsForm
            initialValues={{
              ...activeCard,
            }}
            onCancel={closeModal}
            onValid={onValidForm}
          />
        </Modal.content>
      </Modal>

      <div className={styles.cardsContainer}>
        {users.map((user) => {
          return <UserCard user={user} onEdit={handleOnEdit} key={user.uuid} />;
        })}
      </div>

      <ToastContainer />
    </>
  );
};

export default Patients;
