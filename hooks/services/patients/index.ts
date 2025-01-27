import { IPatients } from "@/types/patients";
import { getUsersList } from "@/utils/services/patients";
import { useEffect, useState } from "react";

export const usePatientsRequest = () => {
  const [users, setUsers] = useState<IPatients[]>([]);

  const getAndSetUsers = async () => {
    const data = await getUsersList();
    const mappedData = data.map((user) => ({
      ...user,
      uuid: Math.floor(new Date().valueOf() / Math.random() / 100),
    }));
    setUsers(mappedData);
  };
  useEffect(() => {
    getAndSetUsers();
  }, []);

  return { users, setUsers };
};
