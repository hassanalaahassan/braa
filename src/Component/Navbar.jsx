import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
   
    return (
        <>

        {/* navbar */}
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark sticky-top'>
            <div className='container-fluid'>

                {/* nav logo */}
                <div className='navbar-brand' style={{color: "gold"}}>Nav Bar</div>

                {/* burger icon */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" style={{color: "gold"}}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* nav items */}
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'><Link className='nav-link' to='/Home' style={{color: "gold"}}>Home</Link></li>

                        {/* Drop down */}
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' to='/Products' id='navbarDropdown' role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "gold"}}>Products</Link>
                            <div className='dropdown-menu' style={{backgroundColor:"black"}}>
                                <Link className='dropdown-item' to='/Category1' style={{color: "gold"}}>category1</Link>
                                <Link className='dropdown-item' to='/Category2' style={{color: "gold"}}>category2</Link>
                                <Link className='dropdown-item' to='/Category3' style={{color: "gold"}}>category3</Link>
                            </div>
                            </li>
                        {/* drop down end */}

                        <li className='nav-item'><Link className='nav-link' to='/Product' style={{color: "gold"}}>Product</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/Footer' style={{color: "gold"}}>Contact US</Link></li>
                    </ul>
                {/* Search bar */}
                <form className='form-inline my-2 my-lg-0' action="">
                <input className='form-control mr-sm-2' type="text" placeholder='Search'/>
                </form>
                </div>
            </div>
        </nav>  
        </>
    );
}
