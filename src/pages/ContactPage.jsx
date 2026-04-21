// pages/ContactPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, OFFICES, STATS } from "../data/constants";
import { RedLine, SectionLabel, SectionTitle, Button, Section, AnimStat,
         PortfolioCard, TeamCard, NavItem, PageHeader, GradientDivider, TransparentLogo } from "../components/UI";

export const ContactPage = () => (
  <>
    <PageHeader label="Contact" title="Let's" subtitle="Connect" />
    <Section>
      <div style={{ maxWidth: 640 }}>
        <SectionLabel>Get in Touch</SectionLabel>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, margin: "14px 0 40px" }}>Whether you're a founder, SME, or institutional investor — reach out to us directly. We respond within 2 business days.</p>
        <a href="mailto:enquiry@kairous.com" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 24px", background: "#FFFFFF", border: `1.5px solid ${COLORS.crimson}`, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "box-shadow 0.25s ease, transform 0.25s ease, background 0.2s ease", cursor: "pointer", marginBottom: 48 }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(153,27,27,0.15)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "#E8E4D9"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "#FFFFFF"; }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: COLORS.crimson, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><rect x="0" y="0" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5" fill="none"/><path d="M0 3l10 7 10-7" stroke="white" strokeWidth="1.5"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>Email Us</div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.nearBlack }}>enquiry@kairous.com</div>
            </div>
          </div>
        </a>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: COLORS.mediumGray, marginBottom: 4 }}>Headquarters</div>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.nearBlack, lineHeight: 1.7 }}>9-3, Oval Tower @ Damansara<br />No. 685, Jalan Damansara<br />60000 TTDI, Kuala Lumpur, Malaysia</div>
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, fontWeight: 700, color: COLORS.crimson, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>All Offices</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
          {OFFICES.map((o, i) => (
            <div key={i} style={{ padding: "20px 24px", background: "#FFFFFF", border: `1px solid ${COLORS.border}`, borderRadius: 6, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "box-shadow 0.2s ease, background 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)"; e.currentTarget.style.background = "#E8E4D9"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; e.currentTarget.style.background = "#FFFFFF"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack }}>{o.city}</div>
                {o.label && <span style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 9, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(153,27,27,0.08)", padding: "2px 6px", borderRadius: 2 }}>{o.label}</span>}
              </div>
              <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: COLORS.darkGray, lineHeight: 1.65 }}>{o.address}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </>
);
