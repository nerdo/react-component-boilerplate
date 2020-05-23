import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Boilerplate } from './Boilerplate'

describe('Boilerplate', () => {
  it('should render', () => {
    expect(() => render(<Boilerplate />)).not.toThrow()
  })
})
