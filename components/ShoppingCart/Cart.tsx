"use client";
import React from "react";
import { BsHandbag } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

const Cart = () => {
  const { handleCartClick } = useShoppingCart();
  return (
    <BsHandbag
      size={36}
      onClick={() => handleCartClick()}
      className="cursor-pointer col-start-3 justify-self-end"
    />
  );
};

export default Cart;

export const CartModel = () => {
  const {
    cartCount,
    shouldDisplayCart,
    cartDetails,
    handleCartClick,
    removeItem,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Current items in your cart will be displayed here, click checkout to
            complete
          </SheetDescription>
        </SheetHeader>
        <div className="mt-12">
          {cartCount === 0 ? (
            <div className="">
              <p>Cart empty!</p>
            </div>
          ) : (
            <>
              {Object.values(cartDetails ?? {}).map((item) => {
                return (
                  <>
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt="Product image"
                        className="w-32 h-32 object-cover"
                      />
                      <div className="flex flex-col items-start gap-4">
                        <p className="font-semibold text-[1.25rem]">
                          {item.name}
                        </p>
                        <p className="font-bold text-[1.25rem]">
                          ${item.price}
                        </p>
                        <Button
                          className="p-1"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <Separator className="my-4" />
                  </>
                );
              })}
              <Link href={"/checkout"}>
                <Button>Checkout</Button>
              </Link>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
