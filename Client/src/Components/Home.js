import React from 'react'
import Sidebar from './Sidebar'

function Home() {
  return (
    <div className='sidebar-container'>
        Home of Big Greg
        <div className='sidebar-menu-container'>
            <Sidebar />
        </div>
    </div>
  )
}

export default Home