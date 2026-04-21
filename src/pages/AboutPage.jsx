// pages/AboutPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, OFFICES, STATS } from "../data/constants";
import { RedLine, SectionLabel, SectionTitle, Button, Section, AnimStat,
         PortfolioCard, TeamCard, NavItem, PageHeader, GradientDivider, TransparentLogo } from "../components/UI";

export const AboutPage = ({ navigate }) => (
  <>
    <PageHeader label="About Us" title="Bridging ASEAN, China" subtitle="and Beyond" />
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
        <div>
          <SectionLabel>Our Story</SectionLabel><SectionTitle>From Venture to Multi-Strategy</SectionTitle>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "20px 0" }}>Kairous Capital was founded in 2015 with a thesis that the most compelling investment opportunities in Asia exist at the intersection of Southeast Asia and China.</p>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8 }}>Today, we manage over USD 200 million in AUM with a proven track record of IPOs, M&A, and trade exits.</p>
        </div>
        <div>
          <SectionLabel>Regional Footprint</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 16 }}>
            {OFFICES.map((o, i) => (
              <div key={i} style={{ padding: 22, background: "#FFFFFF", borderRadius: 6, border: `1px solid ${COLORS.border}` }}>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 17, fontWeight: 700, color: COLORS.nearBlack }}>{o.city} {o.label && <span style={{ fontSize: 10, color: COLORS.crimson, fontWeight: 700, marginLeft: 6 }}>{o.label}</span>}</div>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.mediumGray, marginTop: 6, lineHeight: 1.5 }}>{o.address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
    <Section bg="#EDE9E1">
      <SectionLabel>Accreditations</SectionLabel><SectionTitle>Regulated Across Key Markets</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 36 }}>
        {[
          { m: "Malaysia", l: "Private Equity Management Corporation (PEMC)", lic: "Licence No. FO0044/17", reg: "Securities Commission Malaysia" },
          { m: "Singapore", l: "Venture Capital Fund Manager (VCFM)", lic: "Licence No. CMS101210", reg: "Monetary Authority of Singapore (MAS)" },
          { m: "Hong Kong", l: "Licensed Corporation — Type 9 Asset Management", lic: "SFC Licence No. BHF112", reg: "Securities & Futures Commission (SFC)" },
        ].map((a, i) => (
          <div key={i} style={{ padding: 28, background: "#FFFFFF", borderRadius: 6, border: `1px solid ${COLORS.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 10, fontWeight: 700, color: COLORS.crimson, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>{a.reg}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.nearBlack, marginBottom: 8 }}>{a.m}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.darkGray, lineHeight: 1.65, marginBottom: 10 }}>{a.l}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, fontWeight: 700, color: COLORS.mediumGray, letterSpacing: "0.05em", padding: "5px 10px", background: "#F5F2EB", borderRadius: 3, display: "inline-block" }}>{a.lic}</div>
          </div>
        ))}
      </div>
    </Section>
    <Section>
      <SectionLabel>Investment Focus</SectionLabel><SectionTitle>Where We Invest</SectionTitle>
      <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "16px 0 32px", maxWidth: 560 }}>Sector-agnostic investors focused on tech-powered businesses.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {["Fintech", "Insurtech", "E-commerce", "Digital Health", "Edutech", "Big Data", "Deep Tech", "Sustainability", "Retail", "Manufacturing", "Healthcare"].map((s, i) => (
          <span key={i} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 600, padding: "9px 18px", borderRadius: 4, border: `1px solid ${COLORS.border}`, color: COLORS.darkGray, background: "#FFFFFF" }}>{s}</span>
        ))}
      </div>
    </Section>
  </>
);
