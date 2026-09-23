import { describe, expect, it } from 'vitest'
import { validateBuyerInfo } from '../components/Checkout/BuyerInfoForm'
import type { BuyerInfo } from '../types'

const valid: BuyerInfo = { fullName: 'علی رضایی', phone: '09120000000', email: 'ali@example.com', deliveryMethod: 'telegram', deliveryContact: '@ali' }

describe('buyer form validation', () => {
  it('accepts valid buyer information', () => { expect(validateBuyerInfo(valid)).toEqual({}) })
  it('rejects invalid phone and delivery email', () => {
    const errors = validateBuyerInfo({ ...valid, phone: '123', deliveryMethod: 'email', deliveryContact: 'bad-email' })
    expect(errors.phone).toBeTruthy()
    expect(errors.deliveryContact).toBeTruthy()
  })
})
