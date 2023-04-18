import{r as s,o as n,c as a,a as o,b as e,w as p,F as t,e as c,d as u}from"./app.bdf83c82.js";const r={},l=o("h1",{id:"socks",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#socks","aria-hidden":"true"},"#"),c(" Socks")],-1),i=c("标准 Socks 协议实现，兼容 "),d={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},b=c("Socks 4"),k=c("、"),q={href:"https://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4A.protocol",target:"_blank",rel:"noopener noreferrer"},m=c("Socks 4a"),h=c(" 和 Socks 5。"),g=u('<div class="custom-container danger"><p class="custom-container-title">警告</p><p><strong>Socks 协议没有对传输加密，不适宜经公网中传输</strong></p></div><p><code>Socks</code> 入站更有意义的用法是在局域网或本机环境下监听，为其他程序提供本地服务。</p><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;auth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;noauth&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;accounts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><code>auth</code>: &quot;noauth&quot; | &quot;password&quot;</p></blockquote><p>Socks 协议的认证方式，支持 <code>&quot;noauth&quot;</code> 匿名方式和 <code>&quot;password&quot;</code> 用户密码方式。</p><p>默认值为 <code>&quot;noauth&quot;</code>。</p><blockquote><p><code>accounts</code>: [ <a href="#accountobject">AccountObject</a> ]</p></blockquote><p>一个数组，数组中每个元素为一个用户帐号。</p><p>此选项仅当 <code>auth</code> 为 <code>password</code> 时有效。</p><p>默认值为空。</p><blockquote><p><code>udp</code>: true | false</p></blockquote><p>是否开启 UDP 协议的支持。</p><p>默认值为 <code>false</code>。</p><blockquote><p><code>ip</code>: address</p></blockquote><p>当开启 UDP 时，Xray 需要知道本机的 IP 地址。</p><p>默认值为 <code>&quot;127.0.0.1&quot;</code>。</p><blockquote><p><code>userLevel</code>: number</p></blockquote>',18),f=c("用户等级，连接会使用这个用户等级对应的 "),y=c("本地策略"),j=c("。"),v=c("userLevel 的值, 对应 "),S=c("policy"),w=c(" 中 "),x=o("code",null,"level",-1),O=c(" 的值。 如不指定, 默认为 0。"),L=u('<h3 id="accountobject" tabindex="-1"><a class="header-anchor" href="#accountobject" aria-hidden="true">#</a> AccountObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-username&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-password&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>用户名，字符串类型。必填。</p><blockquote><p><code>pass</code>: string</p></blockquote><p>密码，字符串类型。必填。</p>',6);r.render=function(c,u){const r=s("OutboundLink"),_=s("RouterLink");return n(),a(t,null,[l,o("p",null,[i,o("a",d,[b,e(r)]),k,o("a",q,[m,e(r)]),h]),g,o("p",null,[f,e(_,{to:"/config/policy.html#levelpolicyobject"},{default:p((()=>[y])),_:1}),j]),o("p",null,[v,e(_,{to:"/config/policy.html#policyobject"},{default:p((()=>[S])),_:1}),w,x,O]),L],64)};export default r;
