import styled from 'styled-components';

export const BodyWrapper = styled.div`
    display: flex;
    padding-top: 10vh;
    padding-left: 10vh;
`;

export const FormWrapper = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-gap: 20px;
    width: 70vw;
    @media (max-width: 767px) {
        width: 90vw;
    }
    @media (max-width: 1024px) {
        width: 70vw;
    }
`;

export const PWrapper = styled.p`
    color: #bf1650;
    text-align: center;
    grid-column: span 1;
`;

export const SubmitButton = styled.input`
    position: relative;
    background: teal;
    text-transform: uppercase;
    border: none;
    margin-top: 20px;
    padding: 20px;
    font-size: 16px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;
    align-self: center;

    &:hover {
        background: #015454;
        color: white;
    }

    &:active {
        transition: 0.3s all;
        top: 2px;
    }
`;

export const FormInput = styled.input`
    display: grid;
    padding: 10px;
`;

export const FormSelect = styled.select`
    display: grid;
    padding: 10px;
    width: 100%;
`;
