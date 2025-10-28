import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="__className_d6f4a7">
      <header className="sticky top-0 z-20 max-w-full mx-auto bg-white lg:hidden mobileHeader shadow-[0px_1px_3px_0px_rgba(66,66,66,0.15),_0px_0px_0px_1px_rgba(66,66,66,0.05)]">
        <div className="">
          <div className="flex justify-between px-3 pt-5 pb-3">
            <div className="flex items-center space-x-3">
              <button
                className="w-5 h-[18px] bgImages"
                style={{ backgroundPosition: "-361px -312px" }}
              ></button>
              <a
                className="bgImages w-[80px] h-[27px] block bg-[position:-550px_-10px]"
                href="index.html"
              ></a>
              <button
                className="flex items-center text-[13px] space-x-0.5 relative data-[appinit=true]:before:hidden data-[appinit=false]:before:content-[&#x27;&#x27;] before:absolute before:left-0 before:top-0 before:bg-gray-200 before:z-10 before:animate-pulse before:w-full before:h-full [&amp;[data-appinit=false]&gt;*]:invisible outline-none"
                data-appinit="false"
              >
                <span>INR ₹</span>
                <i className="block w-2 h-2 bgImages bg-[position:-444px_-269px]"></i>
              </button>
            </div>
            <div className="flex items-center space-x-5">
              <div className="relative mt-[2px]">
                <i className="bgImages scale-110 block w-[21px] h-5 bg-[position:-301px_-313px]"></i>
              </div>
              <div className="relative">
                <a href="checkout/cart">
                  <i className="bgImages scale-105 block w-[21px] h-5 bg-[position:-301px_-285px]"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-auto flex-nowrap scrollbar-none flex">
            <ul className="flex text-sm text-azaBlackShade3">
              <li className="relative px-4 py-2 whitespace-nowrap">
                <a href="/collection/women">
                  <div>
                    Women
                    <i className="absolute w-full h-0.5 bg-azaBlackShade3 rounded-tl-sm rounded-tr-sm left-0 bottom-0"></i>
                  </div>
                </a>
              </li>
              <li className="relative px-4 py-2 whitespace-nowrap">
                <a href="/collection/men">
                  <div>Men</div>
                </a>
              </li>
              <li className="relative px-4 py-2 whitespace-nowrap">
                <a href="/collection/kids">
                  <div>Kids</div>
                </a>
              </li>
              <li className="relative px-4 py-2 whitespace-nowrap">
                <a href="/collection/jewellery">
                  <div>Jewellery</div>
                </a>
              </li>
              <li className="relative px-4 py-2 whitespace-nowrap">
                <a href="/collection/accessories">
                  <div>Accessories</div>
                </a>
              </li>
              <li className="relative px-4 py-2 whitespace-nowrap">
                <a >
                  <div>Aza Editorials</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <header className="sticky top-0 z-20 hidden max-w-full mx-auto bg-white shadow-sm lg:block lg:shadow-[0px_1px_3px_0px_rgba(66,66,66,0.15),_0px_0px_0px_1px_rgba(66,66,66,0.05)]">
        <div className="bg-sectionBG">
          <div className="flex items-center justify-between wrapperContainer">
            <div>
              <ul className="flex items-center text-[11px] xl:text-xs uppercase gap-x-4">
                <li className="px-2 py-1.5 border-b-2 border-t-2 border-t-transparent border-b-black text-azaBlackShade3">
                  <div>
                    <a href="/collection/women">Women</a>
                  </div>
                </li>
                <li className="px-2 py-1.5 border-b-2 border-t-2 border-t-transparent border-b-transparent text-azaBlackShade4">
                  <div>
                    <a href="/collection/men">Men</a>
                  </div>
                </li>
                <li className="px-2 py-1.5 border-b-2 border-t-2 border-t-transparent border-b-transparent text-azaBlackShade4">
                  <div>
                    <a href="/collection/kids">Kids</a>
                  </div>
                </li>
                <li className="px-2 py-1.5 border-b-2 border-t-2 border-t-transparent border-b-transparent text-azaBlackShade4">
                  <div>
                    <a href="/collection/jewellery">Jewellery</a>
                  </div>
                </li>
                <li className="px-2 py-1.5 border-b-2 border-t-2 border-t-transparent border-b-transparent text-azaBlackShade4">
                  <div>
                    <a href="/collection/accessories">Accessories</a>
                  </div>
                </li>
                <li className="px-2 py-1.5 border-b-2 border-t-2 border-t-transparent border-b-transparent text-azaBlackShade4">
                  <div>
                    <a >
                      Aza Editorials
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-xs leading-5 text-azaBlackShade3">
              For styling assistance &amp; customizations, WhatsApp us at
              <a
                href="https://api.whatsapp.com/send?phone=918291990059&amp;text=Hello!%20I%20want%20to%20shop%20on%20Aza,%20and%20have%20a%20question%20I%27d%20like%20to%20ask%20-%20https://www.azafashions.com/"
                className="underline"
              >
                +91-8291990059
              </a>
            </div>
          </div>
        </div>
        <nav className="relative flex-col hidden bg-white lg:flex">
          <div className="flex items-center justify-between h-[50px] mt-4 mb-2 px-16 wrapperContainer">
            <div className="flex items-center space-x-7 xl:space-x-9">
              <a className="pt-1" href="index.html">
                <img
                  alt="20 years celebration"
                  loading="lazy"
                  width="78"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://www.azafashions.com/images/20_yrs_logo.png"
                />
              </a>
              <div className="relative flex items-center justify-between py-2 pl-3 pr-2 border rounded lg:p-0 border-StorkGray2 lg:border-none lg:rounded-none lg:space-x-1.5"><span className="text-sm cursor-pointer md:text-xs xl:text-sm">INR</span><span className="text-sm cursor-pointer md:text-xs xl:text-sm">(₹)</span><i className="bgImages w-[12px] h-[7px] block bg-[position:-118px_-103px]"></i></div>
            </div>
            <div className="relative flex-1 px-12 maxScrn:px-32">
              <form className="flex items-center border-b border-[#d2d2d2] rounded-sm false">
                <button
                  className="w-[18px] h-[17px] scale-110 mx-3 cursor-pointer bgImages flex-[0_0_18px]"
                  style={{ backgroundPosition: "-216px -231px" }}
                ></button>
                <input
                  type="search"
                  placeholder="Search htmlFor products, brand and more"
                  className="flex-1 py-2 px-1 border-none font-light placeholder:text-xs xl:placeholder:text-sm placeholder:text-azaBlackShade3 focus:outline-none __className_d6f4a7"
                  autoComplete="off"
                  autoCorrect="off"
                />
                <section>
                  <label
                    htmlFor="imageSearchIO_deskNav"
                    className="flex items-center px-3 space-x-2 cursor-pointer lg:h-10"
                  >
                    <div className="w-px h-6 mr-3 bg-azaGreyShade1"></div>
                    <input
                      type="file"
                      name=""
                      id="imageSearchIO_deskNav"
                      className="hidden w-0 h-0"
                      accept="image/*"
                    />
                    <i className="bgImages block w-5 h-4 !ml-0 flex-[0_0_20px] bg-[position:-216px_-269px]"></i>
                    <span className="hidden text-xs xl:text-sm font-light md:block text-azaBlackShade3 __className_d6f4a7">
                      Image Search
                    </span>
                  </label>
                </section>
              </form>
            </div>
            <span className="flex items-center justify-between space-x-8">
              <a
                className="flex items-center space-x-2 text-azaBlackShade3"
                href="store-locator.html"
              >
                <i
                  className="block w-6 h-6 cursor-pointer bgImages"
                  style={{ backgroundPosition: "-266px -268px" }}
                ></i>
                <p className="text-xs xl:text-sm">Find a store</p>
              </a>
              <div className="relative userProfileIcon cursor-pointer [&amp;&gt;div]:hover:block">
                <div className="!flex items-center space-x-[10px] relative">
                  <div className="flex flex-col items-center">
                    <i className="block w-[21px] h-5 scale-[1.15] cursor-pointer bgImages bg-[position:-328px_-311px]"></i>
                  </div>
                </div>
              </div>
              <button className="relative flex flex-col items-center cursor-pointer">
                <i className="block w-[21px] h-5 scale-[1.2] cursor-pointer bgImages bg-[position:-301px_-313px]"></i>
              </button>
              <button
                className="relative flex flex-col items-center cursor-pointer"
                id="dskATCPortal"
              >
                <i className="block w-[21px] h-5 scale-[1.05] cursor-pointer bgImages bg-[position:-301px_-285px]"></i>
              </button>
              <div className="relative w-6 h-6">
                <a
                  href="https://api.whatsapp.com/send?phone=918291990059&amp;text=Hello!%20I%20want%20to%20shop%20on%20Aza,%20and%20have%20a%20question%20I'd%20like%20to%20ask%20-%20https://www.azafashions.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="block w-6 h-6 scale-150 bgImages bg-[position:-375px_-199px]"></div>
                </a>
              </div>
            </span>
          </div>
          <div className="relative">
            <div className="relative">
              <div className="wrapperContainer flex __className_d6f4a7 justify-center">
                <ul className="flex pt-2 mx-auto space-x-5 min-[1310px :space-x-6">

                  <li className="pb-2 text-xs font-normal xl:text-sm">
                    <div>
                      <span className="py-2 hover:font-normal hover:text-azaBrandColor font-light text-azaBlackShade3 after:h-[2px] after:transition-all after:bg-azaBrandColor transition duration-400 after:content-[''] after:mt-5 after:-bottom-[10px] after:right-0 after:absolute after:w-0 after:z-[10] hover:after:w-[fit-content]">Kurta Sets
                      </span>
                    </div>
                  </li>
                  <li className="pb-2 text-xs font-normal xl:text-sm">
                    <div>
                      <span className="py-2 hover:font-normal hover:text-azaBrandColor font-light text-azaBlackShade3 after:h-[2px] after:transition-all after:bg-azaBrandColor transition duration-400 after:content-[''] after:mt-5 after:-bottom-[10px] after:right-0 after:absolute after:w-0 after:z-[10] hover:after:w-[fit-content]">Sherwanis
                      </span>
                    </div>
                  </li>
                  <li className="pb-2 text-xs font-normal xl:text-sm">
                    <div>
                      <span className="py-2 hover:font-normal hover:text-azaBrandColor font-light text-azaBlackShade3 after:h-[2px] after:transition-all after:bg-azaBrandColor transition duration-400 after:content-[''] after:mt-5 after:-bottom-[10px] after:right-0 after:absolute after:w-0 after:z-[10] hover:after:w-[fit-content]">Kurtas
                      </span>
                    </div>
                  </li>
                  <li className="pb-2 text-xs font-normal xl:text-sm">
                    <div>
                      <span className="py-2 hover:font-normal hover:text-azaBrandColor font-light text-azaBlackShade3 after:h-[2px] after:transition-all after:bg-azaBrandColor transition duration-400 after:content-[''] after:mt-5 after:-bottom-[10px] after:right-0 after:absolute after:w-0 after:z-[10] hover:after:w-[fit-content]">Nehru Jacket & Sets
                      </span>
                    </div>
                  </li>
                  <li className="pb-2 text-xs font-normal xl:text-sm">
                    <div>
                      <span className="py-2 hover:font-normal hover:text-azaBrandColor font-light text-azaBlackShade3 after:h-[2px] after:transition-all after:bg-azaBrandColor transition duration-400 after:content-[''] after:mt-5 after:-bottom-[10px] after:right-0 after:absolute after:w-0 after:z-[10] hover:after:w-[fit-content]">Bandhgalas
                      </span>
                    </div>
                  </li>
                  <li className="pb-2 text-xs font-normal xl:text-sm">
                    <div>
                      <span className="py-2 hover:font-normal hover:text-azaBrandColor font-light text-azaBlackShade3 after:h-[2px] after:transition-all after:bg-azaBrandColor transition duration-400 after:content-[''] after:mt-5 after:-bottom-[10px] after:right-0 after:absolute after:w-0 after:z-[10] hover:after:w-[fit-content]">Shirts
                      </span>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="fixed z-10 bottom-[130px] right-3 lg:bottom-6 lg:right-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="hidden items-center p-2 custom-box-shadow bg-[#fff] transition-opacity hover:bg-gray-100 focus:outline-none rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <main className="mt-3">
        <div className="relative lg:-mt-3">
          <div className="pb-3 lg:pb-5 space-y-4 lg:space-y-8 pt-0 wrapperContainer lg:pt-0">
            <div className="overflow-hidden rounded-3xl lg:rounded-tl-none lg:rounded-tr-none">
              <div className="slick-slider -m-0.5 slick-initialized" dir="ltr">
                <button className="flex items-center justify-center cursor-pointer before:content-[&#x27;&#x27;] hover:opacity-1 z-[1] [&amp;.slick-disabled]:opacity-0 w-10 h-10 rounded-full bg-[#939393]/20 hover:bg-[#939393]/50 border border-[rgba(255,255,255,0.1)] border-solid slick-arrow slick-prev left-7">
                  <i className="bgImages block w-[18px] h-[18px] bg-[position:-319px_-260px]"></i>
                </button>
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{ width: "1300%", left: "-100%" }}
                  >
                    <div
                      data-index="-1"
                      // tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="6"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src={"/static3.azafashions.com/uploads/landing_page_section_content_image/1760535023251bridesmaid-edit-top.jpg"}
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      // tabIndex="-1"
                      aria-hidden="false"
                      style={{ outline: "none", width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="1"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760625172308womens-page-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      className="slick-slide"
                      // tabindex="-1"
                      aria-hidden="true"
                      style={{ outline: "none", width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="2"
                                href="designers/gopi-vaid/280.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760526818027gopi-vaid-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      className="slick-slide"
                      // tabindex="-1"
                      aria-hidden="true"
                      style={{ outline: "none", width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="3"
                                href="aza-curates/winter-wedding-store/3052.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760534892945winter-weddings-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      className="slick-slide"
                      // tabindex="-1"
                      aria-hidden="true"
                      style={{ outline: "none", width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="4"
                                href="on-sale.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760681716909anniversary-sale-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="4"
                      className="slick-slide"
                      // tabindex="-1"
                      aria-hidden="true"
                      style={{ outline: "none", width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="5"
                                href="designers/aza-x-shilpa-shetty-kundra.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760534798273shipa-top-banner.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="5"
                      className="slick-slide"
                      // tabindex="-1"
                      aria-hidden="true"
                      style={{ outline: "none", width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="6"
                                href="aza-curates/the-bridesmaid-edit/2541.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760535023251bridesmaid-edit-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="6"
                      // tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="1"
                                href="20-years-celebration.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760625172308womens-page-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="7"
                      // tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="2"
                                href="designers/gopi-vaid/280.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760526818027gopi-vaid-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="8"
                      // tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="3"
                                href="aza-curates/winter-wedding-store/3052.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760534892945winter-weddings-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="9"
                      // tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="4"
                                href="on-sale.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760681716909anniversary-sale-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="10"
                      // tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="5"
                                href="designers/aza-x-shilpa-shetty-kundra.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760534798273shipa-top-banner.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="11"
                      // tabindex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "7.6923076923076925%" }}
                    >
                      <div>
                        <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                          <div>
                            <div>
                              <a
                                className="group"
                                data-column_number="6"
                                href="aza-curates/the-bridesmaid-edit/2541.html"
                              >
                                <div
                                  className="relative overflow-hidden w-full"
                                  style={{
                                    aspectRatio: "1360 / 480",
                                  }}
                                >
                                  <img
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                    style={{
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      left: 0,
                                      top: 0,
                                      right: 0,
                                      bottom: 0,
                                      color: "transparent",
                                    }}
                                    src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760535023251bridesmaid-edit-top.jpg"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center cursor-pointer before:content-[&#x27;&#x27;] hover:opacity-1 z-[1] [&amp;.slick-disabled]:opacity-0 w-10 h-10 rounded-full bg-[#939393]/20 hover:bg-[#939393]/50 border border-[rgba(255,255,255,0.1)] border-solid slick-arrow slick-next right-7">
                  <i className="bgImages block w-[18px] h-[18px] bg-[position:-300px_-260px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-6 lg:pt-12 pb-3 lg:pb-5 space-y-4 lg:space-y-8 wrapperContainer">
              <div className="flex items-center space-x-3 lg:space-x-7 px-4 lg:px-0 justify-center">
                <h2 className="lg:text-[32px] lg:leading-9 text-xl flex items-center text-azaBlackShade3 __className_205bd8 font-normal">
                  Shop By Category
                </h2>
              </div>
              <div className="">
                <div
                  className="slick-slider [&amp;_.slick-track]:flex [&amp;_.slick-slide]:h-[inherit] [&amp;_.slick-slide&gt;div]:h-full slick-initialized"
                  dir="ltr"
                >
                  <button className="flex items-center justify-center cursor-pointer before:content-[&#x27;&#x27;] hover:opacity-1 [&amp;.slick-disabled]:opacity-0 w-10 h-10 rounded-full !bg-white hover:bg-white shadow-[0px_2px_4px_0px_#00000040] slick-arrow slick-prev slick-disabled -left-2 z-[2] top-[35%]">
                    <i className="bgImages block w-[18px] h-[18px] bg-[position:-319px_-242px]"></i>
                  </button>
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{ width: "157.14285714285714%", left: "0%" }}
                    >
                      <div
                        data-index="0"
                        className="slick-slide slick-active slick-current"
                        // tabindex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="1"
                                    href="/collection/women"
                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17601004927271.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Kurta Sets
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="1"
                        className="slick-slide slick-active"
                        // tabindex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="2"
                                    href="/collection/women"
                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17601005510012.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Lehengas
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="2"
                        className="slick-slide slick-active"
                        // tabindex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="3"
                                    href="/collection/women"

                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17601005852503.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Sarees
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="3"
                        className="slick-slide slick-active"
                        // tabindex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="4"
                                    href="/collection/women"

                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760609453289sharara-gharara-sets.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Sharara &amp; Gharara Sets
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="4"
                        className="slick-slide slick-active"
                        // tabindex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="5"
                                    href="/collection/women"
                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/176010095464310.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Anarkali
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="5"
                        className="slick-slide slick-active"
                        // tabindex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="6"
                                    href="/collection/women"

                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/1760609366501straight-kurta-set.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Straight Kurta Sets
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="6"
                        className="slick-slide slick-active"
                        // tabindex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="7"
                                    href="/collection/women"

                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17606101921758.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Pre-Draped Sarees
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="7"
                        className="slick-slide"
                        // tabindex="-1"
                        aria-hidden="true"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="8"
                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17601008548847.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Gowns
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="8"
                        className="slick-slide"
                        // tabindex="-1"
                        aria-hidden="true"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="9"
                                    href="collection/women/dresses.html"
                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17601006160454.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Dresses
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="9"
                        className="slick-slide"
                        // tabindex="-1"
                        aria-hidden="true"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="10"
                                    href="collection/women/kaftans.html"
                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17601006998876.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Kaftans
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="10"
                        className="slick-slide"
                        // tabindex="-1"
                        aria-hidden="true"
                        style={{ outline: "none", width: "9.090909090909092%" }}
                      >
                        <div>
                          <div
                            className="px-4"
                            // tabindex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="overflow-hidden block __className_d6f4a7 rounded-none">
                              <div>
                                <div>
                                  <a
                                    className="group"
                                    data-column_number="11"
                                    href="collection/women/pant-sets.html"
                                  >
                                    <div
                                      className="relative overflow-hidden w-full rounded-full border-2 border-white shadow-[0px_5px_10px_0px_#0000001A]"
                                      style={{ aspectRatio: "160/160" }}
                                    >
                                      <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top group-hover:scale-110"
                                        style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          left: 0,
                                          top: 0,
                                          right: 0,
                                          bottom: 0,
                                          color: "transparent",
                                        }}
                                        src="../static3.azafashions.com/uploads/landing_page_section_content_image/17601006523055.jpg"
                                      />
                                    </div>
                                    <div className="pt-3 lg:pt-6">
                                      <h3 className="lining-nums text-azaBlackShade3 __className_d6f4a7 tracking-normal text-xs font-normal text-center select-all lg:text-base">
                                        Pant Sets
                                      </h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center justify-center cursor-pointer before:content-[&#x27;&#x27;] hover:opacity-1 [&amp;.slick-disabled]:opacity-0 w-10 h-10 rounded-full !bg-white hover:bg-white shadow-[0px_2px_4px_0px_#00000040] slick-arrow slick-next -right-2 z-[2] top-[35%]">
                    <i className="bgImages block w-[18px] h-[18px] bg-[position:-300px_-242px]"></i>
                  </button>
                </div>
                <div className="mt-6 lg:mt-8 flex items-center justify-center gap-x-4 lg:gap-x-6">
                  <div>
                    <a
                      className="border rounded text-xs lg:text-sm py-2.5 px-4 border-[#3C4242] text-[#3C4242] font-medium"
                      href="collection/women.html"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-6 lg:pt-12 pb-3 lg:pb-5 space-y-4 lg:space-y-8 wrapperContainer">
              <div className="flex items-center space-x-3 lg:space-x-7 px-4 lg:px-0 justify-start">
                <h2 className="lg:text-[32px] lg:leading-9 text-xl flex items-center text-azaBlackShade3 __className_205bd8 font-normal">
                  Designers In The Spotlight
                </h2>
              </div>
              <div className="">
                <div className="-mx-3 relative before:content-[&#x27;&#x27;] before:absolute before:h-full before:left-0 before:top-0 before:w-3 before:bg-white before:z-[1] after:content-[&#x27;&#x27;] after:absolute after:h-full after:right-0 after:top-0 after:w-3 after:bg-white after:z-[-1]">
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button className="flex items-center justify-center cursor-pointer before:content-[&#x27;&#x27;] hover:opacity-1 [&amp;.slick-disabled]:opacity-0 w-10 h-10 rounded-full !bg-white hover:bg-white shadow-[0px_2px_4px_0px_#00000040] slick-arrow slick-prev slick-disabled -left-2 z-[2]">
                      <i className="bgImages block w-[18px] h-[18px] bg-[position:-319px_-242px]"></i>
                    </button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{ width: "200%", left: "0%" }}
                      >
                        <div
                          data-index="0"
                          className="slick-slide slick-active slick-current"
                          // tabindex="-1"
                          aria-hidden="false"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="1"
                                      href="designers/aza-x-shilpa-shetty-kundra/4367a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1759841431182_AKSSK123.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Aza X Shilpa Shetty Kundra
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="1"
                          className="slick-slide slick-active"
                          // tabindex="-1"
                          aria-hidden="false"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="2"
                                      href="designers/nachiket-barve/140a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1756444599116_product_image.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Nachiket Barve
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="2"
                          className="slick-slide slick-active"
                          // tabindex="-1"
                          aria-hidden="false"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="3"
                                      href="designers/seema-gujral/1672a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="https://static3.azafashions.com/uploads/product_gallery/1754575152913_1.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Seema Gujral
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="3"
                          className="slick-slide slick-active"
                          // tabindex="-1"
                          aria-hidden="false"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="4"
                                      href="designers/ritu-kumar/319a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1748356378164_1.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Ritu Kumar
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="4"
                          className="slick-slide slick-active"
                          // tabindex="-1"
                          aria-hidden="false"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="5"
                                      href="designers/torani/1800a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1745038168061_product_image.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Torani
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="5"
                          className="slick-slide"
                          // tabindex="-1"
                          aria-hidden="true"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="6"
                                      href="designers/mayyur-girotra-couture/2634a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1712582208436_1.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Mayyur Girotra Couture
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="6"
                          className="slick-slide"
                          // tabindex="-1"
                          aria-hidden="true"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="7"
                                      href="designers/sahil-kochhar/133a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1748084644125_1.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Sahil Kochhar
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="7"
                          className="slick-slide"
                          // tabindex="-1"
                          aria-hidden="true"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="8"
                                      href="designers/ampm/205a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1755337042313_1.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Ampm
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="8"
                          className="slick-slide"
                          // tabindex="-1"
                          aria-hidden="true"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabindex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="9"
                                      href="designers/archana-kochhar/2613a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1747059669606_1.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Archana Kochhar
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index="9"
                          className="slick-slide"
                          // tabindex="-1"
                          aria-hidden="true"
                          style={{ outline: "none", width: "10%" }}
                        >
                          <div>
                            <div
                              className="px-3"
                              // tabIndex="-1"
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="overflow-hidden block __className_d6f4a7 rounded-xl lg:rounded-3xl">
                                <div>
                                  <div>
                                    <a
                                      className="group"
                                      data-column_number="10"
                                      href="designers/two-sisters-by-gyans/3051a897.html?sort=new_arrivals&amp;main_category_id=3"
                                    >
                                      <div
                                        className="relative overflow-hidden w-full"
                                        style={{ aspectRatio: "254/351" }}
                                      >
                                        <img
                                          alt=""
                                          loading="lazy"
                                          decoding="async"
                                          data-nimg="fill"
                                          className="object-cover w-full transition-all duration-300 absolute h-full left-0 top-0 object-top"
                                          style={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            color: "transparent",
                                          }}
                                          src="../static3.azafashions.com/uploads/product_gallery/1755696666348_1.jpg"
                                        />
                                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                                          <h3 className="lining-nums text-white __className_205bd8 tracking-normal text-sm font-medium text-center lg:text-lg px-2">
                                            Two Sisters By Gyans
                                          </h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center justify-center cursor-pointer before:content-[&#x27;&#x27;] hover:opacity-1 [&amp;.slick-disabled]:opacity-0 w-10 h-10 rounded-full !bg-white hover:bg-white shadow-[0px_2px_4px_0px_#00000040] slick-arrow slick-next -right-2 z-[2]">
                      <i className="bgImages block w-[18px] h-[18px] bg-[position:-300px_-242px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="pt-6 lg:pt-12 pb-3 lg:pb-5 space-y-4 lg:space-y-8 wrapperContainer">
            <div className="flex items-center space-x-3 lg:space-x-7 px-4 lg:px-0 justify-start">
              <h2 className="lg:text-[32px] lg:leading-9 text-xl flex items-center text-gray-900 font-normal">
                Shop By Occasion
              </h2>
            </div>

            <div className="min-h-[500px] lg:min-h-[600px]"> {/* Added min-height */}
              <div className="grid grid-cols-6 grid-rows-2 gap-6 h-full">

                {/* Wedding - Large Card */}
                <div className="relative col-span-2 row-span-2 h-full">
                  <div className="h-full rounded-xl lg:rounded-3xl overflow-hidden"> {/* Removed absolute */}
                    <a className="group block h-full">
                      <div className="relative overflow-hidden w-full h-full aspect-[430/516]">
                        <img
                          alt="Wedding occasion"
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                          src="https://static3.azafashions.com/uploads/landing_page_section_content_image/175972967063501.jpg"
                        />
                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                          <h3 className="text-white tracking-normal text-[10px] lg:text-lg px-4 font-medium text-center line-clamp-1">
                            Wedding
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Sangeet - Medium Card */}
                <div className="relative col-span-2 col-start-3 h-full">
                  <div className="h-full rounded-xl lg:rounded-3xl overflow-hidden">
                    <a className="group block h-full" >
                      <div className="relative overflow-hidden w-full h-full aspect-[430/248]">
                        <img
                          alt="Sangeet occasion"
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                          src="https://static3.azafashions.com/uploads/landing_page_section_content_image/175972944873402.jpg"
                        />
                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                          <h3 className="text-white tracking-normal text-[10px] lg:text-lg px-4 font-medium text-center line-clamp-1">
                            Sangeet
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Reception & Cocktail - Medium Card */}
                <div className="relative col-span-2 col-start-5 h-full">
                  <div className="h-full rounded-xl lg:rounded-3xl overflow-hidden">
                    <a className="group block h-full">
                      <div className="relative overflow-hidden w-full h-full aspect-[430/248]">
                        <img
                          alt="Reception & Cocktail occasion"
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                          src="https://static3.azafashions.com/uploads/landing_page_section_content_image/175949581981503.jpg"
                        />
                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                          <h3 className="text-white tracking-normal text-[10px] lg:text-lg px-4 font-medium text-center line-clamp-1">
                            Reception & Cocktail
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Mehendi - Medium Card */}
                <div className="relative col-span-2 col-start-3 row-start-2 h-full">
                  <div className="h-full rounded-xl lg:rounded-3xl overflow-hidden">
                    <a className="group block h-full">
                      <div className="relative overflow-hidden w-full h-full aspect-[430/248]">
                        <img
                          alt="Mehendi occasion"
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                          src="https://static3.azafashions.com/uploads/landing_page_section_content_image/175949584454404.jpg"
                        />
                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                          <h3 className="text-white tracking-normal text-[10px] lg:text-lg px-4 font-medium text-center line-clamp-1">
                            Mehendi
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Roka - Small Card */}
                <div className="relative col-start-5 row-start-2 h-full">
                  <div className="h-full rounded-xl lg:rounded-3xl overflow-hidden">
                    <a className="group block h-full">
                      <div className="relative overflow-hidden w-full h-full aspect-[205/248]">
                        <img
                          alt="Roka occasion"
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                          src="https://static3.azafashions.com/uploads/landing_page_section_content_image/1760704819453roka.jpg"
                        />
                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                          <h3 className="text-white tracking-normal text-[10px] lg:text-lg px-4 font-medium text-center line-clamp-1">
                            Roka
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Bridal Trousseau - Small Card */}
                <div className="relative col-start-6 row-start-2 h-full">
                  <div className="h-full rounded-xl lg:rounded-3xl overflow-hidden">
                    <a className="group block h-full">
                      <div className="relative overflow-hidden w-full h-full aspect-[205/248]">
                        <img
                          alt="Bridal Trousseau occasion"
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                          src="https://static3.azafashions.com/uploads/landing_page_section_content_image/175949590081606.jpg"
                        />
                        <div className="absolute bottom-0 w-full left-0 flex flex-col min-h-16 lg:min-h-36 bg-gradient-to-b from-black/0 to-black/50 justify-end pb-4 lg:pb-6 space-y-1">
                          <h3 className="text-white tracking-normal text-[10px] lg:text-lg px-4 font-medium text-center line-clamp-1">
                            Bridal Trousseau
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </main>
       <Footer/>
    </div>
  );
}
