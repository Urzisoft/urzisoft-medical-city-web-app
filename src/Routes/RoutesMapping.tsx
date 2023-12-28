import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import PatientRegistration from "../Components/Pages/PatientRegistration/PatientRegistration";

const RoutesMapping = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patientRegistration" element={<PatientRegistration />} />
    </Routes>
  );
};

export default RoutesMapping;
