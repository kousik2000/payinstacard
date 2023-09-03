import "./index.css";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = (props) => {
    
    const handleCheckboxChange = (e) => {
        const navbarList = document.querySelector(".navbar-list");
        if (e.target.checked) {
          navbarList.classList.add("checked");
        } else {
          navbarList.classList.remove("checked");
        }
      };        

  return (
    <nav className="navbar">
    <div className="nav-container">
      <img src="./images/logo.png" alt="logo" className="logo" />

      <ul className="navbar-list">
          <li className="nav-list">
            Home
          </li>
          <li className="nav-list">
            About
          </li>
          <li className="nav-list">
            Schedules
          </li>
          <li className="nav-list">
            Membership
          </li>
          <li className="nav-list">
            Pricing
          </li>
          <li className="nav-offer offers-text" >Offers</li>
          <li className="nav-list nav-offer" >
          <button className="nav-button">Courses</button>
          </li>
      
          
      </ul>
      </div>

      <div className="sign-in-container">
        <p className="offers-text" >Offers</p>
        <button className="nav-button">Courses</button>
      </div>
      

      <input type="checkbox" id="check" onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu className="nav-icon" />
      </label>
    </nav>
  );
};

export default Header;
