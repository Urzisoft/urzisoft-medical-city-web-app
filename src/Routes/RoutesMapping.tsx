import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import PatientRegistration from '../Components/Pages/PatientRegistration/PatientRegistration';
import PatientDetail from '../Components/Pages/PatientDetail/PatientDetail';

const RoutesMapping = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patientRegistration" element={<PatientRegistration />} />
            <Route path="/patientDetail/:id" element={<PatientDetail />} />
        </Routes>
    );
};

export default RoutesMapping;
