import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Statistics({ data }) {

    const navigate = useNavigate()

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>New Cases</th>
                        <th>Total Deaths</th>
                        <th>New Deaths</th>
                        <th>Total Recovered</th>
                        <th>Active Cases</th>
                        <th>Total Tests</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>
                        <tr key={index}>
                            <td onClick={() => navigate(`/statistics/${item.country}`)}><Link>{item.country}</Link></td>
                            <td>{item.cases.total}</td>
                            <td>{item.cases.new}</td>
                            <td>{item.deaths.total}</td>
                            <td>{item.deaths.new}</td>
                            <td>{item.cases.recovered}</td>
                            <td>{item.cases.active}</td>
                            <td>{item.tests.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
