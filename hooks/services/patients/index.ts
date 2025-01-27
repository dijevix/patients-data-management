import { useEffect, useState } from "react";
// Types
import { IPatients } from "@/types/patients";
// Services
import { getUsersList } from "@/utils/services/patients";
// Public
import defaultUser from "@/public/user_4302027.png";


export const usePatientsRequest = () => {
  const [users, setUsers] = useState<IPatients[]>([]);
  const [isLoading, setIsLoading] = useState(true)


  const getAndSetUsers = async () => {

    try{
      const data = await getUsersList();
      const mappedData = data.map((user) => ({
        ...user,
        uuid: Math.floor(new Date().valueOf() / Math.random() / 100),
        avatar : user.avatar || defaultUser.src
      }));
    
      setUsers(mappedData);

    }catch(err){
      console.warn(err)
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getAndSetUsers();
  }, []);

  return { users, setUsers , isLoading};
};
