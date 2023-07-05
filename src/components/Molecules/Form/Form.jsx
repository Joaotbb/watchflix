import { useCallback, useState } from "react";
import {
  ErrorMessage,
  FormContainer,
  FormInput,
  FormLabel,
  FormTextArea,
  FormWrapper,
  SubmitButton,
  SuccessMessage,
} from "./Form.styles";

const validators = {
  name: (string) => {
    return string?.trim().length > 3;
  },
  lastName: (string) => {
    return string?.trim().length > 0;
  },
  email: (string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(string);
  },
  subject: (string) => {
    return string?.trim().length > 0;
  },
  message: (string) => {
    return string?.trim().length > 0;
  },
};

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: { value: "", error: false },
    lastName: { value: "", error: false },
    email: { value: "", error: false },
    subject: { value: "", error: false },
    message: { value: "", error: false },
    formSent: false, // 
  });

  const [errors, setErrors] = useState({});

  const updateFormData = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [name]: { value, error: false },
    }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    for (const key in formData) {
      if (key !== "formSent") {
        const entry = formData[key];
        const validator = validators[key];

        if (!validator || !validator(entry.value)) {
          newErrors[key] = `Please enter a valid ${key}`;
        }
      }
    }

    setErrors(newErrors);
    return newErrors;
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setFormData((prevValue) => ({
      ...prevValue,
      formSent: true,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: { value: "", error: false },
      lastName: { value: "", error: false },
      email: { value: "", error: false },
      subject: { value: "", error: false },
      message: { value: "", error: false },
      formSent: false,
    });
    setErrors({});
  };

  if (formData.formSent) {
    return (
      <FormContainer>
        <div>
          <SuccessMessage>FORM WAS SENT</SuccessMessage>
          <SubmitButton onClick={handleReset}>Return to Form</SubmitButton>
        </div>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name.value}
            onChange={updateFormData}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </div>
        <div>
          <FormLabel htmlFor="lastName">Last Name:</FormLabel>
          <FormInput
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName.value}
            onChange={updateFormData}
          />
          {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
        </div>
        <div>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email.value}
            onChange={updateFormData}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>
        <div>
          <FormLabel htmlFor="subject">Subject:</FormLabel>
          <FormInput
            type="text"
            id="subject"
            name="subject"
            value={formData.subject.value}
            onChange={updateFormData}
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
        </div>
        <div>
          <FormLabel htmlFor="message">Message:</FormLabel>
          <FormTextArea
            id="message"
            name="message"
            value={formData.message.value}
            onChange={updateFormData}
          ></FormTextArea>
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </div>
        <SubmitButton  className="mb-12 md:mb-0" type="submit">Submit</SubmitButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default Form;
