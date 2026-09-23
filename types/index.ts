import type { ARTICLE_CATEGORIES, PRODUCT_CATEGORIES } from '@/constants/categories'

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]
export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number]
export type ProductStatus = 'in_stock' | 'out_of_stock' | 'coming_soon'
export interface ArtColors { art1: string; art2: string }
export interface KeyProduct extends ArtColors { id: string; tag: string; art: string; title: string; description: string; price: string }
export interface PresaleProduct extends ArtColors { id: string; art: string; title: string; description: string; countdown: { value: string; label: string }[]; price: string }
export interface OfferProduct extends ArtColors { id: string; art: string; title: string; category: string; discount: string; oldPrice: string; newPrice: string }
export interface Product extends ArtColors { id: string; art: string; title: string; category: ProductCategory; displayCategory: string; price: string; description: string; status: ProductStatus; isNew?: boolean }
export interface ProductDetail extends ArtColors { id: string; art: string; title: string; category: ProductCategory; displayCategory: string; price: string; description: string; status: ProductStatus }
export type ArticleBlock = { type: 'paragraph'; text: string } | { type: 'heading'; text: string } | { type: 'list'; items: string[] } | { type: 'note'; label: string; text: string }
export interface Article extends ArtColors { id: string; slug: string; number: string; category: ArticleCategory; readTime: string; date: string; publishedAt: string; updatedAt: string; title: string; excerpt: string; content: ArticleBlock[] }
export interface Subscription { id: string; variant: 'xbox' | 'ps'; icon: string; title: string; description: string; plans: { name: string; price: string }[] }
export interface AboutValue { icon: string; title: string; description: string }
export interface AboutStat { value: string; label: string }
export interface CartItem { productId: string; quantity: number }
export interface CartLine extends CartItem { product: ProductDetail }
export interface BuyerInfo { fullName: string; phone: string; email: string; deliveryMethod: 'telegram' | 'email'; deliveryContact: string }
export interface MockUser { id: string; name: string; phone: string; email?: string }
export interface MockOrder { id: string; title: string; status: string; price: string }
export interface OrderSnapshot { buyer: BuyerInfo; items: Array<{ title: string; art: string; price: string; quantity: number }>; subtotal: number; createdAt: string }
