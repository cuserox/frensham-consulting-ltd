"use strict";
exports.id = "component---src-pages-404-jshead";
exports.ids = ["component---src-pages-404-jshead"];
exports.modules = {

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({
  label,
  link,
  size,
  icon
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  className: `button flex gap-1 items-center justify-center bg-primary-600 text-white font-semibold  ${size === "lg" ? "px-6 py-4 text-body-sm" : "px-5 py-3 text-body-xs"}`,
  href: link
}, label, icon === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M14.1668 5.83301L5.8335 14.1663",
  stroke: "white",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  d: "M6.6665 5.83301H14.1665V13.333",
  stroke: "white",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})) : "");
Button.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1981850342_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1981850342.json */ "./public/page-data/sq/d/1981850342.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = () => {
  const data = _public_page_data_sq_d_1981850342_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "mt-2 md:mb-20 mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", {
    className: "text-neutral-300"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lg:col-span-6 md:pr-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "font-display md:text-display-lg text-display-sm font-normal pb-4"
  }, "Kick-start your dream home with us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "/",
    className: "font-display md:text-display-lg text-display-sm italic text-primary-600 underline"
  }, "Send us a hi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-display-xs font-display font-normal"
  }, "Brooklyn, New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-body-sm font-light text-neutral-900"
  }, "962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-body-sm font-light text-neutral-900"
  }, "Email us at"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "text-display-xs font-display font-normal text-primary-600",
    href: "mailto:hello@landify.design"
  }, "hello@landify.design")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-body-sm font-light text-neutral-900"
  }, "If you're hurry, quick call for us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "text-display-xs font-display font-normal text-primary-600",
    href: "/"
  }, "+8(663)125-08-59")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "md:my-20 my-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", {
    className: "text-neutral-300"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-body-md font-light"
  }, "\xA9 ", new Date().getFullYear(), " Inteo - Award winning studio. Made with love by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "https://landify.design/?ref=inteo",
    className: "text-primary-600"
  }, "Landify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-row items-center opacity-70"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "text-body-sm font-semibold tracking-widest text-neutral-700 pr-4"
  }, "CONNECT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", {
    className: "w-16 text-neutral-700"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-row  items-center gap-6"
  }, data.allSocialJson.nodes.map(node => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: node.href,
    key: node.name,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "h-10 w-10",
    src: node.icon.publicURL,
    alt: node.name
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_logos_logo_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logos/logo-dark.svg */ "./src/images/logos/logo-dark.svg");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./src/components/button.js");




const Header = () => {
  const navigation = [{
    name: "About",
    href: "#"
  }, {
    name: "Services",
    href: "#"
  }, {
    name: "Our Work",
    href: "#"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex py-5 justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-row gap-8 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "h-8 w-auto",
    src: _images_logos_logo_dark_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "Logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-row gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "md:flex hidden flex-row gap-4 items-center"
  }, navigation.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    key: item.name,
    href: item.href,
    className: "text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
  }, item.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "CONTACT US",
    link: "#"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");





const Layout = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
  src: "https://gumroad.com/js/gumroad.js"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2037338169_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2037338169.json */ "./public/page-data/sq/d/2037338169.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _images_og_preview_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/og-preview.jpg */ "./src/images/og-preview.jpg");





function Seo({
  lang,
  meta,
  title,
  description,
  image,
  url
}) {
  var _site$siteMetadata;
  const {
    site
  } = _public_page_data_sq_d_2037338169_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const siteTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;
  const ogImage = image || _images_og_preview_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
  const ogUrl = `/${url}` || "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: siteTitle,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      name: `keywords`,
      content: `landing page, uikit, open source ui kit, landify ui kit, free uikit, figma uikit, aravinddesign, free website ui kit, free figma website ui kit, free landing page ui kit, landing page ui kit for figma, website ui kit for figma`
    }, {
      property: `og:image`,
      content: `${siteUrl}${ogImage}`
    }, {
      property: `og:title`,
      content: siteTitle
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      property: `og:url`,
      content: `${siteUrl}${ogUrl}`
    }, {
      name: `twitter:card`,
      content: `summary_large_image`
    }, {
      name: `twitter:creator`,
      content: ((_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.author) || ``
    }, {
      name: `twitter:image`,
      content: `${siteUrl}${ogImage}`
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
}
Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
Seo.propTypes = {
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  url: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/404.js?export=head":
/*!**************************************!*\
  !*** ./src/pages/404.js?export=head ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ "./src/components/button.js");




const NotFoundPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Page Not Found"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "container mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center text-center lg:py-28 md:py-20 py-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "font-display lg:text-display-2xl md:text-display-xl text-display-md md:pb-4 pb-2"
  }, "Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "md:text-body-lg text-body-md pb-10 text-neutral-700"
  }, "The page you requested could not be found."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/",
    label: "BACK TO HOME",
    size: "lg",
    icon: false
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ "./src/images/logos/logo-dark.svg":
/*!****************************************!*\
  !*** ./src/images/logos/logo-dark.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA4OCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNjk2NzQgMjYuNTE5MVYyNi4xMjg0QzUuMTQyMTQgMjYuMTI4NCA1LjE0MjE0IDI0LjUzNTUgNS4xNDIxNCAyMi4xNjEyVjkuODM4OEM1LjE0MjE0IDcuNDY0NDggNS4xNDIxNCA1Ljg3MTU4IDYuNjk2NzQgNS44NzE1OFY1LjQ4MDg3SDBWNS44NzE1OEMxLjU1NDYgNS44NzE1OCAxLjU1NDYgNy40NjQ0OCAxLjU1NDYgOS44Mzg4VjIyLjE2MTJDMS41NTQ2IDI0LjUzNTUgMS41NTQ2IDI2LjEyODQgMCAyNi4xMjg0VjI2LjUxOTFINi42OTY3NFoiIGZpbGw9IiMyQzJDMkMiLz4KPHBhdGggZD0iTTguMTQ1NTMgNS40ODA4N1Y1Ljg3MTU4QzkuNzAwMTMgNS44NzE1OCA5LjcwMDEzIDcuNDY0NDggOS43MDAxMyA5LjgzODhWMjIuMTYxMkM5LjcwMDEzIDI0LjUzNTUgOS43MDAxMyAyNi4xMjg0IDguMTQ1NTMgMjYuMTI4NFYyNi41MTkxSDE0Ljg0MjNWMjYuMTI4NEMxMy4yODc3IDI2LjEyODQgMTMuMjg3NyAyNC41MzU1IDEzLjI4NzcgMjIuMTYxMlYxMi45OTQ1TDI0LjI1OTYgMjYuNTE5MUgyOC4zMjU0VjI2LjEyODRDMjYuNzcwOCAyNi4xMjg0IDI2Ljc3MDggMjQuNTM1NSAyNi43NzA4IDIyLjE2MTJWOS44Mzg4QzI2Ljc3MDggNy40NjQ0OCAyNi43NzA4IDUuODcxNTggMjguMzI1NCA1Ljg3MTU4VjUuNDgwODdIMjEuNjI4N1Y1Ljg3MTU4QzIzLjAzMzggNS44NzE1OCAyMy4xODMzIDcuMTkzOTkgMjMuMTgzMyA5LjIzNzdWMTkuNjM2NkwxMS44MjI4IDUuNDgwODdIOC4xNDU1M1oiIGZpbGw9IiMyQzJDMkMiLz4KPHBhdGggZD0iTTMwLjEwODkgNS40ODA4N1YxMC40MDk4SDMwLjQ5NzZDMzAuNDk3NiA4Ljg0Njk5IDMyLjA4MjEgOC44NDY5OSAzNC40NDM5IDguODQ2OTlIMzYuODk1M1YyMi4xNjEyQzM2Ljg5NTMgMjQuNTM1NSAzNi44OTUzIDI2LjEyODQgMzUuMzcwNiAyNi4xMjg0VjI2LjUxOTFINDIuMDM3NVYyNi4xMjg0QzQwLjQ4MjkgMjYuMTI4NCA0MC40ODI5IDI0LjUzNTUgNDAuNDgyOSAyMi4xNjEyVjguODQ2OTlINDIuOTk0MkM0NS4zNTU5IDguODQ2OTkgNDYuOTQwNCA4Ljg0Njk5IDQ2Ljk0MDQgMTAuNDA5OEg0Ny4zMjkxVjUuNDgwODdIMzAuMTA4OVoiIGZpbGw9IiMyQzJDMkMiLz4KPHBhdGggZD0iTTQ5LjEzNTkgNS40ODA4N1Y1Ljg3MTU4QzUwLjY5MDUgNS44NzE1OCA1MC42OTA1IDcuNDY0NDggNTAuNjkwNSA5LjgzODhWMjIuMTYxMkM1MC42OTA1IDI0LjUzNTUgNTAuNjkwNSAyNi4xMjg0IDQ5LjEzNTkgMjYuMTI4NFYyNi41MTkxSDY0LjIzMzVMNjQuNjgxOSAyMS41OTAySDY0LjI2MzRDNjQuMjYzNCAyMy4xNTMgNjIuMjYwMyAyMy4xNTMgNTkuODk4NiAyMy4xNTNINTQuMjc4MVY4Ljg0Njk5SDU5Ljg5ODZDNjIuMjYwMyA4Ljg0Njk5IDYzLjg0NDggOC44NDY5OSA2My44NDQ4IDEwLjQwOThINjQuMjMzNVY1LjQ4MDg3SDQ5LjEzNTlaTTU5Ljg2ODcgMTkuMzY2MUM2MC4xMDc4IDE3LjcxMzEgNjEuMjczOCAxNi4xNTAzIDYyLjgyODQgMTYuMTUwM1YxNS43NTk2QzYxLjI3MzggMTUuNzU5NiA2MC4xMDc4IDE0LjIyNjggNTkuODY4NyAxMi41NDM3SDU5LjQ4QzU5LjI3MDcgMTQuMjI2OCA1OC4wNzQ5IDE1Ljc1OTYgNTYuNTUwMiAxNS43NTk2VjE2LjE1MDNDNTguMDc0OSAxNi4xNTAzIDU5LjI3MDcgMTcuNzEzMSA1OS40OCAxOS4zNjYxSDU5Ljg2ODdaIiBmaWxsPSIjMkMyQzJDIi8+CjxwYXRoIGQ9Ik04OCAxNkM4OCA4LjY2NjY2IDgyLjYxODcgNSA3Ny4yMzc0IDVDNzEuODI2MiA1IDY2LjQ0NDkgOC42NjY2NiA2Ni40NDQ5IDE2QzY2LjQ0NDkgMjMuMzMzMyA3MS44MjYyIDI3IDc3LjIzNzQgMjdDODIuNjE4NyAyNyA4OCAyMy4zMzMzIDg4IDE2Wk04NC41MDIyIDE2Qzg0LjUwMjIgMjAuOTI5IDgwLjg1NDggMjMuMzYzNCA3Ny4yMzc0IDIzLjM2MzRDNzMuNTkwMSAyMy4zNjM0IDY5Ljk3MjYgMjAuOTI5IDY5Ljk3MjYgMTZDNjkuOTcyNiAxMS4wNzEgNzMuNTkwMSA4LjYzNjYxIDc3LjIzNzQgOC42MzY2MUM4MC44NTQ4IDguNjM2NjEgODQuNTAyMiAxMS4wNzEgODQuNTAyMiAxNlpNNzcuNTA2NSAxOS4zMDZDNzcuNzQ1NiAxNy42MjI5IDc4LjkxMTYgMTYuMDkwMiA4MC40NjYyIDE2LjA5MDJWMTUuNjY5NEM3OC45MTE2IDE1LjY2OTQgNzcuNzQ1NiAxNC4xMzY2IDc3LjUwNjUgMTIuNDUzNkg3Ny4xMTc4Qzc2LjkwODUgMTQuMTM2NiA3NS43MTI3IDE1LjY2OTQgNzQuMTg4IDE1LjY2OTRWMTYuMDkwMkM3NS43MTI3IDE2LjA5MDIgNzYuOTA4NSAxNy42MjI5IDc3LjExNzggMTkuMzA2SDc3LjUwNjVaIiBmaWxsPSIjMkMyQzJDIi8+CjxwYXRoIGQ9Ik01OS44NjkzIDE5LjM2NjFDNjAuMTA4NCAxNy43MTMxIDYxLjI3NDQgMTYuMTUwMiA2Mi44MjkgMTYuMTUwMlYxNS43NTk1QzYxLjI3NDQgMTUuNzU5NSA2MC4xMDg0IDE0LjIyNjcgNTkuODY5MyAxMi41NDM3SDU5LjQ4MDZDNTkuMjcxMyAxNC4yMjY3IDU4LjA3NTUgMTUuNzU5NSA1Ni41NTA4IDE1Ljc1OTVWMTYuMTUwMkM1OC4wNzU1IDE2LjE1MDIgNTkuMjcxMyAxNy43MTMxIDU5LjQ4MDYgMTkuMzY2MUg1OS44NjkzWiIgZmlsbD0iIzk5NjgzMCIvPgo8cGF0aCBkPSJNNzcuNTA3IDE5LjMwNTlDNzcuNzQ2MiAxNy42MjI5IDc4LjkxMjIgMTYuMDkwMSA4MC40NjY4IDE2LjA5MDFWMTUuNjY5M0M3OC45MTIyIDE1LjY2OTMgNzcuNzQ2MiAxNC4xMzY2IDc3LjUwNyAxMi40NTM1SDc3LjExODRDNzYuOTA5MSAxNC4xMzY2IDc1LjcxMzMgMTUuNjY5MyA3NC4xODg2IDE1LjY2OTNWMTYuMDkwMUM3NS43MTMzIDE2LjA5MDEgNzYuOTA5MSAxNy42MjI5IDc3LjExODQgMTkuMzA1OUg3Ny41MDdaIiBmaWxsPSIjOTk2ODMwIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/images/og-preview.jpg":
/*!***********************************!*\
  !*** ./src/images/og-preview.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/og-preview-d6d16206a201aeaab57826ff6eac1067.jpg");

/***/ }),

/***/ "./public/page-data/sq/d/1981850342.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1981850342.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allSocialJson":{"nodes":[{"id":"0a6fcb41-844d-5c0c-9333-d19c82985ebc","name":"Instagram","href":"#","icon":{"publicURL":"/static/9834809b25b201fe1dbb8a50a35565d0/instagram.svg"}},{"id":"5873727c-47ec-53b2-89c7-4b3756174577","name":"Facebook","href":"#","icon":{"publicURL":"/static/956e40acf4c655aad3e15f13d0e24076/facebook.svg"}},{"id":"66ec4792-32a1-5540-8ccd-6de55f415904","name":"YouTube","href":"#","icon":{"publicURL":"/static/bacee4f3faabc773f4238263d7de844b/youtube.svg"}},{"id":"d6ecc63b-64f3-5c86-9430-7c496a77afb4","name":"Twitter","href":"#","icon":{"publicURL":"/static/486ed473e51c58ce66b9cb7ea17cbbcf/twitter.svg"}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2037338169.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2037338169.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://landify.design","title":"Inteo","description":"Award winning architecture and interior design studio template. Made by Landify.","author":"@landifydesign"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-jshead.js.map