import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../component/App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleDisabledLink = (event) => {
        event.preventDefault(); // Prevent navigation
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
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
                            <Link className="nav-link active" aria-current="page" to="/" onClick={handleDisabledLink}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ProductCard" onClick={handleDisabledLink}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About" onClick={handleDisabledLink}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact" onClick={handleDisabledLink}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
