import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BodyWrapper, FormInput, FormSelect, FormWrapper, PWrapper, SubmitButton } from './PatientForm.style';
import usePostCustomFetch from '../../../Hooks/usePostCustomFetch';
import { MedicalReportType } from '../../../Utils/Types';

type DynamicFormProps = {
    formData: any;
};

const PatientForm: React.FC<DynamicFormProps> = ({ formData }) => {
    const [imageId, setImageId] = useState<MedicalReportType>();
    const { register, handleSubmit } = useForm();
    const { fetcher: sendPatientData } = usePostCustomFetch('http://localhost:8000/medical-city/medical-patients/');
    const { fetcher: sendImageData, response } = usePostCustomFetch<MedicalReportType, FormData>(
        'http://localhost:8000/medical-city/medical-report/'
    );

    const onSubmit = async (formData: any) => {
        if (imageId) {
            formData.medical_status = imageId.id;
        }
        await sendPatientData(formData);
        console.log(formData);
    };

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const formData = new FormData();
            formData.append('image_url', file);

            await sendImageData(formData, '', true);
        }
    };
    useEffect(() => {
        if (response && response.id) {
            setImageId(response);
            console.log(response);
        }
    }, [imageId, response]);

    return (
        <BodyWrapper>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                {formData.map((field: any, index: any) => {
                    switch (field.type) {
                        case 'text':
                            return (
                                <FormInput
                                    key={index}
                                    {...register(field.name, { required: field.required })}
                                    placeholder={field.placeholder}
                                />
                            );
                        case 'select':
                            return (
                                <FormSelect key={index} {...register(field.name, { required: field.required })}>
                                    <option value="" hidden={!field.required}>
                                        {field.placeholder}
                                    </option>
                                    {field.options.map((option: any, optionIndex: any) => (
                                        <option key={optionIndex} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </FormSelect>
                            );
                        case 'image':
                            return (
                                <div key={field.name}>
                                    <label htmlFor={field.name}>{field.label}</label>
                                    <input type="file" id={field.name} accept="image/*" onChange={handleImageChange} />
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
                <PWrapper></PWrapper>
                <SubmitButton type="submit" />
            </FormWrapper>
        </BodyWrapper>
    );
};

export default PatientForm;
