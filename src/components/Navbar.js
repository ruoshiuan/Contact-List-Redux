import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <Link to='/Contact-List-Redux' className="navbar-brand ml-5">Contact List</Link>
    </nav>
  )
}

export default Navbar
