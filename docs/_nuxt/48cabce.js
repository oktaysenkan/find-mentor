(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{289:function(e,t,r){},296:function(e,t,r){"use strict";r(289)},299:function(e,t,r){"use strict";r.r(t);r(6),r(153);let n=null;let o=null;function l(e,t={}){let r=document.createElement(e);return Object.keys(t).forEach(e=>{r[e]=t[e]}),r}function c(e,t,r){return(window.getComputedStyle(e,r||null)||{display:"none"})[t]}function h(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};let t=e;for(;t!==document;){if("none"===c(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}let d=0,style=null;function _(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=m.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){let{offsetWidth:t,offsetHeight:r}=e,n=new ResizeObserver(()=>{(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==t||e.offsetHeight!==r))&&v(e)}),{detached:o,rendered:l}=h(e);e.__resize_observer_triggered__=!1===o&&!1===l,e.__resize_observer__=n,n.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){v(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(d||(style=function(e){var style=document.createElement("style");return style.type="text/css",style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(style),style}('.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}')),function(e){let t=c(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};let r=l("div",{className:"resize-triggers"}),n=l("div",{className:"resize-expand-trigger"}),o=l("div"),h=l("div",{className:"resize-contract-trigger"});n.appendChild(o),r.appendChild(n),r.appendChild(h),e.appendChild(r),e.__resize_triggers__={triggers:r,expand:n,expandChild:o,contract:h},w(e),e.addEventListener("scroll",f,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=h(e).rendered,window.MutationObserver){let t=new MutationObserver(e.__resize_mutation_handler__);t.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=t}e.__resize_listeners__.push(t),d++}function m(){let{rendered:e,detached:t}=h(this);e!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(w(this),this.addEventListener("scroll",f,!0)),this.__resize_rendered__=e,v(this))}function f(){var e,t;w(this),this.__resize_raf__&&(e=this.__resize_raf__,o||(o=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),o(e)),this.__resize_raf__=(t=()=>{let e=function(e){let{width:t,height:r}=e.__resize_last__,{offsetWidth:n,offsetHeight:o}=e;return n!==t||o!==r?{width:n,height:o}:null}(this);e&&(this.__resize_last__=e,v(this))},n||(n=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),n(t))}function v(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach(t=>{t.call(e)})}function w(e){let{expand:t,expandChild:r,contract:n}=e.__resize_triggers__,{scrollWidth:o,scrollHeight:l}=n,{offsetWidth:c,offsetHeight:h,scrollWidth:d,scrollHeight:_}=t;n.scrollLeft=o,n.scrollTop=l,r.style.width=c+1+"px",r.style.height=h+1+"px",t.scrollLeft=d,t.scrollTop=_}var x={name:"Card",components:{VClamp:{name:"vue-clamp",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},expanded:Boolean},data(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText(){return this.text.slice(0,this.offset)+this.ellipsis},isClamped(){return!!this.text&&this.offset!==this.text.length},realText(){return this.isClamped?this.clampedText:this.text},realMaxHeight(){if(this.localExpanded)return null;const{maxHeight:e}=this;return e?"number"==typeof e?e+"px":e:null}},watch:{expanded(e){this.localExpanded=e},localExpanded(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)},isClamped:{handler(e){this.$nextTick(()=>this.$emit("clampchange",e))},immediate:!0}},mounted(){this.init(),this.$watch(e=>[e.maxLines,e.maxHeight,e.ellipsis,e.isClamped].join(),this.update),this.$watch(e=>[e.tag,e.text,e.autoresize].join(),this.init)},updated(){this.text=this.getText(),this.applyChange()},beforeDestroy(){this.cleanUp()},methods:{init(){this.$slots.default&&(this.offset=this.text.length,this.cleanUp(),this.autoresize&&(_(this.$el,this.update),this.unregisterResizeCallback=()=>{!function(e,t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);let r=e.__resize_listeners__;r&&(r.splice(r.indexOf(t),1),r.length||(e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",f),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null),!--d&&style&&style.parentNode.removeChild(style))}(this.$el,this.update)}),this.update())},update(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand(){this.localExpanded=!0},collapse(){this.localExpanded=!1},toggle(){this.localExpanded=!this.localExpanded},getLines(){return Object.keys([...this.$refs.content.getClientRects()].reduce((e,{top:t,bottom:r})=>{const n=`${t}/${r}`;return e[n]||(e[n]=!0),e},{})).length},isOverflow(){return!(!this.maxLines&&!this.maxHeight)&&(!!(this.maxLines&&this.getLines()>this.maxLines)||!!(this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight))},getText(){const[content]=(this.$slots.default||[]).filter(e=>!e.tag&&!e.isComment);return content?content.text:""},moveEdge(e){this.clampAt(this.offset+e)},clampAt(e){this.offset=e,this.applyChange()},applyChange(){this.$refs.text.textContent=this.realText},stepToFit(){this.fill(),this.clamp()},fill(){for(;(!this.isOverflow()||this.getLines()<2)&&this.offset<this.text.length;)this.moveEdge(1)},clamp(){for(;this.isOverflow()&&this.getLines()>1&&this.offset>0;)this.moveEdge(-1)},search(...e){const[t=0,r=this.offset]=e;if(r-t<=3)return void this.stepToFit();const n=Math.floor((r+t)/2);this.clampAt(n),this.isOverflow()?this.search(t,n):this.search(n,r)},cleanUp(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render(e){const t=[e("span",this.$isServer?{}:{ref:"text",attrs:{"aria-label":this.text.trim()}},this.$isServer?this.text:this.realText)],{expand:r,collapse:n,toggle:o}=this,l={expand:r,collapse:n,toggle:o,clamped:this.isClamped,expanded:this.localExpanded},c=this.$scopedSlots.before?this.$scopedSlots.before(l):this.$slots.before;c&&t.unshift(...Array.isArray(c)?c:[c]);const h=this.$scopedSlots.after?this.$scopedSlots.after(l):this.$slots.after;h&&t.push(...Array.isArray(h)?h:[h]);const d=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},d)}}},props:{person:{type:Object,required:!0},personType:{type:String,required:!0}},methods:{getProfilePicture:function(e){var t=e.match(/github.com\/([\w\d-]+)(.+)?/);return t?"https://avatars.githubusercontent.com/".concat(t[1]):""}}},z=(r(296),r(44)),component=Object(z.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.person?r("div",{class:"person-card "+e.personType,attrs:{itemscope:"",itemtype:"https://schema.org/Person"}},[r("div",{staticClass:"social-media"},[e.person.twitter_handle.length?r("div",{staticClass:"twitter"},[r("a",{attrs:{href:e.person.twitter_handle,target:"_blank",title:e.person.name+" twitter",itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","twitter"],color:"white"}})],1)]):e._e(),e._v(" "),e.person.github.length?r("div",{staticClass:"github"},[r("a",{attrs:{href:e.person.github,target:"_blank",title:e.person.name+" github",itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","github"],color:"white"}})],1)]):e._e(),e._v(" "),e.person.linkedin.length?r("div",{staticClass:"linkedin"},[r("a",{attrs:{href:e.person.linkedin,target:"_blank",title:e.person.name+" linkedin",itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","linkedin"],color:"white"}})],1)]):e._e()]),e._v(" "),r("NuxtLink",{attrs:{to:"/peer/"+e.person.slug,itemprop:"url"}},[r("div",{staticClass:"person-card-info"},[r("div",{staticClass:"profile-photo"},[e.person.github.length?r("img",{attrs:{src:e.getProfilePicture(e.person.github),alt:"mentee-profile-picture",itemprop:"image",loading:"lazy"}}):e._e(),e._v(" "),e.person.github.length?e._e():r("div",{staticClass:"non-image"})]),e._v(" "),r("v-clamp",{staticClass:"name",attrs:{autoresize:"","max-lines":1}},[e._v("\n        "+e._s(e.person.name)+"\n      ")]),e._v(" "),r("v-clamp",{staticClass:"interests",attrs:{autoresize:"","max-lines":3,itemprop:"seeks"}},[e._v("\n        "+e._s(e.person.displayInterests)+"\n      ")])],1)])],1):e._e()}),[],!1,null,null,null);t.default=component.exports},326:function(e,t,r){},370:function(e,t,r){"use strict";r(326)},722:function(e,t,r){"use strict";r.r(t);r(6),r(113);var n=r(23),o=(r(52),r(20)),l={fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("persons").where({mentor:{$in:["Mentee","İkisi de"]}}).limit(e.postList.mentee.limit).skip(e.postList.mentee.skip).fetch();case 2:e.postList.mentee.items=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{search:{keyword:null,isFilled:!1},search2:{keyword:null,isFilled:!1},postList:{mentee:{items:[],limit:16,skip:0}}}},methods:{loadMoreMentees:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.postList.mentee.skip+=t.postList.mentee.limit,r.next=3,t.$content("persons").where({mentor:{$in:["Mentee","İkisi de"]}}).limit(t.postList.mentee.limit).skip(t.postList.mentee.skip).fetch();case 3:l=r.sent,(o=t.postList.mentee.items).push.apply(o,Object(n.a)(l)),e.loaded(),l.length<=0&&e.complete();case 7:case"end":return r.stop()}}),r)})))()},searchMentee:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.search2.keyword="",t.next=3,e.$content("persons").where({mentor:{$in:["Mentee","İkisi de"]}}).search(e.search.keyword.toLowerCase()).fetch();case 3:r=t.sent,e.search.keyword.length>0?(e.search.isFilled=!0,e.postList.mentee.items=r):(e.postList.mentee.skip=0,e.$fetch(),e.search.isFilled=!1);case 5:case"end":return t.stop()}}),t)})))()},searchTopic:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.search.keyword="",t.next=3,e.$content("persons").where({interests:{$contains:e.search2.keyword.toLowerCase()},mentor:{$in:["Mentee","İkisi de"]}}).fetch();case 3:r=t.sent,e.search2.keyword.length>0?(e.search2.isFilled=!0,e.postList.mentee.items=r):(e.postList.mentee.skip=0,e.$fetch(),e.search2.isFilled=!1);case 5:case"end":return t.stop()}}),t)})))()}}},c=(r(370),r(44)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page mentees-page"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("\n      Mentees\n    ")]),e._v(" "),r("div",{staticClass:"persons-filters"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search.keyword,expression:"search.keyword"}],staticClass:"filter",attrs:{placeholder:"Search in Mentees"},domProps:{value:e.search.keyword},on:{input:[function(t){t.target.composing||e.$set(e.search,"keyword",t.target.value)},e.searchMentee]}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search2.keyword,expression:"search2.keyword"}],staticClass:"filter",attrs:{placeholder:"Search in Topics"},domProps:{value:e.search2.keyword},on:{input:[function(t){t.target.composing||e.$set(e.search2,"keyword",t.target.value)},e.searchTopic]}})]),e._v(" "),r("ul",{staticClass:"persons"},[e.postList.mentee.items.length<=0?r("h5",{staticClass:"d-block mb-4"},[e._v("\n        No results...\n      ")]):e._l(e.postList.mentee.items,(function(e,t){return r("PersonCard",{key:t,attrs:{person:e,"person-type":"mentee"}})}))],2),e._v(" "),r("client-only",[e.postList.mentee.items.length>=e.postList.mentee.limit&&!e.search.isFilled?r("infinite-loading",{on:{infinite:e.loadMoreMentees}}):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PersonCard:r(299).default})}}]);