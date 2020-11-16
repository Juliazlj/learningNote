(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{416:function(t,a,s){t.exports=s.p+"assets/img/HTTP_request_format.b8993c73.png"},417:function(t,a,s){t.exports=s.p+"assets/img/service_response_format.3e30476a.png"},418:function(t,a,s){t.exports=s.p+"assets/img/browser_resource_cache.5fc2f88a.png"},491:function(t,a,s){t.exports=s.p+"assets/img/redirect.01db98e0.png"},508:function(t,a,s){"use strict";s.r(a);var r=s(4),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),r("h2",{attrs:{id:"构建请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建请求"}},[t._v("#")]),t._v(" 构建请求")]),t._v(" "),r("p",[t._v("构建请求行")]),t._v(" "),r("h2",{attrs:{id:"查找缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查找缓存"}},[t._v("#")]),t._v(" 查找缓存")]),t._v(" "),r("p",[t._v("查找浏览器缓存")]),t._v(" "),r("h2",{attrs:{id:"准备ip地址和端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备ip地址和端口"}},[t._v("#")]),t._v(" 准备IP地址和端口")]),t._v(" "),r("p",[t._v("请求DNS返回域名对应的IP，若浏览器缓存了DNS，则不会再访问一次DNS服务器")]),t._v(" "),r("p",[t._v("默认端口是80")]),t._v(" "),r("h2",{attrs:{id:"等待tcp队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#等待tcp队列"}},[t._v("#")]),t._v(" 等待TCP队列")]),t._v(" "),r("p",[t._v("Chrome 有个机制，同一个域名同时最多只能建立 6 个连接，如果请求数据量大于6个则要进行等待，若小于6个则直接进行TCP连接")]),t._v(" "),r("h2",{attrs:{id:"建立tcp连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#建立tcp连接"}},[t._v("#")]),t._v(" 建立TCP连接")]),t._v(" "),r("p",[t._v("三次握手")]),t._v(" "),r("h2",{attrs:{id:"发送http请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发送http请求"}},[t._v("#")]),t._v(" 发送HTTP请求")]),t._v(" "),r("p",[r("img",{attrs:{src:s(416),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"服务端处理http请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端处理http请求"}},[t._v("#")]),t._v(" 服务端处理HTTP请求")]),t._v(" "),r("h3",{attrs:{id:"返回请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返回请求"}},[t._v("#")]),t._v(" 返回请求")]),t._v(" "),r("p",[r("img",{attrs:{src:s(417),alt:""}})]),t._v(" "),r("h3",{attrs:{id:"断开连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#断开连接"}},[t._v("#")]),t._v(" 断开连接")]),t._v(" "),r("p",[t._v("通常一旦服务器向客户端返回了请求数据，它就要关闭TCP连接了，不过若在头部信息加入"),r("code",[t._v("Connection:Keep-Alive")]),t._v(",那么浏览器就可以继续通过同一个TCP连接发送请求，这样就可以省去了下次三次握手的时间")]),t._v(" "),r("h2",{attrs:{id:"重定向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[t._v("#")]),t._v(" 重定向")]),t._v(" "),r("p",[r("img",{attrs:{src:s(491),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"q-a"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),r("h3",{attrs:{id:"为什么很多站点第二次打开速度会很快"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么很多站点第二次打开速度会很快"}},[t._v("#")]),t._v(" 为什么很多站点第二次打开速度会很快")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("DNS缓存和页面资源缓存")])]),t._v(" "),r("li"),t._v(" "),r("li",[r("p",[r("img",{attrs:{src:s(418),alt:""}})])])])])}),[],!1,null,null,null);a.default=e.exports}}]);