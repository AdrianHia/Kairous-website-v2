import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom/client";
import LOGO_SRC from "./assets/logo.png";
import Globe from "./assets/Globe.jsx";

// ── Team photos ──────────────────────────────────────────────
import tJoseph    from "./assets/team/Joseph_Lee.png";
import tSeeToh    from "./assets/team/See_Toh.png";
import tAdrian    from "./assets/team/Adrian_Hia.png";
import tWangTi    from "./assets/team/Wang_Ti.png";
import tTengHau   from "./assets/team/Teng_Hau.png";
import tXiRong    from "./assets/team/Xi_Rong.png";
import tRandy     from "./assets/team/Randy_Tan.png";
import tHoang     from "./assets/team/Hoang.png";
import tVinz      from "./assets/team/Vinz.png";
import tKhinShen  from "./assets/team/Khin_Shen.png";
import tJohnson   from "./assets/team/Johnson_Lee.png";
import tAqilah    from "./assets/team/Aqilah.png";
import tAnna      from "./assets/team/Anna_Puah.png";
import tHow       from "./assets/team/How.png";
import tRozi      from "./assets/team/Rozi.png";
import tMinLing   from "./assets/team/Min_Ling.png";

const TEAM_PHOTOS = {
  "Joseph_Lee.png":  tJoseph,
  "See_Toh.png":     tSeeToh,
  "Adrian_Hia.png":  tAdrian,
  "Wang_Ti.png":     tWangTi,
  "Teng_Hau.png":    tTengHau,
  "Xi_Rong.png":     tXiRong,
  "Randy_Tan.png":   tRandy,
  "Hoang.png":       tHoang,
  "Vinz.png":        tVinz,
  "Khin_Shen.png":   tKhinShen,
  "Johnson_Lee.png": tJohnson,
  "Aqilah.png":      tAqilah,
  "Anna_Puah.png":   tAnna,
  "How.png":         tHow,
  "Rozi.png":        tRozi,
  "Min_Ling.png":    tMinLing,
};
import {
  COLORS, PAGES, STATS, OFFICES,
  PORTFOLIO, TEAM, NEWS_DATA,
  VC_FUNDS, PE_FUNDS, SECTORS, ACCREDITATIONS, TESTIMONIALS, SEO,
} from "./data.js";

// ============================================================
// HOOKS
// ============================================================

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return { isMobile };
};

const useScrollReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

// ============================================================
// SEO
// ============================================================

const setMeta = (name, content, prop = false) => {
  const attr = prop ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute("content", content);
};

const SEOHead = ({ page }) => {
  useEffect(() => {
    const d = SEO[page] || SEO.home;
    document.title = d.title;
    setMeta("description", d.description);
    setMeta("keywords", d.keywords);
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large");
    setMeta("author", "Kairous Capital");
    setMeta("og:title", d.title, true);
    setMeta("og:description", d.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Kairous Capital", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", d.title);
    setMeta("twitter:description", d.description);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://kairous.com";

    const existing = document.getElementById("ld-json");
    if (existing) existing.remove();
    const ld = document.createElement("script");
    ld.id = "ld-json"; ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "FinancialService",
      "name": "Kairous Capital", "url": "https://kairous.com", "foundingDate": "2015",
      "description": d.description,
      "areaServed": ["Malaysia", "Singapore", "Vietnam", "Thailand", "Indonesia", "China", "Hong Kong"],
      "address": { "@type": "PostalAddress", "addressLocality": "Kuala Lumpur", "addressCountry": "MY" },
      "contactPoint": { "@type": "ContactPoint", "email": "enquiry@kairous.com" },
    });
    document.head.appendChild(ld);
  }, [page]);
  return null;
};

// ============================================================
// UI PRIMITIVES
// ============================================================

const SectionLabel = ({ children, light }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
    <div style={{ width: 40, height: 2, background: light ? "#FFF" : COLORS.crimson, borderRadius: 1 }} />
    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: light ? "#FFF" : COLORS.crimson }}>{children}</span>
  </div>
);

const SectionTitle = ({ children, light }) => (
  <h2 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.2, color: light ? COLORS.white : COLORS.nearBlack, margin: 0 }}>{children}</h2>
);

const Section = ({ children, bg = "transparent", style: s }) => (
  <section style={{ padding: "clamp(40px, 7vw, 100px) clamp(16px, 5vw, 80px)", background: bg, position: "relative", boxShadow: bg !== "transparent" && bg !== COLORS.crimson ? "0 4px 20px rgba(0,0,0,0.06)" : "none", ...s }}>
    <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 1 }}>{children}</div>
  </section>
);

const PageHeader = ({ label, title, subtitle, description }) => (
  <section style={{ background: COLORS.cream, padding: "clamp(100px, 11vw, 180px) clamp(16px, 5vw, 80px) clamp(40px, 7vw, 90px)", position: "relative", boxShadow: "0 6px 24px rgba(0,0,0,0.07)", zIndex: 2 }}>
    <div style={{ maxWidth: 1140, margin: "0 auto" }}>
      <SectionLabel>{label}</SectionLabel>
      <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(34px, 4.5vw, 56px)", fontWeight: 800, color: COLORS.nearBlack, lineHeight: 1.15, margin: "16px 0 20px", maxWidth: 700 }}>
        {title}<br /><span style={{ color: COLORS.crimson }}>{subtitle}</span>
      </h1>
      {description && <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 17, color: COLORS.darkGray, lineHeight: 1.7, maxWidth: 560 }}>{description}</p>}
    </div>
  </section>
);

const Button = ({ children, variant = "primary", onClick, style: cs }) => {
  const [h, setH] = useState(false);
  const base = { fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", padding: "14px 32px", border: "none", borderRadius: 4, cursor: "pointer", transition: "all 0.25s ease", textTransform: "uppercase" };
  const variants = {
    primary: { background: h ? COLORS.crimsonDark : COLORS.crimson, color: "#FFF", transform: h ? "translateY(-1px)" : "none", boxShadow: h ? "0 6px 24px rgba(153,27,27,0.25)" : "0 2px 8px rgba(153,27,27,0.15)" },
    outline: { background: h ? "#DDD8CC" : "#FFF", color: COLORS.crimson, border: `1.5px solid ${COLORS.crimson}` },
  };
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...base, ...variants[variant], ...cs }}>{children}</button>;
};

const AnimStat = ({ value, label }) => {
  const [ref, vis] = useScrollReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease", textAlign: "center", flex: "1 1 200px" }}>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, color: COLORS.crimson, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.mediumGray, marginTop: 8 }}>{label}</div>
    </div>
  );
};

const GradientDivider = () => (
  <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${COLORS.crimson}40, transparent)` }} />
);

// ─── Hover card helper ────────────────────────────────────────────────────────
const hoverOn  = e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.13)"; e.currentTarget.style.background = "#E8E4D9"; };
const hoverOff = e => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";   e.currentTarget.style.background = "#FFF"; };

// ============================================================
// BACKGROUND — Globe (replaces mapBg + particle canvas)
// ============================================================

const Background = () => (
  <div style={{
    position: "fixed", top: 0, left: 0,
    width: "100vw", height: "100vh",
    pointerEvents: "none", zIndex: 0,
  }}>
    <Globe />
  </div>
);

// ============================================================
// NAVIGATION
// ============================================================

const NAV_LINKS = [
  { label: "About",          page: PAGES.ABOUT },
  { label: "Venture Capital",page: PAGES.VC },
  { label: "Private Equity", page: PAGES.PE },
  { label: "Portfolio",      page: PAGES.PORTFOLIO },
  { label: "Team",           page: PAGES.TEAM },
  { label: "Media",          page: PAGES.MEDIA },
  { label: "Contact",        page: PAGES.CONTACT },
];

const Nav = ({ navigate, displayPage, scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useBreakpoint();
  const go = (page) => { navigate(page); setMenuOpen(false); };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 clamp(16px, 4vw, 60px)", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled || menuOpen ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)", borderBottom: `1px solid ${scrolled || menuOpen ? COLORS.border : "transparent"}`, transition: "all 0.3s ease" }}>
        <div onClick={() => go(PAGES.HOME)} style={{ cursor: "pointer" }}>
          <img src={LOGO_SRC} alt="Kairous Capital" style={{ height: 38, objectFit: "contain" }} />
        </div>

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map(({ label, page }) => (
              <NavItem key={page} active={displayPage === page} onClick={() => go(page)} navigate={navigate} page={page} label={label} />
            ))}
            <button style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "8px 18px", background: COLORS.crimson, border: "none", borderRadius: 4, color: "#FFF", cursor: "pointer" }}
              onMouseEnter={e => { e.target.style.background = COLORS.crimsonDark; }}
              onMouseLeave={e => { e.target.style.background = COLORS.crimson; }}>
              Investor Login
            </button>
          </div>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
            <span style={{ display: "block", width: menuOpen ? 22 : 24, height: 2, background: COLORS.nearBlack, borderRadius: 2, transition: "all 0.25s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 16, height: 2, background: COLORS.nearBlack, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "all 0.25s" }} />
            <span style={{ display: "block", width: menuOpen ? 22 : 20, height: 2, background: COLORS.nearBlack, borderRadius: 2, transition: "all 0.25s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{ position: "fixed", top: 68, left: 0, right: 0, zIndex: 999, background: "rgba(255,255,255,0.98)", borderBottom: `1px solid ${COLORS.border}`, padding: "12px 0 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          {NAV_LINKS.map(({ label, page }) => (
            <button key={page} onClick={() => go(page)} style={{ display: "block", width: "100%", textAlign: "left", padding: "14px clamp(16px, 5vw, 32px)", fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: displayPage === page ? 700 : 500, color: displayPage === page ? COLORS.crimson : COLORS.nearBlack, background: "none", border: "none", cursor: "pointer", borderLeft: displayPage === page ? `3px solid ${COLORS.crimson}` : "3px solid transparent" }}>
              {label}
            </button>
          ))}
          <div style={{ padding: "12px clamp(16px, 5vw, 32px) 0" }}>
            <button style={{ width: "100%", fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, padding: "14px", background: COLORS.crimson, border: "none", borderRadius: 4, color: "#FFF", cursor: "pointer" }}>Investor Login</button>
          </div>
        </div>
      )}
    </>
  );
};

const NavItem = ({ label, page, active, onClick, navigate }) => {
  const [h, setH] = useState(false);
  const isInvestment = page === PAGES.VC || page === PAGES.PE;

  if (isInvestment && page === PAGES.VC) {
    return (
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "relative" }}>
        <button style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.03em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", color: (active || h) ? COLORS.crimson : COLORS.nearBlack, transition: "color 0.2s", padding: "8px 0", display: "flex", alignItems: "center", gap: 5 }}>
          Investment
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: h ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
            <path d="M1 1L5 5L9 1" stroke={(active || h) ? COLORS.crimson : COLORS.nearBlack} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {h && (
          <div style={{ position: "absolute", top: "100%", left: -12, minWidth: 200, background: "#FFF", border: `1px solid ${COLORS.border}`, borderRadius: 6, boxShadow: "0 8px 32px rgba(0,0,0,0.08)", padding: "8px 0", zIndex: 100 }}>
            {[{ label: "Venture Capital", page: PAGES.VC }, { label: "Private Equity", page: PAGES.PE }].map((item, i) => (
              <button key={i} onClick={() => navigate(item.page)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 20px", fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, color: COLORS.nearBlack, background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={e => { e.target.style.background = COLORS.crimsonSoft; e.target.style.color = COLORS.crimson; }}
                onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = COLORS.nearBlack; }}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
  if (page === PAGES.PE) return null; // PE is under Investment dropdown

  return (
    <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}
      style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.03em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", color: (active || h) ? COLORS.crimson : COLORS.nearBlack, transition: "color 0.2s", padding: "8px 0" }}>
      {label}
    </button>
  );
};

// ============================================================
// CARDS
// ============================================================

const PortfolioCard = ({ company }) => {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ padding: "28px 24px", background: "#FFF", border: `1px solid ${h ? COLORS.crimson : COLORS.border}`, borderRadius: 6, transition: "all 0.3s ease", transform: h ? "translateY(-3px)" : "none", boxShadow: h ? "0 12px 36px rgba(0,0,0,0.13)" : "0 2px 8px rgba(0,0,0,0.07)", position: "relative", overflow: "hidden" }}>
      {(company.status === "exited" || company.status === "ipo") && (
        <div style={{ position: "absolute", top: 10, right: -30, background: company.status === "ipo" ? "#2E6B3E" : COLORS.crimson, color: "#FFF", fontSize: 10, fontWeight: 700, padding: "3px 34px", transform: "rotate(45deg)", fontFamily: "'Open Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {company.status === "ipo" ? "IPO" : "Exited"}
        </div>
      )}
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{company.name}</div>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.darkGray, lineHeight: 1.65 }}>{company.desc}</div>
      {company.url && <div style={{ marginTop: 14, fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: h ? COLORS.crimson : COLORS.mediumGray, transition: "color 0.2s" }}>{company.url} →</div>}
    </div>
  );
};

const TeamCard = ({ member }) => {
  const [h, setH] = useState(false);
  const initials = member.name.split(" ").map(n => n[0]).join("");
  const photoSrc = member.photo ? TEAM_PHOTOS[member.photo] : null;
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: "#FFF", borderRadius: 6, border: `1px solid ${COLORS.border}`, transition: "all 0.25s ease", boxShadow: h ? "0 12px 36px rgba(0,0,0,0.13)" : "0 2px 8px rgba(0,0,0,0.07)", borderBottom: h ? `3px solid ${COLORS.crimson}` : "3px solid transparent", overflow: "hidden" }}>
      <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: COLORS.snow, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {photoSrc
          ? <img src={photoSrc} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transition: "transform 0.4s ease", transform: h ? "scale(1.04)" : "scale(1)" }} />
          : <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 28, fontWeight: 700, color: h ? COLORS.crimson : COLORS.mediumGray }}>{initials}</span>
        }
      </div>
      <div style={{ padding: "16px 18px 20px" }}>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 4 }}>{member.name}</div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.5 }}>{member.role}</div>
      </div>
    </div>
  );
};

const FundCard = ({ fund }) => (
  <div style={{ padding: 28, background: "#FFF", borderRadius: 6, border: `1px solid ${COLORS.border}`, borderTop: `3px solid ${COLORS.crimson}`, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "all 0.25s ease" }}
    onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, lineHeight: 1.4, flex: 1, paddingRight: 8 }}>{fund.name}</div>
      <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 8px", borderRadius: 3, background: fund.status === "Fully Deployed" ? COLORS.darkGray : COLORS.crimson, color: "#FFF", whiteSpace: "nowrap" }}>{fund.status}</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
      {[["Vintage", fund.vintage], ["Geography", fund.geo]].map(([k, v]) => (
        <div key={k}>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{k}</div>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.nearBlack }}>{v}</div>
        </div>
      ))}
    </div>
    <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Sector Focus</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {fund.sectors.map((s, i) => <span key={i} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, padding: "4px 10px", borderRadius: 3, background: "rgba(153,27,27,0.08)", color: COLORS.crimson, border: "1px solid rgba(153,27,27,0.15)", fontWeight: 600 }}>{s}</span>)}
    </div>
  </div>
);

const SOURCE_COLORS = {
  "The Edge Malaysia":   "#003366",
  "DealStreetAsia":      "#c0392b",
  "TechNode Global":     "#1a1a2e",
  "TechNode":            "#1a1a2e",
  "Digital News Asia":   "#2e86ab",
  "PRNewswire":          "#555555",
  "AsiaTechDaily":       "#2d6a4f",
  "Tech in Asia":        "#e67e22",
  "The Star":            "#cc0000",
  "Fintech Singapore":   "#0077b6",
  "MobiHealthNews":      "#264653",
  "Nasdaq / Renaissance Capital": "#555555",
  "Renaissance Capital": "#555555",
  "Ventureburn":         "#6d4c41",
};

const ArticleCard = ({ article }) => {
  const [h, setH] = useState(false);
  const srcColor = SOURCE_COLORS[article.source] || COLORS.nearBlack;
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex" }}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ border: `1px solid ${COLORS.border}`, borderRadius: 6, overflow: "hidden", background: "#FFF",
          boxShadow: h ? "0 12px 32px rgba(0,0,0,0.13)" : "0 2px 8px rgba(0,0,0,0.07)",
          transform: h ? "translateY(-4px)" : "none", transition: "all 0.25s ease",
          display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ height: 4, background: COLORS.crimson }} />
        <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1, gap: 10 }}>
          {/* Top row: source badge + date + badge */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
              padding: "3px 8px", borderRadius: 3, background: srcColor, color: "#FFF", whiteSpace: "nowrap" }}>
              {article.source}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {article.badge && (
                <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em",
                  padding: "2px 7px", borderRadius: 3, background: COLORS.crimson, color: "#FFF" }}>
                  {article.badge} ↑
                </span>
              )}
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.mediumGray }}>{article.date}</span>
            </div>
          </div>
          {/* Headline */}
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, fontWeight: 700, color: COLORS.nearBlack, lineHeight: 1.45, flex: 1 }}>
            {article.headline}
          </div>
          {/* Company + link */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.crimson, fontWeight: 700 }}>
              {article.company}
            </span>
            <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: h ? COLORS.crimson : COLORS.mediumGray, transition: "color 0.2s" }}>↗</span>
          </div>
        </div>
      </div>
    </a>
  );
};

const MediaPage = () => {
  const [filter, setFilter] = useState("all");
  const [visible, setVisible] = useState(12);

  const sorted = [...NEWS_DATA].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (b.month || 0) - (a.month || 0);
  });

  const filtered = filter === "all" ? sorted : sorted.filter(a => a.category === filter);
  const shown = filtered.slice(0, visible);

  const btnStyle = (active) => ({
    fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em",
    textTransform: "uppercase", padding: "8px 20px", borderRadius: 4, cursor: "pointer", border: "1.5px solid",
    transition: "all 0.2s ease",
    background: active ? COLORS.crimson : "#FFF",
    color: active ? "#FFF" : COLORS.crimson,
    borderColor: COLORS.crimson,
  });

  return (
    <>
      <PageHeader label="Media" title="News &" subtitle="Insights" />
      <Section>
        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
          {[["all", "All News"], ["firm", "Kairous Capital"], ["portfolio", "Portfolio Companies"]].map(([val, label]) => (
            <button key={val} onClick={() => { setFilter(val); setVisible(12); }} style={btnStyle(filter === val)}
              onMouseEnter={e => { if (filter !== val) { e.currentTarget.style.background = "#F5EDE8"; }}}
              onMouseLeave={e => { if (filter !== val) { e.currentTarget.style.background = "#FFF"; }}}>
              {label}
            </button>
          ))}
          <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: COLORS.mediumGray, alignSelf: "center", marginLeft: 6 }}>
            {filtered.length} articles
          </span>
        </div>
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {shown.map(a => <ArticleCard key={a.id} article={a} />)}
        </div>
        {/* Load more */}
        {visible < filtered.length && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button onClick={() => setVisible(v => v + 9)}
              style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, padding: "14px 40px",
                background: "#FFF", color: COLORS.crimson, border: `1.5px solid ${COLORS.crimson}`,
                borderRadius: 4, cursor: "pointer", textTransform: "uppercase" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#F5EDE8"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#FFF"; }}>
              Load More ({filtered.length - visible} remaining)
            </button>
          </div>
        )}
      </Section>
    </>
  );
};

const HomePage = ({ navigate }) => {
  const [heroRef, heroVis] = useScrollReveal();
  return (
    <>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "clamp(24px, 5vw, 80px)", position: "relative" }}>
        <div ref={heroRef} style={{ maxWidth: 1140, margin: "0 auto", width: "100%", paddingTop: 80, position: "relative", zIndex: 1, opacity: heroVis ? 1 : 0, transform: heroVis ? "none" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <SectionLabel>Kairous Capital</SectionLabel>
          <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(38px, 5.5vw, 72px)", fontWeight: 800, color: COLORS.nearBlack, lineHeight: 1.1, margin: "20px 0 28px", maxWidth: 820, letterSpacing: "-0.02em" }}>
            Your Cross-Border<br /><span style={{ color: COLORS.crimson }}>Partner</span>
          </h1>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(15px, 1.6vw, 18px)", color: COLORS.darkGray, lineHeight: 1.75, maxWidth: 580, margin: "0 0 40px" }}>
            Investing and scaling high-growth businesses across Southeast Asia and China.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button onClick={() => navigate(PAGES.VC)}>Venture Capital</Button>
            <Button onClick={() => navigate(PAGES.PE)}>Private Equity</Button>
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.cream, padding: "52px clamp(24px, 5vw, 80px)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "center" }}>
          {STATS.map((s, i) => <AnimStat key={i} {...s} />)}
        </div>
      </section>

      <GradientDivider />

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 72, alignItems: "center" }}>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <SectionTitle>A Regional Multi-Strategy Investment Platform</SectionTitle>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "20px 0 28px" }}>
              Founded in 2015, Kairous Capital has evolved from an early-stage technology investor into a multi-strategy platform spanning venture capital and private equity. Headquartered in Kuala Lumpur with offices across Singapore, Shanghai, and Hong Kong, we deploy strategic capital alongside operational support to help companies scale across borders.
            </p>
            <Button variant="outline" onClick={() => navigate(PAGES.ABOUT)}>Learn More</Button>
          </div>
          <div style={{ background: "#FFF", aspectRatio: "4/3", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.border}` }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 56, fontWeight: 800, color: COLORS.crimson, lineHeight: 1 }}>{new Date().getFullYear() - 2014}</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: COLORS.mediumGray, marginTop: 8, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Years of Investing</div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg={COLORS.warmGray}>
        <SectionLabel>Our Strategies</SectionLabel>
        <SectionTitle>Two Strategies, One Platform</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 40 }}>
          {[
            { title: "Venture Capital", subtitle: "Series A and beyond", desc: "We invest in early-stage technology companies with unique cross-border potential — supporting SEA startups localising proven models from China.", ticket: "USD $1M – $5M", page: PAGES.VC },
            { title: "Private Equity",  subtitle: "Growth & Pre-IPO",    desc: "We partner with profitable SMEs to unlock scale through digital transformation, AI integration, and cross-border expansion.",                ticket: "MYR 10M – 40M",  page: PAGES.PE },
          ].map((s, i) => (
            <div key={i} onClick={() => navigate(s.page)}
              style={{ padding: 44, background: "#FFF", borderRadius: 8, border: `1px solid ${COLORS.border}`, cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(153,27,27,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 3, background: `linear-gradient(to right, ${COLORS.crimson}, transparent)` }} />
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>{s.subtitle}</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 26, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 14 }}>{s.title}</div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.darkGray, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.mediumGray }}>Typical investment: <span style={{ color: COLORS.nearBlack, fontWeight: 700 }}>{s.ticket}</span></div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg={COLORS.crimson}>
        <SectionLabel light>Our Edge</SectionLabel>
        <SectionTitle light>Cross-Border Value Creation</SectionTitle>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: 600, margin: "20px 0 44px" }}>With local teams embedded across key markets, we don't just write cheques — we open doors.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { n: "01", t: "Cross-Border Expertise", d: "A decade of experience connecting Southeast Asia and China — bridging capital, networks, and know-how across borders." },
            { n: "02", t: "Technology Specialist",   d: "Deep sector expertise in fintech, digital health, e-commerce, and enterprise tech to drive portfolio transformation." },
            { n: "03", t: "Exit Readiness",          d: "Disciplined positioning for IPO, M&A, or trade exits — with a track record of successful liquidity events." },
          ].map((item, i) => (
            <div key={i} style={{ padding: 28, background: "rgba(255,255,255,0.14)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.25)", transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 28, fontWeight: 800, color: "rgba(255,255,255,0.2)", marginBottom: 14 }}>{item.n}</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: "#FFF", fontWeight: 700, marginBottom: 8 }}>{item.t}</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{item.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: "center", padding: "32px 0" }}>
          <SectionTitle>Ready to Scale Across Borders?</SectionTitle>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, margin: "16px auto 32px", maxWidth: 480, lineHeight: 1.7 }}>Whether you're a founder or an investor, we'd like to hear from you.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            <Button onClick={() => navigate(PAGES.CONTACT)}>Get in Touch</Button>
            <Button variant="outline" onClick={() => navigate(PAGES.PORTFOLIO)}>View Portfolio</Button>
          </div>
        </div>
      </Section>
    </>
  );
};

const AboutPage = ({ navigate }) => (
  <>
    <PageHeader label="About Us" title="Bridging ASEAN, China" subtitle="and Beyond" />
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
        <div>
          <SectionLabel>Our Story</SectionLabel>
          <SectionTitle>From Venture to Multi-Strategy</SectionTitle>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "20px 0" }}>Kairous Capital was founded in 2015 with a thesis that the most compelling investment opportunities in Asia exist at the intersection of Southeast Asia and China.</p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8 }}>Today, we manage over USD 200 million in AUM with a proven track record of IPOs, M&A, and trade exits.</p>
        </div>
        <div>
          <SectionLabel>Regional Footprint</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 16 }}>
            {OFFICES.map((o, i) => (
              <div key={i} style={{ padding: 22, background: "#FFF", borderRadius: 6, border: `1px solid ${COLORS.border}` }}>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 17, fontWeight: 700, color: COLORS.nearBlack }}>
                  {o.city} {o.label && <span style={{ fontSize: 10, color: COLORS.crimson, fontWeight: 700, marginLeft: 6 }}>{o.label}</span>}
                </div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.mediumGray, marginTop: 6, lineHeight: 1.5 }}>{o.address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
    <Section bg={COLORS.warmGray}>
      <SectionLabel>Accreditations</SectionLabel>
      <SectionTitle>Regulated Across Key Markets</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 36 }}>
        {ACCREDITATIONS.map((a, i) => (
          <div key={i} style={{ padding: 28, background: "#FFF", borderRadius: 6, border: `1px solid ${COLORS.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, fontWeight: 700, color: COLORS.crimson, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>{a.regulator}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{a.market}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.darkGray, lineHeight: 1.65, marginBottom: 10 }}>{a.licence}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: COLORS.mediumGray, padding: "5px 10px", background: COLORS.cream, borderRadius: 3, display: "inline-block" }}>{a.licNo}</div>
          </div>
        ))}
      </div>
    </Section>
    <Section>
      <SectionLabel>Investment Focus</SectionLabel>
      <SectionTitle>Where We Invest</SectionTitle>
      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "16px 0 32px", maxWidth: 560 }}>Sector-agnostic investors focused on tech-powered businesses.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {SECTORS.map((s, i) => (
          <span key={i} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, padding: "9px 18px", borderRadius: 4, border: `1px solid ${COLORS.border}`, color: COLORS.darkGray, background: "#FFF" }}>{s}</span>
        ))}
      </div>
    </Section>
  </>
);

const VCPage = ({ navigate }) => (
  <>
    <PageHeader label="Venture Capital" title="Backing Bold Founders" subtitle="From Series A and beyond" description="Early-stage technology companies with cross-border potential across SEA and China." />
    <Section bg={COLORS.warmGray}>
      <SectionLabel>Our Funds</SectionLabel>
      <SectionTitle>Venture Capital Funds</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 28 }}>
        {VC_FUNDS.map((f, i) => <FundCard key={i} fund={f} />)}
      </div>
    </Section>
    <Section>
      <SectionLabel>Our Approach</SectionLabel>
      <SectionTitle>More Than Capital</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 36 }}>
        {[
          { t: "Cross-Border Expansion",  d: "Helping SEA startups localise Chinese models, and vice versa." },
          { t: "Strategic Governance",    d: "Board-level engagement, KPI frameworks, and mentorship." },
          { t: "Network Access",          d: "Connecting founders to LPs, co-investors, and strategic partners." },
          { t: "Follow-On Commitment",    d: "Capacity to follow on from Series A through Series C." },
        ].map((item, i) => (
          <div key={i} style={{ padding: 24, background: "#FFF", borderRadius: 6, border: `1px solid ${COLORS.border}` }}>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{item.t}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.darkGray, lineHeight: 1.7 }}>{item.d}</div>
          </div>
        ))}
      </div>
    </Section>
    <Section><div style={{ textAlign: "center" }}><SectionTitle>Have a Company We Should See?</SectionTitle><p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, margin: "14px auto 28px", maxWidth: 460 }}>Exceptional founders at the intersection of technology and impact.</p><Button onClick={() => navigate(PAGES.CONTACT)}>Submit Your Pitch</Button></div></Section>
  </>
);

const PEPage = ({ navigate }) => (
  <>
    <PageHeader label="Private Equity" title="Transforming SMEs Into" subtitle="Regional Champions" description="Partnering with profitable SMEs to unlock scale through technology and cross-border expansion." />
    <Section bg={COLORS.warmGray}>
      <SectionLabel>Our Funds</SectionLabel>
      <SectionTitle>Private Equity Funds</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 28 }}>
        {PE_FUNDS.map((f, i) => <FundCard key={i} fund={f} />)}
      </div>
    </Section>
    <Section>
      <SectionLabel>Value Creation</SectionLabel>
      <SectionTitle>Our Transformation Playbook</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 36 }}>
        {[
          { t: "Digital Transformation",    d: "Automation, data analytics, and AI to modernise operations." },
          { t: "Supply Chain Optimisation", d: "China networks to restructure procurement and distribution." },
          { t: "Cross-Border Expansion",    d: "Helping local champions scale into ASEAN markets." },
          { t: "Exit Preparation",          d: "Positioning for IPO, M&A, or trade sales." },
        ].map((item, i) => (
          <div key={i} style={{ padding: 24, background: "#FFF", borderRadius: 6, border: `1px solid ${COLORS.border}` }}>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{item.t}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.darkGray, lineHeight: 1.7 }}>{item.d}</div>
          </div>
        ))}
      </div>
    </Section>
    <Section><div style={{ textAlign: "center" }}><SectionTitle>Scaling Your Business?</SectionTitle><p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, margin: "14px auto 28px", maxWidth: 460 }}>Profitable SME ready for the next stage? Let's talk.</p><Button onClick={() => navigate(PAGES.CONTACT)}>Start a Conversation</Button></div></Section>
  </>
);

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");
  const sortExitFirst = arr => [...arr.filter(c => c.status === "ipo" || c.status === "exited"), ...arr.filter(c => c.status !== "ipo" && c.status !== "exited")];
  const companies = filter === "vc" ? sortExitFirst([...PORTFOLIO.vc.sea, ...PORTFOLIO.vc.china])
                  : filter === "pe" ? sortExitFirst([...PORTFOLIO.pe.sea, ...PORTFOLIO.pe.china])
                  : sortExitFirst([...PORTFOLIO.vc.sea, ...PORTFOLIO.vc.china, ...PORTFOLIO.pe.sea, ...PORTFOLIO.pe.china]);
  return (
    <>
      <PageHeader label="Portfolio" title="Backing Bold Founders," subtitle="Transforming Industries" />
      <Section>
        <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
          {[{ k: "all", l: "All" }, { k: "vc", l: "Venture Capital" }, { k: "pe", l: "Private Equity" }].map(f => (
            <button key={f.k} onClick={() => setFilter(f.k)}
              style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, padding: "10px 22px", background: filter === f.k ? COLORS.crimson : "#FFF", color: filter === f.k ? "#FFF" : COLORS.darkGray, border: `1px solid ${filter === f.k ? COLORS.crimson : COLORS.border}`, borderRadius: 4, cursor: "pointer", textTransform: "uppercase" }}>
              {f.l}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {companies.map((c, i) => <PortfolioCard key={`${filter}-${i}`} company={c} />)}
        </div>
      </Section>
    </>
  );
};

const TeamPage = () => {
  const teamSection = (label, members, bg) => (
    <section style={{ padding: "32px clamp(16px, 5vw, 80px)", background: bg || "transparent", position: "relative" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <SectionLabel>{label}</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 180px))", gap: 16, marginTop: 16 }}>
          {members.map((m, i) => <TeamCard key={i} member={m} />)}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <PageHeader label="Our Team" title="Experienced Investors," subtitle="Regional Operators" />

      {/* Partners — slightly more prominent */}
      <section style={{ padding: "48px clamp(16px, 5vw, 80px)", background: "transparent" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <SectionLabel>Partners</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 200px))", gap: 16, marginTop: 16 }}>
            {TEAM.partners.map((m, i) => <TeamCard key={i} member={m} />)}
          </div>
        </div>
      </section>

      {teamSection("Investment Team — Venture Capital", TEAM.vcTeam, COLORS.warmGray)}
      {teamSection("Investment Team — Private Equity",  TEAM.peTeam)}
      {teamSection("Portfolio Monitoring & Value Creation", TEAM.portfolioVC, COLORS.warmGray)}
      {teamSection("Fundraising & Strategic Partnerships",  TEAM.fundraising)}
      {teamSection("Middle & Back Office", TEAM.operations, COLORS.warmGray)}

      {/* Testimonials */}
      <Section bg={COLORS.crimson}>
        <SectionLabel light>What Founders Say</SectionLabel>
        <SectionTitle light>Testimonials</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 36 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ padding: 28, background: "rgba(255,255,255,0.14)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.25)", transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 40, fontWeight: 800, color: "rgba(255,255,255,0.2)", lineHeight: 1, marginBottom: 12 }}>"</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#FFF", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 }}>{t.quote}</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#FFF", fontWeight: 700 }}>{t.name}</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{t.company}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};


const ContactPage = () => (
  <>
    <PageHeader label="Contact" title="Let's" subtitle="Connect" />
    <Section>
      <div style={{ maxWidth: 640, marginBottom: 56 }}>
        <SectionLabel>Get in Touch</SectionLabel>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "14px 0 40px" }}>Whether you're a founder, SME, or institutional investor — reach out directly. We respond within 2 business days.</p>
        <a href="mailto:enquiry@kairous.com" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 24px", background: "#FFF", border: `1.5px solid ${COLORS.crimson}`, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "all 0.25s ease", cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(153,27,27,0.15)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "#E8E4D9"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "#FFF"; }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: COLORS.crimson, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><rect x="0" y="0" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5" fill="none"/><path d="M0 3l10 7 10-7" stroke="white" strokeWidth="1.5"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>Email Us</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.nearBlack }}>enquiry@kairous.com</div>
            </div>
          </div>
        </a>
      </div>
      <div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 700, color: COLORS.crimson, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>All Offices</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
          {OFFICES.map((o, i) => (
            <div key={i} style={{ padding: "20px 24px", background: "#FFF", border: `1px solid ${COLORS.border}`, borderRadius: 6, transition: "background 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#E8E4D9"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#FFF"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack }}>{o.city}</div>
                {o.label && <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 9, color: COLORS.crimson, fontWeight: 700, textTransform: "uppercase", background: "rgba(153,27,27,0.08)", padding: "2px 6px", borderRadius: 2 }}>{o.label}</span>}
              </div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: COLORS.darkGray, lineHeight: 1.65 }}>{o.address}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </>
);

// ============================================================
// FOOTER
// ============================================================

const Footer = ({ navigate }) => (
  <footer style={{ background: COLORS.crimson, padding: "56px clamp(24px, 5vw, 80px) 28px" }}>
    <div style={{ maxWidth: 1140, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 28, marginBottom: 44 }}>
        <div>
          <img src={LOGO_SRC} alt="Kairous Capital" style={{ height: 32, objectFit: "contain", marginBottom: 18, filter: "brightness(0) invert(1)" }} />
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 300 }}>A regional PE and VC firm building high-growth businesses across SEA and China.</p>
          <div style={{ marginTop: 14, fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFF" }}>enquiry@kairous.com</div>
        </div>
        <div>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#F5F2EB", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Company</div>
          {[{ l: "About Us", p: PAGES.ABOUT }, { l: "Team", p: PAGES.TEAM }, { l: "Portfolio", p: PAGES.PORTFOLIO }, { l: "Media", p: PAGES.MEDIA }, { l: "Contact", p: PAGES.CONTACT }].map(({ l, p }, i) => (
            <div key={i} onClick={() => navigate(p)} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFF", marginBottom: 10, cursor: "pointer" }}>{l}</div>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#F5F2EB", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Strategies</div>
          <div onClick={() => navigate(PAGES.VC)} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFF", marginBottom: 10, cursor: "pointer" }}>Venture Capital</div>
          <div onClick={() => navigate(PAGES.PE)} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFF", marginBottom: 10, cursor: "pointer" }}>Private Equity</div>
        </div>
        <div>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#F5F2EB", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>Offices</div>
          {OFFICES.map((o, i) => <div key={i} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#FFF", marginBottom: 10 }}>{o.city} {o.label && <span style={{ fontSize: 10, color: "#F5F2EB" }}>({o.label})</span>}</div>)}
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 24 }}>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 10, fontWeight: 600 }}>© {new Date().getFullYear()} Kairous Capital Group. All Rights Reserved.</div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.8 }}>
          Kairous Capital Sdn Bhd (1110290-K) &nbsp;·&nbsp; Kairous Capital (HK) Limited (SFC: BHF112) &nbsp;·&nbsp; Kairous Capital (Singapore) Pte Ltd (CMS101210)
        </div>
      </div>
    </div>
  </footer>
);

// ============================================================
// APP
// ============================================================

function App() {
  const [displayPage, setDisplayPage] = useState(PAGES.HOME);
  const [transState, setTransState]   = useState("idle");
  const [scrolled, setScrolled]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Dynamic SEO: update <title> and meta description on page change ──
  useEffect(() => {
    const pageKey = Object.keys(PAGES).find(k => PAGES[k] === displayPage)?.toLowerCase() || "home";
    const seoKey = pageKey === "vc" ? "vc" : pageKey === "pe" ? "pe" : pageKey;
    const meta = SEO[seoKey] || SEO.home;
    document.title = meta.title;
    const desc = document.querySelector("meta[name='description']");
    if (desc) desc.setAttribute("content", meta.description);
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const ogDesc = document.querySelector("meta[property='og:description']");
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) ogUrl.setAttribute("content", `https://kairous.com/${pageKey === "home" ? "" : "#" + pageKey}`);
  }, [displayPage]);

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

  const pages = {
    [PAGES.HOME]:      <HomePage navigate={navigate} />,
    [PAGES.ABOUT]:     <AboutPage navigate={navigate} />,
    [PAGES.VC]:        <VCPage navigate={navigate} />,
    [PAGES.PE]:        <PEPage navigate={navigate} />,
    [PAGES.PORTFOLIO]: <PortfolioPage />,
    [PAGES.TEAM]:      <TeamPage />,
    [PAGES.MEDIA]:     <MediaPage />,
    [PAGES.CONTACT]:   <ContactPage />,
  };

  const transStyle =
    transState === "out" ? { opacity: 0, transform: "translateY(14px) scale(0.985)", filter: "blur(6px)", transition: "opacity 0.32s ease, transform 0.32s ease, filter 0.32s ease", pointerEvents: "none" } :
    transState === "in"  ? { opacity: 0, transform: "translateY(-10px) scale(0.99)", filter: "blur(4px)", transition: "none" } :
                           { opacity: 1, transform: "none", filter: "blur(0)", transition: "opacity 0.42s ease, transform 0.42s ease, filter 0.42s ease" };

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif", background: COLORS.cream, position: "relative", minHeight: "100vh" }}>
      <SEOHead page={displayPage} />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <Background />
      <Nav navigate={navigate} displayPage={displayPage} scrolled={scrolled} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ ...transStyle, willChange: "opacity, transform, filter" }}>
          {pages[displayPage]}
        </div>
        <Footer navigate={navigate} />
      </div>
      <style>{`* { margin: 0; padding: 0; box-sizing: border-box; } body { overflow-x: hidden; } ::selection { background: ${COLORS.crimson}; color: white; }`}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
