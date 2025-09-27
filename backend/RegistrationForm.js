import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        email: '',
        mobile: '',
        age: '',
        healthIssues: '',
        goal: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to API)
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div>
                <label>Full Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
                <label>Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Mobile Number:</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div>
                <label>Health Issues:</label>
                <textarea name="healthIssues" value={formData.healthIssues} onChange={handleChange} />
            </div>
            <div>
                <label>Goal to Achieve:</label>
                <textarea name="goal" value={formData.goal} onChange={handleChange} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;