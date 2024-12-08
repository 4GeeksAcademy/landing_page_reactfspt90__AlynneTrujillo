import React from 'react';




const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: 'white' }}>Start Bootstrap</a>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ color: 'white' }}>
                    <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto" style={{ color: 'white' }}>
                        <a className="nav-link" aria-current="page" href="#" style={{ color: 'white' }}> Home</a>
                        <a className="nav-link" href="#" style={{ color: 'white' }}> About</a>
                        <a className="nav-link" href="#" style={{ color: 'white' }}> Services</a>
                        <a className="nav-link" href='#' style={{ color: 'white' }}> Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;