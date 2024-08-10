"use client";
import React, { useCallback, useEffect, useState } from "react";
import { getFormByMarker, parseCartDetails } from "../action";
import Loading from "@/components/Button/Loading";
import CheckOutPage from "@/components/CheckOutPage/CheckOutPage";
import { useShoppingCart } from "use-shopping-cart";
import { CartDetailsType } from "@/components/ui/interface";

const CheckoutPage = () => {
  const { cartDetails } = useShoppingCart();
  const [isLoading, setLoading] = useState(true);
  const [fields, setFormFields] = useState<string[]>([""]);
  const [parseCartDetail, setCartDetail] = useState<CartDetailsType[]>([]);
  const [cartTotal, setTotal] = useState(0);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const formFields = await getFormByMarker("order");
      const { result, total } = await parseCartDetails(cartDetails);
      setFormFields(formFields);
      setCartDetail(result);
      setTotal(total);
    } catch (e) {
      console.log("Err fetching data: ", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CheckOutPage
            formFields={fields}
            total={cartTotal}
            cartDetails={parseCartDetail}
          />
        </>
      )}
    </>
  );
};

export default CheckoutPage;
