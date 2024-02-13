import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Repository from './components/Repository'
import Analysis from './components/Analysis'
import NotFound from './components/NotFound'

function App() {
  const [username, setUsername] = useState('')
  const [currentRoute, setCurrentRoute] = useState('')

  useEffect(() => {
    // Fetch initial data or do any initial setup if required
  }, [])

  const handleUsernameChange = newUsername => {
    setUsername(newUsername)
  }

  const handleRouteChange = route => {
    setCurrentRoute(route)
  }

  return (
    <Router>
      <div className="App">
        <Header
          username={username}
          currentRoute={currentRoute}
          onUsernameChange={handleUsernameChange}
          onRouteChange={handleRouteChange}
        />
        <Route exact path="/">
          <Home username={username} onRouteChange={handleRouteChange} />
        </Route>
        <Route path="/repositories">
          <Repository username={username} onRouteChange={handleRouteChange} />
        </Route>
        <Route path="/analysis">
          <Analysis username={username} onRouteChange={handleRouteChange} />
        </Route>
        <Route component={NotFound} />
      </div>
    </Router>
  )
}

export default App
