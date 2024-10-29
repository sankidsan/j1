

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../component/App.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Company logo followed by name */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img 
                        src={`${process.env.PUBLIC_URL}/logo.jpeg`} 
                        alt="Logo" 
                        className="navbar-logo"
                        width="50"
                        height="auto"
                    />
                    <span className="ms-2" style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37' }}>
                        YMJ
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/MySection">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ProductCard">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
