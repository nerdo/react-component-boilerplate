import React from 'react'
import { shallow } from 'enzyme'
import { Dev } from './Dev'
import { Boilerplate } from '../src/Boilerplate'

describe('Dev', () => {
  it('should render a Boilerplate component', () => {
    const wrapper = shallow(<Dev />)
    expect(wrapper.containsMatchingElement(<Boilerplate />)).toEqual(true)
  })
})
