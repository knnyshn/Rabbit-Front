import React from 'react'
import Posts from './Posts'
import Footer from './Footer'
import Header from './Header'

// Every component will be piped through here to be the home page.
// Each component will be in its own respective container.
// There are extra containers if needed (if there are nested components).

function Home() {
    return (
      <div className='PARENT-DIV'>
          <div className='header-container'>
            <div className='header-x-component'>
              <Header />
            </div>
          </div>
          <div className='sidebar-container'>
            <div className='sidebar-menu-container'>
              <Posts />
            </div>
          </div>
          <div className='footer-container'>
            <div className='footer-x-component'>
              <Footer />
            </div>
          </div>
      </div>

  )
}

export default Home