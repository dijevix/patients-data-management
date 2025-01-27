import { useEffect, useState } from "react";
// Types
import { IPatients } from "@/types/patients";
// Services
import { getUsersList } from "@/utils/services/patients";
// Public
import defaultUser from "@/public/user_4302027.png";


export const usePatientsRequest = () => {
  const [users, setUsers] = useState<IPatients[]>([]);

  const getAndSetUsers = async () => {
    const data = await getUsersList();
    const mappedData = data.map((user) => ({
      ...user,
      uuid: Math.floor(new Date().valueOf() / Math.random() / 100),
      avatar : user.avatar || defaultUser.src
    }));

    setUsers(mappedData);
  };

  useEffect(() => {
    getAndSetUsers();
  }, []);

  return { users, setUsers };
};
