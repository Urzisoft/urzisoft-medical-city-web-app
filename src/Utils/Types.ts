export type FetchResponseGET<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg?: param, token?: string, isFormData?: boolean) => any;
};

export type FetchResponsePOST<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param, token?: string, isForm?: boolean) => any;
};

export type MedicalReportType = {
    id: number;
    image_url: string;
    model_conclusion: string;
    is_tumor: boolean;
};

export type PatientType = {
    id: number;
    medical_status: MedicalReportType;
    first_name: string;
    last_name: string;
    age: number;
    email: string;
    phone_number: string;
};
