import React from 'react';

function ProjectTypeForm({ formData, handleChange, handleBack, handleNext, errors, currentPage }) {
  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Project Type</h2>
        <form>
          <label className='form-1'>
            Hourly
            <p>We need hourly rates to track your project's billable amount.</p>
            <div className='rates'>
              <select
                name="projecthourrate"
                value={formData.hourRate}
                onChange={handleChange}
              >
                <option value="">Project Hourly Rate</option>
                <option value="Rate1">Rate 1</option>
                <option value="Rate2">Rate 2</option>
                <option value="Rate3">Rate 3</option>
              </select>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder='Enter amount'
              />
            </div>
            {errors.hourlyRate && <span className="error">{errors.hourlyRate}</span>}
          </label>
          <label className='form-1'>
            Budget
            <p><p>We need hourly rates to track your project's billable amount.</p></p>
            <select
              name="budgetHours"
              value={formData.budgetHours}
              onChange={handleChange}
            >
              <option value="">Hours per Person</option>
              <option value="Hour 1">Hour  1</option>
              <option value="Hour 2">Hour  2</option>
              <option value="Hour 3">Hour  3</option>
            </select>
            {errors.budgetHours && <span className="error">{errors.budgetHours}</span>}
          </label>
          <label className='check-box'>
            <input
              type="checkbox"
              name="budgetReset"
              checked={formData.budgetReset}
              onChange={handleChange}
            />
            <p>Budget reset every month</p>
          </label>
          <label className='check-box'>
            <input
              type="checkbox"
              name="alertOnExceed"
              checked={formData.alertOnExceed}
              onChange={handleChange}
            />
            <p>Send me an alert if project exceeds <span>80.00</span> % of budget</p>
          </label>
          <div className="button-group">
            <div type='click' onClick={handleBack} className='back'>&lt; Back</div>
            <button type="button" onClick={handleNext}>Next</button>
          </div>
          <div className="tracking-dots">
            <span className={currentPage === 1 ? 'active' : ''}></span>
            <span className={currentPage === 2 ? 'active' : ''}></span>
            <span className={currentPage === 3 ? 'active' : ''}></span>
            <span className={currentPage === 4 ? 'active' : ''}></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectTypeForm;
