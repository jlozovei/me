"use strict";(self.webpackChunk_jlozovei_me=self.webpackChunk_jlozovei_me||[]).push([[878],{4434:function(e,t,i){i.d(t,{S:function(){return r},L:function(){return L}});var a=i(7294),M=i(3494),s=i(1319),l=M.default.div.withConfig({displayName:"styled__StyledPostMeta",componentId:"sc-sgo9n1-0"})(["display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;"]),n=M.default.p.withConfig({displayName:"styled__StyledPostMetaInfo",componentId:"sc-sgo9n1-1"})(["position:relative;margin-bottom:0;font-size:0.875rem;color:",";& + p{margin-left:0.5rem;padding-left:0.5rem;&:before{position:absolute;top:0;left:0;display:block;width:1px;height:100%;background-color:",";transform:rotateZ(10deg);}}"],s.O9.text,s.O9.sunset),o=function(e){var t=e.lang,i=e.time;return a.createElement(n,{"data-testid":"meta-reading"},"en"===t?i+"min read":"Leitura aprox. de "+i+"min")},r=function(e){var t=e.meta,i=t.date,M=t.lang,s=t.readingTime,r=t.category;return a.createElement(l,null,a.createElement(n,{"data-testid":"meta-date"},i),a.createElement(o,{lang:M,time:s}),a.createElement(n,{"data-testid":"meta-category"},"#",r))};r.defaultProps={meta:{date:"",lang:"en",readingTime:0,category:""}};var w=M.default.ul.withConfig({displayName:"styled__StyledList",componentId:"sc-zhlhzr-0"})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;"]),c=M.default.li.withConfig({displayName:"styled__StyledListItem",componentId:"sc-zhlhzr-1"})(["& + li{margin-top:1rem;}a{position:relative;display:block;img{width:1.5rem;height:1.5rem;object-fit:contain;}}"]),L=function(e){var t=e.post,i=t.title,M=t.description,s=t.url,l=[{key:"fb",name:"Facebook",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZD0iTTEyMC45MzQsMEg3LjA1OUE3LjA2NCw3LjA2NCwwLDAsMCwwLDcuMDY2VjEyMC45NDFBNy4wNjQsNy4wNjQsMCwwLDAsNy4wNjYsMTI4SDY4LjM3NVY3OC41SDUxLjc1VjU5LjEyNUg2OC4zNzVWNDQuODY2YzAtMTYuNTM1LDEwLjA5NS0yNS41MzUsMjQuODQ1LTI1LjUzNWExMzYuNzc1LDEzNi43NzUsMCwwLDEsMTQuOTA1Ljc2MlYzNy4zNzVIOTcuOTU0Yy04LjAyNSwwLTkuNTc5LDMuODEzLTkuNTc5LDkuNDF2MTIuMzRoMTkuMTg4bC0yLjUsMTkuMzc1SDg4LjM3NVYxMjhoMzIuNTU5QTcuMDY0LDcuMDY0LDAsMCwwLDEyOCwxMjAuOTM4VjcuMDU5QTcuMDY0LDcuMDY0LDAsMCwwLDEyMC45MzQsMFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",url:"https://www.facebook.com/sharer/sharer.php?u="+s+"&title="+i+"&description="+M},{key:"tt",name:"Twitter",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZD0iTTExOC43NjksMEg5LjIzMUE5LjIzMSw5LjIzMSwwLDAsMCwwLDkuMjMxVjExOC43NjlBOS4yMzEsOS4yMzEsMCwwLDAsOS4yMzEsMTI4SDExOC43NjlBOS4yMzEsOS4yMzEsMCwwLDAsMTI4LDExOC43NjlWOS4yMzFBOS4yMzEsOS4yMzEsMCwwLDAsMTE4Ljc2OSwwWk05My4yMjIsNDkuOXEuMDQyLjk0NS4wNDIsMS45YzAsMTkuNDExLTE0Ljc3NSw0MS43OTUtNDEuOCw0MS44aDBBNDEuNTgsNDEuNTgsMCwwLDEsMjguOTUxLDg3YTI5Ljg3NywyOS44NzcsMCwwLDAsMy41LjJBMjkuNDc1LDI5LjQ3NSwwLDAsMCw1MC43LDgwLjkxMWExNC43MDYsMTQuNzA2LDAsMCwxLTEzLjcyNC0xMC4yLDE0LjY0MSwxNC42NDEsMCwwLDAsNi42MzUtLjI1MiwxNC42OTQsMTQuNjk0LDAsMCwxLTExLjc4NS0xNC40YzAtLjA2NiwwLS4xMjYsMC0uMTg3YTE0LjU4OCwxNC41ODgsMCwwLDAsNi42NTMsMS44MzcsMTQuNywxNC43LDAsMCwxLTQuNTQ4LTE5LjYxMUE0MS43MDYsNDEuNzA2LDAsMCwwLDY0LjIxMyw1My40NDNhMTQuNywxNC43LDAsMCwxLDI1LjAzMi0xMy40LDI5LjQ2NCwyOS40NjQsMCwwLDAsOS4zMjgtMy41NjUsMTQuNzQ3LDE0Ljc0NywwLDAsMS02LjQ2LDguMTI1LDI5LjMsMjkuMywwLDAsMCw4LjQzNi0yLjMxM0EyOS44NTMsMjkuODUzLDAsMCwxLDkzLjIyMiw0OS45Wm0wLDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",url:"https://twitter.com/intent/tweet?text="+i+"&url="+s},{key:"in",name:"LinkedIn",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZD0iTTExOC43NjksMEg5LjIzMUE5LjIzMSw5LjIzMSwwLDAsMCwwLDkuMjMxVjExOC43NjlBOS4yMzEsOS4yMzEsMCwwLDAsOS4yMzEsMTI4SDExOC43NjlBOS4yMzEsOS4yMzEsMCwwLDAsMTI4LDExOC43NjlWOS4yMzFBOS4yMzEsOS4yMzEsMCwwLDAsMTE4Ljc2OSwwWk00NS40LDk2Ljc1SDI5LjgxNVY0OS44NTZINDUuNFptLTcuNzkzLTUzLjNoLS4xYy01LjIzLDAtOC42MTMtMy42LTguNjEzLTguMSwwLTQuNiwzLjQ4Ni04LjEsOC44MTgtOC4xczguNjEzLDMuNSw4LjcxNSw4LjFDNDYuNDI4LDM5Ljg1Myw0My4wNDUsNDMuNDUzLDM3LjYwOSw0My40NTNabTY0LDUzLjNIODYuMDIxVjcxLjY2M2MwLTYuMy0yLjI1Ny0xMC42LTcuOS0xMC42YTguNTMzLDguNTMzLDAsMCwwLTgsNS43LDEwLjY3NCwxMC42NzQsMCwwLDAtLjUxMywzLjhWOTYuNzVINTQuMDI4cy4yLTQyLjQ5NCwwLTQ2Ljg5NEg2OS42MTRWNTYuNWMyLjA3MS0zLjIsNS43NzctNy43NCwxNC4wNDctNy43NCwxMC4yNTUsMCwxNy45NDQsNi43LDE3Ljk0NCwyMS4xMDVabTAsMCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",url:"https://www.linkedin.com/shareArticle?mini=true&url="+s+"&title="+i+"&summary="+M},{key:"email",name:"Email",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuNTk2IC01NC4zMzEpIj48cGF0aCBkPSJNMTE4Ljc2OSwwSDkuMjMxQTkuMjMxLDkuMjMxLDAsMCwwLDAsOS4yMzFWMTE4Ljc2OUE5LjIzMSw5LjIzMSwwLDAsMCw5LjIzMSwxMjhIMTE4Ljc2OUE5LjIzMSw5LjIzMSwwLDAsMCwxMjgsMTE4Ljc2OVY5LjIzMUE5LjIzMSw5LjIzMSwwLDAsMCwxMTguNzY5LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNTk2IDU0LjMzMSkiIGZpbGw9IiNmZmYiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDk0LjQ2NykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGQ9Ik04My42MzEsMTExLjkzM2wtMzkuNzM3LDMwLjgyYTIuNDgsMi40OCwwLDAsMS0yLjk4LDBMMS4xNzgsMTExLjkzM0E3LjM4OCw3LjM4OCwwLDAsMCwwLDExNS45MnYzOS43NTRhNy40NjIsNy40NjIsMCwwLDAsNy40NTQsNy40NTRoNjkuOWE3LjQ2Miw3LjQ2MiwwLDAsMCw3LjQ1NC03LjQ1NFYxMTUuOTJBNy4zODgsNy4zODgsMCwwLDAsODMuNjMxLDExMS45MzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMTEuOTMzKSIvPjwvZz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4yNyA5MSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGQ9Ik0xMDMuOSw5MUgzNGE3LjM1LDcuMzUsMCwwLDAtMi4xODQuMzY0bDM3LjEzNCwyOC44MywzNy4xMzQtMjguODNBNy4zNSw3LjM1LDAsMCwwLDEwMy45LDkxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMxLjgxNiAtOTEpIi8+PC9nPjwvZz48L2c+PC9zdmc+",url:"mailto:info@example.com?&subject="+i+"&body="+s}];return a.createElement(w,{"data-testid":"post-share"},l.map((function(e){var t=e.key,i=e.name,M=e.logo,s=e.url;return a.createElement(c,{key:t,"data-testid":"share--"+t},a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:M,alt:i})))})))};L.defaultProps={post:{title:"",description:"",url:""}}},5457:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var a=i(7294),M=i(5444),s=i(4203),l=i(4434),n=i(420),o=i(1319),r=i(3494),w=r.default.article.withConfig({displayName:"styled__StyledArticle",componentId:"sc-1z00uad-0"})(["max-width:",";margin:0 auto;h1{margin-top:2rem;}"],o.J7.post_width),c=r.default.header.withConfig({displayName:"styled__StyledArticleHeader",componentId:"sc-1z00uad-1"})(["margin-bottom:2rem;"]),L=r.default.div.withConfig({displayName:"styled__StyledArticleBody",componentId:"sc-1z00uad-2"})(["display:flex;flex-flow:row wrap;align-items:flex-start;justify-content:space-between;"]),m=r.default.div.withConfig({displayName:"styled__StyledPostContent",componentId:"sc-1z00uad-3"})(["flex-basis:calc(100% - 2rem);max-width:calc(100% - 2rem);padding-right:2rem;h2,h3,h4,h5,h6{margin-top:2.5rem;color:",";}p{text-align:justify;}ul,ol{margin:1rem 0;li{list-style-position:inside;& + li{margin-top:0.375rem;}}}ol{li{list-style-type:decimal;}}ul{li{list-style-type:disc;}}blockquote{max-width:90%;margin:4rem auto;padding-left:2rem;border-left:4px solid ",";font-family:",";color:",";transform:skewX(-5deg);}pre[class*='language-'],code[class*='language-']{background:",";border:1px solid ",";border-radius:2px;}pre[class*='language-']{display:block;margin:2rem 0;padding:1rem;code[class*='language-']{border:none;}}code[class*='language-']{padding:0 0.125rem;box-shadow:none;font-family:",";color:",";}hr{width:12rem;height:0.25rem;margin:4rem auto;background-color:rgba(255,255,255,0.9);box-shadow:inset 4rem 0 0 rgb(0 0 0 / 30%),inset 8rem 0 0 rgb(0 0 0 / 60%);transform:skewX(-55deg);}figure{margin:2rem 0;text-align:center;img{object-fit:contain;}figcaption{margin-top:0.5rem;font-size:0.875rem;color:",";}}"],o.O9.white,o.O9.sunset,o.Rq.title,o.O9.white,o.O9.shark,o.O9.tundora,o.Rq.code,o.O9.sunset,o.O9.white),d=r.default.div.withConfig({displayName:"styled__StyledShare",componentId:"sc-1z00uad-4"})(["position:sticky;top:5rem;flex-basis:2rem;padding-top:0.5rem;text-align:right;"]),N=r.default.div.withConfig({displayName:"styled__StyledBackLink",componentId:"sc-1z00uad-5"})(["margin-bottom:4rem;"]),u=function(e){var t=e.lang,i=n.q[t].find((function(e){return"blog"===e.key}));return a.createElement(N,null,a.createElement("p",null,a.createElement(o.ee,{as:M.rU,to:i.path},"← ","en"===t?"See all posts":"Ver todos os artigos")))},y=function(e){var t=e.data,i=e.location,M=t.markdownRemark,n=M.fields,r=M.frontmatter,N=M.timeToRead,y=t.site;return a.createElement(s.g,{location:i,meta:{title:r.title,description:r.excerpt}},a.createElement(o.di,null,a.createElement(o.W2,null,a.createElement(u,{lang:n.langKey}),a.createElement(w,{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement(c,null,a.createElement(l.S,{meta:{date:r.date,lang:n.langKey,readingTime:N,category:r.category}}),a.createElement("h1",{itemProp:"headline"},r.title)),a.createElement(L,null,a.createElement(m,{dangerouslySetInnerHTML:{__html:M.html},itemProp:"articleBody"}),a.createElement(d,null,a.createElement(l.L,{post:{title:r.title,description:r.excerpt,url:""+y.siteMetadata.siteUrl+n.slug}})))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-js-86e63e075f99c1de74ed.js.map