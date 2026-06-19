import fs from 'fs';
import path from 'path';

export interface LocationRecord {
  id: string;
  country_code: string;
  country_name: string;
  province_code: number;
  province_name: string;
  district_code: number;
  district_name: string;
  sector_code: string;
  sector_name: string;
  cell_code: number;
  cell_name: string;
  village_code: number;
  village_name: string;
}

let cachedData: LocationRecord[] | null = null;

export function getLocationsData(): LocationRecord[] {
  if (!cachedData) {
    const filePath = path.join(process.cwd(), 'data', 'locations.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    cachedData = JSON.parse(fileContents);
  }
  return cachedData!;
}

// Helper to get unique items
export function getUnique<T>(array: T[], key: keyof T): T[] {
  const seen = new Set();
  return array.filter((item) => {
    const val = item[key];
    if (seen.has(val)) return false;
    seen.add(val);
    return true;
  });
}
