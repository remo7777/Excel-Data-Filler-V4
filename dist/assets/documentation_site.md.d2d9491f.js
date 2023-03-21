import{_ as e,o as t,c as i,N as a}from"./chunks/framework.1e6a71f2.js";const o="/image/insert-site-manually-01.png",r="/image/insert-site-form-manually-01.png",n="/image/form-url-with-regex.png",s="/image/copy_site_id.png",l="/image/insert-site-form-01.png",h="/image/download-excel-template-01.png",_=JSON.parse('{"title":"Site","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/site.md","lastUpdated":1673275748000}'),d={name:"documentation/site.md"},m=a('<h1 id="site" tabindex="-1">Site <a class="header-anchor" href="#site" aria-label="Permalink to &quot;Site&quot;">​</a></h1><p>The site where you have to fill the form automatically.</p><h2 id="insert-site" tabindex="-1">Insert Site <a class="header-anchor" href="#insert-site" aria-label="Permalink to &quot;Insert Site&quot;">​</a></h2><p>To insert the site, you can also do it by right-clicking on the form with the mouse, apart from this, you can also manually insert the site from the options page of the extension, in this you can also insert <strong>multiple</strong> sites.</p><ul><li>Open extension options page.</li><li>Click <strong>Insert a new Site</strong> Button.</li><li>Enter site <strong>title</strong> and site <strong>description</strong>.</li><li>Click Save Button.</li><li>DONE 🎉</li></ul><img src="'+o+'" alt="Insert Site Manually"><h2 id="insert-site-form" tabindex="-1">Insert Site Form <a class="header-anchor" href="#insert-site-form" aria-label="Permalink to &quot;Insert Site Form&quot;">​</a></h2><p>First we have to <a href="#insert-site">insert the site</a>, after that by editing the site, you can also insert the form of the site, in this you can also insert <strong>multiple</strong> forms.</p><ul><li>First <a href="#insert-site">Insert Site</a>.</li><li>Click the edit site button.</li><li>Open <strong>Site Form Pages</strong> tab and click insert form button and fill page <strong>Page URL</strong> and <a href="#form-url-match-types"><strong>URL Match Type</strong></a>.</li><li>Click Save Button.</li><li>DONE 🎉</li></ul><img src="'+r+'" alt="Insert Site Manually"><br><h4 id="form-url-match-types" tabindex="-1">Form URL Match Types <a class="header-anchor" href="#form-url-match-types" aria-label="Permalink to &quot;Form URL Match Types&quot;">​</a></h4><ul><li>Match with Full URL</li><li>Match with URL pathname</li><li>Match with URL hostname</li><li>Match with RegEx</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Match with RegEx (Two RegEx)</p><ul><li>(:any)</li><li>(:any(:end))</li></ul></div><table><thead><tr><th>SITE FORM URL WITH REGEX</th><th>SITE FORM URL</th><th>IS MATCHED</th></tr></thead><tbody><tr><td><a href="http://demo.in/new/(:any)/edit" target="_blank" rel="noreferrer">http://demo.in/new/(:any)/edit</a></td><td><a href="http://demo.in/new/jK33k3ui/edit" target="_blank" rel="noreferrer">http://demo.in/new/jK33k3ui/edit</a></td><td>✔</td></tr><tr><td><a href="http://demo.in/new/(:any(:end)" target="_blank" rel="noreferrer">http://demo.in/new/(:any(:end)</a>)</td><td><a href="http://demo.in/new/jK33k3ui" target="_blank" rel="noreferrer">http://demo.in/new/jK33k3ui</a></td><td>✔</td></tr></tbody></table><img src="'+n+'" width="500" height="500" alt="RegEx"><h2 id="insert-multiple-form" tabindex="-1">Insert Multiple Form <a class="header-anchor" href="#insert-multiple-form" aria-label="Permalink to &quot;Insert Multiple Form&quot;">​</a></h2><p>If your site has multiple forms, then you can insert all the forms in the same site, for this you have to first <a href="#insert-site">insert the main form of the site</a>.</p><p>After the site is inserted, you will have to copy the id of the site with the help of the image given below.</p><img src="'+s+'" width="350" height="350" alt="Copy Site ID"><p>After the site id is copied, you will open the form which you have to insert, after opening, right click on the icon of Extension and select the option of <strong>Insert Form</strong> like the image given below.</p><img src="'+l+'" width="350" height="350" alt="Insert Site Form"><p>After this, you have to paste the site id in the prompt box and press it ok, your form will be inserted in that site.</p><p>DONE 🎉</p><h2 id="insert-form-field" tabindex="-1">Insert Form Field <a class="header-anchor" href="#insert-form-field" aria-label="Permalink to &quot;Insert Form Field&quot;">​</a></h2><p>After filling the form of the site, you have to insert the field of the form, this field is automatic fill. After entering the field name or field type, you can insert the field. <a href="/documentation/field.html#insert-field">more details</a></p><h2 id="download-excel-template" tabindex="-1">Download Excel Template <a class="header-anchor" href="#download-excel-template" aria-label="Permalink to &quot;Download Excel Template&quot;">​</a></h2><p>Before download Excel Template of any site, you have to insert the Site&#39;s Form and Form Field. Excel sheet can be downloaded only if the field is present in the form. You can download the excel sheet from the image given below. 📥</p><img src="'+h+'" width="350" height="350" alt="Download Excel Template"><h2 id="scraper-data" tabindex="-1">Scraper Data <a class="header-anchor" href="#scraper-data" aria-label="Permalink to &quot;Scraper Data&quot;">​</a></h2><p>If you are scraping data from the site and the scraped data of one of your entries is in <strong>multiple rows</strong>, then it is stored with this option and is downloaded from here only.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The data of these field types is downloaded from this option only.</p><ul><li>Fetch Simple Table Data (Scraper Data)</li></ul></div><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><p>Customization site settings.</p><h3 id="excel-date-format" tabindex="-1">Excel Date Format <a class="header-anchor" href="#excel-date-format" aria-label="Permalink to &quot;Excel Date Format&quot;">​</a></h3><p>If you are using date in excel sheet, then you can set the format of date in the site through this option.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Default Date Format: yyyy-mm-dd</p></div><p>The following date formats are used:</p><ul><li>YYYY-MM-DD[T]HH:mm:ss</li><li>MM-DD-YYYY</li><li>YYYY-MM-DD</li></ul><h3 id="view-excel-column-data" tabindex="-1">View Excel Column Data <a class="header-anchor" href="#view-excel-column-data" aria-label="Permalink to &quot;View Excel Column Data&quot;">​</a></h3><p>This option is used when you upload an excel sheet and to see the view of the excel sheet, open the tab of <strong>View Excel Data</strong>, then you see the excel data in the form of a table. If you want to see the data of an excel column or not, then you can set it in this option.</p><h3 id="export-site-data" tabindex="-1">Export Site Data <a class="header-anchor" href="#export-site-data" aria-label="Permalink to &quot;Export Site Data&quot;">​</a></h3><p>To backup the data of the site, which you can <a href="/documentation/extension.html#export-import-settings">import</a> from the extension settings page.</p>',43),c=[m];function p(f,u,g,y,b,w){return t(),i("div",null,c)}const k=e(d,[["render",p]]);export{_ as __pageData,k as default};
