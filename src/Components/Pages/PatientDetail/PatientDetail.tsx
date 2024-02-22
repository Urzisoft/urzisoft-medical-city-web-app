import { useParams } from 'react-router-dom';

const PatientDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>{`patient detail ${id}`}</h1>
        </div>
    );
};

export default PatientDetail;
