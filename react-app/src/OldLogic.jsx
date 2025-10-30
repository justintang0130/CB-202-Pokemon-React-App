import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function OldLogic() {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState([])
  const [imageURL, setImageURL] = useState("")
  const [type, setType] = useState("")

  useEffect(() => {
    // define function
    const fetchData = async () => {

      // prepare your request
      const URL = "https://pokemon-api3.p.rapidapi.com/pokemon?name=Zapdos"
      const OPTIONS = {
        method: 'GET',
	      headers: {
		      'x-rapidapi-key': 'c7c0e82941msh86bbb1ca0970d84p12fe66jsn0fb1ebc36412',
		      'x-rapidapi-host': 'pokemon-api3.p.rapidapi.com' 
        }
      }

      // make the request and get JSON
      const response = await fetch(URL, OPTIONS)
      const fetchedData = await response.json()
      console.log(fetchedData)

      // extract data
      setType(fetchedData.types[0].type.name)
      setStats(fetchedData.stats)
      setImageURL(fetchedData.sprites.front_default)
      setLoading(false)
    }

    // recurse our fetch_data function
    fetchData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div className = "app">
      <p>{type}</p>
      <img src = {imageURL}></img>
      {stats.map((stats) => {
        return (
          <p key = {stats.id}>{stats.stat.name}: {stats.base_stat}</p>
        )
      })}
    </div>
  )  
}

export default OldLogic
