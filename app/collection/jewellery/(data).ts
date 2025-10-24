export interface Product {
  product_id: number;
  product_url: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  discount_price?: number;
  discount_percent?: string;
  availability: string;
  currency: string;
  offers: string;
  disclaimer: string;
  shop_with_confidence: string;
  shipping_returns: string;
  images: string;
  size_guide_images: string;
  category: string;
  subcategory: string;
  subsubcategory?: string;
  No_of_Component?: number;
  Components?: string;
  Noteworthy_Feature?: string;
  Occasions?: string;
  Style_Genre?: string;
  Pattern?: string;
  Type_of_Work?: string;
  Color?: string;
  // ... and many more fields can be added as needed
}

const mockProducts: Product[] = [
  {
    product_id: 219245,
    product_url: "https://www.azafashions.com/products/punit-balana-printed-kurta-and-joggers-set/219245",
    brand: "Punit Balana",
    title: "Red Satin Silk Printed Kurta And Joggers Set",
    description: "Cherry red satin silk straight long kurta with all-over printed motifs. Comes with jogger pants.",
    price: 19610,
    discount_price: undefined,
    discount_percent: "",
    availability: "In Stock",
    currency: "INR",
    offers: "Best Coupon: CREDIT12 , Earn  392 Aza Cash, Standard Delivery by 22nd October Free Shipping",
    disclaimer: "Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed. View Supplier Information",
    shop_with_confidence: "Loved by 2 Million+ Customers, Trusted in Fashion for 20 Years, Authentic Designer Labels, 75+ Countries Served, Personalized Styling Assistance, Exclusive Member Benefits",
    shipping_returns: "Please select your size to view estimated shipping timelines, Free Shipping, Returnable within 2 days of delivery (3 days for Diamond tier members). Custom-made orders are not returnable. Product's original tags, if attached, must be intact for a successful return. If the original tags are missing, Aza Fashions may decline the return request and send the product back to the customer. Return handling charges would be applicable More Details",
    images: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/pbsb-96_1008-0563857001628582335.jpg",
    size_guide_images: "https://static3.azafashions.com/emailer/images/Measurement_Men_Front.jpg, https://static3.azafashions.com/emailer/images/Measurement_Men_Back.jpg",
    category: "Men",
    subcategory: "Kurta Sets",
    subsubcategory: "Printed",
    No_of_Component: 2,
    Components: "Kurta, Pant",
    Noteworthy_Feature: "Split neck, Side slits, Cuff hem",
    Occasions: "Destination Wedding",
    Style_Genre: "Indian",
    Pattern: "",
    Type_of_Work: "",
    Color: "Red"
  },
  {
    product_id: 359405,
    product_url: "https://www.azafashions.com/products/kasbah-geometric-work-kurta/359405",
    brand: "Kasbah",
    title: "White Georgette, Cotton Foil Printing, Zari Geometric Work Kurta",
    description: "White kurta featuring intricate zari and foil work with a mandarin neckline and full sleeves",
    price: 18693,
    discount_price: 23367,
    discount_percent: "20%OFF",
    availability: "In Stock",
    currency: "INR",
    offers: "Best Coupon: CREDIT12 , Earn  374 Aza Cash, Standard Delivery by 7th November Free Shipping",
    disclaimer: "Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed. View Supplier Information",
    shop_with_confidence: "Loved by 2 Million+ Customers, Trusted in Fashion for 20 Years, Authentic Designer Labels, 75+ Countries Served, Personalized Styling Assistance, Exclusive Member Benefits",
    shipping_returns: "Please select your size to view estimated shipping timelines, Free Shipping, This product is non-returnable More Details",
    images: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1-0927529001672757864.jpg",
    size_guide_images: "https://static3.azafashions.com/emailer/images/Measurement_Men_Front.jpg, https://static3.azafashions.com/emailer/images/Measurement_Men_Back.jpg",
    category: "Men",
    subcategory: "Kurtas",
    subsubcategory: "Classic Kurtas",
    No_of_Component: 1,
    Components: "Kurta",
    Noteworthy_Feature: "Intricate zari and foil work on the fabric, Mandarin neckline for a modern touch, Full sleeves for added elegance",
    Occasions: "Perfect for wedding occasions",
    Style_Genre: "Indian style",
    Pattern: "Embroidered",
    Type_of_Work: "Foil Printing, Zari",
    Color: "White"
  },
  {
    product_id: 378000,
    product_url: "https://www.azafashions.com/products/kasbah-mirror-embroidered-kurta/378000",
    brand: "Kasbah",
    title: "Brown Georgette Mirrors Embroidered Kurta",
    description: "Brown kurta featuring full sleeves, mandarin collar, and mirror embroidery",
    price: 19143,
    discount_price: 23928,
    discount_percent: "20%OFF",
    availability: "In Stock",
    currency: "INR",
    offers: "Best Coupon: CREDIT12 , Earn  383 Aza Cash, Standard Delivery by 7th November Free Shipping",
    disclaimer: "Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed. View Supplier Information",
    shop_with_confidence: "Loved by 2 Million+ Customers, Trusted in Fashion for 20 Years, Authentic Designer Labels, 75+ Countries Served, Personalized Styling Assistance, Exclusive Member Benefits",
    shipping_returns: "Please select your size to view estimated shipping timelines, Free Shipping, This product is non-returnable More Details",
    images: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1-0087826001677155896.jpg",
    size_guide_images: "https://static3.azafashions.com/emailer/images/Measurement_Men_Front.jpg, https://static3.azafashions.com/emailer/images/Measurement_Men_Back.jpg",
    category: "Men",
    subcategory: "Kurtas",
    subsubcategory: "Classic Kurtas",
    No_of_Component: 1,
    Components: "Kurta",
    Noteworthy_Feature: "Intricate mirror work detailing, Mandarin collar design, Full sleeve style",
    Occasions: "Ideal for Mehendi & Puja events",
    Style_Genre: "Indian style",
    Pattern: "Embroidered",
    Type_of_Work: "Mirrors",
    Color: "Brown"
  },
  {
    product_id: 387141,
    product_url: "https://www.azafashions.com/products/amrit-dawani-tiger-motif-hand-painted-shirt/387141",
    brand: "Amrit Dawani",
    title: "White Cotton Embroidery Tiger Motif Hand Painted Shirt",
    description: "White shirt featuring hand painted tiger motifs and pocket detailing",
    price: 4613,
    discount_price: 6590,
    discount_percent: "30%OFF",
    availability: "In Stock",
    currency: "INR",
    offers: "Best Coupon: CREDIT12 , Earn  92 Aza Cash, Standard Delivery by 14th November Free shipping above â‚¹4,999",
    disclaimer: "Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed. View Supplier Information",
    shop_with_confidence: "Loved by 2 Million+ Customers, Trusted in Fashion for 20 Years, Authentic Designer Labels, 75+ Countries Served, Personalized Styling Assistance, Exclusive Member Benefits",
    shipping_returns: "Please select your size to view estimated shipping timelines, Free shipping above Ã¢Â‚Â¹4,999, Returnable within 2 days of delivery (3 days for Diamond tier members). Sizes XL, and XXL has a discount of > 15% and is hence non-returnable/non-exchangeable. Custom-made orders are not returnable. Product's original tags, if attached, must be intact for a successful return. If the original tags are missing, Aza Fashions may decline the return request and send the product back to the customer. Return handling charges would be applicable More Details",
    images: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1-0637722001679400584.JPG",
    size_guide_images: "https://static3.azafashions.com/emailer/images/Measurement_Men_Front.jpg, https://static3.azafashions.com/emailer/images/Measurement_Men_Back.jpg",
    category: "Men",
    subcategory: "Shirts",
    subsubcategory: "Casual Shirts",
    No_of_Component: 1,
    Components: "Shirt",
    Noteworthy_Feature: "Hand painted tiger motifs on the front, Pocket detailing on both sides",
    Occasions: "Perfect for party occasions",
    Style_Genre: "Contemporary Indian style",
    Pattern: "Printed",
    Type_of_Work: "Embroidery",
    Color: "White"
  },
  {
    product_id: 393573,
    product_url: "https://www.azafashions.com/products/raw-and-rustic-by-niti-bothra-beige-linen-bundi-and-pant-set/393573",
    brand: "Raw & Rustic By Niti Bothra",
    title: "Beige Linen Bundi And Pant Set",
    description: "Beige bundi featuring a band neckline and sleeveless design. Paired with matching straight linen pant crafted from European Flax Certified Pure Linen.",
    price: 14819,
    discount_price: undefined,
    discount_percent: "",
    availability: "In Stock",
    currency: "INR",
    offers: "Earn  296 Aza Cash, Log in to view coupons, Standard Delivery by 7th November Free Shipping",
    disclaimer: "Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed. View Supplier Information",
    shop_with_confidence: "Loved by 2 Million+ Customers, Trusted in Fashion for 20 Years, Authentic Designer Labels, 75+ Countries Served, Personalized Styling Assistance, Exclusive Member Benefits",
    shipping_returns: "Please select your size to view estimated shipping timelines, Free Shipping, Returnable within 2 days of delivery (3 days for Diamond tier members). Custom-made orders are not returnable. Product's original tags, if attached, must be intact for a successful return. If the original tags are missing, Aza Fashions may decline the return request and send the product back to the customer. Return handling charges would be applicable More Details",
    images: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1-0030858001680622537.JPG",
    size_guide_images: "https://static3.azafashions.com/emailer/images/Measurement_Men_Front.jpg, https://static3.azafashions.com/emailer/images/Measurement_Men_Back.jpg",
    category: "Men",
    subcategory: "Nehru Jacket & Sets",
    subsubcategory: "",
    No_of_Component: 2,
    Components: "Bundi, Bandhgala",
    Noteworthy_Feature: "Contrast lined patchwork, Flap pockets",
    Occasions: "Ideal for weddings",
    Style_Genre: "Indian style",
    Pattern: "Solid",
    Type_of_Work: "",
    Color: "Beige"
  }
];

// Additional mock data for different product types
const additionalMockProducts: Product[] = [
  {
    product_id: 424918,
    product_url: "https://www.azafashions.com/products/chatenya-mittal-cotton-silk-ombre-kurta-with-pant/424918",
    brand: "Chatenya Mittal",
    title: "Grey Cotton, Silk Ombre Kurta With Pant",
    description: "Grey ombre kurta featuring a mandarin neckline and straight full sleeves. Paired with a contrast pyjama pant.",
    price: 16652,
    discount_price: 20815,
    discount_percent: "20%OFF",
    availability: "In Stock",
    currency: "INR",
    offers: "Best Coupon: CREDIT12 , Earn  333 Aza Cash, Standard Assured Delivery by 31st October Free Shipping",
    disclaimer: "Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed. View Supplier Information",
    shop_with_confidence: "Loved by 2 Million+ Customers, Trusted in Fashion for 20 Years, Authentic Designer Labels, 75+ Countries Served, Personalized Styling Assistance, Exclusive Member Benefits",
    shipping_returns: "Please select your size to view estimated shipping timelines, Free Shipping, This product is non-returnable More Details",
    images: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1688472800226_1.jpg",
    size_guide_images: "https://static3.azafashions.com/emailer/images/Measurement_Men_Front.jpg, https://static3.azafashions.com/emailer/images/Measurement_Men_Back.jpg",
    category: "Men",
    subcategory: "Kurta Sets",
    subsubcategory: "Plain",
    No_of_Component: 2,
    Components: "Kurta, Pyjama",
    Noteworthy_Feature: "Pintucked details on sleeves, Front button placket closure",
    Occasions: "Ideal for Mehendi and Puja ceremonies",
    Style_Genre: "Indian style",
    Pattern: "Solid",
    Type_of_Work: "",
    Color: "Gray, White"
  },
  {
    product_id: 453102,
    product_url: "https://www.azafashions.com/products/amrit-dawani-embellished-cotton-shirt/453102",
    brand: "Amrit Dawani",
    title: "Black Cotton Embroidery Embellished Shirt",
    description: "Black full sleeves button down shirt crafted from cotton featuring embellishments",
    price: 5214,
    discount_price: undefined,
    discount_percent: "",
    availability: "In Stock",
    currency: "INR",
    offers: "Earn  104 Aza Cash, Log in to view coupons, Standard Delivery by 7th November Free Shipping",
    disclaimer: "Color of the actual product may vary from the image. These are made to order designer styles, hence expect a slight variation from the image displayed. View Supplier Information",
    shop_with_confidence: "Loved by 2 Million+ Customers, Trusted in Fashion for 20 Years, Authentic Designer Labels, 75+ Countries Served, Personalized Styling Assistance, Exclusive Member Benefits",
    shipping_returns: "Please select your size to view estimated shipping timelines, Free Shipping, Returnable within 2 days of delivery (3 days for Diamond tier members). Sizes M, XXL, and 3XL has a discount of > 15% and is hence non-returnable/non-exchangeable. Custom-made orders are not returnable. Product's original tags, if attached, must be intact for a successful return. If the original tags are missing, Aza Fashions may decline the return request and send the product back to the customer. Return handling charges would be applicable More Details",
    images: "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1695912069155_1.JPG",
    size_guide_images: "https://static3.azafashions.com/emailer/images/Measurement_Men_Front.jpg, https://static3.azafashions.com/emailer/images/Measurement_Men_Back.jpg",
    category: "Men",
    subcategory: "Shirts",
    subsubcategory: "Casual Shirts",
    No_of_Component: 1,
    Components: "Shirt",
    Noteworthy_Feature: "Embellishments along the shoulder seams",
    Occasions: "Ideal for party occasions",
    Style_Genre: "Western style",
    Pattern: "Embroidered",
    Type_of_Work: "Embroidery",
    Color: "Black"
  }
];

export const allMockProducts: Product[] = [...mockProducts, ...additionalMockProducts];

