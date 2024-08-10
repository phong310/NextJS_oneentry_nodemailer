"use client";
import { getProductById } from "@/app/action";
import Loading from "@/components/Button/Loading";
import ProductPage from "@/components/ProductPage/page";
import { productType } from "@/components/ui/interface";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<productType | any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async (id: string) => {
      setLoading(true);
      const data = await getProductById(parseInt(id));
      setProduct(data[0]);
      setLoading(false);
    };
    getProduct(params.id);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ProductPage product={product} productId={params.id} />
      )}
    </div>
  );
};

export default page;
