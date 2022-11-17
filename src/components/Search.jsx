import React from 'react'
import '../styles/Search.css'
export default function Search({input}) {
    return (
        <div>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Which country are you looking for?" onChange={(e) => input(e.target.value.toLocaleUpperCase())}/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                </div>
            </div>
        </div>
    )
}
