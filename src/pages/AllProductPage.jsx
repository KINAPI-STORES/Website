import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import AllProduct from "../components/AllProduct";
import BrandSectionOne from "../components/BrandSectionOne";
import FooterTwo from "../components/FooterTwo";



const AllProductPage = () => {

  return (

    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* AllProduct */}
      <AllProduct />

      {/* BrandSectionOne */}
      <BrandSectionOne />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default AllProductPage;
