import React from 'react'
import { useState } from 'react'
import './navbar.css'

export const Navbar = () => {
  
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);
  
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className="container">
                <a className="navbar_logo" href="#">
                    <img src="https://pbs.twimg.com/media/FLZanrEVUAIqJ3P?format=jpg&name=large" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Links</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">World Finals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleOpen}>
                                More
                            </a>
                            <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Learn About Skis</a></li>
                                <li><a className="dropdown-item" href="#">Race Schedule</a></li>
                                <li><a className="dropdown-item" href="#">Contact</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Shop Now</a></li>
                            </ul>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <di className="button">
                        <a href="" className='btn btn-outline-dark ms-2'>
                            <i className='fa fa-shopping-cart me-1'></i>Cart (0)
                        </a>
                    </di>
                </div>
            </div>
        </nav>
    </div>
  )
};
