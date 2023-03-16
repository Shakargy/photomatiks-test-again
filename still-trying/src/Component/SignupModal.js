import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./SignupModal.css";

export const SignupModal = ({ show, handleClose }) => {
  const [formValues, setFormValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSignupClick = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    const requiredFields = [
      "fullName",
      "phone",
      "email",
      "password",
      "confirmPassword"
    ];
    const hasEmptyFields = requiredFields.some((field) => !formValues[field]);
    if (hasEmptyFields) {
      setErrorMessage("כל השדות חייבים להיות מלאים");
      return;
    }

    // Check if password fields match
    if (formValues.password !== formValues.confirmPassword) {
      setErrorMessage("סיסמאות לא תואמות");
      return;
    }

    // Send data to backend API
    fetch("https://api.photomatiks.com", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          handleClose();
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        setErrorMessage("Failed to submit form");
        console.error(error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton={false}>
        <Modal.Title className="text-center text-primary">הרשמה</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <div className="w-100">
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>שם מלא</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="הכנס שם מלא"
                className="text-center"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>טלפון</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="הכנס טלפון"
                className="text-center"
                onChange={handleInputChange}
                onKeyPress={(event) => {
                  const keyCode = event.which || event.keyCode;
                  const keyValue = String.fromCharCode(keyCode);
                  if (!/^\d*$/.test(keyValue)) {
                    event.preventDefault();
                  }
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>אימייל</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="הכנס אימייל"
                className="text-center"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>סיסמא</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="הכנס סיסמא"
                className="                text-center"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>אימות סיסמא</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="הכנס סיסמא שוב"
                className="text-center"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              block
              onClick={handleSignupClick}
            >
              הירשם
            </Button>

            {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} block>
          סגור
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
