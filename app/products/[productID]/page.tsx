import { notFound } from "next/navigation";
// import { Product, allMockProducts } from "../../collection/men/(data)";
import Header from "@/components/Header";
import Image from "next/image";
import ProductCarousel from '../../../components/ProductCarousel'
import CuratedCarousel from '../../../components/CuratedCarousel'
import Footer from "@/components/Footer";
import { Product } from "@/types/product";


async function getProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/product-detail?product_id=${id}`, {
      cache: 'no-store'
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json(); // Add await here to parse JSON
        
    if (data.status) {
      const productData = data.data[0];
      const priceAttribute = productData.attributes?.find(
        (attr: any) => attr.attribute_id === 'ATR001_DYN_price'
      );
      
      // Find other attributes you might need
      const mrpAttribute = productData.attributes?.find(
        (attr: any) => attr.attribute_id === "ATR002_DYN_maximum_retail_price"
      );
      
      const discountAttribute = productData.attributes?.find(
        (attr: any) => attr.attribute_id === "ATR003_DYN_discount_percent"
      );
      
      // Create the product object with extracted attributes
      const product: Product = {
        ...productData,
        price: priceAttribute ? parseFloat(priceAttribute.attribute_value) : 0,
        maximum_retail_price: mrpAttribute ? parseFloat(mrpAttribute.attribute_value) : 0,
        discount_percentage: discountAttribute ? parseFloat(discountAttribute.attribute_value) : 0,
      };
      return product; // Assuming the product data is in data.data
    }
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

function formatPrice(n: number) {
  return "₹" + n?.toLocaleString("en-IN");
}



export default async function ProductPage({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = await getProductById(productID);
  
  if (!product) return notFound();
  
  console.log(product ,'hvkbvhjvhflj')



  // Extract images
  // const firstImage = allImages[0];

  const similarItems = [
    {
      id: '101',
      name: 'Embroidered Lehenga & Draped Blouse Set',
      brand: 'Masumi Mewawalla X AZA',
      price: 63600,
      originalPrice: 79500,
      discount: 20,
      image: 'https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1731503118491_1.jpg',
      href: '/products/masumi-mewawalla-embroidered-lehenga-and-draped-blouse-set/595265',
      isAzaExclusive: true,
      inBags: 50,
    },
    {
      id: '2',
      name: 'Embroidered Lehenga & Draped Blouse Set',
      brand: 'Masumi Mewawalla X AZA',
      price: 63600,
      originalPrice: 79500,
      discount: 20,
      image: 'https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1731503118491_1.jpg',
      href: '/products/masumi-mewawalla-embroidered-lehenga-and-draped-blouse-set/595265',
      isAzaExclusive: true,
      inBags: 50,
    },
    {
      id: '3',
      name: 'Embroidered Lehenga & Draped Blouse Set',
      brand: 'Masumi Mewawalla X AZA',
      price: 63600,
      originalPrice: 79500,
      discount: 20,
      image: 'https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1731503118491_1.jpg',
      href: '/products/masumi-mewawalla-embroidered-lehenga-and-draped-blouse-set/595265',
      isAzaExclusive: true,
      inBags: 50,
    },
    {
      id: '4',
      name: 'Embroidered Lehenga & Draped Blouse Set',
      brand: 'Masumi Mewawalla X AZA',
      price: 63600,
      originalPrice: 79500,
      discount: 20,
      image: 'https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1731503118491_1.jpg',
      href: '/products/masumi-mewawalla-embroidered-lehenga-and-draped-blouse-set/595265',
      isAzaExclusive: true,
      inBags: 50,
    },
    {
      id: '5',
      name: 'Embroidered Lehenga & Draped Blouse Set',
      brand: 'Masumi Mewawalla X AZA',
      price: 63600,
      originalPrice: 79500,
      discount: 20,
      image: 'https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1731503118491_1.jpg',
      href: '/products/masumi-mewawalla-embroidered-lehenga-and-draped-blouse-set/595265',
      isAzaExclusive: true,
      inBags: 50,
    },
    {
      id: '6',
      name: 'Embroidered Lehenga & Draped Blouse Set',
      brand: 'Masumi Mewawalla X AZA',
      price: 63600,
      originalPrice: 79500,
      discount: 20,
      image: 'https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1731503118491_1.jpg',
      href: '/products/masumi-mewawalla-embroidered-lehenga-and-draped-blouse-set/595265',
      isAzaExclusive: true,
      inBags: 50,
    },
    // ... more products
  ];

  const curatedItems = [
    {
      id: '1',
      title: 'Everyday Staples',
      href: '/aza-curates/spring-summer-2024/3421?sub_category_id=286',
      images: [
        'https://static3.azafashions.com/tr:w-317/uploads/product_gallery/1690296204497_1.jpg',
        'https://static3.azafashions.com/tr:w-317/uploads/product_gallery/1691595663401_1.jpg'
      ]
    },
  ];

  const curatedItems1={
    id:product.collections.name,
    title:product.collections.name,
    href:product.collections.url,
    images:[product.collections.image, product.collections.image]
  }
  
  return (
    <>
      <Header />
      <main className="wrapperContainer py-8">
        <div className="flex flex-col flex-wrap justify-between lg:flex-row">
          {/* LEFT: IMAGE GALLERY - Matching the reference structure */}
          <div className="z-10 sticky w-full lg:w-[510px] flex-[0_0_510px] h-3/5 lg:ml-[50px] xl:ml-[100px] top-[122px]">
            <div className="flex">
              {/* Thumbnail Sidebar */}
              <div className="relative flex-[0_0_7%] lg:flex-[0_0_72px] overflow-auto scrollbar-none">
                <div className="absolute top-0 flex flex-col self-start w-full overflow-auto bottom-4 scroll-smooth scrollbar-none">
                  {/* {allImages.map((imgUrl, index) => ( */}
                    <div
                      // key={index}
                      className="relative mb-4 overflow-hidden border-2 last:mb-0 rounded-xl border-transparent cursor-pointer hover:border-black"
                    >
                      <div className="pt-[150%] object-cover cursor-pointer bg-gray-100">
                        <Image
                          alt={product.product_name}
                          src={product.product_image}
                          fill
                          unoptimized
                          sizes="64px"
                          className="absolute top-0 left-0 object-cover"
                        />
                      </div>
                    </div>
                  {/* ))} */}
                </div>
              </div>

              {/* Main Image */}
              <div className="flex flex-col pl-3 justify-between flex-[0_0_calc(100%-90px)]">
                <div className="relative pt-[150%]">
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
                    <Image
                      alt={product.product_name || "Product image"}
                      src={product.product_image}
                      fill
                      sizes="(max-width: 768px) 100vw, 510px"
                      priority
                      unoptimized
                      className="object-cover cursor-zoom-in"
                    />

                    {/* View Similar Button */}
                    <div className="absolute space-y-5 right-5 top-5">
                      <button className="flex flex-col items-center space-y-2">
                        <span className="w-10 h-10 rounded bg-[#F2F2F2] shadow-[0px_4px_4px_0px_#0000001A] flex justify-center items-center">
                          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                            <path d="M18 4L14 8H16C16 11.31 13.31 14 10 14C8.99 14 8.03 13.75 7.2 13.3L5.74 14.76C7.03 15.54 8.45 16 10 16C14.42 16 18 12.42 18 8H20L18 4ZM4 8C4 4.69 6.69 2 10 2C11.01 2 11.97 2.25 12.8 2.7L14.26 1.24C12.97 0.46 11.55 0 10 0C5.58 0 2 3.58 2 8H0L2 12L4 8Z" fill="#666" />
                          </svg>
                        </span>
                        <p className="p-1 font-semibold text-center bg-white rounded text-gray-700 text-xs">View Similar</p>
                      </button>
                    </div>

                    {/* Contains Button */}
                    <div className="absolute space-y-5 right-5 bottom-5">
                      <button className="rounded-sm h-[28px] px-3 text-xs bg-gray-100 text-gray-700 font-medium flex items-center space-x-2 max-w-[100%]">
                        <p className="line-clamp-1">Contains: { 'h' || "Kurta,Pant"}</p>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                          <path d="M7 12L0 0H14L7 12Z" fill="#666" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS */}
          <div className="w-full flex-[0_0_calc(100%-(510px+100px+50px))] max-w-[calc(100%-(510px+100px+50px))] xl:flex-[0_0_calc(100%-(510px+150px+100px))] xl:max-w-[calc(100%-(510px+150px+100px))] lg:mr-[50px] xl:mr-[100px] ml-[50px] pt-5">

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-2">
              <div className="rounded h-8 flex items-center justify-center space-x-2 text-xs font-semibold bg-gray-100 px-3 text-black">
                <span><span className="text-blue-600">Aza</span> Exclusive</span>
              </div>
              <div className="rounded h-8 flex items-center justify-center space-x-2 text-xs font-semibold bg-gray-100 px-3 text-black">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 0L0 3V5C0 9 2.5 12.5 7 14C11.5 12.5 14 9 14 5V3L7 0Z" />
                </svg>
                <span>In 110+ Shopping Bags</span>
              </div>
              <div className="rounded h-8 flex items-center justify-center space-x-2 text-xs font-semibold bg-gray-100 px-3 text-black">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 0C3.14 0 0 3.14 0 7C0 10.86 3.14 14 7 14C10.86 14 14 10.86 14 7C14 3.14 10.86 0 7 0ZM7 12.5C4.52 12.5 2.5 10.48 2.5 7C2.5 4.52 4.52 2.5 7 2.5C9.48 2.5 11.5 4.52 11.5 7C11.5 10.48 9.48 12.5 7 12.5Z" />
                  <path d="M7.5 3.5H6.5V7.5H10.5V6.5H7.5V3.5Z" />
                </svg>
                <span>5.5K+ Views</span>
              </div>
            </div>

            {/* Product Title and Actions */}
            <div className="flex justify-between">
              <div className="flex-1 lg:max-w-[90%] xl:max-w-[80%] space-y-1">
                <div className="flex items-center justify-between lg:space-x-2 lg:justify-normal">
                  <a className="flex items-center text-lg font-medium lg:text-lg xl:text-2xl text-gray-900 hover:underline" href="#">
                    {product.brand || "Punit Balana"}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" className="ml-1">
                      <path d="M10.5 6.5L6.5 2.5L2.5 6.5M6.5 2.5V10.5" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-gray-700">{product.product_name || "Red Satin Silk Printed Kurta And Joggers Set"}</p>
              </div>

              <div className="flex items-start space-x-4">
                <button className="flex items-center justify-center cursor-pointer rounded bg-gray-100 w-10 h-10 hover:bg-gray-200">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1L12.39 6.3L18 7L14 11L15.32 16.5L10 13.5L4.68 16.5L6 11L2 7L7.61 6.3L10 1Z" />
                  </svg>
                </button>
                <button className="flex items-center justify-center cursor-pointer rounded bg-gray-100 w-10 h-10 hover:bg-gray-200">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H14C15.1 18 16 17.1 16 16V4C16 2.9 15.1 2 14 2ZM6 16V4H14V16H6Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Price Section */}
            <div className="mt-6">
              <div className="relative">
                 <div className="flex items-center line-clamp-2 mt-[2px] space-x-[4px] tracking-[0.2px] lg:leading-5 font-medium">
                <p className="text-[11px] text-azaBlackShade3 font-medium lg:text-[13px] text-ellipsis">
                  ₹{product.price?.toLocaleString()}
                </p>
                {product.price && (
                  <span className="mb-px line-through font-extralight text-[11px] text-ellipsis text-azaBlackShade4 lg:text-[13px]">
                    ₹{product.maximum_retail_price?.toLocaleString()}
                  </span>
                )}
                {product.discount_percentage && (
                  <span className="mb-px text-[11px] text-ellipsis line-clamp-1 lg:text-[13px] text-azaGreen_6">
                    {product.discount_percentage}% OFF
                  </span>
                )}
              </div>
                <p className="text-xs leading-3 mt-0.5 lg:text-xxs text-gray-600">(inclusive of all taxes)</p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-6 space-y-4 lg:space-y-8">
              <div>
                <div className="flex space-x-5 items-baseline">
                  <div className="w-full lg:w-auto">
                    <div className="flex justify-between w-full mb-3 lg:mb-0">
                      <div className="flex items-center space-x-5 lg:mb-3">
                        <span className="font-medium">Select size</span>
                        <button className="flex relative items-center space-x-1 text-sm whitespace-nowrap text-gray-700 hover:underline">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" />
                            <path d="M8 4C8.55 4 9 4.45 9 5V9C9 9.55 8.55 10 8 10C7.45 10 7 9.55 7 9V5C7 4.45 7.45 4 8 4Z" />
                            <path d="M8 12C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12Z" />
                          </svg>
                          <span>Size guide</span>
                        </button>
                      </div>
                    </div>

                    {/* Size Buttons */}
                    <ul className="relative flex flex-wrap gap-2 text-xs lg:text-xs lg:gap-2 text-gray-700">
                      {product?.sizes?.map((size) => (
                        <li
                          key={size}
                          className="flex flex-col items-center justify-center px-3 py-1 border rounded cursor-pointer min-h-10 min-w-10 group text-gray-700 hover:text-blue-600 border-gray-300 hover:border-blue-600"
                        >
                          <div className="flex items-center -mt-0.5">{size}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex mt-6 gap-4 flex-wrap relative">
                <div className="flex items-center gap-1">
                  <label className="text-xs font-medium">Qty:</label>
                  <div className="relative">
                    <select className="px-4 w-16 h-10 text-gray-700 font-medium text-sm rounded border appearance-none outline-none border-gray-300">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <div className="absolute inset-y-0 flex items-center pointer-events-none right-2">
                      <svg className="w-6 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.086l3.71-3.854a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row-reverse flex-1 gap-4 lg:flex-row">
                  <button className="text-white rounded-lg bg-AzaRed lg:tracking-[1px] flex flex-1 items-center justify-center lg:text-base text-sm lg:max-w-[226px] lg:min-w-[210px] h-[50px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="mr-2">
                      <path d="M17 2H3C2.45 2 2 2.45 2 3V17C2 17.55 2.45 18 3 18H17C17.55 18 18 17.55 18 17V3C18 2.45 17.55 2 17 2ZM16 16H4V4H16V16Z" />
                      <path d="M14 7H6V9H14V7Z" />
                      <path d="M14 11H6V13H14V11Z" />
                    </svg>
                    <span>Add To Cart</span>
                  </button>

                  <button className="text-gray-800 rounded-lg flex-1 lg:tracking-[1px] h-[50px] border border-gray-700 lg:text-base text-sm flex items-center justify-center lg:max-w-[226px] lg:min-w-[210px] hover:bg-gray-50">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="mr-2">
                      <path d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z" />
                      <path d="M10 6C8.9 6 8 6.9 8 8C8 9.1 8.9 10 10 10C11.1 10 12 9.1 12 8C12 6.9 11.1 6 10 6Z" />
                      <path d="M10 11C9.45 11 9 11.45 9 12V14C9 14.55 9.45 15 10 15C10.55 15 11 14.55 11 14V12C11 11.45 10.55 11 10 11Z" />
                    </svg>
                    <span>Speak to Stylist</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Additional sections like Shipping, Product Details, etc. can be added here */}

            <div className="mt-4">
              <div>
                <div className="flex justify-between pb-3 border-b border-azaGreyShade4 text-azaBlackShade3"><span className="lg:text-lg">Shop with Confidence</span></div>
                <div className="pt-5 grid grid-cols-1 gap-y-3 xl:grid-cols-2">
                  <div className="flex flex-col gap-y-3">
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Loved by 2 Million+ Customers </span></p>
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Trusted in Fashion for 20 Years </span></p>
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Authentic Designer Labels </span></p>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>75+ Countries Served </span></p>
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Personalized Styling Assistance </span></p>
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Exclusive Member Benefits </span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping section  */}
            <div className="mt-4">
              <button className="flex justify-between w-full text-azaBlackShade3 items-center pb-3 border-b border-azaGreyShade4" aria-expanded="true"><span className="lg:text-lg">Shipping &amp; Returns</span>
                <div className=""><i className="block w-3 h-3 scale-125 bgImages transition-transform duration-300 transform rotate-180" style={{ backgroundPosition: "-119px -102px" }}></i></div>
              </button>
              <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ height: "216px" }}>
                <div className="clear-both mt-8 text-sm lg:mt-7 text-azaBlackShade3">
                  <div className="pb-1 space-y-3">
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Please select your size to view estimated shipping timelines </span></p>
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Free Shipping </span></p>
                    <p className="text-[13px]  flex items-start gap-x-2 text-azaBlackShade3 "><i className="w-5 h-5 bgImages bg-[position:-446px_-310px] flex-[0_0_20px]"></i><span>Returnable within 2 days of delivery (3 days for Diamond tier members). Custom-made orders are not returnable. Product&apos;s original tags, if attached, must be intact for a successful return. If the original tags are missing, Aza Fashions may decline the return request and send the product back to the customer. Return handling charges would be applicable<a className="font-normal underline cursor-pointer text-azaBlackShade3">More Details</a></span></p>
                  </div>
                </div>
              </div>
            </div>
            {/* chat us wsection  */}
            <div>
              <div>
                <p className="lg:text-lg text-azaBlackShade3">Customer Support</p>
                <div className="flex items-center gap-3 px-3 mt-4 -mx-3 overflow-x-scroll scrollbar-none whitespace-nowrap lg:mt-4 lg:px-0 lg:mx-0">
                  <button  className="flex items-center flex-1 h-10 px-6 py-1 space-x-2 text-xs border rounded-full cursor-pointer max-w-max border-azaBlackShade3 text-azaBlackShade3">
                    < i className="ri-discuss-line"></i>

                    <span className="flex items-center justify-center">Chat with us</span>
                  </button>
                  <a className="flex items-center flex-1 h-10 py-1 pl-6 pr-6 space-x-2 text-xs border rounded-full max-w-max border-azaBlackShade3 text-azaBlackShade3">
                    <i className="ri-phone-line"></i>
                    <span className="">022-42792123</span>
                  </a>
                  <a className="flex items-center flex-1 h-10 py-1 pl-6 pr-6 space-x-2 text-xs border rounded-full max-w-max border-azaBlackShade3 text-azaBlackShade3">
                    < i className="ri-mail-send-line"></i>
                    <span className="">Mail us</span>
                  </a>
                </div>
              </div>
            </div>
            {/*  */}

          </div>
        </div>
        {/* Similar section*/}

        <div className="px-0.5 mt-2 lg:mt-8 mb-8 -mx-3 lg:w-full lg:mx-0 lg:px-0">
          {/* Similar Items */}
          <ProductCarousel
            title="similar items"
            products={similarItems}
            filterButtons={true}
          />

          {/* Curated by Aza */}
          <CuratedCarousel
            title="Curated by Aza"
            items={[curatedItems1]}
          />

          {/* Customers Also Viewed */}
          <ProductCarousel
            title="Customers Also Viewed"
            products={similarItems} // Replace with actual data
          />

          {/* Best Paired With */}
          <ProductCarousel
            title="best paired with"
            products={similarItems} // Replace with actual data
          />

          {/* Recently Viewed */}
          <ProductCarousel
            title="Recently Viewed"
            products={similarItems} // Replace with actual data
          />
        </div>
      </main>
      <Footer/>
    </>
  );
}