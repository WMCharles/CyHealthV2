import React from 'react'
import '../styles/Search.css'

export default function Search({ input, setFilter, filterCountries, data }) {
    return (
        <div className='filter-container d-flex '>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Which country are you looking for?" onChange={(e) => input(e.target.value.toLocaleUpperCase())} />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="buttons d-flex justify-content-center mb-4">
                <button className="btn btn-outline-secondary me-2" onClick={() => setFilter(data)}>All</button>
                <button className="btn btn-outline-secondary me-2" onClick={() => filterCountries("Africa")}>Africa</button>
                <button className="btn btn-outline-secondary me-2" onClick={() => filterCountries("Asia")}>Asia</button>
                <button className="btn btn-outline-secondary me-2" onClick={() => filterCountries("Europe")}>Europe</button>
                <button className="btn btn-outline-secondary me-2" onClick={() => filterCountries("North-America")}>North-America</button>
                <button className="btn btn-outline-secondary me-2" onClick={() => filterCountries("South-America")}>South-America</button>
                <button className="btn btn-outline-secondary me-2" onClick={() => filterCountries("Oceania")}>Ocenia</button>
            </div>
        </div>
    )
}
