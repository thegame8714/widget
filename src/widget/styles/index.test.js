import React from 'react'
import { Title } from './'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Style components', () => {
  describe('Title', () => {
    it('should render the Title component', () => {
      const titleStyledComponent = renderer.create(<Title />).toJSON()
      expect(titleStyledComponent).toMatchSnapshot()
    })
  })
})
