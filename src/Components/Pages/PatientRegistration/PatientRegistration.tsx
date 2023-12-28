import { styled } from 'styled-components';
import PatientForm from '../../Common/PatientForm/PatientForm';
import formData from '../../Common/PatientForm/FormData';

const PatientRegistrationContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const PatientRegistration = () => {
    return (
        <PatientRegistrationContainer>
            <PatientForm formData={formData} />
        </PatientRegistrationContainer>
    );
};

export default PatientRegistration;
