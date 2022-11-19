import React from 'react'

export default function Form({setSelectedOption, setDate, countries, continents}) {
    return (
        <form className="row g-3">
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Select Continent</label>
                <select id="inputState" className="form-select" onChange={(e) => setSelectedOption(e.target.value)}>
                    {continents.map((cont, index) =>
                        <option key={index} value={cont}>{cont}</option>
                    )}
                </select>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Select Country</label>
                <select id="inputState" className="form-select" onChange={(e) => setSelectedOption(e.target.value)}>
                    {countries.map((count, index) =>
                        <option key={index} value={count}>{count}</option>
                    )}
                </select>
            </div>
            <div className="col-md-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Select Date</label>
                <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)}></input>
            </div>
        </form>
    )
}
