import { BrowserRouter, Routes, Route } from 'react-router-dom'
import History from './components/History';
import NavBar from './components/NavBar';
import Stats from './components/Stats';
import React from 'react'
import './App.css'

export default function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Stats/>} />
                    <Route path='history' element={<History/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
