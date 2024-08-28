import { describe, expect, it } from 'vitest'
import { hello } from '../src/hello'

describe('test use for hello.ts', () => {
  it('base', () => {
    const res = hello('Kieran')
    expect(res).toBe('Hello, Kieran!')
  })
})
