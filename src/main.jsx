// main.jsx — App entry point
import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom/client";

// Data
import { COLORS, PAGES, OFFICES, STATS } from "./data/constants";
import { PORTFOLIO_DATA } from "./data/portfolio";
import { TEAM_DATA, TEAM_PHOTOS } from "./data/team";
import { MEDIA_ARTICLES } from "./data/media";
import { SEOHead } from "./data/seo";

// Components
import { useBreakpoint } from "./components/hooks";
import { DynamicBackground, LOGO_SRC, MAP_BG_SRC } from "./components/Background";
import { RedLine, SectionLabel, SectionTitle, Button, Section, AnimStat,
         PortfolioCard, TeamCard, NavItem, PageHeader, GradientDivider, TransparentLogo } from "./components/UI";
import { MobileNav } from "./components/Nav";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { VCPage, PEPage } from "./pages/InvestmentPages";
import { PortfolioPage } from "./pages/PortfolioPage";
import { TeamPage } from "./pages/TeamPage";
import { ArticleCard, MediaPage } from "./pages/MediaPage";
import { ContactPage } from "./pages/ContactPage";

// ============================================================
// MAIN APP
// ============================================================
export default function KairousCapital() {
  const [page, setPage] = useState(PAGES.HOME);
  const [displayPage, setDisplayPage] = useState(PAGES.HOME);
  const [transState, setTransState] = useState("idle"); // idle | out | in
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const navigate = useCallback((p) => {
    if (p === displayPage) return;
    setTransState("out");
    setTimeout(() => {
      setDisplayPage(p);
      window.scrollTo({ top: 0 });
      setTransState("in");
      setTimeout(() => setTransState("idle"), 420);
    }, 320);
  }, [displayPage]);
  const renderPage = () => { switch (displayPage) { case PAGES.HOME: return <HomePage navigate={navigate} />; case PAGES.ABOUT: return <AboutPage navigate={navigate} />; case PAGES.VC: return <VCPage navigate={navigate} />; case PAGES.PE: return <PEPage navigate={navigate} />; case PAGES.PORTFOLIO: return <PortfolioPage />; case PAGES.TEAM: return <TeamPage />; case PAGES.MEDIA: return <MediaPage />; case PAGES.CONTACT: return <ContactPage />; default: return <HomePage navigate={navigate} />; } };
  const transStyle = transState === "out"
    ? { opacity: 0, transform: "translateY(14px) scale(0.985)", filter: "blur(6px)", transition: "opacity 0.32s cubic-bezier(0.4,0,1,1), transform 0.32s cubic-bezier(0.4,0,1,1), filter 0.32s cubic-bezier(0.4,0,1,1)", pointerEvents: "none" }
    : transState === "in"
    ? { opacity: 0, transform: "translateY(-10px) scale(0.99)", filter: "blur(4px)", transition: "none" }
    : { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)", transition: "opacity 0.42s cubic-bezier(0,0,0.2,1), transform 0.42s cubic-bezier(0,0,0.2,1), filter 0.42s cubic-bezier(0,0,0.2,1)" };

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", margin: 0, padding: 0, background: COLORS.cream, position: "relative", minHeight: "100vh" }}>
      <SEOHead page={displayPage} />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Dynamic particle background — covers entire page */}
      <DynamicBackground />

      {/* NAV */}
      <MobileNav navigate={navigate} displayPage={displayPage} scrolled={scrolled} />

      {/* Page content — sits above the canvas */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ ...transStyle, willChange: "opacity, transform, filter" }}>
          {renderPage()}
        </div>

        {/* FOOTER */}
        <footer style={{ background: COLORS.crimson, padding: "56px clamp(24px, 5vw, 80px) 28px", position: "relative" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 28, marginBottom: 44 }}>
              <div>
                <div style={{ marginBottom: 18 }}>
                  <TransparentLogo height={32} invert={true} />
                </div>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 300 }}>A regional PE and VC firm building high-growth businesses across SEA and China.</p>
                <div style={{ marginTop: 14, fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFFFFF" }}>enquiry@kairous.com</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#F5F2EB", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Company</div>
                {[{ l: "About Us", p: PAGES.ABOUT }, { l: "Team", p: PAGES.TEAM }, { l: "Portfolio", p: PAGES.PORTFOLIO }, { l: "Media", p: PAGES.MEDIA }, { l: "Contact", p: PAGES.CONTACT }].map((item, i) => (
                  <div key={i} onClick={() => navigate(item.p)} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFFFFF", marginBottom: 10, cursor: "pointer" }} onMouseEnter={e => e.target.style.color = COLORS.white} onMouseLeave={e => e.target.style.color = "#FFFFFF"}>{item.l}</div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#F5F2EB", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Strategies</div>
                <div onClick={() => navigate(PAGES.VC)} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFFFFF", marginBottom: 10, cursor: "pointer" }} onMouseEnter={e => e.target.style.color = COLORS.white} onMouseLeave={e => e.target.style.color = "#FFFFFF"}>Venture Capital</div>
                <div onClick={() => navigate(PAGES.PE)} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFFFFF", marginBottom: 10, cursor: "pointer" }} onMouseEnter={e => e.target.style.color = COLORS.white} onMouseLeave={e => e.target.style.color = "#FFFFFF"}>Private Equity</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#F5F2EB", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Offices</div>
                {OFFICES.map((o, i) => <div key={i} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFFFFF", marginBottom: 10 }}>{o.city} {o.label && <span style={{ fontSize: 10, color: "#F5F2EB" }}>({o.label})</span>}</div>)}
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 24 }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 10, fontWeight: 600 }}>
                © {new Date().getFullYear()} Kairous Capital Group. All Rights Reserved.
              </div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.8 }}>
                Kairous Capital Sdn Bhd (1110290-K) &nbsp;·&nbsp; Kairous Capital (HK) Limited (CR: 2299343 · SFC: BHF112) &nbsp;·&nbsp; Kairous Capital (Singapore) Pte Ltd (CMS101210)
              </div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.28)", marginTop: 6 }}>
                Securities Commission Malaysia (FO0044/17) · Monetary Authority of Singapore (CMS101210) · Securities &amp; Futures Commission Hong Kong (BHF112)
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`* { margin: 0; padding: 0; box-sizing: border-box; } body { overflow-x: hidden; } ::selection { background: ${COLORS.crimson}; color: white; } input:focus, select:focus, textarea:focus { border-color: ${COLORS.crimson} !important; } @media (max-width: 768px) {
        nav > div:last-child { display: none; }
        .kc-mobile-menu { display: flex !important; }
        .kc-stack { flex-direction: column !important; }
        .kc-grid-1 { grid-template-columns: 1fr !important; }
        .kc-grid-2 { grid-template-columns: 1fr 1fr !important; }
        .kc-hide-mobile { display: none !important; }
        .kc-full-mobile { width: 100% !important; max-width: 100% !important; }
        .kc-text-center-mobile { text-align: center !important; }
      }
      @media (max-width: 480px) {
        .kc-grid-2 { grid-template-columns: 1fr !important; }
      } .kc-card { transition: background 0.2s ease, box-shadow 0.25s ease, transform 0.25s ease; } .kc-card:hover { background: #E8E4D9 !important; }`}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(KairousCapital)
);
