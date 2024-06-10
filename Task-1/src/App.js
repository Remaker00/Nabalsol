import React, { useState, useEffect } from 'react';
import ProjectForm from './Components/ProjectForm';
import ProjectTypeForm from './Components/ProjectTypeForm';
import ProjectManageForm from './Components/ProjectManageForm';
import ProjectTeamForm from './Components/ProjectTeamForm';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    startDate: '',
    endDate: '',
    notes: '',
    hourlyRate: '',
    budgetHours: '',
    budgetReset: false,
    alertOnExceed: false,
    manageProjects: 'Everyone',
    team: [],
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('projectFormData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (validateForm()) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Project Created:", formData);
      alert('Project has been created check in local storage');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (currentPage === 1) {
      if (!formData.projectName) errors.projectName = 'Project Name is required';
      if (!formData.clientName) errors.clientName = 'Client Name is required';
      if (!formData.startDate) errors.startDate = '';
      if (!formData.endDate) errors.endDate = 'Start & End Date is required';
    }

    if (currentPage === 2) {
      if (!formData.hourlyRate) errors.hourlyRate = 'Hourly Rate is required';
      if (!formData.budgetHours) errors.budgetHours = 'Budget Hours are required';
    }

    if (currentPage === 4) {
      if (formData.team.length === 0) errors.team = 'Team member is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="App">
      {currentPage === 1 && (
        <ProjectForm
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          errors={errors}
          currentPage={currentPage}
        />
      )}
      {currentPage === 2 && (
        <ProjectTypeForm
          formData={formData}
          handleChange={handleChange}
          handleBack={handleBack}
          handleNext={handleNext}
          errors={errors}
          currentPage={currentPage}
        />
      )}
      {currentPage === 3 && (
        <ProjectManageForm
          formData={formData}
          handleChange={handleChange}
          handleBack={handleBack}
          handleNext={handleNext}
          currentPage={currentPage}
        />
      )}
      {currentPage === 4 && (
        <ProjectTeamForm
          formData={formData}
          setFormData={setFormData}
          handleBack={handleBack}
          handleCreate={handleCreate}
          errors={errors}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
