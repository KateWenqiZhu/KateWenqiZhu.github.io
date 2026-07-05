# Kate Wenqi Zhu Website

Personal academic website for Kate Wenqi Zhu.

- Live site: <https://katewenqizhu.github.io/>
- Repository: <https://github.com/KateWenqiZhu/KateWenqiZhu.github.io>
- Framework: Jekyll, based on the `al-folio` academic theme
- Hosting: GitHub Pages

This README is the maintenance handover for the customized site. It replaces the original `al-folio` template README with notes specific to Kate's research profile, publications, talks, teaching, Application/Master Mind page, and Yeer daily companion module.

## Site Overview

The public navigation is currently organized as:

| Navigation | URL | Source |
| --- | --- | --- |
| About | `/` | `_pages/about.md` |
| Publications | `/publications/` | `_pages/publications.md`, `_bibliography/papers.bib` |
| Application | `/outreach/` | `_pages/outreach.md` |
| Awards | `/awards/` | `_pages/award.md` |
| Teaching | `/teaching/` | `_pages/teaching.md`, `_data/cv.yml` |
| Project | `/researches/` | `_pages/researches.md`, `_researches/` |
| Talks | `/talks/` | `_pages/talks.md` |
| CV | `/cv/` | `_pages/cv.md`, `_data/cv.yml` |

Note: the navigation label is `Application`, but the permalink is still `/outreach/`.

## Repository Structure

Important folders and files:

```text
_config.yml                 Main Jekyll site configuration
_pages/                     Public pages and page front matter
_news/                      Homepage news items
_bibliography/papers.bib    Publications database
_data/cv.yml                CV, education, teaching, awards data
_data/yeer_gallery.yml      Yeer gallery data
_includes/                  Reusable Liquid components
_layouts/                   Page and bibliography layouts
_sass/                      Theme and custom CSS
assets/img/                 Images used by pages
assets/img/application/     Master Mind / Application page assets
assets/img/yeer/            Yeer images and avatars
assets/pi/pi-1m.txt         Pi digits used by the Yeer fortune game
Gemfile                     Ruby/Jekyll dependencies
package.json                Prettier dependencies for Liquid formatting
```

## Local Development

Install Ruby and Bundler first, then run:

```powershell
bundle install
bundle exec jekyll serve
```

Open:

```text
http://127.0.0.1:4000/
```

If Jekyll complains about missing plugins, run `bundle install` again from the repository root.

Optional formatting setup:

```powershell
npm install
npx prettier . --check
```

On Kate's Codex machine, regular `git` or `python` may not be on PATH. The bundled Git path used in prior maintenance is:

```powershell
C:\Users\kates\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe
```

## Deployment

The site deploys through GitHub Pages.

Normal update flow:

```powershell
git status
git add <changed-files>
git commit -m "Describe the website update"
git push origin main
```

GitHub Actions builds the Jekyll site and publishes it to GitHub Pages. Check deployment at:

```text
https://github.com/KateWenqiZhu/KateWenqiZhu.github.io/actions
```

If the live page looks stale after deployment, force refresh or use a cache-busting URL:

```text
https://katewenqizhu.github.io/?v=<commit>
https://katewenqizhu.github.io/outreach/?v=<commit>
```

## Content Maintenance

### Biography

Edit:

```text
_pages/about.md
```

The About page front matter controls:

- profile image and role
- interests
- education / experience list
- Yeer image and text
- homepage news and selected publications toggles

The current biography describes Kate as a Postdoctoral Researcher at the Mathematical Institute, University of Oxford, working on AI in the Mathematical Foundations of AI under Prof. Jared Tanner.

### CV

Edit:

```text
_data/cv.yml
_pages/cv.md
```

Use `_data/cv.yml` for structured CV sections such as education, experience, teaching, awards, and service. Use `_pages/cv.md` for page-level text and layout.

### Publications

Edit:

```text
_pages/publications.md
_bibliography/papers.bib
```

The public `/publications/` page currently uses a hand-curated grouped list in `_pages/publications.md`. Keep `_bibliography/papers.bib` in sync because the homepage Featured Publications cards use BibTeX data.

Recommended entry pattern:

```bibtex
@article{key2026example,
  title={Example Title},
  description={Short website description.},
  status={Journal or status},
  author={A. Author and Wenqi Zhu},
  author_text={A. Author, <strong>Wenqi Zhu</strong>*},
  journal={Journal Name},
  pdf={https://...},
  pages={32 pp},
  abbr={Short Label},
  selected={false},
  year={2026}
}
```

Rules used by this site:

- Keep `author={...}` clean BibTeX, with authors separated by `and`.
- Put display formatting, bold names, and first-author `*` markers in `author_text={...}`.
- Set `selected={true}` to show a paper in Featured Publications on the homepage.
- Keep the publication count intentional; the current MCF publication list has 20 papers and preprints.
- Add page counts with `pages={...}` where available, and mirror them in `_pages/publications.md` as `<span class="pub-pages">...</span>`.

Related display files:

```text
_pages/publications.md
_layouts/bib_pub.liquid
_layouts/bib_fp.liquid
_includes/selected_papers.liquid
```

### News

Create a new file under `_news/`, for example:

```text
_news/announcement_44.md
```

Template:

```markdown
---
layout: post
date: 2026-07-04 12:00:00+0100
inline: true
related_posts: false
---

Your news text here.
```

The current HKSTP wording is intentionally concise:

```text
Congrats! Zhu Mind / Master Mind was conditionally approved for the HKSTP Programme.
```

### Teaching

Edit:

```text
_pages/teaching.md
_data/cv.yml
```

Recent teaching item:

```text
Examiner, Theory of Deep Learning, 2025-2026
Marked coursework and assessed MSc students' thesis proposal presentations.
```

### Talks

Edit:

```text
_pages/talks.md
```

This page is manually curated from the CV and can mix invited talks, seminars, visits, outreach, and service entries.

### Project / Research

Edit:

```text
_pages/researches.md
_researches/
```

The navigation title is `Project`. Individual project entries are stored as Markdown files in `_researches/`.

## Application / Master Mind Page

Public URL:

```text
https://katewenqizhu.github.io/outreach/
```

Main source:

```text
_pages/outreach.md
```

Important assets:

```text
assets/img/application/mastermind-logo.png
assets/img/application/mastermind-game-strip.png
assets/img/application/news/
assets/pi/pi-1m.txt
```

The page includes:

- Master Mind hero section
- Yeer card
- Yeer and pi fortune game
- Master Mind formula
- game/course visual strip
- rolling media/news rail
- four learning pillars
- development timeline
- operating system section

Current formula text:

```text
AI Tech + Innovative Courses + Gamified Math + Personalized Mentorship
```

The JavaScript for the media rail and Yeer pi fortune game is currently embedded at the bottom of `_pages/outreach.md`. If this grows much larger, move it into a dedicated file under `assets/js/`.

## Yeer Module

Yeer appears on:

- About page
- Application page

The current image and text are controlled in page front matter:

```yaml
yeer:
  image: /assets/img/yeer/yeer-YYYY-MM-DD.jpg
  avatar: /assets/img/yeer/avatars/yeer-avatar-YYYY-MM-DD.jpg
  date: YYYY-MM-DD
  mood: "..."
  text_cn: "..."
  text_en: "Yeer is my AI-born fox-cat companion, created from my mornings, proofs, code, and dreams."
```

Image folders:

```text
assets/img/yeer/
assets/img/yeer/avatars/
```

Gallery data:

```text
_data/yeer_gallery.yml
```

Include files:

```text
_includes/about/yeer_card.liquid
_includes/about/about.liquid
```

When updating Yeer manually:

1. Add the new image under `assets/img/yeer/`.
2. Add or update the avatar under `assets/img/yeer/avatars/`.
3. Update the `yeer:` block in `_pages/about.md`.
4. Update the `yeer:` block in `_pages/outreach.md`.
5. If the gallery is used, update `_data/yeer_gallery.yml`.

## Styling

Most custom design work is in:

```text
_sass/custom.scss
_sass/_themes.scss
```

Application/Master Mind specific styles use classes such as:

```text
mm-page
mm-hero
mm-section
mm-formula
mm-media-window
mm-timeline
mm-pillars
yeer-game
```

Keep Application page styling scoped under these classes where possible, so changes do not accidentally affect the academic pages.

## Validation Checklist

Before pushing:

```powershell
bundle exec jekyll build
git status
```

For publication edits, also check:

- `_bibliography/papers.bib` parses correctly.
- author names render on `/publications/`.
- `selected={true}` only appears on papers intended for the homepage.
- first-author `*` markers are in `author_text`, not in raw BibTeX author names.

For Application page edits, check:

- `/outreach/` loads without JavaScript errors.
- the pi fortune game can start and produce a result.
- the Yeer image path exists.
- no private local paths are visible in the page.

For Yeer updates, check:

- the About page Yeer card displays a square image.
- the Application page Yeer card uses the same current mood.
- image filenames are committed.

## Common Problems

### Page Does Not Update On Live Site

Check GitHub Actions first. If deployment succeeded, hard refresh the browser or use `?v=<commit>`.

### Jekyll Front Matter Breaks

YAML is sensitive to colons. Quote text containing `:`:

```yaml
text_cn: "早，今天5:30结构页耳：多睡了一点。"
```

### Publication Authors Disappear

This usually means the BibTeX `author` field is malformed. Keep raw authors clean:

```bibtex
author={First Author and Wenqi Zhu and Third Author}
```

Use `author_text` for HTML display:

```bibtex
author_text={First Author, <strong>Wenqi Zhu</strong>*, Third Author}
```

### Application Page Looks Broken

Check image paths under `assets/img/application/` and whether `_sass/custom.scss` was changed. The page uses custom HTML inside Markdown, so unclosed tags can affect the whole layout.

## Credits

This site is built with:

- [Jekyll](https://jekyllrb.com/)
- [al-folio](https://github.com/alshedivat/al-folio)
- [GitHub Pages](https://pages.github.com/)

The site has been customized for Kate Wenqi Zhu's academic profile, AI-integrated mathematical discovery work, publications, teaching, outreach, Master Mind application page, and Yeer daily companion.
