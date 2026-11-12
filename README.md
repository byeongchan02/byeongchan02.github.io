# Byeongchan Oh — Academic Website

A responsive, single-page academic research website, built with plain HTML, CSS, and JavaScript. No build tools, payment, database, or framework required.

## Preview locally

Double-click `index.html` to view in your browser. For a local web server, run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish for free with GitHub Pages

1. Sign into https://github.com and create a **public** repository named `<YOUR-GITHUB-USERNAME>.github.io`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the entire `assets` folder to the repository root (use **Add file → Upload files**).
3. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. Your site will be at `https://<YOUR-GITHUB-USERNAME>.github.io/` once the Pages deployment completes. See https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site if settings differ.

You can also use any repository name (e.g., `research-website`), in which case the address is typically `https://<USERNAME>.github.io/research-website/`.

## IMPORTANT — review before going public

This is a polished draft based on the information available. **Do not publish without checking these items:**

- **Publication titles:** Display titles are descriptive/shortened placeholders, **not verified exact bibliographic titles**. Replace with exact titles, authors, year, DOI, and paper links. Currently the right-arrow symbols beside publications are decoration, NOT paper links.
- **Your personal email:** Add your desired email to the contact section. Example:
  `<a href="mailto:YOUR_EMAIL">YOUR_EMAIL ↗</a>`
- **Academic links:** The Google Scholar, ORCID and GitHub links currently lead to those services' homepages, **not to your personal profiles**. Replace with your own profile URLs; delete entries you don't use.
- **CV PDF:** No source CV file was supplied for this build. The website provides a **Print / Save as PDF** button, which prints the website. If you want a dedicated CV download link, place your current PDF in `assets/` and add a link in the CV section such as:
  `<a href="assets/Byeongchan_Oh_CV.pdf" download>Download CV (PDF)</a>`
- **Education and dates:** Confirm degree titles, undergraduate minor, and graduation date. The current site says master's expected February 2027.
- **Research descriptions:** Confirm what may be publicly disclosed and ensure collaborative work is attributed accurately. No unpublished measurement data is shown.
- **Photo:** This design deliberately uses a custom SVG semiconductor illustration instead of inventing a portrait. Add a real photo later if preferred.

## Editing

- Most page text and links: `index.html`
- Colors, fonts, and layout: `styles.css` (edit variables at the top)
- Mobile navigation, current-year footer, print button: `script.js`
- Favicon: `assets/favicon.svg`

**Colors:** off-white `#f7f7f3`, forest green `#18382f`, muted green `#739988`, copper `#b87553`.

Google Fonts are requested online for typography; if offline, the site automatically uses installed system fonts. All other assets are local. The layout is mobile responsive and supports reduced-motion settings.
