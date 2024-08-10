import React, { useEffect, useState } from "react";
import { bannerDataType, productType } from "../ui/interface";
import { ProductList } from "../LandingPage/Featured";
import Filter from "../Filter/Filter";

interface CategoryPageProps {
  products: productType[];
  banner: bannerDataType;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ products, banner }) => {
  const [filterOption, setFilter] = useState("all");
  const [filterProducts, setFilterProducts] = useState(products);
  useEffect(() => {
    if (filterOption == "all") {
      setFilterProducts(products);
    } else {
      setFilterProducts(
        products.filter((product: productType) =>
          product.categories.includes(filterOption)
        )
      );
    }
  }, [filterOption]);

  return (
    <section className="flex flex-col items-center mt-12 font-Outfit">
      <img
        src={banner.image}
        className="relative w-full h-[160px] md:h-[320px] object-cover"
        alt="category banner"
      />
      <p className="text-[3rem] md:text-[6rem] top-[20%] md:top-[30%] font-normal absolute text-white">
        {banner.title}
      </p>
      <div className="w-full flex flex-col items-start md:grid md:grid-cols-4">
        <Filter setFilter={setFilter} />
        <ProductList products={filterProducts} />
      </div>
    </section>
  );
};

export default CategoryPage;
