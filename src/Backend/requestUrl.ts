const baseUrl = 'http://localhost:8000';
const api = '/medical-city';

export const requestUrl = {
    patients: `${baseUrl}${api}/medical-patients`,
    patient: (id: string) => `${baseUrl}${api}/medical-patients/${id}`,
};
