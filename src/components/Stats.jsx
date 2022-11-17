import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Statistics from './Statistics'
import Loading from './Loading'
import Search from './Search'

export default function Stats() {

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

    // search state 
    const [query, setQuery] = useState("")

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage, setRecordsPerPage] = useState(19)
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = data.filter((data) => data.country.toUpperCase().includes(query)).slice(indexOfFirstRecord, indexOfLastRecord)
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div>
            <Search input={setQuery}/>
            {loading ? <Loading /> : <Statistics data={currentRecords} setQuery={setQuery} />}
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}
