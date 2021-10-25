"use strict";(self.webpackChunk_jlozovei_me=self.webpackChunk_jlozovei_me||[]).push([[295],{5769:function(L,e,t){var M=t(7316),u=["eventCategory","eventAction","eventLabel","eventValue"],N=t(5318);e.MS=D;var i=N(t(7154)),j=N(t(7294)),n=N(t(5697));function D(L){var e=L.eventCategory,t=L.eventAction,N=L.eventLabel,n=L.eventValue,D=M(L,u);return j.default.createElement("a",(0,i.default)({},D,{onClick:function(M){"function"==typeof L.onClick&&L.onClick(M);var u=!0;return(0!==M.button||M.altKey||M.ctrlKey||M.metaKey||M.shiftKey||M.defaultPrevented)&&(u=!1),L.target&&"_self"!==L.target.toLowerCase()&&(u=!1),window.ga?window.ga("send","event",{eventCategory:e||"Outbound Link",eventAction:t||"click",eventLabel:N||L.href,eventValue:n,transport:u?"beacon":"",hitCallback:function(){u&&(document.location=L.href)}}):u&&(document.location=L.href),!1}}))}D.propTypes={href:n.default.string,target:n.default.string,eventCategory:n.default.string,eventAction:n.default.string,eventLabel:n.default.string,eventValue:n.default.number,onClick:n.default.func}},922:function(L,e,t){t.r(e);var M=t(7294),u=t(6316),N=function(){return M.createElement(M.Fragment,null,M.createElement("p",null,"Olá! Eu sou o Julio Lozovei."),M.createElement("p",null,"Humano, desenvolvedor front-end, músico amador, palestrante e escritor;"," ",M.createElement("strong",null,"solucionador de problemas"),"."),M.createElement("p",null,"Você pode me encontrar com os links abaixo:"))};e.default=function(L){L.data;var e=L.location;return M.createElement(u.k,{title:"Desenvolvimento front-end levado a sério.",content:M.createElement(N,null),location:e})}},6316:function(L,e,t){t.d(e,{k:function(){return l}});var M=t(7294),u=t(5444),N=t(5769),i=t(4203),j=t(6446),n={github:{name:"GitHub",url:"https://github.com/jlozovei"},codepen:{name:"Codepen",url:"https://codepen.io/jlozovei/"},glitch:{name:"Glitch",url:"https://glitch.com/@jlozovei"},linkedin:{name:"LinkedIn",url:"https://linkedin.com/in/jlozovei"},twitter:{name:"Twitter",url:"https://twitter.com/juliolozovei"},devto:{name:"dev.to",url:"https://dev.to/jlozovei"},medium:{name:"Medium",url:"https://jlozovei.medium.com/"},email:{name:"email",url:"jlozovei@gmail.com"}},D=t(1319),w=t(9),T=(0,w.default)(D.$0).withConfig({displayName:"styled__StyledSection",componentId:"sc-x5o2nx-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;"]),o=w.default.div.withConfig({displayName:"styled__StyledTextContainer",componentId:"sc-x5o2nx-1"})(["h1,h2{margin-bottom:2rem;}h1{font-size:0;color:transparent;text-indent:-9999px;img{max-width:12rem;}}h2{font-size:2rem;}ul{justify-content:flex-start;margin-top:1rem;}p{margin-bottom:0.25rem;strong{color:",";text-decoration:underline;}}@media screen and (min-width:","){max-width:80%;}"],D.O9.white,D.J7.m_tablet_width),s=t(6870),l=function(L){var e=L.title,t=L.content,w=L.location,l=(0,u.K2)("2703881467").site,a=Object.keys(n).map((function(L){var e=n[L];return{key:L,render:function(){return M.createElement(D.ee,{as:N.MS,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name)}}}));return M.createElement(i.g,{location:w,meta:{title:l.siteMetadata.description}},M.createElement(T,null,M.createElement(D.W2,null,M.createElement(o,null,M.createElement("h1",null,"jlozovei",M.createElement("img",{src:s.Z,alt:"jlozovei"})),M.createElement("h2",null,e),t,M.createElement(j.a,{items:a})))))}},6870:function(L,e){e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIuNCIgaGVpZ2h0PSI2OS43NiIgdmlld0JveD0iMCAwIDE5Mi40IDY5Ljc2Ij48cGF0aCBkPSJNNS45MiwxOC44YTMuNDU4LDMuNDU4LDAsMCwxLS4wOC0uNjRWMThxMC0xLjkyLDIuNzItNi4wOCwyLjgtNC4xNTksMi44LTUuODM5LDAtNS41Mi01LjYtNi45NjFWLTE0SDB2LTJINS43NnYtNy4yOEw0LTI0LjhsLTIuMzE5LDJMLjQ4LTI0LjE2LDcuNi0zMC40bDQuNDgsNCwyLjQ4LTIuMTYsMS4yLDEuNDQtNC40LDMuODM5Vi0xNkgyMS44NFYtNDIuMjRBMjQuOCwyNC44LDAsMCwwLDIwLjk2LTQ4bDEuNzYtLjU2MXEuNCwxLjc2LjY0MSwzLjEydC40LDIuMzJhMjAuNzcsMjAuNzcsMCwwLDEsNS4wNC03Ljg0bDEuMjgsMS4wNGExMy4zNTgsMTMuMzU4LDAsMCwwLTIuNjQsOC4yNFYtMTZoMTEuNnYtNy4yOGgtMnYtMS44NGEzMS42NywzMS42NywwLDAsMCw4LjY0LS45NiwxNy45ODksMTcuOTg5LDAsMCwwLDcuNjgtNC4zMmw1LjY4LDQuMTZMNjEuNi0yOC40OGwxLjIsMS40NC0zLjkyLDMuNTJWLTE2SDcwLjY5MWEyLjc0MywyLjc0MywwLDAsMSwxLjYyOS0uOTU5SDc2Ljk2bDUuNzYtOC4zMmExNC4wOCwxNC4wOCwwLDAsMS03LjkyLDIuOTYsMTAuOTMxLDEwLjkzMSwwLDAsMS01LjM2LTEuNTJsLTEuNjgsMi40OEw2Ni4yNC0yMi40bDUuNi04YTExLjcsMTEuNywwLDAsMCw3Ljg0LDMuMDQsOC42NDUsOC42NDUsMCwwLDAsNi40LTIuMzJsMS40NCwxLjEyMUw3OS4yOC0xNi45NmgzLjY4bDEuNjc5LTIuNCwxLjUyLDEuMTJRODUuMzA3LTE2LjkzNSw4NC42NS0xNmg5LjY3di03LjI4aC0ydi0xLjg0YTMxLjY3LDMxLjY3LDAsMCwwLDguNjQtLjk2LDE3Ljk4OSwxNy45ODksMCwwLDAsNy42OC00LjMybDUuNjgsNC4xNiwyLjU2MS0yLjIzOSwxLjIsMS40NC0zLjkyLDMuNTJWLTE2aDExLjJ2LTcuMjhxLTQuNTYtMi4xNi00LjU2LTYuNjM5LDAtNi40OCw2LjMyLTguNGwuNTYxLDEuNzZxLTMuNDQsMS41Mi0zLjQ0MSwzLjgzOSwwLDQuMTYxLDYuNzIsNC4xNjFWLTE2aDguNzJ2LTYuMjRsLTIuNTYtMi40OC0xLjc2LDEuNjgtMS4yOC0xLjQ0LDYuNTYtNS45Miw0LjgsNC42NCwyLjcyLTIuNCwxLjI4LDEuMzYtNC4xNiwzLjc2Vi0xNmgxMC44OHYtNy4yOHEtLjguMDgxLTEuMi4wOGgtLjRsLS40OC0uMDRxLS40ODEtLjA0LTEuNTItLjEyMVYtMjUuMmEyMi40MTMsMjIuNDEzLDAsMCwwLDE0Ljk2LTUuMkwxNzYtMTkuODQsMTcwLjIwOC0xNkgxODAuNjR2LTYuOTZsLTIuMTYtMS44NEwxNzYtMjIuNjRsLTEuMTItMS40NCw3LjItNi4zMiw0LjQ4LDQuMDgxLDIuNDgtMiwxLjIsMS4zNi00LDMuNlYtMTZIMTkyLjR2MkgxODYuMjR2My45MnEwLDMuNzYsMS44NCw1LjEyTDE5MC4xNi02LjhsMS4yLDEuNDRMMTg0LjE2Ljg4cS0zLjUxOS0yLjU2MS0zLjUyLTguNDhWLTE0SDE2Ny4xOTFsLTUuNDMxLDMuNnY0LjQ4bDMuNjgsMi4yNCw3LjEyLTQuOCwxLjA0LDEuNkwxNjEuNzYuODhsLTYuNC0zLjkyTDE1My40NC0xLjJsLTEuMi0xLjUyLDMuOTE5LTMuNlYtMTRIMTQ1LjI4Vi02LjMyQTQuODUxLDQuODUxLDAsMCwxLDE0Ni02LjRoLjQ4MWE2LjYzOSw2LjYzOSwwLDAsMSwuODc5LjA4Vi00LjRxLTEuMi0uMDgtMS45Mi0uMDhoLS45NkExOC4wNiwxOC4wNiwwLDAsMCwxMzEuMDQuODhsLTYuMTYtNC40LTIuMzIsMi0xLjItMS4zNiw0LTMuNjhWLTE0aC0xMS4yVi02LjE2aDEuOTIxdjEuODRBMjUuNDEsMjUuNDEsMCwwLDAsOTkuOTIuODhsLTYtNC4yNC0yLjI0LDJMOTAuNC0yLjhsMy45Mi0zLjQ0Vi0xNEg4My4xYTEuODI0LDEuODI0LDAsMCwxLS4zNzguMzJxLS44OC40ODEtNi4xNi40OEw2OS42LTMuNzZxNS4xMjEtMy4yLDguOTYtMy4yYTEyLjY3OCwxMi42NzgsMCwwLDEsNi4xNiwxLjg0TDg2LTYuOTYsODcuNTItNS45Miw4Mi43Mi44OFE3OC0yLjY0MSw3NC0yLjY0QTguNzE5LDguNzE5LDAsMCwwLDY3LjIsMEw2NS42LTEuMmw4LjY0LTEySDcwLjcybC0yLDIuOEw2Ny4yLTExLjQ0cS45NjQtMS40NzgsMS43NzktMi41NjFINTguODhWLTYuMTZINjAuOHYxLjg0QTI1LjQxLDI1LjQxLDAsMCwwLDQ0LjY0Ljg4bC02LTQuMjQtMi4yNCwyTDM1LjEyLTIuOGwzLjkyLTMuNDRWLTE0SDI3LjQ0Vi02LjI0bDEuODQsMS43NiwyLjY0MS0yLjRMMzMuMi01LjUyLDI1Ljg0Ljg4LDIxLjI4LTMuNDQsMTguNTYtMS4yLDE3LjI4LTIuNzJsNC41Ni0zLjg0Vi0xNEgxMS4zNnY5LjQ0YTguMDI5LDguMDI5LDAsMCwxLDQuNDgsNy42cTAsMy43Ni00LjE2LDguNjRRNy42LDE2LjY0LDcuNiwxOC44Wk0xMzAuOTYtNi40OGwzLjQ0LDIuNTZhMzEuMTY1LDMxLjE2NSwwLDAsMSw1LjI4LTEuOTJWLTE0aC04LjcyWk05OS45Mi03LjJsNC4xNiwzLjA0cS44OC0uNCwyLS44YTIzLjIwOCwyMy4yMDgsMCwwLDEsMi40NzktLjcyVi0xNEg5OS45MlptLTU1LjI4LDBMNDguOC00LjE2cS44OC0uNCwyLS44YTIzLjI4OCwyMy4yODgsMCwwLDEsMi40OC0uNzJWLTE0SDQ0LjY0Wm0xMTcuMTItNS4zNkwxNjMuODc4LTE0SDE2MS43NlpNMTY2LjgxOS0xNmwyLjk0MS0yLTUuODQtNy4xMi0yLjE2LjcyVi0xNlpNMTA4LjU2LTE2di02Ljk2bC0zLjQ0LTIuNDhhMjAuMTU0LDIwLjE1NCwwLDAsMS01LjIsMS44NFYtMTZaTTUzLjI4LTE2di02Ljk2bC0zLjQ0LTIuNDhhMjAuMTU0LDIwLjE1NCwwLDAsMS01LjIsMS44NFYtMTZaTTE3OC42NC0zOC44bC0xLjY4LDEuNDQtMS4yLTEuNDQsNi40OC01LjYsNC40OCw0LDEuNi0xLjM2LDEuMiwxLjQ0LTYuMzIsNS42Wk00LjQ4LTM5LjI4LDIuOC0zNy44NCwxLjUyLTM5LjI4LDgtNDQuODhsNC40OCw0LDEuNi0xLjM2TDE1LjM2LTQwLjgsOS4wNC0zNS4yWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1MC45NikiIGZpbGw9IiNmZmYiLz48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-index-pt-br-js-62d61efe306bb8fad9ff.js.map