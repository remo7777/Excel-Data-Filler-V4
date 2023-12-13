import{_ as e,o as r,c as a,R as t,as as o}from"./chunks/framework.6NY26Rt4.js";const f=JSON.parse('{"title":"Form Error Response","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/form-response/form-error-response.md","filePath":"documentation/form-response/form-error-response.md","lastUpdated":1702477588000}'),s={name:"documentation/form-response/form-error-response.md"},n=t('<h1 id="form-error-response" tabindex="-1">Form Error Response <a class="header-anchor" href="#form-error-response" aria-label="Permalink to &quot;Form Error Response&quot;">​</a></h1><p>Through this option, you can match the error response (returned from server), when a <strong>form/entry</strong> is not submitted, When It matches with given <strong>error response</strong>, <strong>entry</strong> will be marked as <strong>Entry Saved</strong> and You can also set the <a href="#action">action</a></p><img src="'+o+'" width="400" height="400" alt="Form Error Response"><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="error-page-url" tabindex="-1">Error Page URL <a class="header-anchor" href="#error-page-url" aria-label="Permalink to &quot;Error Page URL&quot;">​</a></h3><p>Fill in the URL of the page on which you want to match the error response.</p><ul><li>It may be full URL</li><li>It may be URL with Regular Expression</li></ul><h3 id="match-url-types" tabindex="-1">Match URL Types <a class="header-anchor" href="#match-url-types" aria-label="Permalink to &quot;Match URL Types&quot;">​</a></h3><p>How you want to match with <strong>Error Page URL</strong></p><ul><li>Match with Full URL</li><li>Match with URL <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname" target="_blank" rel="noreferrer">pathname</a></li><li>Match with URL <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname" target="_blank" rel="noreferrer">hostname</a></li><li>Match with RegEx</li></ul><h3 id="error-response-type" tabindex="-1">Error Response Type <a class="header-anchor" href="#error-response-type" aria-label="Permalink to &quot;Error Response Type&quot;">​</a></h3><p>It is about, How server returns Error Response to User.</p><ol><li>Matching Message In Page</li><li><a href="#matching-message-in-alert-message">Matching Message In Browser Alert</a></li><li>Matching Message In Page Element Value</li><li>Checking Element Exists In Page</li></ol><h4 id="matching-message-in-alert-message" tabindex="-1">Matching Message In Alert Message <a class="header-anchor" href="#matching-message-in-alert-message" aria-label="Permalink to &quot;Matching Message In Alert Message&quot;">​</a></h4><p>If the response of the entry comes in the form of <strong>javascript dialog</strong> (Browser Alert), you can hide the dialog from <a href="/documentation/extension.html#hide-javascript-dialog">extension settings</a> and fetch the response to match against given <strong>Enter Error Message</strong></p><h3 id="enter-error-message" tabindex="-1">Enter Error Message <a class="header-anchor" href="#enter-error-message" aria-label="Permalink to &quot;Enter Error Message&quot;">​</a></h3><p>If Server returns something back to user after form is not submitted, Then you can use it along with <strong>Error Response Type</strong> to check If form is really saved.</p><p>Here you can have multiple messages. If any of the given messages is matched, then the extension will mark the current entry as <strong>saved</strong> and after that, it will execute the <a href="#action">action</a> given by you.</p><h3 id="delay-time-before-run-action" tabindex="-1">Delay Time Before Run Action <a class="header-anchor" href="#delay-time-before-run-action" aria-label="Permalink to &quot;Delay Time Before Run Action&quot;">​</a></h3><p>Time delay before the action is executed. Set time in the Milliseconds. (1 seconds = 1000 milliseconds)</p><h3 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;Action&quot;">​</a></h3><ul><li>Redirect to Page</li><li>Re-Execute Form</li><li>Click on Button</li></ul>',22),i=[n];function l(h,c,m,p,g,d){return r(),a("div",null,i)}const b=e(s,[["render",l]]);export{f as __pageData,b as default};
