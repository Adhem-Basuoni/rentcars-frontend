import "./PopularDeals.css";

// images (استبدل دول عندك بالمسارات الصح)
import car1 from "../../assets/jaguoir.png";
import car2 from "../../assets/Audiir2.jpg";
import car3 from "../../assets/bmwm3.png";
import car4 from "../../assets/lamborginy.png";

// icons
import star from "../../assets/star.svg";
import users from "../../assets/user.svg";
import gear from "../../assets/gear.svg";
import ac from "../../assets/ac.svg";
import door from "../../assets/door.svg";

const PopularDeals = () => {
  const cars = [
    {
      image: car1,
      name: "Jaguar XE L P250",
      rating: "4.8 (2,436 reviews)",
      passengers: "4 Passengers",
      type: "Auto",
      ac: "Air Conditioning",
      doors: "4 Doors",
      price: "1,800",
    },
    {
      image: car2,
      name: "Audi R8",
      rating: "4.8 (1,636 reviews)",
      passengers: "2 Passengers",
      type: "Auto",
      ac: "Air Conditioning",
      doors: "2 Doors",
      price: "2,100",
    },
    {
      image: car3,
      name: "BMW M3",
      rating: "4.5 (2,036 reviews)",
      passengers: "4 Passengers",
      type: "Auto",
      ac: "Air Conditioning",
      doors: "4 Doors",
      price: "1,600",
    },
    {
      image: car4,
      name: "Lamborghini Huracan",
      rating: "4.3 (2,236 reviews)",
      passengers: "2 Passengers",
      type: "Auto",
      ac: "Air Conditioning",
      doors: "2 Doors",
      price: "2,300",
    },
  ];

  return (
    <div className="popular-container">
      <button className="section-tag">Popular rental deals</button>
      <h2 className="section-title">Most popular cars rental deals</h2>

      <div className="cards-container">
        {cars.map((car, i) => (
          <div className="car-card" key={i}>
            <img src={car.image} className="car-img" alt="" />

            <h3 className="car-name">{car.name}</h3>

            <div className="rating">
              <img src={star} alt="" />
              <span>{car.rating}</span>
            </div>

            <div className="car-info">
              <span>
                <img src={users} /> {car.passengers}
              </span>
              <span>
                <img src={gear} /> {car.type}
              </span>
              <span>
                <img src={ac} /> {car.ac}
              </span>
              <span>
                <img src={door} /> {car.doors}
              </span>
            </div>

            <div className="price-row">
              <div className="price">
                <span>Price</span>
                <h3>
                  ${car.price} <span>/day</span>
                </h3>
              </div>
              <button className="rent-btn">Rent Now →</button>
            </div>
          </div>
        ))}
      </div>

      <button className="show-btn">Show all vehicles →</button>
    </div>
  );
};

export default PopularDeals;
