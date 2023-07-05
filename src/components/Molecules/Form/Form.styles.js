import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 2xl;

  @media (min-width: 640px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }

  @media (min-width: 1280px) {
    width: 25%;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #fc6b13;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.25rem;
  color: #6b7280;
`;

const ErrorMessage = styled.span`
  color: #ef4444;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #fc6b13;
  color: #ffffff;
  padding: 1.5rem 1.5rem;
  margin-top: 2rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c53a09;
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  color: #fc6b13;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  outline: none;
  transition: border-color 0.3s;
  resize: vertical;

  &:focus {
    border-color: #4f46e5;
  }
`;

export {
  FormContainer,
  FormWrapper,
  FormInput,
  FormLabel,
  ErrorMessage,
  SubmitButton,
  SuccessMessage,
  FormTextArea,
};
