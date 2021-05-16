import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Nav from './pages/Nav'
import HomeContent from './pages/HomeContent'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Switch>
            <Route exact={true} path='/' component={HomeContent} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/aboutme' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App