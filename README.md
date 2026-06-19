# Rwanda Administrative Locations API

A comprehensive, public REST API providing the complete administrative geography of Rwanda. Built with Next.js and powered by interactive Swagger documentation.

## Features

- **Full Coverage**: Query Provinces, Districts, Sectors, Cells, and Villages across Rwanda.
- **Fast & Lightweight**: Built with the Next.js App Router for optimal, serverless performance.
- **Interactive Documentation**: Beautiful built-in Swagger UI to explore and test endpoints directly from your browser.
- **Search & Pagination**: Find locations easily with text-based search and paginated responses.
- **CORS Enabled**: Ready to be consumed publicly from any frontend application.

## Endpoints Overview

All endpoints are completely public.

- `GET /api/provinces` - Get all provinces.
- `GET /api/districts?province={name|code}` - Get all districts or filter by province.
- `GET /api/sectors?district={name|code}` - Get all sectors or filter by district.
- `GET /api/cells?sector={name|code}` - Get all cells or filter by sector.
- `GET /api/villages?cell={name|code}` - Get all villages or filter by cell.
- `GET /api/locations?q={query}&page={page}&limit={limit}` - Comprehensive text search across all administrative levels.

## Getting Started Locally

First, clone the repository, install dependencies, and run the development server:

```bash
npm install
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the interactive Swagger UI.

## Deployment

This application is fully optimized to be deployed on Vercel. 
You can import your repository directly into [Vercel](https://vercel.com/) for zero-config deployment.

## Credits

Built by **Oreste Abizera**. Visit [oreste.dev](https://oreste.dev) for more.
