(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"16l3":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n);function o(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var r=o("Tab"),c=o("TabList"),s=o("TabPanel");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){return n.Children.map(e,(function(e){return null===e?null:function(e){return r(e)||c(e)||s(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(n.cloneElement)(e,l({},e.props,{children:u(e.props.children,t)})):e}))}function d(e,t){return n.Children.forEach(e,(function(e){null!==e&&(r(e)||s(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(c(e)&&t(e),d(e.props.children,t)))}))}function I(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=I(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var M=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=I(e))&&(n&&(n+=" "),n+=t);return n},g=0;function N(){return"react-tabs-"+g++}function p(e){var t=0;return d(e,(function(e){r(e)&&t++})),t}var y,j=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return e&&"getAttribute"in e}function f(e){return h(e)&&e.getAttribute("data-rttab")}function L(e){return h(e)&&"true"===e.getAttribute("aria-disabled")}var T=function(e){var t,a;function o(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).tabNodes=[],t.handleKeyDown=function(e){var a=t.props,n=a.direction,i=a.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var o=t.props.selectedIndex,r=!1,c=!1;32!==e.keyCode&&13!==e.keyCode||(r=!0,c=!1,t.handleClick(e)),37===e.keyCode||!i&&38===e.keyCode?(o="rtl"===n?t.getNextTab(o):t.getPrevTab(o),r=!0,c=!0):39===e.keyCode||!i&&40===e.keyCode?(o="rtl"===n?t.getPrevTab(o):t.getNextTab(o),r=!0,c=!0):35===e.keyCode?(o=t.getLastTab(),r=!0,c=!0):36===e.keyCode&&(o=t.getFirstTab(),r=!0,c=!0),r&&e.preventDefault(),c&&t.setSelected(o,e)}},t.handleClick=function(e){var a=e.target;do{if(t.isTabFromContainer(a)){if(L(a))return;var n=[].slice.call(a.parentNode.children).filter(f).indexOf(a);return void t.setSelected(n,e)}}while(null!=(a=a.parentNode))},t}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,D(t,a);var l=o.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var a=this.props;(0,a.onSelect)(e,a.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),a=e+1;a<t;a++)if(!L(this.getTab(a)))return a;for(var n=0;n<e;n++)if(!L(this.getTab(n)))return n;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!L(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!L(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!L(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!L(this.getTab(e)))return e;return null},l.getTabsCount=function(){return p(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return d(e,(function(e){s(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,a=this.props,o=a.children,l=a.disabledTabClassName,d=a.focus,I=a.forceRenderTabPanel,M=a.selectedIndex,g=a.selectedTabClassName,p=a.selectedTabPanelClassName,j=a.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var m=this.tabIds.length-this.getTabsCount();m++<0;)this.tabIds.push(N()),this.panelIds.push(N());return u(o,(function(a){var o=a;if(c(a)){var N=0,m=!1;null==y&&function(e){var t=e||("undefined"!=typeof window?window:void 0);try{y=!(void 0===t||!t.document||!t.document.activeElement)}catch(a){y=!1}}(j),y&&(m=i.a.Children.toArray(a.props.children).filter(r).some((function(t,a){var n=j||("undefined"!=typeof window?window:void 0);return n&&n.document.activeElement===e.getTab(a)}))),o=Object(n.cloneElement)(a,{children:u(a.props.children,(function(t){var a="tabs-"+N,i=M===N,o={tabRef:function(t){e.tabNodes[a]=t},id:e.tabIds[N],panelId:e.panelIds[N],selected:i,focus:i&&(d||m)};return g&&(o.selectedClassName=g),l&&(o.disabledClassName=l),N++,Object(n.cloneElement)(t,o)}))})}else if(s(a)){var D={id:e.panelIds[t],tabId:e.tabIds[t],selected:M===t};I&&(D.forceRender=I),p&&(D.selectedClassName=p),t++,o=Object(n.cloneElement)(a,D)}return o}))},l.isTabFromContainer=function(e){if(!f(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,a=(t.children,t.className),n=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(t,j));return i.a.createElement("div",m({},o,{className:M(a),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,n&&n(t)},"data-rttabs":!0}),this.getChildren())},o}(n.Component);T.defaultProps={className:"react-tabs",focus:!1};var b=["children","defaultIndex","defaultFocus"];function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleSelected=function(e,t,n){var i=a.props.onSelect,o=a.state.mode;if("function"!=typeof i||!1!==i(e,t,n)){var r={focus:"keydown"===n.type};1===o&&(r.selectedIndex=e),a.setState(r)}},a.state=n.copyPropsToState(a.props,{},t.defaultFocus),a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,x(t,a),n.getDerivedStateFromProps=function(e,t){return n.copyPropsToState(e,t)},n.getModeFromProps=function(e){return null===e.selectedIndex?1:0},n.copyPropsToState=function(e,t,a){void 0===a&&(a=!1);var i={focus:a,mode:n.getModeFromProps(e)};if(1===i.mode){var o=Math.max(0,p(e.children)-1),r=null;r=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,i.selectedIndex=r}return i},n.prototype.render=function(){var e=this.props,t=e.children,a=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,b)),n=this.state,o=n.focus,r=n.selectedIndex;return a.focus=o,a.onSelect=this.handleSelected,null!=r&&(a.selectedIndex=r),i.a.createElement(T,a,t)},n}(n.Component);S.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},S.tabsRole="Tabs";var C=["children","className"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,A(t,a),n.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,C);return i.a.createElement("ul",E({},n,{className:M(a),role:"tablist"}),t)},n}(n.Component);v.defaultProps={className:"react-tabs__tab-list"},v.tabsRole="TabList";var P=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,z(t,a);var o=n.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,a=e.focus;t&&a&&this.node.focus()},o.render=function(){var e,t=this,a=this.props,n=a.children,o=a.className,r=a.disabled,c=a.disabledClassName,s=(a.focus,a.id),l=a.panelId,u=a.selected,d=a.selectedClassName,I=a.tabIndex,g=a.tabRef,N=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(a,P);return i.a.createElement("li",w({},N,{className:M(o,(e={},e[d]=u,e[c]=r,e)),ref:function(e){t.node=e,g&&g(e)},role:"tab",id:s,"aria-selected":u?"true":"false","aria-disabled":r?"true":"false","aria-controls":l,tabIndex:I||(u?"0":null),"data-rttab":!0}),n)},n}(n.Component);O.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},O.tabsRole="Tab";var Y=["children","className","forceRender","id","selected","selectedClassName","tabId"];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,G(t,a),n.prototype.render=function(){var e,t=this.props,a=t.children,n=t.className,o=t.forceRender,r=t.id,c=t.selected,s=t.selectedClassName,l=t.tabId,u=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(t,Y);return i.a.createElement("div",k({},u,{className:M(n,(e={},e[s]=c,e)),role:"tabpanel",id:r,"aria-labelledby":l}),o||c?a:null)},n}(n.Component);B.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},B.tabsRole="TabPanel";a("sFJx");var R=a("xeaZ"),U=a.n(R),H=a("wDkR"),J=a.n(H),Z=a("8/Bm"),W=a.n(Z),F=a("8XOT"),V=a.n(F),Q=a("gDEV"),_=a.n(Q),X=a("javf"),K=a.n(X),q=(U.a,J.a,W.a,K.a,U.a,V.a,_.a,a("tfnm")),$=a.n(q),ee=[{id:1,title:"AMAZON MACHINE LEARNING | RESEARCH ENGINEER INTERN",icon:$.a,description:"• Designed a Language generation model for on-the-fly Text generation.        The flow consists of Named Entity Recognition tasks, Building Nearest Neighbour        constructs, followed by a custom-made language model which is used to        generate text using Beam Search on a greedy selection tree.         • Designed a Text Classification pipeline consisting of appropriate        data-preprocessing followed by the application of Deep Learning (LSTM and        CNN) to solve the NLP problem.        • Deliverable had huge impact on the company’s customers in Asia region.",githubPath:null,demoPath:null,year:"2020",techUsed:"Python, Keras, CNN, LSTM, Beam Search"},{id:2,title:"SAMSUNG RESEARCH INSTITUTE | RESEARCH STUDENT TRAINEE",icon:$.a,description:"• Employed Deep Learning to solve a novel Computer Vision problem         • Devised a hybrid pipeline for providing an end to end solution to AI Based Multi         Camera Problem which seeks to generate an enhanced resolution image as output using         images, captured from multiple lenses of varied focal lengths and other parameters, as         input. • Collected the entire dataset required and performed adequate data-preprocessing         as the first leg of the piepline. • Researched and created the entire network for         building the solution using TensorFlow.",githubPath:null,demoPath:null,year:"2019",techUsed:"Python, Tensorflow, CNN"},{id:3,title:"MAPMYINDIA | RESEARCH INTERN",icon:$.a,description:"• Devised a new Database schema for the company’s Navigation and tracking         data dump to significantly reduce the computation time taken in user commute time         prediction purposes. • Researched on new methodologies for approaching the missing         value problem in the above data. Devised a predictive algorithm for intelligent         imputation of the above mentioned missing values using a Machine Learning based approach.",githubPath:null,demoPath:null,year:"2019",techUsed:"Python, Database, Machine Learning"}],te=(a("8lYA"),a("1Dv1")),ae=a.n(te),ne=a("jqNj"),ie=a.n(ne),oe=[{id:1,title:"REAL TIME IDENTITY DETECTION SYSTEM",icon:ae.a,description:"Devise a system to identify a person at a certain location that can be effectively installed at required entrance points.This system should be able to log the details of the passerby in real time. This has the potential of automating many systems. One of the goals would also be to surpass the state-of-the-art.",githubPath:null,demoPath:null,year:"2019 - Present",techUsed:"Python, Django, CNN, SQL"},{id:2,title:"QUERYING FACIAL IMAGES USING DEEP LEARNING",description:"Employed Deep Learning to query a set of suspects’ facial images in the database to find the people who best match a given description by the user.",icon:ae.a,githubPath:null,demoPath:null,year:"2019",techUsed:"Python, CNN"},{id:3,title:"COMPILER CONSTRUCTION",description:"Designed a compiler for an artificial C-like language from scratch, implementing all the necessary structures to output a final executable code.",icon:ie.a,githubPath:null,demoPath:null,year:"2019",techUsed:"C"},{id:4,title:"FULLY CONVOLUTIONAL NETWORKS FOR ACTION RECOGNITION",description:"The project aims at designing a model for accurately determining action in videos. The project is then used to identify a particular action class in surveillance videos.",icon:ie.a,githubPath:null,demoPath:null,year:"2018",techUsed:"Python, CNN"},{id:5,title:"HEART DISEASE PREDICTION USING DATA MINING",description:"Several Data mining techniques were used to predict the vulnerability of a person to heart disease based on many parameters observed.",icon:ie.a,githubPath:null,demoPath:null,year:"2018",techUsed:"Python, Data mining"}],re=a("vOnD");const ce=re.a.div.withConfig({displayName:"ProjectBox__Box",componentId:"sc-1t6fbps-0"})(["max-width:450px;width:35%;min-height:470px;border-radius:8px;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);transition:box-shadow 0.3s ease-out;background-color:#fff;margin:0 4% 4%;:hover{box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);transition:box-shadow 0.3s;}@media (max-width:700px){width:100%;min-height:auto;max-width:fit-content;}@media (min-width:768px) and (max-width:1030px){width:100%;min-height:auto;box-sizing:border-box;max-width:100%;margin:0 0 4%;}"]),se=re.a.div.withConfig({displayName:"ProjectBox__BoxIcon",componentId:"sc-1t6fbps-1"})(["height:120px;display:flex;justify-content:flex-start;align-items:center;padding:4%;box-sizing:border-box;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;background-color:rgba(127,161,232,0.3);img{width:25%;margin-right:5%;margin-bottom:0;}h3{margin:0;flex:1;color:#0f1645;}@media (min-width:768px) and (max-width:1030px){img{width:10%;}}"]),le=re.a.div.withConfig({displayName:"ProjectBox__BoxDescription",componentId:"sc-1t6fbps-2"})(["padding:5%;flex-direction:column;display:FLEX;height:calc(100% - 120px);p{color:#0f1645;}a{color:#7fa1e8;font-size:20px;font-weight:bold;display:block;margin:0 0 10px;text-decoration:none;}"]),ue=re.a.div.withConfig({displayName:"ProjectBox__BoxStack",componentId:"sc-1t6fbps-3"})(["margin-top:auto;p{margin:0;}"]);var de=e=>{let{info:t}=e;return i.a.createElement(ce,null,i.a.createElement(se,null,i.a.createElement("img",{src:t.icon,alt:"rashmiap project icon"}),i.a.createElement("h3",null,t.title)),i.a.createElement(le,null,i.a.createElement("p",null," ",t.description),i.a.createElement(ue,null,null!=t.githubPath?i.a.createElement("a",{href:t.githubPath},"On Github "):"",null!=t.demoPath?i.a.createElement("a",{href:t.demoPath},"Project Demo "):"",i.a.createElement("p",null,"Development year - ",t.year," "),i.a.createElement("p",null,"Technology stack - ",t.techUsed," "))))};const Ie=re.a.div.withConfig({displayName:"projectsStyle__ProjectsWrapper",componentId:"sc-1gtvdya-0"})(["padding-top:10%;padding-bottom:5%;"]),Me=re.a.div.withConfig({displayName:"projectsStyle__ProjectsSection",componentId:"sc-1gtvdya-1"})(["display:flex;flex-wrap:wrap;justify-content:center;@media (max-width:700px){flex-direction:column;margin-bottom:10%;}@media (min-width:768px) and (max-width:1030px){flex-direction:column;}"]);var ge=a("Bl7J");t.default=()=>i.a.createElement(ge.a,null,i.a.createElement(Ie,null,i.a.createElement(S,null,i.a.createElement(v,null,i.a.createElement(O,null,"Professional"),i.a.createElement(O,null,"Undergrad")),i.a.createElement(B,null,i.a.createElement(Me,null,ee.map(e=>i.a.createElement(de,{key:e.id,info:e})))),i.a.createElement(B,null,i.a.createElement(Me,null,oe.map(e=>i.a.createElement(de,{key:e.id,info:e})))))))},"1Dv1":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTEyIDYuNWMtMy43OSAwLTcuMTcgMi4xMy04LjgyIDUuNSAxLjY1IDMuMzcgNS4wMiA1LjUgOC44MiA1LjVzNy4xNy0yLjEzIDguODItNS41QzE5LjE3IDguNjMgMTUuNzkgNi41IDEyIDYuNXptMCAxMGMtMi40OCAwLTQuNS0yLjAyLTQuNS00LjVTOS41MiA3LjUgMTIgNy41czQuNSAyLjAyIDQuNSA0LjUtMi4wMiA0LjUtNC41IDQuNXoiLz48cGF0aCBkPSJNMTIgNC41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNXptMCAxM2MtMy43OSAwLTcuMTctMi4xMy04LjgyLTUuNUM0LjgzIDguNjMgOC4yMSA2LjUgMTIgNi41czcuMTcgMi4xMyA4LjgyIDUuNWMtMS42NSAzLjM3LTUuMDMgNS41LTguODIgNS41em0wLTEwYy0yLjQ4IDAtNC41IDIuMDItNC41IDQuNXMyLjAyIDQuNSA0LjUgNC41IDQuNS0yLjAyIDQuNS00LjUtMi4wMi00LjUtNC41LTQuNXptMCA3Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXoiLz48L3N2Zz4="},"8/Bm":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggb3BhY2l0eT0iLjMiIGQ9Ik01IDE5aDE0VjVINXYxNHpNMTYuNSA2Yy44MyAwIDEuNS42NyAxLjUgMS41UzE3LjMzIDkgMTYuNSA5IDE1IDguMzMgMTUgNy41IDE1LjY3IDYgMTYuNSA2em0wIDljLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNS0xLjUtLjY3LTEuNS0xLjUuNjctMS41IDEuNS0xLjV6TTEyIDEwLjVjLjgzIDAgMS41LjY3IDEuNSAxLjVzLS42NyAxLjUtMS41IDEuNS0xLjUtLjY3LTEuNS0xLjUuNjctMS41IDEuNS0xLjV6TTcuNSA2QzguMzMgNiA5IDYuNjcgOSA3LjVTOC4zMyA5IDcuNSA5IDYgOC4zMyA2IDcuNSA2LjY3IDYgNy41IDZ6bTAgOWMuODMgMCAxLjUuNjcgMS41IDEuNVM4LjMzIDE4IDcuNSAxOCA2IDE3LjMzIDYgMTYuNSA2LjY3IDE1IDcuNSAxNXoiLz48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjE2LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjcuNSIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMS41Ii8+PGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE2LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjwvc3ZnPgo="},"8XOT":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTUgNWgxNHYySDV6Ii8+PHBhdGggZD0iTTE5IDNoLTFWMWgtMnYySDhWMUg2djJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDVWOWgxNHYxMHptMC0xMkg1VjVoMTR2MnptLTIuNTEgNC41M2wtMS4wNi0xLjA2LTQuODcgNC44Ny0yLjExLTIuMTEtMS4wNiAxLjA2IDMuMTcgMy4xN3oiLz48L3N2Zz4K"},"8lYA":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE1IDE1SDV2NGgxNHYtNGgtNHptLTcgM0g2di0yaDJ2MnptMy41IDBoLTJ2LTJoMnYyem0zLjUgMGgtMnYtMmgydjJ6Ii8+PHBhdGggZD0iTTE2IDQuMmMxLjUgMCAzIC42IDQuMiAxLjdsLjgtLjhDMTkuNiAzLjcgMTcuOCAzIDE2IDNzLTMuNi43LTUgMi4xbC44LjhDMTMgNC44IDE0LjUgNC4yIDE2IDQuMnptLTMuMyAyLjVsLjguOGMuNy0uNyAxLjYtMSAyLjUtMXMxLjguMyAyLjUgMWwuOC0uOGMtLjktLjktMi4xLTEuNC0zLjMtMS40cy0yLjQuNS0zLjMgMS40ek0xOSAxM2gtMlY5aC0ydjRINWMtMS4xIDAtMiAuOS0yIDJ2NGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi00YzAtMS4xLS45LTItMi0yem0wIDZINXYtNGgxNHY0ek02IDE2aDJ2Mkg2em0zLjUgMGgydjJoLTJ6bTMuNSAwaDJ2MmgtMnoiLz48L3N2Zz4K"},gDEV:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDRINHYxMy4xN0w1LjE3IDE2SDIwVjR6bS02IDEwSDZ2LTJoOHYyem00LTNINlY5aDEydjJ6bTAtM0g2VjZoMTJ2MnoiLz48cGF0aCBkPSJNMjAgMThjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMkg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMjJsNC00aDE0em0tMTYtLjgzVjRoMTZ2MTJINS4xN0w0IDE3LjE3ek02IDEyaDh2Mkg2em0wLTNoMTJ2Mkg2em0wLTNoMTJ2Mkg2eiIvPjwvc3ZnPgo="},javf:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMjAuNTcgMTQuODZMMjIgMTMuNDMgMjAuNTcgMTIgMTcgMTUuNTcgOC40MyA3IDEyIDMuNDMgMTAuNTcgMiA5LjE0IDMuNDMgNy43MSAyIDUuNTcgNC4xNCA0LjE0IDIuNzEgMi43MSA0LjE0bDEuNDMgMS40M0wyIDcuNzFsMS40MyAxLjQzTDIgMTAuNTcgMy40MyAxMiA3IDguNDMgMTUuNTcgMTcgMTIgMjAuNTcgMTMuNDMgMjJsMS40My0xLjQzTDE2LjI5IDIybDIuMTQtMi4xNCAxLjQzIDEuNDMgMS40My0xLjQzLTEuNDMtMS40M0wyMiAxNi4yOWwtMS40My0xLjQzeiIvPjwvc3ZnPg=="},jqNj:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE0IDguNTlsLTEtLjU4VjQuMDVoLTJ2My45NmwtMSAuNThjLTEuMjQuNzItMiAyLjA0LTIgMy40NiAwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00YzAtMS40Mi0uNzctMi43NC0yLTMuNDZ6Ii8+PHBhdGggZD0iTTMuNTUgMTkuMDlsMS40MSAxLjQxIDEuNzktMS44LTEuNDEtMS40MXpNMTEgMjBoMnYzaC0yek0xIDExaDN2Mkgxem0xNC00LjE0VjIuMDVIOXY0LjgxQzcuMjEgNy45IDYgOS44MyA2IDEyLjA1YzAgMy4zMSAyLjY5IDYgNiA2czYtMi42OSA2LTZjMC0yLjIyLTEuMjEtNC4xNS0zLTUuMTl6bS0zIDkuMTljLTIuMjEgMC00LTEuNzktNC00IDAtMS40Mi43Ny0yLjc0IDItMy40NmwxLS41OFY0LjA1aDJ2My45NmwxIC41OGMxLjI0LjcyIDIgMi4wNCAyIDMuNDYgMCAyLjIxLTEuNzkgNC00IDR6TTIwIDExaDN2MmgtM3ptLTIuNzYgNy43MWwxLjc5IDEuOCAxLjQxLTEuNDEtMS44LTEuNzl6Ii8+PC9zdmc+Cg=="},sFJx:function(e,t,a){},tfnm:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTcgMTIuMjd2My43Mmw1IDIuNzMgNS0yLjczdi0zLjcyTDEyIDE1ek01LjE4IDlMMTIgMTIuNzIgMTguODIgOSAxMiA1LjI4eiIvPjxwYXRoIGQ9Ik0xMiAzTDEgOWw0IDIuMTh2NkwxMiAyMWw3LTMuODJ2LTZsMi0xLjA5VjE3aDJWOUwxMiAzem01IDEyLjk5bC01IDIuNzMtNS0yLjczdi0zLjcyTDEyIDE1bDUtMi43M3YzLjcyem0tNS0zLjI3TDUuMTggOSAxMiA1LjI4IDE4LjgyIDkgMTIgMTIuNzJ6Ii8+PC9zdmc+Cg=="},wDkR:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTMgMTloMThWNUgzdjE0em04LTdjLjM1IDAgLjY5LjA3IDEgLjE4VjZoNXYyaC0zdjcuMDNjLS4wMiAxLjY0LTEuMzUgMi45Ny0zIDIuOTctMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtM3oiLz48cGF0aCBkPSJNMjEgM0gzYy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE4YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZIM1Y1aDE4djE0em0tMTAtMWMxLjY1IDAgMi45OC0xLjMzIDMtMi45N1Y4aDNWNmgtNXY2LjE4Yy0uMzEtLjExLS42NS0uMTgtMS0uMTgtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM3oiLz48L3N2Zz4K"},xeaZ:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDEwSDUuNzZMNCA2LjQ3VjE4aDE2eiIvPjxwYXRoIGQ9Ik0yLjAxIDZMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMnpNNCA2LjQ3TDUuNzYgMTBIMjB2OEg0VjYuNDd6Ii8+PC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-projects-js-00b40a39d9e2de9bdbf6.js.map