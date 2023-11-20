import React from "react";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="App">
      <Layout />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
