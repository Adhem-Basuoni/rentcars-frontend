import Navbar from "./component/navbar/navbar";
import Home from "./pages/home/home.jsx";
import HowItWorks from "./pages/HowItWorks/HowItWorks.jsx";
import WhyChooseUs from "./pages/WhyChooseUs/WhyChooseUs.jsx";
import PopularDeals from "../src/component/popular/PopularDeals.jsx";

import "./App.css"; // CSS للصفحة بالكامل
import Brands from "./pages/Brands/Brands.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <HowItWorks />
      <Brands />
      <WhyChooseUs />

      <PopularDeals />
    </>
  );
}

export default App;
