(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"11c4":function(t,e,s){"use strict";var i=s("86c9"),a=s.n(i);a.a},"1d33":function(t,e,s){},"24f3":function(t,e,s){},"29bd":function(t,e,s){},"2d77":function(t,e,s){"use strict";var i=s("24f3"),a=s.n(i);a.a},"48a1":function(t,e,s){"use strict";var i=s("53d7"),a=s.n(i);a.a},"53d7":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"font-sans",attrs:{id:"swim-game"}},[t.preloader?s("preloader",{ref:"preloader"}):t._e(),t.assetsLoaded?s("game-screen",{ref:"gameScreen",attrs:{begin:t.gameBegin}}):t._e(),s("transition",{attrs:{name:"component-fade",mode:"out-in",appear:""}},[t.assetsLoaded?s(t.currentScreen,{tag:"component",on:{"outro-complete":t.outroComplete}}):t._e()],1),s("button",{staticClass:"sound-bt",class:{"sound-off":!t.sound},on:{click:t.toggleSound}})],1)},n=[],o=s("5530"),r=s("2f62"),c=s("cffa"),l=(s("99af"),s("d3b7"),s("3ca3"),s("10d1"),s("ddb0"),s("d4ec")),u=s("bee2"),d=s("ade3"),h=s("9bd1"),m=s("5364"),b=s("22a2"),p=(s("f7fd"),s("d138")),g=s.n(p),f=function(t,e,s,i,a){return(t-e)*(a-i)/(s-e)+i},v=function(){function t(){Object(l["a"])(this,t),w.set(this,{writable:!0,value:void 0}),j.set(this,{writable:!0,value:void 0}),O.set(this,{writable:!0,value:void 0}),y.set(this,{writable:!0,value:void 0}),S.set(this,{writable:!0,value:"freestyle"}),C.set(this,{writable:!0,value:400}),k.set(this,{writable:!0,value:600}),M.set(this,{writable:!0,value:g()(0,.8,1,.2)}),_.set(this,{writable:!0,value:.06}),T.set(this,{writable:!0,value:.85}),E.set(this,{writable:!0,value:.2}),x.set(this,{writable:!0,value:.4}),I.set(this,{writable:!0,value:!1}),D.set(this,{writable:!0,value:25}),$.set(this,{writable:!0,value:8}),G.set(this,{writable:!0,value:66}),B.set(this,{writable:!0,value:86}),W.set(this,{writable:!0,value:600}),A.set(this,{writable:!0,value:Object(m["a"])(this,k)*Object(m["a"])(this,$)+2*Object(m["a"])(this,B)+Object(m["a"])(this,G)}),P.set(this,{writable:!0,value:Object(m["a"])(this,k)-Object(m["a"])(this,G)}),N.set(this,{writable:!0,value:void 0}),R.set(this,{writable:!0,value:void 0}),F.set(this,{writable:!0,value:void 0}),L.set(this,{writable:!0,value:void 0}),U.set(this,{writable:!0,value:void 0}),H.set(this,{writable:!0,value:void 0}),Y.set(this,{writable:!0,value:void 0}),z.set(this,{writable:!0,value:void 0}),q.set(this,{writable:!0,value:void 0}),Object(d["a"])(this,"swimEndingDone",!1)}return Object(u["a"])(t,[{key:"init",value:function(e){console.log("GraphicsEngine",t.loader),Object(h["a"])(this,w,e),Object(h["a"])(this,j,new b["b"]({transparent:!0,width:400,height:Object(m["a"])(this,k)})),Object(m["a"])(this,w).appendChild(Object(m["a"])(this,j).view),Object(h["a"])(this,O,Object(m["a"])(this,j).stage),Object(h["a"])(this,y,b["h"](400,Object(m["a"])(this,k),{view:this.$el})),this.buildPool(),this.buildSwimmer(),this.buildMobileInterface()}},{key:"buildPool",value:function(){Object(h["a"])(this,N,new b["c"]);var e=new b["f"](t.loader.resources.poolstart1.texture),s=new b["f"](t.loader.resources.poolend1.texture),i=new b["f"](t.loader.resources.poolstart2.texture),a=new b["f"](t.loader.resources.poolend2.texture);i.y=-Object(m["a"])(this,B);var n=Object(m["a"])(this,k)*Object(m["a"])(this,$),o=new b["c"],r=new b["g"](t.loader.resources.poolmiddle.texture,Object(m["a"])(this,C),n);o.y=0-n-Object(m["a"])(this,B);var c=new b["g"](t.loader.resources.pooloverlay.texture,Object(m["a"])(this,C),n+2*Object(m["a"])(this,B));c.y=0-n-2*Object(m["a"])(this,B);var l=new b["g"](t.loader.resources.poolmiddlefloat.texture,Object(m["a"])(this,C),n+2*Object(m["a"])(this,B));l.y=0-n-2*Object(m["a"])(this,B),console.log("poolHeight: ".concat(n)),o.addChild(r),Object(m["a"])(this,N).addChild(o),Object(h["a"])(this,F,new b["c"]);for(var u=0;u<Object(m["a"])(this,$);u++){var d=this.buildAnimatedSprite("water",24);Object(m["a"])(this,F).addChild(d),d.animationSpeed=Object(m["a"])(this,E),d.y=u*(Object(m["a"])(this,k)-20),d.play()}var p=this.buildAnimatedSprite("water",24);Object(m["a"])(this,F).addChild(p),p.animationSpeed=Object(m["a"])(this,E),p.y=Object(m["a"])(this,$)*(Object(m["a"])(this,k)-20),p.play(),a.y=0-n-2*Object(m["a"])(this,B),s.y=0-n-2*Object(m["a"])(this,B)-Object(m["a"])(this,G)-0,Object(m["a"])(this,N).y=Object(m["a"])(this,k)-Object(m["a"])(this,G),Object(m["a"])(this,F).y=0-n-2*Object(m["a"])(this,B)-20,Object(m["a"])(this,N).addChild(i),Object(m["a"])(this,N).addChild(a),Object(m["a"])(this,N).addChild(Object(m["a"])(this,F)),Object(m["a"])(this,N).addChild(c),Object(m["a"])(this,N).addChild(l),Object(m["a"])(this,N).addChild(s),Object(m["a"])(this,N).addChild(e),Object(m["a"])(this,O).addChild(Object(m["a"])(this,N)),console.log("Animated Sprite animatedWater : ".concat(Object(m["a"])(this,F).height," ").concat(Object(m["a"])(this,F).currentFrame))}},{key:"buildSwimmer",value:function(){var t=this;Object(h["a"])(this,L,new b["c"]),Object(h["a"])(this,U,this.buildAnimatedSprite("swimmerStart",8)),Object(m["a"])(this,U).loop=!1,Object(m["a"])(this,U).onComplete=function(){t.startSwimEnd()},Object(m["a"])(this,L).addChild(Object(m["a"])(this,U)),Object(h["a"])(this,H,this.buildAnimatedSprite("swimmerFreestyle",21)),Object(m["a"])(this,H).visible=!1,Object(m["a"])(this,L).addChild(Object(m["a"])(this,H)),Object(h["a"])(this,Y,this.buildAnimatedSprite("swimmerButterfly",12)),Object(m["a"])(this,Y).visible=!1,Object(m["a"])(this,L).addChild(Object(m["a"])(this,Y)),Object(h["a"])(this,z,this.buildAnimatedSprite("swimmerIdle",19)),Object(m["a"])(this,z).visible=!1,Object(m["a"])(this,L).addChild(Object(m["a"])(this,z)),Object(m["a"])(this,O).addChild(Object(m["a"])(this,L))}},{key:"buildMobileInterface",value:function(){Object(h["a"])(this,q,new b["c"]);var t=new b["d"],e=145;t.beginFill(16777215),t.drawRect(0,0,Object(m["a"])(this,C),e),t.endFill(),Object(m["a"])(this,q).addChild(t),Object(m["a"])(this,q).visible=!1,Object(m["a"])(this,q).y=Object(m["a"])(this,k)-e,Object(m["a"])(this,O).addChild(Object(m["a"])(this,q))}},{key:"showMobileInterface",value:function(){Object(m["a"])(this,I)&&(Object(m["a"])(this,q).visible=!0,Object(m["a"])(this,N).y=Object(m["a"])(this,k)-145-Object(m["a"])(this,G),Object(m["a"])(this,L).y=-145)}},{key:"startSwim",value:function(){Object(m["a"])(this,I)&&this.showMobileInterface(),Object(m["a"])(this,U).play()}},{key:"setSwimmerIdle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?(Object(m["a"])(this,H).visible=!1,Object(m["a"])(this,H).stop(),Object(m["a"])(this,Y).visible=!1,Object(m["a"])(this,Y).stop(),Object(m["a"])(this,z).visible=!0,Object(m["a"])(this,z).play()):("freestyle"===Object(m["a"])(this,S)?(Object(m["a"])(this,H).visible=!0,Object(m["a"])(this,H).play()):(Object(m["a"])(this,Y).visible=!0,Object(m["a"])(this,Y).play()),Object(m["a"])(this,z).visible=!1,Object(m["a"])(this,z).stop())}},{key:"startSwimEnd",value:function(){Object(m["a"])(this,U).visible=!1,"freestyle"===Object(m["a"])(this,S)?(Object(m["a"])(this,H).visible=!0,Object(m["a"])(this,H).play()):(Object(m["a"])(this,Y).visible=!0,Object(m["a"])(this,Y).play())}},{key:"setProgress",value:function(t){var e=Object(m["a"])(this,A),s=f(t,0,1-Object(m["a"])(this,_),Object(m["a"])(this,P),e+145);Object(m["a"])(this,N).y=s<Object(m["a"])(this,P)?Object(m["a"])(this,P):s>e?e:s}},{key:"finishSwim",value:function(t){Object(m["a"])(this,L).y<=-170?(this.swimEndingDone=!0,this.setSwimmerIdle()):(Object(m["a"])(this,L).y-=t,this.setSwimSpeed(t))}},{key:"setSwimSpeed",value:function(t){Object(m["a"])(this,Y).animationSpeed=t/20*.2,Object(m["a"])(this,H).animationSpeed=t/20*.35}},{key:"gameEnd",value:function(){console.log("GE game end"),Object(m["a"])(this,q).visible=!1,this.setSwimmerIdle()}},{key:"buildAnimatedSprite",value:function(e,s){for(var i=[],a=0;a<s;a++)i.push(t.loader.resources["".concat(e).concat(a+1)].texture);var n=new b["a"](i);return n.animationSpeed=Object(m["a"])(this,x),n}},{key:"restart",value:function(){this.setProgress(0),Object(m["a"])(this,H).visible=!1,Object(m["a"])(this,Y).visible=!1,Object(m["a"])(this,z).visible=!1,Object(m["a"])(this,U).gotoAndStop(0),Object(m["a"])(this,U).visible=!0,Object(m["a"])(this,q).visible=!1,this.swimEndingDone=!1,Object(m["a"])(this,L).y=0}},{key:"mobile",set:function(t){Object(h["a"])(this,I,t)}},{key:"style",set:function(t){Object(h["a"])(this,S,t)}}]),t}(),w=new WeakMap,j=new WeakMap,O=new WeakMap,y=new WeakMap,S=new WeakMap,C=new WeakMap,k=new WeakMap,M=new WeakMap,_=new WeakMap,T=new WeakMap,E=new WeakMap,x=new WeakMap,I=new WeakMap,D=new WeakMap,$=new WeakMap,G=new WeakMap,B=new WeakMap,W=new WeakMap,A=new WeakMap,P=new WeakMap,N=new WeakMap,R=new WeakMap,F=new WeakMap,L=new WeakMap,U=new WeakMap,H=new WeakMap,Y=new WeakMap,z=new WeakMap,q=new WeakMap;Object(d["a"])(v,"loader",new b["e"]);var J,V,K=v,Q="TIMER_START",X="TIMER_DONE",Z="SET_GAME_TIMING",tt="GAME_DONE",et="GAME_RESTART",st="SET_PLAYERS",it="SET_STYLE",at="SET_SOUND",nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"start-screen flex flex-col justify-center"},[s("div",{staticClass:"start-screen-holder bg-white pb-8"},[s("img",{attrs:{src:"images/pattern.jpg"}}),s("img",{staticClass:"mx-auto my-8",attrs:{src:"images/swimtap-logo.png"}}),s("h4",{staticClass:"text-center pb-1 uppercase tracking-wider"},[t._v("Which Style?")]),s("div",{staticClass:"flex justify-center"},[s("button",{staticClass:"tracking-widest text-xl bg-blue-500 hover_bg-blue-700 text-white font-bold py-2 px-4 rounded-sm border-solid border mr-2",on:{click:function(e){return t.onStartGame("freestyle")},mouseover:t.onBthHover}},[t._v("FREESTYLE")]),s("button",{staticClass:"tracking-widest text-xl bg-blue-500 hover_bg-blue-700 text-white font-bold py-2 px-4 rounded-sm border-solid border",on:{click:function(e){return t.onStartGame("butterfly")},mouseover:t.onBthHover}},[t._v("BUTTERFLY")])])])])},ot=[],rt={name:"StartScreen",computed:Object(o["a"])({},Object(r["c"])({style:"style",sound:"sound"})),props:{msg:String},mounted:function(){c["a"].from(this.$el,{opacity:0,y:-100,duration:.4})},methods:Object(o["a"])({onStartGame:function(t){this[it](t),c["a"].to(this.$el,{opacity:0,y:100,duration:.4,onComplete:this.dispatchComplete}),console.log("start click"),this.sound&&K.loader.resources.soundClick.sound.play()},onStartGame2:function(){c["a"].to(this.$el,{opacity:0,y:100,duration:.4,onComplete:this.dispatchComplete,onCompleteParams:[!0]}),console.log("start click")},onBthHover:function(){this.sound&&K.loader.resources.soundHover.sound.play()},dispatchComplete:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("outro-complete",{type:"startScreen",value:t})}},Object(r["b"])([Q,it]))},ct=rt,lt=(s("2d77"),s("2877")),ut=Object(lt["a"])(ct,nt,ot,!1,null,"799bcb26",null),dt=ut.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"instructions flex flex-col justify-center"},[s("div",{staticClass:"instructions-holder bg-white pb-8 text-center"},[s("img",{staticClass:"pb-8",attrs:{src:"images/pattern.jpg"}}),s("h4",{staticClass:"text-center text-xl pb-1 uppercase tracking-widest"},[t._v("how to play")]),t.isMobile?t._e():s("h5",{staticClass:"text-center text-md tracking-wider uppercase"},[t._v("Tap the keys ‘a’ and ‘s’ to swim")]),t.isMobile?s("h5",{staticClass:"text-center text-md tracking-wider uppercase"},[t._v("Tap the ‘left’ and ‘right’ buttons swim")]):t._e(),t.isMobile?t._e():s("img",{staticClass:"py-8 mx-auto",attrs:{src:"images/instructions/desktop-instructions.gif"}}),t.isMobile?s("img",{staticClass:"py-8 mx-auto",attrs:{src:"images/instructions/mobile-instructions.gif"}}):t._e(),s("h5",{staticClass:"text-center text-md tracking-wider uppercase pb-4"},[t._v("The faster you tap, the faster you swim!")]),s("button",{staticClass:"mx-auto uppercase tracking-widest text-xl bg-blue-500 hover_bg-blue-700 text-white font-bold py-2 px-4 rounded-sm border-solid border mr-2",on:{click:t.onStartGame,mouseover:t.onBthHover}},[t._v("Got It!")])])])},mt=[],bt={computed:Object(o["a"])({},Object(r["c"])({isMobile:"isMobile",sound:"sound"})),mounted:function(){c["a"].from(this.$el,{opacity:0,y:-100,duration:.4})},methods:{onStartGame:function(){c["a"].to(this.$el,{opacity:0,y:100,duration:.4,onComplete:this.dispatchComplete}),this.sound&&K.loader.resources.soundClick.sound.play()},dispatchComplete:function(){this.$emit("outro-complete",{type:"instructionScreen"})},onBthHover:function(){this.sound&&K.loader.resources.soundHover.sound.play()}}},pt=bt,gt=(s("c1a8"),Object(lt["a"])(pt,ht,mt,!1,null,"07980288",null)),ft=gt.exports,vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game-screen"},[t.countDownShow?s("count-down",{staticClass:"z-10 absolute",attrs:{sound:t.sound},on:{"outro-complete":t.countDownDone}}):t._e(),s("div",{staticClass:"game-screen-holder flex z-1"},[t.swimStart&&!t.countDownShow?s("div",{staticClass:"progress",class:{"is-mobile":t.isMobile}},[s("div",{staticClass:"bg"}),s("div",{staticClass:"bar",style:{height:t.progressBar}})]):t._e(),t.swimStart&&!t.countDownShow?s("div",{staticClass:"timing",class:{"is-mobile":t.isMobile}},[s("h1",{staticClass:"outline absolute"},[t._v(t._s(t.displayTiming))]),s("h1",{staticClass:"absolute"},[t._v(t._s(t.displayTiming))])]):t._e(),s("div",{staticClass:"distance z-10 hidden w-1/2"},[s("h1",[t._v("Player 1")]),s("h2",[t._v("Timing : "+t._s(t.displayTiming))]),s("h2",[t._v("Power : "+t._s(t.player1Power))]),s("h2",[t._v("Distance : "+t._s(t.player1Distance))])]),s("game-graphics",{ref:"gameGraphics",attrs:{distance:t.player1Distance,"swim-start":t.swimStart,power:t.player1Power,"swim-end":t.swimEnd,"swim-style":t.swimStyle}}),s("game-msg",{ref:"gameMsg",attrs:{progress:t.progressRatio,sound:t.sound}}),t.isMobile&&(t.swimStart||t.countDownShow)&&!t.swimEnd?s("div",{staticClass:"mobile-controls z-10 flex justify-center items-center",class:{"is-mobile":t.isMobile}},[s("div",{staticClass:"left m-4",on:{click:function(e){return e.preventDefault(),t.mobileBtEvent("left")}}},[s("img",{attrs:{src:"images/buttons/left-btn.jpg"}})]),s("div",{staticClass:"right m-4",on:{click:function(e){return e.preventDefault(),t.mobileBtEvent("right")}}},[s("img",{attrs:{src:"images/buttons/right-btn.jpg"}})])]):t._e()],1)],1)},wt=[],jt=(s("a9e3"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),Ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"count-down flex flex-col justify-center"},[s("div",{staticClass:"absolute flex justify-center w-full h-full pb-16 counter-3"},[s("img",{staticClass:"self-center",attrs:{src:"images/3.png"}})]),s("div",{staticClass:"absolute flex justify-center w-full h-full pb-16 counter-2"},[s("img",{staticClass:"self-center",attrs:{src:"images/2.png"}})]),s("div",{staticClass:"absolute flex justify-center w-full h-full pb-16 counter-1"},[s("img",{staticClass:"self-center",attrs:{src:"images/1.png"}})]),s("div",{staticClass:"absolute flex justify-center w-full h-full pb-16 counter-0"},[s("img",{staticClass:"self-center",attrs:{src:"images/go.png"}})])])}],yt={props:["sound"],data:function(){return{timer:null,currentTime:3}},mounted:function(){var t=this,e=c["a"].timeline({repeat:0});e.from(this.$el.getElementsByClassName("counter-3"),{opacity:0,scale:1.7,duration:1,ease:"elastic.out(2, 0.5)"}),e.to(this.$el.getElementsByClassName("counter-3"),{opacity:0,scale:.6,duration:.6,ease:"elastic.out(2, 0.5)"}),e.from(this.$el.getElementsByClassName("counter-2"),{opacity:0,scale:1.7,duration:1,ease:"elastic.out(2, 0.5)"},"-=.6"),e.to(this.$el.getElementsByClassName("counter-2"),{opacity:0,scale:.6,duration:.6,ease:"elastic.out(2, 0.5)"}),e.from(this.$el.getElementsByClassName("counter-1"),{opacity:0,scale:1.7,duration:1,ease:"elastic.out(2, 0.5)"},"-=.6"),e.to(this.$el.getElementsByClassName("counter-1"),{opacity:0,scale:.6,duration:.6,ease:"elastic.out(2, 0.5)",onComplete:function(){t.sound&&K.loader.resources.soundSplashStart.sound.play()}}),e.from(this.$el.getElementsByClassName("counter-0"),{opacity:0,scale:1.7,duration:.6,ease:"elastic.out(2, 0.5)",onComplete:this.dispatchComplete},"-=.6"),e.to(this.$el.getElementsByClassName("counter-0"),{opacity:0,scale:.6,duration:.6,ease:"elastic.out"}),this.sound&&K.loader.resources.soundCount.sound.play()},methods:Object(o["a"])({},Object(r["b"])([X]),{timerDone:function(){},dispatchComplete:function(){this.$emit("outro-complete")}})},St=yt,Ct=(s("48a1"),Object(lt["a"])(St,jt,Ot,!1,null,"0461e040",null)),kt=Ct.exports,Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game-graphics"})},_t=[],Tt={props:["distance","swimStart","power","swimEnd","swimStyle","mapState"],watch:{distance:function(t){this.ge.setProgress(t/this.poolDistance)},swimStart:function(t){t&&this.ge.startSwim()},swimEnd:function(){this.ge.gameEnd()},power:function(t,e){this.swimEnd||(t>0?t!=e&&this.ge.setSwimmerIdle(!1):t!=e&&this.ge.setSwimmerIdle(),t!=e&&this.ge.setSwimSpeed(t))},swimStyle:function(t){this.ge.style=t}},data:function(){return{ge:Object,poolDistance:25,swimEndingDone:!1}},computed:Object(o["a"])({},Object(r["c"])({isMobile:"isMobile",sound:"sound"})),mounted:function(){console.log("GameGraphics.vue mounted"),this.ge=new K,this.ge.mobile=this.isMobile,this.ge.init(this.$el)},methods:{restartGame:function(){this.ge.restart()},finishSwim:function(t){this.ge.finishSwim(t),this.swimEndingDone=this.ge.swimEndingDone},showMobileInterface:function(){this.ge.showMobileInterface()}}},Et=Tt,xt=(s("99f7"),Object(lt["a"])(Et,Mt,_t,!1,null,"50f4843c",null)),It=xt.exports,Dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game-msg"},[s("div",{staticClass:"game-msg-holder absolute w-full bottom-0",class:{"pb-72":t.isMobile,"pb-32":!t.isMobile}},[s("img",{staticClass:"img-msg mx-auto",staticStyle:{opacity:"0"},attrs:{src:t.imagePath}})])])},$t=[],Gt={props:["progress","sound"],watch:{progress:function(t){t>.45&&!this.msgMidShown&&(this.msgMidShown=!0,this.showMsg(0)),t>.7&&!this.msgEndShown&&(this.msgEndShown=!0,this.showMsg(1))}},computed:Object(o["a"])({},Object(r["c"])({isMobile:"isMobile"}),{imagePath:function(){return this.images[this.msgGroupToShow][this.msgToShow]}}),data:function(){return{msgGroupToShow:0,msgToShow:0,msgMidShown:!1,msgEndShown:!1,images:[["images/msg/a-doinggreat.png","images/msg/a-greatstrokes.png","images/msg/a-halfwaythere.png"],["images/msg/b-almostthere.png","images/msg/b-yougotthis.png"]]}},mounted:function(){},methods:{showMsg:function(t){var e=this.images[t];this.msgGroupToShow=t;var s=this.getRandomIntInclusive(0,e.length-1);this.msgToShow=s;var i=c["a"].timeline({repeat:0}),a=this.$el.getElementsByClassName("img-msg");i.fromTo(a,{opacity:0,scale:1.7},{opacity:1,scale:1,duration:1.2,ease:"elastic.out(2, 0.5)"}),i.to(a,{opacity:0,scale:1.2,duration:.6,ease:"expo.out"},"+=1"),this.sound&&K.loader.resources.soundPopup.sound.play()},getRandomIntInclusive:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},reset:function(){this.msgMidShown=!1,this.msgEndShown=!1}}},Bt=Gt,Wt=(s("fc4b"),Object(lt["a"])(Bt,Dt,$t,!1,null,"b57ccb18",null)),At=Wt.exports,Pt=function(t){t/=1e3;var e=Math.floor(t/3600),s=Math.floor((t-3600*e)/60),i=Math.floor(t-3600*e-60*s),a=Math.floor(t%1*100);return s<10&&(s="0"+s),i<10&&(i="0"+i),a<10&&(a="0"+a),s+":"+i+":"+a},Nt=(s("c975"),function(){function t(e){Object(l["a"])(this,t),Rt.set(this,{writable:!0,value:0}),Ft.set(this,{writable:!0,value:void 0}),Lt.set(this,{writable:!0,value:0}),Ut.set(this,{writable:!0,value:void 0}),Ht.set(this,{writable:!0,value:20}),Yt.set(this,{writable:!0,value:0}),Object(h["a"])(this,Rt,e),0===e?Object(h["a"])(this,Ft,[65,83]):Object(h["a"])(this,Ft,[79,80])}return Object(u["a"])(t,[{key:"start",value:function(){var t=this;document.addEventListener("keyup",(function(e){t.keyEvent(e)})),Object(h["a"])(this,Yt,0),Object(h["a"])(this,Ut,setInterval((function(){t.intervalCallback()}),40))}},{key:"intervalCallback",value:function(){Object(m["a"])(this,Ht)>0&&Object(h["a"])(this,Ht,Object(m["a"])(this,Ht)-1.9),Object(m["a"])(this,Ht)<0&&Object(h["a"])(this,Ht,0),Object(h["a"])(this,Yt,Object(m["a"])(this,Yt)+Object(m["a"])(this,Ht)/880)}},{key:"stop",value:function(){document.removeEventListener("keyup",this.keyEvent)}},{key:"keyEvent",value:function(t){var e=t.keyCode;if(Object(m["a"])(this,Lt)===e)return Object(m["a"])(this,Ht)>0&&Object(h["a"])(this,Ht,Object(m["a"])(this,Ht)-4),void(Object(m["a"])(this,Ht)<0&&Object(h["a"])(this,Ht,0));Object(m["a"])(this,Ft).indexOf(e)>=0&&(Object(m["a"])(this,Ht)<=40?Object(h["a"])(this,Ht,Object(m["a"])(this,Ht)+6):Object(h["a"])(this,Ht,Object(m["a"])(this,Ht)+2),Object(h["a"])(this,Lt,e))}},{key:"mobileBtEvent",value:function(t){var e={keyCode:"left"==t?65:83};this.keyEvent(e)}},{key:"power",get:function(){return Object(m["a"])(this,Ht)}},{key:"distance",get:function(){return Object(m["a"])(this,Yt)}}]),t}()),Rt=new WeakMap,Ft=new WeakMap,Lt=new WeakMap,Ut=new WeakMap,Ht=new WeakMap,Yt=new WeakMap,zt=Nt,qt={components:{CountDown:kt,GameGraphics:It,GameMsg:At},props:["begin"],watch:{begin:function(t){t&&(this.countDownShow=!0)},countDownShow:function(t){t&&this.$refs.gameGraphics.showMobileInterface()},sound:function(t){t?(this.swimStart&&!this.swimEnd&&K.loader.resources.soundCrowd.sound.play({loop:!0}),K.loader.resources.soundCrowd.sound.volume=.3):K.loader.resources.soundCrowd.sound.stop()}},data:function(){return{startTime:0,gameTickerInterval:null,gameFinishTickerInterval:null,timer:Object,countDownShow:!1,swimStart:!1,swimEnd:!1,timing:0,stats:new Array(2),player1KeyPressEngine:Object,player1Power:Number,player1Distance:Number,distance:25,preEndRation:.1,endPower:0}},computed:Object(o["a"])({},Object(r["c"])({players:"players",swimStyle:"style",isMobile:"isMobile",sound:"sound"}),{displayTiming:function(){return Pt(this.timing)},progressBar:function(){return"".concat(this.player1Distance/this.distance*100,"%")},progressRatio:function(){return this.player1Distance/this.distance}}),methods:Object(o["a"])({},Object(r["b"])([tt,Z]),{countDownDone:function(){console.log("[GameScreen] - countDownDone()"),this.countDownShow=!1,this.swimStart=!1,this.startGame(),this.sound&&K.loader.resources.soundCrowd.sound.play({loop:!0}),this.sound&&(K.loader.resources.soundCrowd.sound.volume=.3)},startGame:function(){this.swimStart=!0,this.swimEnd=!1,this.startTime=(new Date).getTime(),this.gameTickerInterval&&clearInterval(this.gameTickerInterval),this.gameTickerInterval=setInterval(this.gameTicker,40),this.stats[0]=new zt(0),this.stats[0].start(),this.players>=2&&(this.stats[1]=new zt(1),this.stats[1].start())},mobileBtEvent:function(t){this.stats[0]&&this.stats[0].mobileBtEvent(t)},gameTicker:function(){var t=(new Date).getTime();this.timing=t-this.startTime,this.player1Power=this.stats[0].power,this.timing>=6e4?this.endGame():(this.stats[0].distance>=this.distance*(1-this.preEndRation)&&this.finishSwim(),this.player1Distance=this.stats[0].distance)},finishSwim:function(){clearInterval(this.gameTickerInterval),this.gameTickerInterval=null,this.endPower=this.stats[0].power,this.gameFinishTickerInterval&&(clearInterval(this.gameFinishTickerInterval),this.gameFinishTickerInterval=null),this.gameFinishTickerInterval=setInterval(this.finishSwimTicker,40)},finishSwimTicker:function(){this.$refs.gameGraphics.finishSwim(this.endPower),console.log("finishSwimTicker",this.$refs),this.$refs.gameGraphics.swimEndingDone&&(clearInterval(this.gameFinishTickerInterval),this.gameFinishTickerInterval=null,this.endGame())},endGame:function(){this.gameTickerInterval&&clearInterval(this.gameTickerInterval),this[tt](),this[Z](this.timing),this.swimEnd=!0,this.stats[0].stop(),this.players>=2&&this.stats[1].stop(),K.loader.resources.soundCrowd.sound.stop()},restartGame:function(){var t=this;clearInterval(this.gameTickerInterval),this.gameTickerInterval=null,this.startTime=0,this.countDownShow=!1,this.swimStart=!1,this.swimEnd=!1,this.timing=0,this.stats[0],this.$nextTick((function(){t.$refs.gameGraphics.restartGame()})),this.$refs.gameMsg.reset(),console.log("[GameScreen] - restart")}})},Jt=qt,Vt=(s("58f1"),Object(lt["a"])(Jt,vt,wt,!1,null,"50fb212b",null)),Kt=Vt.exports,Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"end-screen flex flex-col justify-center"},[s("div",{staticClass:"end-screen-holder bg-white pb-8 text-center"},[s("img",{staticClass:"pb-8",attrs:{src:"images/pattern.jpg"}}),s("div",{staticClass:"flex relative"},[s("div",{staticClass:"col relative w-1/2 flex align-center"},[s("div",{staticClass:"throphy m-auto"},[t.displayBadge?s("img",{staticClass:"mx-auto mb-2",attrs:{src:t.badgeURL}}):t._e(),t.displayBadge?s("h1",{staticClass:"text-lg uppercase badge-text",class:t.cssBadgeClass},[t._v("You Achieved "+t._s(t.badge)+"!")]):t._e(),t.displayBadge?t._e():s("div",{staticClass:"try-harder"},[s("h1",{staticClass:"text-3xl"},[t._v("You Can Do Better!")])])])]),s("div",{staticClass:"col relative w-1/2"},[s("div",{staticClass:"timing h-12 relative"},[s("h1",{staticClass:"outline absolute"},[t._v(t._s(t.displayTiming))]),s("h1",{staticClass:"absolute"},[t._v(t._s(t.displayTiming))])]),s("h2",{staticClass:"text-xl mb-8"},[t._v("Impressive!")]),s("h3",{staticClass:"text-lg"},[t._v("Share Your Achievement Badge!")]),s("div",{staticClass:"col mt-2"},[s("social-sharing",{attrs:{url:t.shareUrl,title:"The Progressive JavaScript Framework",description:"Intuitive, Fast and Composable MVVM for building interactive interfaces."},inlineTemplate:{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("network",{attrs:{network:"facebook"}},[s("div",{staticClass:"social-icon w-12 h-12 flex items-center mx-auto my-auto"},[s("font-awesome-icon",{staticClass:"m-auto",attrs:{icon:["fab","facebook-square"]}},[t._v("Facebook")])],1)])},staticRenderFns:[]}})],1),s("button",{staticClass:"mx-auto uppercase tracking-widest text-xl bg-blue-500 hover_bg-blue-700 text-white font-bold py-2 px-4 rounded-sm border-solid border mr-2 mt-6",on:{click:t.onTryAgain,mouseover:t.onBthHover}},[t._v(" Play Again"),s("font-awesome-icon",{staticClass:"m-auto ml-1 pl-1",attrs:{icon:["fas","redo-alt"]}})],1)])])])])},Xt=[],Zt={data:function(){return{baseUrl:""}},mounted:function(){c["a"].from(this.$el,{opacity:0,y:-100,duration:.4}),this.baseUrl=document.getElementById("swim-game-url").dataset.baseurl},computed:Object(o["a"])({},Object(r["c"])({timing:"gameTiming",style:"style",sound:"sound"}),{displayTiming:function(){return Pt(this.timing)},displayBadge:function(){return this.timing<=3e4},badge:function(){var t="";return this.timing<=3e4&&(t="bronze"),this.timing<=25e3&&(t="silver"),this.timing<=2e4&&(t="gold"),t},badgeURL:function(){var t="";this.timing<=3e4&&(t="bronze"),this.timing<=25e3&&(t="silver"),this.timing<=2e4&&(t="gold");var e="images/badges/".concat(this.style,"-").concat(t,".png");return e},cssBadgeClass:function(){return{gold:"gold"==this.badge,silver:"silver"==this.badge,bronze:"bronze"==this.badge}},shareUrl:function(){var t=this.badge;return"".concat(this.baseUrl,"/?style=").concat(this.style,"&position=").concat(t)}}),methods:{onStartGame:function(){c["a"].to(this.$el,{opacity:0,y:100,duration:.4,onComplete:this.dispatchComplete})},dispatchComplete:function(){this.$emit("outro-complete",{type:"endScreen"})},onTryAgain:function(){this.$emit("outro-complete",{type:"endScreen",value:"try-again"}),this.sound&&K.loader.resources.soundClick.sound.play()},onBthHover:function(){this.sound&&K.loader.resources.soundHover.sound.play()}}},te=Zt,ee=(s("11c4"),s("8e9e"),Object(lt["a"])(te,Qt,Xt,!1,null,"11c89671",null)),se=ee.exports,ie=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ae=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preloader flex flex-col justify-center bg-blue-500"},[s("img",{staticClass:"m-auto",attrs:{src:"images/123.gif"}})])}],ne={},oe=ne,re=(s("9e16"),Object(lt["a"])(oe,ie,ae,!1,null,"567ea9fd",null)),ce=re.exports,le={name:"App",components:{StartScreen:dt,GameScreen:Kt,Preloader:ce,EndScreen:se},data:function(){return{currentScreenId:0,screenSeq:[dt,ft,se],exitTransitionClass:"animated bounceOut",assetsLoaded:!1,preloader:!0,gameBegin:!1}},computed:Object(o["a"])({},Object(r["c"])({timerStarted:"timerStarted",timerDone:"timerDone",gameDone:"gameDone",sound:"sound"}),{currentScreen:function(){if(this.assetsLoaded&&(this.gameDone||this.screenSeq[this.currentScreenId]!==se))return this.screenSeq[this.currentScreenId]},gameState:function(){return""}}),watch:{},mounted:function(){this.preloadImageAssets()},methods:Object(o["a"])({},Object(r["b"])([st,et,at]),{outroComplete:function(t){"startScreen"===t.type?(t.value?this[st](2):this[st](1),this.currentScreenId++):"instructionScreen"===t.type?(this.gameBegin=!0,this.currentScreenId++):"endScreen"===t.type&&"try-again"===t.value&&(this.gameBegin=!1,this.currentScreenId=0,console.log("this.$refs",this.$refs),this[et](),this.$refs.gameScreen.restartGame())},preloadImageAssets:function(){var t=K.loader;t.add("poolstart1","images/pool/poolstart-1.jpg"),t.add("poolstart2","images/pool/poolstart-2.jpg"),t.add("poolend1","images/pool/poolend-1.jpg"),t.add("poolend2","images/pool/poolend-2.jpg"),t.add("poolmiddle","images/pool/poolmiddle.jpg"),t.add("pooloverlay","images/pool/overlay.png"),t.add("poolmiddlefloat","images/pool/poolmiddle-float.png"),t.add("msgMid0","images/msg/a-doinggreat.png"),t.add("msgMid1","images/msg/a-greatstrokes.png"),t.add("msgMid2","images/msg/a-halfwaythere.png"),t.add("msgEnd0","images/msg/b-almostthere.png"),t.add("msgEnd1","images/msg/b-yougotthis.png");for(var e=0;e<24;e++)t.add("water".concat(e+1),"images/pool/water/water".concat(e+1,".png"));for(var s=0;s<8;s++)t.add("swimmerStart".concat(s+1),"images/swimming/startjump/startjump".concat(s+1,".png"));for(var i=0;i<21;i++)t.add("swimmerFreestyle".concat(i+1),"images/swimming/freestyle/freestyle".concat(i+1,".png"));for(var a=0;a<12;a++)t.add("swimmerButterfly".concat(a+1),"images/swimming/butterfly/butterfly".concat(a+1,".png"));for(var n=0;n<19;n++)t.add("swimmerIdle".concat(n+1),"images/swimming/idle/idle".concat(n+1,".png"));t.add("soundCount","sounds/countdown-1.mp3"),t.add("soundSplashStart","sounds/splash.mp3"),t.add("soundPopup","sounds/pop-up.mp3"),t.add("soundHover","sounds/button-hover.mp3"),t.add("soundClick","sounds/button-click.mp3"),t.add("soundSwimming","sounds/swimming.mp3"),t.add("soundCrowd","sounds/crowd.mp3"),t.load(this.onLoadComplete)},onLoadComplete:function(){var t=this;console.log(this.$refs),this.assetsLoaded=!0,c["a"].to(this.$refs.preloader.$el,{opacity:0,duration:1,delay:1,onComplete:function(){t.preloader=!1}}),K.loader.resources.soundSwimming.sound.volume=.5,K.loader.resources.soundSwimming.sound.play({loop:!0})},toggleSound:function(){this.sound?K.loader.resources.soundSwimming.sound.stop():K.loader.resources.soundSwimming.sound.play({loop:!0}),this[at](!this.sound)}})},ue=le,de=(s("5c0b"),Object(lt["a"])(ue,a,n,!1,null,null,null)),he=de.exports,me=s("c6c6"),be=s.n(me),pe="TIMER_START_MUTATION",ge="TIMER_DONE_MUTATION",fe="GAME_DONE_MUTATION",ve="SET_PLAYERS_MUTATION",we="SET_STYLE_MUTATION",je="SET_GAME_TIMING_MUTATION",Oe="SET_SOUND_MUTATION",ye=new be.a(window.navigator.userAgent);i["default"].use(r["a"]);var Se=new r["a"].Store({state:{timerStarted:!1,timerDone:!1,players:1,style:"freestyle",gameDone:!1,gameStart:!1,gameTiming:0,isMobile:ye.mobile(),sound:!0},mutations:(J={},Object(d["a"])(J,pe,(function(t,e){t.timerStarted=e})),Object(d["a"])(J,ge,(function(t,e){t.timerDone=e})),Object(d["a"])(J,ve,(function(t,e){t.players=e})),Object(d["a"])(J,we,(function(t,e){t.style=e})),Object(d["a"])(J,fe,(function(t,e){t.gameDone=e})),Object(d["a"])(J,je,(function(t,e){t.gameTiming=e})),Object(d["a"])(J,Oe,(function(t,e){t.sound=e})),J),actions:(V={},Object(d["a"])(V,Q,(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.commit(pe,e)})),Object(d["a"])(V,X,(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.commit(ge,e)})),Object(d["a"])(V,st,(function(t,e){t.commit(ve,e)})),Object(d["a"])(V,it,(function(t,e){t.commit(we,e)})),Object(d["a"])(V,tt,(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.commit(fe,e)})),Object(d["a"])(V,Z,(function(t,e){t.commit(je,e)})),Object(d["a"])(V,at,(function(t,e){t.commit(Oe,e)})),Object(d["a"])(V,et,(function(t){t.commit(pe,!1),t.commit(ge,!1),t.commit(fe,!1),t.commit(je,0)})),V),modules:{}}),Ce=s("5299"),ke=s.n(Ce),Me=s("ecee"),_e=s("c074"),Te=s("f2d1"),Ee=s("ad3d");Me["c"].add(Te["a"],_e["a"]),i["default"].config.productionTip=!1,i["default"].use(ke.a),i["default"].component("font-awesome-icon",Ee["a"]),new i["default"]({store:Se,render:function(t){return t(he)}}).$mount("#swim-game")},5793:function(t,e,s){},"58f1":function(t,e,s){"use strict";var i=s("5793"),a=s.n(i);a.a},"5c0b":function(t,e,s){"use strict";var i=s("9c0c"),a=s.n(i);a.a},"86c9":function(t,e,s){},"8e9e":function(t,e,s){"use strict";var i=s("c4d5"),a=s.n(i);a.a},"913c":function(t,e,s){},"99f7":function(t,e,s){"use strict";var i=s("1d33"),a=s.n(i);a.a},"9c0c":function(t,e,s){},"9e16":function(t,e,s){"use strict";var i=s("a8ec"),a=s.n(i);a.a},a8ec:function(t,e,s){},c1a8:function(t,e,s){"use strict";var i=s("913c"),a=s.n(i);a.a},c4d5:function(t,e,s){},fc4b:function(t,e,s){"use strict";var i=s("29bd"),a=s.n(i);a.a}});
//# sourceMappingURL=app.9078f2c2.js.map