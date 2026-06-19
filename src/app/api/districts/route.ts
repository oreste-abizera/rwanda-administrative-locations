import { NextRequest, NextResponse } from 'next/server';
import { getLocationsData, getUnique } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const province = searchParams.get('province');
    
    let data = getLocationsData();
    if (province) {
      data = data.filter(d => 
        d.province_name.toLowerCase() === province.toLowerCase() || 
        d.province_code.toString() === province
      );
    }
    
    const districts = getUnique(data, 'district_code').map(d => ({
      province_code: d.province_code,
      province_name: d.province_name,
      district_code: d.district_code,
      district_name: d.district_name,
    })).sort((a, b) => a.district_name.localeCompare(b.district_name));
    
    return NextResponse.json(districts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load locations data' }, { status: 500 });
  }
}
