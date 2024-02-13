import React, {useState} from 'react'
import './index.css'
import Header from './Header'
import Home from './Home'
import Repository from './Repository'
import Analysis from './Analysis'
import NotFound from './NotFound'

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home')
  const [username, setUsername] = useState('')

  const handleRouteChange = route => {
    setCurrentRoute(route)
  }

  const handleUsernameChange = newUsername => {
    setUsername(newUsername)
  }

  return (
    <div className="app">
      <Header
        currentRoute={currentRoute}
        setCurrentRoute={handleRouteChange}
        username={username}
        setUsername={handleUsernameChange}
      />
      {currentRoute === 'home' && (
        <Home
          currentRoute={currentRoute}
          setCurrentRoute={handleRouteChange}
          username={username}
        />
      )}
      {currentRoute === 'repository' && (
        <Repository
          currentRoute={currentRoute}
          setCurrentRoute={handleRouteChange}
          username={username}
        />
      )}
      {currentRoute === 'analysis' && (
        <Analysis
          currentRoute={currentRoute}
          setCurrentRoute={handleRouteChange}
          username={username}
        />
      )}
      {currentRoute === 'notfound' && (
        <NotFound
          currentRoute={currentRoute}
          setCurrentRoute={handleRouteChange}
        />
      )}
    </div>
  )
}

export default App
