import React from 'react'
import { render } from '@testing-library/react'
import { Dev } from './Dev'

describe('Dev', () => {
  it('should render a Boilerplate component', () => {
    const { container } = render(<Dev />)
    expect(container).toBeDefined()
  })
})
