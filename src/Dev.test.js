import React from 'react'
import { shallow } from 'enzyme'
import { setupEnzyme } from './setupEnzyme'
import { Dev } from './Dev'

beforeAll(setupEnzyme)

describe('Dev', () => {
  it('should exist', () => {
    expect(Dev).toBeDefined()
  })
  it('should render a <Boilerplate />', () => {
    const wrapper = shallow(<Dev />)
    expect(wrapper.find('Boilerplate').length).toEqual(1)
  })
})
