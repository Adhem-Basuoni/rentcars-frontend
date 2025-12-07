// Imports
import Calendar from "../../assets/calendar.svg?react";
import Location from "../../assets/location.svg?react";
import carHero from "../../assets/car1.png";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        {/* LEFT TEXT */}
        <div className="hero-left">
          <h1 className="hero-title">
            Find, book and rent a car <span className="highlight">Easily</span>
          </h1>
          <p className="hero-sub">
            Get a car wherever and whenever you need it with your IOS & Android
            device.
          </p>
        </div>

        {/* RIGHT CAR */}
        <div className="car-image-container">
          <img src={carHero} className="car-hero-img" alt="Car" />
        </div>
      </div>

      {/* FILTERS UNDER HERO */}
      <div className="filters-container">
        <div className="frame-filters">
          {/* Location */}
          <div className="section">
            <Location className="icon" />
            <div className="labels">
              <div className="label-title">Location</div>
              <div className="label-sub">Search your location</div>
            </div>
          </div>

          {/* Pickup */}
          <div className="section">
            <Calendar className="icon" />
            <div className="labels">
              <div className="label-title">Pickup date</div>
              <div className="label-sub">Tue 15 Feb, 09:00</div>
            </div>
          </div>

          {/* Return */}
          <div className="section">
            <Calendar className="icon" />
            <div className="labels">
              <div className="label-title">Return date</div>
              <div className="label-sub">Thu 16 Feb, 11:00</div>
            </div>
          </div>

          {/* Button */}
          <div className="search-btn">Search</div>
        </div>
      </div>
    </>
  );
};

export default Home;
