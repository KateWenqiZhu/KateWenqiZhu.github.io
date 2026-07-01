module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: {
    standard: [/^is-open$/, /^kick$/, /^rev$/, /^future$/, /^zh$/, /^zh2$/, /^en$/, /^ghost$/, /^veil$/, /^chip$/],
    deep: [/^mm-/, /^yg-/, /^yeer-/],
    greedy: [/mm-/, /yg-/, /yeer-/],
  },
};
