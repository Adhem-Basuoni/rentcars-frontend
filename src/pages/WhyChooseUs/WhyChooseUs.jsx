import "./WhyChooseUs.css";

// icons
import icon1 from "../../assets/best.svg";
import icon2 from "../../assets/experience.svg";
import icon3 from "../../assets/hour.svg";
import icon4 from "../../assets/technical.svg";

// images
import car from "../../assets/Audi1.png";
import triangle from "../../assets/vectorecar4.png";

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <div className="why-left">
        <img src={triangle} alt="bg" className="triangle-bg" />
        <img src={car} alt="car" className="car-img" />
      </div>

      <div className="why-right">
        <span className="why-badge">WHY CHOOSE US</span>

        <h2 className="why-title">
          We offer the best experience <br />
          with our rental deals
        </h2>

        <div className="why-items">
          <div className="why-item">
            <img src={icon1} alt="" />
            <div>
              <h3>Best price guaranteed</h3>
              <p>
                Find a lower price? We'll refund you 100% of the difference.
              </p>
            </div>
          </div>

          <div className="why-item">
            <img src={icon2} alt="" />
            <div>
              <h3>Experience driver</h3>
              <p>We have many experienced drivers for you.</p>
            </div>
          </div>

          <div className="why-item">
            <img src={icon3} alt="" />
            <div>
              <h3>24 hour car delivery</h3>
              <p>Book anytime and we deliver directly to you.</p>
            </div>
          </div>

          <div className="why-item">
            <img src={icon4} alt="" />
            <div>
              <h3>24/7 technical support</h3>
              <p>Contact Rentcars support any time you need help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
