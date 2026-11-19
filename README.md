# Miguel Ballén — personal portfolio

Professional portfolio with selected production work, career history, public learning projects, credentials, and a downloadable CV.

Portfolio URL: [mballen-1.github.io/miguel-ballen-software-engineer](https://mballen-1.github.io/miguel-ballen-software-engineer/)

GitHub profile: [mballen-1](https://github.com/mballen-1)

![Ozzy](220px-BlackSabbath19720012200.sized.jpg)

## Stack
Buildless HTML, CSS, JavaScript and animated SVG. GitHub Pages serves the files directly; Jekyll is disabled with `.nojekyll`. The original Jekyll scaffold remains in Git history and in the repository for reference.

## Preview
Run `python3 -m http.server 8000` in the repository, then open http://localhost:8000/.

## Publish
Push the reviewed source to the branch configured under **Settings → Pages** (currently expected to be `master`, repository root). All asset paths are relative, so the site works under `/miguel-ballen-software-engineer/`.

## Maintain
- `index.html`: copy, links, career history and SVG illustration.
- `assets/style.css`: design, responsive layouts, reduced-motion behavior.
- `assets/main.js`: reveal animations, navigation and email-copy interaction.
- `assets/Miguel_Ballen_CV.pdf`: downloadable CV.

No build toolchain, cookies, analytics, API credentials or backend required. External fonts are loaded from Google Fonts with system fallbacks. Motion respects the visitor's reduced-motion preference.
