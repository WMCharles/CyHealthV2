/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Numbers from './CountryNumbers';
import '../styles/country.css'
import { useParams } from 'react-router-dom';

export default function Country() {

  const { country } = useParams()

  const [data, setCountry] = useState([])
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9d8eb4a4c2mshea1727c847e873bp124a0fjsn0e91deaa1675',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
      .then(response => response.json())
      .then(response => {
        setCountry(response.response[0])
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, [])

  const CountrDetails = () => {
    return (
      <div>
        <h2>{data.country.toUpperCase()}</h2>
        <div className='intro'>
          <h3>TESTS: <span>{data.tests.total}</span></h3>
          <h3>COVID-19 CASES: <span>{data.cases.total}</span></h3>
          <h3>RECOVERED: <span>{data.cases.recovered}</span></h3>
          <h3>DEATHS: <span>{data.deaths.total}</span></h3>
        </div>
        <Numbers country={data} />
      </div>
    )
  }

  return (
    <div className='country'>
      {loading ? <Loading /> : <CountrDetails />}
    </div>
  )
}
