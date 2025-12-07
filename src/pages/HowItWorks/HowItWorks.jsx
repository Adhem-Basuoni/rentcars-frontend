import "./HowItWorks.css";

import icon1 from "../../assets/location-tick.svg";
import icon2 from "../../assets/calendar.svg"; // صححنا الامتداد
import icon3 from "../../assets/car2.svg";

const HowItWorks = () => {
  return (
    <div className="how-container">
      <div className="how-tag">HOW IT WORK</div>

      <h2 className="how-title">Rent with following 3 working steps</h2>

      <div className="how-steps">
        <div className="step-box">
          <img src={icon1} alt="" className="step-icon" />
          <h3>Choose location</h3>
          <p>Choose your and find your best car</p>
        </div>

        <div className="step-box">
          <img src={icon2} alt="" className="step-icon" />
          <h3>Pick-up date</h3>
          <p>Select your pick up date and time to book your car</p>
        </div>

        <div className="step-box">
          <img src={icon3} alt="" className="step-icon" />
          <h3>Book your car</h3>
          <p>Book your car and we will deliver it directly to you</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
