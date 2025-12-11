import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BreadcrumbTwo from "../components/BreadcrumbTwo";
import ProductDetails from "../components/ProductDetails";
import BrandSectionOne from "../components/BrandSectionOne";
import FooterTwo from "../components/FooterTwo";

const ProductDetailsPage = () => {

  return (

    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbTwo */}
      <BreadcrumbTwo />

      {/* ProductDetails */}
      <ProductDetails />

      {/* BrandSectionOne */}
      <BrandSectionOne />

      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default ProductDetailsPage;
