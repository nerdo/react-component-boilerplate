import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { Dev } from './Dev'

describe('Dev', () => {
  it('should render', () => {
    expect(() => render(<Dev />)).not.toThrow()
  })
})
