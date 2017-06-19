import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Game from './pages/game'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Game} />
      </div>
    </BrowserRouter>
  )
}

export default App
