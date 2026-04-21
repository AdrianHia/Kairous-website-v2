// components/Nav.jsx — Mobile-responsive navigation
import React, { useState } from "react";
import { COLORS, PAGES } from "../data/constants";
import { NavItem, Button } from "./UI";
import { LOGO_SRC } from "./Background";
import { useBreakpoint } from "./hooks";

// ============================================================
// MOBILE-RESPONSIVE NAV
// ============================================================
export const MobileNav = ({ navigate, displayPage, scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useBreakpoint();
  const navItems = [
    { label: "About", page: PAGES.ABOUT },
    { label: "Venture Capital", page: PAGES.VC },
    { label: "Private Equity", page: PAGES.PE },
    { label: "Portfolio", page: PAGES.PORTFOLIO },
    { label: "Team", page: PAGES.TEAM },
    { label: "Media", page: PAGES.MEDIA },
    { label: "Contact", page: PAGES.CONTACT },
  ];
  const go = (page) => { navigate(page); setMenuOpen(false); };
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 clamp(16px, 4vw, 60px)", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled || menuOpen ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)", borderBottom: `1px solid ${scrolled || menuOpen ? COLORS.border : "transparent"}`, transition: "all 0.3s ease" }}>
        <div onClick={() => go(PAGES.HOME)} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <img src={LOGO_SRC} alt="Kairous Capital" style={{ height: 38, objectFit: "contain" }} />
        </div>
        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <NavItem active={displayPage === PAGES.ABOUT} onClick={() => go(PAGES.ABOUT)}>About</NavItem>
            <NavItem active={displayPage === PAGES.VC || displayPage === PAGES.PE} hasDropdown dropdownItems={[{ label: "Venture Capital", page: PAGES.VC }, { label: "Private Equity", page: PAGES.PE }]} navigate={navigate}>Investment</NavItem>
            <NavItem active={displayPage === PAGES.PORTFOLIO} onClick={() => go(PAGES.PORTFOLIO)}>Portfolio</NavItem>
            <NavItem active={displayPage === PAGES.TEAM} onClick={() => go(PAGES.TEAM)}>Team</NavItem>
            <NavItem active={displayPage === PAGES.MEDIA} onClick={() => go(PAGES.MEDIA)}>Media</NavItem>
            <NavItem active={displayPage === PAGES.CONTACT} onClick={() => go(PAGES.CONTACT)}>Contact</NavItem>
            <button style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "8px 18px", background: COLORS.crimson, border: `1.5px solid ${COLORS.crimson}`, borderRadius: 4, color: "#FFFFFF", cursor: "pointer", transition: "background 0.2s ease" }}
              onMouseEnter={e => { e.target.style.background = "#7A1515"; }}
              onMouseLeave={e => { e.target.style.background = COLORS.crimson; }}>Investor Login</button>
          </div>
        )}
        {/* Hamburger button */}
        {isMobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
            <span style={{ display: "block", width: menuOpen ? 22 : 24, height: 2, background: COLORS.nearBlack, borderRadius: 2, transition: "all 0.25s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 16, height: 2, background: COLORS.nearBlack, borderRadius: 2, transition: "all 0.25s ease", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: menuOpen ? 22 : 20, height: 2, background: COLORS.nearBlack, borderRadius: 2, transition: "all 0.25s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}
      </nav>
      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, zIndex: 999, background: "rgba(255,255,255,0.98)", borderBottom: `1px solid ${COLORS.border}`, padding: "12px 0 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          {navItems.map((item, i) => (
            <button key={i} onClick={() => go(item.page)} style={{ display: "block", width: "100%", textAlign: "left", padding: "14px clamp(16px, 5vw, 32px)", fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: displayPage === item.page ? 700 : 500, color: displayPage === item.page ? COLORS.crimson : COLORS.nearBlack, background: "none", border: "none", cursor: "pointer", borderLeft: displayPage === item.page ? `3px solid ${COLORS.crimson}` : "3px solid transparent", transition: "all 0.15s ease" }}>
              {item.label}
            </button>
          ))}
          <div style={{ padding: "12px clamp(16px, 5vw, 32px) 0" }}>
            <button style={{ width: "100%", fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 18px", background: COLORS.crimson, border: "none", borderRadius: 4, color: "#FFFFFF", cursor: "pointer" }}>
              Investor Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};
