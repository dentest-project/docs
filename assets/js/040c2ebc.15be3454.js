(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[322],{3905:function(A,e,t){"use strict";t.d(e,{Zo:function(){return Q},kt:function(){return p}});var n=t(7294);function B(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){B(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,B=function(A,e){if(null==A)return{};var t,n,B={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(B[t]=A[t]);return B}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(B[t]=A[t])}return B}var g=n.createContext({}),D=function(A){var e=n.useContext(g),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},Q=function(A){var e=D(A.components);return n.createElement(g.Provider,{value:e},A.children)},w={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(A,e){var t=A.components,B=A.mdxType,r=A.originalType,g=A.parentName,Q=i(A,["components","mdxType","originalType","parentName"]),s=D(t),p=B,l=s["".concat(g,".").concat(p)]||s[p]||w[p]||r;return t?n.createElement(l,a(a({ref:e},Q),{},{components:t})):n.createElement(l,a({ref:e},Q))}));function p(A,e){var t=arguments,B=e&&e.mdxType;if("string"==typeof A||B){var r=t.length,a=new Array(r);a[0]=s;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=A,i.mdxType="string"==typeof A?A:B,a[1]=i;for(var D=2;D<r;D++)a[D]=t[D];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8226:function(A,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return g},metadata:function(){return D},toc:function(){return Q},default:function(){return s}});var n=t(2122),B=t(9756),r=(t(7294),t(3905)),a=["components"],i={sidebar_position:4},g="Creating the steps bank",D={unversionedId:"writing-features/creating-the-steps-bank",id:"writing-features/creating-the-steps-bank",isDocsHomePage:!1,title:"Creating the steps bank",description:"A very handy feature of Dentest is its steps bank. With it, no more pain when it comes to find the right existing steps",source:"@site/docs/writing-features/creating-the-steps-bank.md",sourceDirName:"writing-features",slug:"/writing-features/creating-the-steps-bank",permalink:"/writing-features/creating-the-steps-bank",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Organizing with tags",permalink:"/writing-features/organizing-with-tags"},next:{title:"Describing a feature",permalink:"/writing-features/describing-a-feature"}},Q=[{value:"Opening the steps drawer",id:"opening-the-steps-drawer",children:[]},{value:"Creating a new step",id:"creating-a-new-step",children:[{value:"The adverb",id:"the-adverb",children:[]},{value:"The sentence",id:"the-sentence",children:[]},{value:"The extra parameter",id:"the-extra-parameter",children:[]},{value:"Tags",id:"tags",children:[]}]},{value:"Updating an existing step",id:"updating-an-existing-step",children:[]},{value:"Removing a step",id:"removing-a-step",children:[]}],w={toc:Q};function s(A){var e=A.components,i=(0,B.Z)(A,a);return(0,r.kt)("wrapper",(0,n.Z)({},w,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-the-steps-bank"},"Creating the steps bank"),(0,r.kt)("p",null,"A very handy feature of Dentest is its steps bank. With it, no more pain when it comes to find the right existing steps\nfor your scenario."),(0,r.kt)("h2",{id:"opening-the-steps-drawer"},"Opening the steps drawer"),(0,r.kt)("p",null,"To open the steps bank, click on the ",(0,r.kt)("em",{parentName:"p"},"SHOW STEPS")," button from a feature's page: ",(0,r.kt)("img",{src:t(2745).Z})),(0,r.kt)("p",null,"The drawer is divided in three parts : a button to create a new step, a filters subdivision, and finally the list of\nexisting tags, sorted by adverb (",(0,r.kt)("em",{parentName:"p"},"Givens"),", ",(0,r.kt)("em",{parentName:"p"},"Whens")," and ",(0,r.kt)("em",{parentName:"p"},"Thens"),"). Each step item is prefixed by an icon representing the\nextra param it needs (none, multiline or table). "),(0,r.kt)("h2",{id:"creating-a-new-step"},"Creating a new step"),(0,r.kt)("p",null,"In Gherkin, a step is divided in three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"An adverb"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Given"),": the step will define an initial situation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"When"),": the step will define an action"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Then"),": the step will define an expected result"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A sentence"),". A sentence can contain parameters within it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"An optional extra parameter"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A paragraph"),(0,r.kt)("li",{parentName:"ul"},"A table")))),(0,r.kt)("h3",{id:"the-adverb"},"The adverb"),(0,r.kt)("p",null,"Just pick the accurate adverb in the dedicated select box"),(0,r.kt)("h3",{id:"the-sentence"},"The sentence"),(0,r.kt)("p",null,"Type the sentence in the input."),(0,r.kt)("p",null,"To declare inline parameters, highlight part you want to make variable. The following icon will appear: ",(0,r.kt)("img",{src:t(6871).Z})),(0,r.kt)("p",null,"Click it, and the input will be splitted to welcome the newly created param. To remove it, just click the cross within\nthe corresponding input."),(0,r.kt)("p",null,"Under the param input, you can decide if you prefer having a free-text param, or a constrained one, with a list of predefined values."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6112).Z})),(0,r.kt)("h3",{id:"the-extra-parameter"},"The extra parameter"),(0,r.kt)("p",null,'Then, select the extra parameter type this step will welcome. When choosing this step in your scenarios, an extra field\nwill be created if you don\'t select the "none" type. Select the right icon for your extra param type:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Icon"),(0,r.kt)("th",{parentName:"tr",align:null},"Extra parameter type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:t(5197).Z})),(0,r.kt)("td",{parentName:"tr",align:null},"No extra param")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:t(686).Z})),(0,r.kt)("td",{parentName:"tr",align:null},"Paragraph")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:t(4710).Z})),(0,r.kt)("td",{parentName:"tr",align:null},"Table")))),(0,r.kt)("h3",{id:"tags"},"Tags"),(0,r.kt)("p",null,"You can add tags to your step. Tags will help you retrieve easily your steps in the steps bank. Choose them wisely"),(0,r.kt)("h2",{id:"updating-an-existing-step"},"Updating an existing step"),(0,r.kt)("p",null,"To update an existing step, just click on it in the steps bank. A dialog will open, and you'll be able to edit some\nparts, but not to resplit the step."),(0,r.kt)("h2",{id:"removing-a-step"},"Removing a step"),(0,r.kt)("p",null,'Same, click on it in the bank, and hit the "Delete step" button. A step can not be deleted if it is used somewhere.'))}s.isMDXComponent=!0},6112:function(A,e,t){"use strict";e.Z=t.p+"assets/images/inline-step-param-type-2ec5eed03351feabfcb949d89c56cc34.png"},2745:function(A,e,t){"use strict";e.Z=t.p+"assets/images/show-steps-8a7d31bf6e2dde316ce20a5535d14a91.png"},6871:function(A,e){"use strict";e.Z="data:image/png;base64,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"},686:function(A,e){"use strict";e.Z="data:image/png;base64,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"},5197:function(A,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSIVh2YQcchQnSyIijhqFYpQIdQKrTqYXPoFTQxJiouj4Fpw8GOx6uDirKuDqyAIfoC4uTkpukiJ/0sKLWI8OO7Hu3uPu3eA0Kgy3e4aA3TDsTKppJTLr0iRV0QQg4gwJIXZ5qwspxE4vu4R4utdgmcFn/tz9GkFmwEhiXiGmZZDvE48temYnPeJRVZWNOJz4lGLLkj8yHXV5zfOJY8Fnila2cwcsUgslTpY7WBWtnTiSeK4phuUL+R81jhvcdarNda6J39htGAsL3Gd5hBSWMAiZEhQUUMFVThI0GqQYiND+8kA/6Dnl8mlkqsCRo55bECH4vnB/+B3t3ZxYtxPiiaB7hfX/RgGIrtAs+6638eu2zwBws/AldH2bzSA6U/S620tfgT0bwMX121N3QMud4CBJ1OxFE8K0xSKReD9jL4pD8Rugd5Vv7fWPk4fgCx1lb4BDg6BkRJlrwW8u6ezt3/PtPr7ATczco9ga7//AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5QcTFAY2+B49QwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAABArSURBVFgJASAQ3+8B////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJcAAOfkAAAjKygAuZcKAC1LSgD06oMA6t8AAPXxAAAAAAAACw8AABYhAAAMFn0A07W2AEdp9gDd1dgAGRwAAEhpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCkAAADBAAAFBQbALOfswD/ACsA8ucGAP78AAAAAAAAAQEAAAABAAAAAAAAAP8AAP//AAAAAAAAAgQAAA4Z+gABANUATWFNAOzs5QD9/AAAQFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAADl0wD/FxsAAXYTAQBEl9YAvpooAAULAAABAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAA+/UAAEJm2AC8aSr/iu3/AenlAAAbLQAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAADp5AABBBIBAAlA4wDEpygABg4AAAEDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAwAABg4AAMSnKAAJQOMBBBIBAOnkAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAA5dMAAOnkAAD280QAwau7APXr/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8ACxUBAD9VRQAKDbwAFxwAABstAAAAAAAB////AAAAAAD//O4AAQQSAQCFVf4A9OkAAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAwXAAB7qwL//O7/AQQSAAAAAAAB////AADApAAAsl0BAAlA4wD//xoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABAeYA98AdAE6j/wBAXAACAAAAAAADBAAARJfWAP/+GwAAAAEAAAAAAAAAAAAAAAAA/vwAAP/+AAAAAAAAAAAAAAAAAAAAAAAA//4AAPz5AAD8+QAA//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD//hsARJfWAAMEAAAAAAAB/7eWAAAfJRsAnXbkAAYOAAAAAAAAAAAAAAAAAAD++QAAOl0AAN/QAADn1wAAAgMAAAD+AAAZLwAAGSUAABMUAAD/AAAA7ewAAOfZAADmzgAAAQYAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+vIAAGOKHADh2+UB/556AADr4M4A7+IxAAEDAAAAAAAAAAAAAAAAAAD56wAAbqgAABkmAACMTQAA6t4AAGejAAAnNgAAAgMAAP37AAABAQAAAgQAAP37AADo4gAAm1kAAPgHAAACAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//0AABEezwAVIDIB/8GlKADHtdEA8eUGAAAAAAAAAAAAAAAAAAAAAAAAAQAABAQAAGucAAAQFgAAlWoAAP4AAAAyQgAAvo0AAO7RAAAAAAAAFTcAAEh6AAA0RwAAAQIAAJpyAADi0AAAAgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8b+gA5Sy8B/3o8MgAABc0A//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAsDAAB8vwAA+fcAAIxOAADw8AAABAoAAAEBAAAAAAAA//8AAP74AAAXLgAAYYIAAA0TAAB+LwAAABYAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECAAAA+zMCAC1LSgD+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//kAAF2VAAD7+gAA9/QAAHW0AAAZKwAA//4AAAAAAAAAAAAAAQEAAAMJAADs2wAAooIAAAABAABlrAAA/fgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP78AAAtS0oCAPTqgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFy4AABojAADPvAAAi1IAAOjcAABsmQAADgkAAP79AAAAAAAAAAAAAAAAAAAAAAAA5c0AANXFAAAbIgAAFioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD06oMCAOrfAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAFiUAAAUHAAC8kQAA/wMAAJxwAADv6AAAdLMAABYjAAD+/QAAAAAAAAAAAAAAAAAAAwgAAL2XAAAGCQAAFSUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAADq3wACAPXxAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9/QAAEREAAAAAAADjugAAAAAAAPv5AACVZAAA6NwAAGyZAAAOCQAA/v0AAAAAAAAAAAAAAQIAAOGqAAAAAAAADhAAAP79AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD18QACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/v8AAAAAAAABAAAAAAAAAAECAAD8/AAAnHAAAO/oAAB0swAAFiMAAP79AAAAAAAAAAAAAAMQAAAAAAAA/v0AAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAsPAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBAAA7+4AAAAAAAAkVQAA//4AAAAAAAAA/wAA+/kAAJVkAADo3AAAbJkAAA4JAAD+/QAA//0AACVVAAAAAAAA8e4AAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAALDwACABYhAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6dcAAPn3AABGbgAA/vgAAAAAAAAAAAAAAQIAAPz8AACccAAA7+gAAHSzAAAWIwAA+/QAAD9hAAD49gAA6dcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAWIQACAAwWfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA69gAAN/TAAArOwAAIDsAAP//AAAAAAAAAAAAAAD/AAD7+QAAlWQAAOjcAABsmQAAEhQAALqgAADMuAAA8OMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFn0B/3o8MgAABc0A//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPnLAACD5wAAAwIAAKGBAADdwAAAAQgAAAECAAAAAAAAAP8AAAP/AAB3sQAABgkAAJVqAADlzwAABxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECAAAA+zMB/8GlKADHtdEA8eUGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAASHAAAaZUAAAwQAADd0QAAwKAAAN/CAAACBAAAIj0AAEFjAAAfKQAAAAAAAPn4AACNTgAA8vcAAAIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8b+gA5Sy8B/556AADr4M4A7+IxAAEDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA98IAAGG/AAAmNAAACQwAAAAAAAAAAAAAAAAAAPXyAADTwgAAr3IAAHK7AAASGAAAkWcAAO7gAAAAAAAAAAAAAAAAAAAAAAAA//0AABEezwAVIDIB/7eWAAAfJRsAnXbkAAYOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP33AAAQHgAAFCcAAA0RAAD+/wAA9O4AAOvZAADy5QAAAgYAAAUHAABXfQAAvKYAAOnYAAAAAAAAAAAAAAAAAAAAAAAA+vIAAGOKHADh2+UB////AADDqAAA8/DXAMSnKAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAAAAAAQEAAAAAAAAAAAAAAAAAAAABAAD57gAABg8AAAECAAAAAAAAAAAAAAAAAAAA/wAAPFnYAA0QKQA9WAACAAAAAAD9/AAAvGkqAAEC5QAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAABAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAAHEQAAAQIAAAAAAAAAAAAAAAAAAAAA/wABAuUAvGkqAP38AAAAAAAB////AAAAAAD//O4AAQQSAQCFVf4A9OkAAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAwXAAB7qwL//O7/AQQSAAAAAAACAAAAAAAAAAAB6eUAAM63/wA/VUUADBcAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8ADBcAAD9VRQDOt/8B6eUAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAADOtwAAMkkBAHtB4wD//hsAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAABAuUAhb8dAM63/wAySQAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAXHAD//O7/APfAHQA8WdgA+vIAAP/9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAA+vIAADxZ2AD3wB3//O7/ABccAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCkAAADBAAAFBQbALOfswD/ACsA8ucGAP78AAAAAAAAAQEAAAABAAAAAAAAAP8AAP//AAAAAAAAAgQAAA4Z+gABANUATWFNAOzs5QD9/AAAQFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJcAAOfkAAAjKygAuZcKAC1LSgD06oMA6t8AAPXxAAAAAAAACw8AABYhAAAMFn0A07W2AEdp9gDd1dgAGRwAAEhpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFMWKgueEU0wAAAABJRU5ErkJggg=="},4710:function(A,e){"use strict";e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSIVh2YQcchQnSyIijhqFYpQIdQKrTqYXPoFTQxJiouj4Fpw8GOx6uDirKuDqyAIfoC4uTkpukiJ/0sKLWI8OO7Hu3uPu3eA0Kgy3e4aA3TDsTKppJTLr0iRV0QQg4gwJIXZ5qwspxE4vu4R4utdgmcFn/tz9GkFmwEhiXiGmZZDvE48temYnPeJRVZWNOJz4lGLLkj8yHXV5zfOJY8Fnila2cwcsUgslTpY7WBWtnTiSeK4phuUL+R81jhvcdarNda6J39htGAsL3Gd5hBSWMAiZEhQUUMFVThI0GqQYiND+8kA/6Dnl8mlkqsCRo55bECH4vnB/+B3t3ZxYtxPiiaB7hfX/RgGIrtAs+6638eu2zwBws/AldH2bzSA6U/S620tfgT0bwMX121N3QMud4CBJ1OxFE8K0xSKReD9jL4pD8Rugd5Vv7fWPk4fgCx1lb4BDg6BkRJlrwW8u6ezt3/PtPr7ATczco9ga7//AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5QcTFAkzD+zVAwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAABArSURBVFgJASAQ3+8B////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJcAAOfkAAAjKygAuZcKAC1LSgD06oMA6t8AAPXxAAAAAAAACw8AABYhAAAMFn0A07W2AEdp9gDd1dgAGRwAAEhpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCkAAADBAAAFBQbALOfswD/ACsA8ucGAP78AAAAAAAAAQEAAAABAAAAAAAAAP8AAP//AAAAAAAAAgQAAA4Z+gABANUATWFNAOzs5QD9/AAAQFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAADl0wD/FxsAAXYTAQBEl9YAvpooAAULAAABAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAA+/UAAEJm2AC8aSr/iu3/AenlAAAbLQAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAADp5AABBBIBAAlA4wDEpygABg4AAAEDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAwAABg4AAMSnKAAJQOMBBBIBAOnkAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAA5dMAAOnkAAD280QAwau7APXr/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8ACxUBAD9VRQAKDbwAFxwAABstAAAAAAAB////AAAAAAD//O4AAQQSAQCFVf4A9OkAAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAwXAAB7qwL//O7/AQQSAAAAAAAB////AADApAAAsl0BAAlA4wD//xoAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABAeYA98AdAE6j/wBAXAACAAAAAAADBAAARJfWAP/+GwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD//hsARJfWAAMEAAAAAAAB/7eWAAAfJRsAnXbkAAYOAAAAAAAAAAAAAAAAAAAAAAAA//4AAAH9AAAEBwAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD69QAAAwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+vIAAGOKHADh2+UEAOfkAADSxLMABQsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCUAAF2AAAAHCQAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAADm3wAAo3AAAAAEAAAAAAAAAAAAAAAAAAAAAAAABQsAALOfswAVIDIEACMrKADq4CsAAQMAAAAAAAAAAAAAAAAAAAAAAAD89wAANkkAABYdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALDQAAHDYAAOTOAAAAAAAAAAAAAAAAAAAAAAAAAQMAAP8AKwAjKygEALmXCgAABQYAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAABgcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPLnBgC5lwoEAC1LSgDRtgAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPTuAACKPQAACyEAABMlAABhiwAAv6EAAMuqAAD+/AAAU4YAAB8qAACbagAA9ewAACI3AABXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP78AAAvS0oEAPTqgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAP38AADp1gAADgwAAAQYAAAA/wAA9PEAAOzpAAD++gAA+fkAAP7/AADv7QAA8+oAABTrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD06oMEAOrfAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAAkMAABSngAABQYAAAkNAAACAwAAKDoAAA0WAAD//wAAFx0AAAUGAABCYQAA+voAABEVAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAADq3wAEAPXxAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAYKAABHYQAAAAAAAAAAAAAAAAAAKDgAACg4AAAAAAAAAAAAAAAAAAA9VQAAAAAAAAAAAAD9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD18QACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIAAPDpAABYAQAAaQEAAIVRAAD9+wAArIUAAGYBAABjAQAAz74AAPXxAAB2JwAAZwEAAJRcAAADBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAsPAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAALDwAEABYhAADz7QAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AABAXAACo/wAAAAAAAAAAAAAAAAAAVHsAAFR7AAAAAAAAAAAAAAAAAACK2QAAAAAAAAAAAAD9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAWIQAEAAwWfQAAAIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPr2AAC/qQAABQYAAAkNAAA4TAAA2coAAOXcAAD//wAALDwAABIZAADJswAA+voAABEVAAAyRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFn0EANO1tgACBYMA//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAPf0AACvYgAADjcAABcsAAA2SQAA2MYAAMOkAAD/+QAAFZcAAA0TAAC+nwAA8+oAACc4AAAyRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEAADTtbYCAEdp9gAOGfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAACAAAAAewAAAL6AAAAAAAAAgEAAALlAAAB2QAAAgAAAAEAAAAC+AAAAugAAAIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Z+gBHafYB/556AADr4M4A7+IxAAEDAAAAAAAAAAAAAAAAAAD++wAAOlwAAE5pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD18QAAl3EAAO7eAAAAAAAAAAAAAAAAAAAAAAAA//0AABEezwAVIDIB/7eWAAAfJRsAnXbkAAYOAAAAAAAAAAAAAAAAAAAAAAAAAwUAACQ/AAALDQAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAADp3wAA5s4AAAACAAAAAAAAAAAAAAAAAAAAAAAA+vIAAGOKHADh2+UB////AADDqAAA8/DXAMSnKAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAPFnYAA0QKQA9WAACAAAAAAD9/AAAvGkqAAEC5QAAAP8AAAAAAAAAAAAAAAAAAAAAAAABAAABAgAAAQIAAAECAAABAgAAAQIAAAECAAABAgAAAQIAAAECAAABAgAAAQIAAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wABAuUAvGkqAP38AAAAAAAB////AAAAAAD//O4AAQQSAQCFVf4A9OkAAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//4AAAwXAAB7qwL//O7/AQQSAAAAAAACAAAAAAAAAAAB6eUAAM63/wA/VUUADBcAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8ADBcAAD9VRQDOt/8B6eUAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAADOtwAAMkkBAHtB4wD//hsAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAABAuUAhb8dAM63/wAySQAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAXHAD//O7/APfAHQA8WdgA+vIAAP/9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//QAA+vIAADxZ2AD3wB3//O7/ABccAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCkAAADBAAAFBQbALOfswD/ACsA8ucGAP78AAAAAAAAAQEAAAABAAAAAAAAAP8AAP//AAAAAAAAAgQAAA4Z+gABANUATWFNAOzs5QD9/AAAQFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJcAAOfkAAAjKygAuZcKAC1LSgD06oMA6t8AAPXxAAAAAAAACw8AABYhAAAMFn0A07W2AEdp9gDd1dgAGRwAAEhpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9juzeyCL8WAAAAABJRU5ErkJggg=="}}]);