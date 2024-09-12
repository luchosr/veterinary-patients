import { DraftPatient, Patient } from './../types/index';
import { create } from 'zustand';

type PatientState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
};

export const usePatientStore = create<PatientState>(() => ({
  patients: [],
  addPatient: (data: DraftPatient) => {
    console.log(data);
  },
}));
