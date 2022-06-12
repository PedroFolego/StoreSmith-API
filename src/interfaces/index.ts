import { JwtPayload } from 'jsonwebtoken';

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

export interface UserId extends User {
  id: number
}

export interface Order {
  id: number,
  userId: number,
  productsIds: [],
}

export interface JwtPayloadHandler extends JwtPayload {
  data: string
}
