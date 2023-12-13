import{_ as e,o as r,c as o,R as s,aJ as a,k as t}from"./chunks/framework.6NY26Rt4.js";const k=JSON.parse('{"title":"Special Key","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/keys.md","filePath":"documentation/keys.md","lastUpdated":1702477588000}'),n={name:"documentation/keys.md"},i=s('<h1 id="special-key" tabindex="-1">Special Key <a class="header-anchor" href="#special-key" aria-label="Permalink to &quot;Special Key&quot;">​</a></h1><p>Special key is used for some special work, such as what to do if your form gets filled or what to do after the entry is saved, all these work is done by the special key.</p><h2 id="insert-key" tabindex="-1">Insert Key <a class="header-anchor" href="#insert-key" aria-label="Permalink to &quot;Insert Key&quot;">​</a></h2><p>If you type <code>{</code> character in the Field Name field, then you will see the names of all the special keys in which you can use any one according to your work.</p><img src="'+a+'" width="250" height="250" alt="Insert Special Key"><h2 id="public-keys" tabindex="-1">Public Keys <a class="header-anchor" href="#public-keys" aria-label="Permalink to &quot;Public Keys&quot;">​</a></h2><p>You can insert public special key but you cannot insert private special key. Private key only inserts extension.</p><table><thead><tr><th>Key Name</th><th>Key Description</th></tr></thead><tbody><tr><td><strong>{FORM-FILLED}</strong></td><td>After filling the form successfully, what you have to do, you can do by this key.</td></tr><tr><td><strong>{ENTRY-SAVED}</strong></td><td>After the <a href="./form-response/form-success-response.html">success response</a> matched then this key executes before response action.</td></tr><tr><td><strong>{ENTRY-FAILED}</strong></td><td>After the <a href="./form-response/form-error-response.html">error response</a> matched then this key executes before response action.</td></tr><tr><td><strong>{PRINT-ENTRY-ERRORS}</strong></td><td>If you want to see the errors after filling the form, then this has to be inserted.</td></tr><tr><td><strong>{FORM-SKIP-ELEMENT-NOT-EXISTS}</strong></td><td>If the target element is not found in the page then quits the current form and starts doing the next form. <strong>(Skip the current form if it not matches the additional settings)</strong></td></tr><tr><td><strong>{FORM-SKIP-ELEMENT-EXISTS}</strong></td><td>If the target element is found in the page then quits the current form and starts doing the next form. <strong>(Skip the current form if it matches the additional settings)</strong></td></tr></tbody></table><h2 id="private-keys" tabindex="-1">Private Keys <a class="header-anchor" href="#private-keys" aria-label="Permalink to &quot;Private Keys&quot;">​</a></h2><table><thead><tr><th>Key Name</th><th>Key Description</th></tr></thead><tbody><tr><td><strong>{IS-ENTRY-SAVED}</strong></td><td>if excel entry completed.</td></tr><tr><td><strong>{ENTRY-COMPLETED-TIME}</strong></td><td>Entry completion time.</td></tr><tr><td><strong>{FORM-01-SUCCESS}, {FORM-02-SUCCESS}, ..</strong></td><td>Store entry success message</td></tr><tr><td><strong>{FORM-01-ERROR}, {FORM-02-ERROR}, ..</strong></td><td>Store entry error message</td></tr><tr><td><strong>{ROW-TYPE-FIELD-DUPLICATE-VALUES}</strong></td><td></td></tr></tbody></table><h2 id="video-tutorial" tabindex="-1">Video Tutorial <a class="header-anchor" href="#video-tutorial" aria-label="Permalink to &quot;Video Tutorial&quot;">​</a></h2>',11),d=t("iframe",{width:"560",height:"315",title:"youtube",src:"https://www.youtube.com/embed/e_WQzWbCj40",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),h=t("br",null,null,-1),c=[i,d,h];function l(u,y,p,m,f,g){return r(),o("div",null,c)}const _=e(n,[["render",l]]);export{k as __pageData,_ as default};
