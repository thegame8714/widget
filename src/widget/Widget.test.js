import React from 'react'
import Widget from './Widget'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

describe('Widget', () => {
  describe('Application', () => {
    it('should render the application', () => {
      const App = renderer
        .create(
          <MemoryRouter>
            <Widget />
          </MemoryRouter>
        )
        .toJSON()

      expect(App).toMatchSnapshot()
    })
  })
})
