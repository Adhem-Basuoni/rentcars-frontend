import "./Footer.css";
import logo from "../../assets/logo.svg";
import location from "../../assets/locationfooter.svg";
import phone from "../../assets/callfooter.svg";
import mail from "../../assets/smsfooter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1 */}
        <div className="footer-col">
          <img src={logo} alt="logo" className="footer-logo" />

          <div className="footer-item">
            <img src={location} alt="location icon" />
            <p>25666 H. Glenallen, Alaska, 99588, USA</p>
          </div>

          <div className="footer-item">
            <img src={phone} alt="phone icon" />
            <p>+603 4784 273 12</p>
          </div>

          <div className="footer-item">
            <img src={mail} alt="mail icon" />
            <p>rentcars@gmail.com</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Our Product</h3>
          <p>Career</p>
          <p>Car</p>
          <p>Packages</p>
          <p>Features</p>
          <p>Pricing</p>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Resources</h3>
          <p>Download</p>
          <p>Help Centre</p>
          <p>Guides</p>
          <p>Partner Network</p>
          <p>Developer</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>About Rentcars</h3>
          <p>Why choose us</p>
          <p>Our Story</p>
          <p>Press Center</p>
          <p>Advertise</p>
        </div>

        {/* Column 5 */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="socials">
            <i className="ri-facebook-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-youtube-line"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © Copyright 2025 - Rentcars. All Rights Reserved
        <h1>devolpe BY Adhem Basuiony</h1>
      </div>
    </footer>
  );
};

export default Footer;
