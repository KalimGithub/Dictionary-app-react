import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h1>Dictionary App</h1>
      </div>
      <div className='header-btn'>
        <button><a href='/'>Home</a></button>
        <button><a href='/history'>History</a></button>
      </div>

    </div>
  )
}

export default Header