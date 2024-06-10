import React from 'react';

function ProjectManageForm({ formData, handleChange, handleBack, handleNext, currentPage }) {
  const handleSelection = (value) => {
    handleChange({ target: { name: 'manageProjects', value } });
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h2>Who Can Manage Projects</h2>
        <div className="option-list">
          <div
            className={`option-item ${formData.manageProjects === 'Everyone' ? 'selected' : ''}`}
            onClick={() => handleSelection('Everyone')}
          >
            Everyone
            <p>All users can now to see it, but guests cannot access the projects.</p>
          </div>
          <div
            className={`option-item ${formData.manageProjects === 'Only Admins' ? 'selected' : ''}`}
            onClick={() => handleSelection('Only Admins')}
          >
            Only Admin's
            <p>Only admins can manage everything.</p>
          </div>
          <div
            className={`option-item ${formData.manageProjects === 'Only specific people' ? 'selected' : ''}`}
            onClick={() => handleSelection('Only specific people')}
          >
            Only to specific people
            <p>Only some specific people can be able to see it.</p>
          </div>
        </div>
        <div className="button-group">
          <div type='button' onClick={handleBack} className='back'>&lt; Back</div>
          <button type="button" onClick={handleNext}>Next</button>
        </div>
        <div className="tracking-dots">
          <span className={currentPage === 1 ? 'active' : ''}></span>
          <span className={currentPage === 2 ? 'active' : ''}></span>
          <span className={currentPage === 3 ? 'active' : ''}></span>
          <span className={currentPage === 4 ? 'active' : ''}></span>
        </div>
      </div>
    </div>
  );
}

export default ProjectManageForm;
