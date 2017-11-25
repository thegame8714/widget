import renderer from 'react-test-renderer'
import React from 'react'
import AddWidget from './AddWidget'

describe('Add Widget page', () => {
  it('should render the page', () => {
    const addWidgetComponent = renderer.create(<AddWidget />).toJSON()

    expect(addWidgetComponent).toMatchSnapshot()
  })
})
