// pages/PortfolioPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, OFFICES, STATS } from "../data/constants";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { RedLine, SectionLabel, SectionTitle, Button, Section, AnimStat,
         PortfolioCard, TeamCard, NavItem, PageHeader, GradientDivider, TransparentLogo } from "../components/UI";

export const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");
  const sortExitedFirst = arr => [...arr.filter(c => c.status === "ipo" || c.status === "exited"), ...arr.filter(c => c.status !== "exited" && c.status !== "ipo")];
  const get = () => { if (filter === "vc") return sortExitedFirst([...PORTFOLIO_DATA.vc.sea, ...PORTFOLIO_DATA.vc.china]); if (filter === "pe") return sortExitedFirst([...PORTFOLIO_DATA.pe.sea, ...PORTFOLIO_DATA.pe.china]); return sortExitedFirst([...PORTFOLIO_DATA.vc.sea, ...PORTFOLIO_DATA.vc.china, ...PORTFOLIO_DATA.pe.sea, ...PORTFOLIO_DATA.pe.china]); };
  return (
    <><PageHeader label="Portfolio" title="Backing Bold Founders," subtitle="Transforming Industries" />
      <Section>
        <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
          {[{ k: "all", l: "All" }, { k: "vc", l: "Venture Capital" }, { k: "pe", l: "Private Equity" }].map(f => (
            <button key={f.k} onClick={() => setFilter(f.k)} style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, padding: "10px 22px", background: filter === f.k ? COLORS.crimson : "#FFFFFF", color: filter === f.k ? COLORS.white : COLORS.darkGray, border: `1px solid ${filter === f.k ? COLORS.crimson : COLORS.border}`, borderRadius: 4, cursor: "pointer", textTransform: "uppercase" }}>{f.l}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {get().map((c, i) => <PortfolioCard key={`${filter}-${i}`} company={c} />)}
        </div>
      </Section>
    </>
  );
};
