import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navigation from "../../components/navbar/Navigation";
import PropertyList from "../../components/propertyList/PropertyList";
import "./Home.css";

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer/>
      </div>
    </div>
  );
};

export default Homepage;