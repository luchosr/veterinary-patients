import { Patient } from './../types/index';
import { create } from 'zustand';

type PatientState = {
  patients: Patient[];
};

export const usePatientStore = create<PatientState>(() => ({
  patients: [],
}));
