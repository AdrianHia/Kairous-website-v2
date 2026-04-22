// ============================================================
// KAIROUS CAPITAL — DATA FILE
// Edit this file to update content: portfolio, team, media,
// office info, colors, and page text.
// No coding knowledge needed — just update the text values.
// ============================================================

// ─── Brand Colors ─────────────────────────────────────────────────────────────
// Change these to update the site's color scheme globally.
export const COLORS = {
  white:        "#FFFFFF",
  snow:         "#F8F6F4",
  cream:        "#F5F2EB",
  warmGray:     "#EDE9E1",
  border:       "#C8C4BE",
  mediumGray:   "#8A857F",
  darkGray:     "#605B56",
  nearBlack:    "#2E2A27",
  crimson:      "#991B1B",
  crimsonDark:  "#7F1D1D",
  crimsonSoft:  "rgba(153, 27, 27, 0.08)",
};

// ─── Site Pages ───────────────────────────────────────────────────────────────
export const PAGES = {
  HOME: "home", ABOUT: "about", VC: "vc", PE: "pe",
  PORTFOLIO: "portfolio", TEAM: "team", MEDIA: "media", CONTACT: "contact",
};

// ─── Stats Bar (Home Page) ────────────────────────────────────────────────────
export const STATS = [
  { value: "20+", label: "Portfolio Companies" },
  { value: "5",   label: "Funds Managed" },
  { value: "5+",  label: "Successful Exits" },
];

// ─── Office Locations ─────────────────────────────────────────────────────────
export const OFFICES = [
  { city: "Kuala Lumpur", label: "HQ", address: "Oval Tower @ Damansara, No. 685, Jalan Damansara, 60000 TTDI" },
  { city: "Singapore",    label: "",   address: "255A Jalan Besar, Singapore 208928" },
  { city: "Shanghai",     label: "",   address: "4F, Room 412, Lianfeihui Building, 315 Guangyuan West Road, Xuhui District" },
  { city: "Hong Kong",    label: "",   address: "11th Floor, Bel Trade Commercial Building, Burrows St, Wan Chai" },
];

// ─── Portfolio Companies ──────────────────────────────────────────────────────
// status: "active" | "exited" | "ipo"
export const PORTFOLIO = {
  vc: {
    sea: [
      { name: "Intrepid",       desc: "Cross-border e-commerce infrastructure connecting brands and consumers across Southeast Asia",                    url: "intrepid.asia",    status: "exited" },
      { name: "Coolmate",       desc: "Vietnam's leading quality-first D2C men's fashion brand, redefining how men shop online",                        url: "coolmate.me",      status: "active" },
      { name: "FastCo",         desc: "SEA's flexible workforce platform connecting businesses with on-demand professional talent",                      url: "fastco.asia",      status: "active" },
      { name: "Pulsifi",        desc: "AI-powered people analytics platform predicting talent fit and organisational performance",                       url: "pulsifi.me",       status: "active" },
      { name: "mySoftinn",      desc: "Cloud-based property management system purpose-built for independent hoteliers across SEA",                      url: "mysoftinn.com",    status: "active" },
      { name: "TechNode Global",desc: "Asia's premier technology media and intelligence platform connecting the innovation ecosystem",                   url: "technode.global",  status: "active" },
      { name: "ORA Group",      desc: "Integrated digital health and personal care platform serving consumers across Southeast Asia",                    url: "ora.group",        status: "active" },
      { name: "PangoCDP",       desc: "Enterprise customer data platform enabling Vietnamese businesses to unify and activate customer intelligence",    url: "pangocdp.com",     status: "active" },
      { name: "Playnovate",     desc: "STEAM education platform delivering hands-on innovation programmes to schools across the region",                url: "playnovate.com",   status: "active" },
      { name: "Mantayay",       desc: "Creator commerce platform turning social influence into scalable, measurable revenue for brands",                 url: "mantayay.com",     status: "active" },
      { name: "Eurewax",        desc: "Cross-border payment infrastructure enabling seamless multi-currency transactions for global businesses",         url: "eurewax.com",      status: "active" },
      { name: "Aonic",          desc: "Malaysia's largest drone technology and precision agri-tech platform with deployments across SEA",               url: "aonic.com",        status: "active" },
    ],
    china: [
      { name: "iPayLinks",      desc: "Global payment gateway enabling Chinese businesses to collect and disburse funds across 100+ markets",            url: "ipaylinks.com",    status: "active" },
      { name: "SkinRun",        desc: "AI-driven personalised skincare platform matching consumers to precision-formulated products at scale",           url: "skinrun.me",       status: "active" },
      { name: "CareLinker",     desc: "China's largest digital chronic disease management network connecting patients with specialised care",             url: "carelinker.com",   status: "active" },
      { name: "DaSureBao",      desc: "Digital insurance platform delivering accessible healthcare protection to China's blue-collar workforce",          url: "dasurebao.com",    status: "active" },
      { name: "MEOW Pharmacy",  desc: "Omnichannel pet healthcare platform providing premium veterinary products and services across China",             url: "",                 status: "active" },
    ],
  },
  pe: {
    sea: [
      { name: "Ritamix Global", desc: "Integrated animal nutrition manufacturer producing precision feed additives and supplements for global markets",   url: "ritamix-global.com", status: "ipo" },
      { name: "OMSE",           desc: "Specialist engineering services provider delivering critical maintenance solutions to the oil and gas industry",   url: "omse.com",           status: "ipo" },
      { name: "HSS Food",       desc: "Malaysia's leading confectionery manufacturer with a portfolio of beloved consumer snack brands",                  url: "hssfood.my",         status: "active" },
      { name: "Cilantro",       desc: "Premium culinary and vocational training institution developing world-class food and hospitality professionals",   url: "cilantro.edu.my",    status: "active" },
      { name: "Ajinoriki",      desc: "Certified halal seasoning and MSG manufacturer supplying global food producers with premium flavour solutions",    url: "aji-no-riki.com.my", status: "active" },
    ],
    china: [
      { name: "Ming Xin Leather", desc: "Tier-1 automotive leather supplier crafting precision interior components for leading global car manufacturers", url: "mingxinleather.com", status: "ipo" },
    ],
  },
};

// ─── Team Members ─────────────────────────────────────────────────────────────
export const TEAM = {
  partners: [
    { name: "Joseph Lee",       role: "Managing Partner",  photo: "Joseph_Lee.png" },
    { name: "See Toh Kean Yaw", role: "Founding Partner",  photo: "See_Toh.png" },
    { name: "Adrian Hia",       role: "Partner",           photo: "Adrian_Hia.png" },
    { name: "Wang Ti",          role: "Partner",           photo: "Wang_Ti.png" },
  ],
  vcTeam: [
    { name: "Lee Teng Hau", role: "Investment Director", photo: "Teng_Hau.png" },
    { name: "Wong Xi Rong", role: "Investment Manager",  photo: "Xi_Rong.png" },
    { name: "Hoang Phan",    role: "Senior Associate",    photo: "Hoang.png" },
  ],
  peTeam: [
    { name: "Randy Tan",     role: "Investment Director", photo: "Randy_Tan.png" },
    { name: "Vinz Yap",      role: "Investment Manager",  photo: "Vinz.png" },
  ],
  portfolioVC: [
    { name: "Siow Khin Shen",  role: "Portfolio Monitoring & Value Creation Manager", photo: "Khin_Shen.png" },
  ],
  fundraising: [
    { name: "Johnson Lee",  role: "Fundraising & Strategic Partnerships Manager",   photo: "Johnson_Lee.png" },
    { name: "Aqilah Anuar", role: "Fundraising & Strategic Partnerships Associate", photo: "Aqilah.png" },
  ],
  operations: [
    { name: "Liang Tsae Yann", role: "Finance & Operations Director" },
    { name: "Min Ling",        role: "Fund Admin & Compliance Officer", photo: "Min_Ling.png" },
    { name: "Anna Puah",       role: "Senior Accountant",                      photo: "Anna_Puah.png" },
    { name: "How Sook Hoay",   role: "Account Payable & Treasury Specialist",  photo: "How.png" },
    { name: "Roziana Samin",   role: "Office Operation Executive",              photo: "Rozi.png" },
  ],
};

// ─── Media Articles ───────────────────────────────────────────────────────────
// Add new articles at the TOP of this list.
export const MEDIA_ARTICLES = [
  { tag: "Investment",      title: "Malaysia's drone tech firm Aonic secures $10M led by Kairous Capital",                 date: "Mar 2026", source: "DealStreetAsia",   url: "https://www.dealstreetasia.com/stories/aonic-kairous-capital-474521" },
  { tag: "Investment",      title: "Aonic secures $10M to expand global drone tech innovation",                            date: "Mar 2026", source: "Ventureburn",       url: "https://ventureburn.com/aonic-secures-10m-to-expand-global-drone-tech-innovation/" },
  { tag: "Market Insights", title: "Kairous Capital weighed for Jelawang Capital's second EMP cohort",                    date: "Mar 2026", source: "The Edge Malaysia",  url: "https://theedgemalaysia.com/node/793978" },
  { tag: "Investment",      title: "Malaysia's Mantayay Global bags $5M funding led by Kairous Capital",                  date: "Nov 2025", source: "DealStreetAsia",    url: "https://www.dealstreetasia.com/stories/mantayay-global-kairous-capital-461934" },
  { tag: "Investment",      title: "Mantayay raises US$5M — Kairous Capital backs creator economy push",                  date: "Nov 2025", source: "The Edge Malaysia",  url: "https://theedgemalaysia.com/node/777830" },
  { tag: "Investment",      title: "Vietnam's D2C fashion brand Coolmate closes Series C with Kairous Capital",           date: "Nov 2025", source: "DealStreetAsia",    url: "https://www.dealstreetasia.com/stories/sea-digest-coolmate-venteny-461896" },
  { tag: "Market Insights", title: "Cover story: Kairous Capital selected under Jelawang Capital's EMP programme",        date: "Aug 2025", source: "The Edge Malaysia",  url: "https://theedgemalaysia.com/node/764414" },
  { tag: "Market Insights", title: "VCs shift focus to Southeast Asia as global uncertainty deepens",                      date: "Jul 2025", source: "The Edge Malaysia",  url: "https://theedgemalaysia.com/node/762200" },
  { tag: "Market Insights", title: "Kairous Capital selected under Jelawang Capital's Emerging Fund Managers' Programme", date: "Jun 2025", source: "The Edge Malaysia",  url: "https://theedgemalaysia.com/node/760145" },
  { tag: "Market Insights", title: "Playbook: Kairous Capital on connecting China to Southeast Asia",                      date: "May 2025", source: "The Edge Malaysia",  url: "https://theedgemalaysia.com/node/754696" },
  { tag: "Market Insights", title: "Malaysian VC firm Kairous Capital bets big on Vietnam",                               date: "Nov 2024", source: "DealStreetAsia",    url: "https://www.dealstreetasia.com/stories/kairous-capital-vietnam-418434" },
  { tag: "Investment",      title: "Vertex Ventures leads $6M investment in Vietnamese D2C startup Coolmate",             date: "Nov 2024", source: "DealStreetAsia",    url: "https://www.dealstreetasia.com/stories/vertex-ventures-backs-coolmate-417775" },
  { tag: "Investment",      title: "Kairous Capital leads investment in Vietnamese B2B startup PangoCDP",                 date: "Oct 2024", source: "DealStreetAsia",    url: "https://www.dealstreetasia.com/stories/kairous-capital-pangocdp-417665" },
];

// ─── VC Funds ─────────────────────────────────────────────────────────────────
export const VC_FUNDS = [
  { name: "Kairous Asia Venture Fund",    status: "Fully Deployed", vintage: "2017", geo: "China, Southeast Asia", sectors: ["E-commerce", "Fintech", "Digital Health", "Edutech"] },
  { name: "Kairous Asia Venture Fund II", status: "Deploying",      vintage: "2024", geo: "Southeast Asia",        sectors: ["E-commerce", "Fintech", "Digital Health", "Edutech"] },
  { name: "Healthcare Fund",              status: "Active",          vintage: "2025", geo: "China",                 sectors: ["Medical Tech", "Health Services", "Pet Care"] },
];

// ─── PE Funds ─────────────────────────────────────────────────────────────────
export const PE_FUNDS = [
  { name: "SME Transformation Fund I",  status: "Fully Deployed", vintage: "2024", geo: "Malaysia", sectors: ["Retail", "E-commerce", "Sustainability Tech"] },
  { name: "SME Transformation Fund II", status: "Deploying",      vintage: "2025", geo: "Malaysia", sectors: ["Retail", "Big Data", "Deep Tech", "Digital Health", "Edutech", "Sustainability Tech"] },
];

// ─── Sector Tags (About page) ─────────────────────────────────────────────────
export const SECTORS = [
  "Fintech", "Insurtech", "E-commerce", "Digital Health", "Edutech",
  "Big Data", "Deep Tech", "Sustainability", "Retail", "Manufacturing", "Healthcare",
];

// ─── Accreditations (About page) ─────────────────────────────────────────────
export const ACCREDITATIONS = [
  { market: "Malaysia",  licence: "Private Equity Management Corporation (PEMC)", licNo: "FO0044/17",  regulator: "Securities Commission Malaysia" },
  { market: "Singapore", licence: "Venture Capital Fund Manager (VCFM)",          licNo: "CMS101210",  regulator: "Monetary Authority of Singapore (MAS)" },
  { market: "Hong Kong", licence: "Licensed Corporation — Type 9 Asset Management", licNo: "BHF112",   regulator: "Securities & Futures Commission (SFC)" },
];

// ─── Testimonials (Team page) ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  { name: "Jasper Knoben", company: "Intrepid",  quote: "Supported us since Series A — expanding partnerships across SEA and China." },
  { name: "Gunther Zhen",  company: "iPayLinks", quote: "Not just a financial investor, but a value creator on the ground." },
  { name: "Julian Tan",    company: "FastCo",    quote: "Sharpened our go-to-market and strengthened expansion in Malaysia." },
];

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const SEO = {
  home:      { title: "Kairous Capital | Cross-Border PE & VC Fund — Malaysia, SEA & China",             description: "Kairous Capital is a leading cross-border PE and VC firm headquartered in Malaysia, investing across Southeast Asia and China. Managing USD 200M+ AUM across 6 funds.",                                                      keywords: "Kairous Capital, venture capital Malaysia, private equity Southeast Asia, cross-border investment" },
  about:     { title: "About Kairous Capital | Regional PE/VC Firm with China-SEA Expertise",            description: "Founded in 2015, Kairous Capital bridges Southeast Asia and Greater China through strategic capital, cross-border networks, and hands-on value creation.",                                                                    keywords: "about Kairous Capital, Joseph Lee, VC firm Malaysia, cross-border investment firm" },
  vc:        { title: "Venture Capital | Kairous Capital — Series A to C in SEA & China",               description: "Kairous Capital's VC strategy targets early-stage technology companies at Series A and beyond across fintech, digital health, e-commerce and edutech.",                                                                      keywords: "venture capital Malaysia, Series A SEA, fintech VC, digital health investment" },
  pe:        { title: "Private Equity | Kairous Capital — SME Transformation Fund Malaysia",             description: "Kairous Capital's PE strategy partners with profitable Malaysian SMEs to unlock scale through technology adoption and cross-border expansion.",                                                                              keywords: "private equity Malaysia, SME fund Malaysia, PE fund ASEAN" },
  portfolio: { title: "Portfolio | Kairous Capital — Investments Across SEA & China",                    description: "Explore Kairous Capital's portfolio of 20+ companies spanning fintech, digital health, e-commerce, drone tech, and manufacturing across Southeast Asia and China.",                                                          keywords: "Kairous Capital portfolio, Aonic, Coolmate, Mantayay, PangoCDP, Pulsifi" },
  team:      { title: "Team | Kairous Capital — Partners & Investment Professionals",                    description: "Meet the Kairous Capital team — experienced investment professionals with deep expertise in cross-border PE/VC across Asia.",                                                                                                 keywords: "Kairous Capital team, Joseph Lee, Adrian Hia, See Toh Kean Yaw" },
  media:     { title: "Media & News | Kairous Capital",                                                  description: "Latest news, investment announcements and market insights from Kairous Capital.",                                                                                                                                             keywords: "Kairous Capital news, VC news Malaysia, Aonic funding, Mantayay Series A" },
  contact:   { title: "Contact Kairous Capital | KL, Singapore, Shanghai, Hong Kong",                    description: "Get in touch with Kairous Capital. Offices in Kuala Lumpur, Singapore, Shanghai and Hong Kong.",                                                                                                                            keywords: "contact Kairous Capital, enquiry Kairous" },
};
