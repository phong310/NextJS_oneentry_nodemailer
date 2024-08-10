import React from "react";
import Hero from "./Hero";
import { bannerDataType, CategoriesBannerDataType, productType } from "../ui/interface";
import Featured from "./Featured";
import Categories from "./Categories";

interface landingPageProps {
  bannerData: bannerDataType;
  featureProducts: productType[];
  categoriesData: CategoriesBannerDataType[]
}

const LandingPage: React.FC<landingPageProps> = ({
  bannerData,
  featureProducts,
  categoriesData,
}) => {
  return (
    <section className="flex flex-col w-full">
      <Hero bannerData={bannerData} />
      <Featured featureProducts={featureProducts} />
      <Categories categoriesData={categoriesData} />
    </section>
  );
};

export default LandingPage;
