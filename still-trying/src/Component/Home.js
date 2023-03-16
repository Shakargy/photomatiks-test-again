import React, { useState } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import IMG1 from "./../assets/images/mkt1.jpg";
import IMG2 from "./../assets/images/mkt2.jpg";
import IMG3 from "./../assets/images/mkt3.jpg";
import { FaRegImages } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import { FaUserAlt } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { SignupModal } from "./SignupModal"; // Import the SignupModal component

const Home = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupModalClose = () => setShowSignupModal(false);
  const handleSignupModalShow = () => setShowSignupModal(true);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 bgImage"
            src={IMG1}
            alt="First slide"
            height="500"
          />
          <Carousel.Caption className="TextCaptions">
            <Typography variant="h4" gutterBottom>
              העולם הבא של זיהוי תמונות{" "}
            </Typography>
            <h3>כבר כאן</h3>
            <div class="btn-group my-5" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary rounded mx-3 px-3">
                <div>{"מי אנחנו"}</div>
              </button>
              <button
                type="button"
                class="btn btn-primary rounded mx-3 px-3"
                onClick={handleSignupModalShow}
              >
                <div>{"הרשמה"}</div>
              </button>
              <button type="button" class="btn btn-primary rounded mx-3 px-3">
                <div>{"איך זה עובד"}</div>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bgImage"
            src={IMG2}
            alt="Second slide"
            height="500"
          />
          <Carousel.Caption className="TextCaptions">
            <Typography variant="h4" gutterBottom>
              שאג שאג שאג
            </Typography>

            <h3>שאג שאג שאג</h3>
            <div class="btn-group my-5" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary rounded mx-3 px-3">
                <div>{"מי אנחנו"}</div>
              </button>
              <button
                type="button"
                class="btn btn-primary rounded mx-3 px-3"
                onClick={handleSignupModalShow}
              >
                <div>{"הרשמה"}</div>
              </button>
              <button type="button" class="btn btn-primary rounded mx-3 px-3">
                <div>{"איך זה עובד"}</div>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bgImage"
            src={IMG3}
            alt="Third slide"
            height="500"
          />
          <Carousel.Caption className="TextCaptions">
            <Typography variant="h4" gutterBottom>
              שאג שאג שאג
            </Typography>
            <h3>שאג שאג שאג</h3>
            <div class="btn-group my-5" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary rounded mx-3 px-3">
                <div>{"מי אנחנו"}</div>
              </button>
              <button
                type="button"
                class="btn btn-primary rounded mx-3 px-3"
                onClick={handleSignupModalShow}
              >
                <div>{"הרשמה"}</div>
              </button>
              <button type="button" class="btn btn-primary rounded mx-3 px-3">
                <div>{"איך זה עובד"}</div>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row cardSection">
          <div className="col col-md-12">
            <div class="card h-100 w-auto ">
              <div class="card-body rounded">
                <div className="row">
                  <div className="col-4">
                    <FaUserAlt className="cardLogo h2" /> <h5>יצירת משתמש </h5>
                    <p className="text-secondary">
                      פתח משתמש חדש דרך לחצן ההרשמה
                    </p>
                  </div>
                  <div className="col">
                    <FaRegImages className="cardLogo h2" />{" "}
                    <h5>העלאת תמונות</h5>
                    <p className="text-secondary">
                      העלה את התמונות דרך ממשק ייעודי
                    </p>
                  </div>
                  <div className="col">
                    <IoIosCash className="cardLogo h2" /> <h5>זיהוי הפנים</h5>
                    <p className="text-secondary">
                      טכנולוגיה פורצת דרך לזיהוי פנים תמיין את התמונות שלך
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignupModal
        show={showSignupModal}
        handleClose={handleSignupModalClose}
      />
    </>
  );
};

export default Home;
