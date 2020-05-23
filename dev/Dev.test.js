import React from 'react'
import { render } from '@testing-library/react'
import { Dev } from './Dev'

describe('Dev', () => {
  it('should render', () => {
    const { container } = render(<Dev />)
    expect(container).toBeDefined()
  })
})
