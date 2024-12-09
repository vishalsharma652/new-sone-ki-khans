import React from "react";

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="index.html">
              <img src="image/logo-sone-ki-khans.webp" alt="Logo" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link " href="/categories">
                  <span className="">Categories</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/man">
                  Man
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/woman">
                  Woman
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacts">
                  Contacts
                </a>
              </li>
              <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
