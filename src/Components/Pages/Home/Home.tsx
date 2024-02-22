import PatientTable from '../../Common/PatientTable/PatientTable';
import useGetCustomFetch from '../../../Hooks/useGetCustomFetch';
import { requestUrl } from '../../../Backend/requestUrl';
import { useEffect, useState } from 'react';

const Home = () => {
    const [patients, setPatients] = useState<any>();
    const { fetcher: getPatients, response } = useGetCustomFetch(requestUrl.patients);

    useEffect(() => {
        getPatients();
    }, []);

    useEffect(() => {
        if (response) setPatients(response);
    }, [response]);

    return <div>{patients && <PatientTable data={patients} />}</div>;
};

export default Home;
