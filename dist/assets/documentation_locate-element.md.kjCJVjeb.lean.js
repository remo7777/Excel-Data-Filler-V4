import{_ as d,o as u,c as o,k as t,a as l,j as s,A as p,I as i,R as c,aK as b}from"./chunks/framework.6NY26Rt4.js";const m={},g={style:{width:"max-content"}},h=t("thead",null,[t("tr",null,[t("th",null,"Element"),t("th",null,"HTML"),t("th",null,"Selector Query"),t("th",null,"XPath")])],-1),y=t("tbody",null,[t("tr",null,[t("td",null,[t("input",{type:"text",placeholder:"Text"}),t("input",{type:"email",placeholder:"Email"})]),t("td",null,[t("code",null,'<input type="text">'),t("br"),t("code",null,'<input type="email">')]),t("td",null,[t("strong",null,"input[type='text']"),t("br"),t("strong",null,"input[type='email']")]),t("td",null,[t("strong",null,'//input[@type="text"]'),t("br"),t("strong",null,'//input[@type="email"]')])]),t("tr",null,[t("td",null,[t("input",{type:"text",name:"full_name",placeholder:"Full Name"})]),t("td",null,[t("code",null,'<input name="full_name">')]),t("td",null,[t("strong",null,"input[name='full_name']")]),t("td",null,[t("strong",null,'//input[@name="full_name"]')])]),t("tr",null,[t("td",null,[t("input",{type:"text",id:"full_name",placeholder:"Full Name"})]),t("td",null,[t("code",null,'<input id="full_name">')]),t("td",null,[t("strong",null,"input[id='full_name']"),l(),t("br"),t("strong",null,"input#full_name")]),t("td",null,[t("strong",null,'//input[@id="full_name"]')])]),t("tr",null,[t("td",null,[t("input",{type:"text","aria-describedby":"full_name",placeholder:"Full Name"})]),t("td",null,[t("code",null,'<input aria-describedby="full_name">')]),t("td",null,[t("strong",null,"input[aria-describedby='full_name']")]),t("td",null,[t("strong",null,'//input[@aria-describedby="full_name"]')])]),t("tr",null,[t("td",null,[t("input",{type:"text",placeholder:"Full Name"})]),t("td",null,[t("code",null,'<input placeholder="Full Name">')]),t("td",null,[t("strong",null,"input[placeholder='Full Name']")]),t("td",null,[t("strong",null,'//input[@placeholder="Full Name"]')])]),t("tr",null,[t("td",null,[t("input",{type:"text",placeholder:"Readonly Field",readonly:""})]),t("td",null,[t("code",null,"<input readonly>")]),t("td",null,[t("strong",null,"input[readonly]")]),t("td",null,[t("strong",null,"//input[@readonly]")])]),t("tr",null,[t("td",null,[t("input",{type:"text",placeholder:"Disabled Field",disabled:""})]),t("td",null,[t("code",null,"<input disabled>")]),t("td",null,[t("strong",null,"input[disabled]")]),t("td",null,[t("strong",null,"//input[@disabled]")])]),t("tr",null,[t("td",null,[t("input",{type:"text",class:"input invalid",placeholder:"Invalid Value"})]),t("td",null,[t("code",null,'<input type="text" class="input invalid">')]),t("td",null,[t("strong",null,"input.invalid"),l(),t("br"),t("strong",null,"input[class='input invalid']"),l(),t("br"),t("strong",null,"input[class*='invalid']"),l(),t("br")]),t("td",null,[t("strong",null,"//input[@class='input invalid']"),l(),t("br"),t("strong",null,'//input[contains(@class,"invalid")]'),l(),t("br")])]),t("tr",null,[t("td",null,[t("a",{href:"#",target:"_blank"},"link")]),t("td",null,[t("code",null,'<a href="#" target="_blank">link</a>')]),t("td",null,[t("strong",null,"a[href]"),t("br"),t("strong",null,'a[href="#"]'),t("br"),t("strong",null,'a[target="_blank"]'),t("br")]),t("td",null,[t("strong",null,"//a[@href]"),t("br"),t("strong",null,'//a[@href="#"]'),t("br"),t("strong",null,'//a[@target="_blank"]'),t("br"),t("strong",null,'//a[text()="link"]')])]),t("tr",null,[t("td",null,[t("input",{type:"radio",name:"gender",value:"male",checked:""}),l(" Male "),t("br"),t("input",{type:"radio",name:"gender",value:"female"}),l(" Female "),t("br"),t("input",{type:"radio",name:"gender",value:"other"}),l(" Other "),t("br")]),t("td",null,[t("code",null,'<input type="radio" name="gender" value="male" checked> Male'),l(),t("br"),t("code",null,'<input type="radio" name="gender" value="female"> Female'),l(),t("br"),t("code",null,'<input type="radio" name="gender" value="other"> Other')]),t("td",null,[t("strong",null,"input[type='radio']"),l(),t("br"),t("strong",null,'input[name="gender"]'),l(),t("br"),t("strong",null,'input[value="other"]'),l(),t("br"),t("strong",null,'input[name="gender"][value="other"]'),l(),t("br")]),t("td",null,[t("strong",null,'//input[@type="radio"]'),l(),t("br"),t("strong",null,'//input[@name="gender"]'),l(),t("br"),t("strong",null,'//input[@value="other"]'),l(),t("br"),t("strong",null,'//input[@name="gender"][@value="male"]'),l(),t("br")])]),t("tr",null,[t("td",null,[t("input",{type:"checkbox",name:"card1",value:"debit",checked:""}),l(" I have a debit card "),t("br"),t("input",{type:"checkbox",name:"card2",value:"credit"}),l(" I have a credit card "),t("br"),t("input",{type:"checkbox",name:"card3",value:"other"}),l(" Other "),t("br")]),t("td",null,[t("code",null,'<input type="checkbox" name="card1" value="debit" checked> I have a debit card'),l(),t("br"),t("code",null,'<input type="checkbox" name="card2" value="credit"> I have a credit card'),l(),t("br"),t("code",null,'<input type="checkbox" name="card3" value="other"> Other')]),t("td",null,[t("strong",null,"input[type='checkbox']"),l(),t("br"),t("strong",null,'input[name="card1"]'),l(),t("br"),t("strong",null,'input[value="credit"]'),l(),t("br")]),t("td",null,[t("strong",null,'//input[@type="checkbox"]'),l(),t("br"),t("strong",null,'//input[@name="card1"]'),l(),t("br"),t("strong",null,'//input[@value="credit"]'),l(),t("br")])]),t("tr",null,[t("td",null,[t("select",{name:"options"},[t("option",{value:"op1"},"Option 1"),t("option",{value:"op2"},"Option 2"),t("option",{value:"op3"},"Option 3"),t("option",{value:"op4"},"Option 4")])]),t("td",null,[t("code",null,[l(' <select name="options"> '),t("br"),l('   <option value="op1">Option 1</option> '),t("br"),l('   <option value="op2">Option 2</option> '),t("br"),l('   <option value="op3">Option 3</option> '),t("br"),l('   <option value="op4">Option 4</option> '),t("br"),l(" </select> "),t("br")])]),t("td",null,[t("strong",null,"select[name='options']"),l(),t("br")]),t("td",null,[t("strong",null,"//select[@name='options']"),l(),t("br"),t("strong",null,'//select[@name="options"]/option[2]'),l(),t("br"),t("strong",null,'//select[@name="options"]/option[text()="Option 3"]'),l(),t("br"),t("strong",null,'//select[@name="options"]/option[contains(@value,"op4")]'),l(),t("br")])]),t("tr",null,[t("td",null,[t("textarea",{name:"address",rows:"2",cols:"20",placeholder:"Enter Address"})]),t("td",null,[t("code",null,'<textarea name="address" rows="2" cols="20"></textarea>')]),t("td",null,[t("strong",null,"textarea[name='address']"),l(),t("br")]),t("td",null,[t("strong",null,"//textarea[@name='address']"),l(),t("br"),t("strong",null,'//textarea[@rows="2"]'),l(),t("br"),t("strong",null,'//textarea[@cols="20"]'),l(),t("br")])]),t("tr",null,[t("td",null,[t("input",{type:"submit",value:"Submit"})]),t("td",null,[t("code",null,' <input type="submit" value="Submit"> ')]),t("td",null,[t("strong",null,"input[type='submit']"),l(),t("br"),t("strong",null,"input[value='Submit']"),l(),t("br")]),t("td",null,[t("strong",null,"//input[@type='submit']"),l(),t("br"),t("strong",null,"//input[@value='Submit']"),l(),t("br")])]),t("tr",null,[t("td",null,[t("button",{type:"button",alert:"",onclick:"alert('Alert Message')"},"Alert Dialog")]),t("td",null,[t("code",null,` <button type="button" alert onclick="alert('Alert Message')">Alert Dialog</button> `)]),t("td",null,[t("strong",null,"button[type='button']"),l(),t("br"),t("strong",null,"button[onclick]"),l(),t("br"),t("strong",null,"button[alert]"),l(),t("br")]),t("td",null,[t("strong",null,"//button[@type='button']"),l(),t("br"),t("strong",null,"//button[@onclick]"),l(),t("br"),t("strong",null,"//button[@alert]"),l(),t("br")])]),t("tr",null,[t("td",null,[t("button",{type:"button",confirm:"",onclick:"confirm('Confirm Message')"},"Confirm Dialog")]),t("td",null,[t("code",null,` <button type="button" confirm onclick="confirm('Confirm Message')">Confirm Dialog</button> `)]),t("td",null,[t("strong",null,"button[type='button']"),l(),t("br"),t("strong",null,"button[onclick]"),l(),t("br"),t("strong",null,"button[confirm]"),l(),t("br")]),t("td",null,[t("strong",null,"//button[@type='button']"),l(),t("br"),t("strong",null,"//button[@onclick]"),l(),t("br"),t("strong",null,"//button[@confirm]"),l(),t("br")])]),t("tr",null,[t("td",null,[t("button",{type:"button",id:"prompt",prompt:"",onclick:"prompt('Please enter you age:')"},"Prompt Dialog")]),t("td",null,[t("code",null,` <button type="button" id="prompt" prompt onclick="prompt('Please enter you age:')">Prompt Dialog</button> `)]),t("td",null,[t("strong",null,"button[type='button']"),l(),t("br"),t("strong",null,"button[id='prompt']"),l(),t("br"),t("strong",null,"button[prompt]"),l(),t("br")]),t("td",null,[t("strong",null,"//button[@type='button']"),l(),t("br"),t("strong",null,"//button[@id='prompt']"),l(),t("br"),t("strong",null,"//button[@prompt]"),l(),t("br")])])],-1),_=[h,y];function v(r,n){return u(),o("table",g,_)}const f=d(m,[["render",v]]),x={},k={style:{width:"max-content"}},P=t("thead",null,[t("tr",null,[t("th",null,"Methods"),t("th",null,"Examples")])],-1),w=t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,[t("strong",null,"Contains()")])]),t("td",null,[t("table",{style:{width:"max-content"}},[t("thead",null,[t("tr",null,[t("th",null,"Element"),t("th",null,"HTML"),t("th",null,"XPath")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("input",{type:"submit"})]),t("td",null,[t("code",null,'<input type="submit">')]),t("td",null,[t("strong",null,'//input[contains(@type,"submit")]'),l(),t("br"),t("strong",null,'//input[contains(@type,"sub")]'),l(),t("br"),t("strong",null,'//*[contains(@type,"mit")]'),l(),t("br")])]),t("tr",null,[t("td",null,[t("button",{type:"button",name:"btn-login"},"Login")]),t("td",null,[t("code",null,'<button type="button" name="btn-login">Login</button>')]),t("td",null,[t("strong",null,'//button[contains(@name,"btn")]'),l(),t("br"),t("strong",null,'//button[contains(text(),"Log")]'),l(),t("br"),t("strong",null,'//*[contains(@type,"button")]'),l(),t("br")])]),t("tr",null,[t("td",null,[t("input",{type:"text",name:"last-name",id:"lastName",class:"input invalid",placeholder:"Last Name"})]),t("td",null,[t("code",null,'<input type="text" name="last-name" id="lastName" class="input invalid" placeholder="Last Name" />')]),t("td",null,[t("strong",null,'//*[@class="input invalid"]'),l(),t("br"),t("strong",null,'//input[contains(@class,"invalid")]'),l(),t("br"),t("strong",null,'//input[contains(@class,"inv")]'),l(),t("br")])])])])])]),t("tr",null,[t("td",null,[t("code",null,[t("strong",null,"OR & AND")])]),t("td",{style:{"background-color":"white"}},[t("table",{style:{width:"max-content"}},[t("thead",null,[t("tr",null,[t("th",null,"Element"),t("th",null,"HTML"),t("th",null,"XPath")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("form",{class:"form-login"},[t("label",{for:"inputEmail"},"Email"),t("input",{type:"email",id:"inputEmail",placeholder:"Email"}),t("label",{for:"inputPassword"},"Password"),t("input",{type:"password",id:"inputPassword",placeholder:"Password"})])]),t("td",null,[t("code",null,[l(' <form class="form-login"> '),t("br"),l('   <label for="inputEmail">Email</label> '),t("br"),l('   <input type="email" id="inputEmail" placeholder="Email" /> '),t("br"),l('   <label for="inputPassword">Password</label> '),t("br"),l('   <input type="password" id="inputPassword" placeholder="Password" /> '),t("br"),l(" </form> "),t("br")])]),t("td",null,[t("strong",null,'//form/input[@type="email" or @type="password"]'),l(),t("br"),t("strong",null,'//form/input[@type="email" and @id="inputEmail"]'),l(),t("br"),t("strong",null,'//form/input[@type="email" and @id]'),l(),t("br"),t("strong",null,'//form[@class="form-login"]/input[@id="inputPassword"]'),l(),t("br"),t("strong",null,'//form[@class="form-login"]/input[1]'),l(),t("br"),t("strong",null,'//form[@class="form-login"]/input[2]'),l(),t("br")])])])])])]),t("tr",null,[t("td",null,[t("code",null,[t("strong",null,"starts-with(@attribute,value)")])]),t("td",null,[t("table",{style:{width:"max-content"}},[t("thead",null,[t("tr",null,[t("th",null,"Element"),t("th",null,"HTML"),t("th",null,"XPath")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("button",{type:"button",class:"btn-primary"},"Primary"),t("button",{type:"button",class:"btn-secondary"},"Secondary"),t("button",{type:"button",class:"btn-success"},"Success")]),t("td",null,[t("code",null,[l(' <button type="button" class="btn-primary">Primary</button> '),t("br"),l(' <button type="button" class="btn-secondary">Secondary</button> '),t("br"),l(' <button type="button" class="btn-success">Success</button> '),t("br")])]),t("td",null,[t("strong",null,'//button[starts-with(@class,"btn")]'),l(),t("br"),t("strong",null,'//button[starts-with(@type,"but")]'),l(),t("br")])])])])])]),t("tr",null,[t("td",null,[t("code",null,[t("strong",null,"parent, position")])]),t("td",null,[t("table",{style:{width:"max-content"}},[t("thead",null,[t("tr",null,[t("th",null,"XPath")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("strong",null,"//td[text() =' SHG']/parent::*/td[position()=6]/a"),l(),t("br")])])])])])])],-1),E=[P,w];function S(r,n){return u(),o("table",k,E)}const A=d(x,[["render",S]]),N=c("",6),O=t("h2",{id:"advance-xpath",tabindex:"-1"},[l("Advance XPath "),t("a",{class:"header-anchor",href:"#advance-xpath","aria-label":'Permalink to "Advance XPath"'},"​")],-1),F=JSON.parse('{"title":"Locate Element","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/locate-element.md","filePath":"documentation/locate-element.md","lastUpdated":1679421051000}'),L={name:"documentation/locate-element.md"},C=Object.assign(L,{setup(r){return s(()=>{document.body.classList.add("no-nav");var n=document.querySelector("div.VPContent");n&&(n.style.paddingTop="var(--vp-nav-height)",n.style.paddingLeft="0px");var e=document.querySelector("div.VPContent div.aside");e&&(e.style.display="none");var a=document.querySelector("div.VPContent div.content-container");a&&(a.style.maxWidth="100%")}),p(()=>{document.body.classList.remove("no-nav");var n=document.querySelector("div.VPContent");n&&n.removeAttribute("style");var e=document.querySelector("div.VPContent div.aside");e&&e.removeAttribute("style")}),(n,e)=>(u(),o("div",null,[N,i(f),O,i(A)]))}});export{F as __pageData,C as default};
