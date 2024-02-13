import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './index.css'

const Repository = ({username, setCurrentRoute}) => {
  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `https://apis2.ccbp.in/gpv/repos/${username}`,
        )
        setRepositories(response.data.repositories)
        setIsLoading(false)
      } catch (e) {
        setError(error.message)
        setIsLoading(false)
      }
    }

    fetchRepositories()
  }, [username])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Repository
