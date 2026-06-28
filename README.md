# Food & Agriculture Equities — 2026 YTD Performance Dashboard

This repository contains the standalone client-side dashboard for tracking food and agriculture stock performance (Year-to-Date 2026). It is built as a lightweight, interactive frontend page using vanilla HTML5, CSS3, and JavaScript, leveraging Chart.js for data visualization.

This dashboard is also integrated into the Next.js personal website project (`ryanrakestraw-website`) under the `/dashboards/agri-stocks` route.

---

## 📂 Repository Contents

- **`index.html`**: Structured HTML5 document containing the UI grid, sidebar, and chart target elements.
- **`app.js`**: Core dashboard logic, timeseries price datasets, and Chart.js configuration.
- **`style.css`**: Dark/light theme design system tokens (forest greens and harvest ambers) and visual layouts.
- **`preview-dark.png` / `preview-light.png` / `preview-fundamentals.png` / `preview-drivers.png`**: High-fidelity design preview screenshots.
- **`TOOLS.md`**: Symbolic link to system environment settings.
- **`.gitignore`**: Excludes system and temporary zip files from git commits.

---

## 🛠️ Local Development & Running

Since this is a client-only static webpage using ES modules and external fonts/libraries:

1. **Prerequisites**: A web browser.
2. **Execution**:
   Open `index.html` directly in your browser. Alternatively, serve the folder with a simple HTTP server to ensure ES module assets resolve correctly:
   ```bash
   # Using Python
   python3 -m http.server 8000

   # Or using Node (npx)
   npx serve .
   ```
   Navigate to `http://localhost:8000` (or the specified port) in your web browser.

---

## 📈 Dashboard Features

1. **Overview Dashboard Tab**:
   - **Key Performance Indicators (KPIs)** highlighting top performers, positive sector counts, sub-sector trends, and laggards.
   - **YTD Return Bar Chart**: Visualization of all covered agricultural stocks.
   - **Leaderboard**: Real-time rank sorting by year-to-date return.
   - **Sector Performance Heatmap**: Heat map representation of performance intensity by sub-sector category.
2. **Price Performance Tab**:
   - **Indexed Price Chart**: Line chart rebased to 100 on January 2, 2026, comparing multiple stocks over the YTD period.
   - **Interactive Segment Filters**: Filter line curves by sub-sector (e.g., Fertilizers, Agri Processors, Top 3, or All).
3. **Performance Drivers Tab**:
   - **Detailed Driver Cards**: Granular tracking of supply-demand dynamics, geopolitical drivers (e.g. Strait of Hormuz conflict nitrogen impacts), and core risks for all 10 covered equities.
4. **Fundamentals Tab**:
   - **Financial Metrics Table**: Detailed records of Price, YTD Return, Market Capitalization, EPS, P/E Ratio, and Dividend Yield.
   - **Valuation Visuals**: Horizontal bar charts comparing P/E multiples and doughnut charts comparing Market Cap weight allocations.
5. **Theme Engine**: Support for dark/light themes via custom properties and Chart.js color overrides.

---

## 🔗 Website Integration Details

The dashboard has been ported and upgraded into your main React-based website at [ryanrakestraw-website](file:///Users/ryanrakestraw/dev/ryanrakestraw-website) using:
- **TypeScript** definitions for the datasets in `app/dashboards/agri-stocks/data/agri-stocks-data.ts`.
- **Recharts** for premium, fluid vector graphs (`BarChart`, `LineChart`, `PieChart`, `ResponsiveContainer`).
- **CSS Modules** in `agri-stocks.module.css` inheriting global brand tokens (e.g. custom properties).
- **Conditional Rendering** to optimize tab memory usage, resolve initial 0-width computation layout bugs, and ensure warning-free console outputs.
