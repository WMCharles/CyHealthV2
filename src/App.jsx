import React, { useEffect, useState } from 'react'
import Statistics from './components/Statistics';
import Loading from './components/Loading';

export default function App() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9d8eb4a4c2mshea1727c847e873bp124a0fjsn0e91deaa1675',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/statistics', options)
            .then(response => response.json())
            .then((response) => {
                setData(response.response)
                setLoading(false)
            })
    }, [])

    return (
        <div className='container'>
            <h1>CyHealth</h1>
            {loading ? <Loading /> : <Statistics data={data} />}
        </div>
    )
}
