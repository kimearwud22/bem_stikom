/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar({ activePath }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyle = {
    width: "60px",
    height: "60px",
    marginRight: "10px",
  };

  const brandLogoTextStyle = {
    fontSize: "24px",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white fixed-top${collapsed ? '' : ' show'}`}
        style={{ padding: "10px 0", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",  }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <div style={logoContainerStyle}>
              <img
                src="../../../home/images/logo-ukm/bem.png"
                alt="Brand Logo"
                style={logoStyle}
                className="brand-logo-light"
              />
              <h3 className="brand-logo-text" style={brandLogoTextStyle}>
                | BEM STIKOM BWX
              </h3>
            </div>
          </a>
          <button
            className={`navbar-toggler${collapsed ? ' collapsed' : ''}`}
            type="button"
            onClick={toggleNavbar}
            aria-controls="rd-navbar-nav-wrap"
            aria-expanded={!collapsed ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse rd-navbar-nav-wrap${collapsed ? '' : ' show'}`} id="rd-navbar-nav-wrap">
            <ul className="navbar-nav ml-auto">
              <li >
                <Link className="nav-link " href="/" style={{ color: "black" }}>
                  Home
                </Link>
              </li>
              <li >
                <Link className="nav-link" href="/home/about" style={{ color: "black" }}>
                  Tentang Kami
                </Link>
              </li>
              <li >
                <Link className="nav-link" href="/home/ukm" style={{ color: "black" }}>
                  UKM
                </Link>
              </li>
              <li >
                <Link className="nav-link" href="/contacts.html" style={{ color: "black" }}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Additional CSS */}
      <style>
        {`
          .navbar-nav {
            align-items: center;
          }
          
          .navbar-nav .nav-item {
            margin-left: 15px;
          }
          
          .navbar-nav .nav-link {
            padding: 8px 15px;
          }

          .navbar-nav .nav-item.active .nav-link {
            color: white;
            background-color: #007bff;
          }
        `}
      </style>
    </>
  );
}
