// 'use client'
import { Product, allMockProducts } from "./(data)";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";


function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default async function Page() {
  const products: Product[] = allMockProducts
  // .filter((p) => 
  //   p.subcategory.toLowerCase() === category.toLowerCase()
  // );

  return (
    <div>
      <Header />
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

        {products.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          <div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((p) => {
                const discount =
                  p.discount_price && p.discount_price > p.price
                    ? Math.round(((p.discount_price - p.price) / p.discount_price) * 100)
                    : 0;

                // Extract first image from the images string
                const firstImage = p.images.split(',')[0]?.trim() || p.images;

                return (
                  <div key={p.product_id}>
                    <Link
                      href={`/collection/${p.category.toLowerCase()}/${p.subcategory.toLowerCase()}/${p.product_id}`}
                      className="block hover:opacity-95">
                      <section data-pid="470371">
                        <div>
                          <div data-test-id="plpCard">
                            <div className="relative mb-4 border rounded-lg border-[#f5f5f5]">
                              <div className="pt-[1%] block relative bg-[#f9fafb]/50">
                                <div className="relative pt-[150%] w-full bg-[#f9fafb]/50 rounded-lg       overflow-hidden">
                                  <Image
                                    alt={p.title}
                                    src={firstImage}
                                    fill
                                    className="object-contain object-center rounded-lg absolute"
                                    priority
                                  />
                                </div>
                              </div>
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
                              <div className="lg:block">
                                <div className="hidden absolute bottom-0 w-full">
                                  <div className="px-4 py-5 rounded-t-2xl bg-white/50">
                                    <div className="flex flex-wrap gap-3 max-h-[148px] overflow-y-auto"><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">XS</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">S</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">M</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">L</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">XL</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">XXL</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">3XL</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">4XL</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">5XL</span><span className="border border-azaGreyShade1 font-semibold min-w-[3rem] h-10 flex items-center justify-center text-center px-3 text-sm cursor-pointer text-black rounded-lg bg-white">6XL</span></div>
                                    <div className="flex items-center justify-between pt-5 space-x-3"><button className="flex items-center justify-center h-10 w-[60%] text-sm font-semibold text-white rounded-lg bg-AzaRed">ADD TO CART</button><button className="flex items-center w-[40%] justify-center h-10 text-sm font-semibold bg-white border rounded-lg text-azaBlackShade3 border-azaGreyShade1">BUY NOW</button></div>
                                  </div>
                                </div>
                              </div>
                            </div><div className="space-y-1">
                              <div className="flex items-start gap-2 lg:gap-3 flex-wrap scale-[0.75] lg:scale-[.85] origin-top-left">
                                <div className="rounded h-[30px] flex items-center min-w-max justify-center space-x-2 text-xs font-semibold bg-sectionBG px-3"><span><i className="not-italic text-azaBrandColor">Aza</i> Exclusive</span></div>
                              </div>
                              <h3 className="space-y-1">
                                <p className="text-xxs font-medium text-azaBlackShade3 lg:text-[13px] tracking-[0.2px] lg:leading-5">{p.title}</p>
                                <p className="my-1 font-normal text-xxs lg:text-[13px] line-clamp-1 text-azaBlackShade4 tracking-[0.2px] lg:leading-5">{p.description} </p>
                              </h3>
                              <p className="text-xxs font-medium text-azaBlackShade3 lg:text-[13px] tracking-[0.2px] lg:leading-5"> {formatPrice(p.price)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}