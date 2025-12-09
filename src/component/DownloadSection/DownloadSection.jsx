import "./DownloadSection.css";
import phone from "../../assets/iPhone14.png";
//import car from "../../assets/photo14.png";
import google from "../../assets/google.png";
import apple from "../../assets/appel.png";

const DownloadSection = () => {
  return (
    <div className="download-section">
      <div className="download-left">
        <button className="download-btn">DOWNLOAD</button>
        <h1>
          Download Rentcars <br /> App for <span>FREE</span>
        </h1>
        <p>For faster, easier booking and exclusive deals.</p>

        <div className="stores">
          <img src={google} alt="Google Play" />
          <img src={apple} alt="App Store" />
        </div>
      </div>

      <div className="download-right">
        <img src={phone} alt="phone" className="phone" />
        {/* <img src={car} alt="car" className="car" />*/}
      </div>
    </div>
  );
};

export default DownloadSection;
