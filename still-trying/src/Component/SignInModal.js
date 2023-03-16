import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./SignInModal.css";

export const SignInModal = ({ show, handleClose }) => {
  const [formValues, setFormValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSignInClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.photomatiks.com/", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        handleClose();
      } else {
        throw new Error("Invalid username/password");
      }
    } catch (error) {
      setErrorMessage("שם משתמש/סיסמא שגויים");
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton={false}>
        <Modal.Title className="text-center text-primary">כניסה</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <div className="w-100">
          <Form>
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
                className="text-center"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="זכור אותי"
                name="rememberMe"
                className="text-center"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              block
              onClick={handleSignInClick}
            >
              כניסה
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

export default SignInModal;
