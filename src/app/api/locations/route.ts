import { NextRequest, NextResponse } from 'next/server';
import { getLocationsData } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '50', 10);
    const page = parseInt(searchParams.get('page') || '1', 10);
    
    let data = getLocationsData();
    
    if (q) {
      const lowerQ = q.toLowerCase();
      data = data.filter(d => 
        d.village_name.toLowerCase().includes(lowerQ) ||
        d.cell_name.toLowerCase().includes(lowerQ) ||
        d.sector_name.toLowerCase().includes(lowerQ) ||
        d.district_name.toLowerCase().includes(lowerQ) ||
        d.province_name.toLowerCase().includes(lowerQ)
      );
    }
    
    const total = data.length;
    const startIndex = (page - 1) * limit;
    const paginatedData = data.slice(startIndex, startIndex + limit);
    
    return NextResponse.json({
      data: paginatedData,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load locations data' }, { status: 500 });
  }
}
