function addListener(e,t,n){var l,a;if(document.querySelectorAll)for(l=document.querySelectorAll(e),a=0;a<l.length;a++)document.addEventListener?l[a].addEventListener(t,n):l[a].attachEvent("on"+t,n);else{var d=e.split("."),s=d[0],i=d[1];if(2==d.length)for(l=document.getElementsByTagName(s),a=0;a<l.length;a++)-1!=l[a].className.indexOf(i)&&l[a].attachEvent("on"+t,n)}}function pageLoad(){if(expandRules(),enableRules(),enableSpellings(),addListener(".viewsource[data-pageid]","click",function(e){var t=this!=window?this:e.srcElement;window.external.ViewSource(t.getAttribute("data-pageid"),t.getAttribute("data-line"),t.getAttribute("data-col")),e.preventDefault()}),addListener("button.toggleChevron","click",function(e){var t=this!=window?this:e.srcElement;toggleChevron(t.getAttribute("data-toggleid"))}),addListener("td.desc","click",function(e){if(window.getSelection().toString());else{var t=this!=window?this:e.srcElement;toggleChevron(t.getAttribute("data-toggleid"))}}),addListener("button.expandAll","click",function(){expandAll()}),addListener("td.expandAll","click",function(){window.getSelection().toString()||expandAll()}),addListener("a.spell-bad.web","click",function(e){var t=this!=window?this:e.srcElement;spellOptions(t,"web"),e.preventDefault()}),addListener("a.spell-bad.desktop","click",function(e){var t=this!=window?this:e.srcElement;spellOptions(t,"desktop"),e.preventDefault()}),addListener("button.ruleOptions","click",function(e){var t=this!=window?this:e.srcElement;ruleOptions(t,t.getAttribute("data-ruleid"))}),addListener("button.pageOptions","click",function(e){var t=this!=window?this:e.srcElement;pageOptions(t,t.getAttribute("data-url"))}),!document.addEventListener)for(var e=document.getElementsByTagName("img"),t=/.*\.svg$/,n=e.length,l=0;n>l;l++)e[l].src.match(t)&&(e[l].src=e[l].src.slice(0,-3)+"png")}function expandRules(){var e=document.getElementById("expandedRuleList");if(e){var t=e.value.split("#");if(""!=t[0])for(var n=0;n<t.length;n++)toggleChevron(t[n])}}function removeExpandedRule(e){var t=document.getElementById("expandedRuleList");if(t){var n=t.value.split("#");if(t.value="",""!=n[0])for(var l=0;l<n.length;l++)n[l]!=e&&addExpandedRule(n[l])}}function expandAll(){var e,t=-1!=document.getElementById("chevExpandAll").getAttribute("src").indexOf("chevron-down");if(document.querySelectorAll){var n=document.querySelectorAll("tbody.expando");for(e=0;e<n.length;e++)t?n[e].style.display="table-row-group":n[e].style.display="none"}var l=document.getElementsByTagName("img");for(e=0;e<l.length;++e){var a=l[e].id;0==a.indexOf("chev")&&(t?l[e].src=l[e].src.replace(/chevron-down/i,"chevron-up"):l[e].src=l[e].src.replace(/chevron-up/i,"chevron-down"))}}function addExpandedRule(e){var t=document.getElementById("expandedRuleList");if(t){var n=t.value.split("#");if(""==n[0])t.value=e;else{for(var l=!1,a=0;a<n.length;a++)if(n[a]==e){l=!0;break}l||(t.value=t.value+"#"+e)}}}function showTab(e,t){document.getElementById("menu-summary").className="",document.getElementById("menu-issues").className="",document.getElementById("menu-all").className="",document.getElementById("menu-"+e).className="selected",document.getElementById("tab-summary").style.display="none",document.getElementById("tab-all").style.display="none",document.getElementById("tab-issues").style.display="none",document.getElementById("tab-"+e).style.display="inline",document.getElementById("tab-errors").style.display="none",document.getElementById("tab-compliance").style.display="none",document.getElementById("tab-standards").style.display="none",document.getElementById("tab-accessibility").style.display="none",document.getElementById("tab-usability").style.display="none",document.getElementById("tab-seo").style.display="none",document.getElementById("tab-compatibility").style.display="none",document.getElementById("tab-security").style.display="none",t&&(document.getElementById("menu-errors").className="",document.getElementById("menu-compliance").className="",document.getElementById("menu-standards").className="",document.getElementById("menu-accessibility").className="",document.getElementById("menu-usability").className="",document.getElementById("menu-seo").className="",document.getElementById("menu-compatibility").className="",document.getElementById("menu-security").className="",document.getElementById("tab-"+t).style.display="inline",document.getElementById("menu-"+t).className="selected")}function toggleChevron(e){var t=document.getElementById("chev"+e);-1!=t.src.indexOf("chevron-up")?(t.src=t.src.replace(/chevron-up/,"chevron-down"),removeExpandedRule(e)):(t.src=t.src.replace(/chevron-down/,"chevron-up"),addExpandedRule(e)),toggleElement("expand-"+e)}function enableRules(){for(var e=document.getElementsByTagName("tr"),t=0;t<e.length;++t){var n=e[t];if(n.id&&0==n.id.indexOf("rule-"))try{var l=n.id.substr(5),a=window.external.GetRuleEnabled(l);a?n.className="":n.className="disabled"}catch(d){}}}function enableSpellings(){for(var e=document.getElementsByTagName("a"),t=0;t<e.length;++t){var n=e[t];if("spell-bad"==n.className)try{if(n.innerText){var l=n.innerText,a=window.external.GetSpellingCorrect(l);a&&(n.className="spell-good")}}catch(d){}}}function spellOptions(e,t){var n={spellOther:0,spellAdded:1,spellRemoved:2};try{var l,a,d=n.spellOther,s=e.innerHTML;if("web"==t){var i="/Scans/AddCustomSpelling?word="+s,o="/Scans/RemoveCustomSpelling?word="+s,c=document.getElementById("iframeSpelling");c.src==i?(d=n.spellRemoved,c.src=o):(d=n.spellAdded,c.src=i)}else d=window.external.SpellOptions(s);if(d==n.spellAdded)for(e.className="spell-good",l=0;l<document.links.length;l++)a=document.links[l],"spell-bad"==a.className&&a.innerHTML==s&&(a.className="spell-good");else if(d==n.spellRemoved)for(e.className="spell-bad",l=0;l<document.links.length;l++)a=document.links[l],"spell-good"==a.className&&a.innerHTML==s&&(a.className="spell-bad")}catch(r){}}function ruleOptions(e,t){try{var n=window.external.RuleOptions(e,t),l=document.getElementById("rule-"+t);l&&(n?l.className="":l.className="disabled"),toggleElement("rule-"+t+"-disabled")}catch(a){alert("Options are only available when the report is viewed in SortSite.")}}function pageOptions(e,t){try{window.external.PageOptions(e,t)}catch(n){alert("Options are only available when the report is viewed in SortSite.")}}function toggleElement(e){var t=document.getElementById(e),n="";if(null!=t){for(var l=document.getElementsByTagName(t.tagName),a=0;a<l.length;++a){var d=getElementStyle(l[a]);if("none"!=d.display){n=d.display;break}}"none"==getElementStyle(t).display?t.style.display=n:t.style.display="none"}}function getElementStyle(e){return window.getComputedStyle?getComputedStyle(e):e.currentStyle}var categoryArraySize=9,categories=new Array(categoryArraySize);categories[0]="overallQuality",categories[1]="errors",categories[2]="compliance",categories[3]="standards",categories[4]="accessibility",categories[5]="usability",categories[6]="seo",categories[7]="security",categories[8]="compatibility",document.addEventListener?document.addEventListener("DOMContentLoaded",pageLoad):window.attachEvent("onload",pageLoad);