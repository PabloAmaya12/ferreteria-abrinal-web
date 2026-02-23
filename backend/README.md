# Ferreteria Abrinal Backend

Backend API built with Node.js, Express, and MongoDB.

## Requirements
- Node.js 18+
- MongoDB running locally or in a managed service

## Setup
1. Copy environment file:
   - Create `.env` using `.env.example`
2. Install dependencies:
   - `npm install`
3. Run in development:
   - `npm run dev`

## API
- `GET /api/health` - Health check
- `GET /api/brands` - List brands (filters: `category`, `q`, `page`, `limit`)
- `GET /api/brands/:id` - Get brand by id
- `POST /api/brands` - Create brand
- `PATCH /api/brands/:id` - Update brand
- `DELETE /api/brands/:id` - Delete brand
