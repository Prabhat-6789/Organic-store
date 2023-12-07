import React, { useState } from 'react';
import './dropDown.css';
const Dropdown = ({par,ques}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <button onClick={toggleDropdown}>{par}</button>

      {isDropdownOpen && (
        <div className="dropdown-content">
          <p>{ques}</p>
          {/* Add more <p> tags as needed */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
