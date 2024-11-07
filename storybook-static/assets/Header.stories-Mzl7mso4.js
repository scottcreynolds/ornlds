import{x as e}from"./lit-element-DKOPwFuj.js";import{B as r}from"./Button-B_vpcoTH.js";import{I as h}from"./Icon-rHh4v3jH.js";const v=""+new URL("ornl-logo-DkT1KSyP.png",import.meta.url).href,p=""+new URL("ornl-logo-light-DDBsT99x.svg",import.meta.url).href,u=""+new URL("hexagons-Bhqcvzyw.png",import.meta.url).href,f=({header:a,user:t,navLocation:s})=>e`
  ${a?e`
      <header>
        <div class="ornl-header-overlay" style="background-image: url(${u})"></div>
        <div class="ornl-header">
          <img src=${v} alt="Oak Ridge National Laboratory Logo" />
          <input type="text" placeholder="Search..." />
          </div>
        </div>
      </header>
    `:""}
  ${a&&s==="top"?e`
        <div class="ornl-header--horizontal">
        <div class="ornl-header--left">
      <div class="ornl-linklist">
        <a class="ornl-linklist--item" href="#">Nav Item</a>
        <a class="ornl-linklist--item" href="#">Nav Item</a>
        <a class="ornl-linklist--item" href="#">Nav Item</a>
        <a class="ornl-linklist--item" href="#">Nav Item</a>
      </div>
      </div>
      <div class="ornl-header--right">
            ${t?r({size:"large",label:"Log out"}):e`${r({size:"large",label:"Button label"})}
                    `}
      </div>
    </div>`:""}
        ${!a&&s==="top"?e`
           <div class="ornl-header--horizontal no-header">
           <div class="ornl-header--left">
           <img src="${p}" alt="Oak Ridge National Laboratory Logo" />
      <div class="ornl-linklist">
        <a class="ornl-linklist--item" href="#">${h({icon:"house",size:"large"})}</a>
        <a class="ornl-linklist--item" href="#">Nav Item</a>
        <a class="ornl-linklist--item" href="#">Nav Item</a>
        <a class="ornl-linklist--item" href="#">Nav Item</a>
        <a class="ornl-linklist--item" href="#">Nav Item</a>
      </div>
      </div>
      <div class="ornl-header--right">
          <input type="text" placeholder="Search..." />
            ${t?r({size:"small",label:"Log out"}):e`${r({size:"small",label:"Button label"})}${r({size:"small",label:"Log in",mode:"tertiary"})}
                    `}
      </div>
    </div>`:""}
`,L={title:"Components/Global Nav & Header",render:a=>f(a)},o={args:{header:!0,navLocation:"top"}},l={args:{user:{name:"Jane Doe"},header:!0,navLocation:"top"}};var n,i,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    header: true,
    navLocation: 'top'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,g;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    },
    header: true,
    navLocation: 'top'
  }
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const k=["Primary","LoggedIn"],$=Object.freeze(Object.defineProperty({__proto__:null,LoggedIn:l,Primary:o,__namedExportsOrder:k,default:L},Symbol.toStringTag,{value:"Module"}));export{f as H,l as L,$ as a};
