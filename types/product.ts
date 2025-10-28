export interface ProductAttribute {
    attribute_id: string;
    attribute_name: string;
    attribute_value: string;
  }
  
  export interface Collection {
    name: string;
    url: string;
    image: string;
  }
  
  export interface SuggestedItem {
    product_id: number;
    product_name: string;
    product_url: string;
    source_name: string;
    price:number,
    maximum_retail_price:number,
    discount_percentage:number,
    product_image:string
  }
  
  export interface Product {
    product_id: number;
    product_name: string;
    product_url: string;
    brand: string;
    price: number;
    maximum_retail_price: number;
    discount_percentage: number;
    product_image: string;
    sizes: string[];
    in_stock: boolean;
    attributes: ProductAttribute[];
    collections: Collection;
    suggested_items: SuggestedItem[];
    images:string[]
  }
  
  export interface ProductListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      status: boolean;
      message: string;
      data: Product[];
    };
  }