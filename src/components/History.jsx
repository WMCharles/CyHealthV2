import React, { useEffect, useState } from 'react'
import Graph from './Graph';
import '../styles/History.css'
import Loading from './Loading';

export default function History() {

  const [numbers, setNumbers] = useState([])
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9d8eb4a4c2mshea1727c847e873bp124a0fjsn0e91deaa1675',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://covid-193.p.rapidapi.com/history?country=all&day=2022-11-17', options)
      .then(response => response.json())
      .then(response => {
        setNumbers(response.response)
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, [])

  const label = numbers.map((data) => data.time)
  const cases = numbers.map((data) => data.cases.new)
  const deaths = numbers.map((data) => data.deaths.new)
  const tests = numbers.map((data) => data.tests.total)


  return (
    <div className='History'>
      <h1>Covid-19 Hourly History</h1>
      {loading ? <Loading /> : <Graph label={label} cases={cases} deaths={deaths} tests={tests} />}
    </div>
  )
}
