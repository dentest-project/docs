(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[930],{3905:function(A,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},i=Object.keys(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var l=n.createContext({}),s=function(A){var e=n.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},c=function(A){var e=s(A.components);return n.createElement(l.Provider,{value:e},A.children)},p={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,i=A.originalType,l=A.parentName,c=a(A,["components","mdxType","originalType","parentName"]),u=s(t),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?n.createElement(h,o(o({ref:e},c),{},{components:t})):n.createElement(h,o({ref:e},c))}));function d(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var i=t.length,o=new Array(i);o[0]=u;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=A,a.mdxType="string"==typeof A?A:r,o[1]=a;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4420:function(A,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],a={sidebar_position:6},l="Pulling features",s={unversionedId:"pulling-features",id:"pulling-features",isDocsHomePage:!1,title:"Pulling features",description:"The aim of Dentest is to help you go to a more behavior driven approach, by letting non-developers use the web",source:"@site/docs/pulling-features.md",sourceDirName:".",slug:"/pulling-features",permalink:"/pulling-features",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Describing a feature",permalink:"/writing-features/describing-a-feature"}},c=[{value:"Before your first pull",id:"before-your-first-pull",children:[{value:"Preparing the project",id:"preparing-the-project",children:[]},{value:"Retrieving your token",id:"retrieving-your-token",children:[]}]},{value:"Refreshing the pull token",id:"refreshing-the-pull-token",children:[]},{value:"Getting the Dentest CLI",id:"getting-the-dentest-cli",children:[]},{value:"Using the Dentest CLI",id:"using-the-dentest-cli",children:[{value:"Using a different name for the configuration file",id:"using-a-different-name-for-the-configuration-file",children:[]}]}],p={toc:c};function u(A){var e=A.components,a=(0,r.Z)(A,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pulling-features"},"Pulling features"),(0,i.kt)("p",null,"The aim of Dentest is to help you go to a more behavior driven approach, by letting non-developers use the web\nplatform, and letting developers retrieve everything that has been created, inside the technical project."),(0,i.kt)("p",null,"How we see the developers journey:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pulling the features from Dentest (Gherkin files will be created in the root directory of their choice, following the\ntree that has been defined on Dentest)"),(0,i.kt)("li",{parentName:"ul"},"Implementing the missing steps so that the Gherkin interpreter can match a step to a piece of code"),(0,i.kt)("li",{parentName:"ul"},"Implementing the feature to make the tests pass"),(0,i.kt)("li",{parentName:"ul"},"Pushing this work on the versioning tool, so that the CI can run the Gherkin features as tests"),(0,i.kt)("li",{parentName:"ul"},"Deploying once everything is good")),(0,i.kt)("h2",{id:"before-your-first-pull"},"Before your first pull"),(0,i.kt)("h3",{id:"preparing-the-project"},"Preparing the project"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},".dentest.yml")," file must be created at the root of the project. It can be a different name, we'll see that later, but\nthis one is handled by default."),(0,i.kt)("p",null,"This file must contain the directory in which you want to pull the Gherkin files, and can also contain\na wrapper for inline step parameters (such as quotes)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dir: features # Mandatory. The folder in which you want to pull the features\ninline_parameter_wrapper: '\"' # Optional. The string that will surround the inline parameters of your features steps\n")),(0,i.kt)("h3",{id:"retrieving-your-token"},"Retrieving your token"),(0,i.kt)("p",null,"A token must be gathered in order to pull the features. This token is ",(0,i.kt)("strong",{parentName:"p"},"yours"),", and only works for ",(0,i.kt)("strong",{parentName:"p"},"this project"),".\nSo, do not commit it."),(0,i.kt)("p",null,"To retrieve the token, login to Dentest, and go to the project's root page."),(0,i.kt)("p",null,"Click on this icon (you must have pull rights to see it): ",(0,i.kt)("img",{src:t(3959).Z})),(0,i.kt)("p",null,'A dialog will open, with your token in it. Copy it (or click the "Copy" button).'),(0,i.kt)("p",null,"Then, set it as an environment variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"DENTEST_TOKEN"),", or in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file at the root of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dotenv"},"#.env\nDENTEST_TOKEN=1ebea2f2-4d36-6938-aa2f-fb602817e47e\n")),(0,i.kt)("h2",{id:"refreshing-the-pull-token"},"Refreshing the pull token"),(0,i.kt)("p",null,"If your token has been compromised, or just to change it, you can do it from Dentest also. Follow the same steps than for\nthe token retrieval, and instead copying the token, just click on the following icon: ",(0,i.kt)("img",{src:t(9228).Z})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The previous token will be revoked, you won't be able to use it after this action "))),(0,i.kt)("h2",{id:"getting-the-dentest-cli"},"Getting the Dentest CLI"),(0,i.kt)("p",null,"Look for the Dentest CLI's releases on Github: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dentest-project/cli/releases"},"https://github.com/dentest-project/cli/releases"),"\nIn the latest release, download the binary that corresponds to your OS (you can choose between Windows, Mac OS or Linux (AMD64))."),(0,i.kt)("p",null,"If your OS or architecture is not in the list, just clone the project and build it using Rust Cargo (",(0,i.kt)("inlineCode",{parentName:"p"},"cargo build --release"),")."),(0,i.kt)("p",null,"Then, rename the binary to ",(0,i.kt)("inlineCode",{parentName:"p"},"dentest"),". If you're on a UNIX-based system, like Mac OS or Linux, just move the renamed\nbinary to ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/dentest")),(0,i.kt)("h2",{id:"using-the-dentest-cli"},"Using the Dentest CLI"),(0,i.kt)("p",null,"If you followed all the previous settings, just do, from the root directory of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dentest pull\n")),(0,i.kt)("p",null,"All the features ",(0,i.kt)("strong",{parentName:"p"},"that aren't in ",(0,i.kt)("inlineCode",{parentName:"strong"},"Draft")," mode")," will be pulled inside your project. You can start implementing them!"),(0,i.kt)("h3",{id:"using-a-different-name-for-the-configuration-file"},"Using a different name for the configuration file"),(0,i.kt)("p",null,"As said earlier, you can choose a different name for the configuration file, in replacement of ",(0,i.kt)("inlineCode",{parentName:"p"},".dentest.yml"),".\nIf you decide to do so, just pass an option to ",(0,i.kt)("inlineCode",{parentName:"p"},"dentest")," when pulling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dentest -c ./specs.yml pull\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It can have a different name, but it must be YAML file"))))}u.isMDXComponent=!0},3959:function(A,e){"use strict";e.Z="data:image/png;base64,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"},9228:function(A,e){"use strict";e.Z="data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPf39wDz8/MA4ODgAODg4ADw8PAA////AA0NDQAdHR0AIiIiABEREQAKCgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0/qKbcbj/pcAAAAASUVORK5CYII="}}]);