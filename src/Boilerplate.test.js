import React from 'react'
import { shallow } from 'enzyme'
import { setupEnzyme } from './setupEnzyme'
import { Boilerplate } from './Boilerplate'

beforeAll(setupEnzyme)

describe('Boilerplate', () => {
  it('should exist', () => {
    expect(Boilerplate).toBeDefined()
  })
  it('should render a <div />', () => {
    const wrapper = shallow(<Boilerplate />)
    expect(wrapper.find('div').length).toEqual(1)
  })
})
