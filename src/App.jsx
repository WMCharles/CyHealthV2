import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
                </Routes>
            </BrowserRouter>
        </div>
    )
}
