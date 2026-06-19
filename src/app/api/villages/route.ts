import { NextRequest, NextResponse } from 'next/server';
import { getLocationsData, getUnique } from '@/lib/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const cell = searchParams.get('cell');
    const sector = searchParams.get('sector');
    
    let data = getLocationsData();
    if (sector) {
      data = data.filter(d => 
        d.sector_name.toLowerCase() === sector.toLowerCase() || 
        d.sector_code === sector
      );
    }
    if (cell) {
      data = data.filter(d => 
        d.cell_name.toLowerCase() === cell.toLowerCase() || 
        d.cell_code.toString() === cell
      );
    }
    
    const villages = getUnique(data, 'village_code').map(v => ({
      sector_name: v.sector_name,
      cell_code: v.cell_code,
      cell_name: v.cell_name,
      village_code: v.village_code,
      village_name: v.village_name,
    })).sort((a, b) => a.village_name.localeCompare(b.village_name));
    
    return NextResponse.json(villages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load locations data' }, { status: 500 });
  }
}
