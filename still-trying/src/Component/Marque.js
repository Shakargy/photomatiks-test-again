import "./Marquee.css";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <marquee className="marqueeSection" direction="right">
            אנחנו שאגגגגגגגג יותר מ5000 לקוחות מרוצים
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Marquee;
