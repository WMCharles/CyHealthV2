import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function Graph({ label, cases, tests, deaths }) {
    
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'COVID 19 HISTORY',
            },
        },
    };


    const [data, setData] = useState({
        labels: label,
        datasets: [
            {
                label: "Cases",
                data: cases,
            },
            {
                label: "Deaths",
                data: deaths,
            },
            {
                label: "Tests",
                data: tests,
            }
        ]
    })

    return (
        <div className='graph'>
            <Line data={data} options={options} />
        </div>
    )
}
