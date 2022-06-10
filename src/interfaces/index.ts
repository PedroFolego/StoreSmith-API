export interface Product {
  id: number,
  name: string,
  amount: number,
  orderId?: number
}

export interface ErrorHandler extends Error {
  status: number,
}

export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Order {
  id: number,
  userId: number,
  productsIds: [],
}
