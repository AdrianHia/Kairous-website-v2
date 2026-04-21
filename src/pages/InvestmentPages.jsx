// pages/InvestmentPages.jsx — Venture Capital + Private Equity pages
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, OFFICES, STATS } from "../data/constants";
import { RedLine, SectionLabel, SectionTitle, Button, Section, AnimStat,
         PortfolioCard, TeamCard, NavItem, PageHeader, GradientDivider, TransparentLogo } from "../components/UI";


export const VCPage = ({ navigate }) => (
  <>
    <PageHeader label="Venture Capital" title="Backing Bold Founders" subtitle="From Series A and beyond" description="Early-stage technology companies with cross-border potential across SEA and China." />
    <Section bg="#EDE9E1">
      <SectionLabel>Our Funds</SectionLabel><SectionTitle>Venture Capital Funds</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 28, alignItems: "start" }}>
        {[
          { name: "Kairous Asia Venture Fund", status: "Fully Deployed", vintage: "2017", geo: "China, Southeast Asia", sectors: ["E-commerce", "Fintech", "Digital Health", "Edutech"] },
          { name: "Kairous Asia Venture Fund II", status: "Deploying", vintage: "2024", geo: "Southeast Asia", sectors: ["E-commerce", "Fintech", "Digital Health", "Edutech"] },
          { name: "Healthcare Fund", status: "Active", vintage: "2025", geo: "China", sectors: ["Medical Tech", "Health Services", "Pet Care"] },
        ].map((fund, i) => (
          <div key={i} className="kc-card" style={{ padding: 28, background: "#FFFFFF", borderRadius: 6, border: `1px solid ${COLORS.border}`, borderTop: `3px solid ${COLORS.crimson}`, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "box-shadow 0.25s ease, transform 0.25s ease, background 0.2s ease" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.13)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "#E8E4D9"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "#FFFFFF"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", minHeight: 64, marginBottom: 16 }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, lineHeight: 1.4, flex: 1, paddingRight: 8 }}>{fund.name}</div>
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 8px", borderRadius: 3, background: fund.status === "Fully Deployed" ? COLORS.darkGray : COLORS.crimson, color: COLORS.white, whiteSpace: "nowrap", flexShrink: 0 }}>{fund.status}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18, minHeight: 56 }}>
              <div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Vintage</div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.nearBlack }}>{fund.vintage}</div></div>
              <div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Geography</div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.nearBlack }}>{fund.geo}</div></div>
            </div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Sector Focus</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {fund.sectors.map((s, j) => <span key={j} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, padding: "4px 10px", borderRadius: 3, background: "rgba(153,27,27,0.08)", color: COLORS.crimson, border: `1px solid rgba(153,27,27,0.15)`, fontWeight: 600 }}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
    <Section>
      <SectionLabel>Our Approach</SectionLabel><SectionTitle>More Than Capital</SectionTitle>
      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "20px 0 36px", maxWidth: 640 }}>Active, hands-on approach beyond funding — strategic guidance and regional scaling playbooks.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
        {[{ t: "Cross-Border Expansion", d: "Helping SEA startups localise Chinese models, and vice versa." }, { t: "Strategic Governance", d: "Board-level engagement, KPI frameworks, and mentorship." }, { t: "Network Access", d: "Connecting founders to LPs, co-investors, and strategic partners." }, { t: "Follow-On Commitment", d: "Capacity to follow on from Series A through Series C." }].map((item, i) => (
          <div key={i} style={{ padding: 24, background: "#FFFFFF", borderRadius: 6, border: `1px solid ${COLORS.border}` }}>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{item.t}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.darkGray, lineHeight: 1.7 }}>{item.d}</div>
          </div>
        ))}
      </div>
    </Section>
    <Section><div style={{ textAlign: "center" }}><SectionTitle>Have a Company We Should See?</SectionTitle><p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, margin: "14px auto 28px", maxWidth: 460 }}>Exceptional founders at the intersection of technology and impact.</p><Button onClick={() => navigate(PAGES.CONTACT)}>Submit Your Pitch</Button></div></Section>
  </>
);

export const PEPage = ({ navigate }) => (
  <>
    <PageHeader label="Private Equity" title="Transforming SMEs Into" subtitle="Regional Champions" description="Partnering with profitable SMEs to unlock scale through technology and cross-border expansion." />
    <Section bg="#EDE9E1">
      <SectionLabel>Our Funds</SectionLabel><SectionTitle>Private Equity Funds</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 28, alignItems: "start" }}>
        {[
          { name: "SME Transformation Fund I", status: "Fully Deployed", vintage: "2024", geo: "Malaysia", sectors: ["Retail", "E-commerce", "Sustainability Tech"] },
          { name: "SME Transformation Fund II", status: "Deploying", vintage: "2025", geo: "Malaysia", sectors: ["Retail", "Big Data", "Deep Tech", "Digital Health", "Edutech", "Sustainability Tech"] },
        ].map((fund, i) => (
          <div key={i} className="kc-card" style={{ padding: 32, background: "#FFFFFF", borderRadius: 6, border: `1px solid ${COLORS.border}`, borderTop: `3px solid ${COLORS.crimson}`, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "box-shadow 0.25s ease, transform 0.25s ease, background 0.2s ease" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.13)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "#E8E4D9"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "#FFFFFF"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", minHeight: 56, marginBottom: 20 }}>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 16, fontWeight: 700, color: COLORS.nearBlack, lineHeight: 1.4, flex: 1, paddingRight: 8 }}>{fund.name}</div>
              <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 8px", borderRadius: 3, background: fund.status === "Fully Deployed" ? COLORS.darkGray : COLORS.crimson, color: COLORS.white, whiteSpace: "nowrap", flexShrink: 0 }}>{fund.status}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20, minHeight: 56 }}>
              <div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Vintage</div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 600, color: COLORS.nearBlack }}>{fund.vintage}</div></div>
              <div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Geography</div><div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 600, color: COLORS.nearBlack }}>{fund.geo}</div></div>
            </div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Sector Focus</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {fund.sectors.map((s, j) => <span key={j} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, padding: "4px 10px", borderRadius: 3, background: "rgba(153,27,27,0.08)", color: COLORS.crimson, border: `1px solid rgba(153,27,27,0.15)`, fontWeight: 600 }}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
    <Section>
      <SectionLabel>Value Creation</SectionLabel><SectionTitle>Our Transformation Playbook</SectionTitle>
      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "20px 0 36px", maxWidth: 640 }}>Technology expertise and China access to drive SME transformation.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
        {[{ t: "Digital Transformation", d: "Automation, data analytics, and AI to modernise operations." }, { t: "Supply Chain Optimisation", d: "China networks to restructure procurement and distribution." }, { t: "Cross-Border Expansion", d: "Helping local champions scale into ASEAN markets." }, { t: "Exit Preparation", d: "Positioning for IPO, M&A, or trade sales." }].map((item, i) => (
          <div key={i} style={{ padding: 24, background: "#FFFFFF", borderRadius: 6, border: `1px solid ${COLORS.border}` }}>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{item.t}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.darkGray, lineHeight: 1.7 }}>{item.d}</div>
          </div>
        ))}
      </div>
    </Section>
    <Section><div style={{ textAlign: "center" }}><SectionTitle>Scaling Your Business?</SectionTitle><p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, margin: "14px auto 28px", maxWidth: 460 }}>Profitable SME ready for the next stage? Let's talk.</p><Button onClick={() => navigate(PAGES.CONTACT)}>Start a Conversation</Button></div></Section>
  </>
);
