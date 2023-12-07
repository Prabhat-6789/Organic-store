import React, { useContext, useState } from 'react';
import './loginForm.css';
import UserContext from '../../Context/userContext';
import ProfileNotification from './profileNotification';
const LoginForm = () => {
    const {Name,setName,Email,setEmail,Password,setPassword} = useContext(UserContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleNameChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      name: value,
    });
  }
    const handleEmailChange = (e) => {
        const { value } = e.target;
        //setEmail(value);
        setFormData({
          ...formData,
          email: value,
        });
    }
    
    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setFormData({
          ...formData,
          password: value,
        });
    }    

  const validateForm = () => {
    let valid = true;

    // Validate name
    if (!formData.name.trim()) {
      setFormErrors({
        ...formErrors,
        name: 'Please enter your name',
      });
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormErrors({
        ...formErrors,
        email: 'Please enter a valid email address',
      });
      valid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      setFormErrors({
        ...formErrors,
        password: 'Please enter your password',
      });
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit")
    // setName(formData.name);
    // setEmail(formData.email);
    // setPassword(formData.password);
    console.log("name:",Name," email: ",Email,"password: ",Password);

    if (validateForm()) {
        // Form submission logic
        setShowNotification(true);

      // Hide the notification after a delay (e.g., 3 seconds)
      setTimeout(() => {
        setShowNotification(false);
        setName(formData.name);
        setEmail(formData.email);
        setPassword(formData.password);
      }, 2000);
        console.log('Form submitted:', formData);
      } 
      
      else {
        console.log('Form not submitted due to validation errors');
      }
  };

  const handleNotificationClose = () => {
    // Handle the "Cut" action (e.g., clear the cart)
      setShowNotification(false);
    };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleNameChange}
              />
            </label>
            <p className="error">{formErrors.name}</p>
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleEmailChange}
              />
            </label>
            <p className="error">{formErrors.email}</p>
          </div>

          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handlePasswordChange}
              />
            </label>
            <p className="error">{formErrors.password}</p>
          </div>

          <div>
            <button type="submit">Login</button>
                {showNotification && (
                <ProfileNotification onClose={handleNotificationClose} />
                )}
          </div>
        </form>
      ) : (
        <div className="success-notification">
          <p>You have been logged in successfully!</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
