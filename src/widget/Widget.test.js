import React from 'react'
import Widget from './Widget'
import renderer from 'react-test-renderer'

describe('Widget', () => {
  describe('Application', () => {
    it('should render the application', () => {
      const App = renderer.create(<Widget />).toJSON()

      expect(App).toMatchSnapshot()
    })
  })
})
