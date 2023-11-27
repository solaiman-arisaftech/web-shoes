'use client'
import CartDetails from "@/components/cart/cartDetails";
import React, {useState} from "react";
import CheckoutCard from "./checkoutCard";
import MethodCard from "./methodCard";
import { methodData } from "../lib/data";
import { dataType } from "../lib/dataType";

const page = () => {

  const existingCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  

  
  return (
    <section className="w-full flex flex-col py-48  px-4 md:px-16 lg:px-32 xl:px-64 bg-white mt-14 ">
      <div className="flex justify-between p-4 bg-fuchsia-200">
        <div>Checkout</div>
        <div className="flex gap-4">
          <div>Shop </div>
          <div>Shipping </div>
          <div>Payment </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-8 ">
        <div className="flex flex-col gap-4 w-full md:w-1/2 p-4 ">
          <div className="flex flex-col">
            <div className="font-bold">Order Summary</div>
            <div className="text-xs text-slate-500">
              Check your items. And select a suitable shipping method.
            </div>
          </div>
          <div className="border-1 rounded-lg border-slate-200 p-2">
            {/* <CheckoutCard />
            <CheckoutCard /> */}
            {existingCartItems.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {existingCartItems.map(
              (product: dataType, index: number, totalPrice: number) => (
                <li key={index}>
                  <CheckoutCard
                    key={product.id}
                    {...product}
                   
                  />
                </li>
              )
            )}
          </ul>
        ) : (
          <p className="w-full px-36 py-64">Your cart is empty.</p>
        )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">Shipping methods</div>
            <div className="flex flex-col gap-4">
              {methodData.map((method: any) => (
                <MethodCard key={method.id} method={method} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 bg-slate-50 p-4">
          <div className="flex flex-col">
            <div className="font-bold">Payment Details</div>
            <div className="text-xs text-slate-500">
              Complete your order by providing your payment details.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-xs font-semibold">Email</div>
              <input
                className="border-1 border-slate-300 p-1 w-full rounded text-xs"
                type="text"
                placeholder="your.email@gmail.com"
              />
            </div>
            <div>
              <div className="text-xs font-semibold">Card Holder</div>
              <input
                className="border-1 border-slate-300 p-1 w-full rounded text-xs"
                type="text"
                placeholder="YOUR FULL NAME HERE"
              />
            </div>
            <div>
              <div className="text-xs font-semibold">Card Details</div>
              <div className="flex">
                <input
                  className="border-1 border-slate-300 p-1 w-2/4 rounded text-xs"
                  type="text"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <input
                  className="border-1 border-slate-300 p-1 w-1/4 rounded text-xs"
                  type="text"
                  placeholder="MM/YY"
                />
                <input
                  className="border-1 border-slate-300 p-1 w-1/4 rounded text-xs"
                  type="text"
                  placeholder="CVC"
                />
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold">Billing Address</div>
              <div className="flex">
                <input
                  className="border-1 border-slate-300 p-1 w-2/4 rounded text-xs"
                  type="text"
                  placeholder="Street Address"
                />
                <input
                  className="border-1 border-slate-300 p-1 w-1/4 rounded text-xs"
                  type="text"
                  placeholder="State"
                />
                <input
                  className="border-1 border-slate-300 p-1 w-1/4 rounded text-xs"
                  type="text"
                  placeholder="ZIP"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 border-y-1 border-y-slate-200">
              <div className="flex justify-between text-xs p-1">
                <div>Subtotal</div>
                <div>$100.99</div>
              </div>
              <div className="flex justify-between text-xs p-1">
                <div>Shipping</div>
                <div>$10</div>
              </div>
            </div>

            <div className="flex justify-between text-xs p-1">
              <div>Total</div>
              <div className="text-base font-bold">$100.99</div>
            </div>
            <div className="bg-gradient-to-r from-NeonPink to-purple text-white w-full rounded text-center text-lg py-1 cursor-pointer">
              Confirm order
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
