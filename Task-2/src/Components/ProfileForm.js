import React from 'react';

const ProfileForm = ({ formData, handleChange, handleNextStep, step, errors }) => {
    return (
        <div className="form-step">
            <div className='tracking-pages'>
                <div className={step === 1 ? 'active' : ''}>
                    <h2>1</h2>
                    <h3>Your Profile</h3>
                </div>
                <div className={step === 2 ? 'active' : ''}>
                    <h2>2</h2>
                    <h3>Business Information</h3>
                </div>
                <div className={step === 3 ? 'active' : ''}>
                    <h2>3</h2>
                    <h3>Additional Users</h3>
                </div>
            </div>
            <h3>Step 1</h3>
            <h2>Your Profile</h2>
            <p className='title'>Enter the login information for your account. You will be able to create additional users after registering.</p>
            <div className="form-group">
                <div>
                    <label>First Name*</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder='Input Your First Name'
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div>
                    <label>Last Name*</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder='Input Your Last Name'
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div>
                    <label>Email*</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='Input Your Email'
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Phone Number*</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        placeholder='Input Your Phone Number'
                    />
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                </div>
                <div>
                    <label>Password*</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder='Create Password'
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <label>Confirm Password*</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder='Confirm Your Password'
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    {errors.passwordMismatch && <p className="error">{errors.passwordMismatch}</p>}
                </div>
            </div>
            <button type="button" onClick={handleNextStep}>Next Step</button>
        </div>
    );
};

export default ProfileForm;
