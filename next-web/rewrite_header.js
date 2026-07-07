const fs = require('fs');
const path = require('path');

const headerPath = path.join(process.cwd(), 'app/../components/Header.jsx');
let content = fs.readFileSync(headerPath, 'utf8');

// The new header component with state for dropdowns
const newHeader = `"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = {
    join: [
      { label: "Join FIND", href: "/join" },
    ],
    paperwork: [
      { label: "Forms", href: "#" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Partnership", href: "/partnership" },
      { label: "Commercial", href: "/commercial" },
    ],
    about: [
      { label: "About Us", href: "/about-us" },
    ]
  };

  return (
    <>
      <header className="header_wrapper__MJ5bn header_transparent__rCyyn">
        <div className="container_container__v5gtR">
          <div className="header_content__cVJDb">
            <div className="header_logo__LO_Jk">
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 975 280">
                  <path fill="currentColor" d="M836.06 1.01c77.3 0 139.94 62.69 139.94 140C976 218.33 913.35 281 836.06 281H702.61V1.01zm-52.82 80.17v119.44h44.58a59.5 59.5 0 0 0 42.21-17.5 59.7 59.7 0 0 0-42.2-101.94z" data-letter="f"></path>
                  <path fill="currentColor" d="M595.45 183.2V1h80.14v279.99H556.68l-73.33-152.93V281H403.2V1h110.33z" data-letter="i"></path>
                  <path fill="currentColor" d="M376.19 280.99h-141l61.26-140.29L235.2 1h141v279.99Z" data-letter="n"></path>
                  <path fill="currentColor" d="M244.55 81.28H81.14v59.42h101.02v80.17H81.14v60.12H1V1h207.91z" data-letter="d"></path>
                </svg>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="header_nav__if_jI">
              <div className="header_nav-item__Wn05d">
                <Link href="/search"><span data-text="Search">Search</span></Link>
              </div>
              <div className="header_nav-item__Wn05d">
                <Link href="/agents"><span data-text="Agents">Agents</span></Link>
              </div>
              
              {["join", "paperwork", "resources", "about"].map((key) => (
                <div 
                  key={key} 
                  style={{position: 'relative'}}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div
                    className="header_nav-item__Wn05d"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === key ? "true" : "false"}
                    data-state={activeDropdown === key ? "open" : "closed"}
                  >
                    <span data-text={key.charAt(0).toUpperCase() + key.slice(1)}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <div className="header_nav-arrow__c0sU_" style={{ transform: activeDropdown === key ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M17.566 9.431a.8.8 0 0 1 .005 1.131l-1.78 1.797c-.669.674-1.218 1.229-1.708 1.622-.51.41-1.034.712-1.665.792a3.3 3.3 0 0 1-.83 0c-.63-.08-1.154-.382-1.665-.792-.49-.393-1.04-.948-1.707-1.622l-1.781-1.797A.8.8 0 0 1 7.57 9.436L9.32 11.2c.71.716 1.195 1.205 1.606 1.535.398.32.648.424.866.452q.211.027.424 0c.219-.028.468-.133.866-.452.41-.33.897-.819 1.607-1.535l1.747-1.763a.8.8 0 0 1 1.131-.005" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === key && (
                    <div style={{
                      position: 'absolute', top: '100%', left: 0, 
                      backgroundColor: '#fff', color: '#000', 
                      minWidth: '200px', padding: '10px 0', 
                      borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      zIndex: 100
                    }}>
                      {navItems[key].map(item => (
                        <Link href={item.href} key={item.label} style={{display: 'block', padding: '10px 20px', textDecoration: 'none', color: '#000'}}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="header_actions__Sv09J">
              <Link className="button_button-round__TFjlU button_color-primary__JJ7Hh" href="https://app.findrealestate.com/authentication/sign-in">
                <div className="button_content__6Zh3n">
                  <div className="button_button-round-text__IEwW5">
                    <span data-text="Sign In">Sign In</span>
                  </div>
                </div>
              </Link>
            </div>
            
            <button
              onClick={toggleMenu}
              className="burger-btn_btn__IvzqD header_burger-control__YR_x_"
              aria-label="Menu control"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="burger-menu_wrapper__gKR7D" style={{ paddingTop: "0", pointerEvents: menuOpen ? "auto" : "none", opacity: menuOpen ? 1 : 0, transition: "opacity 0.3s" }}>
          <div className="burger-menu_backdrop__wfXK5" onClick={toggleMenu}></div>
          <div className="burger-menu_content__rv4kf" style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)", transition: "transform 0.3s" }}>
            <nav className="burger-menu_nav__dAhwA">
              <div className="burger-menu_nav-item__mCA9u"><Link href="/search" onClick={toggleMenu}>Search</Link></div>
              <div className="burger-menu_nav-item__mCA9u"><Link href="/agents" onClick={toggleMenu}>Agents</Link></div>
              
              {["join", "paperwork", "resources", "about"].map((key) => (
                <div key={key}>
                  <div
                    className="burger-menu_nav-item__mCA9u"
                    onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                    style={{cursor: 'pointer'}}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <div style={{ transform: activeDropdown === key ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="2.4rem" height="2.4rem">
                        <path fill="currentColor" fillRule="evenodd" d="M17.566 9.431a.8.8 0 0 1 .005 1.131l-1.78 1.797c-.669.674-1.218 1.229-1.708 1.622-.51.41-1.034.712-1.665.792a3.3 3.3 0 0 1-.83 0c-.63-.08-1.154-.382-1.665-.792-.49-.393-1.04-.948-1.707-1.622l-1.781-1.797A.8.8 0 0 1 7.57 9.436L9.32 11.2c.71.716 1.195 1.205 1.606 1.535.398.32.648.424.866.452q.211.027.424 0c.219-.028.468-.133.866-.452.41-.33.897-.819 1.607-1.535l1.747-1.763a.8.8 0 0 1 1.131-.005" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  {activeDropdown === key && (
                    <div className="burger-menu_nav-item-content__kj0Kw" style={{paddingLeft: '20px', display: 'block', height: 'auto'}}>
                      {navItems[key].map(item => (
                        <Link href={item.href} key={item.label} onClick={toggleMenu} style={{display: 'block', padding: '10px 0', fontSize: '1.5rem', color: '#fff', textDecoration: 'none'}}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="burger-menu_actions__In3qE">
              <Link className="button_button-round__TFjlU button_color-primary__JJ7Hh" href="https://app.findrealestate.com/authentication/sign-in">
                <div className="button_content__6Zh3n">
                  <div className="button_button-round-text__IEwW5">
                    <span data-text="Sign In">Sign In</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
`;

fs.writeFileSync(headerPath, newHeader);
console.log('Rewrote Header.jsx with working dropdowns');
