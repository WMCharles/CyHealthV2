/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Statistics from './Statistics'
import Loading from './Loading'
import Search from './Search'

export default function Stats() {

    // set page title
    useEffect(() => {
        document.title = "Statistics";
    }, []);

    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
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
                setFilter(response.response)
                setLoading(false)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const filterCountries = (continent) => {
        const updatedList = data.filter((country) => country.continent === continent)
        setFilter(updatedList)
    }

    // search state 
    const [query, setQuery] = useState("")

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage, setRecordsPerPage] = useState(19)
    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = filter.filter((data) => data.country.toUpperCase().includes(query)).slice(indexOfFirstRecord, indexOfLastRecord)
    const nPages = Math.ceil(filter.length / recordsPerPage)

    return (
        <div>
            <Search input={setQuery} setFilter={setFilter} filterCountries={filterCountries} data={data} />
            {loading ? <Loading /> : <Statistics data={currentRecords} setQuery={setQuery} />}
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}
