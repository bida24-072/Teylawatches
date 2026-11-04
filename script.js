var IM={"396": "images/396.jpg", "426": "images/426.jpg", "427": "images/427.jpg", "428": "images/428.jpg", "458": "images/458.jpg", "459": "images/459.jpg", "460": "images/460.jpg", "461": "images/461.jpg", "462": "images/462.jpg", "463": "images/463.jpg", "464": "images/464.jpg"};
var $=function(s,e){return(e||document).querySelector(s)},$$=function(s,e){return[].slice.call((e||document).querySelectorAll(s))};
var cl=function(v){return Math.max(0,Math.min(1,v))},ss=function(a,b,x){x=cl((x-a)/(b-a));return x*x*(3-2*x)};
$("#ex").src=IM[428];$$("[data-im]").forEach(function(e){e.src=IM[e.dataset.im]});$$("[data-bg]").forEach(function(e){e.style.backgroundImage="url("+IM[e.dataset.bg]+")"});
var D={
home:[["459","MERIDIAN","Built for the deep.","Rose titanium and black ceramic, rated to 300 metres and worn for a week before it ships.",[["Case","40 mm titanium"],["Depth","300 m"]]],
["462","CALIBER","A movement you can see.","Hand-finished bridges, polished jewels and a balance that beats 28,800 times an hour.",[["Reserve","72 hours"],["Jewels","31"]]],
["460","PRECISION","Every wheel, resolved.","Gears cut to microns, then regulated in six positions across fourteen days.",[["Accuracy","±2 s / day"],["Regulation","14 days"]]],
["464","ECLIPSE","Two zones, one glance.","A two-tone ceramic bezel and a copper hand that keeps home time.",[["Bezel","Ceramic"],["Zones","2"]]],
["463","HANDS ON","Made to be held.","Real wrists, real light. Every watch is worn before it leaves us.",[["Fit","Wrist tested"],["Warranty","5 years"]]]],
col:[["396","AURORA","Aurora","Dress. A sunburst blue dial and a fluted bezel, slim enough for a cuff.",[["Case","38 mm titanium"],["Water","100 m"],["Price","$5,800"]],1],
["463","VERDANT","Verdant","Dive. A deep green ceramic bezel with a dial that holds the light.",[["Case","40 mm titanium"],["Water","300 m"],["Price","$6,400"]],1],
["459","EMBER","Ember","Sport. Black ceramic and rose titanium, built for open water at dusk.",[["Case","40 mm titanium"],["Water","300 m"],["Price","$7,900"]],1],
["464","ECLIPSE","Eclipse","Travel. A dual time watch with a copper hand for the second zone.",[["Case","40 mm titanium"],["Water","150 m"],["Price","$7,200"]],1]],
craft:[["462","BRIDGES","Machined, then finished by hand.","Titanium bridges are milled in one setup, then brushed and polished only where light should land.",[["Stage","1 of 4"]]],
["460","GEAR TRAIN","Regulated for fourteen days.","Every wheel is checked under magnification and timed in six positions.",[["Stage","2 of 4"]]],
["427","DIAL","Layered, never printed.","Sunburst dials are lacquered in layers, with applied indices and a crown applied by hand.",[["Stage","3 of 4"]]],
["458","CROWN","Sealed to 300 metres.","A triple-lock crown, pressure tested and signed off by the person who built it.",[["Stage","4 of 4"]]]]};
var pins=[];
function build(id,list){var el=$("#"+id),n=list.length,h="";
list.forEach(function(s,i){h+='<div class="sc"><div class="bg" style="background-image:url('+IM[s[0]]+')"></div><div class="bw">'+s[1]+'</div><img class="fg" alt="" src="'+IM[s[0]]+'"><div class="tx"><h2>'+s[2]+'</h2><p>'+s[3]+'</p>'+(s[5]?'<a class="btn" href="#contact">Reserve</a>':'')+'</div><dl>'+s[4].map(function(r){return"<dt>"+r[0]+"</dt><dd>"+r[1]+"</dd>"}).join("")+'</dl></div>'});
el.style.height=n*130+"vh";el.innerHTML='<div class="stk">'+h+'<div class="dots">'+list.map(function(s,i){return'<button aria-label="Scene '+(i+1)+'" data-i="'+i+'"></button>'}).join("")+'</div></div>';
$$(".dots button",el).forEach(function(b){b.onclick=function(){var t=el.getBoundingClientRect().top+scrollY,r=el.offsetHeight-innerHeight;scrollTo(0,t+r*((+b.dataset.i+.5)/n))}});pins.push(el)}
build("pin-home",D.home);build("pin-col",D.col);build("pin-craft",D.craft);
document.addEventListener("click",function(){});
$("#f").onsubmit=function(e){e.preventDefault();$("#ok").textContent="Thank you, "+$("#nm").value+". We will write to "+$("#em").value+" about "+$("#rf").value+".";$("#f").reset()};
var sp=$("#big");sp.innerHTML=sp.textContent.split(" ").map(function(w){return"<span>"+w+"</span>"}).join(" ");sp=$$("#big span");
var names=["home","collection","craft","story","contact"];
function route(){var h=location.hash.slice(1);if(names.indexOf(h)<0)h="home";$$(".page").forEach(function(p){p.classList.toggle("on",p.id=="p-"+h)});$$("nav div a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")=="#"+h)});scrollTo(0,0)}
addEventListener("hashchange",route);
function tick(){
var hr=$("#p-home.on #hero");
if(hr){var r=hr.getBoundingClientRect(),p=cl(-r.top/(r.height-innerHeight)),ex=$("#ex"),H=ex.offsetHeight;
ex.style.transform="translate(-50%,"+(-p*(H-innerHeight)*.96)+"px) scale("+(1+.08*p)+")";
$("#hero .bw").style.transform="translateY(-50%) scale("+(1+p*.25)+")";
$$(".hc").forEach(function(c){var a=c.dataset.r.split(",").map(Number),o=ss(a[0]-.02,a[0]+.05,p)*(a[1]==1?1:1-ss(a[1]-.05,a[1],p));if(a[0]==0)o=1-ss(a[1]-.06,a[1],p);c.style.opacity=o;c.style.transform="translateY("+(1-o)*30+"px)"})}
pins.forEach(function(el){if(!el.offsetParent)return;var r=el.getBoundingClientRect(),p=cl(-r.top/(r.height-innerHeight)),scs=$$(".sc",el),n=scs.length,act=Math.min(n-1,Math.floor(p*n));
scs.forEach(function(s,i){var d=p*n-i-.5,o=cl(2.2-Math.abs(d)*4.4);s.style.opacity=o;s.classList.toggle("on",i==act);
$(".fg",s).style.transform="translate(-50%,-50%) translateY("+d*-70+"px) scale("+(1.03-d*.07)+")";
$(".bw",s).style.transform="translateY(-50%) translateX("+d*-14+"vw)";
$(".tx",s).style.transform="translateY("+d*-50+"px)"});
$$(".dots button",el).forEach(function(b,i){b.classList.toggle("on",i==act)})});
if($("#p-story.on")){var q=cl((innerHeight*.9-$("#big").getBoundingClientRect().top)/(innerHeight*.9));sp.forEach(function(w,i){w.style.opacity=.14+.86*ss(i/sp.length-.05,i/sp.length+.05,q*1.25-.1)})}}
route();(function L(){tick();requestAnimationFrame(L)})();
