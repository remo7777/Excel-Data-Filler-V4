import{_ as a,o as e,c as s,O as o}from"./chunks/framework.d7e37bdc.js";const D=JSON.parse('{"title":"Javascript Code","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/field-types/javascript-code.md","filePath":"documentation/field-types/javascript-code.md","lastUpdated":1681787575000}'),t={name:"documentation/field-types/javascript-code.md"},l=o(`<h1 id="javascript-code" tabindex="-1">Javascript Code <a class="header-anchor" href="#javascript-code" aria-label="Permalink to &quot;Javascript Code&quot;">​</a></h1><p>You can use Javascript code in any field or you can give any field only in <strong>Javascript type</strong>. We have used <a href="https://microsoft.github.io/monaco-editor/" target="_blank" rel="noreferrer">Monaco Editor</a> to edit Javascript code.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Where your code is ending, add this line only then the form will run further.</span></span>
<span class="line"><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="global-variable" tabindex="-1">Global Variable <a class="header-anchor" href="#global-variable" aria-label="Permalink to &quot;Global Variable&quot;">​</a></h2><p>Use <code>$ENTRY_DATA</code> variable in the javascript code for access entry and excel data.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Entry Data</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">($ENTRY_DATA)</span></span></code></pre></div><h2 id="editor-shortcut-keys" tabindex="-1">Editor Shortcut keys <a class="header-anchor" href="#editor-shortcut-keys" aria-label="Permalink to &quot;Editor Shortcut keys&quot;">​</a></h2><ul><li><code>F11</code> = Full Screen</li><li><code>Ctrl + S</code> = Save</li><li><code>Ctrl + Z</code> = Word Wrap</li><li><code>Shift + Alt + L</code> = Debug Console Log</li></ul>`,8),n=[l];function c(r,i,p,d,h,y){return e(),s("div",null,n)}const C=a(t,[["render",c]]);export{D as __pageData,C as default};
