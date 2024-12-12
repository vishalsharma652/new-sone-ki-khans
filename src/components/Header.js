import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`header ${isSticky ? "sticky-header bg-white shadow-sm" : ""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <div className="d-flex align-items-center">
              <a href="/">
                <img
                  src="image/logo-sone-ki-khans.webp"
                  alt="Logo"
                  className="header-logo-width"
                />
              </a>
            </div>

           
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon ${isOpen ? 'open' : ''}`}></span>
            </button>

            
            <div
              className={`mobile-menu-overlay ${isOpen ? "show" : ""}`}
              onClick={toggleMenu}
            >
              <div
                className={`mobile-menu ${isOpen ? "show" : ""}`}
                onClick={(e) => e.stopPropagation()} 
              >
                {/* Close Button */}
                <button className="close-menu" onClick={toggleMenu}>×</button>
                <div className="mobile-menu-header">
                  <img
                    src="image/logo-sone-ki-khans.webp"
                    alt="Logo"
                    className="header-logo-width"
                  />
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/categories" onClick={toggleMenu}>
                      Categories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/man" onClick={toggleMenu}>
                      Man
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/woman" onClick={toggleMenu}>
                      Woman
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacts" onClick={toggleMenu}>
                      Contacts
                    </Link>
                  </li>
                  <form className="form-inline">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </ul>
              </div>
            </div>

            {/* Regular Navbar for Desktop */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/man">
                    Man
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/woman">
                    Woman
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    Contacts
                  </Link>
                </li>
                <form className="form-inline">
                  <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
