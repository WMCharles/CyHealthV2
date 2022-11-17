import React from 'react'

export default function Pagination({ nPages, currentPage, setCurrentPage }) {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages){
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage !== 1){
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prevPage}>
                        Previous
                    </a>
                </li>
                {pageNumbers.map((pgNumber) => (
                    <li key={pgNumber} className={`page-item ${currentPage === pgNumber} ? 'active : ''`}>
                        <a
                            className='page-link'
                            onClick={() => setCurrentPage(pgNumber)}
                            href="#"
                        >
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}
