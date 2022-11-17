import React from 'react'

export default function Numbers({ country }) {

    // let casesInMillionPop = (country.cases.recovered) / (country.population)
    return (
        <div>
            <h3>More Information</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Numbers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='fw-bold'>New Cases: </td>
                        <td>{country.cases.new}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Active Cases: </td>
                        <td>{country.cases.active}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Critical Cases: </td>
                        <td>{country.cases.critical}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>New Deaths: </td>
                        <td>{country.deaths.new}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Tests 1M_pop: </td>
                        <td>{country.tests["1M_pop"]}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Cases 1M_pop: </td>
                        <td>{country.cases["1M_pop"]}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Deaths 1M_pop: </td>
                        <td>{country.deaths["1M_pop"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
