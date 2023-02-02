import{_ as e,c as t,o as i,a as n}from"./app.5a30cd3c.js";const a="/image/url-matching-01.png",o="/image/url-open-01.png",s="/image/field-success-response-action-01.png",l="/image/field-error-response-action-01.png",r="/image/entry-response-01.png",c="/image/dynamic-response-msg-01.png",x=JSON.parse('{"title":"Form Field","description":"","frontmatter":{},"headers":[{"level":2,"title":"Insert Field","slug":"insert-field","link":"#insert-field","children":[{"level":3,"title":"Types of Field","slug":"types-of-field","link":"#types-of-field","children":[]},{"level":3,"title":"Upload File","slug":"upload-file","link":"#upload-file","children":[]},{"level":3,"title":"Execute Javascript","slug":"execute-javascript","link":"#execute-javascript","children":[]},{"level":3,"title":"URL Matching","slug":"url-matching","link":"#url-matching","children":[]},{"level":3,"title":"URL Open","slug":"url-open","link":"#url-open","children":[]},{"level":3,"title":"Send Request","slug":"send-request","link":"#send-request","children":[]},{"level":3,"title":"Action In Seconds","slug":"action-in-seconds","link":"#action-in-seconds","children":[]}]},{"level":2,"title":"Field Response Action","slug":"field-response-action","link":"#field-response-action","children":[{"level":3,"title":"Field Success Response Action","slug":"field-success-response-action","link":"#field-success-response-action","children":[]},{"level":3,"title":"Field Error Response Action","slug":"field-error-response-action","link":"#field-error-response-action","children":[]}]},{"level":2,"title":"Entry Response","slug":"entry-response","link":"#entry-response","children":[]}],"relativePath":"documentation/field.md","lastUpdated":1674413339000}'),d={name:"documentation/field.md"},h=n(`<h1 id="form-field" tabindex="-1">Form Field <a class="header-anchor" href="#form-field" aria-hidden="true">#</a></h1><p>Form Field which you can fill automatically through excel template</p><h2 id="insert-field" tabindex="-1">Insert Field <a class="header-anchor" href="#insert-field" aria-hidden="true">#</a></h2><p>After filling the form of the site, you have to insert the field of the form, this field is automatic fill. After entering the field name or field type, you can insert the field.</p><h3 id="types-of-field" tabindex="-1">Types of Field <a class="header-anchor" href="#types-of-field" aria-hidden="true">#</a></h3><ul><li>Text</li><li>Select</li><li>Multiple Select</li><li>Checkbox (Multiple Selection)</li><li>Radio (Single Selection)</li><li>Date</li><li>Button</li><li><a href="#upload-file">Upload File</a></li><li>Material Single Select</li><li>Material Multiple Select</li><li><a href="#execute-javascript">\u{1F469}\u200D\u{1F4BB} Javascript Code</a></li><li><a href="/documentation/functions.html#predefined-function">\u{1F680} Function</a></li><li><a href="/documentation/keys.html#special-key">\u{1F511} Keys</a></li><li>Insert HTML</li><li><a href="#url-matching">URL Matching</a></li><li><a href="#url-open">URL Open</a></li><li><a href="#send-request">Send Request</a></li><li><a href="#action-in-seconds">Action In Seconds</a></li><li><strong>(Scraper Data)</strong> Fetch Text</li><li><strong>(Scraper Data)</strong> Fetch HTML</li><li><strong>(Scraper Data)</strong> Fetch Simple Table Data</li><li><strong>(Google Form)</strong> Choice (Radio)</li><li><strong>(Google Form)</strong> Select</li><li><strong>(Google Form)</strong> Multiple Checkboxes</li><li><strong>(Google Form)</strong> Choice Linear Scale (Radio)</li><li><strong>(Google Form)</strong> Multiple Choice Grid (Radio)</li><li><strong>(Google Form)</strong> Multiple Checkboxes Grid (Checkbox)</li><li><strong>(Google Form)</strong> Date/Time</li><li><strong>(Google Form)</strong> Time/Duration</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Material field type works on Material framework like <strong>Vuetify, MUI, React Material, Angular Material</strong>, etc.</p></div><h3 id="upload-file" tabindex="-1">Upload File <a class="header-anchor" href="#upload-file" aria-hidden="true">#</a></h3><p>To select the file by extension, you must first install a program in the pc. Which can be downloaded from the link given below.</p><ul><li><a href="/install-edf-file-picker.exe">For Windows</a></li></ul><h3 id="execute-javascript" tabindex="-1">Execute Javascript <a class="header-anchor" href="#execute-javascript" aria-hidden="true">#</a></h3><p>You can use Javascript code in any field or you can give any field only in <strong>Javascript type</strong>. We have used <a href="https://microsoft.github.io/monaco-editor/" target="_blank" rel="noreferrer">Monaco Editor</a> to edit Javascript code. \u{1F680}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// Where your code is ending, add this line only then the form will run further.</span></span>
<span class="line"><span style="color:#A6ACCD;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">EXCEL-DATA-FILLER-V4-EXECUTE-JS-CODE-RESPONSE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="editor-shortcut-keys" tabindex="-1">Editor Shortcut keys <a class="header-anchor" href="#editor-shortcut-keys" aria-hidden="true">#</a></h4><ul><li><code>F11</code> = Full Screen</li><li><code>Ctrl + S</code> = Save</li><li><code>Ctrl + Z</code> = Word Wrap</li><li><code>Shift + Alt + L</code> = Debug Console Log</li></ul><h3 id="url-matching" tabindex="-1">URL Matching <a class="header-anchor" href="#url-matching" aria-hidden="true">#</a></h3><p>Check that the opened URL matches your URL. You can also add data from excel column in URL. as per the image below. And you can also use <a href="/documentation/keys.html#variable-keys">variable key</a> in it.</p><img src="`+a+'" width="400" height="400" alt="URL Matching"><h3 id="url-open" tabindex="-1">URL Open <a class="header-anchor" href="#url-open" aria-hidden="true">#</a></h3><p>If you are opening a url. You can also add data from an Excel column to Open URL. as per the image below. And you can also use <a href="/documentation/keys.html#variable-keys">variable key</a> in it.</p><img src="'+o+'" width="400" height="400" alt="URL Open"><h3 id="send-request" tabindex="-1">Send Request <a class="header-anchor" href="#send-request" aria-hidden="true">#</a></h3><p>By this you can send Request to Server and the response that comes can be saved in Excel Sheet.</p><h3 id="action-in-seconds" tabindex="-1">Action In Seconds <a class="header-anchor" href="#action-in-seconds" aria-hidden="true">#</a></h3><p>In this field you have to set the action and after how many seconds the action has to be run.</p><p>After the field run, the given action will run as soon as the seconds expire. This field not waiting for the action to be completed, that is, the next field does not wait for its action to be completed, it gets run.</p><h2 id="field-response-action" tabindex="-1">Field Response Action <a class="header-anchor" href="#field-response-action" aria-hidden="true">#</a></h2><p>After form field running, we get two types of response <strong>success</strong> and <strong>error</strong>. You can get the action executed according to the response of any field through this option.</p><h3 id="field-success-response-action" tabindex="-1">Field Success Response Action <a class="header-anchor" href="#field-success-response-action" aria-hidden="true">#</a></h3><br><img src="'+s+'" width="400" height="400" alt="Field Success Response Action"><h3 id="field-error-response-action" tabindex="-1">Field Error Response Action <a class="header-anchor" href="#field-error-response-action" aria-hidden="true">#</a></h3><br><img src="'+l+'" width="400" height="400" alt="Field Error Response Action"><h2 id="entry-response" tabindex="-1">Entry Response <a class="header-anchor" href="#entry-response" aria-hidden="true">#</a></h2><p>After filling the entry, you can set what output comes from the server side after submitting the entry. There are two types of response to entry, either the entry will be successfully saved or there is an error in the entry.</p><p><img src="'+r+'" alt="Entry Response"></p><p>If the response of the entry comes in the form of <strong>javascript dialog</strong> (alert), then you can also set how the response of the entry comes in the site or in the form of dialog and you can hide the dialog from <a href="/documentation/extension.html#settings">extension settings</a>.</p><p>If your response message comes dynamic that means it changes every time and if we have to use any column data from excel in data message then you can use variable.</p><p><img src="'+c+'" alt="Entry Response"></p>',40),p=[h];function u(f,g,m,y,F,v){return i(),t("div",null,p)}const _=e(d,[["render",u]]);export{x as __pageData,_ as default};
