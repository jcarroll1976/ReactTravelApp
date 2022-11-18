import React from "react";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImageCarousel />
      <Footer />
    </div>
  );
}

export default App;
