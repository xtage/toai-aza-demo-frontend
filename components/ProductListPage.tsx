/* eslint-disable prefer-const */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Product } from "@/types/product";
import axios from "axios";
import Footer from "@/components/Footer";
import ProductFilters from "@/components/ProductFilters";
import { useCategory } from "@/context/CategoryContext";
import ReinitializeChat from "./ReinitializeChat";

function formatPrice(n: number) {
  return "₹" + n?.toLocaleString("en-IN");
}

const filterSections = [
  {
    title: "Categories",
    type: "search" as const,
    options: [
      { id: "Embroidered_235", name: "Embroidered", value: "embroidered" },
      { id: "Plain_236", name: "Plain", value: "plain" },
      { id: "Printed_234", name: "Printed", value: "printed" },
      { id: "Stylized_237", name: "Stylized", value: "stylized" },
    ],
    searchPlaceholder: "Search for categories",
  },
  {
    title: "Designers",
    type: "search" as const,
    options: [
      { id: "Masumi_Mewawalla_2172", name: "Masumi Mewawalla", value: "masumi_mewawalla" },
      { id: "Samyukta_Singhania_1949", name: "Samyukta Singhania", value: "samyukta_singhania" },
      { id: "Anushree_Reddy_245", name: "Anushree Reddy", value: "anushree_reddy" },
    ],
    searchPlaceholder: "Search for designers",
  },
  {
    title: "Price",
    type: "price" as const,
    options: [],
  },
  {
    title: "Size",
    type: "size" as const,
    options: [
      { id: "41_XXS", name: "XXS", value: "xxs" },
      { id: "1_XS", name: "XS", value: "xs" },
      { id: "2_S", name: "S", value: "s" },
      { id: "3_M", name: "M", value: "m" },
      { id: "4_L", name: "L", value: "l" },
      { id: "5_XL", name: "XL", value: "xl" },
      { id: "6_XXL", name: "XXL", value: "xxl" },
      { id: "7_FREE_SIZE", name: "FREE SIZE", value: "free_size" },
    ],
  },
  {
    title: "Color",
    type: "color" as const,
    options: [
      { id: "1_Beige", name: "Beige", value: "beige", color: "#d4ba97" },
      { id: "2_Black", name: "Black", value: "black", color: "#000000" },
      { id: "3_Blue", name: "Blue", value: "blue", color: "#0063b1" },
      { id: "14_Red", name: "Red", value: "red", color: "#f60109" },
      { id: "9_White", name: "White", value: "white", color: "#ffffff" },
      { id: "11_Yellow", name: "Yellow", value: "yellow", color: "#ffff00" },
    ],
  },
  {
    title: "Shipping Time",
    type: "radio" as const,
    options: [
      { id: "24_Hours_0", name: "24 Hours", value: "24_hours" },
      { id: "1_Week_1", name: "1 Week", value: "1_week" },
      { id: "2_Weeks_2", name: "2 Weeks", value: "2_weeks" },
      { id: "3_Weeks_3", name: "3 Weeks", value: "3_weeks" },
    ],
  },
  {
    title: "Occasion",
    type: "checkbox" as const,
    options: [
      { id: "Festive_54", name: "Festive", value: "festive" },
      { id: "Wedding_16", name: "Wedding", value: "wedding" },
      { id: "Party_19", name: "Party", value: "party" },
      { id: "Mehendi_82", name: "Mehendi", value: "mehendi" },
    ],
  },
];

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { selectedSubCategory } = useCategory();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const fetchProducts = async () => {
      if (!selectedSubCategory) return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("/api/product-list", {
          params: { category_id: selectedSubCategory },
        });

        if (response.data.results.status) {
          const data = response.data.results.data || [];
          setProducts(Array.isArray(data) ? data : []);
        } else {
          setError(response.data.results.message || "Failed to fetch product");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err?.message || "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    // debounce to wait for context update
    timeout = setTimeout(fetchProducts, 200);

    return () => clearTimeout(timeout);
  }, [selectedSubCategory]);


  return (
    <div>
      <Header />
      {/* <ReinitializeChat/> */}
      <main className="py-6 wrapperContainer">
        <div className="flex items-end mt-6">
          <h1 className="text-xl text-azaBlackShade4 lg:text-azaBlackShade3 ">Designer Nehru Jacket &amp; Sets</h1>
          <p className="hidden ml-1 text-[13px] text-azaGreyShade2 lg:block leading-[2]">- Showing 6,996 Styles</p>
        </div>
        <div className="border border-[#0000000d] p-4 my-4 bg-[#00000005] rounded-lg">
          <p className="text-sm leading-5 text-azaBlackShade4">Add these designer-constructed men&apos;s clothing collections that comprise traditional, ethnic, floral and printed Nehru jackets and sets, ideal for all types of occasions and festivals on our website.
          </p>
        </div>
        <div className="flex items-center justify-between flex-1 py-6">
          <div className="flex items-center space-x-4 overflow-x-scroll scrollbar-none whitespace-nowrap">
            <div className="border-azaGreyShade1 text-azaBlackShade3 flex items-center space-x-2 border py-2 px-3 text-sm rounded-lg cursor-pointer hover:bg-azaBrandSecondaryLight hover:border-AzaRed hover:text-AzaRed">
              <i className="ri-bard-line" style={{ backgroundPosition: "-97px -114px", color: '#c73d1f' }}></i>
              <p className="font-normal">New</p></div><div className="border-azaGreyShade1 text-azaBlackShade3 flex items-center space-x-2 border py-2 px-3 text-sm rounded-lg cursor-pointer hover:bg-azaBrandSecondaryLight hover:border-AzaRed hover:text-AzaRed"><i className="ri-flashlight-line" style={{ backgroundPosition: " -54px -114px", color: '#c73d1f' }}></i><p className="font-normal">Ready to Ship</p></div><div className="border-azaGreyShade1 text-azaBlackShade3 flex items-center space-x-2 border py-2 px-3 text-sm rounded-lg cursor-pointer hover:bg-azaBrandSecondaryLight hover:border-AzaRed hover:text-AzaRed"><i className="ri-discount-percent-line" style={{ backgroundPosition: "-75px -114px", color: '#c73d1f' }}></i><p className="font-normal">On Sale</p></div><div className="border-azaGreyShade1 text-azaBlackShade3 flex items-center space-x-2 border py-2 px-3 text-sm rounded-lg cursor-pointer hover:bg-azaBrandSecondaryLight hover:border-AzaRed hover:text-AzaRed"><i className="ri-scissors-2-fill" style={{ backgroundPosition: "-124px -114px", color: '#c73d1f' }}></i><p className="font-normal">Custom-fit</p></div></div>
          <div className="relative flex flex-col justify-start">
            <button className="flex items-center justify-between text-sm px-4 py-3 cursor-pointer border border-azaGreyShade1 rounded-lg h-10 w-[322px]"><span className="space-x-1"><span className=" text-azaBlackShade3">Sort By:</span><span className="font-medium text-azaBlackShade3">Recommended</span></span><i className="ri-arrow-down-s-line" style={{ backgroundPosition: " -118px -100px", color: 'gray' }}></i>
            </button>
            <div className="self-start"></div>
          </div>
        </div>

        <div className="flex gap-2">
          {/* Sidebar Filters */}
          <ProductFilters
            filters={filterSections}
            onFilterChange={() => { }}
          />
          <div className="flex-1 min-h-[400px]">
            {loading ? (
              <div className="text-center text-azaBlackShade3 animate-pulse">
                Loading products...
              </div>
            ) : error ? (
              <div className="text-center text-red-500">
                {error || "Something went wrong. Please try again."}
              </div>
            ) : products && products.length === 0 ? (
              <div className="text-center text-azaBlackShade3">
                No products found for this category.
              </div>
            ) : (

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products?.map((p) => {
                  return (
                    <div key={p.product_id}>
                      <Link
                        href={`/products/${p.product_id}`}
                        className="block hover:opacity-95">
                        <section data-pid="470371">
                          <div>
                            <div className="product-card">
                              <div className="pt-[1%] block relative bg-[#f9fafb]/50">
                                <div className="relative pt-[150%] w-full bg-[#f9fafb]/50 rounded-lg overflow-hidden">
                                  <Image
                                    alt={p.product_name}
                                    src={p.product_image}
                                    fill
                                    className="object-contain object-center rounded-lg absolute"
                                    unoptimized
                                  />
                                </div>
                              </div>
                              {p.sizes?.length > 0 ? (
                                <div className="product-overlay">
                                  <div className="sizes">
                                    {p.sizes.map((size: string) => (
                                      <span key={size} className="size-option">{size}</span>
                                    ))}
                                  </div>
                                  <div className="action-buttons">
                                    <button className="btn-add">ADD TO CART</button>
                                    <button className="btn-buy">BUY NOW</button>
                                  </div>
                                </div>
                              ) : (
                                <div className="product-overlay flex items-center justify-center text-sm font-semibold text-gray-600">
                                  OUT OF STOCK
                                </div>
                              )}

                              <button className="flex absolute top-3 right-3 justify-center items-center w-10 h-10 rounded-full cursor-pointer bg-white"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-gray-500"
                              >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                              </svg></button>
                            </div><div className="space-y-1">
                              <div className="flex items-start gap-2 lg:gap-3 flex-wrap scale-[0.75] lg:scale-[.85] origin-top-left">
                                <div className="rounded h-[30px] flex items-center min-w-max justify-center space-x-2 text-xs font-semibold bg-sectionBG px-3"><span><i className="not-italic text-azaBrandColor">Aza</i> Exclusive</span></div>
                              </div>
                              <h3 className="space-y-1">
                                <p className="text-xxs font-medium text-azaBlackShade3 lg:text-[13px] tracking-[0.2px] lg:leading-5">{p.brand}</p>
                                <p className="my-1 font-normal text-xxs lg:text-[13px] line-clamp-1 text-azaBlackShade4 tracking-[0.2px] lg:leading-5">{p.product_name} </p>
                              </h3>
                              {
                                p.price ? (
                                  <div className="flex items-center line-clamp-2 mt-[2px] space-x-[4px] tracking-[0.2px] lg:leading-5 font-medium">
                                    <p className="text-[11px] text-azaBlackShade3 font-medium lg:text-[13px] text-ellipsis">
                                      ₹{p?.price?.toLocaleString()}
                                    </p>
                                    {p.maximum_retail_price > p.price && (
                                      <span className="mb-px line-through font-extralight text-[11px] text-ellipsis text-azaBlackShade4 lg:text-[13px]">
                                        ₹{p?.maximum_retail_price?.toLocaleString()}
                                      </span>
                                    )}
                                    {p?.discount_percentage && (
                                      <span className="mb-px text-[11px] text-ellipsis line-clamp-1 lg:text-[13px] text-azaGreen_6">
                                        {p?.discount_percentage}% OFF
                                      </span>
                                    )}
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center text-xs font-semibold text-red-500">
                                  OUT OF STOCK
                                </div>
                                )
                              }
                            </div>
                          </div>
                          {/* </div> */}
                        </section>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}