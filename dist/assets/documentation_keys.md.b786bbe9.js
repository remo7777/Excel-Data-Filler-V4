import{_ as t,c as e,o as r,a}from"./app.465e77ba.js";const s="/image/insert-special-key.png",f=JSON.parse('{"title":"Special Key","description":"","frontmatter":{},"headers":[{"level":2,"title":"Insert Key","slug":"insert-key","link":"#insert-key","children":[]},{"level":2,"title":"Public Keys","slug":"public-keys","link":"#public-keys","children":[]},{"level":2,"title":"Private Keys","slug":"private-keys","link":"#private-keys","children":[]},{"level":2,"title":"Variable Keys","slug":"variable-keys","link":"#variable-keys","children":[]}],"relativePath":"documentation/keys.md","lastUpdated":1675754203000}'),i={name:"documentation/keys.md"},n=a('<h1 id="special-key" tabindex="-1">Special Key <a class="header-anchor" href="#special-key" aria-hidden="true">#</a></h1><p>Special key is used for some special work, such as what to do if your form gets filled or what to do after the entry is saved, all these work is done by the special key.</p><h2 id="insert-key" tabindex="-1">Insert Key <a class="header-anchor" href="#insert-key" aria-hidden="true">#</a></h2><p>If you type <code>{</code> character in the Field Name field, then you will see the names of all the special keys in which you can use any one according to your work.</p><img src="'+s+'" width="250" height="250" alt="Insert Special Key"><h2 id="public-keys" tabindex="-1">Public Keys <a class="header-anchor" href="#public-keys" aria-hidden="true">#</a></h2><p>You can insert public special key but you cannot insert private special key. Private key only inserts extension.</p><table><thead><tr><th>Key Name</th><th>Key Description</th></tr></thead><tbody><tr><td><strong>{FORM-FILLED}</strong></td><td>After filling the form successfully, what you have to do, you can do by this key.</td></tr><tr><td><strong>{ENTRY-SAVED}</strong></td><td>After the form is successfully saved, what you have to do, you can do by this key.</td></tr><tr><td><strong>{PRINT-ENTRY-ERRORS}</strong></td><td>If you want to see the errors after filling the form, then this has to be inserted.</td></tr><tr><td><strong>{FORM-SKIP-ELEMENT-NOT-EXISTS}</strong></td><td>If the target element is not found in the page then quits the current form and starts doing the next form. <strong>(Skip the current form if it not matches the additional settings)</strong></td></tr><tr><td><strong>{FORM-SKIP-ELEMENT-EXISTS}</strong></td><td>If the target element is found in the page then quits the current form and starts doing the next form. <strong>(Skip the current form if it matches the additional settings)</strong></td></tr></tbody></table><h2 id="private-keys" tabindex="-1">Private Keys <a class="header-anchor" href="#private-keys" aria-hidden="true">#</a></h2><table><thead><tr><th>Key Name</th><th>Key Description</th></tr></thead><tbody><tr><td><strong>{IS-ENTRY-SAVED}</strong></td><td>if excel entry completed.</td></tr><tr><td><strong>{ENTRY-COMPLETED-TIME}</strong></td><td>Entry completion time.</td></tr><tr><td><strong>{FORM-01-SUCCESS}, {FORM-02-SUCCESS}, ..</strong></td><td>Store entry success message</td></tr><tr><td><strong>{FORM-01-ERROR}, {FORM-02-ERROR}, ..</strong></td><td>Store entry error message</td></tr></tbody></table><h2 id="variable-keys" tabindex="-1">Variable Keys <a class="header-anchor" href="#variable-keys" aria-hidden="true">#</a></h2><p>You have to use these variables inside curly braces. like this</p><div><p>{{location.href}}</p></div><table><thead><tr><th>Key Name</th><th>Key Description</th></tr></thead><tbody><tr><td><strong>location.href</strong></td><td>Page URL</td></tr><tr><td><strong>location.host</strong></td><td>Site Host Name</td></tr><tr><td><strong>location.hostname</strong></td><td>Site Hostname</td></tr><tr><td><strong>location.origin</strong></td><td>Site Origin</td></tr><tr><td><strong>location.pathname</strong></td><td>Page URL Pathname</td></tr></tbody></table>',14),o=[n];function d(h,l,c,y,g,p){return r(),e("div",null,o)}const m=t(i,[["render",d]]);export{f as __pageData,m as default};