import{ao as i,ap as r,aq as a}from"./chunk-NUUEMKO5-C4AKwlfC.js";import{u as s}from"./index-JJok5nyt.js";import"./iframe-TFbhkXrN.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";const o=""+new URL("global-nav-CZ8ZdRgb.png",import.meta.url).href,t=""+new URL("global-header-B4Q_JkgK.png",import.meta.url).href,d=""+new URL("global-2-BOANwEkW.png",import.meta.url).href,c=""+new URL("example-Dp_mk8Lp.png",import.meta.url).href;function n(e){return i.jsxs(i.Fragment,{children:[i.jsx(r,{title:"Components/Global Nav & Header/Docs",layout:"fullscreen"}),`
`,i.jsx("style",{children:`

:root {    
  width: 100%;
  color: #000;
}

.ornl-docs {
  display: flex;
  justify-content: space-between;

}

.ornl-docs--left {
  padding: 0 120px;
  max-width: 670px;
}

* {
font-family: "Mulish", system-ui, Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 48px !important;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 24px;
}

h2 {
font-size: 32px;
}

h3 {
  font-size: 20px;
}

p, li {
  line-height: 150%;
}

li {
  font-size: 14px;
  margin-bottom: 6px;
}

.horizontal-nav {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 100px 0;
}

.horizontal-nav-item {
  font-size: 16px;
  line-height: 150%;
  color: #04682A;
  padding: 12px;
}

.horizontal-nav-item:first-child {
  border-bottom: 2px solid var(--border-green-medium, #1EAB43);
  color: #1F2122;
}

.divider {
width: 100%;
height: 1px;
border-bottom: 1px solid #000;
margin: 88px 0;
}

.divider--small {
  margin: 56px 0;
  border-bottom: 1px solid #E5E5E5;

}

.variation-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.variation-link {
  font-size: 16px;
  line-height: 150%;
  color: #04682A;
}

.ornl-docs--right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: 1px solid #AAAAAA;
  height: 100%;
  width: 208px;
  margin-top: 312px;
  position: sticky;
}

.ornl-docs--right .ornl-docs--link {
  font-size: 12px;
  line-height: 150%;
  padding: 8px 2px 8px 12px;
  color: #04682A;
  font-weight: 700;
}

.ornl-docs--right .ornl-docs--link:first-child {
  color: #1F2122;
  background: linear-gradient(90deg, rgba(40, 163, 81, 0.15) 0%, rgba(40, 163, 81, 0.00) 100%);
border-left: 2px solid var(--border-green-medium, #1EAB43);

}

`}),`
`,i.jsx(a,{children:i.jsxs("div",{class:"ornl-docs",children:[i.jsxs("div",{class:"ornl-docs--left",children:[i.jsx("h1",{id:"global-nav-header",children:"Global Nav & Header"}),i.jsx("p",{children:`Global Nav & Header is a component that appears on every page and includes functionality such as global
navigation, utility links, and search. Global navigation may be horizontal or vertical.`}),i.jsxs("div",{class:"horizontal-nav",children:[i.jsx("a",{class:"horizontal-nav-item",children:"Design"}),i.jsx("a",{class:"horizontal-nav-item",children:"Accessibility"}),i.jsx("a",{class:"horizontal-nav-item",children:"Changelog"}),i.jsx("a",{class:"horizontal-nav-item",children:"Feedback"})]}),i.jsx("h2",{id:"anatomy",children:"Anatomy"}),i.jsx("h3",{id:"global-header",children:"Global Header"}),i.jsx("img",{src:t}),i.jsxs("ol",{children:[i.jsx("li",{children:"Logo "}),i.jsx("li",{children:"con "}),i.jsx("li",{children:"Navigation Item "}),i.jsx("li",{children:"Search Bar"})]}),i.jsx("div",{class:"divider--small"}),i.jsx("h3",{id:"global-navigation",children:"Global Navigation"}),i.jsx("img",{src:o}),i.jsx("img",{src:d}),i.jsx("p",{children:"Global navigation may be implemented horizontally or vertically. "}),i.jsxs("ol",{children:[i.jsx("li",{children:"Logo "}),i.jsx("li",{children:"Icon "}),i.jsx("li",{children:"Navigation Item "}),i.jsx("li",{children:"Search Bar "}),i.jsx("li",{children:"Secondary Button "}),i.jsx("li",{children:"Primary button "}),i.jsx("li",{children:"Avatar (logged in state)"})]}),i.jsx("div",{class:"divider"}),i.jsx("h2",{id:"usage",children:"Usage"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Horizontal global navigation works best when there are relatively few top-level options. "}),i.jsx("li",{children:`Vertical global navigation is more extensible and works better to surface a larger number of top-level
options. `}),i.jsx("li",{children:`Either horizontal or vertical global navigation may contain a submenu for quick navigation to second-level
options. `}),i.jsx("li",{children:"When using global horizontal navigation, the header is optional. "}),i.jsx("li",{children:"The header, when present, always appears above the global navigation (either horizontal or vertical)."})]}),i.jsx("div",{class:"divider"}),i.jsx("h2",{id:"behavior",children:"Behavior"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Where the user is logged in, the header displays the user's avatar. "}),i.jsx("li",{children:"Where the user is not logged in, the header displays the option to log in. "}),i.jsx("li",{children:"Global navigation highlights the user's current location."})]}),i.jsx("div",{class:"divider"}),i.jsx("h2",{id:"content-guidelines",children:"Content Guidelines"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use clear, familiar terms for labels; avoid clever or cute names. "}),i.jsx("li",{children:"Aim for 1-2 words per label. "}),i.jsx("li",{children:'Avoid unnecessary words like "the" or "our." '}),i.jsx("li",{children:"Use similar parts of speech (all nouns or all verbs). "}),i.jsx("li",{children:"Use title case (ex: Research Areas rather than Research areas). "}),i.jsx("li",{children:"Place most important/frequently used items first "}),i.jsx("li",{children:"Group related items together."})]}),i.jsx("div",{class:"divider"}),i.jsx("h2",{id:"variations",children:"Variations"}),i.jsxs("div",{class:"variation-links",children:[i.jsx("a",{class:"variation-link",href:"https://www.example.com",children:"Default"}),i.jsx("a",{class:"variation-link",href:"https://www.example.com",children:"No Header"}),i.jsx("a",{class:"variation-link",href:"https://www.example.com",children:"Vertical"})]}),i.jsx("div",{class:"divider"}),i.jsx("h2",{id:"examples",children:"Examples"}),i.jsx("h3",{id:"seek-ornl-enterprise-search",children:"SEEK | ORNL Enterprise Search"}),i.jsx("img",{src:c})]}),i.jsxs("div",{class:"ornl-docs--right",children:[i.jsx("a",{class:"ornl-docs--link",children:"Anatomy"}),i.jsx("a",{class:"ornl-docs--link",children:"Usage"}),i.jsx("a",{class:"ornl-docs--link",children:"Behavior"}),i.jsx("a",{class:"ornl-docs--link",children:"Content Guidelines"}),i.jsx("a",{class:"ornl-docs--link",children:"Variations"}),i.jsx("a",{class:"ornl-docs--link",children:"Examples"})]})]})})]})}function u(e={}){const{wrapper:l}={...s(),...e.components};return l?i.jsx(l,{...e,children:i.jsx(n,{...e})}):n()}export{u as default};
