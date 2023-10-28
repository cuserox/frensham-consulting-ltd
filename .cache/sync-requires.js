
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/cusero/Code/frensham-consulting-ltd/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/cusero/Code/frensham-consulting-ltd/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/cusero/Code/frensham-consulting-ltd/src/pages/index.js"))
}

