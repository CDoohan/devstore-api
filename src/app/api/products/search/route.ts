import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))
  console.log(query)

  const products = data.products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase())
  })

  return Response.json(products)
}
