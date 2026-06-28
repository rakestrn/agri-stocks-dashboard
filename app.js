/* ============================================================
   AG TRACK — FOOD & AGRICULTURE 2026 YTD DASHBOARD
   Data sourced from Perplexity Finance Tools
   ============================================================ */

// ─── STOCK DATA ───────────────────────────────────────────────
const STOCKS = [
  {
    ticker: 'CF',
    name: 'CF Industries',
    fullName: 'CF Industries Holdings, Inc.',
    sector: 'Nitrogen Fertilizer',
    start: 80.13, end: 112.35,
    price: 112.35, mktCap: 17.26, pe: 10.12, eps: 11.10, divYield: 0.02,
    yearLow: 75.42, yearHigh: 141.96,
    color: '#3fb950',
    drivers: [
      'Middle East supply shock — Iran-U.S. tensions effectively closed Strait of Hormuz, disrupting regional nitrogen exports',
      'North America is insulated from disruptions as the continent\'s largest nitrogen producer, gaining pricing power',
      'U.S. corn planting high in 2026; India urea stocks ~35% lower YoY, boosting global demand',
      '$1.7B returned to shareholders in 2025; Blue Point low-carbon ammonia JV (JERA/Mitsui) targeting 2029 production',
    ],
    risks: 'Yazoo City Complex outage expected through Q4 2026; natural gas cost volatility (spike to $7.72/MMBtu in Jan 2026).',
  },
  {
    ticker: 'ADM',
    name: 'Archer-Daniels-Midland',
    fullName: 'Archer-Daniels-Midland Company',
    sector: 'Agri Processing',
    start: 59.05, end: 79.78,
    price: 79.78, mktCap: 38.45, pe: 35.62, eps: 2.24, divYield: 0.03,
    yearLow: 46.81, yearHigh: 83.10,
    color: '#e3b341',
    drivers: [
      'Oilseed market tightening — Barclays lifted price target to $77 on April 1 citing improved crush margins',
      'FY2026 EPS guidance of $3.60–$4.25 driven by soy crush margin expansion and operating savings',
      'Recovery from prior accounting review overhang; management credibility restored through consistent execution',
      'South American crop uncertainty boosted U.S.-origin crush demand and ADM\'s North American processing complex',
    ],
    risks: 'Elevated P/E (35.6×) implies high expectations. Trade policy shifts could crimp export demand from China.',
  },
  {
    ticker: 'BG',
    name: 'Bunge Global',
    fullName: 'Bunge Global S.A.',
    sector: 'Agri Commodities',
    start: 92.64, end: 123.30,
    price: 123.30, mktCap: 23.92, pe: 32.36, eps: 3.81, divYield: 0.02,
    yearLow: 71.60, yearHigh: 133.93,
    color: '#58a6ff',
    drivers: [
      'Viterra acquisition synergies accelerating; combined entity now among the largest global agri-trading companies',
      'Strong soy processing margins globally, especially in Brazil and Argentina where crop conditions were solid',
      'Diversified origination and processing network provides natural hedge against regional supply disruptions',
      'Commodity trading revenue benefited from elevated price volatility across grains and oilseeds',
    ],
    risks: 'Integration execution risk on Viterra merger. Regulatory scrutiny in key markets (Canada, EU) remains ongoing.',
  },
  {
    ticker: 'DE',
    name: 'Deere & Company',
    fullName: 'Deere & Company',
    sector: 'Ag Equipment',
    start: 466.80, end: 542.18,
    price: 542.18, mktCap: 146.45, pe: 30.75, eps: 17.63, divYield: 0.01,
    yearLow: 433.00, yearHigh: 674.19,
    color: '#a371f7',
    drivers: [
      'AI-powered precision agriculture — embedded autonomy and variable-rate technology driving equipment upgrade cycle',
      'Dealer inventory normalization nearly complete; order book strengthening for FY2026 delivery',
      'Emerging markets demand (Brazil, India) providing incremental revenue streams as North America digests fleet',
      'JDLink telematics and recurring software subscription revenue increasingly visible in margin profile',
    ],
    risks: 'North American farmer income pressure from weak commodity prices may delay equipment purchases into 2027.',
  },
  {
    ticker: 'CTVA',
    name: 'Corteva',
    fullName: 'Corteva, Inc.',
    sector: 'Seeds & Crop Protection',
    start: 67.76, end: 78.28,
    price: 78.28, mktCap: 52.36, pe: 41.87, eps: 1.87, divYield: 0.01,
    yearLow: 60.53, yearHigh: 85.63,
    color: '#ffa657',
    drivers: [
      'Planned separation into Seeds and Crop Protection units in Q4 2026 to unlock focused capital allocation and valuation',
      'EBITDA reached $3.9B in 2025 (+14% YoY) with $2.9B cash flow; FY2026 guidance calls for ~7% EBITDA growth',
      'Proprietary seed genetics and trait technology allow premium pricing power even as crop prices remain weak',
      'Royalty economics expected to turn neutral in 2026, eliminating a material headwind vs. prior years',
    ],
    risks: 'Crop price weakness dampening farmer discretionary spend. Separation execution timeline could slip.',
  },
  {
    ticker: 'NTR',
    name: 'Nutrien',
    fullName: 'Nutrien Ltd.',
    sector: 'Crop Nutrients',
    start: 63.16, end: 68.55,
    price: 68.55, mktCap: 32.98, pe: 13.96, eps: 4.91, divYield: 0.03,
    yearLow: 53.03, yearHigh: 85.36,
    color: '#39d353',
    drivers: [
      'Potash supply tightening globally as Belarusian exports remain structurally constrained',
      'Retail network providing resilient cash flows in North America despite fertilizer price softness in H1',
      '2025 earnings of $2.30B influenced by strong retail volumes; upstream leverage to any potash price recovery',
      'UBS upgraded price target (but to Sell from Neutral), acknowledging 19% YTD rise — indicating broad recognition',
    ],
    risks: 'UBS Sell rating signals caution; flat potash price forecast for remainder of 2026. Retail margin compression.',
  },
  {
    ticker: 'SFM',
    name: 'Sprouts Farmers Market',
    fullName: 'Sprouts Farmers Market, Inc.',
    sector: 'Specialty Grocery',
    start: 80.64, end: 82.62,
    price: 82.62, mktCap: 7.77, pe: 15.86, eps: 5.21, divYield: 0,
    yearLow: 64.75, yearHigh: 182,
    color: '#7ee787',
    drivers: [
      'FY2025 net sales $8.8B (+14% YoY); comp store growth of 7.3% in 2025 before lapping headwinds in 2026',
      '40+ new store openings planned for 2026; executed 105+ leases for future pipeline, underpinning long-term growth',
      'Private label (Sprouts brand) >26% of sales and growing; e-commerce +10% YoY to 16% of total',
      'Structural tailwind: premium natural/organic grocery gaining share from conventional grocers',
    ],
    risks: 'Comp store sales -1.7% in Q1 2026; SG&A deleverage and shrinkage issues. Stock well below $182 52-week high.',
  },
  {
    ticker: 'MOS',
    name: 'Mosaic Company',
    fullName: 'The Mosaic Company',
    sector: 'Potash & Phosphate',
    start: 25.02, end: 23.90,
    price: 23.90, mktCap: 7.60, pe: 170.75, eps: 0.14, divYield: 0.04,
    yearLow: 20.89, yearHigh: 38.23,
    color: '#f78166',
    drivers: [
      'Potash prices remain suppressed; sulfur and ammonia input cost pressures limit margin recovery',
      'Net income improved 16% in operating earnings to $277M, but overall profit remains thin',
      'UBS downgraded to Neutral on March 26 citing ongoing phosphate oversupply from China and Morocco',
    ],
    risks: 'Phosphate price weakness structural, not cyclical. Input cost headwinds remain. P/E near 171× on depressed earnings.',
  },
  {
    ticker: 'FMC',
    name: 'FMC Corporation',
    fullName: 'FMC Corporation',
    sector: 'Crop Protection',
    start: 14.34, end: 13.66,
    price: 13.66, mktCap: 1.71, pe: null, eps: -19.71, divYield: 0.10,
    yearLow: 12.17, yearHigh: 44.78,
    color: '#ff7b72',
    drivers: [
      'Ongoing channel destocking in global crop protection markets pressuring volumes and pricing',
      'Negative EPS reflects impairments and restructuring; dividend yield elevated at 10% as stock declined',
      'Regulatory headwinds in key EU markets; generic competition eroding branded herbicide margins',
    ],
    risks: 'Balance sheet stress; dividend sustainability at risk. No clear catalyst for volume recovery until mid-2027.',
  },
  {
    ticker: 'FDP',
    name: 'Fresh Del Monte',
    fullName: 'Fresh Del Monte Produce Inc.',
    sector: 'Fresh Produce',
    start: 35.32, end: 32.14,
    price: 32.14, mktCap: 1.53, pe: 22.17, eps: 1.45, divYield: 0.04,
    yearLow: 31.68, yearHigh: 43.58,
    color: '#d2a8ff',
    drivers: [
      'Revenue down 4.9% YoY in latest quarter; elevated freight and logistics costs squeezing margins',
      'Q1 2026 EPS of $0.63 — only marginally beat $0.62 estimate, showing limited earnings power',
      'Banana and pineapple pricing pressure from competition; limited pricing leverage with retailers',
    ],
    risks: 'Structural headwinds from retail grocery consolidation. Volatile ocean freight costs are a persistent margin risk.',
  },
];

// Sort by YTD desc
STOCKS.forEach(s => { s.ytd = (s.end - s.start) / s.start * 100; });
const sorted = [...STOCKS].sort((a, b) => b.ytd - a.ytd);

// ─── HELPERS ─────────────────────────────────────────────────
function fmtPct(v, sign = true) {
  const s = sign && v > 0 ? '+' : '';
  return `${s}${v.toFixed(1)}%`;
}
function fmtPrice(v) { return `$${v.toFixed(2)}`; }
function fmtCap(v) { return v >= 100 ? `$${(v).toFixed(0)}B` : `$${v.toFixed(1)}B`; }
function pctClass(v) { return v > 0 ? 'pos' : v < 0 ? 'neg' : 'neu'; }

// ─── CHART.JS DEFAULTS ────────────────────────────────────────
function getThemeColors() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  return {
    text: dark ? '#e6edf3' : '#1f2328',
    muted: dark ? '#8b949e' : '#636c76',
    grid: dark ? 'rgba(48,54,61,0.6)' : 'rgba(208,215,222,0.6)',
    surface: dark ? '#161b22' : '#ffffff',
  };
}

function chartDefaults() {
  const c = getThemeColors();
  Chart.defaults.color = c.muted;
  Chart.defaults.borderColor = c.grid;
  Chart.defaults.font.family = "'DM Mono', 'Courier New', monospace";
  Chart.defaults.font.size = 11;
}
chartDefaults();

// ─── SECTION NAV ─────────────────────────────────────────────
function showSection(id, btn) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  btn.classList.add('active');
}

// ─── LEADERBOARD ─────────────────────────────────────────────
function buildLeaderboard() {
  const el = document.getElementById('leaderboard');
  const maxAbs = Math.max(...sorted.map(s => Math.abs(s.ytd)));
  sorted.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'lb-row';
    const barW = Math.round(Math.abs(s.ytd) / maxAbs * 100);
    const cls = pctClass(s.ytd);
    row.innerHTML = `
      <span class="lb-rank">${i + 1}</span>
      <span class="lb-ticker">${s.ticker}</span>
      <span class="lb-name">${s.name}</span>
      <div class="lb-bar-wrap">
        <div class="lb-bar" style="width:0%;background:var(--color-${cls === 'pos' ? 'positive' : cls === 'neg' ? 'negative' : 'neutral'})" data-w="${barW}%"></div>
      </div>
      <span class="lb-pct ${cls}">${fmtPct(s.ytd)}</span>
    `;
    el.appendChild(row);
  });
  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.lb-bar').forEach(b => { b.style.width = b.dataset.w; });
  }, 100);
}

// ─── YTD BAR CHART ───────────────────────────────────────────
function buildYTDBar() {
  const labels = sorted.map(s => s.ticker);
  const values = sorted.map(s => parseFloat(s.ytd.toFixed(1)));
  const colors = sorted.map(s => s.ytd >= 0 ? 'rgba(63,185,80,0.85)' : 'rgba(248,81,73,0.85)');
  const borders = sorted.map(s => s.ytd >= 0 ? '#3fb950' : '#f85149');
  const c = getThemeColors();

  new Chart(document.getElementById('ytdBarChart'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'YTD %',
        data: values,
        backgroundColor: colors,
        borderColor: borders,
        borderWidth: 1.5,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${fmtPct(ctx.raw)}`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: c.muted, font: { size: 11 } },
        },
        y: {
          grid: { color: c.grid },
          ticks: {
            color: c.muted,
            callback: v => fmtPct(v),
          },
          border: { display: false }
        }
      }
    }
  });
}

// ─── HEATMAP ─────────────────────────────────────────────────
function buildHeatmap() {
  const el = document.getElementById('heatmap');
  const max = Math.max(...sorted.map(s => Math.abs(s.ytd)));
  sorted.forEach(s => {
    const intensity = Math.abs(s.ytd) / max;
    let bg, clr;
    if (s.ytd > 0) {
      const g = Math.round(80 + intensity * 105);
      bg = `rgba(63,${g},80,${0.15 + intensity * 0.45})`;
      clr = s.ytd > 20 ? '#e6edf3' : '#3fb950';
    } else {
      const r = Math.round(180 + intensity * 68);
      bg = `rgba(${r},81,73,${0.15 + intensity * 0.45})`;
      clr = '#f85149';
    }
    const cell = document.createElement('div');
    cell.className = 'heat-cell';
    cell.style.background = bg;
    cell.style.color = clr;
    cell.innerHTML = `
      <span class="heat-ticker">${s.ticker}</span>
      <span class="heat-name">${s.sector}</span>
      <span class="heat-pct">${fmtPct(s.ytd)}</span>
    `;
    el.appendChild(cell);
  });
}

// ─── INDEXED LINE CHART ──────────────────────────────────────
const WEEKLY_DATA = {
  dates: ['Jan 2','Jan 9','Jan 16','Jan 23','Jan 30','Feb 6','Feb 13','Feb 20','Feb 27','Mar 6','Mar 13','Mar 20','Mar 27','Apr 3','Apr 10','Apr 17','Apr 24','May 1','May 8','May 15','May 22','May 29'],
  CF:   [80.13,82.60,86.75,92.38,93.23,92.64,94.66,97.18,99.54,115.78,129.57,124.90,136.45,129.97,121.32,112.68,120.93,122.69,115.02,125.24,121.70,112.35],
  CTVA: [67.76,68.65,69.64,71.70,72.80,72.60,75.03,76.31,80.12,76.96,79.21,77.33,81.99,85.46,83.83,80.34,79.80,80.85,81.13,82.21,79.56,78.28],
  NTR:  [63.16,59.82,66.38,70.88,68.89,68.61,70.81,71.20,75.07,76.21,82.85,74.73,75.65,75.47,73.75,70.62,71.57,75.22,68.33,71.56,70.13,68.55],
  ADM:  [59.05,61.94,65.18,67.51,67.31,66.33,69.51,67.88,69.04,67.44,71.98,66.17,72.23,73.83,69.73,67.04,69.23,74.94,77.66,80.40,77.52,79.78],
  DE:   [466.80,488.08,514.40,514.43,528,583.11,602.92,662.49,629.71,589.77,577.50,559.73,566.64,575.71,605,590.46,562.64,577.26,574.84,561.83,529.15,542.18],
  BG:   [92.64,99.99,107.81,113.60,113.88,115.86,122.53,121.95,120.65,116.67,124.73,118.15,128.72,129.42,123.92,119.26,124.90,124.61,124.94,122.45,120.71,123.30],
  SFM:  [80.64,77.20,78.59,71.44,70.91,67.32,68.96,67.48,73.87,80.25,82.06,81.80,77.40,77.54,77.17,74.15,72.96,81.19,82.83,85.51,86.71,82.62],
  FMC:  [14.34,15.20,15.35,16.28,15.80,14.76,14.34,14.62,14.74,14.04,14.04,13.09,15.76,17.75,17.45,17.17,14.88,14.82,13.40,14.17,13.11,13.66],
  MOS:  [25.02,25.98,26.35,28.79,27.50,28.60,29.65,29.43,27.84,26.31,29.31,23.59,25,26.17,24.76,24.57,24,23.15,22.19,21.76,22.51,23.90],
  FDP:  [35.32,36.01,36.94,38.12,39.66,38.47,40.45,41.45,42.93,42.60,41.38,39.83,41.91,41.25,41.94,42.01,41.85,41.34,36.81,32.49,33.29,32.14],
};

// Rebase to 100
function rebase(arr) { const base = arr[0]; return arr.map(v => (v / base) * 100); }

const LINE_FILTERS = {
  all: ['CF','ADM','BG','DE','CTVA','NTR','SFM','MOS','FMC','FDP'],
  top3: ['CF','ADM','BG'],
  fertilizer: ['CF','NTR','MOS'],
  processing: ['ADM','BG'],
};

let lineChart = null;

function buildIndexedLine(filter = 'all') {
  const tickers = LINE_FILTERS[filter];
  const datasets = tickers.map(t => {
    const stock = STOCKS.find(s => s.ticker === t);
    return {
      label: t,
      data: rebase(WEEKLY_DATA[t]),
      borderColor: stock.color,
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
      tension: 0.3,
    };
  });
  const c = getThemeColors();

  if (lineChart) { lineChart.destroy(); }
  lineChart = new Chart(document.getElementById('indexedLineChart'), {
    type: 'line',
    data: { labels: WEEKLY_DATA.dates, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 12, boxHeight: 2,
            color: c.muted,
            font: { size: 11 },
            padding: 16,
          }
        },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.raw.toFixed(1)} (${fmtPct(ctx.raw - 100)})`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: c.muted, maxRotation: 0, maxTicksLimit: 8 },
        },
        y: {
          grid: { color: c.grid },
          ticks: { color: c.muted, callback: v => v.toFixed(0) },
          border: { display: false }
        }
      }
    }
  });
}

function filterLines(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildIndexedLine(filter);
}

// ─── 52-WEEK RANGE TABLE ─────────────────────────────────────
function buildRangeTable() {
  const el = document.getElementById('rangeTable');
  const header = document.createElement('div');
  header.className = 'range-row range-row-header';
  header.style.display = 'grid';
  header.style.gridTemplateColumns = '60px 80px 80px 1fr 80px 80px';
  header.style.gap = '0.75rem';
  header.style.padding = '0 0.5rem 0.375rem';
  header.innerHTML = `<span>Ticker</span><span>52W Low</span><span>Current</span><span>Range</span><span></span><span>52W High</span>`;
  el.appendChild(header);

  sorted.forEach(s => {
    const row = document.createElement('div');
    row.className = 'range-row';
    row.style.gridTemplateColumns = '60px 80px 80px 1fr 80px 80px';
    const pct = (s.price - s.yearLow) / (s.yearHigh - s.yearLow) * 100;
    row.innerHTML = `
      <span class="range-ticker" style="color:${s.color}">${s.ticker}</span>
      <span class="range-price lo">${fmtPrice(s.yearLow)}</span>
      <span class="range-price cur">${fmtPrice(s.price)}</span>
      <div class="range-track-wrap">
        <div class="range-track-fill"></div>
        <div class="range-dot" style="left:${pct}%;background:${s.color}"></div>
      </div>
      <span></span>
      <span class="range-price hi">${fmtPrice(s.yearHigh)}</span>
    `;
    el.appendChild(row);
  });
}

// ─── PERFORMANCE DRIVERS ─────────────────────────────────────
function buildDrivers() {
  const el = document.getElementById('driversGrid');
  sorted.forEach(s => {
    const card = document.createElement('div');
    card.className = 'driver-card';
    const cls = pctClass(s.ytd);
    const driversHtml = s.drivers.map(d => `
      <div class="driver-item">
        <div class="driver-dot" style="background:${s.color}"></div>
        <span>${d}</span>
      </div>
    `).join('');
    card.innerHTML = `
      <div class="driver-header">
        <div class="driver-ticker">
          <span class="driver-ticker-badge" style="border-color:${s.color};color:${s.color}">${s.ticker}</span>
          <span class="driver-name-text">${s.name}</span>
        </div>
        <span class="driver-ytd-badge ${cls}">${fmtPct(s.ytd)}</span>
      </div>
      <div class="driver-sector">${s.sector}</div>
      <div class="driver-drivers">${driversHtml}</div>
      ${s.risks ? `<div class="driver-risks"><span class="risk-label">Risk</span>${s.risks}</div>` : ''}
    `;
    el.appendChild(card);
  });
}

// ─── FUNDAMENTALS TABLE ──────────────────────────────────────
function buildFundamentals() {
  const tbody = document.getElementById('fundamentalsBody');
  sorted.forEach(s => {
    const tr = document.createElement('tr');
    const cls = pctClass(s.ytd);
    const peStr = s.pe && s.pe > 0 ? s.pe.toFixed(1) + '×' : 'N/M';
    const epsStr = s.eps !== null ? (s.eps >= 0 ? `$${s.eps.toFixed(2)}` : `($${Math.abs(s.eps).toFixed(2)})`) : '—';
    const divStr = s.divYield > 0 ? `${(s.divYield * 100).toFixed(1)}%` : '—';
    tr.innerHTML = `
      <td>
        <div class="ticker-cell">
          <div class="color-dot" style="background:${s.color}"></div>
          <strong>${s.ticker}</strong>
        </div>
      </td>
      <td class="name-col">${s.name}</td>
      <td class="name-col">${s.sector}</td>
      <td class="num">${fmtPrice(s.price)}</td>
      <td class="num"><span class="ytd-chip ${cls}">${fmtPct(s.ytd)}</span></td>
      <td class="num">${fmtCap(s.mktCap)}</td>
      <td class="num">${peStr}</td>
      <td class="num">${epsStr}</td>
      <td class="num">${divStr}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ─── MKT CAP DOUGHNUT ────────────────────────────────────────
function buildMktCap() {
  const labels = sorted.map(s => s.ticker);
  const data = sorted.map(s => s.mktCap);
  const colors = sorted.map(s => s.color);
  const c = getThemeColors();

  new Chart(document.getElementById('mktCapChart'), {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors.map(c => c + 'cc'),
        borderColor: colors,
        borderWidth: 1.5,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: {
          position: 'right',
          labels: { color: c.muted, boxWidth: 10, font: { size: 10 }, padding: 8 }
        },
        tooltip: {
          callbacks: { label: ctx => ` ${ctx.label}: ${fmtCap(ctx.raw)}` }
        }
      }
    }
  });
}

// ─── P/E BAR ─────────────────────────────────────────────────
function buildPE() {
  const filtered = sorted.filter(s => s.pe && s.pe > 0 && s.pe < 200);
  const c = getThemeColors();

  new Chart(document.getElementById('peChart'), {
    type: 'bar',
    data: {
      labels: filtered.map(s => s.ticker),
      datasets: [{
        label: 'P/E',
        data: filtered.map(s => parseFloat(s.pe.toFixed(1))),
        backgroundColor: filtered.map(s => s.color + 'bb'),
        borderColor: filtered.map(s => s.color),
        borderWidth: 1.5,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` P/E: ${ctx.raw}×` } } },
      scales: {
        x: {
          grid: { color: c.grid },
          ticks: { color: c.muted, callback: v => v + '×' },
          border: { display: false }
        },
        y: {
          grid: { display: false },
          ticks: { color: c.muted },
        }
      }
    }
  });
}

// ─── THEME TOGGLE ────────────────────────────────────────────
document.querySelector('[data-theme-toggle]').addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-icon-moon').style.display = isDark ? 'none' : 'block';
  document.getElementById('theme-icon-sun').style.display = isDark ? 'block' : 'none';
  chartDefaults();
  // Rebuild charts on theme switch
  document.querySelectorAll('canvas').forEach(c => {
    const chartInst = Chart.getChart(c);
    if (chartInst) chartInst.destroy();
  });
  buildAllCharts();
});

function buildAllCharts() {
  buildYTDBar();
  buildIndexedLine('all');
  buildMktCap();
  buildPE();
}

// ─── INIT ────────────────────────────────────────────────────
buildLeaderboard();
buildHeatmap();
buildDrivers();
buildFundamentals();
buildRangeTable();
buildAllCharts();
