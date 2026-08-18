// API configuration for backend communication

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'game_account' | 'subscription' | 'gift_card';
  image?: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/api/products/`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export async function fetchProduct(id: number): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/api/products/${id}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
}
