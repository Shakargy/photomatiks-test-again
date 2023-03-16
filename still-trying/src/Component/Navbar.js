import React, { useState } from "react";
import "./Navbar.css";
import logodark from "../assets/images/logodark.png";
import { SignupModal } from "./SignupModal";
import { SignInModal } from "./SignInModal"; // Import the SignInModal component
import { FaUser, FaLock } from "react-icons/fa";

const Navbar = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false); //  state for SignInModal visibility

  const handleSignupModalClose = () => setShowSignupModal(false);
  const handleSignupModalShow = () => setShowSignupModal(true);
  const handleSignInModalClose = () => setShowSignInModal(false); //  event handler to close SignInModal
  const handleSignInModalShow = () => setShowSignInModal(true); //  event handler to show SignInModal

  return (
    <>
      <nav className="navbar navbar-expand-lg static-top SectionNavbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logodark} alt="..." />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link text-white" aria-current="page" href="#">
                  דף הבית
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  מי אנחנו
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  מחירים
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  איך זה עובד
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="#">
                  תמיכה
                </a>
              </li>
            </ul>
            <div className="mx-auto">
              <button
                type="button"
                className="btn loginButton mx-2 px-3"
                onClick={handleSignInModalShow}
              >
                <FaLock /> התחברות
              </button>
              <button
                type="button"
                className="btn registerButton mx-2 px-3"
                onClick={handleSignupModalShow}
              >
                <FaUser /> הרשמה
              </button>
            </div>
          </div>
        </div>
      </nav>
      <SignupModal
        show={showSignupModal}
        handleClose={handleSignupModalClose}
      />
      <SignInModal
        show={showSignInModal}
        handleClose={handleSignInModalClose}
      />
    </>
  );
};

export default Navbar;
