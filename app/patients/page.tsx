"use client";
import UserCard from "@/components/card";
import { IPatients } from "@/types/patients";
import { getUsersList } from "@/utils/services/patients";
import { useEffect, useState } from "react";

import styles from './styles.module.css'

const Patients = () => {
  const [users, setUsers] = useState<IPatients[]>([]);

  const getAndSetUsers = async () => {
    const data = await getUsersList();
    const mappedData = data.map((user) => ({
      ...user,
      uuid: Math.floor(new Date().valueOf() / Math.random() / 100),
    }));
    console.log({ mappedData });
    setUsers(mappedData);
  };
  useEffect(() => {
    getAndSetUsers();
  }, []);

  return (
    <div className={styles.cardsContainer}>
      {users.map((user) => {
        return <UserCard {...user} key={user.uuid} />;
      })}
    </div>
  );
};

export default Patients;
