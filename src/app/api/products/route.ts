// Only for BFF (Back-end for front-end) purpose, do not use complexity APIs logic in Next.js APIs.
import data from './data.json'

export async function GET() {
  return Response.json(data.products)
}
