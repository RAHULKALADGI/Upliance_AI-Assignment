import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userId = Math.floor(Math.random() * 1000000);
    
    localStorage.setItem(`user_${userId}`, JSON.stringify(formData));
    setUnsavedChanges(false);
    
    setFormData({
      name: '',
      address: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div style={{padding : '1vw' ,width : '30vw' , height : '30vh' , textAlign : 'center'}}>
      <h2>User Data Form</h2>
      <form 
      style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'space-between' , height : '20vh'}}
      onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {unsavedChanges && (
        <p style={{ color: 'red' }}>You have unsaved changes!</p>
      )}
    </div>
  );
};

export default UserForm;

