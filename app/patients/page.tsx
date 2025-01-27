"use client";
import UserCard from "@/components/card";
import styles from "./styles.module.css";
import Modal from "@/components/common/divider/modal";
import PatientsForm from "@/components/forms/patients";
import { usePatients } from "@/hooks/patients";
import Divider from "@/components/common/divider";

import {  ToastContainer } from 'react-toastify'


const Patients = () => {
  
  const {activeCard , isOpenModal , handleOnEdit , onValidForm , users , closeModal }  = usePatients()

  return (
    <>
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
