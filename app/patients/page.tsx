"use client";
import { PatientsRequestResponse } from "@/types/patients";
import { getUsersList } from "@/utils/services/patients";
import { useEffect, useState } from "react";
interface IUsers extends PatientsRequestResponse {
  uuid: number;
}

const UserCard = (user: IUsers) => {
  return (
    <div key={user.uuid}>
      <b style={{ fontSize: 40 }}>{user.uuid}</b>
      <p>{user.description}</p>
      <p>{user.website}</p>
      <p>{user.name}</p>
      <p>{user.avatar}</p>
      <p>{user.id}</p>
    </div>
  );
};
const Patients = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

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
    <div>
      {users.map((user) => {
        return <UserCard {...user} key={user.uuid} />;
      })}
    </div>
  );
};

export default Patients;
