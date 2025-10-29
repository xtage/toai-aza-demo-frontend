"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useCategory } from "@/context/CategoryContext";

const PagePathNames = {
  Men: "/collection/men",
  Women: "/collection/women",
  Kids: "/collection/kids",
  Accessories: "/collection/accessories",
  Jewellery: "/collection/jewellery",
};

const PageToCategoryMap: Record<string, string> = {
  Men: "CAT0000003",
  Women: "CAT0000002",
  Kids: "CAT0000001",
  Accessories: "CAT0000004",
  Jewellery: "CAT0000005",
};

interface Category {
  category_id: string;
  category_name: string;
  parent_category_id: string;
  level_id: string;
  category_url: string;
  sub_categories?: Category[];
  sub_sub_categories?: Category[];
}

interface CategoryResponse {
  status: boolean;
  message: string;
  data: Category[];
}

const Header = () => {
  const pathname = usePathname();
  const { selectedSubCategory, setSelectedSubCategory } = useCategory();

  const [categories, setCategories] = useState<CategoryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentPageName = () => {
    const entry = Object.entries(PagePathNames).find(
      ([, path]) => path === pathname
    );
    return entry ? entry[0] : null;
  };

  const currentPage = getCurrentPageName();

  /** Fetch categories once */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/category-hierarchy");
        if (response.data.status) {
          setCategories(response.data);
        } else {
          setError(response.data.message || "Failed to fetch categories");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  /** Find matching category from data */
  const findCategory = useCallback(
    (cats: Category[]): Category | null => {
      return cats.find((c) => c.category_name === currentPage) || null;
    },
    [currentPage]
  );

  /** Derive subcategories */
  const subCats = categories?.data
    ? findCategory(categories.data)?.sub_categories : [];

  /** Set default subcategory once when page changes */
  useEffect(() => {
    if (currentPage && PageToCategoryMap[currentPage]) {
      setSelectedSubCategory(PageToCategoryMap[currentPage]);
      console.log(
        `✅ Set subcategory for ${currentPage}: ${PageToCategoryMap[currentPage]}`
      );
    }
  }, [currentPage, setSelectedSubCategory]);
          
    return (
        <>
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
                                <Link href="/collection/women">
                                    <div>
                                        Women
                                        <i className="absolute w-full h-0.5 bg-azaBlackShade3 rounded-tl-sm rounded-tr-sm left-0 bottom-0">
                                        </i>
                                    </div>
                                </Link>
                            </li>
                            <li className="relative px-4 py-2 whitespace-nowrap">
                                <Link href="/collection/men">
                                    <div>Men
                                    </div>
                                </Link>
                            </li>
                            <li className="relative px-4 py-2 whitespace-nowrap">
                                <Link href="/collection/kids">
                                    <div>Kids</div>
                                </Link>
                            </li>
                            <li className="relative px-4 py-2 whitespace-nowrap">
                                <Link href="/collection/jewellery">
                                    <div>Jewellery</div>
                                </Link>
                            </li>
                            <li className="relative px-4 py-2 whitespace-nowrap">
                                <Link href="/collection/accessories">
                                    <div>Accessories</div>
                                </Link>
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
                                <li
                                    className={`px-2 py-1.5 border-b-2 border-t-2 border-t-transparent text-azaBlackShade3 ${pathname === "/collection/women" ? "border-b-black" : "border-b-transparent"
                                        }`}
                                >
                                    <div>
                                        <Link href="/collection/women">Women</Link>
                                    </div>
                                </li>

                                <li
                                    className={`px-2 py-1.5 border-b-2 border-t-2 border-t-transparent text-azaBlackShade3 ${pathname === "/collection/men" ? "border-b-black" : "border-b-transparent"
                                        }`}
                                >
                                    <div>
                                        <Link href="/collection/men">Men</Link>

                                    </div>
                                </li>
                                <li
                                    className={`px-2 py-1.5 border-b-2 border-t-2 border-t-transparent text-azaBlackShade3 ${pathname === "/collection/kids" ? "border-b-black" : "border-b-transparent"
                                        }`}
                                >
                                    <div>
                                        <Link href="/collection/kids">Kids</Link>
                                    </div>
                                </li>
                                <li
                                    className={`px-2 py-1.5 border-b-2 border-t-2 border-t-transparent text-azaBlackShade3 ${pathname === "/collection/jewellery" ? "border-b-black" : "border-b-transparent"
                                        }`}
                                >
                                    <div>
                                        <Link href="/collection/jewellery">Jewellery</Link>
                                    </div>
                                </li>
                                <li
                                    className={`px-2 py-1.5 border-b-2 border-t-2 border-t-transparent text-azaBlackShade3 ${pathname === "/collection/accessories" ? "border-b-black" : "border-b-transparent"
                                        }`}
                                >
                                    <div>
                                        <Link href="/collection/accessories">Accessories</Link>
                                    </div>
                                </li>
                                {/* <li
                                    className={`px-2 py-1.5 border-b-2 border-t-2 border-t-transparent text-azaBlackShade3 ${pathname === "/collection/women" ? "border-b-black" : "border-b-transparent"
                                        }`}
                                >
                                    <div>
                                        <a>
                                            Aza Editorials
                                        </a>
                                    </div>
                                </li> */}
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
                            <Link className="pt-1" href="/">
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
                            </Link>
                            <div className="relative flex items-center justify-between py-2 pl-3 pr-2 border rounded lg:p-0 border-StorkGray2 lg:border-none lg:rounded-none lg:space-x-1.5"><span className="text-sm cursor-pointer md:text-xs xl:text-sm">INR</span><span className="text-sm cursor-pointer md:text-xs xl:text-sm">(₹)</span><i className="bgImages w-[12px] h-[7px] block bg-[position:-118px_-103px]"></i></div>
                        </div>
                        <div className="relative flex-1 px-12 maxScrn:px-32">
                            <form className="flex items-center border-b border-[#d2d2d2] rounded-sm false">
                                <button
                                    className="w-[18px] h-[17px] scale-110 mx-3 cursor-pointer bgImages flex-[0_0_18px]"
                                    style={{ backgroundPosition: "-216px -231px" }}
                                ></button>
                                <i className="ri-search-line"></i>
                                <input
                                    type="search"
                                    placeholder="Search For products, brand and more"
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
                                href=""
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
                                    {/* {
                                        subCats.map((item) => (
                                            <li key={item.category_id} className="pb-2 text-xs font-normal xl:text-sm" onClick={() => setSelectedSubCategory(item.category_id)}>
                                                <div>
                                                    <span className="py-2 hover:font-normal hover:text-azaBrandColor font-light text-azaBlackShade3 after:h-[2px] after:transition-all after:bg-azaBrandColor transition duration-400 after:content-[''] after:mt-5 after:-bottom-[10px] after:right-0 after:absolute after:w-0 after:z-[10] hover:after:w-[fit-content]">{item.category_name}
                                                    </span>
                                                </div>
                                            </li>
                                        ))
                                    } */}
                                    {subCats?.map((item) => {
                                        const isActive = item.category_id === selectedSubCategory;
                                        return (
                                            // <li
                                            //     key={item.category_id}
                                            //     onClick={() => setSelectedSubCategory(item.category_id)}
                                            //     className={`pb-2 text-xs font-normal xl:text-sm cursor-pointer transition-colors duration-200 ${isActive ? "text-azaBrandColor font-medium" : "text-azaBlackShade3 font-light"
                                            //         }`}
                                            // >
                                            //     <span
                                            //         className={`py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${isActive
                                            //             ? "after:w-full after:bg-azaBrandColor"
                                            //             : "after:w-0 hover:after:w-full hover:after:bg-azaBrandColor"
                                            //             }`}
                                            //     >
                                            //         {item.category_name}
                                            //     </span>
                                            // </li>
                                            <li
                                                key={item.category_id}
                                                onClick={() => setSelectedSubCategory(item.category_id)}
                                                className={`pb-2 text-xs font-normal xl:text-sm cursor-pointer transition-colors duration-200 ${isActive ? "text-azaBrandColor font-medium" : "text-azaBlackShade3 font-light"
                                                    }`}
                                            >
                                                <span
                                                    className={`py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[0px] after:transition-all after:duration-300 ${isActive
                                                        ? "after:w-full after:bg-azaBrandColor  after:top-[75%] "
                                                        : "after:w-0 hover:after:w-full hover:after:bg-azaBrandColor"
                                                        }`}
                                                >
                                                    {item.category_name}
                                                </span>
                                            </li>

                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;