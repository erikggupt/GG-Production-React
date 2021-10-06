import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Cinema from './views/cinema'
import Home from './views/home'
import Prices from './views/prices'
import Wedding from './views/wedding'
import ReserveNow from './views/reserve-now'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Cinema} path="/cinema" />
        <Route exact component={Home} path="/" />
        <Route exact component={Prices} path="/prices" />
        <Route exact component={Wedding} path="/wedding" />
        <Route exact component={ReserveNow} path="/reserve-now" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
