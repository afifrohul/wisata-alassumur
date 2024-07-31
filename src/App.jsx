import React from 'react';
import { AosInit } from './lib/aos'
import Router from './components/Router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar/> 
      <main className='flex flex-grow justify-center items-center'>
        <AosInit>
          <Router />
        </AosInit>
      </main>
      <Footer/>
    </div>
  )
}

export default App