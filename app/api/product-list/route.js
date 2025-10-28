// app/api/product-list/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  try {
    // Get query parameters from the request URL
    const { searchParams } = new URL(request.url);
    const category_id = searchParams.get('category_id');
    
    console.log('Fetching products for category:', category_id);

    // Make the API call with proper parameters
    const response = await axios.get('https://dashboardapi.toqi.ai/api/accounts/product/list/', {
      params: {
        store_id: 'store0000008',
        category_id: category_id
      }
    });

    console.log('API Response status:', response.data.status);
    
    return NextResponse.json(response.data);

  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    return NextResponse.json(
      {
        status: false,
        message: "Error fetching products",
        error: error.response?.data?.message || error.message
      },
      { status: 500 }
    );
  }
}