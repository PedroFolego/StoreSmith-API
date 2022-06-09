export interface Product {
  id: number,
  name: string,
  amount: number,
  orderId?: number
}

export interface ErrorHandler extends Error {
  status: number,
}