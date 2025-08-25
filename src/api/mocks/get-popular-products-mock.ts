import { http, HttpResponse } from "msw";
import type { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<never, never ,GetPopularProductsResponse>('/metrics/popular-products', () => {
  return HttpResponse.json([
    {product: 'Pepperonni', amount: 5},
    {product: 'Frango', amount: 8},
    {product: 'Calabresa', amount: 2},
    {product: 'Mussarella', amount: 4},
    {product: '4 Queijos', amount: 6},
  ])
})