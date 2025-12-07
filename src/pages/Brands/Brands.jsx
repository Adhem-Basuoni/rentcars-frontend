import "./Brands.css";

// logos (بدّلهم بصورك الحقيقية)
import honda from "../../assets/Frame 25.svg";
import jaguar from "../../assets/Frame 26.svg";
import nissan from "../../assets/Group1.svg";
import volvo from "../../assets/Group.svg";
import audi from "../../assets/LGF7SA.tif_1_.svg";
import acura from "../../assets/acura.svg";
import bmw from "../../assets/bmw.svg";
import lexus from "../../assets/lexus.svg";
import volkswagen from "../../assets/volkswagen.svg";

const Brands = () => {
  return (
    <div className="brands-container">
      <div className="brands-wrapper">
        <img src={honda} alt="brand" />
        <img src={jaguar} alt="brand" />
        <img src={nissan} alt="brand" />
        <img src={volvo} alt="brand" />
        <img src={audi} alt="brand" />
        <img src={acura} alt="brand" />
        <img src={bmw} alt="brand" />
        <img src={lexus} alt="brand" />
        <img src={volkswagen} alt="brand" />
      </div>
    </div>
  );
};

export default Brands;
