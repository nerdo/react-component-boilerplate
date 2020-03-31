import React from 'react'
import { render } from '@testing-library/react'
import { Boilerplate } from './Boilerplate'

describe('Boilerplate', () => {
  it('should render a wrapping <div />', () => {
    const { container } = render(<Boilerplate />)
    expect(container.firstChild.nodeName).toEqual('DIV')
  })
})
