import{_ as c,r as l,o as i,c as d,a as o,b as e,d as n,w as s,e as a}from"./app-59d7Q49j.js";const u={},r=a(`<h1 id="freedom" tabindex="-1"><a class="header-anchor" href="#freedom"><span>Freedom</span></a></h1><p>Freedom is an outbound protocol that can be used to send (normal) TCP or UDP data to any network.</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject"><span>OutboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fragment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;packets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tlshello&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100-200&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10-20&quot;</span> <span class="token comment">// ms</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proxyProtocol&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;UseIP&quot; | &quot;UseIPv4&quot; | &quot;UseIPv6&quot;</p></blockquote><p>When the destination address is a domain name, configure the corresponding value for Freedom&#39;s behavior:</p>`,6),p=o("li",null,[o("code",null,'"AsIs"'),e(": Freedom resolves the domain name using the system DNS server and connects to it.")],-1),h=o("code",null,'"UseIP"',-1),m=o("code",null,'"UseIPv4"',-1),q=o("code",null,'"UseIPv6"',-1),v=o("code",null,'"AsIs"',-1),f={class:"custom-container tip"},k=o("p",{class:"custom-container-title"},"TIP 1",-1),b=o("code",null,'"UseIP"',-1),_=o("code",null,"sendThrough",-1),g=o("code",null,"sendThrough",-1),y=a('<div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>When using the <code>&quot;UseIPv4&quot;</code> or <code>&quot;UseIPv6&quot;</code> mode, Freedom will only use the corresponding IPv4 or IPv6 address. If <code>sendThrough</code> specifies a mismatched local address, the connection will fail.</p></div><blockquote><p><code>redirect</code>: address_port</p></blockquote><p>Freedom will force all data to be sent to the specified address (instead of the address specified in the inbound).</p><p>It is a string value, for example: <code>&quot;127.0.0.1:80&quot;</code>, <code>&quot;:1234&quot;</code>.</p><p>When the address is not specified, such as <code>&quot;:443&quot;</code>, Freedom will not modify the original destination address. When the port is <code>0</code>, such as <code>&quot;xray.com:0&quot;</code>, Freedom will not modify the original port.</p><blockquote><p><code>userLevel</code>: number</p></blockquote>',6),P=o("code",null,"userLevel",-1),I=o("code",null,"level",-1),T=a("<blockquote><p><code>fragment</code>: map</p></blockquote><p>A key-value map used to control TCP fragmentation，under some circumstances it can cheat the censor syetem, like bypass a SNI blacklist.</p><p><code>&quot;packets&quot;</code>：support two different methods. &quot;1-3&quot; is for segmentation at TCP layer, applying to the beginning 1 to 3 data writes by the client. &quot;tlshello&quot; is for TLS client hello packet fragmentation.</p><p><code>&quot;length&quot;</code>: length to make the cut</p><p><code>&quot;interval&quot;</code>: time between fragments（ms）</p><blockquote><p><code>proxyProtocol</code>: number</p></blockquote><p>The value of <code>proxyProtocol</code> represents the PROXY Protocol version. default value is <code>0</code>.</p>",7);function w(x,U){const t=l("RouterLink");return i(),d("div",null,[r,o("ul",null,[p,o("li",null,[h,e(", "),m,e(", and "),q,e(": Xray resolves the domain name using the built-in "),n(t,{to:"/en/config/dns.html"},{default:s(()=>[e("DNS server")]),_:1}),e(" and connects to it. The default value is "),v,e(".")])]),o("div",f,[k,o("p",null,[e("When using the "),b,e(" mode and the "),_,e(" field is specified in the "),n(t,{to:"/en/config/outbound.html#outboundobject"},{default:s(()=>[e("outbound connection configuration")]),_:1}),e(", Freedom will automatically determine the required IP type, IPv4 or IPv6, based on the value of "),g,e(".")])]),y,o("p",null,[e("User level. The connection will use the corresponding "),n(t,{to:"/en/config/policy.html#levelpolicyobject"},{default:s(()=>[e("local policy")]),_:1}),e(" for this user level.")]),o("p",null,[e("The value of "),P,e(" corresponds to the value of "),I,e(" in the "),n(t,{to:"/en/config/policy.html#policyobject"},{default:s(()=>[e("policy")]),_:1}),e(". If not specified, the default value is 0.")]),T])}const F=c(u,[["render",w],["__file","freedom.html.vue"]]);export{F as default};
