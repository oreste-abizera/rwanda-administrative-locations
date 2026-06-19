import { NextRequest, NextResponse } from 'next/server';
import { getLocationsData, getUnique } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sector = searchParams.get('sector');
    const district = searchParams.get('district');
    
    let data = getLocationsData();
    if (district) {
      data = data.filter(d => 
        d.district_name.toLowerCase() === district.toLowerCase() || 
        d.district_code.toString() === district
      );
    }
    if (sector) {
      data = data.filter(d => 
        d.sector_name.toLowerCase() === sector.toLowerCase() || 
        d.sector_code === sector
      );
    }
    
    const cells = getUnique(data, 'cell_code').map(c => ({
      province_name: c.province_name,
      district_name: c.district_name,
      sector_code: c.sector_code,
      sector_name: c.sector_name,
      cell_code: c.cell_code,
      cell_name: c.cell_name,
    })).sort((a, b) => a.cell_name.localeCompare(b.cell_name));
    
    return NextResponse.json(cells);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load locations data' }, { status: 500 });
  }
}
