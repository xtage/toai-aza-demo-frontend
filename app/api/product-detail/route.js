// app/api/product-detail/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const product_id = searchParams.get('product_id');
    
    // Make the API call with proper parameters
    const response = await axios.get('https://dashboardapi.toqi.ai/api/accounts/product-detail/list/', {
      params: {
        store_id: 'store0000008',
        product_id: product_id
      }
    });

    console.log('API Response status:', response.data.status);
    
    return NextResponse.json(response.data);

  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    return NextResponse.json(
      {
        status: false,
        message: "Error fetching product details",
        error: error.response?.data?.message || error.message
      },
      { status: 500 }
    );
  }
}