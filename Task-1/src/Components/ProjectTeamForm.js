import React, { useState, useEffect } from 'react';

function ProjectTeamForm({ formData, setFormData, handleBack, errors, handleCreate, currentPage }) {
    const [newPerson, setNewPerson] = useState('');
    const [selectedTeam, setSelectedTeam] = useState(formData.team || []);

    // Dummy team members list
    const dummyTeam = ['Sunil', 'Rohan', 'Vinayak', 'Shushma', 'Deepika', 'Nishant'];

    useEffect(() => {
        setFormData({ ...formData, team: selectedTeam });
    }, [selectedTeam]);

    const handleAddPerson = () => {
        if (newPerson && !selectedTeam.includes(newPerson)) {
            setSelectedTeam([...selectedTeam, newPerson]); // Add new person to selected team
            setNewPerson('');
        }
    };

    const handleRemovePerson = (person) => {
        setSelectedTeam(selectedTeam.filter(p => p !== person));
    };

    const handleCancelSelection = (person) => {
        setSelectedTeam(selectedTeam.filter(p => p !== person));
    };

    const handleCheckboxChange = (person) => {
        if (selectedTeam.includes(person)) {
            setSelectedTeam(selectedTeam.filter(p => p !== person));
        } else {
            setSelectedTeam([...selectedTeam, person]);
        }
    };

    return (
        <div className="main-container">
            <div className="form-container">
                <h2>Team</h2>
                <form>
                    <label className='form-1'>
                        Invite or Add a Person:
                        <div className='add-people'>
                            <input
                                type="text"
                                value={newPerson}
                                onChange={(e) => setNewPerson(e.target.value)}
                            />
                            <button type="button" onClick={handleAddPerson}>Add</button>
                        </div>
                        {errors.team && <span className="error">{errors.team}</span>}
                    </label>
                    <div className="selected-team">
                        {selectedTeam.map((person, index) => (
                            <div key={index} className="selected-member">
                                {person}
                                <span className='cancel' onClick={() => handleCancelSelection(person)}>x</span>
                            </div>
                        ))}
                    </div>
                    <div className="team-list">
                        {dummyTeam.map((person, index) => (
                            <label key={index} className="team-member">
                                <input
                                    type="checkbox"
                                    checked={selectedTeam.includes(person)}
                                    onChange={() => handleCheckboxChange(person)}
                                />
                                {person}
                                <span className='remove' onClick={() => handleRemovePerson(person)}>x</span>
                            </label>
                        ))}
                    </div>
                    <div className="button-group">
                        <div type='click' onClick={handleBack} className='back'>&lt; Back</div>
                        <button type="button" onClick={handleCreate}>Create Project</button>
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

export default ProjectTeamForm;
