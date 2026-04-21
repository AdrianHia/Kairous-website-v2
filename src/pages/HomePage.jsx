// pages/HomePage.jsx
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, OFFICES, STATS } from "../data/constants";
import { RedLine, SectionLabel, SectionTitle, Button, Section, AnimStat,
         PortfolioCard, TeamCard, NavItem, PageHeader, GradientDivider, TransparentLogo } from "../components/UI";

export const HomePage = ({ navigate }) => {
  const [heroRef, heroVis] = useScrollReveal();
  return (
    <>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "clamp(24px, 5vw, 80px)", position: "relative" }}>
        <div ref={heroRef} style={{ maxWidth: 1140, margin: "0 auto", width: "100%", paddingTop: 80, position: "relative", zIndex: 1, opacity: heroVis ? 1 : 0, transform: heroVis ? "none" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <SectionLabel>Kairous Capital</SectionLabel>
          <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(38px, 5.5vw, 72px)", fontWeight: 800, color: COLORS.nearBlack, lineHeight: 1.1, margin: "20px 0 28px", maxWidth: 820, letterSpacing: "-0.02em" }}>
            Your Cross-Border<br /><span style={{ color: COLORS.crimson }}>Investment Partner</span>
          </h1>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "clamp(15px, 1.6vw, 18px)", color: COLORS.darkGray, lineHeight: 1.75, maxWidth: 580, margin: "0 0 40px" }}>
            Building and scaling high-growth businesses across Southeast Asia and China through venture capital, private equity, and cross-border value creation.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button onClick={() => navigate(PAGES.VC)}>Venture Capital</Button>
            <Button onClick={() => navigate(PAGES.PE)}>Private Equity</Button>
          </div>
        </div>
      </section>

      <section style={{ background: "#F5F2EB", padding: "52px clamp(24px, 5vw, 80px)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "center", rowGap: 24 }}>
          {STATS.map((s, i) => <AnimStat key={i} {...s} />)}
        </div>
      </section>

      <GradientDivider />

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <SectionTitle>A Regional Multi-Strategy Investment Platform</SectionTitle>
            <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "20px 0 28px" }}>
              Founded in 2015, Kairous Capital has evolved from an early-stage technology investor into a multi-strategy platform spanning venture capital and private equity. Headquartered in Kuala Lumpur with offices across Singapore, Shanghai, and Hong Kong, we deploy strategic capital alongside operational support to help companies scale across borders.
            </p>
            <Button variant="outline" onClick={() => navigate(PAGES.ABOUT)}>Learn More</Button>
          </div>
          <div style={{ background: "#FFFFFF", aspectRatio: "4/3", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.border}` }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 56, fontWeight: 800, color: COLORS.crimson, lineHeight: 1 }}>10</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: COLORS.mediumGray, marginTop: 8, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Years of Investing</div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="#EDE9E1">
        <SectionLabel>Our Strategies</SectionLabel>
        <SectionTitle>Two Strategies, One Platform</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 40 }}>
          {[
            { title: "Venture Capital", subtitle: "Series A and beyond", desc: "We invest in early-stage technology companies with unique cross-border potential — supporting SEA startups localising proven models from China.", ticket: "USD $1M – $5M", page: PAGES.VC },
            { title: "Private Equity", subtitle: "Growth & Pre-IPO", desc: "We partner with profitable SMEs to unlock scale through digital transformation, AI integration, and cross-border expansion.", ticket: "MYR 10M – 40M", page: PAGES.PE },
          ].map((s, i) => (
            <div key={i} onClick={() => navigate(s.page)} style={{ padding: 44, background: "#FFFFFF", borderRadius: 8, border: `1px solid ${COLORS.border}`, cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "box-shadow 0.3s ease, transform 0.3s ease" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 32px rgba(153,27,27,0.08)"} onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}>
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
          {[{ n: "01", t: "Cross-Border Expertise", d: "A decade of experience connecting Southeast Asia and China — bridging capital, networks, and know-how across borders." }, { n: "02", t: "Technology Specialist", d: "Deep sector expertise in fintech, digital health, e-commerce, and enterprise tech to drive portfolio transformation." }, { n: "03", t: "Exit Readiness", d: "Disciplined positioning for IPO, M&A, or trade exits — with a track record of successful liquidity events." }].map((item, i) => (
            <div key={i} style={{ padding: 28, background: "rgba(255,255,255,0.14)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.25)", boxShadow: "0 4px 16px rgba(0,0,0,0.2)", transition: "box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 28, fontWeight: 800, color: "rgba(255,255,255,0.2)", marginBottom: 14 }}>{item.n}</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.white, fontWeight: 700, marginBottom: 8 }}>{item.t}</div>
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
