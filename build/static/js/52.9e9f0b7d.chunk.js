"use strict";(self.webpackChunkrumble_game=self.webpackChunkrumble_game||[]).push([[52],{2677:function(n,t,e){e.d(t,{n9:function(){return b},ZP:function(){return y}});var r,o,i,u=e(1413),c=e(168),a=e(4584),l=e(8034),s=e(8789),f=e(3176),d=e(9471),p=e(7601),x=e(2007),h=e.n(x),m=(h().oneOfType([h().string,h().array]),e(184)),v=s.ZP.div(r||(r=(0,c.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),g=s.ZP.div(o||(o=(0,c.Z)(["\n    display: flex;\n    gap: 5px;\n    border-radius: 0.5rem;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 2em;\n    margin-top: 1.5em;\n"]))),b=s.ZP.div(i||(i=(0,c.Z)(["\n    padding : 15px;\n    border-radius : .8rem;\n    width : ",";\n    height : ",";\n    display : flex;\n    align-items : center;\n    justify-content : center;\n    text-align-center;\n    border : 2px solid ",";\n    background-color : ",";\n    color : ",";\n    ","\n    font-weight : bolder;\n    // transition : all .3s ease;\n    cursor : pointer;\n    user-select: none;\n    box-shadow : 0px 0px 10px -4px ",";\n    font-family: 'Archivo Black', sans-serif;\n\n    ","\n\n    &:hover{\n        background-color : ",";\n        color : ",";\n        box-shadow : inset 0 0 5px 5px rgba(0,0,0,0.2),\n        0px 0px 10px -4px ",";\n    }\n"])),(function(n){return n.width||"80px"}),(function(n){return n.height||"80px"}),(function(n){return n.theme.primary}),(function(n){return n.theme.background}),(function(n){return n.theme.text}),(function(n){var t=n.fontSize;return"font-size : ".concat(t,";")}),(function(n){return n.theme.primary}),(function(n){var t=n.selected,e=n.theme;return t&&"\n        background-color : ".concat(e.orange,";\n        color : ").concat(e.text,";\n        box-shadow : inset 0 0 5px 3px rgba(0,0,0,0.2),\n        0px 0px 10px -4px ").concat(e.primary,";\n        ")}),(function(n){return n.theme.orange}),(function(n){return n.theme.text}),(function(n){return n.theme.primary})),y=function(n){var t=(0,f.Z)().generatedLetters,e=(0,d.Z)(),r=e.inputWords,o=e.setInputWords,i=(0,p.Z)().theme;return(null===t||void 0===t?void 0:t.length)&&(0,m.jsx)(v,(0,u.Z)((0,u.Z)({},n),{},{children:(0,m.jsxs)(g,{children:[null===t||void 0===t?void 0:t.map((function(t,e){return(0,m.jsx)(b,(0,u.Z)((0,u.Z)({},n),{},{onClick:function(){return o("".concat(r).concat(t))},selected:(i=t,-1!==r.indexOf(i)),children:t}),e);var i})),(0,m.jsx)(b,{onClick:function(){return o("")},"data-tut":"reactour__eraser",children:(0,m.jsx)(a.Z,{style:{color:i.text,fontSize:"1.5em"}})}),(0,m.jsx)(b,{onClick:function(){return o(r.replace(/.$/,""))},"data-tut":"reactour__eraser",children:(0,m.jsx)(l.Z,{style:{color:i.text,fontSize:"1.5em"}})})]})}))}},3176:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(885),o=e(4115),i=e(9334),u=e.n(i)()({exactly:1,formatter:function(n){return n.toUpperCase()}}),c=function(){var n,t,e=u[0];return 10-e.length>0&&(e+=function(n){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",r=0;r<n;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}(10-e.length)),null===(n=e)||void 0===n||null===(t=n.split(""))||void 0===t?void 0:t.sort((function(){return Math.random()-.5}))},a=function(){var n=(0,o.tj)(),t=(0,r.Z)(n,2),e=t[0],i=t[1];return{generatedLetters:e,setGeneratedLetters:i,createJumbleLetters:function(){return i(c())}}}},9471:function(n,t,e){var r=e(885),o=e(4115);t.Z=function(){var n=(0,o._W)(),t=(0,r.Z)(n,2);return{inputWords:t[0],setInputWords:t[1]}}},4115:function(n,t,e){e.d(t,{Cr:function(){return a},_W:function(){return c},tj:function(){return u},xt:function(){return l}});var r=e(2791),o=e(9434),i=e(2988),u=function(){var n=(0,o.I0)();return[(0,o.v9)((function(n){return n.letters.generatedLetters})),(0,r.useCallback)((function(t){n((0,i.zy)({newGeneratedLetters:"string"===typeof t?t.split(""):"object"===typeof t?t:[]}))}),[n])]},c=function(){var n=(0,o.I0)();return[(0,o.v9)((function(n){return n.letters.inputWords})),(0,r.useCallback)((function(t){n((0,i.Ko)({newInputWords:t}))}),[n])]},a=function(){var n=(0,o.I0)();return[(0,o.v9)((function(n){return n.letters.validGuess})),(0,r.useCallback)((function(t){n((0,i.tm)({newValidGuess:t}))}),[n]),(0,r.useCallback)((function(){n((0,i.yK)())}),[n])]},l=function(){var n=(0,o.I0)();return[(0,o.v9)((function(n){return n.letters.points})),(0,r.useCallback)((function(t){n((0,i.AJ)({action:t}))}),[n])]}},7052:function(n,t,e){e.r(t);var r,o,i=e(168),u=e(8789),c=e(1087),a=e(2677),l=e(184),s=u.ZP.div(r||(r=(0,i.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 80vh;\n"]))),f=u.ZP.div(o||(o=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"])));t.default=function(n){return(0,l.jsx)(s,{children:(0,l.jsx)(f,{children:(0,l.jsx)("center",{children:(0,l.jsx)(c.rU,{to:"/rumble-game/play",className:"text-decoration-none",children:(0,l.jsx)(a.n9,{width:"200px",children:"PLAY RUMBLE"})})})})})}}}]);
//# sourceMappingURL=52.9e9f0b7d.chunk.js.map