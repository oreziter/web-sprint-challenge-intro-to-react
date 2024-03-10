import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character';
 
   function App() {
    const [ characters, setCharacters ] = useState ([]);
    const [planets, setPlanets] = useState({});
   
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    const fetchData = async () => {
     try {
      const [peopleResponse, planetsResponse] = await Promise.all([
        axios.get('http://localhost:9009/api/people'),

        axios.get('http://localhost:9009/api/planets'),
      ]);
   
      setCharacters(peopleResponse.data);
      setPlanets(planetsResponse.data);
 
     } catch (error) {
      console.error('Error fetching data:', error);
      
     }
    };

    fetchData();
  }, [])
const getPlanet = (homeworld) => {
  const planet = planets.find(pt => pt.id === homeworld).name;
  return planet;
}
  return (
    <div className='App'>
   
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
  characters.map((item) => <Character key={item.id} character={item} planet={getPlanet(item.homeworld)}/>)
      }
    </div>
  );
 
  }

  export default App;
// ❗ DO NOT CHANGE THE CODE  BELOW

if (typeof module !== 'undefined' && module.exports) module.exports = App



// const PeopleResponse = await axios.get ('http://localhost:9009/api/people');
//   console.log(PeopleResponse.data);

// const PlanetsResponse = await axios.get ('http://localhost:9009/api/planets');
//    console.log(PlanetsResponse.data);