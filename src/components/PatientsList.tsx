import { usePatientStore } from '../store/store';

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  console.log(patients);
  return <div>PatientsList</div>;
}
