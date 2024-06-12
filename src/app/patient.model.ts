// src/app/patients/patient.model.ts
export interface Patient {
  name: string;
  dateOfBirth: Date;
  gender: string;
  service: string;
  comments: string;
  visits: number;
}
