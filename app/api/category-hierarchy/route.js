import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    // Use the real API endpoint
    const response = await axios.get('https://dashboardapi.toqi.ai/api/accounts/category-hierarchy/list/', {
      params:{
        store_id: 'store0000008'
      }
    });

    // Return the actual API response
    return NextResponse.json(response.data);

  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    return NextResponse.json(
      {
        status: false,
        message: "Error fetching categories",
        error: error.response?.data?.message || error.message
      },
      { status: 500 }
    );
  }
}