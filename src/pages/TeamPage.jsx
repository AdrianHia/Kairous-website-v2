// pages/TeamPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, OFFICES, STATS } from "../data/constants";
import { TEAM_DATA } from "../data/team";
import { RedLine, SectionLabel, SectionTitle, Button, Section, AnimStat,
         PortfolioCard, TeamCard, NavItem, PageHeader, GradientDivider, TransparentLogo } from "../components/UI";

export const TeamPage = () => (
  <>
    <PageHeader label="Our Team" title="Experienced Investors," subtitle="Regional Operators" />
    <Section futuristic gridId="tm">
      <SectionLabel>Partners</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 200px))", gap: 16, marginTop: 20 }}>
        {TEAM_DATA.partners.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>
    </Section>
    <Section bg="#EDE9E1">
      <SectionLabel>Investment Team (Venture Capital)</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 180px))", gap: 16, marginTop: 20 }}>
        {TEAM_DATA.vcTeam.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>
      <div style={{ marginTop: 48 }}>
        <SectionLabel>Investment Team (Private Equity)</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 180px))", gap: 16, marginTop: 20 }}>
          {TEAM_DATA.peTeam.map((m, i) => <TeamCard key={i} member={m} />)}
        </div>
      </div>
    </Section>
    <Section>
      <SectionLabel>Portfolio Monitoring & Value Creation</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 180px))", gap: 16, marginTop: 20 }}>
        {TEAM_DATA.portfolioVC.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>
      <div style={{ marginTop: 48 }}>
        <SectionLabel>Fundraising & Strategic Partnerships</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 180px))", gap: 16, marginTop: 20 }}>
          {TEAM_DATA.fundraising.map((m, i) => <TeamCard key={i} member={m} />)}
        </div>
      </div>
    </Section>
    <Section bg="#EDE9E1">
      <SectionLabel>Middle & Back Office</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 200px))", gap: 16, marginTop: 20 }}>
        {TEAM_DATA.operations.map((m, i) => <TeamCard key={i} member={m} />)}
      </div>
    </Section>
    <Section bg={COLORS.crimson}>
      <SectionLabel light>What Founders Say</SectionLabel><SectionTitle light>Testimonials</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 36 }}>
        {[{ name: "Jasper Knoben", co: "Intrepid", q: "Supported us since Series A — expanding partnerships across SEA and China." }, { name: "Gunther Zhen", co: "iPayLinks", q: "Not just a financial investor, but a value creator on the ground." }, { name: "Julian Tan", co: "FastCo", q: "Sharpened our go-to-market and strengthened expansion in Malaysia." }].map((t, i) => (
          <div key={i} style={{ padding: 28, background: "rgba(255,255,255,0.14)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.25)", boxShadow: "0 4px 16px rgba(0,0,0,0.2)", transition: "box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 40, fontWeight: 800, color: "rgba(255,255,255,0.2)", lineHeight: 1, marginBottom: 12 }}>"</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: "#FFFFFF", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20 }}>{t.q}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: COLORS.white, fontWeight: 700 }}>{t.name}</div>
            <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: "#F5F2EB" }}>{t.co}</div>
          </div>
        ))}
      </div>
    </Section>
  </>
);
