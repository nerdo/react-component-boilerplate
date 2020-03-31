import React from 'react'
import { shallow } from 'enzyme'
import { Boilerplate } from './Boilerplate'

describe('Boilerplate', () => {
  it('should render a wrapping <div />', () => {
    const wrapper = shallow(<Boilerplate />)
    expect(wrapper.at(0).name()).toEqual('div')
  })
})
