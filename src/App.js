import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Pokedex from './Components/Pokedex'
const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  const fetchPokemon = async () => {
    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)

    // console.log(data.data)
    const createPokemon = (result) => {
      result.forEach(async (el) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${el.name}`)
        
        setPokemon(current => [...current, res.data])
      })
    }
    createPokemon(data.data.results)

  }
  useEffect(() => {
    fetchPokemon()
  }, [])


  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div id='main'>
      <div className='header'>
        <h1>Pokedex</h1>
        <input type="text" placeholder='Search Pokemon...' value={search} onChange={handleChange} />
      </div>
      <div className="pokemon">
        {pokemon.filter(el => {
          if (el.name.toLowerCase().includes(search.toLowerCase()))
            return el
            return null
        }).map((el) => {
          return (
            <Pokedex
              index={el.id}
              name={el.name}
              image={el.sprites.other.dream_world.front_default}
              key={el.name}
              type={el.types}
              weight={el.weight}
              height={el.height}
              ability={el.abilities}
            // stype={el.types[1].type.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
