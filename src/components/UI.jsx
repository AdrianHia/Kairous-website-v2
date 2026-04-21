// components/UI.jsx — Shared UI components
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, STATS } from "../data/constants";
import { useBreakpoint } from "./hooks";
import { LOGO_SRC } from "./Background";

// ============ UI COMPONENTS ============

function useScrollReveal() {
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
}

export const RedLine = ({ light }) => <div style={{ width: 40, height: 2, background: light ? "#FFFFFF" : COLORS.crimson, borderRadius: 1 }} />;
export export const SectionLabel = ({ children, light }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
    <RedLine light={light} />
    <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: light ? "#FFFFFF" : COLORS.crimson }}>{children}</span>
  </div>
);
export export const SectionTitle = ({ children, light }) => (
  <h2 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.2, color: light ? COLORS.white : COLORS.nearBlack, margin: 0 }}>{children}</h2>
);

export const Button = ({ children, variant = "primary", onClick, style: cs }) => {
  const [h, setH] = useState(false);
  const base = { fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", padding: "14px 32px", border: "none", borderRadius: 4, cursor: "pointer", transition: "all 0.25s ease", textTransform: "uppercase" };
  const v = {
    primary: { background: h ? COLORS.crimsonDark : COLORS.crimson, color: COLORS.white, transform: h ? "translateY(-1px)" : "none", boxShadow: h ? "0 6px 24px rgba(153,27,27,0.25)" : "0 2px 8px rgba(153,27,27,0.15)" },
    outline: { background: h ? "#DDD8CC" : "#FFFFFF", color: COLORS.crimson, border: `1.5px solid ${COLORS.crimson}` },
    outlineLight: { background: h ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.12)", color: COLORS.white, border: "1.5px solid #F5F5EB" },
  };
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ ...base, ...v[variant], ...cs }}>{children}</button>;
};

export const GradientDivider = () => (
  <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${COLORS.crimson}25, ${COLORS.crimson}40, ${COLORS.crimson}25, transparent)` }} />
);

export const Section = ({ children, bg = "transparent", style: s }) => (
  <section style={{ padding: "clamp(40px, 7vw, 100px) clamp(16px, 5vw, 80px)", background: bg, position: "relative", boxShadow: bg !== "transparent" && bg !== COLORS.crimson ? "0 4px 20px rgba(0,0,0,0.06)" : "none", ...s }}>
    <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 1 }}>{children}</div>
  </section>
);

export const AnimStat = ({ value, label }) => {
  const [ref, vis] = useScrollReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease", textAlign: "center", flex: "1 1 200px" }}>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, color: COLORS.crimson, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.mediumGray, marginTop: 8 }}>{label}</div>
    </div>
  );
};

export const PortfolioCard = ({ company }) => {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ padding: "28px 24px", background: "#FFFFFF", border: `1px solid ${h ? COLORS.crimson : COLORS.border}`, borderRadius: 6, transition: "all 0.3s ease", cursor: "pointer", transform: h ? "translateY(-3px)" : "none", boxShadow: h ? "0 12px 36px rgba(0,0,0,0.13), 0 2px 8px rgba(153,27,27,0.08)" : "0 2px 8px rgba(0,0,0,0.07)", position: "relative", overflow: "hidden" }}>
      {(company.status === "exited" || company.status === "ipo") && <div style={{ position: "absolute", top: 10, right: -30, background: company.status === "ipo" ? "#2E6B3E" : COLORS.crimson, color: COLORS.white, fontSize: 10, fontWeight: 700, padding: "3px 34px", transform: "rotate(45deg)", fontFamily: "'Open Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>{company.status === "ipo" ? "IPO" : "Exited"}</div>}
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{company.name}</div>
      <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.darkGray, lineHeight: 1.65 }}>{company.desc}</div>
      {company.url && <div style={{ marginTop: 14, fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: h ? COLORS.crimson : COLORS.mediumGray, transition: "color 0.2s" }}>{company.url} →</div>}
    </div>
  );
};

export const TeamCard = ({ member }) => {
  const [h, setH] = useState(false);
  const photo = member.photoKey ? TEAM_PHOTOS[member.photoKey] : null;
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: "#FFFFFF", borderRadius: 6, border: `1px solid ${COLORS.border}`, transition: "all 0.25s ease", boxShadow: h ? "0 12px 36px rgba(0,0,0,0.13), 0 2px 8px rgba(153,27,27,0.08)" : "0 2px 8px rgba(0,0,0,0.07)", borderBottom: h ? `3px solid ${COLORS.crimson}` : "3px solid transparent", overflow: "hidden" }}>
      <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: COLORS.snow, position: "relative" }}>
        {photo
          ? <img src={photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transition: "transform 0.4s ease", transform: h ? "scale(1.04)" : "scale(1)" }} />
          : <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: h ? COLORS.crimson : COLORS.snow, transition: "background 0.25s" }}>
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 28, fontWeight: 700, color: h ? COLORS.white : COLORS.crimson }}>{member.name.split(" ").map(n => n[0]).join("")}</span>
            </div>
        }
      </div>
      <div style={{ padding: "16px 18px 20px" }}>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 4 }}>{member.name}</div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.5 }}>{member.role}</div>
        {member.focus && <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.mediumGray, marginTop: 8, lineHeight: 1.55 }}>{member.focus}</div>}
      </div>
    </div>
  );
};

export const NavItem = ({ children, active, onClick, hasDropdown, dropdownItems, navigate }) => {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "relative" }}>
      <button onClick={onClick} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.03em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", color: active ? COLORS.crimson : h ? COLORS.crimson : COLORS.nearBlack, transition: "color 0.2s", padding: "8px 0", display: "flex", alignItems: "center", gap: 5 }}>
        {children}
        {hasDropdown && <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: h ? "rotate(180deg)" : "none" }}><path d="M1 1L5 5L9 1" stroke={active || h ? COLORS.crimson : COLORS.nearBlack} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </button>
      {hasDropdown && h && (
        <div style={{ position: "absolute", top: "100%", left: -12, minWidth: 200, background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 6, boxShadow: "0 8px 32px rgba(0,0,0,0.08)", padding: "8px 0", zIndex: 100 }}>
          {dropdownItems.map((item, i) => (
            <button key={i} onClick={() => navigate(item.page)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 20px", fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, color: COLORS.nearBlack, background: "none", border: "none", cursor: "pointer" }}
              onMouseEnter={e => { e.target.style.background = COLORS.crimsonSoft; e.target.style.color = COLORS.crimson; }}
              onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = COLORS.nearBlack; }}>{item.label}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export const TransparentLogo = ({ height = 40, invert = false }) => {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        // Remove near-white pixels (the background)
        if (r > 230 && g > 230 && b > 230) {
          d[i + 3] = 0;
        } else if (r > 200 && g > 200 && b > 200) {
          const br = 255 - (r + g + b) / 3;
          d[i + 3] = Math.min(255, Math.floor(br * 4));
        }
        // For footer: invert dark colors to white, keep reds
        if (invert && d[i + 3] > 0) {
          if (r < 80 && g < 80 && b < 80) {
            d[i] = 255; d[i + 1] = 255; d[i + 2] = 255;
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setReady(true);
    };
    img.src = LOGO_SRC;
  }, [invert]);

  return (
    <canvas ref={canvasRef} style={{
      height, width: "auto", display: "block",
      opacity: ready ? 1 : 0, transition: "opacity 0.3s",
    }} />
  );
};

export const PageHeader = ({ label, title, subtitle, description }) => (
  <section style={{ background: "#F5F2EB", padding: "clamp(100px, 11vw, 180px) clamp(16px, 5vw, 80px) clamp(40px, 7vw, 90px)", position: "relative", boxShadow: "0 6px 24px rgba(0,0,0,0.07)", zIndex: 2 }}>
    <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 1 }}>
      <SectionLabel>{label}</SectionLabel>
      <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(34px, 4.5vw, 56px)", fontWeight: 800, color: COLORS.nearBlack, lineHeight: 1.15, margin: "16px 0 20px", maxWidth: 700 }}>
        {title}<br /><span style={{ color: COLORS.crimson }}>{subtitle}</span>
      </h1>
      {description && <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 17, color: COLORS.darkGray, lineHeight: 1.7, maxWidth: 560 }}>{description}</p>}
    </div>
  </section>
);
