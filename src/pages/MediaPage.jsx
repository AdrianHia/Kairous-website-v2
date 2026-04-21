// pages/MediaPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { COLORS, PAGES, OFFICES, STATS } from "../data/constants";
import { MEDIA_ARTICLES } from "../data/media";
import { COLORS } from "../data/constants";

export const ArticleCard = ({ article }) => (
  <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    <div style={{ border: `1px solid ${COLORS.border}`, borderRadius: 6, overflow: "hidden", cursor: "pointer", background: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", transition: "box-shadow 0.25s ease, transform 0.25s ease, background 0.2s ease", height: "100%" }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.13)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "#E8E4D9"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "#FFFFFF"; }}>
      <div style={{ height: 6, background: COLORS.crimson }} />
      <div style={{ padding: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.crimson, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{article.tag}</div>
          <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 11, color: COLORS.mediumGray }}>{article.source}</div>
        </div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, fontWeight: 700, color: COLORS.nearBlack, lineHeight: 1.45, marginBottom: 14 }}>{article.title}</div>
        <div style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 12, color: COLORS.mediumGray }}>{article.date}</div>
      </div>
    </div>
  </a>
);

export const MediaPage = () => {
  const INIT = 9, STEP = 6, MAX = 45;
  const [visible, setVisible] = useState(INIT);
  const shown = MEDIA_ARTICLES.slice(0, Math.min(visible, MAX, MEDIA_ARTICLES.length));
  const canLoadMore = visible < MAX && visible < MEDIA_ARTICLES.length;
  return (
    <>
      <PageHeader label="Media" title="News &" subtitle="Insights" />
      <Section>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 15, color: COLORS.darkGray, lineHeight: 1.8, maxWidth: 560, marginBottom: 36 }}>Latest investments, portfolio news, and market perspectives. Updated weekly.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {shown.map((article, i) => <ArticleCard key={i} article={article} />)}
        </div>
        {canLoadMore && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button onClick={() => setVisible(v => Math.min(v + STEP, MAX, MEDIA_ARTICLES.length))}
              style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, fontWeight: 700, padding: "14px 40px", background: "#FFFFFF", color: COLORS.crimson, border: `1.5px solid ${COLORS.crimson}`, borderRadius: 4, cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase", transition: "background 0.2s ease, box-shadow 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#DDD8CC"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(153,27,27,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.boxShadow = "none"; }}>
              Load More
            </button>
          </div>
        )}
      </Section>
    </>
  );
};
