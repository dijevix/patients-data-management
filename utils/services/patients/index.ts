import { PatientsRequestResponse } from "@/types/patients"
import { ENV_HELPERS } from "@/utils/constants"
import axios from "axios"

export const getUsersList = async (): Promise<PatientsRequestResponse[]> => {
    try{
        const response = await axios.get(ENV_HELPERS.apiUrl +`/users`)
        return response.data

    }catch(error){
        console.warn([`Error getting Users : ${error}`] )
        return []
    }
  }