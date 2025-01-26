export interface PatientsRequestResponse {
  createAt: Date;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: string;
}
export interface IPatients extends PatientsRequestResponse {
  uuid: number;
}
