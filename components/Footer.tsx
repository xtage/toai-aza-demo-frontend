const Footer=()=>{
    return (
        <footer className="max-w-full mx-auto bg-white border-t border-gray-300 footer">
        <div className="lg:block __className_d6f4a7 font-light">
          <div className="bg-[#fbfbfb]">
            <div className="px-10 mx-auto wrapperContainer">
              <div className="flex flex-col justify-between items-center pt-6 pb-12 lg:items-start lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full lg:w-auto md:block">
                  <img
                    alt="20 years celebration"
                    loading="lazy"
                    width="100"
                    height="64"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://www.azafashions.com/images/20_yrs_logo.png"
                  />
                  <div className="mx-auto mt-6 mb-3 w-11/12 md:hidden">
                    <p className="mb-4 font-semibold text-center">
                      Download the Aza Fashions app
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 w-full md:mb-0">
                      <button className="relative pt-[30%]">
                        <img
                          alt="IOS Btn"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
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
                          src="images/icons/appleBtn.png"
                        />
                      </button>
                      <button className="relative pt-[30%]">
                        <img
                          alt="IOS Btn"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
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
                          src="images/icons/androidBtn.png"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="hidden mt-3 lg:block">
                    <ul className="space-y-3 columns-2 lg:columns-1 text-azaBlackShade3">
                      <li className="text-sm cursor-pointer">
                        <a>
                          <p>About Aza</p>
                        </a>
                      </li>
                      <li className="text-sm cursor-pointer">
                        <a>
                          <p>Careers</p>
                        </a>
                      </li>
                      <li className="text-sm cursor-pointer">
                        <a >
                          <p>In Store Events</p>
                        </a>
                      </li>
                      <li className="text-sm cursor-pointer">
                        <a>
                          <p>Contact Us</p>
                        </a>
                      </li>
                      <li className="text-sm cursor-pointer">
                        <a >
                          <p>Important Information</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <div>
                    <input
                      type="checkbox"
                      id="col_two"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="col_two"
                      className="flex justify-between items-center py-3 text-sm font-semibold text-center lg:text-left lg:py-0"
                    >
                      BUYING GUIDE
                      <i className="block peer-checked:bg-[-339px_-158px] bg-[-325px_-158px] lg:hidden bgImages w-[14px] h-[14px]"></i>
                    </label>
                    <div className="hidden mt-3 peer-checked:block lg:block">
                      <ul className="space-y-3 columns-2 lg:columns-1 text-azaBlackShade3">
                        <li className="text-sm cursor-pointer">
                          <a >
                            <p>Gift Card</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a >
                            <p>Gift Card T&amp;C</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a >
                            <p>Aza Cash T&amp;C</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a >
                            <p>Aza Advantage</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a>
                            <p>Coupon Code &amp; Offers T&amp;C</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a>
                            <p>FAQs</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a>
                            <p>Cancellations, Returns &amp; Exchanges</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a >
                            <p>Shipping &amp; Delivery</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a >
                            <p>Payment Options</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <div>
                    <input type="checkbox" id="col_3" className="hidden peer" />
                    <label
                      htmlFor="col_3"
                      className="flex justify-between items-center py-3 text-sm font-semibold text-center lg:text-left lg:py-0"
                    >
                      ACCOUNT
                      <i className="block peer-checked:bg-[-339px_-158px] bg-[-325px_-158px] lg:hidden bgImages w-[14px] h-[14px]"></i>
                    </label>
                    <div className="hidden mt-3 peer-checked:block lg:block">
                      <ul className="space-y-3 columns-2 lg:columns-1 text-azaBlackShade3">
                        <li className="text-sm cursor-pointer">
                          <p>Orders &amp; Returns</p>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <p>Account Details</p>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <p>Aza Wallet</p>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <p>Addresses</p>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <p>Aza Cash</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:mt-[30px]">
                    <input type="checkbox" id="col_4" className="hidden peer" />
                    <label
                      htmlFor="col_4"
                      className="flex justify-between items-center py-3 text-sm font-semibold text-center lg:text-left lg:py-0"
                    >
                      POLICIES
                      <i className="block peer-checked:bg-[-339px_-158px] bg-[-325px_-158px] lg:hidden bgImages w-[14px] h-[14px]"></i>
                    </label>
                    <div className="hidden mt-3 peer-checked:block lg:block">
                      <ul className="space-y-3 columns-2 lg:columns-1 text-azaBlackShade3">
                        <li className="text-sm cursor-pointer">
                          <a>
                            <p>Terms &amp; Conditions</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a>
                            <p>Security &amp; Privacy</p>
                          </a>
                        </li>
                        <li className="text-sm cursor-pointer">
                          <a>
                            <p>Purchase Order Policy</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <div>
                    <input type="checkbox" id="col_5" className="hidden peer" />
                    <label
                      htmlFor="col_5"
                      className="flex justify-between items-center py-3 text-sm font-semibold text-center lg:text-left lg:py-0"
                    >
                      CONTACT US
                      <i className="block peer-checked:bg-[-339px_-158px] bg-[-325px_-158px] lg:hidden bgImages w-[14px] h-[14px]"></i>
                    </label>
                    <div className="hidden mt-3 peer-checked:block lg:block">
                      <ul className="space-y-3 text-azaBlackShade3">
                        <li className="text-sm">
                          <a
                            target="_blank"
                            rel="noreferrer"
                          >
                            Store Locator<b></b>
                          </a>
                        </li>
                        <li className="text-sm">
                          <a>
                            Toll Free:<b> 02242792123</b>
                          </a>
                        </li>
                        <li className="text-sm">
                          <a>
                            (Mon-Fri 10am-10pm IST)<b></b>
                          </a>
                        </li>
                        <li className="text-sm">
                          <a
                            target="_blank"
                            rel="noreferrer"
                          >
                            Whatsapp:<b> +91 8291990059</b>
                          </a>
                        </li>
                        <li className="text-sm">
                          <a
                            target="_blank"
                            rel="noreferrer"
                          >
                            <b>contactus@azafashions.com</b>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="hidden w-auto max-w-[290px] lg:block">
                  <div className="flex-col hidden lg:flex">
                    <p className="mb-5 text-sm font-semibold text-center uppercase md:text-left">
                      Download the Aza Fashions app
                    </p>
                  </div>
                  <div className="items-center justify-center hidden my-1 space-x-3 lg:flex">
                    <img
                      alt="qrlink"
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      style={{
                        color: "transparent",
                        height: "auto",
                        maxWidth: "50%",
                        width: "50%",
                      }}
                      src="https://www.azafashions.com/_next/static/media/appqrcode.5db11bcb.png"
                    />
                  </div>
                  <div className="grid grid-cols-2 mt-6 mb-6 gap-x-4 md:mb-0">
                    <button className="relative pt-[30%]">
                      <img
                        alt="IOS Btn"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
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
                        src="https://www.azafashions.com/images/icons/appleBtn.png"
                      />
                    </button>
                    <button className="relative pt-[30%]">
                      <img
                        alt="IOS Btn"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
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
                        src="https://www.azafashions.com/images/icons/androidBtn.png"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:block __className_d6f4a7 font-light bg-[#fbfbfb]">
            <div className="px-10 py-2 mx-auto wrapperContainer">
              <div className="flex justify-between items-center text-sm text-azaBlackShade3">
                <span>
                  Copyright © 2025 Aza Fashions Pvt Ltd. All rights reserved.
                </span>
                <a href="choose-country-region">IN</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer