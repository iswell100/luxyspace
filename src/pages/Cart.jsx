import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb/Index";

import Footer from "../parts/Footer";
import Sitemap from "../parts/Sitemap";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

export default function Cart() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart/91231", name: "Shopping Cart" },
        ]}
      />

      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  );
}
