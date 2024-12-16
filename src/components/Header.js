import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const handleActive = (e) => {
    document.querySelectorAll(".main-menu ul li").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.parentNode.classList += " active";
  };
  const subActive = (e) => {
    document.querySelectorAll(".main-menu ul li").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.parentNode.parentNode.parentNode.classList += " active";
  };
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }

    $(".navbar-toggle").on("click", function () {
      $(".navbar-nav").addClass("mobile_menu");
    });
    $(".navbar-nav li a").on("click", function () {
      $(".navbar-collapse").removeClass("show");
    });

    $(".header-search > a").on("click", function () {
      $(".search-popup-wrap").slideToggle();
      return false;
    });

    $(".search-close").on("click", function () {
      $(".search-popup-wrap").slideUp(500);
    });
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
      } else {
        $("#sticky-header").addClass("sticky-menu");
      }
    });
  }, []);

  return (
    <header>
      <div id="sticky-header" className="menu-area menu-area-padding">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12 header-top-display-item">
              <div className="mobile-nav-toggler mobile-toggler-top mobile-toggler-top-icon">
                <ul className="header-top-social margin-top-0">
                  <li className="fontsize-ion">
                    <a
                      href="https://www.instagram.com/sone_ki_khan_jaipur/profilecard/?igsh=MXRsZjB1NGZnbmxxOA=="
                      aria-label="instagram"
                    >
                      <FaInstagram className="fint-size-icon" />
                    </a>
                  </li>
                  <li className="fontsize-ion">
                    <a
                      href="https://wa.me/9920165523"
                      target="blanck"
                      aria-label="number"
                    >
                      <IoLogoWhatsapp className="fint-size-icon" />
                    </a>
                  </li>
                </ul>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <a href="/">
                      <img
                        className="header-logo-width"
                        src="image/logo-sone-ki-khans.webp"
                        alt="logo"
                        aria-label="logo"
                      />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/" aria-label="">
                          Home
                        </Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "categories" ||
                          splitLocation[1] === "sofas" ||
                          splitLocation[1] === "dining-sets"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/categories">Categories</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "man" ||
                          splitLocation[1] === "sofas" ||
                          splitLocation[1] === "dining-sets"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/man">Man</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "Woman" ||
                          splitLocation[1] === "sofas" ||
                          splitLocation[1] === "dining-sets"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/woman">Woman</Link>
                      </li>
                      <li>
                        <Link
                          to="/contacts"
                          aria-label=""
                          onClick={(e) => handleActive(e)}
                        >
                          contacts
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action header-action-page">
                    <ul>
                      <li className="header-btn">
                        <Link to="/contacts" className="btn">
                          Contact Us{" "}
                          <img
                            className="phone-icon-padding"
                            src="img/icon/phone.png"
                            srcSet="img/icon/phone.png 480w, img/icon/phone.png 1080w"
                            sizes="50vw"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </div>
                  <div className="nav-logo">
                    <Link to="/">
                      <img
                        src="image/logo-sone-ki-khans.webp"
                        alt=""
                        title="true"
                      />
                    </Link>
                  </div>
                  <div className="menu-outer"></div>
                </nav>
              </div>
              <div className="menu-backdrop" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
