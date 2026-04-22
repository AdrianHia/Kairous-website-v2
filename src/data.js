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
    { name: "Hoang Phan",   role: "Senior Associate",    photo: "Hoang.png" },
  ],
  peTeam: [
    { name: "Randy Tan", role: "Investment Director", photo: "Randy_Tan.png" },
    { name: "Vinz Yap",  role: "Investment Manager",  photo: "Vinz.png" },
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
export const NEWS_DATA = [
  { id:1,  company:"Kairous Capital", category:"firm",      headline:"Cover story: Investing in cross-border ventures", description:"Feature profile on Kairous Capital and Managing Partner Joseph Lee, covering the firm's cross-border China–SEA investment thesis.", source:"The Edge Malaysia", date:"2020",     year:2020, month:null, url:"https://theedgemalaysia.com/article/cover-story-investing-crossborder-ventures" },
  { id:2,  company:"Kairous Capital", category:"firm",      headline:"Kairous Capital to establish Malaysia-China Digital Cooperation Council & RM1B development fund", description:"MoU signed at the Malaysia-China Business Forum in Beijing. Kairous co-establishes MCDCC and a RM1B tech development fund with Digital Way Group and China Silk Road Group.", source:"TechNode Global", date:"Apr 2023", year:2023, month:4, url:"https://technode.global/2023/04/04/kairous-capital-to-establish-malaysia-china-digital-cooperation-council-226m-fund-to-invest-in-tech-sectors-in-china-malaysia/" },
  { id:3,  company:"Kairous Capital", category:"firm",      headline:"Kairous Capital & Comcom International to establish first dual-currency RM1B Malaysia-China Digital & Green Development Fund", description:"Announced at the PIKOM Leadership Summit 2023. Kairous and Comcom International partner to launch Malaysia's first dual-currency digital and green development fund.", source:"MIDA / NST", date:"Nov 2023", year:2023, month:11, url:"https://www.mida.gov.my/mida-news/malaysia-china-economic-council-pikom-to-attract-rm100bil-investments/" },
  { id:4,  company:"Kairous Capital", category:"firm",      headline:"Kairous Capital backed by Jelawang Capital (Malaysia's National Fund-of-Funds) via Emerging Fund Managers' Programme", description:"Jelawang Capital, Malaysia's National Fund-of-Funds, backs Kairous Capital through its Emerging Fund Managers' Programme, validating KAVF II as part of Malaysia's institutional VC ecosystem.", source:"PRNewswire", date:"Mar 2026", year:2026, month:3, url:"https://www.prnewswire.com/apac/news-releases/malaysias-aonic-secures-usd-10-million-to-take-home-grown-drone-technology-global-302700759.html" },
  { id:5,  company:"iPayLinks",       category:"portfolio", headline:"iPayLinks expands into SEA, with Malaysia as maiden market", description:"China's leading cross-border payment platform makes its Southeast Asian debut, entering Malaysia as its first regional market.", source:"Digital News Asia", date:"Jul 2017", year:2017, month:7, url:"https://www.digitalnewsasia.com" },
  { id:6,  company:"iPayLinks",       category:"portfolio", headline:"Fintech firm iPayLinks raises hundreds of millions in Series B-1", description:"iPayLinks closes a major Series B-1 round led by Tencent and Legend Capital. iPayLinks operates cross-border payment infrastructure across 150+ countries.", source:"Yicai Global", date:"Mar 2018", year:2018, month:3, url:"https://tracxn.com/d/companies/ipaylinks/__1Y4pjXVx2OUasVaMuUSbcWWz44a_VyNN7KEUdEgrhL4" },
  { id:7,  company:"Intrepid",        category:"portfolio", headline:"Lazada alumni's Intrepid Group closes Series A to bring Chinese brands to SEA", description:"Kairous Capital leads Intrepid's Series A. The Singapore-based e-commerce services platform, founded by former Lazada executives, helps Chinese brands enter Southeast Asian marketplaces.", source:"TechNode", date:"Dec 2019", year:2019, month:12, url:"https://technode.com/2019/12/16/lazada-alumnis-intrepid-group-closes-series-a-to-bring-chinese-brands-to-sea/" },
  { id:8,  company:"Ritamix Global",  category:"portfolio", headline:"Ritamix Global Limited lists on Hong Kong Stock Exchange (HKEx: 1936)", description:"Kairous portfolio company Ritamix Global, Malaysia's leading animal feed additives manufacturer, achieves a successful IPO on the Hong Kong Stock Exchange.", source:"HKEx / Addleshaw Goddard", date:"2020", year:2020, month:null, url:"https://www.addleshawgoddard.com/en/news/2020/28th-hong-kong-listing-ritamix-group/", badge:"IPO" },
  { id:9,  company:"Pulsifi",         category:"portfolio", headline:"HR tech firm Pulsifi bags $1.8M in angel round to expand into Europe", description:"Kairous Capital invests in Pulsifi's angel round. The Singapore-based AI-powered people analytics platform uses the funding to expand into European markets.", source:"Tech in Asia", date:"Nov 2020", year:2020, month:11, url:"https://www.techinasia.com" },
  { id:10, company:"Ming Xin Leather",category:"portfolio", headline:"Mingxin Automotive Leather raises $146.3M IPO on Shanghai Stock Exchange (SSE: 605068)", description:"Kairous portfolio company Mingxin Automotive Leather, a tier-1 supplier of precision automotive interior materials, raises $146.3M in its Shanghai Stock Exchange IPO.", source:"Shanghai Stock Exchange", date:"Nov 2020", year:2020, month:11, url:"https://www.cbinsights.com/company/mingxin-automotive-leather/financials", badge:"IPO" },
  { id:11, company:"TechNode Global", category:"portfolio", headline:"Pan-Asia tech media TechNode Global raises US$1M from Kairous Capital, Nutty Capital Venture, and SPH Ventures", description:"TechNode Global, Asia's premier technology media and intelligence platform, closes a seed round led by Kairous Capital.", source:"PRNewswire", date:"Feb 2021", year:2021, month:2, url:"https://www.prnewswire.com/in/news-releases/pan-asia-tech-media-technode-global-raises-us-1m-from-kairous-capital-nutty-capital-venture-and-sph-ventures-829622706.html" },
  { id:12, company:"FastCo",          category:"portfolio", headline:"Singapore's FastCo raises $7.48M in Series A — Kairous Capital joins as new investor", description:"FastCo, operator of FastJobs and FastGig across Singapore, Malaysia, and the Philippines, closes a S$10.5M Series A. Kairous Capital and OSK Ventures join to support Malaysia expansion.", source:"TechNode Global", date:"Nov 2022", year:2022, month:11, url:"https://technode.global/2022/11/10/singapores-fastco-raises-7-48m-in-series-a-funding-expects-to-break-even-within-next-two-years/" },
  { id:13, company:"Intrepid",        category:"portfolio", headline:"UK's Ascential acquires Intrepid for up to $250M — Kairous Capital exit", description:"Kairous Capital achieves a landmark exit as UK-listed Ascential plc acquires Intrepid, Singapore's leading e-commerce services provider, for up to $250M.", source:"TechNode Global", date:"Jun 2022", year:2022, month:6, url:"https://technode.global/2022/06/30/uks-ascential-acquires-singapore-e-commerce-services-provider-intrepid-for-up-to-250m/", badge:"EXIT" },
  { id:14, company:"ORA Group",       category:"portfolio", headline:"Singaporean telehealth startup ORA nets $10M in Series A funding", description:"ORA Group closes a $10M Series A with Kairous Capital participating alongside TNB Aura, Antler, and Gobi Partners.", source:"MobiHealthNews", date:"May 2023", year:2023, month:5, url:"https://www.mobihealthnews.com/news/asia/singaporean-telehealth-startup-ora-nets-10m-series-funding" },
  { id:15, company:"ORA Group",       category:"portfolio", headline:"SG healthtech startup ORA secures fresh funding from Antler, TNB Aura, Kairous Capital", description:"DealStreetAsia confirms ORA Group's $8M equity funding from Antler, TNB Aura, and Kairous Capital, supporting expansion across Singapore, Malaysia, and the Philippines.", source:"DealStreetAsia", date:"May 2023", year:2023, month:5, url:"https://www.dealstreetasia.com/stories/ora-antler-tnb-aura-341879" },
  { id:16, company:"OMSE",            category:"portfolio", headline:"OMS Energy Technologies files for Nasdaq IPO (ticker: OMSE)", description:"Kairous portfolio company OMS Energy Technologies files with the SEC for a $32M Nasdaq IPO. The Singapore-based manufacturer counts Saudi Aramco as its largest client.", source:"Renaissance Capital", date:"Nov 2024", year:2024, month:11, url:"https://www.renaissancecapital.com/IPO-Center/News/107611/Singapore-based-oil-and-gas-equipment-maker-OMS-Energy-Technologies-files-f", badge:"IPO" },
  { id:17, company:"PangoCDP",        category:"portfolio", headline:"Vietnam's PangoCDP secures $1.5M seed funding led by Kairous Capital", description:"Kairous Capital leads PangoCDP's seed round. The Vietnam-based enterprise CDP connects businesses with consumers via social chat apps, serving 120+ enterprise clients including Coca-Cola and Highlands Coffee.", source:"TechNode Global", date:"Oct 2024", year:2024, month:10, url:"https://technode.global/2024/10/29/vietnams-pangocdp-secures-1-5m-seed-funding-led-by-kairous-capital-to-revolutionize-business-consumer-connections-via-social-chat-apps/" },
  { id:18, company:"PangoCDP",        category:"portfolio", headline:"Kairous Capital leads investment in Vietnamese B2B startup PangoCDP", description:"DealStreetAsia confirms Kairous Capital as lead investor in PangoCDP's $1.5M seed round, with CyberAgent Capital participating.", source:"DealStreetAsia", date:"Oct 2024", year:2024, month:10, url:"https://www.dealstreetasia.com/stories/kairous-capital-pangocdp-417665" },
  { id:19, company:"Coolmate",        category:"portfolio", headline:"Vietnam's Coolmate bags $6M Series B led by Vertex Ventures SEA & India", description:"Kairous Capital participates in Coolmate's $6M Series B. Vietnam's leading D2C men's fashion brand plans international expansion and omnichannel growth.", source:"TechNode Global", date:"Oct 2024", year:2024, month:10, url:"https://technode.global/2024/10/30/vietnams-coolmate-bags-6m-series-b-funding-led-by-vertex-ventures-sea-india/" },
  { id:20, company:"Pulsifi",         category:"portfolio", headline:"Pulsifi brings generative AI to its talent acquisition platform", description:"Kairous portfolio company Pulsifi launches science-backed generative AI features, providing deeper candidate insights for enterprise clients across 54 countries.", source:"Digital News Asia", date:"Apr 2024", year:2024, month:4, url:"https://www.digitalnewsasia.com/business/pulsifi-brings-generative-ai-its-talent-acquisition-platform" },
  { id:21, company:"Softinn",         category:"portfolio", headline:"Softinn officially awarded Malaysia Digital (MD) Status by MDEC", description:"Kairous portfolio company Softinn, the cloud-based PMS for independent hoteliers across SEA, receives Malaysia Digital Status from MDEC.", source:"Softinn / MDEC", date:"2024", year:2024, month:null, url:"https://page.mysoftinn.com/en" },
  { id:22, company:"HSS Holdings",    category:"portfolio", headline:"HSS Holdings Bhd eyes ACE Market listing — Kairous principals hold 23.5% pre-IPO stake", description:"Johor-based confectionery group HSS Holdings files draft prospectus with Bursa Malaysia for ACE Market listing. Essential Family Ventures (controlled by Joseph Lee and See Toh) holds 23.5% pre-IPO.", source:"The Edge Malaysia", date:"Oct 2025", year:2025, month:10, url:"https://theedgemalaysia.com/node/773528", badge:"IPO" },
  { id:23, company:"HSS Holdings",    category:"portfolio", headline:"Johor-based bakery group HSS Holdings seeks Bursa ACE Market listing", description:"HSS Holdings files its draft prospectus with Bursa Malaysia. FY2024 profit after tax rose 42.8% to RM7.8M on revenue of RM160.2M.", source:"The Star", date:"Oct 2025", year:2025, month:10, url:"https://www.thestar.com.my/business/business-news/2025/10/09/hss-holdings-eyes-ace-market-listing", badge:"IPO" },
  { id:24, company:"Mantayay",        category:"portfolio", headline:"Malaysia's Mantayay secures $5M Series A led by Kairous Capital", description:"Mantayay, Malaysia's leading creator-economy platform managing 4,000+ TikTok creators and generating 100M+ monthly views, raises $5M from Kairous Capital's KAVF II.", source:"TechNode Global", date:"Nov 2025", year:2025, month:11, url:"https://technode.global/2025/11/03/malaysias-mantayay-secures-5m-investment-led-by-kairous-capital/" },
  { id:25, company:"Mantayay",        category:"portfolio", headline:"Malaysian creator economy startup Mantayay raises US$5M Series A led by Kairous Capital", description:"Digital News Asia covers Mantayay's US$5M institutional funding. Mantayay's flagship IP 'Terpaling Menantu' has surpassed 300M cumulative views.", source:"Digital News Asia", date:"Nov 2025", year:2025, month:11, url:"https://www.digitalnewsasia.com/startups/malaysian-creator-economy-startup-mantayay-raises-us5mil-series-led-kairous-capital" },
  { id:26, company:"Coolmate",        category:"portfolio", headline:"Vietnam's Coolmate completes Series C led by Vertex Growth Fund — Kairous re-invests", description:"Kairous Capital continues as investor in Coolmate's Series C alongside Vertex Growth Fund (Temasek), Cool Japan Fund, and YoungOne CVC. Coolmate targets 30% international revenue by 2030.", source:"TechNode Global", date:"Nov 2025", year:2025, month:11, url:"https://technode.global/2025/11/04/vietnams-coolmate-completes-series-c-funding-round-led-by-vertex-growth-fund/" },
  { id:27, company:"EurewaX",         category:"portfolio", headline:"EurewaX unveils cross-border payment cloud platform at Singapore FinTech Festival; closes first-round financing led by Kairous", description:"EurewaX launches its modular full-stack solution at SFF 2025 and announces first-round financing co-led by Kairous, RUIFENG, and iPayLinks.", source:"PRNewswire", date:"Nov 2025", year:2025, month:11, url:"https://www.prnewswire.com/apac/news-releases/eurewax-unveils-cross-border-payment-cloud-platform-at-singapore-fintech-festival-targeting-growth-in-traditional-payment-markets-302612792.html" },
  { id:28, company:"EurewaX",         category:"portfolio", headline:"EurewaX launches full-stack cross-border payment solution for financial institutions", description:"Fintech Singapore covers EurewaX's modular payment platform debut, cutting cross-border settlement costs by ~30% for a Singapore agency client.", source:"Fintech Singapore", date:"Nov 2025", year:2025, month:11, url:"https://fintechnews.sg/121800/singapore-fintech-festival-2025/eurewax-full-stack-cross-border-payments/" },
  { id:29, company:"OMSE",            category:"portfolio", headline:"OMS Energy Technologies lists on Nasdaq (OMSE) at $9/share", description:"Kairous portfolio company OMS Energy Technologies successfully lists on Nasdaq Capital Market. The Singapore-based oil & gas equipment manufacturer generated $181M+ in revenue and counts Saudi Aramco as its largest client.", source:"Nasdaq / Renaissance Capital", date:"May 2025", year:2025, month:5, url:"https://www.renaissancecapital.com", badge:"IPO" },
  { id:30, company:"Aonic",           category:"portfolio", headline:"Malaysia's Aonic secures USD 10 million to take home-grown drone technology global", description:"Kairous Capital leads Aonic's $10M Series A. Malaysia's largest drone tech and precision agri-tech platform, profitable since 2023 with $60M+ annual revenue, expands to 15+ countries.", source:"PRNewswire", date:"Mar 2026", year:2026, month:3, url:"https://www.prnewswire.com/apac/news-releases/malaysias-aonic-secures-usd-10-million-to-take-home-grown-drone-technology-global-302700759.html" },
  { id:31, company:"Aonic",           category:"portfolio", headline:"Malaysia's drone tech firm Aonic secures $10M led by Kairous Capital", description:"DealStreetAsia covers Kairous Capital's $5M injection into Aonic, giving Kairous a 7.9% stake. Aonic records triple-digit CAGR since 2022 and operates 50+ service centres across Southeast Asia.", source:"DealStreetAsia", date:"Mar 2026", year:2026, month:3, url:"https://www.dealstreetasia.com/stories/aonic-kairous-capital-474521" },
  { id:32, company:"FastCo",          category:"portfolio", headline:"FastCo raises S$10.5M in Series A to accelerate regional growth", description:"AsiaTechDaily covers FastCo's extended Series A. FastCo's FastJobs and FastGig platforms serve 4.4M+ registered jobseekers across Singapore, Malaysia, and Philippines.", source:"AsiaTechDaily", date:"Nov 2022", year:2022, month:11, url:"https://asiatechdaily.com/fastco-raises-s10-5-million-in-series-a-funding-to-accelerate-growth-in-regional-market/" },
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
