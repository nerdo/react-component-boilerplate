import React from 'react'
import { render } from '@testing-library/react'
import { Dev } from './Dev'
import { Boilerplate } from '../src/Boilerplate'

describe('Dev', () => {
  it('should render a Boilerplate component', () => {
    const { container } = render(<Dev />)
    expect(container).toBeDefined()
  })
})
