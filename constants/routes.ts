import type { Route } from 'next'

export const ROUTES = {
  HOME: '/', PRODUCTS: '/products', ARTICLES: '/articles', ABOUT: '/about', CHECKOUT: '/checkout', CHECKOUT_SUCCESS: '/checkout/success', ACCOUNT: '/account', ACCOUNT_LOGIN: '/account/login', ACCOUNT_SIGNUP: '/account/signup', TERMS: '/terms', PRIVACY: '/privacy',
  SEARCH: (query?: string) => query ? `/search?q=${encodeURIComponent(query)}` as Route : '/search',
  PRODUCTS_CATEGORY: (category: string) => `/products?category=${encodeURIComponent(category)}` as Route,
  PRODUCT: (id: string) => `/products/${id}` as Route,
  ARTICLE: (slug: string) => `/articles/${slug}` as Route,
} as const
