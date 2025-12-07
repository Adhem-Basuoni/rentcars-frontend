import "./Navbar.css";
import logo from "../../assets/logo.svg"; // عدل المسار حسب مكان اللوجو عندك

const Navbar = () => {
  return (
    <nav className="navbar-frame">
      {/* اللوجو */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo.png" />
      </div>

      <div className="navbar-links">
        <a href="#">Become a renter</a>
        <a href="#">Rental deals</a>
        <a href="#">How it work</a>
        <a href="#">Why choose us</a>
        <a href="#">Sign in</a>
      </div>

      <div className="navbar-button">
        <span>Sign up</span>
      </div>
    </nav>
  );
};

export default Navbar;
