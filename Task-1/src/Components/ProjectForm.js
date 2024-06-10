import React from 'react';

function ProjectForm({ formData, handleChange, handleNext, errors, currentPage }) {
  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Create Project</h2>
        <form>
          <label className='form-1'>
            Project Name
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder='Enter project name here'
            />
            {errors.projectName && <span className="error">{errors.projectName}</span>}
          </label>
          <label className='form-client'>
            Client
            <div className='client-option'>
              <select
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
              >
                <option value="">Select a client</option>
                <option value="Client1">Client 1</option>
                <option value="Client2">Client 2</option>
                <option value="Client3">Client 3</option>
              </select>
              or
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                placeholder='+ New Client'
              />
            </div>
            {errors.clientName && <span className="error">{errors.clientName}</span>}
          </label>
          <label className='form-1'>
            Dates
            <div className='dates'>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
              {errors.startDate && <span className="error">{errors.startDate}</span>}
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
            {errors.endDate && <span className="error">{errors.endDate}</span>}
          </label>
          <label className='form-1'>
            Notes
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Optional"
            />
          </label>
          <div className="button-group">
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

export default ProjectForm;
