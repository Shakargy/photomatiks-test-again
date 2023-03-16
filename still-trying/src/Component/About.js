import React from "react";
import "./About.css"
import aboutus from "../assets/images/aboutus.jpg";
import md_5aa7473ed3d04 from "../assets/images/md_5aa7473ed3d04.jpg";
import { FaLock, FaPiggyBank, FaIdCard, FaDna } from "react-icons/fa";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h2>מי אנחנו</h2>
                    <p className="text-secondary">
                        {" "}
                        <span>
                            - שאג -
                        </span>
                    </p>
                </div>
                {/* ABOUT US */}
                <div className="container">
                    <div className="row my-3 mx-auto aboutSection">
                        <div className="col">
                            <img src={aboutus} alt="" width="600" height="auto" />
                        </div>
                        <div className="col">
                            <h4 className="mx-5 px-4">אפשר לכתוב</h4>
                            <p>
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. ושבעגט לבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                            </p>
                            
                        </div>
                    </div>
                </div>
                {/* ABOUT TWO */}
                <div className="container">
                    <div className="row text-center my-5">
                        <div className="col-md-7 bitSection">
                            <div className="row">
                                <div className="col-md-6">
                                    <FaLock className="my-3 h3" />
                                    <h4 className="text-primary">אבטחה</h4>
                                    <p className="text-secondary">התמונות שלך מאובטחות ברמה הגבוהה ביותר ולעולם לא ישמרו אצלנו מעבר לזמן שתבחר</p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-md-5">
                            <img src={md_5aa7473ed3d04} alt="" width="auto" height="550" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
