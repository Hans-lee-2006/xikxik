webpackJsonp([1],{I03a:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"ui menu"},[s("router-link",{staticClass:"item",attrs:{to:"/"}},[s("i",{staticClass:"home icon"})]),this._m(0)],1),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"right menu"},[s("div",{staticClass:"item"},[s("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fxikxik.bestian.tw&layout=button_count&size=small&appId=485195848253155&width=64&height=20",width:"64",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})])])}]};var n=e("VU/8")({name:"App"},a,!1,function(t){e("I03a")},null,null).exports,l=e("/ocq"),r={name:"HelloWorld",data:function(){return{a:["海鷗","貓","狗","鯨魚","水獺","烏龜","地鼠","蝸牛","蝙蝠","大象","獅子"],n:["天空","大火","風","雷電","浮雲","山嵐","大海","石頭","漩渦","樹","草","花"],pla:["湖泊","森林","山脈","海島","平原","沼澤","高山","大地","河流"],vi:["站著","坐著","躺著","沉默","停止","持續轉動","睡著","獨自漫歩","靜坐","自爆","休息"],vt:["毆打","拍打","載運","推動","舉起","愛著","移動","衝擊","包容","擁抱","親吻","固定","敲擊"],c:["沒有人知道為什麼","原來","過了很久","時光飛逝"],num:[1,2,3,5,10,100,200,1e3],per:["和尚","道士","外星人","剌客","魔法師","智者","戰士","修行人","小偷","工頭","國王","修女","超人","漁夫","農婦","小女孩","小男孩"]}},methods:{p:function(t){var s=this[t];return s[Math.floor(Math.random()*s.length)]}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hello"},[e("div",{staticClass:"ui container grid"},[t._m(0),e("div",{staticClass:"two column doubling row",attrs:{id:"poet"}},[e("div",{staticClass:"six wide column ui teal segment"},[e("h1",[t._v("拾詩氏")]),e("img",{attrs:{src:"http://lorempixel.com/400/200/"}}),e("div",{staticClass:"ui list"},[t._l([1,2],function(s){return e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("per"))+t._s(t.p("vt"))+t._s(t.p("a")))])])}),e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("c")))])]),t._l([1,2],function(s){return e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("per"))+t._s(t.p("vt"))+t._s(t.p("a")))])])}),e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("a"))+t._s(t.p("vi"))+"、"+t._s(t.p("vi")))])]),e("div",{staticClass:"item"},[e("h2",[t._v("只剩下"+t._s(t.p("pla")))])])],2)]),e("div",{staticClass:"ten wide column left aligned ui black segment"},[e("h1",[t._v("小道小報")]),e("img",{attrs:{src:"http://lorempixel.com/300/200/"}}),e("div",{staticClass:"ui bulleted divided list"},[e("div",{staticClass:"item"},[e("h3",[t._v(t._s(t.p("per"))+"昨天在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vt"))+t._s(t.p("a"))+"，引來"+t._s(t.p("num"))+"人關注")])]),e("div",{staticClass:"item"},[e("h3",[t._v(t._s(t.p("per"))+"和"+t._s(t.p("per"))+"昨天竟然在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vi"))+"了"+t._s(t.p("num"))+" 分鐘，大家都覺得很神奇")])]),e("div",{staticClass:"item"},[e("h3",[t._v("昨天夜裡"+t._s(t.p("per"))+"和"+t._s(t.p("per"))+"在"+t._s(t.p("pla"))+"旁彼此"+t._s(t.p("vt"))+"。他們相互"+t._s(t.p("vt"))+"又"+t._s(t.p("vt"))+"，最後決定一起"+t._s(t.p("vi")))])]),e("div",{staticClass:"item"},[e("h3",[t._v(t._s(t.p("per"))+"和"+t._s(t.p("per"))+"昨天在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vt"))+t._s(t.p("a"))+"，引來"+t._s(t.p("num"))+"人關注")])]),e("div",{staticClass:"item"},[e("h3",[t._v(t._s(t.p("per"))+"昨天竟然在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vi"))+"了"+t._s(t.p("num"))+" 分鐘，大家都覺得很神奇")])]),e("div",{staticClass:"item"},[e("h3",[t._v("昨天夜裡"+t._s(t.p("per"))+"和"+t._s(t.p("per"))+"在"+t._s(t.p("pla"))+"旁彼此"+t._s(t.p("vt"))+"。他們相互"+t._s(t.p("vt"))+"又"+t._s(t.p("vt"))+"，最後決定一起"+t._s(t.p("vi")))])])])])]),e("div",{staticClass:"one column row"},[e("div",{staticClass:"column ui segment"},[e("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-7209910540592367","data-ad-slot":"8130621052"}})],1)]),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[this._v("再來！")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[this._v("再來！")])])])}]};var c=e("VU/8")(r,p,!1,function(t){e("UB7a")},"data-v-116bad10",null).exports;i.a.use(l.a);var o=new l.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),_=(e("kVq8"),e("pVtm")),u=e.n(_);i.a.use(e("B60x")),i.a.use(u.a.Adsense),i.a.use(u.a.InArticleAdsense),i.a.config.productionTip=!1,new i.a({el:"#app",router:o,components:{App:n},template:"<App/>"})},UB7a:function(t,s){},kVq8:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.6e670f19d55048b7df46.js.map