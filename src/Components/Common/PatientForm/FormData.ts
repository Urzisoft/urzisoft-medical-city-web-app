const formData = [
    { type: 'text', name: 'title', placeholder: 'Title', required: true },
    { type: 'text', name: 'subtitle', placeholder: 'Subtitle', required: true },
    {
        type: 'text',
        name: 'description',
        placeholder: 'Description',
        required: true,
    },
    { type: 'text', name: 'email', placeholder: 'Email', required: true },
    // { type: "image", name: "image", label: "Upload Image", required: true },
    {
        type: 'select',
        name: 'gender',
        required: true,
        placeholder: 'gender',
        options: [
            { value: 'male', label: 'male' },
            { value: 'female', label: 'female' },
        ],
    },
];

export default formData;
