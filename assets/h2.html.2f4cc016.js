import{d as n}from"./app.eea940da.js";const s={},a=n('<h1 id="http-2" tabindex="-1"><a class="header-anchor" href="#http-2" aria-hidden="true">#</a> HTTP/2</h1><p>基于 HTTP/2 的传输方式。</p><p>它完整按照 HTTP/2 标准实现，可以通过其它的 HTTP 服务器（如 Nginx）进行中转。</p><p>由 HTTP/2 的建议，客户端和服务器必须同时开启 TLS 才可以正常使用这个传输方式。</p><p>HTTP/2 内置多路复用，不建议使用 HTTP/2 时启用 mux.cool。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当前版本的 HTTP/2 的传输方式并不强制要求服务器端有 TLS 配置. 这使得可以在特殊用途的分流部署环境中，由外部网关组件完成 TLS 层对话，Xray 作为后端应用，网关和 Xray 间使用称为 <code>h2c</code> 的明文 http/2 进行通讯。</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>⚠️ 如果你正在使用回落，请注意下列事项：</p><ul><li>请确认 (x)tlsSettings.alpn 中包含 h2，否则 HTTP/2 无法完成 TLS 握手。</li><li>HTTP/2 无法通过进行 Path 分流，建议使用 SNI 分流。</li></ul></div><h2 id="httpobject" tabindex="-1"><a class="header-anchor" href="#httpobject" aria-hidden="true">#</a> HttpObject</h2><p><code>HttpObject</code> 对应传输配置的 <code>httpSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;xray.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/random/path&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;read_idle_timeout&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;health_check_timeout&quot;</span><span class="token operator">:</span> <span class="token number">15</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>host</code>: [string]</p></blockquote><p>一个字符串数组，每一个元素是一个域名。</p><p>客户端会随机从列表中选出一个域名进行通信，服务器会验证域名是否在列表中。</p><blockquote><p><code>path</code> string</p></blockquote><p>HTTP 路径，由 <code>/</code> 开头, 客户端和服务器必须一致。</p><p>默认值为 <code>&quot;/&quot;</code>。</p><blockquote><p><code>read_idle_timeout</code> number</p></blockquote><p>单位秒，当这段时间内没有接收到数据时，将会进行健康检查。</p><p>健康检查默认<strong>不启用</strong>。</p><p>仅需在<strong>客户端</strong>配置。</p><blockquote><p><code>health_check_timeout</code> number</p></blockquote><p>单位秒，健康检查的超时时间。如果在这段时间内没有完成健康检查，即认为健康检查失败。默认值为 <code>15</code>。</p>',22);s.render=function(n,s){return a};export default s;