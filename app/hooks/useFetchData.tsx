"use client";
import React, { useCallback, useEffect, useState } from "react";
import { getPageData, getProductsByCategory } from "../action";
import { bannerDataType, CategoriesBannerDataType } from "@/components/ui/interface";

const useFetchData = ({ url = "", categoryUrl = "", fetchBanner = false, fetchCategories = false }) => {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [banner, setBanner] = useState<bannerDataType>({
    title: "",
    image: "",
  });
  const [categories, setCategories] = useState<CategoriesBannerDataType[]>([]);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getPageData(url);
      if (categoryUrl != "") {
        const products = await getProductsByCategory(categoryUrl);
        setProducts(products);
      }
      if (fetchBanner) setBanner(data.bannerData);
      if (fetchCategories) setCategories(data.categoriesObject)
    } catch (e) {
      console.log("Err fetching: ", e);
    } finally {
      setIsLoading(false);
    }
  }, [url, fetchBanner]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { banner, isLoading, products, categories };
};

export default useFetchData;
