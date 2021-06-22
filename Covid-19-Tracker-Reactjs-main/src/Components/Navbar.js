import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="/"><h3>🦠Covid-19 Tracker</h3></a>
  <ul className="navbar-nav flex-start">
    <li className="nav-item">

      <a className="nav-link active" href="/countries"><h5>Countries</h5></a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" href="/about"><h5>About</h5></a>
    </li>
    
  </ul>
</nav>
        </div>
    )
}

export default Navbar
