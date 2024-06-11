import React from 'react';

const BusinessForm = ({ formData, handleChange, handlePrevStep, handleNextStep, step, errors }) => {
    return (
        <div className="form-step">
            <div className='tracking-pages'>
                <div className={'active1'}>
                    <h2>1</h2>
                    <h3>Your Profile</h3>
                </div>
                <div className={step === 2 ? 'active2' : ''}>
                    <h2>2</h2>
                    <h3>Business Information</h3>
                </div>
                <div className={step === 3 ? 'active' : ''}>
                    <h2>3</h2>
                    <h3>Additional Users</h3>
                </div>
            </div>
            <h3>Step 2</h3>
            <h2>Business Information</h2>
            <p className='title'>Please, enter information about your company.</p>
            <div className="form-group">
                <div>
                    <label>Brand Name*</label>
                    <input
                        type="text"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleChange}
                        required
                    />
                    {errors.brandName && <p className="error">{errors.brandName}</p>}
                </div>
                <div>
                    <label>Brand Type*</label>
                    <select
                        name="brandType"
                        value={formData.brandType}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Type of Your Brand</option>
                        <option value="local">Local</option>
                        <option value="national">National</option>
                    </select>
                    {errors.brandType && <p className="error">{errors.brandType}</p>}
                </div>
                <div>
                    <label>Street Address*</label>
                    <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        required
                    />
                    {errors.streetAddress && <p className="error">{errors.streetAddress}</p>}
                </div>
                <div>
                    <label>City*</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    {errors.city && <p className="error">{errors.city}</p>}
                </div>
                <div>
                    <label>Zip Code*</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                    />
                    {errors.zipCode && <p className="error">{errors.zipCode}</p>}
                </div>
                <div>
                    <label>Tax ID Number*</label>
                    <input
                        type="text"
                        name="taxIdNumber"
                        value={formData.taxIdNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.taxIdNumber && <p className="error">{errors.taxIdNumber}</p>}
                </div>
            </div>
            <button type="button" id='prev' onClick={handlePrevStep}>Previous Step</button>
            <button type="button" onClick={handleNextStep}>Next Step</button>
        </div>
    );
};

export default BusinessForm;