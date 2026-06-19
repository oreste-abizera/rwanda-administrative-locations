import { NextRequest, NextResponse } from 'next/server';
import { getLocationsData, getUnique } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const district = searchParams.get('district');
    const province = searchParams.get('province');
    
    let data = getLocationsData();
    if (province) {
      data = data.filter(d => 
        d.province_name.toLowerCase() === province.toLowerCase() || 
        d.province_code.toString() === province
      );
    }
    if (district) {
      data = data.filter(d => 
        d.district_name.toLowerCase() === district.toLowerCase() || 
        d.district_code.toString() === district
      );
    }
    
    const sectors = getUnique(data, 'sector_code').map(s => ({
      province_code: s.province_code,
      province_name: s.province_name,
      district_code: s.district_code,
      district_name: s.district_name,
      sector_code: s.sector_code,
      sector_name: s.sector_name,
    })).sort((a, b) => a.sector_name.localeCompare(b.sector_name));
    
    return NextResponse.json(sectors);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load locations data' }, { status: 500 });
  }
}
