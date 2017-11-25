import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListWidgets from './list/LIstWidgets'
import AddWidget from './add/AddWidget'

const Widget = () => (
  <Router>
    <div>
      <Route exact path="/" component={ListWidgets} />
      <Route path="/add-widget" component={AddWidget} />
    </div>
  </Router>
)

export default Widget
