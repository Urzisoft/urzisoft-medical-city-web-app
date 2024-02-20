import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BodyWrapper, FormInput, FormSelect, FormWrapper, PWrapper, SubmitButton } from './PatientForm.style';

type DynamicFormProps = {
    formData: any;
};

const PatientForm: React.FC<DynamicFormProps> = ({ formData }) => {
    const { register, handleSubmit } = useForm();

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = target.files?.[0] || null;
        setFile(selectedImage);
    };

    const onSubmit = async (formData: any) => {
        const formDataWithImage = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataWithImage.append(key, value as any);
        });

        if (file) {
            formDataWithImage.append('image_url', file);
        }
        console.log('send data');
        //@ts-ignore
        console.log(...formDataWithImage);
    };

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
                                    <input type="file" id={field.name} accept="image/*" onChange={handleFileChange} />
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
