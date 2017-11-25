import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Widget from './src/Widget'

ReactDOM.render(<Widget />, document.getElementById('root'))
registerServiceWorker()
