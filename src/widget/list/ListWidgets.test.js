import renderer from 'react-test-renderer'
import React from 'react'
import ListWidget from './ListWidgets'

describe('List of widgets page', () => {
  describe('ListWidget component', () => {
    it('should render the component', () => {
      const listWidgetsComponent = renderer.create(<ListWidget />).toJSON()

      expect(listWidgetsComponent).toMatchSnapshot()
    })
  })
})
