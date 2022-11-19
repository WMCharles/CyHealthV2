import React, { useEffect, useState } from 'react'
import Graph from './Graph';
import '../styles/History.css'
import Loading from './Loading';

export default function History() {

  const [numbers, setNumbers] = useState([])
  const [countries, setCountries] = useState([])
  const [continent, setContinent] = useState(["All", "Africa", "North-America", "South-America", "Asia", "Europe"])
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9d8eb4a4c2mshea1727c847e873bp124a0fjsn0e91deaa1675',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    fetch(`https://covid-193.p.rapidapi.com/history?country=${selectedCountry}&day=2022-11-18`, options)
      .then(response => response.json())
      .then(response => {
        setNumbers(response.response)
        setLoading(false)
      })
      .catch(err => console.error(err));
  }

  const fetchCountries = async () => {
    fetch('https://covid-193.p.rapidapi.com/countries', options)
      .then(response => response.json())
      .then(response => {
        setCountries(response.response)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCountries()
    if (selectedCountry) {
      setLoading(true)
      fetchData()
    }
  }, [selectedCountry])

  const label = numbers.map((data) => data.time)
  const cases = numbers.map((data) => data.cases.new)
  const deaths = numbers.map((data) => data.deaths.new)
  const tests = numbers.map((data) => data.tests.total)


  return (
    <div className='History'>
      <h1>Covid-19 Hourly History</h1>
      <form>
        <input type="date" className="text" placeholder='enter country you want to search' onChange={(e) => setSelectedCountry(e.target.value)} />
        <label htmlFor="countries">Select Country</label>
        <select name="" id="" onChange={(e) => setSelectedCountry(e.target.value)}>
          {countries.map((country, index) =>
            <option key={index} value={country}>{country}</option>
          )}
        </select>
        <label htmlFor="countries">Select Continent</label>
        <select name="" id="" onChange={(e) => setSelectedCountry(e.target.value)}>
          {continent.map((country, index) =>
            <option key={index} value={country}>{country}</option>
          )}
        </select>
      </form>
      {loading ? <Loading /> : <Graph label={label} cases={cases} deaths={deaths} tests={tests} />}
    </div>
  )
}
