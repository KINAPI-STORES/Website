import React from "react";
import Preloader from "../helper/Preloader";
import SaleOfferTwo from "../components/SaleOfferTwo";
import HeaderOne from "../components/HeaderOne";
import BannerTwo from "../components/BannerTwo";
import PopularTwo from "../components/PopularTwo";
import SellingTwo from "../components/SellingTwo";
import ArrivalTwo from "../components/ArrivalTwo";
import FeaturedTwo from "../components/FeaturedTwo";
import ServiceOne from "../components/ServiceOne";
import Testimonial from "../components/Testimonial";
import BrandSectionTwo from "../components/BrandSectionTwo";
import BecomeSellerTwo from "../components/BecomeSellerTwo";
import ResourceOne from "../components/ResourceOne";
import Newsletter from "../components/Newsletter";
import FooterOne from "../components/FooterOne";



const HomePage = () => {
  
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerTwo */}
      <BannerTwo />

      {/* PopularTwo */}
      <PopularTwo />

      {/* SellingTwo */}
      <SellingTwo />

      {/* ArrivalTwo */}
      <ArrivalTwo />

      {/* ServiceOne */}
      <ServiceOne />

      {/* Testimonial */}
      <Testimonial />
           
     {/* BecomeSellerTwo */}
     <BecomeSellerTwo />

      {/* FooterOne */}
      <FooterOne />
    </>

  );
};

export default HomePage;
