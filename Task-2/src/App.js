import React, { useState, useEffect } from 'react';
import CreateAccountForm from './Components/ProfileForm';
import BusinessForm from './Components/BusinessForm';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    brandName: '',
    brandType: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    taxIdNumber: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateForm()) {
        setStep(step + 1);
      }
    } else if (step === 2) {
      if (validateForm()) {
        alert('Create Successfully');
      }
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (step === 1) {
      if (!formData.firstName) errors.firstName = 'First Name is required';
      if (!formData.lastName) errors.lastName = 'Last Name is required';
      if (!formData.email) errors.email = 'Email is required';
      if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
      if (!formData.password) errors.password = 'Password is required';
      if (!formData.confirmPassword) errors.confirmPassword = 'Confirm Password is required';
      if (formData.password !== formData.confirmPassword) errors.passwordMismatch = 'Passwords do not match';
    } else if (step === 2) {
      if (!formData.brandName) errors.brandName = 'Brand Name is required';
      if (!formData.brandType) errors.brandType = 'Brand Type is required';
      if (!formData.streetAddress) errors.streetAddress = 'Street Address is required';
      if (!formData.city) errors.city = 'City is required';
      if (!formData.zipCode) errors.zipCode = 'Zip Code is required';
      if (!formData.taxIdNumber) errors.taxIdNumber = 'Tax ID Number is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="create-account-form">
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <CreateAccountForm
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            step={step}
            errors={errors}
          />
        )}
        {step === 2 && (
          <BusinessForm
            formData={formData}
            handleChange={handleChange}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
            step={step}
            errors={errors}
          />
        )}
      </form>
      <a href="#login" className="back-to-login">&lt;Back to Login</a>
    </div>
  );
};

export default App;
