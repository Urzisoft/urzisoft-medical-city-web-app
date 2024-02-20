const formData = [
    { type: 'text', name: 'first_name', placeholder: 'First Name', required: true },
    { type: 'text', name: 'last_name', placeholder: 'Last Name', required: true },
    {
        type: 'text',
        name: 'age',
        placeholder: 'Age',
        required: true,
    },
    { type: 'text', name: 'email', placeholder: 'Email', required: true },
    // {
    //     type: 'select',
    //     name: 'gender',
    //     required: true,
    //     placeholder: 'gender',
    //     options: [
    //         { value: 'male', label: 'male' },
    //         { value: 'female', label: 'female' },
    //     ],
    // },
    { type: 'text', name: 'phone_number', placeholder: 'Phone Number', required: true },

    { type: 'image', name: 'image', label: 'Upload Image', required: true },
];

export default formData;
