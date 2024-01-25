import{_ as t,o as e,c as a,R as r}from"./chunks/framework.QBSyKUN-.js";const b=JSON.parse('{"title":"Predefined Function","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/functions.md","filePath":"documentation/functions.md","lastUpdated":1706197626000}'),d={name:"documentation/functions.md"},o=r('<h1 id="predefined-function" tabindex="-1">Predefined Function <a class="header-anchor" href="#predefined-function" aria-label="Permalink to &quot;Predefined Function&quot;">​</a></h1><p>You can use validation and condition while filling the form using predefined function. The predefined function can be added to the field of the form.</p><p>You can also use <a href="./variable.html">variables</a> in the value of predefined functions. like this</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{{excel_column_name}}</span></span></code></pre></div><h2 id="checkattributeexists" tabindex="-1">checkAttributeExists <a class="header-anchor" href="#checkattributeexists" aria-label="Permalink to &quot;checkAttributeExists&quot;">​</a></h2><p>If you want to check <a href="https://www.w3schools.com/html/html_attributes.asp" target="_blank" rel="noreferrer">attribute</a> in the html element whether the attribute is in the element or not also check attribute value match or not match, then you can use it.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill Value with Condition</td><td>[attribute_name][attribute_value][force_check]</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><ul><li><strong>Field Value</strong> - [string][string][boolean]</li></ul><h2 id="checkattributenotexists" tabindex="-1">checkAttributeNotExists <a class="header-anchor" href="#checkattributenotexists" aria-label="Permalink to &quot;checkAttributeNotExists&quot;">​</a></h2><p>If you want to check <a href="https://www.w3schools.com/html/html_attributes.asp" target="_blank" rel="noreferrer">attribute</a> in the html element not exists also check attribute value match or not match, then you can use it.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill Value with Condition</td><td>[attribute_name][attribute_value][force_check]</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><ul><li><strong>Field Value</strong> - [string][string][boolean]</li><li><code>[name][][true]</code>, if name attribute not exists in element then return true</li><li><code>[name][username][true]</code>, if name attribute exists in element but attribute value is not username then return true</li></ul><h2 id="checkelementtext" tabindex="-1">checkElementText <a class="header-anchor" href="#checkelementtext" aria-label="Permalink to &quot;checkElementText&quot;">​</a></h2><p>To match the <strong>text/value</strong> of an element according to the condition, then you can use this function.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill Value with Condition</td><td>[comparison_operators][text][force_check]</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><h3 id="structure-of-field-value" tabindex="-1">Structure of Field Value <a class="header-anchor" href="#structure-of-field-value" aria-label="Permalink to &quot;Structure of Field Value&quot;">​</a></h3><ul><li><strong>[parameter-1][parameter-2][parameter-3]</strong></li><li><strong>[comparison operators][text][wait until text matches]</strong></li><li><strong>[operator][string][boolean]</strong></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://www.w3schools.com/js/js_comparisons.asp" target="_blank" rel="noreferrer">Comparison Operators</a> (==, !=, &gt;, &lt;, &lt;=, &gt;=)</p></div><h2 id="checkelementlength" tabindex="-1">checkElementLength <a class="header-anchor" href="#checkelementlength" aria-label="Permalink to &quot;checkElementLength&quot;">​</a></h2><p>To match the <strong>length</strong> of an element according to the condition, then you can use this function.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill Value with Condition</td><td>[comparison_operators][length_number][force_check]</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><h3 id="structure-of-field-value-1" tabindex="-1">Structure of Field Value <a class="header-anchor" href="#structure-of-field-value-1" aria-label="Permalink to &quot;Structure of Field Value&quot;">​</a></h3><ul><li><strong>[parameter-1][parameter-2][parameter-3]</strong></li><li><strong>[comparison operators][length_number][wait until length matches]</strong></li><li><strong>[operator][string][boolean]</strong></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://www.w3schools.com/js/js_comparisons.asp" target="_blank" rel="noreferrer">Comparison Operators</a> (==, !=, &gt;, &lt;, &lt;=, &gt;=)</p></div><h3 id="value-example" tabindex="-1">Value Example <a class="header-anchor" href="#value-example" aria-label="Permalink to &quot;Value Example&quot;">​</a></h3><ul><li>[==][20][true]</li><li>[&gt;][3][false]</li></ul><h2 id="checkelementexists" tabindex="-1">checkElementExists <a class="header-anchor" href="#checkelementexists" aria-label="Permalink to &quot;checkElementExists&quot;">​</a></h2><p>If you want to check an element whether the element is in the page or not, then you can use it.</p><table><thead><tr><th>Params</th><th>Required</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td></tr><tr><td>Selector Query</td><td>true</td></tr><tr><td>Wait Until Element Found</td><td>false</td></tr></tbody></table><h2 id="checkelementdestroy" tabindex="-1">checkElementDestroy <a class="header-anchor" href="#checkelementdestroy" aria-label="Permalink to &quot;checkElementDestroy&quot;">​</a></h2><p>If you want to check an element whether the element is in the page or not, then you can use it.</p><table><thead><tr><th>Params</th><th>Required</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td></tr><tr><td>Selector Query</td><td>true</td></tr><tr><td>Wait Until Element Found</td><td>false</td></tr></tbody></table><h2 id="checkelementvisible" tabindex="-1">checkElementVisible <a class="header-anchor" href="#checkelementvisible" aria-label="Permalink to &quot;checkElementVisible&quot;">​</a></h2><p>If you want to check an element whether the element is there in the page or not and the element is visible to us then you can use this.</p><table><thead><tr><th>Params</th><th>Required</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td></tr><tr><td>Selector Query</td><td>true</td></tr><tr><td>Wait Until Element Found</td><td>false</td></tr></tbody></table><h2 id="checkelementinvisible" tabindex="-1">checkElementInvisible <a class="header-anchor" href="#checkelementinvisible" aria-label="Permalink to &quot;checkElementInvisible&quot;">​</a></h2><p>If you want to check an element whether the element is in the page or not and the element is invisible then you can use this.</p><table><thead><tr><th>Params</th><th>Required</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td></tr><tr><td>Selector Query</td><td>true</td></tr><tr><td>Wait Until Element Found</td><td>false</td></tr></tbody></table><h2 id="cleansessionstorage" tabindex="-1">cleanSessionStorage <a class="header-anchor" href="#cleansessionstorage" aria-label="Permalink to &quot;cleanSessionStorage&quot;">​</a></h2><p>This method removes all the Session Storage Object item for this domain.</p><h2 id="cleanlocalstorage" tabindex="-1">cleanLocalStorage <a class="header-anchor" href="#cleanlocalstorage" aria-label="Permalink to &quot;cleanLocalStorage&quot;">​</a></h2><p>This method removes all the Local Storage Object item for this domain.</p><h2 id="counttablerows" tabindex="-1">countTableRows <a class="header-anchor" href="#counttablerows" aria-label="Permalink to &quot;countTableRows&quot;">​</a></h2><p>You can check the rows of the table according to the condition.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill Value with Condition</td><td>[==][2][true] <br> [&lt;=][3][false]</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><h3 id="structure-of-field-value-2" tabindex="-1">Structure of Field Value <a class="header-anchor" href="#structure-of-field-value-2" aria-label="Permalink to &quot;Structure of Field Value&quot;">​</a></h3><ul><li><strong>[parameter-1][parameter-2][parameter-3]</strong></li><li><strong>[comparison operators][number of rows][wait until row matches]</strong></li><li><strong>[string][number][boolean]</strong></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://www.w3schools.com/js/js_comparisons.asp" target="_blank" rel="noreferrer">Comparison Operators</a> (&gt;, &lt;, ==, !=, &lt;=, &gt;=)</p></div><h2 id="downloadfile" tabindex="-1">downloadFile <a class="header-anchor" href="#downloadfile" aria-label="Permalink to &quot;downloadFile&quot;">​</a></h2><p>Wait for download (file) to complete and perform given action when download is done, also you can attach this function with given button</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Suppose you have a button when clicked, some file starts downloading and you want to wait until this downloading is done and perform some action after it.</p></div><p><a href="https://formfiller.ctechhindi.in/example/example-24.php" target="_blank" rel="noreferrer">Demo</a></p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>false</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>false</td><td>Element Selector Query</td><td></td></tr><tr><td>Trigger Javascript Event</td><td>true</td><td>Enter Event Name</td><td>click</td></tr></tbody></table><h2 id="insertclassname" tabindex="-1">insertClassName <a class="header-anchor" href="#insertclassname" aria-label="Permalink to &quot;insertClassName&quot;">​</a></h2><p>The <code>insertClassName</code> method adds one or more CSS class names to the element. This method does not remove existing class attributes, it only adds one or more class names to the class attribute.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill css class name</td><td>bg-danger,text-white,..</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><h2 id="removeclassname" tabindex="-1">removeClassName <a class="header-anchor" href="#removeclassname" aria-label="Permalink to &quot;removeClassName&quot;">​</a></h2><p>This <code>removeClassName</code> method removes one or more the element CSS class name.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill CSS class name</td><td>bg-danger,text-white,..</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you want to remove all element classes then set value <code>remove-all-classes</code>.</p></div><h2 id="insertcsstext" tabindex="-1">insertCSSText <a class="header-anchor" href="#insertcsstext" aria-label="Permalink to &quot;insertCSSText&quot;">​</a></h2><p>The <code>insertCSSText</code> method sets the text of the element&#39;s inline style. This method removes the existing inline style.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill CSS style name</td><td>float:left;margin-top:75px;</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><h2 id="removecsstext" tabindex="-1">removeCSSText <a class="header-anchor" href="#removecsstext" aria-label="Permalink to &quot;removeCSSText&quot;">​</a></h2><p>The <code>removeCSSText</code> method remove the text of the element&#39;s inline style.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill CSS style name</td><td>float,margin-top,..</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you want to remove all element style then set value <code>remove-all-css-text</code>.</p></div><h2 id="insertelementattribute" tabindex="-1">insertElementAttribute <a class="header-anchor" href="#insertelementattribute" aria-label="Permalink to &quot;insertElementAttribute&quot;">​</a></h2><p>The <code>insertElementAttribute</code> method sets the value of an attribute on the element. If the attribute already exists, the value is updated otherwise a new attribute is added with the specified <strong>name</strong> and <strong>value</strong>.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill attribute name and value</td><td>attName,attValue</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><h2 id="removeelementattribute" tabindex="-1">removeElementAttribute <a class="header-anchor" href="#removeelementattribute" aria-label="Permalink to &quot;removeElementAttribute&quot;">​</a></h2><p>If you want to remove the attribute of an element then you can use it one or more.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th><th>Value</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td><td></td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td><td></td></tr><tr><td>Field Value</td><td>true</td><td>Fill attribute name</td><td>attName,attName,attName,...</td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td><td></td></tr></tbody></table><h2 id="scrolltotopleft" tabindex="-1">scrollToTopLeft <a class="header-anchor" href="#scrolltotopleft" aria-label="Permalink to &quot;scrollToTopLeft&quot;">​</a></h2><p>Use this method to scroll the page from top to left.</p><h2 id="scrolltotopright" tabindex="-1">scrollToTopRight <a class="header-anchor" href="#scrolltotopright" aria-label="Permalink to &quot;scrollToTopRight&quot;">​</a></h2><p>Use this method to scroll the page from top to right.</p><h2 id="scrolltobottomleft" tabindex="-1">scrollToBottomLeft <a class="header-anchor" href="#scrolltobottomleft" aria-label="Permalink to &quot;scrollToBottomLeft&quot;">​</a></h2><p>Use this method to scroll the page from bottom to left.</p><h2 id="scrolltobottomright" tabindex="-1">scrollToBottomRight <a class="header-anchor" href="#scrolltobottomright" aria-label="Permalink to &quot;scrollToBottomRight&quot;">​</a></h2><p>Use this method to scroll the page from bottom to right.</p><h2 id="scrollintoview" tabindex="-1">scrollIntoView <a class="header-anchor" href="#scrollintoview" aria-label="Permalink to &quot;scrollIntoView&quot;">​</a></h2><p>The <code>scrollIntoView</code> method scrolls an element into the visible area of the browser window.</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView" target="_blank" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView</a></li></ul><table><thead><tr><th>Params</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>Selector Type</td><td>true</td><td>Element Selector Type</td></tr><tr><td>Selector Query</td><td>true</td><td>Element Selector Query</td></tr><tr><td>Field Value</td><td>true</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters" target="_blank" rel="noreferrer">Params</a></td></tr><tr><td>Wait Until Element Found</td><td>false</td><td></td></tr></tbody></table><h2 id="playsound" tabindex="-1">playSound <a class="header-anchor" href="#playsound" aria-label="Permalink to &quot;playSound&quot;">​</a></h2><p>If you use this function, then the tab in which the sound is playing will not pause.</p><h2 id="waitseconds" tabindex="-1">waitSeconds <a class="header-anchor" href="#waitseconds" aria-label="Permalink to &quot;waitSeconds&quot;">​</a></h2><p>If you want to wait for some time, then you can wait by giving value in seconds through this function.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>Field Value</td><td>true</td><td>Fill seconds</td></tr></tbody></table><h2 id="getpagetitle" tabindex="-1">getPageTitle <a class="header-anchor" href="#getpagetitle" aria-label="Permalink to &quot;getPageTitle&quot;">​</a></h2><p>If you want to get page title string.</p><h2 id="setpagetitle" tabindex="-1">setPageTitle <a class="header-anchor" href="#setpagetitle" aria-label="Permalink to &quot;setPageTitle&quot;">​</a></h2><p>If you want to <strong>set/change</strong> page title.</p><table><thead><tr><th>Params</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>Field Value</td><td>true</td><td>Fill Title String</td></tr></tbody></table>',95),l=[o];function i(n,s,h,c,u,m){return e(),a("div",null,l)}const f=t(d,[["render",i]]);export{b as __pageData,f as default};
