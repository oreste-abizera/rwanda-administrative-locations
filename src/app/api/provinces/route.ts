import { NextResponse } from 'next/server';
import { getLocationsData, getUnique } from '@/lib/data';

export async function GET() {
  try {
    const data = getLocationsData();
    const provinces = getUnique(data, 'province_code').map(p => ({
      province_code: p.province_code,
      province_name: p.province_name,
    })).sort((a, b) => a.province_name.localeCompare(b.province_name));
    
    return NextResponse.json(provinces);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load locations data' }, { status: 500 });
  }
}
