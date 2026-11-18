(function(){'use strict';var IM=function(s){return (innerWidth<900||matchMedia('(pointer:coarse)').matches)?s.replace(/\.webp$/,'-m.webp'):s};
var D=document,$=function(s,r){return (r||D).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||D).querySelectorAll(s))};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var CITIES=[['Sydney','NSW','Australia/Sydney','The Harbour City and Australia’s biggest job market, with beaches a bus ride from campus.',['Biggest job market','Harbour & beaches','5 universities'],'harbour'],['Melbourne','VIC','Australia/Melbourne','Laneways, coffee and culture, with two Group of Eight universities and a huge student scene.',['2 Group of Eight unis','Student city','6 universities'],'city'],['Brisbane','QLD','Australia/Brisbane','Sunny subtropical river city, home of UQ and host of the 2032 Olympic Games.',['Subtropical','2032 Olympics','3 universities'],'beach'],['Perth','WA','Australia/Perth','Indian Ocean sunsets and the Australian time zone closest to India.',['Closest to India time','Engineering & mining','4 universities'],'uluru'],['Adelaide','SA','Australia/Adelaide','A relaxed, walkable festival city and home of the newly merged Adelaide University.',['Festival city','Walkable','2 universities'],'campus'],['Canberra','ACT','Australia/Sydney','The national capital: green, safe and research-heavy, home of the Australian National University.',['National capital','Research hub','2 universities'],'campus'],['Hobart','TAS','Australia/Hobart','A calm harbour city with wilderness on the doorstep and a gateway to Antarctic research.',['Nature','Small-city calm','1 university'],'bush'],['Darwin','NT','Australia/Darwin','A tropical Top End city with a close-knit student community and Asia on its doorstep.',['Tropical','Close to Asia','1 university'],'reef']];
var SV=[['before','Career consultation','A free first session on your profile and the careers Australia opens up.',['Profile review with a senior counsellor','Group of Eight vs technical universities explained','Graduate visa and PR pathway overview for your family']],['before','Language test prep','IELTS, TOEFL iBT, PTE Academic or Cambridge C1 Advanced coaching.',['IELTS Academic 6.0 is the common bachelor’s bar','6.5 for most postgraduate courses','We target your university’s exact score']],['before','University selection','A shortlist matched to your grades, goals, city and budget.',['Only CRICOS-registered courses','AQF level 7+ programs that lead into the graduate visa','Scholarship-friendly options flagged']],['visa','Documentation','Every transcript, reference and statement checked before it’s filed.',['Academic records and references','Financial documents and translations','One clean, consistent file']],['visa','Student visa & Genuine Student','Your subclass 500, with GS answers written the way Home Affairs reads them.',['No routine interview: your written file carries the decision','Visa charge from A$2,500 plus Overseas Student Health Cover','Funds evidence for A$29,710 a year in living costs']],['visa','Scholarships & loans','Merit scholarships, bursaries and education loans through our partners.',['Merit and faculty scholarships','Collateral and non-collateral loans','Funds evidence that meets visa rules']],['visa','Family visas','Partner and children under 18 on your own subclass 500.',['Dependant applications and documents','Extra funds evidence for each family member','School enrolment for your children']],['after','Accommodation & settlement','Housing near campus, pre-departure briefings and arrival checklists.',['Safe student housing through our partners','Briefings on culture, classes and arrival','Airport-to-campus checklist']],['after','Part-time job support','Help finding permitted part-time work once you arrive.',['Up to 48 hours a fortnight in term','Unlimited hours in scheduled breaks','Help with your CV and first applications']]];
var ST=[['Year 0','Apply & get your visa','Offer, Confirmation of Enrolment and your subclass 500 student visa.',['CRICOS course','Visa from A$2,500','OSHC','A$29,710/yr funds']],['Years 1–4','Study and work part time','Full-time study with permitted part-time work alongside.',['48 hrs/fortnight','Unlimited in breaks','Internships']],['+2–3 years','Temporary Graduate visa (485)','Two years after a bachelor’s or coursework master’s, three after a research master’s or PhD.',['Any employer','No sponsor','Apply within 6 months','Age limit 35']],['Next','Skills in Demand visa','An employer sponsors you in an occupation on the Core Skills Occupation List.',['Employer-sponsored','Income threshold applies']],['After 2 years','Permanent residence','Employer nomination after two years on a Skills in Demand visa, or a points-tested skilled visa.',['Live & work permanently','Family can join']]];
var INT=[['Semester 1','February 2027','The biggest intake, most courses open',new Date(2027,1,22,9)],['Semester 2','July 2027','Second major intake, wide course choice',new Date(2027,6,19,9)],['Trimester 3','November 2027','Offered by selected universities',new Date(2027,10,1,9)]];
var U=[['UNSW Sydney','Sydney','19'],['University of Melbourne','Melbourne','=22'],['University of Sydney','Sydney','28'],['Australian National University','Canberra','29'],['Monash University','Melbourne','31'],['University of Queensland','Brisbane','=40'],['University of Western Australia','Perth','=77'],['Adelaide University','Adelaide','79']];
var Q=[['Ramana S.','Parent of student','My son has gotten the visa for his higher studies at one of the reputed Australian universities. Despite his complicated profile, the team made this happen.'],['Priya K.','Master’s student, Melbourne','They built my Genuine Student responses and funds evidence exactly the way Home Affairs wants them. Approved on the first attempt!'],['Vishal M.','Undergraduate, Sydney','The post-landing support for getting my accommodation in Sydney was a lifesaver.'],['Sneha R.','Graduate student, Adelaide','I had a previous visa refusal and was losing hope. My coordinator turned it around and guided me through every document.'],['Rahul V.','Engineering, Perth','The non-collateral loan help is 100% genuine. They connected me directly with their banking partners.'],['Anita D.','MBA candidate, Melbourne','Their advice on the graduate visa and the residence pathway gave me the clarity I needed before flying out.'],['Karthik N.','Computer Science, Brisbane','The counselling opened my eyes to universities I hadn’t even considered. Loving my semester in Brisbane!'],['Divya P.','Data Science, Canberra','From application essays to final visa prep, the entire journey felt personal. Highly recommended!'],['Siddharth J.','PhD student, Brisbane','Securing a graduate assistantship felt impossible, but with their profile-building strategy I got a full tuition waiver!']];
var FQ=[['study','What do I need to study in Australia?','A valid passport, strong academic transcripts, an English test (IELTS Academic 6.0 for a bachelor’s and 6.5 for postgraduate study is the common bar; TOEFL iBT, PTE Academic and Cambridge C1 Advanced are also accepted), academic references and well-prepared Genuine Student responses. Some MBAs also ask for a GMAT score or work experience.'],['visa','How does the student visa work?','Once you accept an offer, your provider issues a Confirmation of Enrolment for a CRICOS-registered course. You apply online for the subclass 500, pay the charge from A$2,500, take out Overseas Student Health Cover, show A$29,710 a year for living costs on top of tuition, and complete health and character checks. There is no routine interview.'],['visa','Can my family come with me?','Yes. Your partner and children under 18 are included in your own subclass 500 application from the start. Your partner can work 48 hours a fortnight, and unlimited hours once you’re enrolled in a master’s or doctorate.'],['work','Can I work while I study?','Yes. On a student visa you can work up to 48 hours a fortnight during term and unlimited hours in scheduled course breaks. We help you find permitted part-time work once you land.'],['work','How long can I work after graduating?','The Temporary Graduate visa (subclass 485) gives you two years after a bachelor’s or coursework master’s, and three after a research master’s or doctorate, with any employer and no sponsor. Apply within six months of completing; the age limit for this stream is 35.'],['money','Can I get a scholarship or education loan?','Yes. We match you to merit scholarships and bursaries and arrange collateral and non-collateral education loans through our banking partners.'],['money','How much money do I need to show?','For the student visa you show A$29,710 a year for living costs, on top of your course fees and travel. Extra amounts apply for each family member. We build funds evidence that meets the rules.'],['life','Do you help with housing and pre-departure?','Yes. We secure safe student housing near campus and run pre-departure briefings on culture, classes, packing and arrival.']];
var C={ink:'#0D0B1E',ultra:'#7FB2FF',wattle:'#F2A93B',euc:'#2E8B74',coral:'#E8735A',jac:'#C8B6FF',reef:'#9FE3C9',earth:'#F4A6C0',sand:'#F3EBDD',mint:'#9FE3C9',paper:'#F3EBDD'};
var CC={Sydney:[C.coral,C.ink],Melbourne:[C.jac,C.ink],Brisbane:[C.wattle,C.ink],Perth:[C.earth,C.ink],Adelaide:[C.ultra,C.ink],Canberra:[C.mint,C.ink],Hobart:[C.euc,C.sand],Darwin:[C.sand,C.ink]};
var ART={
 Sydney:'<path d="M8 98Q26 42 60 30Q46 68 52 98Z"/><path d="M42 98Q60 50 94 42Q76 76 82 98Z"/><path d="M72 98Q86 68 112 62Q100 86 104 98Z"/><rect x="4" y="98" width="112" height="9" rx="2"/>',
 Melbourne:'<path d="M60 44L40 12M28 12h40" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="10" y="44" width="100" height="44" rx="12"/><rect x="20" y="54" width="18" height="16" rx="3" fill="var(--c)"/><rect x="44" y="54" width="18" height="16" rx="3" fill="var(--c)"/><rect x="68" y="54" width="18" height="16" rx="3" fill="var(--c)"/><circle cx="32" cy="94" r="8"/><circle cx="88" cy="94" r="8"/>',
 Brisbane:'<circle cx="60" cy="42" r="24"/><path d="M4 84q14-14 28 0t28 0 28 0 28 0" stroke="currentColor" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M14 104q12-10 24 0t24 0 24 0 24 0" stroke="currentColor" stroke-width="6" fill="none" stroke-linecap="round" opacity=".6"/>',
 Perth:'<path d="M22 70a38 38 0 0 1 76 0Z"/><rect x="6" y="78" width="108" height="7" rx="3.5"/><rect x="18" y="92" width="84" height="6" rx="3"/><rect x="34" y="105" width="52" height="5" rx="2.5"/>',
 Adelaide:'<path d="M60 10c14 0 26 8 30 20-14 0-26-6-30-20Z"/><path d="M60 12v18" stroke="currentColor" stroke-width="4"/><circle cx="44" cy="44" r="11"/><circle cx="66" cy="44" r="11"/><circle cx="88" cy="44" r="11"/><circle cx="55" cy="64" r="11"/><circle cx="77" cy="64" r="11"/><circle cx="66" cy="84" r="11"/><circle cx="44" cy="84" r="9" opacity=".5"/>',
 Canberra:'<path d="M60 8L30 108M60 8L90 108M60 8L46 108M60 8L74 108" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M60 8h30v18H60z"/><rect x="10" y="104" width="100" height="8" rx="4"/>',
 Hobart:'<path d="M4 108L44 36l22 34 16-22 34 60Z"/><path d="M44 36l-11 20h22Z" fill="var(--c)"/><path d="M82 48l-7 10h14Z" fill="var(--c)"/>',
 Darwin:'<path d="M62 110Q58 70 70 40" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M70 40Q44 24 18 40Q46 32 70 44Z"/><path d="M70 40Q96 22 116 40Q94 34 70 44Z"/><path d="M70 40Q60 10 34 10Q60 20 68 42Z"/><path d="M70 40Q86 12 108 14Q86 22 72 44Z"/><circle cx="70" cy="46" r="6"/>'};
function art(n,cls){return '<svg class="'+(cls||'')+'" viewBox="0 0 120 120" fill="currentColor" aria-hidden="true">'+ART[n]+'</svg>'}

/* ---- times ---- */
function tzMin(tz){try{var p=new Intl.DateTimeFormat('en-GB',{timeZone:tz,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()),h=0,m=0;p.forEach(function(x){if(x.type==='hour')h=+x.value;if(x.type==='minute')m=+x.value});return h*60+m}catch(e){return null}}
function tLabel(tz){var m=tzMin(tz);if(m==null)return '';var i=tzMin('Asia/Kolkata'),d=m-i;if(d<-720)d+=1440;if(d>720)d-=1440;var hh=String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'),dh=d/60;return hh+' · '+(dh>=0?'+':'')+(Math.round(dh*10)/10)+'h vs India'}
function tick(){$$('[data-tz]').forEach(function(e){e.textContent=tLabel(e.dataset.tz)})}


/* ---- why deck ---- */
var FACTS=[[C.wattle,'37','','Ranked universities','Australian universities in the QS World University Rankings 2027, with UNSW Sydney at 19th in the world.','<path d="M8 40L60 14l52 26-52 26Z"/><path d="M28 52v24c20 14 44 14 64 0V52L60 68Z"/><path d="M106 42v34" stroke="currentColor" stroke-width="5"/>'],
 [C.coral,'2–3','yrs','Post-study work','The Temporary Graduate visa (subclass 485): any employer, anywhere in Australia, no sponsor needed.','<circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" stroke-width="10"/><path d="M60 30v32l20 14" stroke="currentColor" stroke-width="10" fill="none" stroke-linecap="round"/>'],
 [C.mint,'48','hrs','Work a fortnight','Part-time work during term on a student visa, and unlimited hours in scheduled course breaks.','<rect x="10" y="38" width="100" height="66" rx="12"/><path d="M42 38V26a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v12" stroke="currentColor" stroke-width="9" fill="none"/>'],
 [C.jac,'8','','Study cities','From Sydney’s harbour to Perth’s Indian Ocean sunsets, each city has its own pace and price.','<path d="M60 112S20 70 20 44a40 40 0 0 1 80 0c0 26-40 68-40 68Z"/><circle cx="60" cy="44" r="14" fill="var(--c)"/>']];
/* why australia: morphing bento */
(function(){
var root=$('#wx');if(!root)return;
var F=[{c:C.wattle,n:'37',u:'',t:'Ranked universities',p:'Australian universities in the QS World University Rankings 2027, with UNSW Sydney at 19th in the world.',tag:'QS 2027'},
 {c:C.coral,n:'2–3',u:'yrs',t:'Post-study work',p:'The Temporary Graduate visa (subclass 485): any employer, anywhere in Australia, no sponsor needed.',tag:'Subclass 485'},
 {c:C.mint,n:'48',u:'hrs',t:'Work a fortnight',p:'Part-time work during term on a student visa, and unlimited hours in scheduled course breaks.',tag:'Student visa'},
 {c:C.jac,n:'8',u:'',t:'Study cities',p:'From Sydney’s harbour to Perth’s Indian Ocean sunsets, each city has its own pace and price.',tag:'Coast to coast'}];
/* --- visuals --- */
function vUnis(){var h='<div class="v-unis">';for(var i=0;i<37;i++)h+='<i style="--d:'+(i*45)+'ms"'+(i==0?' class="top"':'')+'></i>';return h+'</div><div class="v-cap mono"><b>#19</b> UNSW Sydney · highest-ranked of 37</div>'}
function vPsw(){var t='';for(var y=0;y<=7;y++)t+='<span style="left:'+(y/7*100)+'%">Y'+y+'</span>';
 return '<div class="v-psw"><div class="trk"><div class="seg st" style="left:0;width:'+(3/7*100)+'%"><em>Degree</em></div><div class="seg vz" style="left:'+(3/7*100)+'%"><em>Graduate visa</em></div></div><div class="ticks mono">'+t+'</div></div><div class="v-cap mono">Starts when your course ends · length depends on your qualification</div>'}
var HRS=[4,4,0,6,4,8,0,4,4,0,6,0,8,0],DAYS='MTWTFSSMTWTFSS';
function vHrs(){var h='<div class="v-hrs">';HRS.forEach(function(v,i){h+='<div class="d"><b style="--h:'+(v/8)+';--d:'+(i*70)+'ms"></b><span class="mono">'+DAYS[i]+'</span></div>'});
 return h+'</div><div class="v-cap mono">One fortnight · <b class="hsum">0</b> / 48 hrs · breaks: unlimited</div>'}
var AU=[[113.6,-22],[114.2,-26.3],[115,-30],[115,-33.6],[116,-35],[118,-35],[121.9,-33.9],[124,-33],[126,-32.3],[129,-31.7],[131.2,-31.5],[134,-32.6],[135.6,-34.8],[137.8,-33],[137.5,-35.6],[138.6,-34.9],[139.6,-36.9],[141,-38.1],[143.5,-38.8],[145,-38.3],[146.4,-39.1],[148,-37.8],[149.9,-37.4],[150.2,-35.7],[151.3,-33.6],[152.5,-32.4],[153.6,-28.6],[153.1,-26],[152,-24.5],[150.8,-22.6],[149.2,-21],[146.3,-19],[145.4,-16],[145.3,-14.9],[143.6,-14],[142.5,-10.7],[141.6,-12.9],[141.5,-16],[140.6,-17.6],[139.3,-17.4],[137,-15.8],[135.5,-14.8],[136.8,-12.2],[135,-12.2],[132.6,-11.5],[131,-12.2],[130,-13.3],[129.5,-14.9],[128.1,-15.3],[126,-14],[124.4,-16.3],[122.2,-17.9],[121,-19.5],[118.8,-20.3],[116.7,-20.6],[114.6,-21.8]],
 TAS=[[144.6,-40.7],[148.3,-40.9],[148,-43.2],[146,-43.6],[145.2,-42.2]],
 PINS=[['Sydney',151.2,-33.9],['Melbourne',145,-37.8],['Brisbane',153,-27.5],['Perth',115.9,-31.95],['Adelaide',138.6,-34.9],['Canberra',149.1,-35.3],['Hobart',147.3,-42.9],['Darwin',130.8,-12.5]];
function inP(x,y,P){var o=false;for(var i=0,j=P.length-1;i<P.length;j=i++){var a=P[i],b=P[j];if((a[1]>y)!=(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])o=!o}return o}
function px(l){return (l-112)*9}function py(l){return (-l-10)*10}
var MAP=(function(){var d='';for(var la=-10.5;la>-44;la-=1.15)for(var lo=112.5;lo<154;lo+=1.25)if(inP(lo,la,AU)||inP(lo,la,TAS))d+='<circle cx="'+px(lo).toFixed(1)+'" cy="'+py(la).toFixed(1)+'" r="2.6"/>';return d})();
function vMap(){return '<div class="v-map"><svg viewBox="0 0 387 345" aria-hidden="true"><g class="dt">'+MAP+'</g>'+PINS.map(function(p,i){var x=px(p[1]),y=py(p[2]);return '<g class="pin" style="--d:'+(i*160)+'ms"><circle class="rg" cx="'+x+'" cy="'+y+'" r="6"/><circle cx="'+x+'" cy="'+y+'" r="5"/></g>'}).join('')+'</svg><ol class="mono">'+PINS.map(function(p,i){return '<li style="--d:'+(i*160)+'ms">'+p[0]+'</li>'}).join('')+'</ol></div>'}
var VIS=[vUnis,vPsw,vHrs,vMap];
function odo(s){return s.split('').map(function(ch){if(!/\d/.test(ch))return '<span class="sym">'+ch+'</span>';var h='<span class="od" data-d="'+ch+'"><span class="col">';for(var k=0;k<10;k++)h+='<span>'+k+'</span>';return h+'</span></span>'}).join('')}
var LAY=[['1.9fr','1fr','1.7fr','1fr'],['1fr','1.9fr','1.7fr','1fr'],['1.9fr','1fr','1fr','1.7fr'],['1fr','1.9fr','1fr','1.7fr']];
root.innerHTML='<div class="bx">'+F.map(function(f,i){return '<article class="bx-t" style="--c:'+f.c+'" data-i="'+i+'" tabindex="0" role="button" aria-expanded="false"><i class="bx-glow"></i><div class="bx-hd mono"><span>0'+(i+1)+' / 04</span><span class="bx-tag">'+f.tag+'</span></div><div class="bx-num" data-n="'+f.n+'"><span class="sr">'+f.n+(f.u?' '+f.u:'')+'</span><span aria-hidden="true" style="display:contents">'+odo(f.n)+(f.u?'<small>'+f.u+'</small>':'')+'</span></div><div class="bx-lb">'+f.t+'</div><div class="bx-more"><p>'+esc(f.p)+'</p><div class="bx-vis"></div></div><span class="bx-plus" aria-hidden="true">+</span></article>'}).join('')+'</div>';
var bx=$('.bx',root),tiles=$$('.bx-t',root),cur=-1,rolled=false;
function roll(t){$$('.od',t).forEach(function(o){$('.col',o).style.transform='translateY(-'+o.dataset.d+'0%)'})}
function open(i){if(i===cur)return;cur=i;var L=LAY[i];bx.style.setProperty('--c1',L[0]);bx.style.setProperty('--c2',L[1]);bx.style.setProperty('--r1',L[2]);bx.style.setProperty('--r2',L[3]);
 tiles.forEach(function(t,k){var on=k===i;t.classList.toggle('bx-on',on);t.setAttribute('aria-expanded',on);
  var v=$('.bx-vis',t);if(on){v.classList.remove('go');v.innerHTML=VIS[k]();setTimeout(function(){v.classList.add('go')},260);
   if(k===2){var sm=$('.hsum',v),tot=0,n=0,it=setInterval(function(){if(!sm||n>=HRS.length||cur!==2){clearInterval(it);return}tot+=HRS[n++];sm.textContent=tot},70)}}})}
tiles.forEach(function(t,i){
 if(matchMedia('(hover:hover)').matches)t.addEventListener('pointerenter',function(){open(i)});
 t.addEventListener('click',function(){open(i)});
 t.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i)}if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();var n=(i+1)%4;tiles[n].focus();open(n)}if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();var p=(i+3)%4;tiles[p].focus();open(p)}});
 t.addEventListener('pointermove',function(e){var r=t.getBoundingClientRect();t.style.setProperty('--mx',(e.clientX-r.left)+'px');t.style.setProperty('--my',(e.clientY-r.top)+'px')})});
open(0);
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting){tiles.forEach(function(t,k){setTimeout(function(){roll(t)},k*140)});io.disconnect()}},{threshold:.25});io.observe(bx)}else tiles.forEach(roll);
})();


var AMB={"Sydney": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAVADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDcj0H2qZdDA6ir/wDwkuleWWSQEisO78WCeYLARGo6k11wqVJbDlZGh/Yox0qN9GU9qXStcTUWMTShdvep7i7tYWP+l8/WpeIlF2YKCaMm40VcHisi70P0FbF14ktbcsJHD46YrLm8aacQAUP5VtDEz7ESpQ6lyO1t8f6lac2m2jAEwiiinFGsia3sbeHJjjCn2qO4hiycxg0UU0lcjoZV3YWzsWMYqhNZ2yJxAtFFbJGMj//Z", "Melbourne": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAgADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmnxJhA3zilsIsX6ENyDVDdJKokQ4x1NammKv2lJJR8o5LVxwk9LCmjX1DQjczx3Ef3hjNasdrsjVSOgqGDxBYyTLbx9elbYiRlDAjBr2qcoXbjuefLmskzLMHtTTB7VrGAZ7UhtxW3OiUjzOzUmPAjOKv75Eg8sJUEReFSM81Yt55CTu5r5ZKS95Hpxi5K5l+ZIl35gQpg110OuJFp8QDEsOSTXMSsXudrHAzWrNbRLaIAc5rtoOTdyZqOzLFz4tVJN6knA6Vi33ju/8AMPljatOutMR2AXgkdaxL/RLpZML8wroblcVo2P/Z", "Brisbane": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAbADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC0dJit4g0uFBqRNIikHyEGuPu/F1xdxqsrYHtUVp4kuIpt0UrEnjmuxVWc/sjrm0yFmZQRkVS1DTltoGkOBgVki+1C6DygkEHJOaivNUvbi0NvIcj1qViE9C/YNE0Fr9ot/M4qndWGAeKLW4mjtfKGcVXm1lk+R1zT9pHluHs3chWfT2jAKcikjurGGUlUBrIiJIFJLxmsoYuUVy2Rbgnqby6uhV0U7QailvVYbIySTWEjHb1qZGYEEHmolXumlFXHFa6s3VhvZIRsHFSx6BJKBM7jI6g1paExfTSW5NQXsrqxCsQPavGqYmrJuFz1Y0aaSkf/2Q==", "Perth": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAgADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDyAISame2ZIw3rWp/Ykm8AEE1bl0rEaKWGfSmmmPY5zyznGKUQn0roJdJPnKwHyjrU/wDZsa3CSZBX0pq1rg9zBtrCSbJUdOtWof3SFWXNa9sot7mQiHctTvpkbwG5kIjU9qiUkVCLuVNLlupZwJVIHriuotdIivnLFzlBVNJreCMKI8HPWrqa0kKELHjcMZFc3tYX0NHGy0GT2kYdodwIFV30Ywwh2yEJzk00XUDyl8tuzmm6tq8tzarBGpAWnGpTSd9xaokaG0EZ2zgGql5cWogCOxO30rnzLMzlMnNQSPNE2JCeaubpzVrWZftF2P/Z", "Adelaide": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAgADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC1rDSWtr5kfWotJke7ty8g5re1XQ7u7sSY0BGM1zmnXYtmNow2uGwc17UsZH4k9EeWsM/haNI21MNtRfTTiQCAZU+lM095Wlk888A8ZpTzOEbWCOAlK4G29qBbe1W57m3gA3MOamRoWAII5rt+tw7nOsNLsVDr97bRrtn3qOo9a5u5K3V693vEbseRmt2F9LtNO82eTc2OleeXV1PcalK8J2QM3FfIqlUSse7zrc7KPVJYFULMpIHeq02qzyFiWA9l71hxX9tZ3Ch1MmB3qxJq1vOxcRBAOmKXs5LcamujFe/825DSyFdvQGpv7ckmm8tZNu3pXPX96sku4VHBfCNw4AJHrXb7BvW5yuuf/9k=", "Canberra": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAgADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrF1LTtftzG7BJO2a5+/0x7ObbIMp2YVz961xo+JHOOeCprX0/xK9xbCO8jLxHox6iudKVOSktzV8s42exYt47eM5bmpZpbXYSVwAOtEccEpzDIGQ9PasbX7nZ/o0Z5PUivV9vFw5zzvZSU+QxdVuX1C5MMP8AqweTUUXk2SbV5PemStJBFkIVU960dL0N9RQSBsA+teZJynK7PQjaEbIq60JIYFM05cZ6Gn20n2iwHluVUCs/V7r7VEFX1qSwkKwLGK1qckZmEOZxNHS47zcwSYqtRysyX2ydtxJ+8auQzC3jGO9ZWqS5nEgpWXs7jcmpWLmpxCK2V/M3DPStXTYmnto3hlMeB0FctNfNLbhDW7pWoeXbKucVMXFzBtqFj//Z", "Hobart": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAgADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0+XU7aJMu4rKvPFFtCvyIzn2FZ0kyspzg1QmniCngVukjFyLj+NogTutzxUR8c2+M+Qa5y6eIueapB4Yn+RR+NFqnQhyp9Tso/G9q7AeSwzVoeKIGXIjOK4gzKR/Dk+1Sylo4A7vtQ9vWk1VWrKj7JuyLkmp4H3qzLrUzzzTHsbn+NwtUp7FACZLiuX61SXU3+qV5fZK9xqPzfeqv9uJPWntFpyH95MTUkP2KQ4t4GkNWsWvspsyeDkvikl8yTT5ZLq6SMZxnmupTTZrzW7WBoy1uq5Ydqj0rSYI4xNcjyW27to64q1YXurahqgbTYl8hBtBNJ1pSd2rG8aMIRtF3Z//Z", "Darwin": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAbADADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzKCyNxkKwH1qR9GnXriulOjxuvmxxbR9aZc2MjSRqxC8etcqxSeiOh0WldmCNCkKZDjpVN7CVc8ZArrWtWhwSVIPoarn7MFcYGB1rSNSUlcykrOxyptXHVTS/ZZSMhDiuoiksyoIjUgVNHLakHEa4o9rLsJ6GIuu3DKFMpwO1MuNTu5x8rVjqasW7t60KEVsjRyb3LI1K7jPzFjj1qq15MSw3H5utXSAV55qnKijsKpWRDRGLmVYyoY4NILmZRgOcGo2OKF+7VE2P/9k="};var CXTOPO="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAwIDEwMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIHNsaWNlIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNGM0VCREQiIHN0cm9rZS1vcGFjaXR5PSIuMDkiIHN0cm9rZS13aWR0aD0iMS4yIj48cGF0aCBkPSJNMTM0OSwyNTAgTDEzNDgsMjU3IEwxMzQ1LDI2MyBMMTM0MSwyNzAgTDEzMzYsMjc1IEwxMzMwLDI4MCBMMTMyMywyODQgTDEzMTUsMjg2IEwxMzA3LDI4OCBMMTMwMCwyOTAgTDEyOTUsMjkzIEwxMjkxLDI5NiBMMTI4NywzMDEgTDEyODQsMzA4IEwxMjc5LDMxNSBMMTI3NCwzMjEgTDEyNjcsMzI2IEwxMjU5LDMyOCBMMTI1MCwzMjggTDEyNDIsMzI2IEwxMjM0LDMyMyBMMTIyNywzMjAgTDEyMjAsMzE3IEwxMjEyLDMxNSBMMTIwNSwzMTMgTDExOTcsMzExIEwxMTg5LDMwOCBMMTE4MywzMDQgTDExNzgsMjk4IEwxMTc1LDI5MiBMMTE3NCwyODUgTDExNzQsMjc4IEwxMTc1LDI3MiBMMTE3NiwyNjYgTDExNzYsMjYxIEwxMTc1LDI1NSBMMTE3NCwyNTAgTDExNzMsMjQ1IEwxMTczLDIzOSBMMTE3MiwyMzMgTDExNzIsMjI3IEwxMTcxLDIyMSBMMTE3MSwyMTQgTDExNzEsMjA2IEwxMTczLDE5OCBMMTE3NiwxOTEgTDExODIsMTg1IEwxMTkwLDE4MiBMMTIwMCwxODAgTDEyMTAsMTgxIEwxMjIwLDE4MyBMMTIyOSwxODYgTDEyMzYsMTg4IEwxMjQzLDE4OSBMMTI1MCwxODggTDEyNTcsMTg3IEwxMjY0LDE4NSBMMTI3MiwxODUgTDEyNzksMTg1IEwxMjg2LDE4OCBMMTI5MiwxOTIgTDEyOTcsMTk2IEwxMzAyLDIwMSBMMTMwNiwyMDUgTDEzMTIsMjA4IEwxMzE5LDIxMiBMMTMyNiwyMTUgTDEzMzMsMjE5IEwxMzQwLDIyNCBMMTM0NSwyMzAgTDEzNDgsMjM2IEwxMzQ5LDI0MyBMMTM0OSwyNTBaIi8+PHBhdGggZD0iTTE0MzcsMjUwIEwxNDMyLDI2MyBMMTQyNiwyNzUgTDE0MjEsMjg3IEwxNDE3LDI5OSBMMTQxNSwzMTEgTDE0MTMsMzI1IEwxNDA5LDMzOSBMMTQwMiwzNTIgTDEzOTEsMzYzIEwxMzc1LDM2OSBMMTM1NiwzNzIgTDEzMzcsMzcwIEwxMzE4LDM2NyBMMTMwMSwzNjMgTDEyODcsMzYxIEwxMjc0LDM2MSBMMTI2MiwzNjQgTDEyNTAsMzY5IEwxMjM2LDM3NSBMMTIyMSwzNzkgTDEyMDYsMzgzIEwxMTg5LDM4NCBMMTE3MiwzODMgTDExNTUsMzgxIEwxMTM5LDM3NyBMMTEyMiwzNzIgTDExMDgsMzY0IEwxMDk2LDM1MyBMMTA4OCwzNDEgTDEwODMsMzI3IEwxMDgzLDMxMiBMMTA4NSwyOTggTDEwODgsMjg1IEwxMDkwLDI3MyBMMTA4OSwyNjEgTDEwODcsMjUwIEwxMDg0LDIzOCBMMTA4MiwyMjYgTDEwODMsMjE0IEwxMDg4LDIwMyBMMTA5OCwxOTMgTDExMTAsMTg1IEwxMTIzLDE3OSBMMTEzNCwxNzIgTDExNDMsMTY1IEwxMTUwLDE1NSBMMTE1NiwxNDIgTDExNjIsMTI4IEwxMTcwLDExMyBMMTE4MiwxMDAgTDExOTYsOTAgTDEyMTQsODUgTDEyMzIsODUgTDEyNTAsODkgTDEyNjcsOTYgTDEyODIsMTA0IEwxMjk2LDExMiBMMTMwOSwxMjEgTDEzMjAsMTMwIEwxMzMwLDEzOSBMMTMzOSwxNDggTDEzNDcsMTU3IEwxMzU1LDE2NiBMMTM2NCwxNzMgTDEzNzQsMTgwIEwxMzg2LDE4NyBMMTQwMCwxOTQgTDE0MTQsMjAyIEwxNDI2LDIxMiBMMTQzNCwyMjQgTDE0MzgsMjM3IEwxNDM3LDI1MFoiLz48cGF0aCBkPSJNMTUyNSwyNTAgTDE1MjksMjcwIEwxNTI4LDI4OSBMMTUyMywzMDggTDE1MTMsMzI3IEwxNTAyLDM0NCBMMTQ4OSwzNjAgTDE0NzcsMzc3IEwxNDY0LDM5NCBMMTQ1MCw0MTAgTDE0MzQsNDI1IEwxNDEzLDQzNiBMMTM4OCw0NDIgTDEzNjIsNDQxIEwxMzM0LDQzNSBMMTMwOSw0MjcgTDEyODcsNDE4IEwxMjY4LDQxMyBMMTI1MCw0MTQgTDEyMzEsNDIwIEwxMjEwLDQzMSBMMTE4NSw0NDQgTDExNTcsNDU0IEwxMTI5LDQ1OCBMMTEwMSw0NTYgTDEwNzcsNDQ4IEwxMDU3LDQzNCBMMTA0Miw0MTcgTDEwMjksMzk4IEwxMDE4LDM4MCBMMTAwOCwzNjIgTDEwMDAsMzQzIEw5OTQsMzI1IEw5OTEsMzA2IEw5OTEsMjg2IEw5OTUsMjY4IEwxMDAwLDI1MCBMMTAwNiwyMzMgTDEwMTEsMjE2IEwxMDE2LDIwMCBMMTAyMCwxODMgTDEwMjYsMTY2IEwxMDM1LDE1MCBMMTA0NywxMzYgTDEwNjIsMTI0IEwxMDc5LDExMyBMMTA5NiwxMDMgTDExMTIsOTIgTDExMjYsNzggTDExNDAsNjEgTDExNTUsNDEgTDExNzMsMjEgTDExOTYsNCBMMTIyMiwtNSBMMTI1MCwtNiBMMTI3NywyIEwxMzAxLDE4IEwxMzIxLDM4IEwxMzM3LDU5IEwxMzUwLDc4IEwxMzY0LDkyIEwxMzc4LDEwMyBMMTM5NSwxMTIgTDE0MTMsMTIwIEwxNDMxLDEyOCBMMTQ0OCwxMzkgTDE0NjMsMTUyIEwxNDc2LDE2NiBMMTQ4NywxODEgTDE0OTgsMTk3IEwxNTA4LDIxNCBMMTUxOCwyMzEgTDE1MjUsMjUwWiIvPjxwYXRoIGQ9Ik0xNjM1LDI1MCBMMTYzNywyNzcgTDE2MjcsMzAzIEwxNjA2LDMyNiBMMTU3NiwzNDUgTDE1NDMsMzU5IEwxNTExLDM3MSBMMTQ4NCwzODEgTDE0NjUsMzk0IEwxNDUxLDQxMSBMMTQ0MSw0MzIgTDE0MzAsNDU2IEwxNDE2LDQ4MSBMMTM5OCw1MDQgTDEzNzUsNTI0IEwxMzQ3LDU0MSBMMTMxNyw1NTQgTDEyODQsNTYzIEwxMjUwLDU2OSBMMTIxNSw1NzAgTDExODAsNTY2IEwxMTQ4LDU1NSBMMTExOSw1MzggTDEwOTUsNTE3IEwxMDc1LDQ5MiBMMTA2MCw0NjcgTDEwNDUsNDQ1IEwxMDI5LDQyNyBMMTAwOSw0MTIgTDk4NiwzOTggTDk2MiwzODMgTDk0MSwzNjUgTDkyNiwzNDQgTDkxOSwzMjEgTDkyMCwyOTcgTDkyNywyNzMgTDkzNSwyNTAgTDkzOSwyMjggTDkzOCwyMDYgTDkzMCwxODEgTDkxOCwxNTMgTDkwOCwxMjMgTDkwNSw5MSBMOTExLDYwIEw5MjksMzQgTDk1NiwxNSBMOTkxLDMgTDEwMjksLTMgTDEwNjYsLTQgTDExMDIsLTQgTDExMzUsLTIgTDExNjYsMCBMMTE5NSwyIEwxMjIzLDUgTDEyNTAsOSBMMTI3NiwxMiBMMTMwMiwxNSBMMTMyOSwxNCBMMTM1OCwxMiBMMTM5MCw5IEwxNDI1LDcgTDE0NjEsOSBMMTQ5NSwxNiBMMTUyNCwzMSBMMTU0NSw1MiBMMTU2MCw3NyBMMTU2OCwxMDMgTDE1NzUsMTI5IEwxNTgzLDE1MyBMMTU5NSwxNzYgTDE2MTAsMTk5IEwxNjI0LDIyNCBMMTYzNSwyNTBaIi8+PHBhdGggZD0iTTE2OTcsMjUwIEwxNjk2LDI4MSBMMTY4OCwzMTIgTDE2NzIsMzQwIEwxNjUxLDM2NyBMMTYyNiwzOTAgTDE2MDAsNDEyIEwxNTc2LDQzMyBMMTU1Myw0NTMgTDE1MzAsNDc0IEwxNTA3LDQ5NSBMMTQ4MSw1MTQgTDE0NTIsNTMwIEwxNDIyLDU0NSBMMTM5MSw1NjAgTDEzNTksNTc2IEwxMzI2LDU5NSBMMTI5MCw2MTcgTDEyNTAsNjM5IEwxMjA2LDY1NiBMMTE1OCw2NjUgTDExMTIsNjYxIEwxMDcxLDY0MyBMMTAzOSw2MTMgTDEwMTYsNTc0IEwxMDAzLDUzMiBMOTk0LDQ5NCBMOTg1LDQ2MiBMOTcxLDQzNyBMOTUwLDQxOCBMOTIyLDQwMiBMODkyLDM4NCBMODYzLDM2MyBMODQxLDMzOCBMODI3LDMxMCBMODIyLDI4MCBMODIyLDI1MCBMODI0LDIyMCBMODI2LDE5MCBMODI3LDE1OSBMODI4LDEyNyBMODMzLDk0IEw4NDMsNjIgTDg1OSwzMSBMODgzLDMgTDkxMiwtMjEgTDk0NCwtNDIgTDk3OSwtNjAgTDEwMTUsLTc2IEwxMDUyLC04OSBMMTA5MiwtOTggTDExMzMsLTEwMCBMMTE3NCwtOTQgTDEyMTQsLTgwIEwxMjUwLC02MSBMMTI4MiwtNDEgTDEzMTAsLTI0IEwxMzM5LC0xNSBMMTM3MCwtMTQgTDE0MDgsLTIyIEwxNDU0LC0zMiBMMTUwNSwtNDEgTDE1NTcsLTQyIEwxNjA0LC0zMyBMMTY0MSwtMTMgTDE2NjYsMTcgTDE2ODAsNTIgTDE2ODUsODggTDE2ODUsMTIzIEwxNjg2LDE1NiBMMTY4OSwxODggTDE2OTMsMjE5IEwxNjk3LDI1MFoiLz48cGF0aCBkPSJNMTgwNCwyNTAgTDE4MDcsMjg5IEwxODA1LDMyOCBMMTc5NiwzNjcgTDE3NzksNDA0IEwxNzUyLDQzNyBMMTcxOSw0NjcgTDE2ODMsNDkyIEwxNjQ1LDUxNSBMMTYwOCw1MzYgTDE1NzEsNTU2IEwxNTMzLDU3MyBMMTQ5Myw1ODcgTDE0NTEsNTk1IEwxNDA5LDU5OSBMMTM2Nyw2MDAgTDEzMjgsNjAzIEwxMjg5LDYxMCBMMTI1MCw2MjUgTDEyMDcsNjQ3IEwxMTU3LDY3MyBMMTEwMCw2OTcgTDEwNDAsNzEyIEw5ODAsNzEyIEw5MjgsNjk2IEw4ODksNjYzIEw4NjMsNjE5IEw4NDksNTcxIEw4NDMsNTIzIEw4MzksNDgwIEw4MzEsNDQ0IEw4MTcsNDEyIEw3OTgsMzgyIEw3NzksMzUxIEw3NjMsMzE5IEw3NTQsMjg1IEw3NTQsMjUwIEw3NjEsMjE2IEw3NzEsMTgyIEw3ODIsMTUwIEw3OTIsMTE3IEw4MDAsODIgTDgxMCw0NyBMODIyLDEwIEw4NDEsLTI1IEw4NjYsLTU3IEw4OTYsLTg3IEw5MzEsLTExNSBMOTY4LC0xNDEgTDEwMDcsLTE2NiBMMTA1MCwtMTkwIEwxMDk2LC0yMTEgTDExNDUsLTIyNCBMMTE5OCwtMjI3IEwxMjUwLC0yMTUgTDEyOTgsLTE4OSBMMTMzOSwtMTU0IEwxMzcyLC0xMTQgTDEzOTksLTc3IEwxNDI0LC00OSBMMTQ1MywtMzIgTDE0OTEsLTI1IEwxNTM4LC0yNCBMMTU5MiwtMjMgTDE2NDgsLTE3IEwxNjk5LC0xIEwxNzQwLDI0IEwxNzY4LDU3IEwxNzg1LDk0IEwxNzkzLDEzNCBMMTc5NywxNzMgTDE4MDAsMjExIEwxODA0LDI1MFoiLz48cGF0aCBkPSJNMTg1MSwyNTAgTDE4MzAsMjkxIEwxODA0LDMyOCBMMTc3MiwzNjIgTDE3MzgsMzkyIEwxNzA3LDQyMCBMMTY4Miw0NTAgTDE2NjcsNDg0IEwxNjYxLDUyNiBMMTY1OCw1NzYgTDE2NTIsNjMzIEwxNjM1LDY5MCBMMTYwNCw3NDEgTDE1NTcsNzc4IEwxNDk5LDc5NyBMMTQzMyw3OTggTDEzNjgsNzg1IEwxMzA2LDc2NSBMMTI1MCw3NDUgTDExOTcsNzMwIEwxMTQ2LDcyMSBMMTA5NCw3MTYgTDEwNDEsNzEwIEw5ODksNjk4IEw5NDEsNjc4IEw5MDEsNjQ4IEw4NzAsNjEyIEw4NDcsNTczIEw4MjcsNTM0IEw4MDgsNDk4IEw3ODUsNDY1IEw3NTcsNDM0IEw3MjcsNDAyIEw2OTYsMzY5IEw2NjgsMzMyIEw2NDUsMjkyIEw2MjYsMjUwIEw2MTAsMjA1IEw1OTgsMTU4IEw1ODksMTA4IEw1ODcsNTcgTDU5Niw2IEw2MjEsLTQwIEw2NjQsLTc4IEw3MjIsLTEwNCBMNzkyLC0xMTcgTDg2NCwtMTE4IEw5MzMsLTExMyBMOTkyLC0xMDggTDEwNDAsLTExMSBMMTA4MCwtMTI0IEwxMTE2LC0xNDkgTDExNTUsLTE4MCBMMTIwMCwtMjExIEwxMjUwLC0yMzUgTDEzMDQsLTI0NiBMMTM1OSwtMjQ0IEwxNDExLC0yMzEgTDE0NjAsLTIxMSBMMTUwNiwtMTkwIEwxNTU0LC0xNzEgTDE2MDQsLTE1NCBMMTY1OCwtMTM5IEwxNzEzLC0xMjAgTDE3NjYsLTk2IEwxODExLC02NCBMMTg0NSwtMjUgTDE4NjcsMjAgTDE4NzgsNjcgTDE4NzksMTE1IEwxODc1LDE2MiBMMTg2NSwyMDcgTDE4NTEsMjUwWiIvPjxwYXRoIGQ9Ik0xOTYzLDI1MCBMMTk4OCwzMDIgTDIwMDEsMzU2IEwyMDA0LDQxMiBMMTk5Niw0NjcgTDE5NzgsNTIyIEwxOTUwLDU3NCBMMTkxMSw2MjAgTDE4NTgsNjU4IEwxNzk0LDY4NSBMMTcyMCw2OTggTDE2NDMsNjk5IEwxNTY5LDY5MiBMMTUwMyw2ODMgTDE0NDYsNjgxIEwxMzk3LDY5MCBMMTM1Miw3MTEgTDEzMDQsNzQyIEwxMjUwLDc3NiBMMTE5MCw4MDMgTDExMjUsODE3IEwxMDYxLDgxNCBMMTAwMiw3OTUgTDk0OSw3NjYgTDkwMSw3MzMgTDg1NSw3MDIgTDgwNCw2NzUgTDc0Nyw2NTIgTDY4NSw2MjkgTDYyMiw2MDIgTDU2Niw1NjYgTDUyNCw1MjEgTDUwMSw0NjggTDQ5Nyw0MTEgTDUxMCwzNTQgTDUzNCwzMDAgTDU2MywyNTAgTDU5MywyMDQgTDYyMywxNjIgTDY1MSwxMjIgTDY4MCw4NCBMNzA5LDQ4IEw3MzgsMTQgTDc2NCwtMjIgTDc4NiwtNjEgTDgwNCwtMTA3IEw4MjAsLTE2MCBMODQwLC0yMTggTDg2OSwtMjc4IEw5MTEsLTMzMiBMOTY3LC0zNzIgTDEwMzUsLTM5MiBMMTEwOSwtMzkyIEwxMTgyLC0zNzMgTDEyNTAsLTM0NCBMMTMxMiwtMzEzIEwxMzY4LC0yODYgTDE0MjQsLTI2OCBMMTQ4MSwtMjU3IEwxNTQxLC0yNDkgTDE2MDEsLTIzNyBMMTY1OCwtMjE2IEwxNzA0LC0xODMgTDE3MzcsLTE0MCBMMTc1OCwtOTEgTDE3NjksLTQxIEwxNzc5LDYgTDE3OTMsNDggTDE4MTYsODUgTDE4NDksMTIyIEwxODg5LDE2MCBMMTkyOSwyMDMgTDE5NjMsMjUwWiIvPjxwYXRoIGQ9Ik0yMTc4LDI1MCBMMjE4OSwzMTYgTDIxNzEsMzgwIEwyMTMxLDQzOSBMMjA3Niw0OTEgTDIwMTYsNTM2IEwxOTU1LDU3NiBMMTg5Niw2MTIgTDE4MzgsNjQ1IEwxNzgwLDY3NCBMMTcyMSw2OTkgTDE2NjAsNzE5IEwxNjAxLDczNiBMMTU0Myw3NTMgTDE0ODgsNzczIEwxNDMzLDc5OCBMMTM3Nyw4MjYgTDEzMTYsODUzIEwxMjUwLDg3NSBMMTE4MCw4ODYgTDExMTAsODgzIEwxMDQzLDg2NyBMOTgwLDg0MyBMOTIwLDgxNyBMODU4LDc5MyBMNzkyLDc3NCBMNzE3LDc1OCBMNjM4LDc0MCBMNTU5LDcxNCBMNDkxLDY3NSBMNDQ1LDYyMiBMNDI3LDU1NyBMNDM5LDQ4NiBMNDc1LDQxNiBMNTIyLDM1MyBMNTY5LDI5OCBMNjAzLDI1MCBMNjIwLDIwNiBMNjIwLDE2MSBMNjA5LDExMyBMNTk2LDYwIEw1ODgsMyBMNTkxLC01NCBMNjA2LC0xMTEgTDYzMiwtMTY1IEw2NjcsLTIxNyBMNzA4LC0yNjcgTDc1NywtMzEzIEw4MTMsLTM1NSBMODc4LC0zODkgTDk0OSwtNDExIEwxMDI2LC00MTkgTDExMDMsLTQxNSBMMTE3OSwtNDAyIEwxMjUwLC0zODUgTDEzMTgsLTM2OSBMMTM4NCwtMzU4IEwxNDUxLC0zNTAgTDE1MTksLTM0MSBMMTU4NSwtMzI1IEwxNjQ2LC0yOTggTDE2OTUsLTI1OCBMMTczMCwtMjA3IEwxNzUxLC0xNTEgTDE3NjUsLTk2IEwxNzgxLC00OCBMMTgwOSwtOCBMMTg1NSwyNCBMMTkxOSw1NSBMMTk5Niw5MCBMMjA3MywxMzQgTDIxMzgsMTg4IEwyMTc4LDI1MFoiLz48cGF0aCBkPSJNMzgyLDgyMCBMMzgyLDgyNiBMMzgyLDgzMiBMMzgyLDgzOCBMMzgyLDg0NCBMMzgxLDg1MCBMMzc5LDg1NiBMMzc2LDg2MiBMMzcxLDg2OCBMMzY1LDg3MiBMMzU5LDg3NyBMMzUzLDg4MSBMMzQ3LDg4NSBMMzQxLDg5MCBMMzMzLDg5MyBMMzI1LDg5NiBMMzE3LDg5NyBMMzA4LDg5NSBMMzAwLDg5MSBMMjkzLDg4NiBMMjg3LDg4MCBMMjgyLDg3NSBMMjc3LDg3MSBMMjcxLDg2OSBMMjY0LDg2OSBMMjU2LDg3MCBMMjQ3LDg3MSBMMjM3LDg3MCBMMjI4LDg2OCBMMjIxLDg2NCBMMjE1LDg1OSBMMjEyLDg1MyBMMjEwLDg0NiBMMjA4LDg0MCBMMjA3LDgzMyBMMjA3LDgyNyBMMjA3LDgyMCBMMjA4LDgxNCBMMjEwLDgwNyBMMjEzLDgwMSBMMjE4LDc5NiBMMjIyLDc5MSBMMjI3LDc4NiBMMjMyLDc4MiBMMjM3LDc3OCBMMjQyLDc3MyBMMjQ3LDc2OSBMMjUzLDc2NiBMMjYwLDc2NCBMMjY3LDc2MyBMMjczLDc2MiBMMjgwLDc2MSBMMjg2LDc1OSBMMjkzLDc1NiBMMzAwLDc1MSBMMzA4LDc0NiBMMzE3LDc0MiBMMzI3LDczOSBMMzM3LDczOSBMMzQ1LDc0MiBMMzUyLDc0OCBMMzU2LDc1NSBMMzU5LDc2NCBMMzYxLDc3MSBMMzYyLDc3OCBMMzY0LDc4NCBMMzY3LDc4OSBMMzcwLDc5NCBMMzc0LDc5OCBMMzc3LDgwMyBMMzgwLDgwOSBMMzgxLDgxNCBMMzgyLDgyMFoiLz48cGF0aCBkPSJNNDY2LDgyMCBMNDU0LDgzMSBMNDQ0LDg0MCBMNDM3LDg0OSBMNDM0LDg1OSBMNDMzLDg3MCBMNDM0LDg4MiBMNDM0LDg5NSBMNDMyLDkwOSBMNDI3LDkyMiBMNDIwLDkzNCBMNDEwLDk0NiBMMzk4LDk1NiBMMzg0LDk2NSBMMzY5LDk3MiBMMzUyLDk3NiBMMzM1LDk3OCBMMzE3LDk3NSBMMzAwLDk2OSBMMjg1LDk2MSBMMjcxLDk1MSBMMjU5LDk0MyBMMjQ3LDkzNiBMMjM1LDkzMiBMMjIxLDkyOSBMMjA3LDkyNyBMMTkyLDkyMyBMMTc4LDkxOCBMMTY3LDkwOSBMMTYwLDg5OCBMMTU2LDg4NyBMMTU0LDg3NSBMMTUxLDg2MyBMMTQ2LDg1MyBMMTM4LDg0MyBMMTI3LDgzMiBMMTE2LDgyMCBMMTA2LDgwNiBMMTAwLDc5MiBMOTksNzc3IEwxMDUsNzYzIEwxMTYsNzUxIEwxMzEsNzQyIEwxNDcsNzM0IEwxNjQsNzI5IEwxODAsNzI0IEwxOTUsNzIwIEwyMDksNzE2IEwyMjMsNzEzIEwyMzYsNzExIEwyNDksNzA5IEwyNjIsNzA2IEwyNzQsNzAyIEwyODYsNjk2IEwzMDAsNjg5IEwzMTUsNjgyIEwzMzIsNjc2IEwzNDksNjcyIEwzNjcsNjczIEwzODMsNjc4IEwzOTYsNjg2IEw0MDcsNjk3IEw0MTcsNzA5IEw0MjYsNzIwIEw0MzUsNzI5IEw0NDcsNzM4IEw0NTksNzQ3IEw0NzEsNzU2IEw0ODAsNzY4IEw0ODQsNzgxIEw0ODMsNzk0IEw0NzYsODA4IEw0NjYsODIwWiIvPjxwYXRoIGQ9Ik01OTEsODIwIEw2MDQsODQxIEw2MDYsODYzIEw1OTksODg0IEw1ODUsOTAzIEw1NjcsOTE5IEw1NDYsOTM0IEw1MjYsOTQ2IEw1MDYsOTU4IEw0ODYsOTY5IEw0NjYsOTc4IEw0NDUsOTg1IEw0MjMsOTkxIEw0MDIsOTk1IEwzODEsOTk4IEwzNjEsMTAwMiBMMzQxLDEwMDcgTDMyMSwxMDEyIEwzMDAsMTAxOCBMMjc4LDEwMjIgTDI1NSwxMDIzIEwyMzMsMTAyMCBMMjEyLDEwMTQgTDE5MiwxMDA1IEwxNzMsOTk2IEwxNTMsOTg4IEwxMzEsOTgxIEwxMDUsOTc2IEw3OCw5NjkgTDUxLDk1OSBMMjksOTQ1IEwxNCw5MjcgTDksOTA1IEwxNSw4ODEgTDMwLDg1OCBMNDgsODM4IEw2Niw4MjAgTDgxLDgwNSBMODksNzkwIEw5Miw3NzUgTDkyLDc1OSBMOTEsNzQyIEw5MSw3MjQgTDk2LDcwNSBMMTAzLDY4OCBMMTE1LDY3MiBMMTI4LDY1NiBMMTQ0LDY0MSBMMTYxLDYyNyBMMTgwLDYxNCBMMjAxLDYwMyBMMjI1LDU5NiBMMjUwLDU5MyBMMjc1LDU5NCBMMzAwLDU5OCBMMzI0LDYwNCBMMzQ2LDYwOSBMMzY5LDYxNCBMMzkxLDYxOSBMNDE0LDYyNCBMNDM2LDYzMiBMNDU0LDY0NCBMNDY4LDY2MCBMNDc3LDY3OSBMNDgwLDY5OSBMNDgxLDcxOCBMNDgzLDczNSBMNDkwLDc0OSBMNTAzLDc2MSBMNTIyLDc3MiBMNTQ3LDc4NSBMNTcxLDgwMSBMNTkxLDgyMFoiLz48cGF0aCBkPSJNNjM2LDgyMCBMNjE1LDg0MiBMNTkzLDg2MSBMNTc0LDg3OSBMNTYyLDg5NiBMNTU5LDkxNiBMNTYzLDk0MSBMNTcwLDk3MSBMNTc1LDEwMDQgTDU3MiwxMDM4IEw1NjAsMTA2OCBMNTM4LDEwOTIgTDUwNywxMTA3IEw0NzIsMTExNSBMNDM1LDExMTYgTDM5OCwxMTE0IEwzNjQsMTExMCBMMzMxLDExMDYgTDMwMCwxMTAxIEwyNzAsMTA5NSBMMjQxLDEwODYgTDIxNCwxMDc2IEwxODksMTA2MyBMMTY2LDEwNTAgTDE0MywxMDM4IEwxMTksMTAyNyBMOTQsMTAxNyBMNjgsMTAwNiBMNDIsOTkzIEwyMCw5NzcgTDIsOTU4IEwtMTEsOTM2IEwtMjAsOTEzIEwtMjcsODkwIEwtMzUsODY3IEwtNDgsODQ0IEwtNjQsODIwIEwtODIsNzkzIEwtOTYsNzY0IEwtMTAyLDczNCBMLTk2LDcwNSBMLTc2LDY4MCBMLTQzLDY2MSBMLTQsNjUwIEwzOCw2NDQgTDc3LDY0MiBMMTEwLDYzOSBMMTM2LDYzMyBMMTU3LDYyMiBMMTc2LDYwNyBMMTk1LDU5MCBMMjE3LDU3MyBMMjQyLDU1OSBMMjcwLDU0OCBMMzAwLDU0MSBMMzMxLDUzNyBMMzYzLDUzNSBMMzk2LDUzNSBMNDI5LDUzNyBMNDYyLDU0MyBMNDkzLDU1MyBMNTIwLDU2OCBMNTQ0LDU4OCBMNTYzLDYxMCBMNTc5LDYzMyBMNTkzLDY1NiBMNjA4LDY3OCBMNjIzLDY5OSBMNjM4LDcyMiBMNjQ5LDc0NSBMNjU0LDc3MCBMNjQ5LDc5NiBMNjM2LDgyMFoiLz48cGF0aCBkPSJNNzM2LDgyMCBMNzA1LDg0OCBMNjcwLDg3MiBMNjM5LDg5MyBMNjE4LDkxMyBMNjA5LDkzNSBMNjEwLDk2MyBMNjE3LDk5OCBMNjIzLDEwMzcgTDYyMSwxMDc3IEw2MDksMTExNCBMNTg0LDExNDQgTDU0OSwxMTY1IEw1MDgsMTE3NyBMNDY1LDExODMgTDQyMiwxMTg1IEwzODEsMTE4NiBMMzQwLDExODcgTDMwMCwxMTg3IEwyNjAsMTE4NSBMMjIxLDExNzggTDE4NCwxMTY3IEwxNTAsMTE1MSBMMTE5LDExMzEgTDkxLDExMTAgTDY0LDEwODkgTDM4LDEwNjkgTDEzLDEwNDkgTC0xMSwxMDI5IEwtMzIsMTAwNiBMLTQ5LDk4MSBMLTYxLDk1NSBMLTcwLDkyOCBMLTgwLDkwMSBMLTkzLDg3NSBMLTExMyw4NDkgTC0xMzksODIwIEwtMTY3LDc4NyBMLTE5Miw3NTEgTC0yMDYsNzEyIEwtMjA0LDY3MyBMLTE4NCw2MzkgTC0xNDgsNjEzIEwtMTAwLDU5NiBMLTQ3LDU4NyBMMyw1ODIgTDQ2LDU3OCBMODIsNTcxIEwxMTEsNTU5IEwxMzgsNTQzIEwxNjYsNTI1IEwxOTYsNTA5IEwyMjksNDk2IEwyNjQsNDg5IEwzMDAsNDg3IEwzMzYsNDg4IEwzNzMsNDg5IEw0MTAsNDkxIEw0NDksNDkzIEw0ODksNDk3IEw1MjgsNTA0IEw1NjYsNTE2IEw2MDEsNTMzIEw2MzIsNTU1IEw2NTksNTc5IEw2ODUsNjA0IEw3MDksNjMxIEw3MzIsNjU5IEw3NTIsNjg4IEw3NjYsNzIwIEw3NjksNzU0IEw3NTksNzg4IEw3MzYsODIwWiIvPjxwYXRoIGQ9Ik03NTEsODIwIEw3NTAsODUyIEw3NTEsODg0IEw3NTMsOTE3IEw3NTksOTU0IEw3NjcsOTk0IEw3NzUsMTAzOSBMNzc2LDEwODcgTDc2NywxMTM0IEw3NDMsMTE3NSBMNzA1LDEyMDYgTDY1MywxMjI0IEw1OTUsMTIyOCBMNTM1LDEyMjMgTDQ3OSwxMjE0IEw0MjksMTIwNiBMMzg0LDEyMDMgTDM0MiwxMjA3IEwzMDAsMTIxNiBMMjU2LDEyMjUgTDIxMCwxMjI4IEwxNjUsMTIyMyBMMTI0LDEyMDcgTDg5LDExODIgTDU5LDExNTQgTDMyLDExMjYgTDUsMTEwMSBMLTI3LDEwODIgTC02NSwxMDY1IEwtMTA4LDEwNDkgTC0xNTQsMTAzMCBMLTE5NywxMDA2IEwtMjM1LDk3NiBMLTI2NCw5NDEgTC0yODQsOTAyIEwtMjk2LDg2MiBMLTI5OSw4MjAgTC0yOTYsNzc4IEwtMjgzLDczOCBMLTI2MSw3MDAgTC0yMjgsNjY2IEwtMTg0LDYzOSBMLTEzNSw2MTkgTC04NCw2MDUgTC0zNyw1OTQgTDEsNTgxIEwzMCw1NjIgTDUxLDUzNiBMNzAsNTAxIEw5MSw0NjIgTDEyMCw0MjQgTDE1NywzOTQgTDIwMiwzNzYgTDI1MSwzNzEgTDMwMCwzNzYgTDM0NywzODggTDM5Miw0MDEgTDQzNyw0MTEgTDQ4Myw0MTcgTDUzMiw0MjEgTDU4NCw0MjcgTDYzNCw0MzggTDY4MCw0NTggTDcxNSw0ODggTDczOSw1MjUgTDc1Miw1NjcgTDc1Niw2MTAgTDc1NCw2NTEgTDc1Miw2ODggTDc1MCw3MjQgTDc1MCw3NTcgTDc1MCw3ODggTDc1MSw4MjBaIi8+PHBhdGggZD0iTTg1NSw4MjAgTDgzMyw4NTcgTDgxNyw4OTMgTDgwNCw5MjggTDc5MSw5NjMgTDc3OSw5OTkgTDc2NiwxMDM1IEw3NTIsMTA3MyBMNzM5LDExMTUgTDcyNCwxMTU5IEw3MDUsMTIwNiBMNjc5LDEyNTMgTDY0MywxMjk1IEw1OTUsMTMyNyBMNTM5LDEzNDYgTDQ3OCwxMzUwIEw0MTUsMTM0MyBMMzU2LDEzMjkgTDMwMCwxMzE1IEwyNDcsMTMwNCBMMTk0LDEyOTkgTDE0MCwxMjk4IEw4NCwxMjk2IEwyOCwxMjg2IEwtMjIsMTI2NiBMLTYxLDEyMzIgTC04NywxMTg5IEwtMTAyLDExNDEgTC0xMDksMTA5NCBMLTExNSwxMDUzIEwtMTMwLDEwMTggTC0xNTYsOTkwIEwtMTk1LDk2NCBMLTI0Myw5MzYgTC0yOTMsOTA0IEwtMzM3LDg2NSBMLTM3MCw4MjAgTC0zODcsNzcyIEwtMzkwLDcyMyBMLTM4MCw2NzQgTC0zNjAsNjI4IEwtMzMxLDU4NSBMLTI5NSw1NDUgTC0yNTEsNTExIEwtMjAwLDQ4NSBMLTE0Miw0NjYgTC04Miw0NTYgTC0yNCw0NTAgTDMwLDQ0NiBMNzgsNDM5IEwxMjAsNDI1IEwxNjEsNDA0IEwyMDMsMzc4IEwyNDksMzUzIEwzMDAsMzM1IEwzNTQsMzI4IEw0MDcsMzM0IEw0NTcsMzUyIEw1MDMsMzc1IEw1NDYsMzk4IEw1OTEsNDE3IEw2NDIsNDMwIEw3MDAsNDM5IEw3NjUsNDQ4IEw4MzAsNDY0IEw4ODgsNDkxIEw5MzEsNTI4IEw5NTQsNTc2IEw5NTYsNjI5IEw5NDAsNjgzIEw5MTMsNzMzIEw4ODMsNzc5IEw4NTUsODIwWiIvPjxwYXRoIGQ9Ik05NjEsODIwIEw5NjUsODY3IEw5NTksOTEzIEw5NDAsOTU3IEw5MTEsOTk4IEw4NzcsMTAzNSBMODQ3LDEwNzIgTDgyMywxMTEzIEw4MDgsMTE2MSBMNzk3LDEyMTggTDc4NCwxMjgxIEw3NjAsMTM0NSBMNzIwLDE0MDIgTDY2MiwxNDQxIEw1OTEsMTQ1OSBMNTEyLDE0NTQgTDQzNCwxNDMwIEwzNjMsMTM5NSBMMzAwLDEzNTcgTDI0NSwxMzI1IEwxOTQsMTMwMSBMMTQ0LDEyODYgTDkyLDEyNzcgTDM5LDEyNjggTC0xNCwxMjU2IEwtNjcsMTIzOSBMLTExNywxMjE3IEwtMTY1LDExOTIgTC0yMTQsMTE2NSBMLTI2MywxMTM2IEwtMzEzLDExMDMgTC0zNTksMTA2NiBMLTM5OSwxMDI0IEwtNDI4LDk3NiBMLTQ0Myw5MjUgTC00NDYsODcyIEwtNDM5LDgyMCBMLTQyOSw3NjkgTC00MjAsNzE4IEwtNDEzLDY2NyBMLTQwNSw2MTUgTC0zOTEsNTYyIEwtMzY2LDUxMiBMLTMyNCw0NzEgTC0yNjQsNDQxIEwtMTkzLDQyNiBMLTExNiw0MjMgTC00Myw0MjggTDIwLDQzMiBMNzAsNDI2IEwxMTIsNDA3IEwxNTAsMzcyIEwxOTEsMzI3IEwyNDEsMjc5IEwzMDAsMjM3IEwzNjcsMjA5IEw0MzcsMTk5IEw1MDYsMjA1IEw1NzEsMjI0IEw2MzEsMjUzIEw2ODYsMjg2IEw3MzYsMzIxIEw3ODMsMzU5IEw4MjUsNDAwIEw4NTksNDQ1IEw4ODQsNDkzIEw5MDAsNTQzIEw5MDksNTkzIEw5MTYsNjQxIEw5MjQsNjg2IEw5MzYsNzMwIEw5NDksNzc1IEw5NjEsODIwWiIvPjwvZz48L3N2Zz4=",CXGRAIN="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjg1IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgIDAgMCAwIDAgMSAgMCAwIDAgMCAxICAwIDAgMCAuMDcgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==";
/* ---- cities: pinned expertise-style panels ---- */
(function(){
var sec=$('#cities'),pin=$('#cxPin'),wrap=$('#cxItems');if(!sec||!wrap)return;
var COL={Sydney:'#A9C4D8',Melbourne:'#CBAABA',Brisbane:'#E9BA70',Perth:'#E89C72',Adelaide:'#BCC791',Canberra:'#DAD0BE',Hobart:'#95BAAE',Darwin:'#DA9165'};
var LL={Sydney:[151.2,-33.9],Melbourne:[145,-37.8],Brisbane:[153,-27.5],Perth:[115.9,-31.95],Adelaide:[138.6,-34.9],Canberra:[149.1,-35.3],Hobart:[147.3,-42.9],Darwin:[130.8,-12.5]};
var PHC={Sydney:[IM('hero-sydney.webp'),'40% 60%','Benh LIEU SONG (Flickr)','CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_and_Harbour_Bridge_Dusk_2019-06-21.jpg','Opera House & Harbour Bridge'],
 Melbourne:[IM('hero-melbourne.webp'),'66% 50%','Ari Bakker','CC BY 2.0','https://commons.wikimedia.org/wiki/File:Melbourne_skyline_2008.jpg','Skyline & the Yarra'],
 Brisbane:[IM('city-brisbane.webp'),'62% 42%','John from Redcliffe','CC BY-SA 2.0','https://commons.wikimedia.org/wiki/File:Brisbane_Story_Bridge_at_Dusk%3D_(24149816842).jpg','Story Bridge at dusk'],
 Perth:[IM('city-perth.webp'),'58% 40%','Dietmar Rabich','CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Perth_(AU),_Elizabeth_Quay_--_2019_--_0331-3.jpg','Elizabeth Quay'],
 Adelaide:[IM('city-adelaide.webp'),'30% 45%','Yu Chu Chin','CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Adelaide_CBD_skyline_across_the_River_Torrens,_July_2026_(028A8463).jpg','CBD across the River Torrens'],
 Canberra:[IM('city-canberra.webp'),'50% 50%','Dietmar Rabich','CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Canberra_(AU),_Commonwealth_Avenue_Bridge_--_2019_--_1811.jpg','Lake Burley Griffin'],
 Hobart:[IM('city-hobart.webp'),'40% 30%','Bahnfrend','CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Sullivans_Cove,_Hobart,_2013_(01).jpg','Sullivans Cove & kunanyi'],
 Darwin:[IM('city-darwin.webp'),'45% 55%','Dietmar Rabich','CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Darwin_(AU),_Darwin_Waterfront_--_2019_--_4429-31.jpg','Darwin Waterfront']};
var LL={Sydney:[151.2,-33.9],Melbourne:[145,-37.8],Brisbane:[153,-27.5],Perth:[115.9,-31.95],Adelaide:[138.6,-34.9],Canberra:[149.1,-35.3],Hobart:[147.3,-42.9],Darwin:[130.8,-12.5]};
function card(c){var p=LL[c[0]],ph=PHC[c[0]];
 return '<div class="cx-sq"><div class="cx-sqi"><div class="cx-ph"><div class="cx-kb"><img alt="'+esc(ph[5]+', '+c[0])+'" data-src="'+ph[0]+'" style="object-position:'+ph[1]+'" decoding="async"></div><i class="cx-sheen"></i></div><div class="cx-sqt mono"><span>'+c[1]+' · AUS</span><span>'+p[1].toFixed(1).replace('-','')+'°S '+p[0].toFixed(1)+'°E</span></div><div class="cx-cap"><div class="cx-clock"><b data-ctz="'+c[2]+'">--:--</b><span class="mono" data-tz="'+c[2]+'"></span></div><span class="cx-pl">'+esc(ph[5])+'</span></div><a class="cx-cr mono" href="'+ph[4]+'" target="_blank" rel="noopener">Photo: '+esc(ph[2])+' · '+ph[3]+'</a></div></div>'}
var N=CITIES.length;
wrap.innerHTML=CITIES.map(function(c,i){var u=U.filter(function(x){return x[1]===c[0]}).map(function(x){return x[0]});
 var tags=c[4].concat(u.length?[]:[]);
 return '<article class="cx-it" style="--bg:'+COL[c[0]]+';--amb:url('+AMB[c[0]]+');z-index:'+(i+2)+'" data-i="'+i+'" aria-label="'+c[0]+'"><div class="cx-bg"></div><div class="cx-ct">'+
  '<div class="cx-l"><span class="cx-ix mono">0'+(i+1)+' / 0'+N+'</span><h3><span class="m"><span>'+c[0]+'</span></span></h3><span class="cx-st mono">'+c[1]+'</span><p>'+esc(c[3])+'</p></div>'+
  card(c)+
  '<div class="cx-r"><span class="cx-lab mono">Known for</span><ul>'+tags.map(function(t,k){return '<li style="--k:'+k+'">'+esc(t)+'</li>'}).join('')+'</ul>'+(u.length?'<span class="cx-lab mono">Universities</span><ul class="u">'+u.map(function(t,k){return '<li style="--k:'+(k+3)+'">'+esc(t)+'</li>'}).join('')+'</ul>':'')+
  '<a class="cx-go" href="#book" data-city="'+c[0]+'"><span>Plan '+c[0]+'</span><i aria-hidden="true">↗</i></a></div></div></article>'}).join('');
var nav=$('#cxNav');nav.innerHTML=CITIES.map(function(c,i){return '<button type="button" data-i="'+i+'"><span class="mono">0'+(i+1)+'</span>'+c[0]+'</button>'}).join('');
sec.style.setProperty('--topo','url('+CXTOPO+')');sec.style.setProperty('--grain','url('+CXGRAIN+')');var items=$$('.cx-it',wrap),btns=$$('button',nav),bar=$('#cxBar');
/* load photos when the section gets close */
function loadPh(){$$('img[data-src]',wrap).forEach(function(im){im.src=im.dataset.src;im.removeAttribute('data-src');im.addEventListener('load',function(){im.classList.add('ok')});if(im.complete)im.classList.add('ok')})}
if('IntersectionObserver' in window){var lio=new IntersectionObserver(function(es){if(es[0].isIntersecting){loadPh();lio.disconnect()}},{rootMargin:'150% 0px'});lio.observe(sec)}else loadPh();
/* clocks */
function clocks(){$$('[data-ctz]',wrap).forEach(function(e){try{e.textContent=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:e.dataset.ctz}).format(new Date())}catch(_){}})}
clocks();setInterval(clocks,20000);
/* scroll engine: cached geometry + eased progress, only touches panels in motion */
var INTRO=.7,GROW=.62,UNITS=INTRO+N+.5,RMo=matchMedia('(prefers-reduced-motion: reduce)').matches;
sec.style.setProperty('--units',UNITS);
function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function cl(v){return v<0?0:v>1?1:v}
var hd=$('.cx-hd',pin),bgs=items.map(function(it){return $('.cx-bg',it)}),st=items.map(function(){return {g:-1,r:-1,nx:-1,live:null,cur:null}});
var top0=0,sc=1,vh=innerHeight,cur=-1,tgt=0,last=-2,lastHd=-1,lastBar=-1,run=false,tPrev=0;
function measure(){vh=innerHeight;var r=sec.getBoundingClientRect();top0=r.top+scrollY;sc=Math.max(1,sec.offsetHeight-vh)}
function target(){return cl((scrollY-top0)/sc)*UNITS}
/* phones: a swipe carousel instead of the pinned story (one screen tall) */
var SWQ=matchMedia('(max-width:767px)'),SW=false;
function swMode(){var on=SWQ.matches;if(on===SW)return;SW=on;sec.classList.toggle('cx-sw',on);
 items.forEach(function(it){it.classList.toggle('cx-live',on);it.classList.toggle('cx-cur',on)});
 if(on){hd.style.removeProperty('--hd');hd.style.visibility='';bgs.forEach(function(b){b.style.transform='';b.classList.add('cx-full')});window.__cxCover=false;swSync()}
 else{st.forEach(function(o){o.g=o.r=o.nx=-1;o.live=o.cur=null});last=-2;lastHd=lastBar=-1;bgs.forEach(function(b){b.classList.remove('cx-full')})}}
function swSync(){var w=wrap.clientWidth||1,k=Math.round(wrap.scrollLeft/(items[1]?items[1].offsetLeft-items[0].offsetLeft:w));k=Math.max(0,Math.min(N-1,k));
 if(k!==last){last=k;btns.forEach(function(b,x){b.classList.toggle('sel',x===k)});var nb=btns[k],nv=$('#cxNav');if(nb)nv.scrollTo({left:nb.offsetLeft-nv.clientWidth/2+nb.offsetWidth/2,behavior:'smooth'})}
 var m=wrap.scrollWidth-wrap.clientWidth;bar.style.transform='scaleX('+(m>0?Math.max(.06,wrap.scrollLeft/m):1).toFixed(3)+')'}
var swq=false;wrap.addEventListener('scroll',function(){if(!SW||swq)return;swq=true;requestAnimationFrame(function(){swq=false;swSync()})},{passive:true});
function paint(pos){if(SW)return;var act=-1;
 for(var i=0;i<N;i++){var s=INTRO+i,o=st[i],it=items[i];
  var g=ease(cl((pos-s)/GROW)),rv=cl((pos-s-GROW*.55)/.45),nx=i<N-1?ease(cl((pos-s-1)/GROW)):0;
  g=Math.round(g*1000)/1000;rv=Math.round(rv*1000)/1000;nx=Math.round(nx*1000)/1000;
  var live=g>0&&nx<1,isCur=g>.5&&nx<.5;if(g>.5)act=i;
  if(live!==o.live){o.live=live;it.classList.toggle('cx-live',live)}
  if(isCur!==o.cur){o.cur=isCur;it.classList.toggle('cx-cur',isCur)}
  if(!live)continue;
  if(g!==o.g){o.g=g;var q=1-g;bgs[i].style.transform='translate3d(0,'+(q*100).toFixed(2)+'%,0) scaleX('+(1-q*.55).toFixed(4)+')';bgs[i].classList.toggle('cx-full',g>=1)}
  if(rv!==o.r){o.r=rv;it.style.setProperty('--r',rv)}
  if(nx!==o.nx){o.nx=nx;it.style.setProperty('--nx',nx)}}
 var h=Math.round(cl(1-(pos-INTRO+.2)/.6)*1000)/1000;if(h!==lastHd){lastHd=h;hd.style.setProperty('--hd',h);hd.style.visibility=h<=0?'hidden':''}
 var br=Math.round(cl((pos-INTRO)/(N-1+GROW))*1000)/1000;if(br!==lastBar){lastBar=br;bar.style.transform='scaleX('+br+')'}
 window.__cxCover=act>=0&&scrollY>top0&&scrollY<top0+sc;
 if(act!==last){last=act;btns.forEach(function(b,k){b.classList.toggle('sel',k===act)});var nb=btns[act];if(nb){var nv=$('#cxNav');nv.scrollTo({left:nb.offsetLeft-nv.clientWidth/2+nb.offsetWidth/2,behavior:'smooth'})}pin.classList.toggle('dark',act<0);pin.style.setProperty('--ink','#F3EBDD')}}
function loop(now){var dt=Math.min(64,now-(tPrev||now));tPrev=now;tgt=target();
 var k=RMo?1:1-Math.exp(-dt/110);cur+=(tgt-cur)*k;if(Math.abs(tgt-cur)<.0005)cur=tgt;
 paint(cur);
 if(cur!==tgt)requestAnimationFrame(loop);else{run=false;tPrev=0}}
function kick(){if(!run){run=true;requestAnimationFrame(loop)}}
measure();cur=tgt=target();paint(cur);
addEventListener('scroll',kick,{passive:true});
addEventListener('resize',function(){measure();kick()});
addEventListener('load',function(){measure();kick()});
if('ResizeObserver' in window)new ResizeObserver(function(){measure();kick()}).observe(D.body);
function go(i){if(SW){var it=items[i];if(it)wrap.scrollTo({left:it.offsetLeft-items[0].offsetLeft,behavior:'smooth'});return}measure();scrollTo({top:top0+(INTRO+i+GROW+.08)/UNITS*sc,behavior:'smooth'})}
btns.forEach(function(b){b.addEventListener('click',function(){go(+b.dataset.i)})});
swMode();if(SWQ.addEventListener)SWQ.addEventListener('change',function(){swMode();measure();kick()});
/* tilt the city card */
if(matchMedia('(hover:hover) and (pointer:fine)').matches)items.forEach(function(it){var sq=$('.cx-sqi',it);it.addEventListener('pointermove',function(e){var b=sq.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;sq.style.transform='perspective(900px) rotateY('+(x*8).toFixed(2)+'deg) rotateX('+(-y*8).toFixed(2)+'deg)';sq.style.setProperty('--mx',(-x*18).toFixed(1)+'px');sq.style.setProperty('--my',(-y*18).toFixed(1)+'px');sq.style.setProperty('--sx',((x+.5)*100).toFixed(1)+'%')});it.addEventListener('pointerleave',function(){sq.style.transform='';sq.style.setProperty('--mx','0px');sq.style.setProperty('--my','0px')})});
})();

D.addEventListener('click',function(e){var g=e.target.closest('[data-city]');if(g)setCity(g.dataset.city)});

/* ---- city match ---- */
var VIBES=[['Beaches & surf',{Brisbane:3,Perth:3,Sydney:2,Darwin:2,Adelaide:1}],['Biggest job markets',{Sydney:3,Melbourne:3,Brisbane:2,Perth:1}],['Coffee, arts & laneways',{Melbourne:3,Sydney:2,Adelaide:2,Hobart:1}],['Nature on the doorstep',{Hobart:3,Canberra:2,Perth:2,Darwin:2,Brisbane:1}],['Lower living costs',{Adelaide:3,Hobart:2,Darwin:2,Perth:1,Canberra:1}],['Closest time to India',{Perth:3,Darwin:2,Adelaide:1}],['Research & Group of Eight',{Canberra:3,Melbourne:2,Sydney:2,Adelaide:1,Brisbane:1,Perth:1}],['Sunshine all year',{Brisbane:3,Darwin:3,Perth:2,Sydney:1}],['Small-city calm',{Hobart:3,Canberra:3,Adelaide:2,Darwin:1}]];
/* ---- city match: fill tiles + live leaderboard ---- */
(function(){
var mz=$('#mz');if(!mz)return;
var SHORT=['Beaches & surf','Big job markets','Coffee & laneways','Nature nearby','Lower costs','Close to India time','Research & Go8','Sunshine','Small-city calm'];
var ICO=['<path d="M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 20c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><circle cx="17" cy="7" r="3"/>',
 '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
 '<path d="M4 9h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3c-1 1.5 1 2 0 4M12 3c-1 1.5 1 2 0 4"/>',
 '<path d="M12 3l7 11H5z"/><path d="M12 9l6 9H6zM12 18v3"/>',
 '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.6-.6-3-1.6M12 6v2M12 16v2"/>',
 '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
 '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
 '<path d="M3 20c3-6 6-9 9-9s6 3 9 9"/><path d="M12 11V4M9 7l3-3 3 3"/>'];
var LVL=['Off','Nice to have','Want','Must have'];
var IMG={Sydney:IM('hero-sydney.webp'),Melbourne:IM('hero-melbourne.webp'),Brisbane:IM('city-brisbane.webp'),Perth:IM('city-perth.webp'),Adelaide:IM('city-adelaide.webp'),Canberra:IM('city-canberra.webp'),Hobart:IM('city-hobart.webp'),Darwin:IM('city-darwin.webp')};
var POS={Sydney:'40% 60%',Melbourne:'66% 50%',Brisbane:'62% 42%',Perth:'58% 40%',Adelaide:'30% 45%',Canberra:'50% 50%',Hobart:'40% 30%',Darwin:'45% 55%'};
var PRE=[['Career first',[0,3,1,0,0,0,2,0,0]],['Beach life',[3,0,0,1,0,0,0,3,0]],['Budget smart',[0,1,0,0,3,1,0,0,2]],['Quiet & green',[0,0,0,3,1,0,0,0,3]],['Close to home',[0,1,0,0,1,3,0,1,0]]];
var lv=PRE[0][1].slice(),N=CITIES.length,prev=null,peek=-1;
mz.className='cm';
mz.innerHTML='<div class="cm-l"><div class="cm-lh"><span class="mono cm-k">1 · What matters to you?</span><button type="button" class="cm-reset mono">Reset</button></div>'+
 '<div class="cm-pre" role="group" aria-label="Quick picks">'+PRE.map(function(p,i){return '<button type="button" data-p="'+i+'" aria-pressed="false">'+p[0]+'</button>'}).join('')+'</div>'+
 '<div class="cm-tiles">'+VIBES.map(function(v,i){return '<button type="button" class="cm-tl" data-i="'+i+'"><i class="cm-liq" aria-hidden="true"><b></b></i><svg class="cm-ic" viewBox="0 0 24 24" aria-hidden="true">'+ICO[i]+'</svg><span class="cm-nm">'+SHORT[i]+'</span><span class="cm-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="cm-lv mono"></span></button>'}).join('')+'</div>'+
 '<p class="cm-hint mono">Tap a tile to turn it up: nice to have, want, must have. Tap again at the top to switch it off.</p></div>'+
 '<div class="cm-r"><span class="mono cm-k">2 · Your cities, ranked live</span><div class="cm-hero" id="cmHero"><div class="cm-ph" id="cmPh"></div><i class="cm-sh"></i>'+
 '<div class="cm-hc"><span class="cm-lab mono" id="cmLab">Your top match</span><div class="cm-hrow"><div><h3 id="cmName"></h3><span class="cm-st mono" id="cmSt"></span></div><div class="cm-pct"><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" class="t"/><circle cx="40" cy="40" r="34" class="v" pathLength="100"/></svg><b id="cmPct">0%</b></div></div><p id="cmWhy"></p><a class="cm-go" href="#book" id="cmGo">Plan my move <i>↗</i></a></div></div>'+
 '<ol class="cm-list" id="cmList">'+CITIES.map(function(c,i){return '<li class="cm-row" data-i="'+i+'" style="--cc:'+CC[c[0]][0]+'"><button type="button"><span class="cm-n mono"></span><span class="cm-th" style="background-image:url('+IMG[c[0]]+');background-position:'+POS[c[0]]+'"></span><span class="cm-cn">'+c[0]+'<small class="mono">'+c[1]+'</small></span><span class="cm-bar"><i></i></span><span class="cm-pc mono">0%</span></button></li>'}).join('')+'</ol></div>';
var tiles=$$('.cm-tl',mz),rows=$$('.cm-row',mz),list=$('#cmList'),pre=$$('.cm-pre button',mz),ord=[],sc=[];
function score(){var mx=0;lv.forEach(function(l){mx+=l*3});return CITIES.map(function(c){var s=0;lv.forEach(function(l,i){s+=l*(VIBES[i][1][c[0]]||0)});return mx?Math.round(s/mx*100):0})}
function hero(i,lab){var c=CITIES[i],ph=$('#cmPh'),im=D.createElement('div');im.className='cm-img';im.style.backgroundImage='url('+IMG[c[0]]+')';im.style.backgroundPosition=POS[c[0]];
 if(ph.lastChild&&ph.lastChild.dataset.c===c[0]){}else{im.dataset.c=c[0];$$('.cm-img',ph).forEach(function(o){o.classList.add('out');setTimeout(function(){o.remove()},900)});ph.appendChild(im);requestAnimationFrame(function(){requestAnimationFrame(function(){im.classList.add('in')})})}
 $('#cmHero').style.setProperty('--cc',CC[c[0]][0]);$('#cmLab').textContent=lab;$('#cmName').textContent=c[0];$('#cmSt').textContent=c[1]+' · '+c[4].join(' · ');
 var p=sc[i]||0;$('#cmPct').textContent=p+'%';$('.cm-pct .v',mz).style.strokeDashoffset=100-p;
 var hits=VIBES.map(function(v,k){return [k,lv[k]*(v[1][c[0]]||0)]}).filter(function(x){return x[1]>0}).sort(function(a,b){return b[1]-a[1]}).slice(0,3).map(function(x){return SHORT[x[0]].toLowerCase()});
 $('#cmWhy').textContent=lv.every(function(l){return !l})?'Turn on a few tiles and we’ll rank all eight cities for you.':hits.length?'Strong on '+(hits.length>1?hits.slice(0,-1).join(', ')+' and '+hits[hits.length-1]:hits[0])+'. '+c[3]:'Not a strong fit for what you picked. '+c[3];
 $('#cmGo').dataset.city=c[0];$('#cmGo').firstChild.textContent='Plan '+c[0]+' ';
 var hc=$('.cm-hc',mz);hc.classList.remove('cm-swap');void hc.offsetWidth;hc.classList.add('cm-swap')}
function render(){sc=score();
 tiles.forEach(function(t,i){var l=lv[i];t.style.setProperty('--lv',l/3);t.dataset.l=l;$('.cm-lv',t).textContent=LVL[l];t.setAttribute('aria-label',VIBES[i][0]+': '+LVL[l]);t.classList.toggle('cm-on',l>0)});
 pre.forEach(function(b,i){b.setAttribute('aria-pressed',PRE[i][1].join()===lv.join())});
 ord=CITIES.map(function(c,i){return i}).sort(function(a,b){return sc[b]-sc[a]||a-b});
 /* FLIP */
 var first=rows.map(function(r){return r.getBoundingClientRect().top});
 ord.forEach(function(i,k){var r=rows[i];list.appendChild(r);$('.cm-n',r).textContent=String(k+1).padStart(2,'0');$('.cm-bar i',r).style.width=sc[i]+'%';$('.cm-pc',r).textContent=sc[i]+'%';r.classList.toggle('cm-top',k===0&&sc[i]>0)});
 if(!RM)rows.forEach(function(r,i){var d=first[i]-r.getBoundingClientRect().top;if(Math.abs(d)>1){r.style.transition='none';r.style.transform='translateY('+d+'px)';requestAnimationFrame(function(){requestAnimationFrame(function(){r.style.transition='transform .7s cubic-bezier(.2,.75,.15,1)';r.style.transform=''})})}});
 if(peek<0)hero(ord[0],lv.every(function(l){return !l})?'Pick what matters':'Your top match')}
tiles.forEach(function(t,i){t.addEventListener('click',function(){lv[i]=(lv[i]+1)%4;peek=-1;render();t.classList.remove('cm-bump');void t.offsetWidth;t.classList.add('cm-bump')})});
pre.forEach(function(b,i){b.addEventListener('click',function(){lv=PRE[i][1].slice();peek=-1;render()})});
$('.cm-reset',mz).addEventListener('click',function(){lv=lv.map(function(){return 0});peek=-1;render()});
rows.forEach(function(r){var i=+r.dataset.i,b=$('button',r);
 function on(){peek=i;rows.forEach(function(x){x.classList.toggle('cm-peek',x===r)});hero(i,i===ord[0]?'Your top match':'Previewing · #'+(ord.indexOf(i)+1))}
 function off(){if(peek!==i)return;peek=-1;r.classList.remove('cm-peek');hero(ord[0],'Your top match')}
 r.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')on()});r.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse')off()});
 b.addEventListener('focus',on);b.addEventListener('blur',off);
 b.addEventListener('click',function(){on();if(innerWidth<900)$('#cmHero').scrollIntoView({behavior:'smooth',block:'center'})})});
render();
})();


/* ---- services bento ---- */
var SVC={before:[C.ultra,C.sand],visa:[C.coral,C.ink],after:[C.euc,C.sand]};
var PALS=[[C.ultra,C.sand],[C.wattle,C.ink],[C.jac,C.sand],[C.ink,C.sand],[C.coral,C.ink],[C.reef,C.ink],[C.earth,C.sand],[C.euc,C.sand],[C.mint,C.ink]];
var SZ=['w2 h2','','','w2','','','w2','',''],SVN={before:'Before you apply',visa:'Visa & money',after:'After you land'};
/* ---- services: journey board of 3D cards (Atropos) that expand into a detail panel (GSAP) ---- */
(function(){
var root=$('#svx');if(!root)return;
var G=window.gsap,STg=window.ScrollTrigger,At=window.Atropos,Split=window.SplitType;if(G&&STg)G.registerPlugin(STg);
var SVN={before:'Before you apply',visa:'Visa & money',after:'After you land'},PC={before:C.ultra,visa:C.coral,after:C.mint},STEP={before:'Step 1',visa:'Step 2',after:'Step 3'};
var ICO=['<circle cx="24" cy="24" r="18"/><path d="M24 6v4M24 38v4M6 24h4M38 24h4"/><path d="M30 18l-4 10-8 2 4-10z"/>',
 '<path d="M8 10h26a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H20l-8 7v-7H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z"/><path d="M12 18h18M12 23h12"/><path d="M40 20h2a2 2 0 0 1 2 2v16l-5-4h-9"/>',
 '<path d="M6 40h36M8 20h32M24 6L6 16h36z"/><path d="M12 20v20M20 20v20M28 20v20M36 20v20"/>',
 '<path d="M14 6h16l8 8v28H14z"/><path d="M30 6v8h8"/><path d="M10 12v32h24"/><path d="M20 26l4 4 8-8"/>',
 '<rect x="10" y="6" width="28" height="36" rx="3"/><circle cx="24" cy="21" r="7"/><path d="M17 21h14M24 14c-3 4-3 10 0 14M24 14c3 4 3 10 0 14"/><path d="M16 35h16"/>',
 '<ellipse cx="20" cy="14" rx="12" ry="5"/><path d="M8 14v8c0 3 5 5 12 5s12-2 12-5v-8"/><path d="M8 22v8c0 3 5 5 12 5"/><circle cx="34" cy="32" r="9"/><path d="M34 28v8M30 32h8"/>',
 '<circle cx="16" cy="14" r="5"/><circle cx="32" cy="14" r="5"/><circle cx="24" cy="26" r="4"/><path d="M6 40c0-7 4-12 10-12M42 40c0-7-4-12-10-12M16 42c0-5 3-8 8-8s8 3 8 8"/>',
 '<path d="M6 22L24 8l18 14"/><path d="M10 19v22h28V19"/><circle cx="21" cy="30" r="4"/><path d="M25 30h9M31 30v4"/>',
 '<rect x="6" y="14" width="36" height="26" rx="4"/><path d="M18 14v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4"/><path d="M6 26h36"/><path d="M22 24h4v5h-4z"/>'];
var N=SV.length;function nn(i){return (i<9?'0':'')+(i+1)}
var groups=['before','visa','after'];
root.className='sb';
root.innerHTML='<div class="sb-board" id="sbBoard">'+groups.map(function(g,gi){var items=SV.map(function(s,i){return [s,i]}).filter(function(x){return x[0][0]===g});
 return '<section class="sb-col" style="--pc:'+PC[g]+'" aria-label="'+SVN[g]+'"><header class="sb-ch"><span class="sb-step mono">'+STEP[g]+'</span><h3>'+SVN[g]+'</h3><span class="sb-cn mono">'+items.length+' services</span><i class="sb-line" aria-hidden="true"><b></b></i></header>'+
 items.map(function(x){var s=x[0],i=x[1];return '<div class="sb-card atropos" data-i="'+i+'"><div class="atropos-scale"><div class="atropos-rotate"><div class="atropos-inner">'+
  '<button type="button" class="sb-hit" aria-haspopup="dialog" aria-label="Open '+esc(s[1])+'"></button>'+
  '<span class="sb-n mono" data-atropos-offset="2">'+nn(i)+'</span><svg class="sb-ic" viewBox="0 0 48 48" aria-hidden="true" data-atropos-offset="8">'+ICO[i]+'</svg>'+
  '<span class="sb-t" data-atropos-offset="5">'+esc(s[1])+'</span><span class="sb-d" data-atropos-offset="3">'+esc(s[2])+'</span><span class="sb-op mono" data-atropos-offset="6">Open <i>↗</i></span>'+
  '</div></div></div></div>'}).join('')+(gi<2?'<i class="sb-arrow" aria-hidden="true">→</i>':'')+'</section>'}).join('')+
 '<div class="sb-panel" id="sbPanel" role="dialog" aria-modal="false" aria-labelledby="sbPT" hidden><div class="sb-pin"></div></div></div>';
var board=$('#sbBoard'),panel=$('#sbPanel'),pin=$('.sb-pin',panel),cards=$$('.sb-card',root),open=-1,from=null;
/* 3D cards */
if(At&&!RM&&matchMedia('(hover:hover) and (pointer:fine)').matches)cards.forEach(function(c){At({el:c,activeOffset:30,shadow:false,highlight:true,rotateXMax:12,rotateYMax:12})});
function body(i){var s=SV[i],pc=PC[s[0]];return '<div class="sb-pl"><div class="sb-ptop mono"><span class="sb-chip"><i></i>'+SVN[s[0]]+'</span><span>'+nn(i)+' / '+nn(N-1)+'</span></div>'+
 '<svg class="sb-pic" viewBox="0 0 48 48" aria-hidden="true">'+ICO[i]+'</svg><h3 id="sbPT" class="sb-ph">'+esc(s[1])+'</h3><p>'+esc(s[2])+'</p>'+
 '<div class="sb-acts"><a class="sb-go" href="#book">Talk to us about this <i>↗</i></a><button type="button" class="sb-nx" data-d="-1" aria-label="Previous service">←</button><button type="button" class="sb-nx" data-d="1" aria-label="Next service">→</button></div></div>'+
 '<ol class="sb-pts">'+s[3].map(function(b,k){return '<li><b class="mono">0'+(k+1)+'</b><span>'+esc(b)+'</span></li>'}).join('')+'</ol>'+
 '<button type="button" class="sb-x" aria-label="Close">✕</button><span class="sb-big" aria-hidden="true">'+nn(i)+'</span>'}
function inner(i){if(!G||RM)return;var h=$('.sb-ph',pin),parts=[h];if(Split){parts=new Split(h,{types:'words,chars',tagName:'span'}).chars}
 var tl=G.timeline();tl.fromTo($('.sb-big',pin),{yPercent:50,opacity:0},{yPercent:0,opacity:1,duration:1,ease:'expo.out'},0)
  .fromTo(parts,{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:.7,stagger:.012,ease:'power4.out'},.1)
  .fromTo($$('.sb-ptop,.sb-pl p,.sb-acts,.sb-pts li,.sb-x',pin),{y:24,opacity:0},{y:0,opacity:1,duration:.55,stagger:.06,ease:'power3.out'},.2);
 $$('.sb-pic path,.sb-pic circle,.sb-pic rect,.sb-pic ellipse',pin).forEach(function(p,k){var L=0;try{L=p.getTotalLength()}catch(_){L=200}tl.fromTo(p,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:1,ease:'power2.inOut'},.15+k*.1)})}
function bind(){$('.sb-x',pin).addEventListener('click',close);$$('.sb-nx',pin).forEach(function(b){b.addEventListener('click',function(){swap((open+(+b.dataset.d)+N)%N)})})}
function rectIn(el){var a=el.getBoundingClientRect(),b=board.getBoundingClientRect();return {left:a.left-b.left,top:a.top-b.top,width:a.width,height:a.height}}
function openAt(i){if(open>=0){swap(i);return}open=i;from=cards[i];var pc=PC[SV[i][0]];panel.style.setProperty('--pc',pc);pin.innerHTML=body(i);bind();panel.hidden=false;board.classList.add('sb-open');
 if(!G||RM){$('.sb-x',pin).focus();return}
 var r=rectIn(from);G.fromTo(panel,{left:r.left,top:r.top,width:r.width,height:r.height,borderRadius:22},{left:0,top:0,width:board.clientWidth,height:board.clientHeight,borderRadius:30,duration:.75,ease:'expo.inOut',onComplete:function(){G.set(panel,{clearProps:'width,height,left,top'});$('.sb-x',pin).focus()}});
 G.fromTo(pin,{opacity:0},{opacity:1,duration:.3,delay:.35});inner(i);
 G.to(cards,{scale:.94,opacity:.25,duration:.5,ease:'power2.out',stagger:{each:.02,from:i}})}
function swap(i){if(i===open)return;var pc=PC[SV[i][0]];open=i;from=cards[i];
 if(!G||RM){panel.style.setProperty('--pc',pc);pin.innerHTML=body(i);bind();return}
 G.to(pin,{opacity:0,x:-40,duration:.25,ease:'power2.in',onComplete:function(){panel.style.setProperty('--pc',pc);pin.innerHTML=body(i);bind();G.fromTo(pin,{opacity:0,x:40},{opacity:1,x:0,duration:.4,ease:'power3.out'});inner(i)}})}
function close(){if(open<0)return;var c=from;open=-1;board.classList.remove('sb-open');
 if(!G||RM){panel.hidden=true;$('.sb-hit',c).focus();return}
 var r=rectIn(c);G.to(pin,{opacity:0,duration:.2});G.to(panel,{left:r.left,top:r.top,width:r.width,height:r.height,borderRadius:22,duration:.6,ease:'expo.inOut',onComplete:function(){panel.hidden=true;G.set(panel,{clearProps:'all'});$('.sb-hit',c).focus()}});
 G.to(cards,{scale:1,opacity:1,duration:.5,delay:.2,ease:'power2.out',clearProps:'scale,opacity'})}
var fineP=matchMedia('(hover:hover) and (pointer:fine)').matches,hT=0,cT=0;
cards.forEach(function(c){var i=+c.dataset.i;
 if(fineP){c.addEventListener('pointerenter',function(e){if(e.pointerType!=='mouse')return;clearTimeout(cT);clearTimeout(hT);hT=setTimeout(function(){openAt(i)},260)});c.addEventListener('pointerleave',function(){clearTimeout(hT)})}
 c.addEventListener('click',function(){clearTimeout(hT);openAt(i);if(innerWidth<900){var r=board.getBoundingClientRect();if(r.top<60||r.top>innerHeight*.4)scrollTo({top:scrollY+r.top-90,behavior:'smooth'})}})});
panel.addEventListener('pointerenter',function(){clearTimeout(cT)});panel.addEventListener('pointerleave',function(e){if(!fineP||e.pointerType!=='mouse')return;clearTimeout(cT);cT=setTimeout(close,220)});
addEventListener('keydown',function(e){if(open<0)return;if(e.key==='Escape')close();else if(e.key==='ArrowRight')swap((open+1)%N);else if(e.key==='ArrowLeft')swap((open+N-1)%N)});
/* entrance: columns rise, cards deal in, journey lines draw */
if(G&&STg&&!RM){G.set(cards,{opacity:0,y:50,rotateX:-25,transformPerspective:900});G.set($$('.sb-ch',root),{opacity:0,y:30});
 STg.create({trigger:board,start:'top 82%',once:true,onEnter:function(){G.to($$('.sb-ch',root),{opacity:1,y:0,duration:.8,stagger:.12,ease:'expo.out'});G.to($$('.sb-line b',root),{scaleX:1,duration:1.2,stagger:.15,ease:'power2.inOut'});G.to(cards,{opacity:1,y:0,rotateX:0,duration:1,stagger:.07,ease:'expo.out',delay:.15,clearProps:'transform,opacity'})}})}
else $$('.sb-line b',root).forEach(function(b){b.style.transform='scaleX(1)'});
})();


/* ---- route ---- */
var RT=[['Discover','week 1','The right course starts with the right question: what do you want to be doing in five years?',['Career goals first, course names second','Budget, scores and timeline mapped in one call','A shortlist you understand, not a pile of brochures'],[C.wattle,C.ink]],
 ['Apply','weeks 2–8','Strong applications are written with you, not filled in for you.',['Statements and Genuine Student answers drafted together','Every document checked before a university sees it','Offers tracked until your Confirmation of Enrolment lands'],[C.coral,C.ink]],
 ['Visa','subclass 500','The student visa, prepared properly the first time.',['Funds evidence and health cover sorted early','The visa file reviewed line by line','Partner and children added to the same plan'],[C.reef,C.ink]],
 ['Fly','departure','Land with a room, a plan and someone to call.',['Accommodation arranged before you leave','A pre-departure briefing for you and your family','An airport-to-campus checklist for week one'],[C.jac,C.ink]],
 ['Thrive','after arrival','Your degree is the start. We stay on for what comes next.',['Part-time work, 48 hours a fortnight in term','Graduate visa (subclass 485) guidance','A mapped route toward permanent residence'],[C.ultra,C.ink]]];
$('#phases').innerHTML=RT.map(function(r){return '<span style="--c:'+r[4][0]+';--f:'+r[4][1]+'">'+r[0].toLowerCase()+'</span>'}).join('');
function sizeRoute(){}function route(){}
/* ---- route: flight-path journey ---- */
(function(){
var jr=$('#jr');if(!jr)return;
var NS='http://www.w3.org/2000/svg';
jr.innerHTML='<svg class="jr-svg" aria-hidden="true"><path class="jr-base"/><path class="jr-trail"/><g class="jr-plane"><circle r="22" class="jr-halo"/><path d="M24 0C22-3 18-3 14-3L4-3-6-18-11-18-5-3-14-3-19-9-22-9-19-3-21-3-21 3-19 3-22 9-19 9-14 3-5 3-11 18-6 18 4 3 14 3C18 3 22 3 24 0Z"/></g></svg>'+
 '<div class="jr-end jr-a"><i class="jr-pin"></i><b class="mono">IND</b><span>Your home city</span></div>'+
 RT.map(function(r,i){return '<article class="jr-st'+(i%2?' jr-odd':'')+'" style="--c:'+r[4][0]+'"><i class="jr-node"><b class="mono">0'+(i+1)+'</b></i><div class="jr-tx"><span class="jr-tg mono">Step 0'+(i+1)+' · '+r[1]+'</span><h3><span class="o">'+r[0]+'.</span><span class="f" aria-hidden="true">'+r[0]+'.</span></h3><p>'+esc(r[2])+'</p><ul class="jr-ck">'+r[3].map(function(b,k){return '<li style="--k:'+k+'"><i><svg viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7"/></svg></i>'+esc(b)+'</li>'}).join('')+'</ul></div></article>'}).join('')+
 '<div class="jr-end jr-b"><i class="jr-pin"></i><b class="mono">AUS</b><span>Campus, week one</span></div>';
var svg=$('.jr-svg',jr),base=$('.jr-base',jr),trail=$('.jr-trail',jr),plane=$('.jr-plane',jr),steps=$$('.jr-st',jr),nodes=$$('.jr-node',jr),ends=$$('.jr-end',jr);
var LUT=[],TOT=0,nodeL=[],top0=0,cur=0,tgt=0,run=false,tP=0,act=-2;
function ctr(el){var r=el.getBoundingClientRect(),j=jr.getBoundingClientRect();return {x:r.left+r.width/2-j.left,y:r.top+r.height/2-j.top}}
/* phones: the five steps become a swipe carousel; a step ticks off when it is on screen */
var JSW=matchMedia('(max-width:767px)'),jio=null;
function swOn(){jr.classList.add('jr-sw');LUT=[];svg.removeAttribute('height');jr.style.setProperty('--pc','#F3EBDD');ends.forEach(function(e){e.classList.add('jr-on')});
 if(!jio&&'IntersectionObserver' in window){jio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.intersectionRatio>.55)e.target.classList.add('jr-on')})},{root:jr,threshold:[0,.6]});steps.forEach(function(s){jio.observe(s)})}else if(!jio)steps.forEach(function(s){s.classList.add('jr-on')})}
function build(){if(JSW.matches){swOn();return}jr.classList.remove('jr-sw');var pts=[ctr($('.jr-pin',ends[0]))].concat(nodes.map(ctr)).concat([ctr($('.jr-pin',ends[1]))]);
 svg.setAttribute('viewBox','0 0 '+jr.offsetWidth+' '+jr.offsetHeight);svg.setAttribute('width',jr.offsetWidth);svg.setAttribute('height',jr.offsetHeight);
 var d='M'+pts[0].x.toFixed(1)+' '+pts[0].y.toFixed(1);
 for(var i=1;i<pts.length;i++){var a=pts[i-1],b=pts[i],dy=(b.y-a.y)*.55;d+=' C'+a.x.toFixed(1)+' '+(a.y+dy).toFixed(1)+' '+b.x.toFixed(1)+' '+(b.y-dy).toFixed(1)+' '+b.x.toFixed(1)+' '+b.y.toFixed(1)}
 base.setAttribute('d',d);trail.setAttribute('d',d);TOT=base.getTotalLength();trail.style.strokeDasharray=TOT;
 LUT=[];var n=Math.max(200,Math.round(TOT/6));for(var k=0;k<=n;k++){var l=TOT*k/n,p=base.getPointAtLength(l);LUT.push([l,p.x,p.y])}
 nodeL=pts.slice(1,-1).map(function(p){var best=0,bd=1e9;LUT.forEach(function(s){var dd=Math.abs(s[1]-p.x)+Math.abs(s[2]-p.y);if(dd<bd){bd=dd;best=s[0]}});return best});
 top0=jr.getBoundingClientRect().top+scrollY;tgt=target();cur=tgt;paint()}
function target(){var y=scrollY+innerHeight*.55-top0;if(!LUT.length)return 0;if(y<=LUT[0][2])return 0;var lo=0,hi=LUT.length-1;if(y>=LUT[hi][2])return TOT;while(hi-lo>1){var m=(lo+hi)>>1;if(LUT[m][2]<y)lo=m;else hi=m}var a=LUT[lo],b=LUT[hi],t=(y-a[2])/Math.max(.001,b[2]-a[2]);return a[0]+(b[0]-a[0])*t}
function at(l){var i=Math.min(LUT.length-1,Math.max(0,Math.round(l/TOT*(LUT.length-1))));return LUT[i]}
function paint(){if(!LUT.length)return;var p=at(cur),q=at(Math.min(TOT,cur+12)),o=at(Math.max(0,cur-12)),ang=Math.atan2(q[2]-o[2],q[1]-o[1])*180/Math.PI;
 plane.setAttribute('transform','translate('+p[1].toFixed(1)+' '+p[2].toFixed(1)+') rotate('+ang.toFixed(1)+')');
 trail.style.strokeDashoffset=(TOT-cur).toFixed(1);
 var a=-1;nodeL.forEach(function(l,i){var on=cur>=l-4;if(on)a=i;steps[i].classList.toggle('jr-on',on)});
 ends[1].classList.toggle('jr-on',cur>=TOT-4);ends[0].classList.toggle('jr-on',cur>2);
 if(a!==act){act=a;var c=a>=0?RT[a][4][0]:'';jr.style.setProperty('--pc',c||'#F3EBDD')}}
function loop(now){var dt=Math.min(64,now-(tP||now));tP=now;top0=jr.getBoundingClientRect().top+scrollY;tgt=target();cur+=(tgt-cur)*(1-Math.exp(-dt/120));if(Math.abs(tgt-cur)<.4)cur=tgt;paint();if(cur!==tgt)requestAnimationFrame(loop);else{run=false;tP=0}}
function kick(){if(!run){run=true;requestAnimationFrame(loop)}}
addEventListener('scroll',kick,{passive:true});
var rb=0;function rebuild(){clearTimeout(rb);rb=setTimeout(build,120)}
addEventListener('resize',rebuild);addEventListener('load',build);
if('ResizeObserver' in window)new ResizeObserver(rebuild).observe(jr);
if(D.fonts&&D.fonts.ready)D.fonts.ready.then(build);
build();
})();


/* ---- pathway: pinned horizontal journey (GSAP ScrollTrigger + SplitType + canvas-confetti) ---- */
(function(){
var pw=$('#pw');if(!pw)return;
var G=window.gsap,STg=window.ScrollTrigger,Split=window.SplitType,conf=window.confetti;if(G&&STg)G.registerPlugin(STg);
var VS={emp:[{c:'500',n:'Student visa',s:'subclass 500',a:0,b:.5,d:ST[0]},{c:'STUDY',n:'Study + part-time work',s:'48 hrs / fortnight',a:.5,b:3.5,d:ST[1]},{c:'485',n:'Temporary Graduate visa',s:'subclass 485',a:3.5,b:5.5,d:ST[2]},{c:'SID',n:'Skills in Demand visa',s:'employer-sponsored',a:5.5,b:7.5,d:ST[3]},{c:'PR',n:'Permanent residence',s:'employer nomination',a:7.5,b:8,d:ST[4]}],
 pts:[{c:'500',n:'Student visa',s:'subclass 500',a:0,b:.5,d:ST[0]},{c:'STUDY',n:'Study + part-time work',s:'48 hrs / fortnight',a:.5,b:3.5,d:ST[1]},{c:'485',n:'Temporary Graduate visa',s:'subclass 485',a:3.5,b:4.6,d:ST[2]},{c:'189/190',n:'Points-tested skilled visa',s:'invitation round',a:4.6,b:5.6,d:['While on your 485','Points-tested skilled visa','Skilled Independent (subclass 189) or Skilled Nominated (subclass 190), ranked on points for age, English, skilled work and Australian study.',['Points test','State nomination for 190','No employer needed']]},{c:'PR',n:'Permanent residence',s:'granted with 189/190',a:5.6,b:8,d:['On grant','Permanent residence','A 189 or 190 visa is itself permanent: live, work and study anywhere in Australia.',['Live & work permanently','Family can join','Medicare access']]}]};
var RN={emp:'Employer-sponsored',pts:'Points-tested'},SC=[C.ultra,C.mint,C.jac,C.coral,C.wattle];
var ICO=['<rect x="10" y="6" width="28" height="36" rx="3"/><circle cx="24" cy="21" r="7"/><path d="M17 21h14M24 14c-3 4-3 10 0 14M24 14c3 4 3 10 0 14M16 35h16"/>',
 '<path d="M4 18 24 8l20 10-20 10z"/><path d="M12 22v10c7 5 17 5 24 0V22M42 19v12"/>',
 '<rect x="6" y="14" width="36" height="26" rx="4"/><path d="M18 14v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4M6 26h36M22 24h4v5h-4z"/>',
 '<path d="M24 4l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z"/>',
 '<path d="M6 22 24 8l18 14"/><path d="M10 19v22h28V19"/><path d="M20 41V29h8v12"/>'];
var route='emp',fired=false,tl=null,st=null,splits=[];
pw.className='hz';
pw.innerHTML='<div class="hz-pin" id="hzPin"><div class="hz-hud"><div class="hz-sw" role="group" aria-label="Choose a route">'+['emp','pts'].map(function(r){return '<button type="button" data-r="'+r+'" aria-pressed="'+(r===route)+'">'+RN[r]+'</button>'}).join('')+'</div>'+
 '<div class="hz-yr"><small class="mono">Year</small><b id="hzY">0.0</b></div>'+
 '<div class="hz-bar" aria-hidden="true"><i id="hzFill"></i><div id="hzMk"></div></div></div>'+
 '<div class="hz-vp"><svg class="hz-path" aria-hidden="true" preserveAspectRatio="none"><path id="hzP"/><path id="hzPd"/></svg><div class="hz-track" id="hzT"></div></div>'+
 '<span class="hz-cue mono" aria-hidden="true">Keep scrolling <i>→</i></span></div>';
var T=$('#hzT'),pin=$('#hzPin');
function panels(){var S=VS[route];
 T.innerHTML='<section class="hz-p hz-intro"><span class="mono hz-k">'+RN[route]+' route</span><h3 class="hz-split">Eight years.<br>Five visas.<br><em>One plan.</em></h3><p>Scroll sideways through every stage, from your first student visa to permanent residence.</p></section>'+
 S.map(function(s,i){var d=s.d;return '<section class="hz-p hz-s" style="--sc:'+SC[i]+'" data-i="'+i+'"><span class="hz-ghost" aria-hidden="true">'+s.c+'</span>'+
  '<div class="hz-card"><div class="hz-ct"><span class="hz-num mono">0'+(i+1)+' / 0'+S.length+'</span><svg class="hz-ic" viewBox="0 0 48 48" aria-hidden="true">'+ICO[i]+'</svg></div>'+
  '<span class="hz-when mono">'+esc(d[0])+' · Y'+s.a+(i===S.length-1?'+':'–Y'+s.b)+'</span><h3 class="hz-split">'+esc(d[1])+'</h3><p>'+esc(d[2])+'</p><ul>'+d[3].map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>'+
  (i===S.length-1?'<a class="hz-go" href="#book">Map my route in a free call <i>↗</i></a>':'')+'</div></section>'}).join('')+
 '<section class="hz-p hz-end"><span class="mono hz-k">Your timeline</span><h3>Permanent residence at about <em>year '+S[S.length-1].a+'</em>.</h3><p>Typical timeline. Yours depends on course length, occupation, points and invitation rounds. We map it in your free call.</p><a class="hz-go" href="#book">Book a free call <i>↗</i></a></section>';
 $('#hzMk').innerHTML=S.map(function(s,i){return '<span style="left:'+(s.a/8*100)+'%;--sc:'+SC[i]+'"><i></i><b class="mono">'+s.c+'</b></span>'}).join('')}
function path(){var w=T.scrollWidth,h=T.offsetHeight||500,sv=$('.hz-path',pw);sv.setAttribute('viewBox','0 0 '+w+' '+h);sv.style.width=w+'px';
 var d='M0 '+(h*.82);for(var x=0,k=0;x<w;x+=420,k++){d+=' Q '+(x+210)+' '+(h*(k%2?.92:.7))+' '+(x+420)+' '+(h*.82)}
 $('#hzP').setAttribute('d',d);$('#hzPd').setAttribute('d',d);var L=$('#hzPd').getTotalLength();$('#hzPd').style.strokeDasharray=L;$('#hzPd').style.strokeDashoffset=L;return L}
function yearAt(p){/* map horizontal progress to years: intro 0, stage panels proportional, end 8 */var S=VS[route],n=S.length+2,k=p*(n-1)-1;if(k<=0)return 0;if(k>=S.length)return 8;var i=Math.floor(k),f=k-i,s=S[Math.min(i,S.length-1)];return s.a+(s.b-s.a)*f}
function setY(p){var y=yearAt(p);$('#hzY').textContent=y.toFixed(1);$('#hzFill').style.width=(y/8*100)+'%';
 var S=VS[route],cur=0;S.forEach(function(s,i){if(y>=s.a)cur=i});$$('#hzMk span').forEach(function(m,i){m.classList.toggle('hz-on',i<=cur)});pw.style.setProperty('--sc',SC[cur]);
 if(y>=S[S.length-1].a&&!fired&&conf&&!RM){fired=true;var r=pw.getBoundingClientRect();conf({particleCount:140,spread:80,startVelocity:42,origin:{x:.5,y:Math.min(.9,(r.top+r.height*.5)/innerHeight)},colors:['#F2A93B','#E8735A','#9FE3C9','#7FB2FF','#C8B6FF','#F3EBDD'],disableForReducedMotion:true})}}
var PINMQ=matchMedia('(min-width:900px) and (min-height:620px)');function pinOK(){return PINMQ.matches}
if(PINMQ.addEventListener)PINMQ.addEventListener('change',function(){var y=scrollY;build();scrollTo(0,y)});
function build(){if(st){st.kill();st=null}if(tl){tl.kill();tl=null}splits.forEach(function(s){try{s.revert()}catch(_){}});splits=[];
 panels();var L=path();
 if(!G||!STg||RM){pw.classList.add('hz-static');setY(1);return}
 /* phones and short screens: no pin, a native swipe carousel instead (as the Finland site does below 900px / 620px tall) */
 if(!pinOK()){pw.classList.add('hz-swipe');var vp=$('.hz-vp',pw);G.set(T,{x:0});$('#hzPd').style.strokeDashoffset=0;
  if(vp&&!vp._sw){vp._sw=1;var q=false;vp.addEventListener('scroll',function(){if(q)return;q=true;requestAnimationFrame(function(){q=false;var m=vp.scrollWidth-vp.clientWidth;setY(m>0?vp.scrollLeft/m:0)})},{passive:true})}
  if(vp)vp.scrollLeft=0;setY(0);STg.refresh();return}
 pw.classList.remove('hz-swipe');
 var dist=function(){return T.scrollWidth-pin.clientWidth};
 tl=G.timeline({defaults:{ease:'none'}});
 tl.to(T,{x:function(){return -dist()}},0).to('#hzPd',{strokeDashoffset:0},0);
 st=STg.create({trigger:pin,start:'top top',end:function(){return '+='+dist()},pin:true,scrub:.8,animation:tl,invalidateOnRefresh:true,anticipatePin:1,onUpdate:function(s){setY(s.progress)}});
 /* per-panel reveals driven by the horizontal motion */
 $$('.hz-p:not(.hz-intro)',T).forEach(function(p){var h=$('.hz-split',p)||$('h3',p),parts=[];
  if(h&&Split){var sp=new Split(h,{types:'lines,words',tagName:'span'});splits.push(sp);parts=sp.words}
  G.from(parts.length?parts:[h],{yPercent:110,opacity:0,stagger:.04,ease:'power3.out',duration:.6,scrollTrigger:{trigger:p,containerAnimation:tl,start:'left 92%',toggleActions:'play none none reverse'}});
  var rest=$$('.hz-when,p,li,.hz-go,.hz-ct',p);if(rest.length)G.from(rest,{y:30,opacity:0,stagger:.05,duration:.6,ease:'power3.out',scrollTrigger:{trigger:p,containerAnimation:tl,start:'left 90%',toggleActions:'play none none reverse'}});
  var gh=$('.hz-ghost',p);if(gh)G.fromTo(gh,{xPercent:30},{xPercent:-30,ease:'none',scrollTrigger:{trigger:p,containerAnimation:tl,start:'left right',end:'right left',scrub:true}});
  var cd=$('.hz-card',p);if(cd)G.fromTo(cd,{rotateY:-18,scale:.9},{rotateY:0,scale:1,ease:'power2.out',scrollTrigger:{trigger:p,containerAnimation:tl,start:'left right',end:'center 60%',scrub:true}})});
 STg.refresh()}
$$('.hz-sw button',pw).forEach(function(b){b.addEventListener('click',function(){if(b.dataset.r===route)return;route=b.dataset.r;fired=false;$$('.hz-sw button',pw).forEach(function(x){x.setAttribute('aria-pressed',x===b)});var y=scrollY;build();scrollTo(0,y)})});
build();
if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){STg&&STg.refresh()});
addEventListener('load',function(){STg&&STg.refresh()});
})();


/* ---- intakes ---- */
var isel=0;(function(){var now=new Date();for(var i=0;i<INT.length;i++)if(INT[i][3]>now){isel=i;break}})();
$('#fIntake').innerHTML=INT.map(function(t){return '<option>'+esc(t[1])+'</option>'}).join('')+'<option>Not decided</option>';
var MS=[[8,'English test done'],[6,'Apply to universities'],[4,'Accept your offer'],[3,'Visa lodged']];
function fmt(d){return d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}
/* ---- intake: split-flap departures board + printed boarding pass (GSAP, Atropos, Web Animations, canvas-confetti) ---- */
(function(){
var box=$('#itk');if(!box)return;
var G=window.gsap,At=window.Atropos,conf=window.confetti;
var COLS=[C.mint,C.ultra,C.wattle],KEY='tutee-au-checks',MN=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
var DEST=['ENGLISH TEST','UNI APPLICATIONS','ACCEPT OFFER','VISA LODGED'],STAMP=['English','Applied','Offer','Visa'],FL=['TC 01','TC 02','TC 03','TC 04','TC 27'];
var CH=' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-:·/';
var done={};try{done=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(_){done={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(done))}catch(_){}}
function due(k){var d=new Date(INT[isel][3]);d.setMonth(d.getMonth()-MS[k][0]);return d}
function ck(k){return !!done[isel+':'+k]}
function ndone(){return MS.filter(function(_,k){return ck(k)}).length}
function pad(s,n){s=String(s).toUpperCase();return (s+Array(n+1).join(' ')).slice(0,n)}
function lpad(s,n){s=String(s);return (Array(n+1).join(' ')+s).slice(-n)}
function dd(d){return lpad(d.getDate(),2)+' '+MN[d.getMonth()]}
function ds(d){return d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0')}
function days(){return Math.max(0,Math.ceil((INT[isel][3]-new Date())/864e5))}
/* ---------- split-flap tiles ---------- */
function tiles(n,cls){var s='';for(var i=0;i<n;i++)s+='<span class="sf'+(cls?' '+cls:'')+'"><b class="u"><em> </em></b><b class="d"><em> </em></b><b class="fu"><em> </em></b><b class="fd"><em> </em></b></span>';return s}
function cell(el){return $$('.sf',el).map(function(t){var p=$$('em',t);return {el:t,u:p[0],d:p[1],fu:p[2],fd:p[3],fuB:p[2].parentNode,fdB:p[3].parentNode,cur:' ',tok:0}})}
function put(t,c){t.u.textContent=t.d.textContent=t.fu.textContent=t.fd.textContent=c;t.cur=c}
var FD=62;
function flipTo(t,target,delay,steps){if(!CH.includes(target))target=' ';t.tok++;var tok=t.tok;if(t.fdB.getAnimations)t.fdB.getAnimations().concat(t.fuB.getAnimations()).forEach(function(x){x.cancel()});put(t,t.cur);
 if(RM||!t.el.animate){put(t,target);return}
 if(target===t.cur&&!steps)return;
 var n=steps==null?2+Math.floor(Math.random()*5):steps,seq=[];for(var i=0;i<n;i++)seq.push(CH[1+Math.floor(Math.random()*(CH.length-1))]);seq.push(target);
 function step(){if(tok!==t.tok)return;var nx=seq.shift(),old=t.cur;t.u.textContent=nx;t.d.textContent=old;t.fu.textContent=old;t.fd.textContent=nx;
  var a1=t.fuB.animate([{transform:'rotateX(0deg)',filter:'brightness(1)'},{transform:'rotateX(-90deg)',filter:'brightness(.55)'}],{duration:FD,easing:'ease-in',fill:'forwards'});
  var a=t.fdB.animate([{transform:'rotateX(90deg)',filter:'brightness(1.5)'},{transform:'rotateX(0deg)',filter:'brightness(1)'}],{duration:FD,delay:FD,easing:'ease-out',fill:'both'});
  a.onfinish=function(){if(tok!==t.tok){a1.cancel();a.cancel();return}put(t,nx);a1.cancel();a.cancel();if(seq.length)step()};a.oncancel=function(){a1.cancel()}}
 setTimeout(step,delay||0)}
function write(cells,str,delay,stagger){str=String(str);for(var i=0;i<cells.length;i++)flipTo(cells[i],(str[i]||' ').toUpperCase(),(delay||0)+i*(stagger==null?28:stagger))}
/* ---------- markup ---------- */
var ROUTE='M20 70 Q160 -6 300 70';
var bars='';(function(){var x=0,r=7;while(x<236){r=(r*73+19)%97;var w=1+(r%4);bars+='<rect x="'+x+'" y="0" width="'+w+'" height="46"/>';x+=w+1+(r%3)}})();
box.className='ip dpx';
box.innerHTML='<div class="dp-grid">'+
 '<div class="dp-left"><div class="dp-seg" role="tablist" aria-label="Choose an intake"><i class="dp-ind" aria-hidden="true"></i>'+INT.map(function(t,i){var d=t[3];return '<button type="button" role="tab" class="dp-tab" data-i="'+i+'" style="--ic:'+COLS[i]+'"><span class="mono">'+esc(t[0])+'</span><b>'+MN[d.getMonth()].charAt(0)+MN[d.getMonth()].slice(1).toLowerCase()+' ’'+String(d.getFullYear()).slice(2)+'</b></button>'}).join('')+'</div>'+
 '<div class="dp-slot" aria-hidden="true"><i></i></div><div class="dp-pw"><div class="dp-at atropos"><div class="atropos-scale"><div class="atropos-rotate"><div class="atropos-inner"><div class="dp-pass" id="dpPass">'+
  '<div class="dp-ph"><span class="mono">Tutee Connect · Boarding pass</span><span class="dp-seal" data-atropos-offset="6">TC</span></div>'+
  '<div class="dp-route" data-atropos-offset="3"><div><b>IND</b><small>India</small></div><svg class="dp-arc" viewBox="0 0 320 80" aria-hidden="true"><path class="dp-a0" d="'+ROUTE+'"/><path class="dp-a1" id="dpA1" d="'+ROUTE+'"/><g id="dpPl"><path d="M12 0C11-1.5 9-1.5 7-1.5L2-1.5-3-9-5.5-9-2.5-1.5-7-1.5-9.5-4.5-11-4.5-9.5-1.5-10.5-1.5-10.5 1.5-9.5 1.5-11 4.5-9.5 4.5-7 1.5-2.5 1.5-5.5 9-3 9 2 1.5 7 1.5C9 1.5 11 1.5 12 0Z"/></g></svg><div><b>AUS</b><small>Australia</small></div></div>'+
  '<dl class="dp-f" data-atropos-offset="2"><div><dt class="mono">Passenger</dt><dd>You</dd></div><div><dt class="mono">Intake</dt><dd id="dpIn"></dd></div><div><dt class="mono">Classes from</dt><dd id="dpCl"></dd></div><div><dt class="mono">Gate</dt><dd id="dpGt"></dd></div><div><dt class="mono">Seat</dt><dd>27A</dd></div><div><dt class="mono">Checked in</dt><dd id="dpCk"></dd></div></dl>'+
  '<div class="dp-stamps" id="dpSt" data-atropos-offset="5"></div>'+
  '<div class="dp-perf" aria-hidden="true"></div>'+
  '<div class="dp-stub"><svg class="dp-bar" viewBox="0 0 236 46" preserveAspectRatio="none" aria-hidden="true">'+bars+'</svg><div><span class="mono">Day one</span><b id="dpDay"></b></div></div>'+
  '<i class="dp-holo" aria-hidden="true"></i></div></div></div></div></div></div>'+
  '<a class="ip-go dp-cta" href="#book">Get a counsellor on your team <i>↗</i></a></div>'+
 '<div class="dp-board" id="dpBoard"><div class="dp-bh"><div class="dp-bt"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 20h20M3 15l4 1 3-1-4-8 2-1 7 7 5-1c1 0 2 1 1 2l-15 4-4-1z"/></svg><b>Departures</b><span class="mono">Tutee International</span></div>'+
  '<div class="dp-clk"><span class="mono">IND</span><span class="dp-c" id="dpCI">'+tiles(5,'sm')+'</span><span class="mono">SYD</span><span class="dp-c" id="dpCS">'+tiles(5,'sm')+'</span></div></div>'+
  '<div class="dp-cd" aria-live="polite"><div class="dp-big" id="dpBig">'+tiles(3,'xl')+'</div><div class="dp-cdl"><b>days to day one</b><span class="mono"><span class="dp-c" id="dpWk">'+tiles(2,'sm')+'</span> weeks · <span class="dp-c" id="dpMo">'+tiles(2,'sm')+'</span> months</span></div>'+
  '<div class="dp-prog"><span class="mono">Boarding progress</span><div class="dp-pb">'+MS.map(function(){return '<i></i>'}).join('')+'</div><span class="mono" id="dpPr">0 / 4</span></div></div>'+
  '<div class="dp-th mono" aria-hidden="true"><span>Due</span><span class="dp-hfl">Flight</span><span>Destination</span><span>Status</span><span></span></div>'+
  '<ol class="dp-rows" id="dpRows">'+FL.map(function(f,k){return '<li class="dp-r" data-k="'+k+'"><span class="dp-c dp-due">'+tiles(6)+'</span><span class="dp-c dp-fl">'+tiles(5)+'</span><span class="dp-c dp-ds">'+tiles(16)+'</span><span class="dp-c dp-stt">'+tiles(10)+'</span><span class="dp-act">'+(k<4?'<a class="dp-cal" target="_blank" rel="noopener" aria-label="Add to Google Calendar"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4M12 13v5M9.5 15.5h5"/></svg></a><button type="button" class="dp-ck" aria-pressed="false"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>Check in</span></button>':'')+'</span></li>'}).join('')+'</ol>'+
  '<div class="dp-tick" aria-hidden="true"><div class="dp-tt mono" id="dpTick"></div></div></div></div>';
var tabs=$$('.dp-tab',box),pw=$('.dp-pw',box),pass=$('#dpPass'),rows=$$('.dp-r',box),cI=cell($('#dpCI')),cS=cell($('#dpCS')),big=cell($('#dpBig')),wk=cell($('#dpWk')),mo=cell($('#dpMo')),shown=false;
var R=rows.map(function(r){return {el:r,due:cell($('.dp-due',r)),fl:cell($('.dp-fl',r)),ds:cell($('.dp-ds',r)),st:cell($('.dp-stt',r))}});
if(At&&!RM&&matchMedia('(hover:hover) and (pointer:fine)').matches)At({el:$('.dp-at',box),activeOffset:20,shadow:false,highlight:false,rotateXMax:9,rotateYMax:12});
/* holographic sheen follows the pointer */
$('.dp-at',box).addEventListener('pointermove',function(e){var r=pass.getBoundingClientRect();pass.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');pass.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')});
/* ---------- clocks ---------- */
function tz(z){try{return new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:z}).format(new Date())}catch(_){return '--:--'}}
function clocks(first){write(cI,tz('Asia/Kolkata'),first?400:0,40);write(cS,tz('Australia/Sydney'),first?520:0,40)}
/* ---------- state per row ---------- */
function status(k){if(k===4)return ndone()===MS.length?'BOARDING':'T-'+days()+' DAYS';var d=due(k),n=Math.ceil((d-new Date())/864e5);return ck(k)?'CHECKED IN':n<0?'OVERDUE':n<=30?'FINAL CALL':'ON TIME'}
function rcls(k){var s=status(k);return s==='CHECKED IN'||s==='BOARDING'?'ok':s==='OVERDUE'?'late':s==='FINAL CALL'?'soon':''}
function paintRow(k,delay,full){var r=R[k],t=INT[isel];r.el.className='dp-r '+rcls(k);
 if(full){write(r.due,k<4?dd(due(k)):dd(t[3]),delay);write(r.fl,FL[k],delay+80);write(r.ds,k<4?DEST[k]:'DAY ONE CLASSES',delay+140,22)}
 write(r.st,pad(status(k),10),delay+(full?260:0),30);
 if(k<4){var b=$('.dp-ck',r.el),d=due(k),e2=new Date(d);e2.setDate(e2.getDate()+1);b.setAttribute('aria-pressed',ck(k));b.setAttribute('aria-label',(ck(k)?'Undo check-in for ':'Check in: ')+MS[k][1]);$('span',b).textContent=ck(k)?'Done':'Check in';
  $('.dp-cal',r.el).href='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(MS[k][1]+' · Tutee Connect')+'&dates='+ds(d)+'/'+ds(e2)+'&details='+encodeURIComponent('Your Australia study plan for '+t[1]+'. Questions? Call +91 7358364959.')}}
var plP={v:0};
function route(anim){var p=$('#dpA1'),L=p.getTotalLength(),n=ndone(),to=n/MS.length;p.style.strokeDasharray=L;
 function set(){var v=plP.v,pt=p.getPointAtLength(Math.max(.001,v)*L),pt2=p.getPointAtLength(Math.min(1,v+.01)*L),a=Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*180/Math.PI;$('#dpPl').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+pt.y.toFixed(1)+') rotate('+a.toFixed(1)+')');p.style.strokeDashoffset=L*(1-v)}
 if(G&&!RM&&anim)G.to(plP,{v:to,duration:1.4,ease:'power2.inOut',onUpdate:set});else{plP.v=to;set()}}
function stamps(newK){var st=$('#dpSt'),h='';MS.forEach(function(m,k){if(!ck(k))return;var rot=((k*47)%26)-13;h+='<span class="dp-stp'+(k===newK?' new':'')+'" style="--r:'+rot+'deg;--sc:'+[C.coral,C.jac,C.ultra,C.wattle][k]+';left:'+[6,30,54,74][k]+'%;top:'+[8,46,12,44][k]+'%"><b>'+STAMP[k]+'</b><small class="mono">'+dd(due(k))+'</small><i>✓</i></span>'});
 if(ndone()===MS.length)h+='<span class="dp-stp dp-big-stp'+(newK!=null?' new':'')+'"><b>Ready for day one</b></span>';st.innerHTML=h;
 var n=$('.dp-stp.new',st);if(n&&G&&!RM){G.fromTo(n,{scale:2.4,opacity:0},{scale:1,opacity:1,duration:.45,ease:'back.out(2.4)'});G.fromTo(pass,{x:0},{x:4,duration:.06,repeat:3,yoyo:true,delay:.32,clearProps:'x'})}
 var big2=$('.dp-big-stp.new',st);if(big2&&G&&!RM)G.fromTo(big2,{scale:3,opacity:0,rotate:-30},{scale:1,opacity:1,rotate:-12,duration:.6,delay:.3,ease:'back.out(2)'})}
function meta(){var t=INT[isel],n=ndone();$('#dpIn').textContent=t[0];$('#dpCl').textContent=fmt(t[3]);$('#dpGt').textContent=['S1','S2','T3'][isel];$('#dpCk').textContent=n+' of '+MS.length;$('#dpDay').textContent=fmt(t[3]).toUpperCase();
 $('#dpPr').textContent=n+' / '+MS.length;$$('.dp-pb i',box).forEach(function(b,k){b.classList.toggle('on',ck(k))});box.classList.toggle('dp-all',n===MS.length)}
function counts(first){var d=days(),now=new Date(),end=INT[isel][3];write(big,lpad(d,3),first?200:0,90);write(wk,lpad(Math.floor(d/7),2),first?600:300,60);write(mo,lpad(Math.max(0,(end.getFullYear()-now.getFullYear())*12+end.getMonth()-now.getMonth()),2),first?700:400,60)}
var TIPS=['Book your English test early: results take up to two weeks','Most universities want applications 6 months before classes','Accepting an offer needs a deposit and your CoE','Lodge your student visa at least 3 months before day one','Questions? Call +91 7358364959 or write to info@tuteeconnect.com'];
$('#dpTick').innerHTML=TIPS.concat(TIPS).map(function(t){return '<span>'+esc(t)+'</span>'}).join('<i>✈</i>');
/* ---------- events ---------- */
rows.forEach(function(r,k){if(k>3)return;$('.dp-ck',r).addEventListener('click',function(){var key=isel+':'+k,was=ck(k);if(was)delete done[key];else done[key]=true;save();
 paintRow(k,0,false);paintRow(4,120,false);meta();route(true);stamps(was?null:k);
 if(!was&&conf&&!RM&&ndone()===MS.length){var b=pass.getBoundingClientRect();conf({particleCount:140,spread:90,startVelocity:40,origin:{x:(b.left+b.width/2)/innerWidth,y:(b.top+b.height/2)/innerHeight},colors:['#F2A93B','#E8735A','#9FE3C9','#7FB2FF','#C8B6FF','#F3EBDD'],disableForReducedMotion:true})}})});
function indicator(anim){var b=tabs[isel],ind=$('.dp-ind',box);var x=b.offsetLeft,w=b.offsetWidth;if(G&&!RM&&anim)G.to(ind,{x:x,width:w,duration:.55,ease:'expo.out'});else{ind.style.transform='translateX('+x+'px)';ind.style.width=w+'px'}}
function render(first){var t=INT[isel];box.style.setProperty('--ic',COLS[isel]);tabs.forEach(function(b,i){b.setAttribute('aria-selected',i===isel);b.classList.toggle('on',i===isel)});var fi=$('#fIntake');if(fi)fi.selectedIndex=isel;indicator(!first);
 function fill(){meta();stamps(null);route(false)}
 var PHN=matchMedia('(max-width:767px)').matches;
  /* phones: a plain slide-and-fade print (the clip-path version can leave the pass half-painted in iOS Safari) */
  if(G&&!RM&&PHN){G.killTweensOf(pw);G.set(pw,{clearProps:'clipPath'});if(!first){G.to(pw,{y:-24,opacity:0,duration:.25,ease:'power2.in',onComplete:function(){fill();G.fromTo(pw,{y:-36,opacity:0},{y:0,opacity:1,duration:.6,ease:'power3.out',clearProps:'transform,opacity'})}});route(false)}else{fill();G.fromTo(pw,{y:-36,opacity:0},{y:0,opacity:1,duration:.7,ease:'power3.out',delay:.15,clearProps:'transform,opacity'})}}
  else if(G&&!RM&&!first){var tl=G.timeline();tl.to(pw,{yPercent:-104,clipPath:'inset(0% 0 104% 0)',duration:.42,ease:'power2.in',onComplete:fill}).fromTo(pw,{yPercent:-104,clipPath:'inset(104% 0 0% 0)'},{yPercent:0,clipPath:'inset(0% 0 0% 0)',duration:1.1,ease:'power2.out',clearProps:'clipPath'});route(false)}
 else{fill();if(G&&!RM)G.fromTo(pw,{yPercent:-104,clipPath:'inset(104% 0 0% 0)'},{yPercent:0,clipPath:'inset(0% 0 0% 0)',duration:1.3,ease:'power2.out',delay:.2,clearProps:'clipPath'})}
 R.forEach(function(_,k){paintRow(k,(first?300:0)+k*110,true)});counts(first)}
tabs.forEach(function(b,i){b.addEventListener('click',function(){if(i===isel&&shown)return;isel=i;shown=true;render(false)})});
$('.dp-seg',box).addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();isel=(isel+(e.key==='ArrowRight'?1:INT.length-1))%INT.length;render(false);tabs[isel].focus()}});
addEventListener('resize',function(){indicator(false)});
function first(){if(shown)return;shown=true;render(true);clocks(true);setInterval(function(){if(!D.hidden)clocks(false)},20000);
 /* the board idles like a real one: every few seconds one flight number re-flaps */
 if(!RM)setInterval(function(){if(D.hidden)return;var k=Math.floor(Math.random()*5);R[k].fl.forEach(function(t){flipTo(t,t.cur,Math.random()*200,2)})},7000)}
R.forEach(function(r){[r.due,r.fl,r.ds,r.st].forEach(function(c){c.forEach(function(t){put(t,' ')})})});
if('IntersectionObserver' in window){new IntersectionObserver(function(es){if(es[0].isIntersecting)first()},{threshold:.15}).observe(box);setTimeout(first,8000)}else first();
tabs.forEach(function(b,i){b.setAttribute('aria-selected',i===isel)});
})();


/* ---- universities ---- */
var LC=[C.ultra,C.coral,C.mint,C.jac,C.wattle,C.earth,C.ultra,C.coral];
/* ---- universities: map of Australia + live ranking ---- */
(function(){
var qs=$('#qs');if(!qs)return;
var SN=['UNSW','Melbourne','Sydney','ANU','Monash','UQ','UWA','Adelaide'];
var LC=[C.wattle,C.jac,C.coral,C.mint,C.ultra,C.earth,C.reef,C.sand];
var LL={Sydney:[151.2,-33.9],Melbourne:[145,-37.8],Brisbane:[153,-27.5],Perth:[115.9,-31.95],Adelaide:[138.6,-34.9],Canberra:[149.1,-35.3]};
var SIDE={Sydney:'ru',Canberra:'rd',Melbourne:'ld',Brisbane:'r',Perth:'r',Adelaide:'lu'};
var k=Math.cos(-27*Math.PI/180),sx=600/((154.5-112)*k),VX=-20,VW=760,VH=560;
function P(c){var l=LL[c];return [((l[0]-112)*k*sx-VX)/VW*100,((-9.5-l[1])*sx)/VH*100]}
var R=U.map(function(u){return parseInt(u[2].replace('=',''),10)});
var cities=[];U.forEach(function(u){if(cities.indexOf(u[1])<0)cities.push(u[1])});
var top35=R.filter(function(r){return r<=35}).length;
qs.className='um';
qs.innerHTML='<div class="um-head"><div class="qs-stat"><b data-n="'+top35+'">0</b><span>in the world’s<br>top 35</span></div><div class="qs-stat"><b data-n="'+U.length+'">0</b><span>in the world’s<br>top 80</span></div><p class="um-hint mono">Tap a city on the map to filter. Hover a university to find it.</p></div>'+
 '<div class="um-body"><div class="um-map"><svg viewBox="'+VX+' 0 '+VW+' '+VH+'" aria-hidden="true"><defs><pattern id="umDots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="1.6" fill="rgba(243,235,221,.28)"/></pattern><linearGradient id="umG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7FB2FF" stop-opacity=".22"/><stop offset="1" stop-color="#C8B6FF" stop-opacity=".08"/></linearGradient></defs>'+
 '<path class="um-land" d="M440.2 38.9L439.8 40.8L439.1 42.3L439.2 44.4L441.2 45.9L441.7 47.5L443.3 49.7L444.1 53.2L444.9 56.9L445.1 60.3L445.9 62.5L445.4 67.2L446.0 69.1L446.7 70.7L447.6 73.9L448.3 76.8L451.2 78.6L453.3 77.5L454.7 76.1L456.3 75.7L458.5 75.0L460.0 76.9L460.9 79.1L464.7 82.0L466.8 83.8L468.4 84.9L470.0 86.2L469.4 88.7L469.8 90.4L470.0 92.3L469.7 94.7L470.8 98.3L471.2 101.1L472.3 103.9L472.2 106.7L471.9 109.4L472.8 111.4L473.7 112.9L474.9 114.5L476.6 116.9L478.7 117.5L478.6 119.9L480.7 124.9L481.8 128.9L481.0 134.3L480.3 137.5L483.2 142.8L484.7 143.5L484.4 145.2L484.2 148.0L485.4 150.2L486.8 151.8L488.3 152.7L489.8 153.5L491.7 154.3L494.1 154.6L495.4 155.8L498.1 157.1L500.0 156.5L501.3 158.0L502.4 160.4L504.6 162.7L507.1 164.3L509.4 164.8L510.9 165.7L513.4 167.7L515.7 168.1L518.9 171.0L520.7 174.0L518.5 173.8L517.9 175.6L519.4 178.0L521.1 179.8L523.2 181.6L525.3 184.2L525.8 186.2L527.0 189.7L528.8 191.4L528.9 194.3L529.8 198.4L530.7 202.2L532.3 205.0L533.9 204.2L535.4 206.0L535.7 202.9L536.2 201.0L538.5 202.3L539.8 204.0L542.2 205.5L544.1 206.9L544.5 204.1L547.3 207.2L547.5 212.4L547.5 216.7L548.4 221.2L549.6 222.3L551.8 224.9L552.7 226.3L557.7 229.9L560.3 230.3L562.4 231.7L565.5 237.6L566.5 239.2L568.7 240.8L571.1 242.4L571.7 244.1L572.7 246.7L573.9 248.8L575.9 249.9L577.6 252.4L577.7 256.5L578.6 258.5L580.6 260.2L580.0 266.2L581.1 277.0L580.5 280.4L581.6 283.7L584.3 289.5L584.9 291.5L585.2 293.9L587.0 296.9L586.8 301.6L587.5 303.8L587.4 306.7L585.3 309.8L583.7 313.6L583.7 316.8L582.7 323.1L582.0 324.8L581.5 327.4L579.3 333.7L579.2 336.2L579.5 339.2L579.1 342.0L578.6 344.0L578.1 347.6L575.8 353.1L572.6 357.2L572.4 360.4L571.3 363.4L569.4 365.3L567.7 367.2L564.1 369.5L562.0 370.8L560.0 373.9L559.2 375.6L558.1 377.1L557.1 378.6L556.7 380.6L554.7 381.5L555.1 383.4L554.7 385.6L554.0 388.0L552.3 388.3L551.9 390.8L550.1 392.9L548.8 396.1L548.1 400.1L547.5 402.3L547.9 403.9L546.3 404.7L546.5 406.5L544.5 407.4L541.8 413.3L540.6 414.9L539.2 417.3L538.7 419.4L538.3 421.8L537.8 425.8L537.3 428.6L536.3 431.3L535.9 433.3L535.8 437.0L536.3 439.8L535.9 442.7L533.8 444.4L532.4 445.5L530.3 447.3L526.6 448.4L521.5 448.2L511.9 448.9L510.1 449.3L506.5 450.5L503.0 452.5L499.7 455.0L492.1 462.1L486.2 462.9L484.1 462.7L483.1 464.0L484.7 465.7L486.0 464.6L486.8 467.1L486.4 469.2L484.8 469.4L483.6 466.8L482.3 465.3L480.3 465.3L478.1 463.9L477.1 462.1L474.4 462.0L471.5 460.1L472.4 458.2L473.2 456.5L471.1 455.2L469.4 456.2L468.6 457.7L465.3 459.5L463.7 458.5L461.9 457.0L464.6 457.0L466.1 455.7L467.6 453.0L465.7 450.8L459.4 452.8L457.4 453.8L459.1 454.2L461.2 454.9L459.4 456.1L456.4 457.1L453.2 458.9L449.1 462.6L447.3 463.7L445.3 464.6L442.4 463.6L438.8 461.8L435.4 460.8L432.2 458.7L430.0 457.7L426.2 457.9L422.5 456.1L419.6 455.9L417.8 457.7L415.4 457.3L412.4 454.3L409.6 452.8L404.1 452.0L400.8 449.9L398.3 445.9L393.5 441.3L392.2 439.6L391.6 438.0L392.2 434.2L393.1 431.7L391.5 425.8L388.9 421.4L387.8 420.1L384.6 417.1L381.7 415.0L380.8 413.2L382.7 412.6L384.4 413.5L385.3 411.7L385.2 410.0L382.5 410.2L380.0 411.8L378.0 412.6L374.4 414.2L372.6 414.3L369.7 413.8L370.6 411.7L371.8 410.6L372.7 409.2L374.3 404.4L374.0 400.3L373.2 398.6L370.8 395.2L369.7 393.1L368.3 390.9L367.2 393.5L365.9 395.4L365.3 399.7L362.7 406.3L360.9 406.4L356.8 406.9L355.0 407.8L353.4 407.8L351.3 407.8L353.2 402.7L356.5 402.6L358.4 402.7L359.4 400.3L359.9 397.7L359.6 396.0L359.4 394.2L359.8 392.2L362.1 385.9L364.0 383.5L366.1 381.5L365.9 379.7L365.2 377.3L365.0 375.5L366.9 373.8L365.8 368.7L365.1 367.2L364.0 365.7L364.0 367.6L364.1 369.6L362.6 372.0L360.5 373.8L359.2 375.4L357.9 379.2L356.3 382.3L354.8 383.5L352.0 384.2L349.9 385.5L347.8 386.6L346.2 387.9L340.6 395.0L338.5 397.1L337.3 398.7L338.1 400.3L338.8 403.1L335.9 401.9L333.8 403.1L331.5 400.2L329.3 398.4L328.0 397.4L330.0 397.7L329.9 394.1L329.1 391.3L327.8 387.5L325.3 384.7L323.1 382.3L322.6 379.4L321.8 377.6L319.2 375.4L314.8 375.0L313.1 372.0L312.0 368.4L313.8 368.1L313.9 365.2L309.6 363.0L307.6 360.8L305.8 359.8L304.3 359.4L302.1 359.5L299.4 359.4L293.0 355.8L286.9 356.8L278.4 351.7L273.8 349.3L270.3 348.5L268.6 349.1L265.2 350.2L255.9 349.8L248.0 350.6L242.7 351.1L239.3 351.8L233.6 354.7L226.8 357.6L221.3 358.9L216.3 360.7L212.9 361.2L208.7 361.4L199.6 360.6L196.5 361.2L191.5 364.5L190.1 365.3L187.3 366.2L180.1 370.5L176.8 371.4L174.7 371.7L172.8 372.6L171.2 374.4L168.9 379.4L167.6 381.8L164.5 385.6L162.5 386.9L160.4 386.7L158.2 388.0L156.3 386.6L152.2 386.5L143.3 388.1L142.0 386.2L140.4 385.9L137.4 386.0L132.8 385.5L124.5 386.1L120.4 386.9L118.9 387.6L115.9 387.2L110.9 387.8L109.1 388.8L107.8 389.8L105.2 394.0L102.3 395.4L100.0 395.5L97.4 395.8L92.0 399.9L86.6 403.8L84.8 404.2L82.8 404.9L80.1 405.2L72.6 404.6L68.7 404.5L63.8 403.9L59.6 401.9L56.3 400.8L52.6 396.5L50.4 394.9L46.3 393.0L44.2 393.6L42.5 392.2L42.4 390.5L42.0 385.1L42.3 380.5L43.7 381.5L47.4 382.5L49.6 380.8L50.9 378.2L52.0 375.4L51.8 372.4L51.1 367.1L52.3 365.5L52.6 362.9L52.8 354.7L52.2 351.7L48.8 345.5L46.5 340.0L44.9 337.6L43.4 333.7L42.3 328.2L41.9 325.5L41.6 320.4L42.0 317.5L41.8 315.8L40.3 311.2L37.1 307.0L36.6 305.4L36.6 303.7L35.8 301.7L33.2 297.8L30.6 294.4L30.1 292.8L29.6 285.9L28.6 282.8L24.1 274.9L18.8 268.1L17.4 265.3L19.0 264.7L19.1 262.7L20.2 264.6L21.8 268.4L22.3 270.3L24.5 270.9L25.9 269.4L26.2 266.7L25.1 265.5L22.4 263.0L21.4 259.8L19.7 256.9L20.5 255.1L22.9 257.2L24.2 258.8L24.0 261.5L24.3 263.5L26.2 261.7L27.4 265.5L29.5 267.7L31.3 266.0L31.1 263.4L31.4 260.9L31.2 259.1L28.1 254.2L25.3 248.2L23.6 245.2L22.1 240.7L21.2 239.2L20.0 236.6L20.0 233.8L20.1 231.8L21.0 227.7L21.9 225.5L24.8 220.5L24.9 218.4L24.9 216.8L25.3 214.3L25.3 212.5L24.9 210.9L23.8 208.2L25.3 203.3L27.6 197.1L30.0 195.3L29.6 200.9L30.5 203.2L30.2 205.7L32.5 204.8L33.6 203.5L36.7 197.1L38.3 195.2L40.3 193.9L44.7 192.2L48.8 190.0L50.8 187.9L53.2 186.1L55.0 184.1L56.6 182.7L65.0 177.7L66.5 176.7L68.3 176.6L70.5 176.8L72.6 176.5L74.7 177.7L80.2 176.5L82.3 175.4L85.9 173.0L87.5 172.3L91.2 171.5L95.3 170.5L100.3 166.3L103.9 166.6L107.1 167.0L109.7 165.7L115.7 164.9L119.1 163.9L125.4 161.1L127.0 160.1L129.6 158.1L131.8 155.6L134.0 152.2L135.4 149.2L135.9 147.6L137.3 145.1L138.1 143.2L141.3 140.9L144.9 137.2L146.3 135.3L144.5 134.2L143.9 130.3L143.3 127.5L143.2 125.6L143.5 123.8L144.9 121.0L147.3 118.4L149.6 116.7L151.3 115.5L153.2 111.7L154.1 109.8L156.3 114.3L157.3 116.7L159.1 119.4L160.7 123.5L162.1 125.3L163.2 127.1L163.2 125.4L163.9 122.3L163.6 120.2L165.9 120.4L167.0 118.8L167.4 116.7L165.8 115.7L163.8 113.6L162.6 111.5L164.1 109.6L163.8 106.5L165.6 106.0L167.4 109.0L168.9 107.5L171.3 107.4L173.7 109.2L175.8 109.0L179.2 109.1L177.5 108.2L175.8 108.3L174.9 106.2L175.5 104.6L177.6 104.8L178.0 102.0L178.6 99.9L176.5 102.6L175.8 100.6L174.8 99.2L175.0 97.1L175.6 95.0L177.4 95.0L178.5 93.8L179.0 92.1L183.2 93.6L184.6 92.0L182.2 92.1L181.3 89.7L183.2 88.8L184.1 87.2L186.2 87.9L187.8 88.8L188.9 87.4L187.0 86.3L186.1 83.9L187.3 81.6L188.3 80.1L190.6 79.3L192.0 77.0L192.4 75.4L193.2 77.4L192.9 79.7L194.0 78.3L195.4 79.7L197.9 79.1L197.9 77.2L198.4 74.7L199.2 73.1L198.4 70.9L200.2 71.3L200.9 73.1L203.3 71.6L205.7 73.9L207.2 72.7L208.7 70.6L208.6 67.9L210.4 67.2L213.1 69.2L215.9 70.3L218.2 71.8L221.3 74.4L222.5 76.0L224.3 79.0L228.4 82.6L228.1 84.4L227.6 85.9L227.0 88.6L226.9 92.4L228.1 90.7L229.5 91.9L228.3 88.8L228.9 87.1L230.9 85.6L232.6 83.8L234.8 83.7L240.8 85.3L242.3 87.0L242.5 89.0L243.3 85.7L245.4 85.5L248.0 87.9L249.0 89.3L248.9 87.3L249.0 84.8L250.8 84.7L249.4 82.7L249.9 80.4L246.8 79.1L245.4 77.5L246.5 74.7L248.8 71.9L250.1 70.0L250.8 68.3L251.3 65.7L253.2 63.4L255.1 63.0L257.0 61.5L256.0 57.8L256.5 54.8L258.6 53.6L259.7 50.5L262.2 50.1L262.7 47.4L263.6 46.1L265.1 47.5L266.4 48.4L266.6 46.8L267.6 45.1L268.5 43.0L271.3 42.4L272.4 40.7L273.1 42.9L274.4 44.0L278.5 44.0L280.8 43.3L283.3 44.1L284.9 43.2L287.6 43.4L289.6 41.7L291.9 41.7L291.3 40.2L291.3 37.0L291.5 35.3L289.1 31.6L286.3 31.2L284.2 31.7L281.5 29.3L279.8 28.6L281.8 26.6L283.8 28.2L285.5 27.5L290.2 29.6L292.0 31.8L294.5 30.0L296.8 31.0L298.1 33.6L299.1 34.9L301.5 35.3L304.0 36.7L305.7 36.6L309.2 36.9L312.6 38.7L313.9 39.7L315.6 40.0L318.2 40.6L320.9 39.4L322.1 40.5L325.1 42.7L327.8 43.1L329.7 41.7L332.5 40.6L334.4 38.9L335.8 38.1L337.2 36.8L336.5 38.8L336.1 40.5L334.6 42.0L335.9 43.2L338.0 42.0L339.3 44.8L340.0 46.3L342.5 46.5L343.5 44.5L342.9 42.7L345.1 38.8L347.4 41.7L349.0 43.2L350.6 43.1L352.2 45.1L346.4 52.1L346.9 54.1L345.3 59.0L343.0 57.6L341.2 58.3L337.8 60.3L337.8 65.3L338.7 68.3L338.2 70.3L337.2 73.7L336.1 75.0L332.3 80.6L330.4 83.3L331.1 85.9L332.2 87.1L336.4 89.7L338.4 91.4L341.7 93.5L342.5 95.0L345.3 97.5L347.1 98.3L348.8 98.0L348.5 99.6L349.9 101.3L351.8 101.3L354.2 102.1L357.2 104.0L360.4 105.6L362.9 106.7L365.8 110.5L368.1 112.8L370.5 114.4L374.2 115.5L375.9 115.3L378.6 116.6L381.3 117.2L382.7 119.1L383.4 121.5L384.7 124.0L387.4 124.9L390.9 127.4L393.8 128.5L395.8 130.0L398.2 130.0L402.5 128.7L404.4 127.4L407.0 125.4L408.2 121.9L408.9 119.1L412.5 113.2L413.5 110.3L414.5 106.5L415.2 104.1L415.0 101.5L415.8 96.7L417.6 90.2L418.3 88.1L417.9 84.8L416.8 78.8L417.3 76.6L417.8 73.7L417.0 71.6L416.2 70.1L416.1 68.1L416.9 64.2L417.7 62.2L418.5 59.6L418.1 54.6L419.8 52.8L421.8 51.9L421.8 49.3L419.9 48.0L419.1 45.2L420.8 40.9L421.7 39.2L423.0 40.5L422.8 38.0L424.1 33.8L425.5 28.1L425.9 22.9L428.1 21.9L429.3 20.6L430.0 19.1L432.1 19.8L431.3 21.8L433.7 23.9L434.5 25.6L434.9 27.2L435.5 30.6L435.5 33.8L435.9 36.8L437.5 38.3L440.2 38.9ZM579.9 257.5L578.5 254.3L578.8 252.7L579.5 251.2L579.4 248.7L581.5 246.7L582.2 244.4L581.5 242.9L582.4 241.3L583.0 244.2L583.7 246.6L580.8 253.7L580.0 256.4ZM348.9 68.2L350.8 67.3L350.7 69.7L349.3 72.5L351.3 74.4L349.6 75.6L348.0 75.7L345.3 75.0L343.6 74.7L344.9 73.3L344.6 71.5L344.8 69.2L346.4 68.0L348.1 66.2L348.9 68.2ZM260.6 34.5L262.3 35.4L261.2 37.0L258.6 36.0L256.0 36.8L255.1 34.6L256.9 34.2L256.7 32.4L257.7 29.5L259.4 30.4L260.2 33.2ZM262.8 29.7L264.7 29.9L267.0 28.7L270.2 27.9L272.0 26.8L274.4 28.7L275.6 30.3L274.8 31.8L273.6 33.0L272.4 35.0L267.5 38.4L263.2 35.5L261.3 33.6L260.1 30.8L259.8 28.6L259.5 26.8L261.4 28.2L262.8 29.7ZM361.3 415.7L364.7 416.1L367.7 416.0L368.8 417.6L367.2 418.4L364.7 417.8L362.4 418.3L361.3 420.3L359.3 421.1L355.9 419.6L353.3 420.2L351.7 420.6L349.5 420.4L347.2 418.8L347.0 416.8L354.2 414.6L357.6 413.4L360.4 413.6L361.9 414.4ZM466.5 495.7L468.1 495.8L469.9 495.5L471.9 496.9L474.0 497.6L475.5 498.1L477.5 499.5L481.6 501.0L484.5 501.7L488.1 501.4L490.2 500.3L492.0 501.8L492.1 500.0L494.0 499.0L495.6 499.0L497.9 498.5L499.6 498.9L501.2 498.5L502.3 497.1L505.7 497.1L507.8 495.6L511.3 496.8L512.4 498.3L512.2 500.9L512.5 502.8L512.6 504.6L512.3 506.5L512.4 509.3L512.3 512.0L512.7 513.8L512.5 515.6L512.9 517.5L512.9 519.1L512.1 517.1L510.8 516.0L509.2 517.6L508.3 520.4L507.9 523.0L507.0 525.4L507.1 527.9L507.6 530.2L508.0 533.3L505.9 533.9L504.0 532.7L503.2 531.1L505.0 530.9L503.9 528.8L502.2 528.3L501.9 530.4L500.5 531.3L499.9 529.1L498.3 527.5L499.0 529.6L498.1 531.3L497.6 534.2L494.1 533.3L495.2 535.2L494.2 536.7L493.5 538.7L492.3 540.5L489.9 540.3L487.7 538.9L485.8 539.0L482.7 538.9L480.6 539.5L480.2 537.8L481.5 536.4L483.2 536.4L481.7 535.7L479.7 535.2L477.2 534.6L475.5 532.0L474.5 530.8L472.7 529.6L469.6 523.6L468.7 518.6L471.1 520.3L472.5 522.8L473.3 521.1L471.0 518.6L469.2 518.1L469.2 515.3L466.7 512.2L464.7 509.3L462.7 505.7L461.6 502.1L461.1 500.3L461.8 495.7L461.9 493.9L466.5 495.7ZM450.7 485.1L450.2 483.0L449.9 480.5L450.1 478.5L451.0 476.7L453.0 477.5L453.5 479.9L453.7 482.5L452.3 484.5L450.7 485.1ZM508.2 479.4L510.8 482.3L512.4 483.0L511.8 484.8L511.2 487.0L509.3 487.1L506.7 483.5L506.5 481.8L505.0 481.2L507.3 478.9Z"/><path class="um-dots" d="M440.2 38.9L439.8 40.8L439.1 42.3L439.2 44.4L441.2 45.9L441.7 47.5L443.3 49.7L444.1 53.2L444.9 56.9L445.1 60.3L445.9 62.5L445.4 67.2L446.0 69.1L446.7 70.7L447.6 73.9L448.3 76.8L451.2 78.6L453.3 77.5L454.7 76.1L456.3 75.7L458.5 75.0L460.0 76.9L460.9 79.1L464.7 82.0L466.8 83.8L468.4 84.9L470.0 86.2L469.4 88.7L469.8 90.4L470.0 92.3L469.7 94.7L470.8 98.3L471.2 101.1L472.3 103.9L472.2 106.7L471.9 109.4L472.8 111.4L473.7 112.9L474.9 114.5L476.6 116.9L478.7 117.5L478.6 119.9L480.7 124.9L481.8 128.9L481.0 134.3L480.3 137.5L483.2 142.8L484.7 143.5L484.4 145.2L484.2 148.0L485.4 150.2L486.8 151.8L488.3 152.7L489.8 153.5L491.7 154.3L494.1 154.6L495.4 155.8L498.1 157.1L500.0 156.5L501.3 158.0L502.4 160.4L504.6 162.7L507.1 164.3L509.4 164.8L510.9 165.7L513.4 167.7L515.7 168.1L518.9 171.0L520.7 174.0L518.5 173.8L517.9 175.6L519.4 178.0L521.1 179.8L523.2 181.6L525.3 184.2L525.8 186.2L527.0 189.7L528.8 191.4L528.9 194.3L529.8 198.4L530.7 202.2L532.3 205.0L533.9 204.2L535.4 206.0L535.7 202.9L536.2 201.0L538.5 202.3L539.8 204.0L542.2 205.5L544.1 206.9L544.5 204.1L547.3 207.2L547.5 212.4L547.5 216.7L548.4 221.2L549.6 222.3L551.8 224.9L552.7 226.3L557.7 229.9L560.3 230.3L562.4 231.7L565.5 237.6L566.5 239.2L568.7 240.8L571.1 242.4L571.7 244.1L572.7 246.7L573.9 248.8L575.9 249.9L577.6 252.4L577.7 256.5L578.6 258.5L580.6 260.2L580.0 266.2L581.1 277.0L580.5 280.4L581.6 283.7L584.3 289.5L584.9 291.5L585.2 293.9L587.0 296.9L586.8 301.6L587.5 303.8L587.4 306.7L585.3 309.8L583.7 313.6L583.7 316.8L582.7 323.1L582.0 324.8L581.5 327.4L579.3 333.7L579.2 336.2L579.5 339.2L579.1 342.0L578.6 344.0L578.1 347.6L575.8 353.1L572.6 357.2L572.4 360.4L571.3 363.4L569.4 365.3L567.7 367.2L564.1 369.5L562.0 370.8L560.0 373.9L559.2 375.6L558.1 377.1L557.1 378.6L556.7 380.6L554.7 381.5L555.1 383.4L554.7 385.6L554.0 388.0L552.3 388.3L551.9 390.8L550.1 392.9L548.8 396.1L548.1 400.1L547.5 402.3L547.9 403.9L546.3 404.7L546.5 406.5L544.5 407.4L541.8 413.3L540.6 414.9L539.2 417.3L538.7 419.4L538.3 421.8L537.8 425.8L537.3 428.6L536.3 431.3L535.9 433.3L535.8 437.0L536.3 439.8L535.9 442.7L533.8 444.4L532.4 445.5L530.3 447.3L526.6 448.4L521.5 448.2L511.9 448.9L510.1 449.3L506.5 450.5L503.0 452.5L499.7 455.0L492.1 462.1L486.2 462.9L484.1 462.7L483.1 464.0L484.7 465.7L486.0 464.6L486.8 467.1L486.4 469.2L484.8 469.4L483.6 466.8L482.3 465.3L480.3 465.3L478.1 463.9L477.1 462.1L474.4 462.0L471.5 460.1L472.4 458.2L473.2 456.5L471.1 455.2L469.4 456.2L468.6 457.7L465.3 459.5L463.7 458.5L461.9 457.0L464.6 457.0L466.1 455.7L467.6 453.0L465.7 450.8L459.4 452.8L457.4 453.8L459.1 454.2L461.2 454.9L459.4 456.1L456.4 457.1L453.2 458.9L449.1 462.6L447.3 463.7L445.3 464.6L442.4 463.6L438.8 461.8L435.4 460.8L432.2 458.7L430.0 457.7L426.2 457.9L422.5 456.1L419.6 455.9L417.8 457.7L415.4 457.3L412.4 454.3L409.6 452.8L404.1 452.0L400.8 449.9L398.3 445.9L393.5 441.3L392.2 439.6L391.6 438.0L392.2 434.2L393.1 431.7L391.5 425.8L388.9 421.4L387.8 420.1L384.6 417.1L381.7 415.0L380.8 413.2L382.7 412.6L384.4 413.5L385.3 411.7L385.2 410.0L382.5 410.2L380.0 411.8L378.0 412.6L374.4 414.2L372.6 414.3L369.7 413.8L370.6 411.7L371.8 410.6L372.7 409.2L374.3 404.4L374.0 400.3L373.2 398.6L370.8 395.2L369.7 393.1L368.3 390.9L367.2 393.5L365.9 395.4L365.3 399.7L362.7 406.3L360.9 406.4L356.8 406.9L355.0 407.8L353.4 407.8L351.3 407.8L353.2 402.7L356.5 402.6L358.4 402.7L359.4 400.3L359.9 397.7L359.6 396.0L359.4 394.2L359.8 392.2L362.1 385.9L364.0 383.5L366.1 381.5L365.9 379.7L365.2 377.3L365.0 375.5L366.9 373.8L365.8 368.7L365.1 367.2L364.0 365.7L364.0 367.6L364.1 369.6L362.6 372.0L360.5 373.8L359.2 375.4L357.9 379.2L356.3 382.3L354.8 383.5L352.0 384.2L349.9 385.5L347.8 386.6L346.2 387.9L340.6 395.0L338.5 397.1L337.3 398.7L338.1 400.3L338.8 403.1L335.9 401.9L333.8 403.1L331.5 400.2L329.3 398.4L328.0 397.4L330.0 397.7L329.9 394.1L329.1 391.3L327.8 387.5L325.3 384.7L323.1 382.3L322.6 379.4L321.8 377.6L319.2 375.4L314.8 375.0L313.1 372.0L312.0 368.4L313.8 368.1L313.9 365.2L309.6 363.0L307.6 360.8L305.8 359.8L304.3 359.4L302.1 359.5L299.4 359.4L293.0 355.8L286.9 356.8L278.4 351.7L273.8 349.3L270.3 348.5L268.6 349.1L265.2 350.2L255.9 349.8L248.0 350.6L242.7 351.1L239.3 351.8L233.6 354.7L226.8 357.6L221.3 358.9L216.3 360.7L212.9 361.2L208.7 361.4L199.6 360.6L196.5 361.2L191.5 364.5L190.1 365.3L187.3 366.2L180.1 370.5L176.8 371.4L174.7 371.7L172.8 372.6L171.2 374.4L168.9 379.4L167.6 381.8L164.5 385.6L162.5 386.9L160.4 386.7L158.2 388.0L156.3 386.6L152.2 386.5L143.3 388.1L142.0 386.2L140.4 385.9L137.4 386.0L132.8 385.5L124.5 386.1L120.4 386.9L118.9 387.6L115.9 387.2L110.9 387.8L109.1 388.8L107.8 389.8L105.2 394.0L102.3 395.4L100.0 395.5L97.4 395.8L92.0 399.9L86.6 403.8L84.8 404.2L82.8 404.9L80.1 405.2L72.6 404.6L68.7 404.5L63.8 403.9L59.6 401.9L56.3 400.8L52.6 396.5L50.4 394.9L46.3 393.0L44.2 393.6L42.5 392.2L42.4 390.5L42.0 385.1L42.3 380.5L43.7 381.5L47.4 382.5L49.6 380.8L50.9 378.2L52.0 375.4L51.8 372.4L51.1 367.1L52.3 365.5L52.6 362.9L52.8 354.7L52.2 351.7L48.8 345.5L46.5 340.0L44.9 337.6L43.4 333.7L42.3 328.2L41.9 325.5L41.6 320.4L42.0 317.5L41.8 315.8L40.3 311.2L37.1 307.0L36.6 305.4L36.6 303.7L35.8 301.7L33.2 297.8L30.6 294.4L30.1 292.8L29.6 285.9L28.6 282.8L24.1 274.9L18.8 268.1L17.4 265.3L19.0 264.7L19.1 262.7L20.2 264.6L21.8 268.4L22.3 270.3L24.5 270.9L25.9 269.4L26.2 266.7L25.1 265.5L22.4 263.0L21.4 259.8L19.7 256.9L20.5 255.1L22.9 257.2L24.2 258.8L24.0 261.5L24.3 263.5L26.2 261.7L27.4 265.5L29.5 267.7L31.3 266.0L31.1 263.4L31.4 260.9L31.2 259.1L28.1 254.2L25.3 248.2L23.6 245.2L22.1 240.7L21.2 239.2L20.0 236.6L20.0 233.8L20.1 231.8L21.0 227.7L21.9 225.5L24.8 220.5L24.9 218.4L24.9 216.8L25.3 214.3L25.3 212.5L24.9 210.9L23.8 208.2L25.3 203.3L27.6 197.1L30.0 195.3L29.6 200.9L30.5 203.2L30.2 205.7L32.5 204.8L33.6 203.5L36.7 197.1L38.3 195.2L40.3 193.9L44.7 192.2L48.8 190.0L50.8 187.9L53.2 186.1L55.0 184.1L56.6 182.7L65.0 177.7L66.5 176.7L68.3 176.6L70.5 176.8L72.6 176.5L74.7 177.7L80.2 176.5L82.3 175.4L85.9 173.0L87.5 172.3L91.2 171.5L95.3 170.5L100.3 166.3L103.9 166.6L107.1 167.0L109.7 165.7L115.7 164.9L119.1 163.9L125.4 161.1L127.0 160.1L129.6 158.1L131.8 155.6L134.0 152.2L135.4 149.2L135.9 147.6L137.3 145.1L138.1 143.2L141.3 140.9L144.9 137.2L146.3 135.3L144.5 134.2L143.9 130.3L143.3 127.5L143.2 125.6L143.5 123.8L144.9 121.0L147.3 118.4L149.6 116.7L151.3 115.5L153.2 111.7L154.1 109.8L156.3 114.3L157.3 116.7L159.1 119.4L160.7 123.5L162.1 125.3L163.2 127.1L163.2 125.4L163.9 122.3L163.6 120.2L165.9 120.4L167.0 118.8L167.4 116.7L165.8 115.7L163.8 113.6L162.6 111.5L164.1 109.6L163.8 106.5L165.6 106.0L167.4 109.0L168.9 107.5L171.3 107.4L173.7 109.2L175.8 109.0L179.2 109.1L177.5 108.2L175.8 108.3L174.9 106.2L175.5 104.6L177.6 104.8L178.0 102.0L178.6 99.9L176.5 102.6L175.8 100.6L174.8 99.2L175.0 97.1L175.6 95.0L177.4 95.0L178.5 93.8L179.0 92.1L183.2 93.6L184.6 92.0L182.2 92.1L181.3 89.7L183.2 88.8L184.1 87.2L186.2 87.9L187.8 88.8L188.9 87.4L187.0 86.3L186.1 83.9L187.3 81.6L188.3 80.1L190.6 79.3L192.0 77.0L192.4 75.4L193.2 77.4L192.9 79.7L194.0 78.3L195.4 79.7L197.9 79.1L197.9 77.2L198.4 74.7L199.2 73.1L198.4 70.9L200.2 71.3L200.9 73.1L203.3 71.6L205.7 73.9L207.2 72.7L208.7 70.6L208.6 67.9L210.4 67.2L213.1 69.2L215.9 70.3L218.2 71.8L221.3 74.4L222.5 76.0L224.3 79.0L228.4 82.6L228.1 84.4L227.6 85.9L227.0 88.6L226.9 92.4L228.1 90.7L229.5 91.9L228.3 88.8L228.9 87.1L230.9 85.6L232.6 83.8L234.8 83.7L240.8 85.3L242.3 87.0L242.5 89.0L243.3 85.7L245.4 85.5L248.0 87.9L249.0 89.3L248.9 87.3L249.0 84.8L250.8 84.7L249.4 82.7L249.9 80.4L246.8 79.1L245.4 77.5L246.5 74.7L248.8 71.9L250.1 70.0L250.8 68.3L251.3 65.7L253.2 63.4L255.1 63.0L257.0 61.5L256.0 57.8L256.5 54.8L258.6 53.6L259.7 50.5L262.2 50.1L262.7 47.4L263.6 46.1L265.1 47.5L266.4 48.4L266.6 46.8L267.6 45.1L268.5 43.0L271.3 42.4L272.4 40.7L273.1 42.9L274.4 44.0L278.5 44.0L280.8 43.3L283.3 44.1L284.9 43.2L287.6 43.4L289.6 41.7L291.9 41.7L291.3 40.2L291.3 37.0L291.5 35.3L289.1 31.6L286.3 31.2L284.2 31.7L281.5 29.3L279.8 28.6L281.8 26.6L283.8 28.2L285.5 27.5L290.2 29.6L292.0 31.8L294.5 30.0L296.8 31.0L298.1 33.6L299.1 34.9L301.5 35.3L304.0 36.7L305.7 36.6L309.2 36.9L312.6 38.7L313.9 39.7L315.6 40.0L318.2 40.6L320.9 39.4L322.1 40.5L325.1 42.7L327.8 43.1L329.7 41.7L332.5 40.6L334.4 38.9L335.8 38.1L337.2 36.8L336.5 38.8L336.1 40.5L334.6 42.0L335.9 43.2L338.0 42.0L339.3 44.8L340.0 46.3L342.5 46.5L343.5 44.5L342.9 42.7L345.1 38.8L347.4 41.7L349.0 43.2L350.6 43.1L352.2 45.1L346.4 52.1L346.9 54.1L345.3 59.0L343.0 57.6L341.2 58.3L337.8 60.3L337.8 65.3L338.7 68.3L338.2 70.3L337.2 73.7L336.1 75.0L332.3 80.6L330.4 83.3L331.1 85.9L332.2 87.1L336.4 89.7L338.4 91.4L341.7 93.5L342.5 95.0L345.3 97.5L347.1 98.3L348.8 98.0L348.5 99.6L349.9 101.3L351.8 101.3L354.2 102.1L357.2 104.0L360.4 105.6L362.9 106.7L365.8 110.5L368.1 112.8L370.5 114.4L374.2 115.5L375.9 115.3L378.6 116.6L381.3 117.2L382.7 119.1L383.4 121.5L384.7 124.0L387.4 124.9L390.9 127.4L393.8 128.5L395.8 130.0L398.2 130.0L402.5 128.7L404.4 127.4L407.0 125.4L408.2 121.9L408.9 119.1L412.5 113.2L413.5 110.3L414.5 106.5L415.2 104.1L415.0 101.5L415.8 96.7L417.6 90.2L418.3 88.1L417.9 84.8L416.8 78.8L417.3 76.6L417.8 73.7L417.0 71.6L416.2 70.1L416.1 68.1L416.9 64.2L417.7 62.2L418.5 59.6L418.1 54.6L419.8 52.8L421.8 51.9L421.8 49.3L419.9 48.0L419.1 45.2L420.8 40.9L421.7 39.2L423.0 40.5L422.8 38.0L424.1 33.8L425.5 28.1L425.9 22.9L428.1 21.9L429.3 20.6L430.0 19.1L432.1 19.8L431.3 21.8L433.7 23.9L434.5 25.6L434.9 27.2L435.5 30.6L435.5 33.8L435.9 36.8L437.5 38.3L440.2 38.9ZM579.9 257.5L578.5 254.3L578.8 252.7L579.5 251.2L579.4 248.7L581.5 246.7L582.2 244.4L581.5 242.9L582.4 241.3L583.0 244.2L583.7 246.6L580.8 253.7L580.0 256.4ZM348.9 68.2L350.8 67.3L350.7 69.7L349.3 72.5L351.3 74.4L349.6 75.6L348.0 75.7L345.3 75.0L343.6 74.7L344.9 73.3L344.6 71.5L344.8 69.2L346.4 68.0L348.1 66.2L348.9 68.2ZM260.6 34.5L262.3 35.4L261.2 37.0L258.6 36.0L256.0 36.8L255.1 34.6L256.9 34.2L256.7 32.4L257.7 29.5L259.4 30.4L260.2 33.2ZM262.8 29.7L264.7 29.9L267.0 28.7L270.2 27.9L272.0 26.8L274.4 28.7L275.6 30.3L274.8 31.8L273.6 33.0L272.4 35.0L267.5 38.4L263.2 35.5L261.3 33.6L260.1 30.8L259.8 28.6L259.5 26.8L261.4 28.2L262.8 29.7ZM361.3 415.7L364.7 416.1L367.7 416.0L368.8 417.6L367.2 418.4L364.7 417.8L362.4 418.3L361.3 420.3L359.3 421.1L355.9 419.6L353.3 420.2L351.7 420.6L349.5 420.4L347.2 418.8L347.0 416.8L354.2 414.6L357.6 413.4L360.4 413.6L361.9 414.4ZM466.5 495.7L468.1 495.8L469.9 495.5L471.9 496.9L474.0 497.6L475.5 498.1L477.5 499.5L481.6 501.0L484.5 501.7L488.1 501.4L490.2 500.3L492.0 501.8L492.1 500.0L494.0 499.0L495.6 499.0L497.9 498.5L499.6 498.9L501.2 498.5L502.3 497.1L505.7 497.1L507.8 495.6L511.3 496.8L512.4 498.3L512.2 500.9L512.5 502.8L512.6 504.6L512.3 506.5L512.4 509.3L512.3 512.0L512.7 513.8L512.5 515.6L512.9 517.5L512.9 519.1L512.1 517.1L510.8 516.0L509.2 517.6L508.3 520.4L507.9 523.0L507.0 525.4L507.1 527.9L507.6 530.2L508.0 533.3L505.9 533.9L504.0 532.7L503.2 531.1L505.0 530.9L503.9 528.8L502.2 528.3L501.9 530.4L500.5 531.3L499.9 529.1L498.3 527.5L499.0 529.6L498.1 531.3L497.6 534.2L494.1 533.3L495.2 535.2L494.2 536.7L493.5 538.7L492.3 540.5L489.9 540.3L487.7 538.9L485.8 539.0L482.7 538.9L480.6 539.5L480.2 537.8L481.5 536.4L483.2 536.4L481.7 535.7L479.7 535.2L477.2 534.6L475.5 532.0L474.5 530.8L472.7 529.6L469.6 523.6L468.7 518.6L471.1 520.3L472.5 522.8L473.3 521.1L471.0 518.6L469.2 518.1L469.2 515.3L466.7 512.2L464.7 509.3L462.7 505.7L461.6 502.1L461.1 500.3L461.8 495.7L461.9 493.9L466.5 495.7ZM450.7 485.1L450.2 483.0L449.9 480.5L450.1 478.5L451.0 476.7L453.0 477.5L453.5 479.9L453.7 482.5L452.3 484.5L450.7 485.1ZM508.2 479.4L510.8 482.3L512.4 483.0L511.8 484.8L511.2 487.0L509.3 487.1L506.7 483.5L506.5 481.8L505.0 481.2L507.3 478.9Z"/></svg>'+
 cities.map(function(c){var p=P(c),us=U.map(function(u,i){return [u,i]}).filter(function(x){return x[0][1]===c});
  return '<div class="um-city um-'+SIDE[c]+'" data-c="'+c+'" style="left:'+p[0].toFixed(2)+'%;top:'+p[1].toFixed(2)+'%"><button type="button" class="um-pin" aria-label="Show universities in '+c+'"><i></i></button><span class="um-cn mono">'+c+'</span><div class="um-bs">'+
  us.map(function(x){var i=x[1];return '<span class="um-b" data-i="'+i+'" style="--c:'+LC[i]+'"><b>'+esc(x[0][2])+'</b>'+SN[i]+'</span>'}).join('')+'</div></div>'}).join('')+'</div>'+
 '<div class="um-list"><div class="um-lh mono"><span>Australia</span><span>QS world rank</span></div><ol>'+U.map(function(u,i){return '<li class="um-r" data-i="'+i+'" data-city="'+esc(u[1])+'" style="--c:'+LC[i]+';--k:'+i+';--w:'+(Math.max(10,(100-R[i])/81*100)).toFixed(1)+'%"><button type="button"><span class="um-n">'+(i+1)+'</span><span class="um-nm"><b>'+esc(u[0])+'</b><small class="mono">'+esc(u[1])+'</small></span><span class="um-q"><i></i><b>'+esc(u[2])+'</b></span></button></li>'}).join('')+'</ol>'+
 '<button type="button" class="um-all" hidden>Show all cities</button></div></div>';
var rows=$$('.um-r',qs),bs=$$('.um-b',qs),cs=$$('.um-city',qs),fil='';
function hi(i){rows.forEach(function(r){r.classList.toggle('um-hi',+r.dataset.i===i)});bs.forEach(function(b){b.classList.toggle('um-hi',+b.dataset.i===i)});cs.forEach(function(c){c.classList.toggle('um-hc',i>=0&&U[i][1]===c.dataset.c)});qs.classList.toggle('um-hov',i>=0)}
function filt(c){fil=fil===c?'':c;cs.forEach(function(x){x.classList.toggle('um-sel',x.dataset.c===fil);x.classList.toggle('um-off',!!fil&&x.dataset.c!==fil)});rows.forEach(function(r){r.classList.toggle('um-out',!!fil&&r.dataset.city!==fil)});$('.um-all',qs).hidden=!fil}
rows.forEach(function(r){var i=+r.dataset.i;r.addEventListener('pointerenter',function(){hi(i)});r.addEventListener('pointerleave',function(){hi(-1)});$('button',r).addEventListener('focus',function(){hi(i)});$('button',r).addEventListener('blur',function(){hi(-1)});$('button',r).addEventListener('click',function(){var x=$('#xp');if(x)x.click()})});
bs.forEach(function(b){var i=+b.dataset.i;b.addEventListener('pointerenter',function(){hi(i)});b.addEventListener('pointerleave',function(){hi(-1)})});
cs.forEach(function(c){$('.um-pin',c).addEventListener('click',function(){filt(c.dataset.c)})});
$('.um-all',qs).addEventListener('click',function(){filt(fil)});
$$('.um-r button',qs).forEach(function(b){b.setAttribute('title','Open courses & fees in the University Explorer')});
function count(){$$('.qs-stat b',qs).forEach(function(b){var n=+b.dataset.n,t0=0;function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/1200);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)})}
if(!RM&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('um-in');if(e.target===qs.firstChild)count();io.unobserve(e.target)}})},{threshold:.25});io.observe(qs.firstChild);io.observe($('.um-body',qs))}
else{$$('.um-head,.um-body',qs).forEach(function(e){e.classList.add('um-in')});$$('.qs-stat b',qs).forEach(function(b){b.textContent=b.dataset.n})}
})();
/* ---- loan partners: colour orbit ---- */
(function(){
var ln=$('#ln');if(!ln)return;
var src=$$('.ln-src img',ln),seen={},L=[];src.forEach(function(im){var a=im.getAttribute('alt');if(!seen[a]){seen[a]=1;L.push(im)}});
var COL=[C.wattle,C.coral,C.ultra,C.mint,C.jac,C.earth,'#FFD36E','#7FD6E8','#FF9E7A','#B9F0D6','#F4A6C0','#A9C8FF'];
var n=L.length;
ln.className='loans lnx lo';
ln.innerHTML='<div class="lo-hd"><span class="k">Education loan partners</span></div>'+
 '<div class="lo-stage" id="loS"><div class="lo-ring r1" aria-hidden="true"></div><div class="lo-ring r2" aria-hidden="true"></div>'+
 '<div class="lo-core"><span class="mono">Funding your degree</span><b><em id="loN">0</em> lenders</b><p>Collateral and non-collateral education loans, matched to your course and the funds your visa needs.</p><a class="lo-go" href="#book">Compare loans with us <i>↗</i></a></div>'+
 L.map(function(im,i){var h=im.getAttribute('data-href'),tg=h?'a':'div';return '<'+tg+' class="lo-t'+(h?' lo-lk':'')+'"'+(h?' href="'+esc(h)+'" target="_blank" rel="noopener sponsored" aria-label="'+esc(im.getAttribute('alt'))+' education loans (opens in a new tab)"':'')+' style="--d:'+i+';--c:'+COL[i%COL.length]+'" data-i="'+i+'"><span class="lo-lg"><img src="'+im.getAttribute('src')+'" alt="'+esc(im.getAttribute('alt'))+'" loading="lazy" decoding="async"></span><span class="lo-nm mono">'+esc(im.getAttribute('alt'))+(h?' ↗':'')+'</span></'+tg+'>'}).join('')+'</div>';
var S=$('#loS'),T=$$('.lo-t',ln),ang=0,spd=1,hov=false,vis=false,raf=0,tp=0,drag=null,vel=0;
T.forEach(function(t){t.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse'){hov=true;t.classList.add('lo-hi');S.classList.add('lo-hov')}});t.addEventListener('pointerleave',function(){hov=false;t.classList.remove('lo-hi');S.classList.remove('lo-hov')})});
S.addEventListener('pointerdown',function(e){if(e.target.closest('a'))return;drag={x:e.clientX};S.setPointerCapture(e.pointerId);S.classList.add('lo-drag')});
S.addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-drag.x;drag.x=e.clientX;ang+=dx*.006;vel=dx*.006});
function end(){drag=null;S.classList.remove('lo-drag')}S.addEventListener('pointerup',end);S.addEventListener('pointercancel',end);
function place(){var g=innerWidth<640;S.classList.toggle('lo-grid',g);if(g){T.forEach(function(t){t.style.transform='';t.style.zIndex=''});return}var w=S.clientWidth,h=S.clientHeight,mob=w<640,rx=w*(mob?.37:.41),ry=h*(mob?.42:.4);
 T.forEach(function(t,i){var a=ang+i/n*Math.PI*2,r=1,x=Math.cos(a)*rx*r,y=Math.sin(a)*ry*r,depth=(Math.sin(a)+1)/2,s=(mob?.74:.86)+depth*.18;
  t.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0) translate(-50%,-50%) scale('+s.toFixed(3)+')';t.style.zIndex=20+Math.round(depth*20)})}
function loop(t){var dt=Math.min(48,t-(tp||t));tp=t;spd+=((hov?0:1)-spd)*.06;if(!drag){ang+=(RM?0:.00016*dt*spd)+vel;vel*=.94}place();if(vis)raf=requestAnimationFrame(loop);else{raf=0;tp=0}}
addEventListener('resize',place);place();
var counted=false;
if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis&&!raf)raf=requestAnimationFrame(loop);if(vis&&!counted){counted=true;var t0=0;(function f(x){if(!t0)t0=x;var p=Math.min(1,(x-t0)/1000);$('#loN').textContent=Math.round(n*p);if(p<1)requestAnimationFrame(f)})(performance.now())}}).observe(S);else{vis=true;$('#loN').textContent=n;raf=requestAnimationFrame(loop)}
})();

var FRAMED=true;try{FRAMED=window.top!==window.self}catch(_){}
function toast(t){var o=D.createElement('div');o.className='toast';o.setAttribute('role','status');o.textContent=t;D.body.appendChild(o);setTimeout(function(){o.remove()},3200)}
var EXP=null;function loadExp(){if(EXP)return Promise.resolve(EXP);return fetch('universities.html').then(function(r){if(!r.ok)throw 0;return r.text()}).then(function(t){EXP=t;return t})}
addEventListener('load',function(){setTimeout(function(){loadExp().catch(function(){})},5000)});
function expBlob(t){return URL.createObjectURL(new Blob([t.replace('<head>','<head><script>window.__TUTEE_POPUP=1;window.__TUTEE_PARAMS="";<\/script>')],{type:'text/html'}))}
$('#xp').addEventListener('click',function(){var w=null;if(!FRAMED)w=window.open('universities.html','_blank');else{try{if(EXP){var bu=expBlob(EXP);w=window.open(bu,'_blank');setTimeout(function(){URL.revokeObjectURL(bu)},60000)}else{w=window.open('','_blank');if(w){try{w.document.title='University Explorer';w.document.body.innerHTML='<p style="font:16px system-ui;padding:24px;color:#333">Opening the University Explorer…</p>'}catch(_){}loadExp().then(function(t){w.location.href=expBlob(t)}).catch(function(){w.location.href=new URL('universities.html',location.href).href})}}}catch(e){}}toast(w?'University Explorer opened in a new tab.':'Your browser blocked the new tab. Allow pop-ups for this page and try again.')});
addEventListener('message',function(e){if(e.data&&typeof e.data.tuteeNav==='string')$('#book').scrollIntoView({behavior:'smooth'})});

/* ---- stories ---- */
var SC=[[C.coral,C.ink],[C.ultra,C.ink],[C.wattle,C.ink],[C.euc,C.sand],[C.jac,C.ink]];
function card(q,i,hid){var k=SC[i%5],ini=q[0].split(' ').map(function(s){return s[0]}).join('');return '<figure class="card"'+(hid?' aria-hidden="true"':'')+' style="margin:0"><p>“'+esc(q[2])+'”</p><figcaption class="who"><b>'+esc(q[0])+'</b><span>'+esc(q[1])+'</span></figcaption><span class="stamp" style="--c:'+k[0]+';--f:'+k[1]+'">'+ini+'</span></figure>'}
function row(list,off,rev){var h=list.map(function(q,i){return card(q,i+off)}).join('');return '<div class="row'+(rev?' rev':'')+'">'+h+(RM?'':list.map(function(q,i){return card(q,i+off,1)}).join(''))+'</div>'}
var tbl=$('#tbl'),POS=[[3,6,-4],[27,3,3],[52,8,-2],[75,4,5],[6,48,3],[30,52,-5],[55,46,2],[77,52,-3],[40,27,1]],zt=10,NC=['#FFE68A','#FFB8D2','#B9F0D6','#D8C8FF','#A9D1FF'],TP=['#F2A93B','#E8735A','#2E8B74','#7C5CE8','#3D7FE0'];
Q.forEach(function(q,i){var n=D.createElement('figure');n.className='note';n.style.margin='0';n.style.left=POS[i][0]+'%';n.style.top=POS[i][1]+'%';n.style.transform='rotate('+POS[i][2]+'deg)';n.style.setProperty('--nc',NC[i%5]);n.style.setProperty('--tape',TP[(i+2)%5]);n.innerHTML='<span class="stars" aria-label="5 stars">★★★★★</span><blockquote>'+esc(q[2])+'</blockquote><figcaption><b>'+esc(q[0])+'</b><small>'+esc(q[1])+'</small></figcaption>';tbl.appendChild(n);
 n.addEventListener('pointerdown',function(e){if(innerWidth<=700)return;e.preventDefault();n.setPointerCapture(e.pointerId);n.style.zIndex=++zt;n.classList.add('lift');var tr=tbl.getBoundingClientRect(),nr=n.getBoundingClientRect(),ox=e.clientX-nr.left,oy=e.clientY-nr.top;n.style.transition='none';
  function mv(ev){var x=Math.max(-20,Math.min(tr.width-nr.width+20,ev.clientX-tr.left-ox)),y=Math.max(-10,Math.min(tr.height-nr.height+10,ev.clientY-tr.top-oy));n.style.left=x+'px';n.style.top=y+'px';n.style.transform='rotate('+((ev.movementX||0)*.6)+'deg) scale(1.05)'}
  function up(){n.removeEventListener('pointermove',mv);n.removeEventListener('pointerup',up);n.classList.remove('lift');n.style.transition='transform .35s';n.style.transform='rotate('+(Math.random()*8-4).toFixed(1)+'deg)'}
  n.addEventListener('pointermove',mv);n.addEventListener('pointerup',up)})});

/* ---- faq ---- */
/* ---- faq: answer console ---- */
var FTAG=[['IELTS 6.0 / 6.5','TOEFL · PTE · C1','Genuine Student'],['CoE','From A$2,500','OSHC','A$29,710 / yr'],['Partner','Children under 18','48 hrs / fortnight'],['48 hrs / fortnight','Unlimited in breaks'],['Subclass 485','2–3 years','Age limit 35'],['Merit scholarships','Collateral & non-collateral'],['A$29,710 / yr','Extra per family member'],['Near-campus housing','Pre-departure briefing']];
var QT=[['all','All'],['study','Study'],['visa','Visa'],['work','Work'],['money','Money'],['life','Life']],qcat='all',qterm='',qsel=0,qTimer=null;
$('#qxChips').innerHTML=QT.map(function(t){var n=t[0]==='all'?FQ.length:FQ.filter(function(f){return f[0]===t[0]}).length;return '<button type="button" data-t="'+t[0]+'" aria-pressed="'+(t[0]==='all')+'">'+t[1]+'<span class="mono">'+n+'</span></button>'}).join('');
function hl(s){s=esc(s);if(!qterm)return s;qterm.split(/\s+/).filter(function(w){return w.length>1}).forEach(function(w){s=s.replace(new RegExp('('+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'),'<mark>$1</mark>')});return s}
function qMatch(f){if(qcat!=='all'&&f[0]!==qcat)return false;if(!qterm)return true;var t=(f[1]+' '+f[2]).toLowerCase();return qterm.toLowerCase().split(/\s+/).filter(Boolean).every(function(w){return t.indexOf(w)>=0})}
function qList(){var L=FQ.map(function(f,i){return [f,i]}).filter(function(x){return qMatch(x[0])});
 $('#qxList').innerHTML=L.length?L.map(function(x){return '<button type="button" class="qx-q'+(x[1]===qsel?' on':'')+'" role="option" aria-selected="'+(x[1]===qsel)+'" data-i="'+x[1]+'"><span class="mono">Q'+String(x[1]+1).padStart(2,'0')+'</span><b>'+hl(x[0][1])+'</b><i class="mono">'+x[0][0]+'</i></button>'}).join(''):'<div class="qx-none"><b>No match for “'+esc(qterm)+'”.</b><span>Ask us directly on WhatsApp at +91 7358364959, or <a href="#book">book a free call</a>.</span><button type="button" class="qx-ai" data-ai-ask="'+esc(qterm)+'">✦ Ask Tutee AI instead</button></div>';
 if(L.length&&!L.some(function(x){return x[1]===qsel}))qAns(L[0][1])}
function qAns(i){qsel=i;var f=FQ[i];$$('#qxList .qx-q').forEach(function(b){var on=+b.dataset.i===i;b.classList.toggle('on',on);b.setAttribute('aria-selected',on)});
 $('#qxId').textContent='Q'+String(i+1).padStart(2,'0')+' · '+f[0];$('#qxQ').innerHTML=hl(f[1]);var A=$('#qxA'),st=$('#qxSt'),pan=$('#qxPanel');clearTimeout(qTimer);
 $('#qxTags').innerHTML='';A.innerHTML='';st.textContent='looking it up…';pan.classList.add('busy');var t0=performance.now(),words=f[2].split(' '),k=0;
 function done(){pan.classList.remove('busy');st.textContent='answered in '+((performance.now()-t0)/1000).toFixed(1)+'s';$('#qxTags').innerHTML=(FTAG[i]||[]).map(function(t,j){return '<span style="--d:'+(j*.06)+'s">'+esc(t)+'</span>'}).join('')}
 if(RM){A.innerHTML=hl(f[2]);done();return}
 qTimer=setTimeout(function step(){st.textContent='answering…';k=Math.min(words.length,k+2);A.innerHTML=hl(words.slice(0,k).join(' '))+'<i class="caret"></i>';if(k<words.length)qTimer=setTimeout(step,28);else{A.innerHTML=hl(f[2]);done()}},380)}
$('#qxList').addEventListener('click',function(e){var b=e.target.closest('.qx-q');if(b)qAns(+b.dataset.i)});
$('#qxList').addEventListener('keydown',function(e){if(e.key!=='ArrowDown'&&e.key!=='ArrowUp')return;e.preventDefault();var bs=$$('#qxList .qx-q'),k=bs.indexOf(D.activeElement);k=Math.max(0,Math.min(bs.length-1,k+(e.key==='ArrowDown'?1:-1)));bs[k].focus();qAns(+bs[k].dataset.i)});
$('#qxChips').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;qcat=b.dataset.t;$$('#qxChips button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});qList()});
var qIn=$('#qxIn');qIn.addEventListener('input',function(){qterm=qIn.value.trim();qList();if(qterm){var f=$('#qxList .qx-q');if(f)qAns(+f.dataset.i)}});
addEventListener('keydown',function(e){if(e.key==='/'&&!/input|textarea|select/i.test((D.activeElement||{}).tagName||'')){var r=$('#faq').getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0){e.preventDefault();qIn.focus()}}});
var PHS=['Can my family come with me?','How much money do I need to show?','Can I work while I study?','What English score do I need?'],phI=0,phC=0,phDel=false;
(function ph(){if(RM){qIn.placeholder='Search questions, e.g. '+PHS[0];return}var s=PHS[phI];if(!phDel){phC++;if(phC>s.length){phDel=true;setTimeout(ph,1800);return}}else{phC--;if(phC<0){phDel=false;phC=0;phI=(phI+1)%PHS.length}}qIn.placeholder='Try: '+s.slice(0,Math.max(0,phC));setTimeout(ph,phDel?25:55)})();
qList();qAns(0);


/* ---- booking ---- */
var fc=$('#fCity');fc.innerHTML+=CITIES.map(function(c){return '<option>'+c[0]+'</option>'}).join('');
function setCity(n){for(var i=0;i<fc.options.length;i++)if(fc.options[i].text===n)fc.selectedIndex=i}
$('#bk').addEventListener('submit',function(e){e.preventDefault();var n=$('#fName').value.trim(),p=$('#fPhone').value.trim(),r=$('#ready');
 if(!n||p.replace(/\D/g,'').length<7){r.hidden=false;r.textContent=!n?'Please add your name so we know who to call.':'Please add a phone or WhatsApp number with at least 7 digits.';(!n?$('#fName'):$('#fPhone')).focus();return}
 var msg='Hi Tutee Connect! I’m '+n+'. I’d like a free consultation about studying in Australia.\nLevel: '+$('#fLevel').value+'\nIntake: '+$('#fIntake').value+'\nCity: '+fc.value+'\nMy number: '+p;
 r.hidden=false;r.innerHTML='Your message is ready. <a href="https://wa.me/917358364959?text='+encodeURIComponent(msg)+'" target="_blank" rel="noopener">Send it on WhatsApp ↗</a> or call +91 7358364959.'});
$$('[data-copy]').forEach(function(b){b.addEventListener('click',function(){var t=b.dataset.copy,ok=function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1600)};try{navigator.clipboard.writeText(t).then(ok,function(){sel(b)})}catch(_){sel(b)}})});
function sel(b){var x=b.previousElementSibling,rg=D.createRange();rg.selectNodeContents(x);var s=getSelection();s.removeAllRanges();s.addRange(rg);b.textContent='Selected'}

/* ---- loop ---- */
var q=false;addEventListener('scroll',function(){if(!q){q=true;requestAnimationFrame(function(){q=false;route()})}},{passive:true});
addEventListener('resize',function(){clearTimeout(sizeRoute.t);sizeRoute.t=setTimeout(sizeRoute,150)});
sizeRoute();if(D.fonts&&D.fonts.ready)D.fonts.ready.then(sizeRoute);
tick();setInterval(tick,30000);

/* ---- booking chat ---- */
(function(){var log=$('#chLog'),inb=$('#chIn');if(!log)return;
 var A={},step=0,LV=["Bachelor's","Master's",'MBA','Diploma','PhD'],IN=INT.map(function(t){return t[1]}).concat(['Not decided']),CT=CITIES.map(function(c){return c[0]}).concat(['Not sure yet']);
 var SUM=[['name','Name'],['level','Study'],['intake','Start'],['city','City'],['phone','Phone']];
 function sum(){$('#chSum').innerHTML=SUM.map(function(s){var v=A[s[0]];return '<div class="'+(v?'ok':'')+'"><dt class="mono">'+s[1]+'</dt><dd>'+(v?esc(v):'—')+'</dd></div>'}).join('');var n=SUM.filter(function(s){return A[s[0]]}).length;$('#chCount').textContent=n+' / 5';$('#chProg').style.width=(n/5*100)+'%'}
 function bub(html,who,cls){var d=D.createElement('div');d.className='msg '+who+(cls?' '+cls:'');d.innerHTML=html;log.appendChild(d);log.scrollTop=log.scrollHeight;return d}
 function say(html,cb,cls){var t=bub('<span class="dots"><i></i><i></i><i></i></span>','bot','typing');setTimeout(function(){t.remove();bub(html,'bot',cls);if(cb)cb()},RM?0:650)}
 function chips(list,key,pre){inb.innerHTML='<div class="chips">'+list.map(function(v){return '<button type="button"'+(v===pre?' class="pre"':'')+'>'+esc(v)+'</button>'}).join('')+'</div>';$$('button',inb).forEach(function(b){b.addEventListener('click',function(){answer(key,b.textContent)})})}
 function field(type,ph,key){inb.innerHTML='<form class="fld"><label class="sr" for="chF">'+ph+'</label><input id="chF" type="'+type+'" placeholder="'+ph+'" autocomplete="'+(type==='tel'?'tel':'name')+'"'+(type==='tel'?' inputmode="tel"':'')+'><button type="submit" aria-label="Send">➤</button></form>';var f=$('form',inb),i=$('input',inb);setTimeout(function(){if(log.getBoundingClientRect().top<innerHeight&&D.activeElement&&D.activeElement.closest&&D.activeElement.closest('.phone'))i.focus()},50);
  f.addEventListener('submit',function(e){e.preventDefault();var v=i.value.trim();if(!v)return;if(key==='phone'&&v.replace(/\D/g,'').length<7){bub(esc(v),'me');say('That number looks a little short. Could you check it? Include your country code, like +91.');i.value='';return}answer(key,v)})}
 function answer(k,v){A[k]=v;inb.innerHTML='';bub(esc(v),'me');sum();if(k==='name')$('#fName').value=v;if(k==='phone')$('#fPhone').value=v;step++;next()}
 function next(){var n=A.name?A.name.split(' ')[0]:'';
  if(step===0)say('Hi! 👋 I’m the Tutee Connect desk. What’s your name?',function(){field('text','Your name','name')});
  else if(step===1)say('Nice to meet you, '+esc(n)+'. What would you like to study?',function(){chips(LV,'level')});
  else if(step===2)say('When would you like to start?',function(){chips(IN,'intake')});
  else if(step===3){var pre=$('#fCity').value;say(pre&&pre!=='Not sure yet'?'You were looking at <b>'+esc(pre)+'</b>. Is that the city, or another one?':'Any city in mind?',function(){chips(CT,'city',pre)})}
  else if(step===4)say('Last one: your phone or WhatsApp number, so a counsellor can call you.',function(){field('tel','+91 98xxx xxxxx','phone')});
  else{var msg='Hi Tutee Connect! I’m '+A.name+'. I’d like a free consultation about studying in Australia.\nLevel: '+A.level+'\nIntake: '+A.intake+'\nCity: '+A.city+'\nMy number: '+A.phone;
   say('Perfect, '+esc(n)+'. Here’s your request:<span class="rcard">'+SUM.map(function(s){return '<span><small>'+s[1]+'</small>'+esc(A[s[0]])+'</span>'}).join('')+'</span>',function(){say('Tap below to send it to us on WhatsApp. A senior counsellor will review your profile and call you back.',function(){inb.innerHTML='<div class="done"><a class="btn wa" href="https://wa.me/917358364959?text='+encodeURIComponent(msg)+'" target="_blank" rel="noopener">Send on WhatsApp ↗</a><button type="button" class="again">Edit answers</button></div><p class="alt mono">Or call +91 7358364959</p>';$('.again',inb).addEventListener('click',start)})})}}
 function start(){A={};step=0;log.innerHTML='';inb.innerHTML='';sum();next()}
 $('#chRe').addEventListener('click',start);
 var _sc=setCity;setCity=function(c){_sc(c);if(step===3&&!A.city){inb.innerHTML='';next()}};
 sum();
 var go=false;if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es[0].isIntersecting&&!go){go=true;io.disconnect();next()}},{threshold:.12});io.observe(document.querySelector(".phone")||log)}else next();
})();



/* ---- performance core: lite mode for touch/low-power devices, a scrolling flag every ambient loop respects,
   a frame governor that steps quality down when frames run long, and content-visibility for far-away sections ---- */
(function(){var h=D.documentElement,nav=navigator,coarse=matchMedia('(pointer:coarse)').matches,save=nav.connection&&nav.connection.saveData;
 window.__lite=!!(coarse||(nav.hardwareConcurrency||8)<4||(nav.deviceMemory||8)<4||save);if(window.__lite)h.classList.add('lite');
 var t=0;window.__scrolling=false;addEventListener('scroll',function(){if(!window.__scrolling){window.__scrolling=true;dispatchEvent(new CustomEvent('tutee:scroll',{detail:true}))}clearTimeout(t);t=setTimeout(function(){window.__scrolling=false;dispatchEvent(new CustomEvent('tutee:scroll',{detail:false}))},180)},{passive:true});
 function goLite(){if(window.__lite)return;window.__lite=true;h.classList.add('lite');dispatchEvent(new CustomEvent('tutee:lite'))}
 window.__goLite=goLite;
 /* frame governor: two slow 2-second windows in a row (over a third of frames longer than 28ms) -> lite */
 var lastF=0,n=0,slow=0,bad=0,t0=0;function gov(now){requestAnimationFrame(gov);if(D.hidden){lastF=0;return}if(lastF){var d=now-lastF;if(d<250){n++;if(d>28)slow++}}lastF=now;if(!t0)t0=now;if(now-t0>2000){if(n>20&&slow/n>.34)bad++;else bad=0;if(bad>=2)goLite();n=slow=0;t0=now}}
 if(!RM&&!window.__noGov)setTimeout(function(){requestAnimationFrame(gov)},2500);
 /* content-visibility: sections far from the viewport skip style, layout and paint. Pinned sections, and any with
    fixed-position content, are left alone; each keeps its measured height so scroll positions never move. */
 function cv(){if(!('contentVisibility' in h.style)||matchMedia('(max-width:767px)').matches)return;var pins=(window.ScrollTrigger?ScrollTrigger.getAll():[]).map(function(s){return s.pin}).filter(Boolean);
  $$('main > section').forEach(function(sec){if(sec.id==='top'||pins.some(function(p){return sec.contains(p)}))return;
   var fixed=false,all=sec.getElementsByTagName('*');for(var i=0;i<all.length&&!fixed;i++){var p=getComputedStyle(all[i]).position;if(p==='fixed')fixed=true}if(fixed)return;
   sec.style.containIntrinsicSize='auto '+sec.offsetHeight+'px';sec.style.contentVisibility='auto';sec.classList.add('cv')})}
 addEventListener('load',function(){setTimeout(function(){'requestIdleCallback' in window?requestIdleCallback(cv,{timeout:2000}):cv()},1800)});
})();
/* ================= effects layer v3 ================= */
var FINE=matchMedia('(hover:hover) and (pointer:fine)').matches,MOBW=innerWidth<760,root=D.documentElement;
function hex(h){var n=parseInt(h.slice(1),16);return [n>>16,n>>8&255,n&255]}
var PH=[{"k": "sydney", "place": "Sydney Harbour", "st": "New South Wales", "line": "The Opera House, the Harbour Bridge and Australia’s biggest job market, with five universities in the city.", "by": "Benh LIEU SONG (Flickr)", "lic": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_and_Harbour_Bridge_Dusk_2019-06-21.jpg", "src": "img/aus-sydney.webp"}, {"k": "uluru", "place": "Uluru", "st": "Northern Territory", "line": "The Red Centre at sunset, the trip students plan for their first semester break.", "by": "Brett Stanley", "lic": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Uluru_sunset_glow.jpg", "src": "img/aus-uluru.webp"}, {"k": "reef", "place": "Great Barrier Reef", "st": "Queensland", "line": "The world’s largest reef system, a short flight from Brisbane and Cairns.", "by": "Ank Kumar", "lic": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Aerial_View_of_Great_Barrier_Reef_(Ank_Kumar)_03.jpg", "src": "img/aus-reef.webp"}, {"k": "melbourne", "place": "Melbourne & the Yarra", "st": "Victoria", "line": "Laneways, coffee, footy and two Group of Eight universities along the river.", "by": "Ari Bakker", "lic": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Melbourne_skyline_2008.jpg", "src": "img/aus-melbourne.webp"}, {"k": "apostles", "place": "Twelve Apostles", "st": "Victoria", "line": "Limestone stacks on the Great Ocean Road, a weekend drive from Melbourne.", "by": "Dietmar Rabich", "lic": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Princetown_(AU),_Port_Campbell_National_Park,_Twelve_Apostles_--_2019_--_1017.jpg", "src": "img/aus-apostles.webp"}, {"k": "whitehaven", "place": "Whitehaven Beach", "st": "Queensland", "line": "Bright silica sand in the Whitsundays, Queensland’s island escape.", "by": "DANIEL JULIE", "lic": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:DSC122_Australia_Queensland_Whitsunday_Islands_Whitehaven_bay_(5491401519).jpg", "src": "img/aus-whitehaven.webp"}];
var PHM={};PH.forEach(function(p){PHM[p.k]=p});

/* intro curtain */
var introEl=$('#intro');function endIntro(){if(!introEl||introEl.classList.contains('go'))return;introEl.classList.add('go');setTimeout(function(){introEl.remove();countIn($$('.hero .stats b'))},950)}
if(RM){introEl&&introEl.remove()}else{setTimeout(endIntro,650);if(D.fonts&&D.fonts.ready)D.fonts.ready.then(function(){setTimeout(endIntro,120)})}

/* section moods: background colour, accent, glow position, background scene, menu photo */
var MOOD={top:['#0D0B1E','#F2A93B',[72,-10],'stars','sydney'],places:['#0B1A2A','#7FD6E8',[30,30],'bokeh','reef'],why:['#1D1133','#C8B6FF',[20,30],'cross','uluru'],cities:['#15110F','#E9BA70',[50,40],'topo','melbourne'],match:['#290E18','#E8735A',[30,80],'silk','whitehaven'],services:['#0D1536','#7FB2FF',[75,20],'dots','sydney'],route:['#0D0B1E','#F2A93B',[50,50],'flights','apostles'],pathway:['#1B1140','#C8B6FF',[15,40],'rays','uluru'],intake:['#072729','#9FE3C9',[85,70],'rise','reef'],unis:['#0F1838','#7FB2FF',[30,20],'ripples','melbourne'],stories:['#2A0F1F','#F4A6C0',[70,40],'bokeh','apostles'],faq:['#13102A','#F2A93B',[20,70],'dots','whitehaven'],book:['#1A0D2D','#E8735A',[60,30],'silk','whitehaven']};
var NAMES={top:'Welcome',places:'Destinations',why:'Why Australia',cities:'Cities',match:'City match',services:'Services',route:'The route',pathway:'Pathway',intake:'Intakes',unis:'Universities',stories:'Stories',faq:'FAQ',book:'Book a call'};
var acc=hex('#F2A93B'),accT=acc.slice(),glowEl=$('#glow'),curSec='top',mode='stars',prevMode=null,fade=1;
function mood(id){var m=MOOD[id];if(!m||id===curSec)return;curSec=id;D.body.style.backgroundColor=m[0];root.style.setProperty('--acc',m[1]);accT=hex(m[1]);glowEl.style.setProperty('--gx',m[2][0]+'%');glowEl.style.setProperty('--gy',m[2][1]+'%');
 if(m[3]!==mode){prevMode=mode;mode=m[3];fade=0}
 slot($('#ilSec'),NAMES[id]);$$('.il-links a,.rail a,.mn-l a').forEach(function(a){a.classList.toggle('on',a.dataset.s===id)})}
function slot(el,txt){var old=$('b:not(.out)',el);if(old&&old.textContent===txt)return;var nb=D.createElement('b');nb.className='pre';nb.textContent=txt;el.appendChild(nb);requestAnimationFrame(function(){requestAnimationFrame(function(){nb.classList.remove('pre')})});if(old){old.classList.add('out');setTimeout(function(){old.remove()},600)}}
if('IntersectionObserver' in window){var mo=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)mood(e.target.id)})},{rootMargin:'-48% 0px -48% 0px'});$$('main>section[id]').forEach(function(s){mo.observe(s)})}

/* ================= background scenes ================= */
var cv=$('#bg'),cx=cv.getContext('2d'),CW=0,CH=0,mx=-1e4,my=-1e4,tmx=-1e4,tmy=-1e4,DPRb=1;
function bgSize(){DPRb=Math.min(devicePixelRatio||1,1.25);CW=innerWidth;CH=innerHeight;cv.width=CW*DPRb;cv.height=CH*DPRb}
bgSize();addEventListener('resize',bgSize);
function col(a){return 'rgba('+(acc[0]|0)+','+(acc[1]|0)+','+(acc[2]|0)+','+a+')'}
var R0=Math.random;function rr(a,b){return a+R0()*(b-a)}
var STARS=[];for(var i=0;i<240;i++)STARS.push({x:R0(),y:R0(),s:rr(.3,1.6),t:rr(0,6.28),z:rr(.2,1)});
var CROSS=[[.78,.18,3.2],[.84,.30,2.6],[.76,.42,3.4],[.70,.29,2.4],[.80,.33,1.4]];
var shoot=null;
function sceneStars(T,a,cross){var sy=scrollY*.04;cx.fillStyle='#fff';STARS.forEach(function(s){var y=((s.y*CH-sy*s.z)%CH+CH)%CH,x=s.x*CW,tw=.35+.65*Math.abs(Math.sin(T*.8+s.t));cx.globalAlpha=a*tw*.85;cx.fillRect(x,y,s.s,s.s);
  if(cross){var dx=x-mx,dy=y-my,d=dx*dx+dy*dy;if(d<22000){cx.globalAlpha=a*(1-d/22000)*.5;cx.strokeStyle=col(1);cx.lineWidth=.6;cx.beginPath();cx.moveTo(x,y);cx.lineTo(mx,my);cx.stroke()}}});
 if(cross){var P=CROSS.map(function(c){return [c[0]*CW,c[1]*CH,c[2]]});cx.globalAlpha=a*.35;cx.strokeStyle=col(1);cx.lineWidth=1;cx.setLineDash([3,6]);cx.beginPath();cx.moveTo(P[0][0],P[0][1]);cx.lineTo(P[2][0],P[2][1]);cx.moveTo(P[1][0],P[1][1]);cx.lineTo(P[3][0],P[3][1]);cx.stroke();cx.setLineDash([]);
  P.forEach(function(p,i){var g=cx.createRadialGradient(p[0],p[1],0,p[0],p[1],p[2]*7);g.addColorStop(0,'rgba(255,255,255,'+a+')');g.addColorStop(.25,col(a*.5));g.addColorStop(1,col(0));cx.globalAlpha=1;cx.fillStyle=g;cx.beginPath();cx.arc(p[0],p[1],p[2]*7*(1+.15*Math.sin(T*2+i)),0,6.28);cx.fill()})}
 if(!shoot&&R0()<.006)shoot={x:rr(.1,.9)*CW,y:rr(0,.4)*CH,t:0};if(shoot){shoot.t+=.016;var k=shoot.t/.9,x0=shoot.x+k*260,y0=shoot.y+k*120;cx.globalAlpha=a*(1-k);var g2=cx.createLinearGradient(x0-120,y0-55,x0,y0);g2.addColorStop(0,'rgba(255,255,255,0)');g2.addColorStop(1,'rgba(255,255,255,.9)');cx.strokeStyle=g2;cx.lineWidth=1.4;cx.beginPath();cx.moveTo(x0-120,y0-55);cx.lineTo(x0,y0);cx.stroke();if(k>=1)shoot=null}
 cx.globalAlpha=1}
var V=null,cell=MOBW?22:16,BL=[];for(i=0;i<6;i++)BL.push({ax:rr(.15,.85),ay:rr(.15,.85),rx:rr(.18,.4),ry:rr(.18,.4),sp:rr(.05,.13),ph:rr(0,6.28),s:(i%2?1:-1)*rr(.7,1.3),r:rr(.18,.34)});
function sceneTopo(T,a){var nx=Math.ceil(CW/cell)+1,ny=Math.ceil(CH/cell)+1;if(!V||V.length!==nx*ny)V=new Float32Array(nx*ny);var M=Math.max(CW,CH),bx=[],by=[],bs=[],br=[];
 BL.forEach(function(b){bx.push((b.ax+Math.cos(T*b.sp+b.ph)*b.rx)*CW);by.push((b.ay+Math.sin(T*b.sp*1.3+b.ph)*b.ry)*CH);bs.push(b.s);br.push(1/((b.r*M)*(b.r*M)))});
 for(var j=0;j<ny;j++)for(var i=0;i<nx;i++){var x=i*cell,y=j*cell,v=Math.sin(x*.004+T*.1)*.25+Math.cos(y*.005-T*.08)*.25;for(var k=0;k<6;k++){var dx=x-bx[k],dy=y-by[k];v+=bs[k]*Math.exp(-(dx*dx+dy*dy)*br[k])}var ddx=x-mx,ddy=y-my;v+=.9*Math.exp(-(ddx*ddx+ddy*ddy)/(M*M*.012));V[j*nx+i]=v}
 for(var L=0;L<12;L++){var lv=-1.1+L*.22;cx.beginPath();
  for(j=0;j<ny-1;j++)for(i=0;i<nx-1;i++){var A=V[j*nx+i],B=V[j*nx+i+1],C2=V[(j+1)*nx+i+1],Dd=V[(j+1)*nx+i],idx=(A>lv?8:0)|(B>lv?4:0)|(C2>lv?2:0)|(Dd>lv?1:0);if(idx===0||idx===15)continue;
   var x=i*cell,y=j*cell,t=x+cell*(lv-A)/(B-A),r=y+cell*(lv-B)/(C2-B),bo=x+cell*(lv-Dd)/(C2-Dd),l=y+cell*(lv-A)/(Dd-A);
   switch(idx){case 1:case 14:cx.moveTo(x,l);cx.lineTo(bo,y+cell);break;case 2:case 13:cx.moveTo(bo,y+cell);cx.lineTo(x+cell,r);break;case 3:case 12:cx.moveTo(x,l);cx.lineTo(x+cell,r);break;case 4:case 11:cx.moveTo(t,y);cx.lineTo(x+cell,r);break;case 6:case 9:cx.moveTo(t,y);cx.lineTo(bo,y+cell);break;case 7:case 8:cx.moveTo(x,l);cx.lineTo(t,y);break;case 5:cx.moveTo(x,l);cx.lineTo(t,y);cx.moveTo(bo,y+cell);cx.lineTo(x+cell,r);break;case 10:cx.moveTo(t,y);cx.lineTo(x+cell,r);cx.moveTo(x,l);cx.lineTo(bo,y+cell);break}}
  var major=L%4===0;cx.strokeStyle=col(a*(major?.34:.15));cx.lineWidth=major?1.3:.8;cx.stroke()}}
function sceneSilk(T,a){var n=MOBW?16:26;cx.lineWidth=1;for(var k=0;k<n;k++){var base=CH*(.15+.7*k/n);cx.beginPath();for(var x=0;x<=CW;x+=14){var y=base+Math.sin(x*.0035+T*.35+k*.35)*60+Math.sin(x*.009-T*.5+k*.2)*18,dx=x-mx,dy=y-my,d=Math.exp(-(dx*dx+dy*dy)/26000);y+=d*(dy>0?40:-40);x?cx.lineTo(x,y):cx.moveTo(x,y)}cx.strokeStyle=col(a*(.07+.16*Math.abs(Math.sin(k*.6+T*.2))));cx.stroke()}}
function sceneDots(T,a){var g=MOBW?30:26;for(var y=g/2;y<CH;y+=g)for(var x=g/2;x<CW;x+=g){var dx=x-mx,dy=y-my,d=Math.exp(-(dx*dx+dy*dy)/30000),w=.5+.5*Math.sin(x*.01+y*.008-T*1.2),r=.8+w*.6+d*3;cx.fillStyle=col(a*(.12+w*.12+d*.7));cx.fillRect(x-r/2,y-r/2,r,r)}}
var FL=[];for(i=0;i<6;i++)FL.push({y0:rr(.55,1.05),y1:rr(-.05,.4),h:rr(.15,.45),sp:rr(.04,.09),o:R0()});
function sceneFlights(T,a){FL.forEach(function(f,i){var x0=-CW*.05,y0=f.y0*CH,x1=CW*1.05,y1=f.y1*CH,cxp=CW*.5,cyp=Math.min(y0,y1)-f.h*CH;cx.setLineDash([2,7]);cx.strokeStyle=col(a*.28);cx.lineWidth=1;cx.beginPath();cx.moveTo(x0,y0);cx.quadraticCurveTo(cxp,cyp,x1,y1);cx.stroke();cx.setLineDash([]);
 var t=(T*f.sp+f.o)%1;for(var k=0;k<14;k++){var tt=t-k*.006;if(tt<0)continue;var px2=(1-tt)*(1-tt)*x0+2*(1-tt)*tt*cxp+tt*tt*x1,py2=(1-tt)*(1-tt)*y0+2*(1-tt)*tt*cyp+tt*tt*y1;cx.fillStyle=col(a*(1-k/14)*(k?.5:1));cx.beginPath();cx.arc(px2,py2,k?1.6:3,0,6.28);cx.fill()}})}
function sceneRays(T,a){var ox=CW*.5,oy=CH*1.05,n=48;cx.lineWidth=1;for(var k=0;k<n;k++){var an=Math.PI+(k/n)*Math.PI+T*.02+Math.sin(T*.3)*.02,L=Math.max(CW,CH)*1.3;cx.strokeStyle=col(a*(k%4?.06:.16));cx.beginPath();cx.moveTo(ox,oy);cx.lineTo(ox+Math.cos(an)*L,oy+Math.sin(an)*L);cx.stroke()}
 for(k=1;k<6;k++){cx.strokeStyle=col(a*.12);cx.beginPath();cx.arc(ox,oy,(k*.18+((T*.03)%.18))*Math.max(CW,CH),Math.PI,0);cx.stroke()}}
var RS=[];for(i=0;i<(MOBW?60:110);i++)RS.push({x:R0(),y:R0(),s:rr(.6,2.4),v:rr(.01,.04),ph:rr(0,6.28)});
function sceneRise(T,a){RS.forEach(function(p){var y=((p.y-T*p.v)%1+1)%1,x=p.x*CW+Math.sin(T*.7+p.ph)*20;cx.fillStyle=col(a*(.25+.5*(1-y)));cx.beginPath();cx.arc(x,y*CH,p.s,0,6.28);cx.fill()})}
var RP=[[.2,.3],[.75,.6],[.5,.85]];
function sceneRipples(T,a){cx.lineWidth=1;RP.concat(mx>0?[[mx/CW,my/CH]]:[]).forEach(function(c,j){for(var k=0;k<6;k++){var ph=((T*.12+k/6+j*.13)%1),r=ph*Math.max(CW,CH)*.55;cx.strokeStyle=col(a*(1-ph)*.22);cx.beginPath();cx.arc(c[0]*CW,c[1]*CH,r,0,6.28);cx.stroke()}})}
var BK=[],bks=null;for(i=0;i<26;i++)BK.push({x:R0(),y:R0(),r:rr(30,140),v:rr(.004,.015),ph:rr(0,6.28),w:R0()<.35});
function sceneBokeh(T,a){BK.forEach(function(b){var x=(b.x*CW+Math.sin(T*.2+b.ph)*40),y=((b.y-T*b.v)%1+1)%1*CH,g=cx.createRadialGradient(x,y,0,x,y,b.r);var c=b.w?'243,235,221':((acc[0]|0)+','+(acc[1]|0)+','+(acc[2]|0));g.addColorStop(0,'rgba('+c+','+a*.12+')');g.addColorStop(.7,'rgba('+c+','+a*.06+')');g.addColorStop(1,'rgba('+c+',0)');cx.fillStyle=g;cx.beginPath();cx.arc(x,y,b.r,0,6.28);cx.fill()})}
var SCN={stars:function(T,a){sceneStars(T,a,false)},cross:function(T,a){sceneStars(T,a,true)},topo:sceneTopo,silk:sceneSilk,dots:sceneDots,flights:sceneFlights,rays:sceneRays,rise:sceneRise,ripples:sceneRipples,bokeh:sceneBokeh};
var lastBg=0;
function drawBg(T,now){cx.setTransform(DPRb,0,0,DPRb,0,0);cx.clearRect(0,0,CW,CH);for(var c=0;c<3;c++)acc[c]+=(accT[c]-acc[c])*.05;
 if(fade<1){fade=Math.min(1,fade+.03);if(prevMode)SCN[prevMode](T,1-fade)}SCN[mode](T,fade)}

/* ================= island nav, rail, menu ================= */
var isl=$('#isl'),ilP=$('#ilP'),menu=$('#menu'),mBtn=$('#ilMenu'),mnPh=$('#mnPh');
function menuOpen(o){var r=mBtn.getBoundingClientRect();menu.style.setProperty('--mx',(r.left+r.width/2)+'px');menu.classList.toggle('open',o);menu.setAttribute('aria-hidden',!o);mBtn.setAttribute('aria-expanded',o);if(o){showPh(MOOD[curSec][4]);setTimeout(function(){var a=$('.mn-l a');a&&a.focus()},300)}}
mBtn.addEventListener('click',function(){menuOpen(!menu.classList.contains('open'))});
$$('.mn-l a').forEach(function(a){a.addEventListener('click',function(){menuOpen(false)});a.addEventListener('mouseenter',function(){showPh(MOOD[a.dataset.s][4])});a.addEventListener('focus',function(){showPh(MOOD[a.dataset.s][4])})});
addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){menuOpen(false);mBtn.focus()}});
var phShown=null;function showPh(k){if(k===phShown||!PHM[k])return;phShown=k;var p=PHM[k],im=D.createElement('img');im.alt=p.place;im.src=p.src;im.style.opacity=0;mnPh.appendChild(im);requestAnimationFrame(function(){im.style.opacity=1;im.classList.add('on')});var old=$$('img',mnPh);if(old.length>2)old[0].remove();var cap=$('span',mnPh);if(!cap){cap=D.createElement('span');mnPh.appendChild(cap)}cap.textContent=p.place;mnPh.appendChild(cap)}

if($('#dpStack')){
/* ================= hero photo deck ================= */
var stack=$('#dpStack'),dcur=0,dcards=[],dn=PH.length,cap=$('#dpCap');
PH.forEach(function(p,i){var c=D.createElement('figure');c.className='dp';c.style.margin='0';c.innerHTML='<img src="'+p.src+'" alt="'+esc(p.place)+'" draggable="false"><figcaption class="tag"><small>'+esc(p.st)+'</small>'+esc(p.place)+'</figcaption>';stack.appendChild(c);dcards.push(c)});
cap.innerHTML=PH.map(function(){return '<i></i>'}).join('');var dots=$$('i',cap);
var SLOT=[[0,0,0,1,1],[7,-5,5,.93,.62],[13,-9,9,.86,.4],[17,-12,12,.8,.0]];
function layout(){dcards.forEach(function(c,i){var o=(i-dcur+dn)%dn,s=SLOT[Math.min(o,3)];c.style.setProperty('--x',s[0]+'%');c.style.setProperty('--y',s[1]+'%');c.style.setProperty('--r',s[2]+'deg');c.style.setProperty('--s',s[3]);c.style.setProperty('--b',Math.max(.25,s[4]));c.style.opacity=o>3?0:1;c.style.zIndex=dn-o;c.setAttribute('aria-hidden',o!==0)});dots.forEach(function(d,i){d.classList.toggle('on',i===dcur)})}
function go(d){dcur=(dcur+d+dn)%dn;layout()}
$('#dpNext').addEventListener('click',function(){go(1);dAuto=0});$('#dpPrev').addEventListener('click',function(){go(-1);dAuto=0});
var drag=null,dAuto=0,dHover=false;
stack.addEventListener('pointerdown',function(e){var c=dcards[dcur];drag={x:e.clientX,y:e.clientY,c:c};c.classList.add('drag');stack.setPointerCapture(e.pointerId)});
stack.addEventListener('pointermove',function(e){var c=dcards[dcur],r=stack.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width-.5,ny=(e.clientY-r.top)/r.height-.5;$('img',c).style.setProperty('--px',(-nx*4)+'%');$('img',c).style.setProperty('--py',(-ny*4)+'%');
 if(!drag)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.dx=dx;c.style.setProperty('--x',dx+'px');c.style.setProperty('--y',dy*.3+'px');c.style.setProperty('--r',(dx*.04)+'deg')});
function dend(){if(!drag)return;var c=drag.c,dx=drag.dx||0;c.classList.remove('drag');drag=null;if(Math.abs(dx)>70){c.style.setProperty('--x',(dx>0?120:-120)+'%');c.style.setProperty('--r',(dx>0?18:-18)+'deg');setTimeout(function(){go(dx>0?-1:1)},180)}else layout();dAuto=0}
stack.addEventListener('pointerup',dend);stack.addEventListener('pointercancel',dend);
stack.addEventListener('pointerenter',function(){dHover=true});stack.addEventListener('pointerleave',function(){dHover=false;dcards.forEach(function(c){var im=$('img',c);im.style.removeProperty('--px');im.style.removeProperty('--py')})});
layout();
setInterval(function(){if(RM||dHover||drag||D.hidden)return;dAuto+=1;if(dAuto>=5){dAuto=0;go(1)}},1000);

}
/* ================= HD interactive hero ================= */
var HX=[
 {k:'sydney',src:IM('hero-sydney.webp'),w:2560,h:1103,f:[.4,.6],word:'Sydney',col:C.coral,place:'Sydney Harbour',st:'NSW',by:'Benh LIEU SONG (Flickr)',lic:'CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_and_Harbour_Bridge_Dusk_2019-06-21.jpg',
  pins:[[0.412,0.593,'Sydney Opera House','UNESCO World Heritage-listed, on the harbour at Bennelong Point.'],[0.495,0.466,'Sydney Harbour Bridge','Links the city to the North Shore. Walking across is free.'],[0.543,0.736,'Sydney CBD','Australia’s biggest job market for part-time and graduate work.']]},
 {k:'melbourne',src:IM('hero-melbourne.webp'),w:2048,h:1365,f:[.66,.5],word:'Melbourne',col:C.jac,place:'Melbourne & the Yarra',st:'VIC',by:'Ari Bakker',lic:'CC BY 2.0',url:'https://commons.wikimedia.org/wiki/File:Melbourne_skyline_2008.jpg',
  pins:[[0.461,0.636,'Melbourne CBD','Two Group of Eight universities and one of the world’s biggest student scenes.'],[0.546,0.717,'Yarra River trail','Running and cycling paths that run right through the city.']]},
 {k:'apostles',src:IM('hero-apostles.webp'),w:2560,h:1707,f:[.5,.42],word:'Victoria',col:C.wattle,place:'Twelve Apostles',st:'VIC',by:'Dietmar Rabich',lic:'CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:Princetown_(AU),_Port_Campbell_National_Park,_Twelve_Apostles_--_2019_--_1017.jpg',
  pins:[[0.572,0.452,'Twelve Apostles','Limestone stacks rising from the Southern Ocean.'],[0.743,0.366,'Great Ocean Road','A favourite weekend road trip from Melbourne.']]},
 {k:'reef',src:IM('hero-reef.webp'),w:2560,h:1707,f:[.4,.52],word:'Queensland',col:C.mint,place:'Great Barrier Reef',st:'QLD',by:'Ank Kumar',lic:'CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:Aerial_View_of_Great_Barrier_Reef_(Ank_Kumar)_03.jpg',
  pins:[[0.709,0.524,'Great Barrier Reef','The world’s largest coral reef system, off the Queensland coast.'],[0.77,0.689,'Marine science','James Cook University in Townsville and Cairns is known for reef research.']]},
 {k:'uluru',src:IM('hero-uluru.webp'),w:2560,h:1699,f:[.55,.5],word:'Australia',col:C.wattle,place:'Uluru',st:'NT',by:'Brett Stanley',lic:'CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:Uluru_sunset_glow.jpg',
  pins:[[0.695,0.461,'Uluru','A sacred sandstone monolith in the Red Centre, home of the Anangu people.'],[0.78,0.607,'The Red Centre','A trip many students plan for their first semester break.']]}];
var hxStage=$('#hxStage'),hxI=0,hxLayer=null,hxCopy=$('#hxCopy'),hxT=0,hxHover=false,lx=-999,ly=-999,tlx=-999,tly=-999,pmx=0,pmy=0,tpmx=0,tpmy=0;
function hxLayerFor(i){var s=HX[i],L=D.createElement('div');L.className='hx-layer';L.innerHTML='<div class="hx-wrap"><img class="hx-base" src="'+s.src+'" alt="'+esc(s.place)+'" draggable="false"'+(i?' loading="lazy"':' fetchpriority="high"')+'>'+s.pins.map(function(p,j){return '<button class="hx-pin'+(p[0]>.6?' hx-l':'')+(p[1]<.3?' hx-d':'')+'" type="button" style="left:'+p[0]*100+'%;top:'+p[1]*100+'%;--d:'+(.3+j*.15)+'s" aria-label="'+esc(p[2])+'"><i></i><span><b>'+esc(p[2])+'</b>'+esc(p[3])+'</span></button>'}).join('')+'</div>';L._s=s;return L}
function hxSize(L){if(!L)return;var W=hxStage.clientWidth,H=hxStage.clientHeight,s=L._s,a=s.w/s.h,ww,wh;if(W/H>a){ww=W*1.12;wh=ww/a}else{wh=H*1.12;ww=wh*a}var mob=W<760,left=Math.min(0,Math.max(W-ww,W*(mob?.5:.62)-ww*s.f[0])),top=Math.min(0,Math.max(H-wh,H*(mob?.3:.55)-wh*s.f[1]));var w=$('.hx-wrap',L);w.style.width=ww+'px';w.style.height=wh+'px';w.style.left=left+'px';w.style.top=top+'px'}
function hxGo(i,ox,oy){if(i===hxI&&hxLayer)return;hxI=i;hxT=0;var L=hxLayerFor(i);hxSize(L);hxStage.appendChild(L);var old=hxLayer;hxLayer=L;var img=$('.hx-base',L),go=function(){if(hxLayer!==L)return;requestAnimationFrame(function(){requestAnimationFrame(function(){L.classList.add('live');if(old)old.classList.add('out');setTimeout(function(){if(old&&old.parentNode)old.remove()},2000)})});hxMeta(i)};
 if(img.decode)img.decode().then(go,go);else go()}
function hxMeta(i){var s=HX[i];setRot(s.word,s.col);$$('#hxTh button').forEach(function(b,j){b.setAttribute('aria-selected',j===i);b.classList.toggle('on',j===i)});$('#hxCr').innerHTML='Photo: <a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.by)+' · '+esc(s.lic)+' ↗</a>';}
function setRot(w,c){var rot=$('#rot'),old=$('b:not(.out)',rot);if(old&&old.textContent===w)return;var nb=D.createElement('b');nb.className='pre';nb.textContent=w;rot.appendChild(nb);rot.style.setProperty('--rc',c);requestAnimationFrame(function(){requestAnimationFrame(function(){nb.classList.remove('pre')})});if(old){old.classList.add('out');setTimeout(function(){old.remove()},850)}}
$('#hxTh').innerHTML=HX.map(function(s,i){return '<button type="button" role="tab" aria-selected="false"><img src="'+s.src+'" alt="" loading="lazy"><span><small>'+s.st+'</small>'+esc(s.place)+'</span><u><i></i></u></button>'}).join('');
$$('#hxTh button').forEach(function(b,i){b.addEventListener('click',function(e){var r=hxStage.getBoundingClientRect(),br=b.getBoundingClientRect();hxGo(i,br.left+br.width/2-r.left,br.top-r.top)})});
hxGo(0);setTimeout(function(){HX.forEach(function(s){var im=new Image();im.src=s.src})},1500);
addEventListener('resize',function(){hxSize(hxLayer);pinCheck()});
var hero=$('.hx');
hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();tpmx=(e.clientX-r.left)/r.width-.5;tpmy=(e.clientY-r.top)/r.height-.5;hxHover=true});
hero.addEventListener('pointerover',function(e){var p=e.target.closest&&e.target.closest('.hx-pin');if(!p)return;var r=p.getBoundingClientRect();p.classList.toggle('hx-l',r.left>innerWidth-320);p.classList.toggle('hx-d',r.top<140)});
hero.addEventListener('focusin',function(e){var p=e.target.closest&&e.target.closest('.hx-pin');if(!p)return;var r=p.getBoundingClientRect();p.classList.toggle('hx-l',r.left>innerWidth-320)});
hero.addEventListener('pointerleave',function(){hxHover=false;tpmx=tpmy=0});
hero.addEventListener('click',function(e){var p=e.target.closest('.hx-pin');$$('.hx-pin.open').forEach(function(x){if(x!==p)x.classList.remove('open')});if(p)p.classList.toggle('open')});

/* hide pins that would sit behind the hero text or off-screen */
var pinT=0;function pinCheck(){if(!hxLayer)return;var hr,M,blocks=[];$$('.hx-copy h1,.hx-copy .lede,.hx-copy .k').forEach(function(e){var rg=D.createRange();rg.selectNodeContents(e);[].forEach.call(rg.getClientRects(),function(r){blocks.push(r)})});$$('.hx-copy .acts a,.hx-copy .stats>div,.hx-bar>*').forEach(function(e){blocks.push(e.getBoundingClientRect())});blocks=blocks.filter(function(r){return r.width&&r.height}),hr=hero.getBoundingClientRect(),M=46;
 $$('.hx-pin',hxLayer).forEach(function(p){var r=$('i',p).getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,hit=cx<hr.left+30||cx>hr.right-70||cy<hr.top+90||cy>hr.bottom-30;
  if(!hit)for(var k=0;k<blocks.length;k++){var b=blocks[k];if(cx>b.left-M&&cx<b.right+M&&cy>b.top-M&&cy<b.bottom+M){hit=true;break}}
  p.classList.toggle('hx-off',hit);p.tabIndex=hit?-1:0;if(hit)p.classList.remove('open')})}
var hxW=0,hxHh=0;
function heroFx(dt){if(performance.now()-pinT>400){pinT=performance.now();pinCheck()}if(hxStage.clientWidth!==hxW||hxStage.clientHeight!==hxHh){hxW=hxStage.clientWidth;hxHh=hxStage.clientHeight;$$('.hx-layer',hxStage).forEach(hxSize)}pmx+=(tpmx-pmx)*.06;pmy+=(tpmy-pmy)*.06;lx+=(tlx-lx)*.25;ly+=(tly-ly)*.25;var y=scrollY,hh=hero.offsetHeight;if(y>hh)return;
 if(hxLayer){var w=$('.hx-wrap',hxLayer);w.style.transform='translate3d('+(-pmx*34).toFixed(1)+'px,'+(-pmy*22+y*.35).toFixed(1)+'px,0) scale('+(1+y/hh*.12).toFixed(4)+')'}
 hxCopy.style.transform='translateY('+(-y*.18).toFixed(1)+'px)';hxCopy.style.opacity=Math.max(0,1-y/(hh*.75)).toFixed(3);
 if(!RM&&!D.hidden){hxT+=dt;var th=$('#hxTh button.on u i');if(th)th.style.transform='scaleX('+Math.min(1,hxT/6).toFixed(3)+')';if(hxT>6)hxGo((hxI+1)%HX.length)}}
var hxLast=performance.now();(function hl(now){requestAnimationFrame(hl);var dt=Math.min(.1,(now-hxLast)/1000);hxLast=now;heroFx(dt)})(hxLast);

/* ================= destinations reel ================= */
var reel=$('#reel');
reel.innerHTML=PH.map(function(p,i){return '<article class="pc"><div class="fr"><img src="'+p.src+'" alt="'+esc(p.place)+'" draggable="false" loading="lazy"><span class="ix mono">0'+(i+1)+' / 0'+PH.length+'</span><div class="ov"><small>'+esc(p.st)+'</small><h3>'+esc(p.place)+'</h3><p>'+esc(p.line)+'</p>'+(p.by?'<a class="cr" href="'+p.url+'" target="_blank" rel="noopener">Photo: '+esc(p.by)+' · '+esc(p.lic)+' ↗</a>':'')+'</div></div></article>'}).join('');
var rd=null,lab=$('#curLab');
reel.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||e.target.closest('a'))return;rd={x:e.clientX,s:reel.scrollLeft,v:0,lx:e.clientX};reel.classList.add('drag')});
addEventListener('pointermove',function(e){if(!rd)return;reel.scrollLeft=rd.s-(e.clientX-rd.x);rd.v=e.clientX-rd.lx;rd.lx=e.clientX});
addEventListener('pointerup',function(){if(!rd)return;var v=rd.v;rd=null;reel.classList.remove('drag');(function fl(){if(Math.abs(v)<.5)return;reel.scrollLeft-=v;v*=.93;requestAnimationFrame(fl)})()});
var rT=null;reel.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'||rd)return;var r=reel.getBoundingClientRect(),k=Math.max(0,Math.min(1,(e.clientX-r.left-r.width*.12)/(r.width*.76)));rT=k*(reel.scrollWidth-reel.clientWidth);reel.classList.add('hov')});
reel.addEventListener('pointerleave',function(){rT=null;reel.classList.remove('hov')});
reel.addEventListener('pointerenter',function(){if(FINE){lab.classList.add('on');cur.style.opacity=0}});reel.addEventListener('pointerleave',function(){lab.classList.remove('on');cur.style.opacity=''});
reel.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){reel.scrollBy({left:reel.clientWidth*.6,behavior:'smooth'})}if(e.key==='ArrowLeft'){reel.scrollBy({left:-reel.clientWidth*.6,behavior:'smooth'})}});
var pcs=$$('.pc',reel);
function reelFx(){var vc=innerWidth/2;pcs.forEach(function(c,i){var r=c.getBoundingClientRect();if(r.right<-100||r.left>innerWidth+100)return;var d=(r.left+r.width/2-vc)/innerWidth;c.style.setProperty('--pp',(d*-14).toFixed(2)+'%');$('.fr',c).style.setProperty('--ty',(Math.abs(d)*40).toFixed(1)+'px')})}
var reelQ=false;reel.addEventListener('scroll',function(){if(reelQ)return;reelQ=true;requestAnimationFrame(function(){reelQ=false;reelFx()})},{passive:true});reelFx();

/* photo type in footer + booking backdrop */
var phx=$('#phx');if(PHM.sydney)phx.style.setProperty('--phimg','url('+PHM.sydney.src+')');
if(PHM.whitehaven)$('#phb').style.setProperty('--phimg2','url('+PHM.whitehaven.src+')');
phx.addEventListener('pointermove',function(e){var r=phx.getBoundingClientRect();phx.style.setProperty('--bx',((e.clientX-r.left)/r.width*100).toFixed(0)+'%');phx.style.setProperty('--by',((e.clientY-r.top)/r.height*100).toFixed(0)+'%')});

/* cursor */
var cur=$('#cur'),dot=$('#dot'),cxp=0,cyp=0,px=-100,py=-100;
addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY;tmx=px;tmy=py;if(FINE){dot.style.transform='translate('+px+'px,'+py+'px)';lab.style.left=px+'px';lab.style.top=py+'px'}},{passive:true});
D.addEventListener('pointerover',function(e){if(!FINE)return;var t=e.target.closest&&e.target.closest('a,button,.slice,[role=button],summary,select,input,.dp-stack');cur.classList.toggle('big',!!t&&!t.matches('input,select'))});

/* split headings, scramble labels, reveals */
$$('.h2').forEach(function(h){h.innerHTML='<span class="ln"><span style="--i:0">'+h.innerHTML+'</span></span>';h.classList.add('split')});
var GL='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/';
function scramble(el){if(RM||el._s)return;el._s=1;var fin=el.textContent,n=fin.length,t0=performance.now();(function f(now){var k=Math.min(1,(now-t0)/700),out='';for(var i=0;i<n;i++)out+=(i<k*n||fin[i]===' ')?fin[i]:GL[(Math.random()*GL.length)|0];el.textContent=out;if(k<1)requestAnimationFrame(f);else el.textContent=fin})(t0)}
var RVS='.band .k,.places .k,.band .lede,.places .lede,.reel,.slices,.cm,.mr-head,.mr-body,.ubar,.lnx,.table,.qx,.contact,.phone,.ch-sum,.contact.desk,footer .big,footer .in,.intro2 .k,.intro2 .lede,.phases,.wx-row,.wx-stage';
var revs=$$(RVS),splits=$$('.h2.split'),fold=innerHeight;
if('IntersectionObserver' in window&&!RM){var ro=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('on');ro.unobserve(t);if(t.classList.contains('k'))scramble(t);if(t.dataset.count)countIn([t])})},{rootMargin:'0px 0px -10% 0px'});
 revs.forEach(function(el){if(el.getBoundingClientRect().top>fold){el.classList.add('rv');var sib=el.parentNode?Array.prototype.indexOf.call(el.parentNode.children,el):0;if(el.classList.contains('sv'))el.style.setProperty('--d',(sib%4)*.08+'s');ro.observe(el)}});
 splits.forEach(function(el){if(el.getBoundingClientRect().top>fold)ro.observe(el);else el.classList.add('on')});
 [$('#qs')].forEach(function(el){if(el.getBoundingClientRect().top>fold)ro.observe(el);else el.classList.add('on')});
 $$('.fact .num').forEach(function(n){n.dataset.count=1;ro.observe(n)});
}else{splits.forEach(function(el){el.classList.add('on')});$('#qs').classList.add('on')}

/* counters */
function countIn(list){list.forEach(function(el){if(RM||el._c)return;el._c=1;var node=el.firstChild;if(!node||node.nodeType!==3)return;var raw=node.nodeValue,m=raw.match(/^([\d,]+)(.*)$/);if(!m)return;var to=parseInt(m[1].replace(/,/g,''),10),suf=m[2],t0=performance.now(),dur=1600;
 (function f(now){var k=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-k,4),v=Math.round(to*e);node.nodeValue=(to>=1000?v.toLocaleString('en-IN'):v)+suf;if(k<1)requestAnimationFrame(f)})(t0)})}

/* spotlight + magnetic */
D.addEventListener('pointermove',function(e){var s=e.target.closest&&e.target.closest('.sv');if(!s)return;var r=s.getBoundingClientRect();s.style.setProperty('--mx',(e.clientX-r.left)+'px');s.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
$$('.btn,.il-cta').forEach(function(b){if(b.closest('form'))return;b.addEventListener('pointermove',function(e){if(!FINE)return;var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.3).toFixed(1)+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})});

/* rotating city word */
var rot=$('#rot'),RW=['Australia'].concat(CITIES.map(function(c){return c[0]})),ri=0;rot.style.setProperty('--rc',C.wattle);
if(!RM&&!$('#hxStage'))setInterval(function(){if(D.hidden)return;ri=(ri+1)%RW.length;var w=RW[ri],old=$('b:not(.out)',rot),nb=D.createElement('b');nb.className='pre';nb.textContent=w;rot.appendChild(nb);rot.style.setProperty('--rc',ri?CC[w][0]:C.wattle);requestAnimationFrame(function(){requestAnimationFrame(function(){nb.classList.remove('pre')})});if(old){old.classList.add('out');setTimeout(function(){old.remove()},850)}},2600);

/* main loop */
var heroEl=$('#top'),heroB=0,lastY=-1,lastPr='',hbOn=null;function heroM(){heroB=heroEl?heroEl.offsetTop+heroEl.offsetHeight:0;lastY=-1}heroM();addEventListener('resize',heroM);addEventListener('load',heroM);
var qxS=$('.qx-search'),bands=$$('.mqb .t'),vel=0,prevY=scrollY,phs=$$('.ph'),decks=$$('.fact'),phb=$('#phb'),bookS=$('#book');
var bandW=[],bandOn=bands.map(function(){return false}),bookTop=0,bookH=0;
function measureFx(){bandW=bands.map(function(b){return b.scrollWidth/4});if(bookS){bookTop=bookS.getBoundingClientRect().top+scrollY;bookH=bookS.offsetHeight}}
measureFx();addEventListener('resize',measureFx);addEventListener('load',measureFx);setInterval(function(){if(!D.hidden&&!window.__scrolling)measureFx()},4000);
if('IntersectionObserver' in window)bands.forEach(function(b,i){new IntersectionObserver(function(es){bandOn[i]=es[0].isIntersecting},{rootMargin:'120px 0px'}).observe(b.parentNode)});else bandOn=bands.map(function(){return true});
var reelVis=false;if('IntersectionObserver' in window&&reel){new IntersectionObserver(function(es){reelVis=es[0].isIntersecting}).observe(reel)}else reelVis=true;
function fx(now){requestAnimationFrame(fx);if(D.hidden)return;if(rT!=null&&!rd){var dd=rT-reel.scrollLeft;if(Math.abs(dd)>.5){reel.scrollLeft+=dd*.07}}var T=now/1000,y=scrollY,dy=y-prevY;prevY=y;vel+=(dy-vel)*.15;
 if(y!==lastY){lastY=y;var dh=D.documentElement.scrollHeight-innerHeight,pr=(1-Math.min(1,y/Math.max(1,dh))).toFixed(3);if(pr!==lastPr){lastPr=pr;ilP.style.setProperty('--pr',pr)}var sc=y>40&&(!heroEl||y>heroB-80);if(sc!==hbOn){hbOn=sc;isl.classList.toggle('is-scrolled',sc)}}
 if(FINE){cxp+=(px-cxp)*.18;cyp+=(py-cyp)*.18;cur.style.transform='translate('+cxp.toFixed(1)+'px,'+cyp.toFixed(1)+'px)'}
 mx+=(tmx-mx)*.08;my+=(tmy-my)*.08;
 bands.forEach(function(b,i){if(!bandOn[i])return;var w=bandW[i]||1,x=((y*.45+T*28)%w);b.style.transform='translate3d('+(i%2?x-w:-x).toFixed(1)+'px,0,0) skewX('+Math.max(-12,Math.min(12,-vel*.35)).toFixed(2)+'deg)'});
 if(!RM&&innerWidth>760&&reelVis){var vc=innerWidth/2,pr2=phs.map(function(p){return p.getBoundingClientRect()}),dr=decks.map(function(f){return f.getBoundingClientRect()});phs.forEach(function(p,i){var r=pr2[i],d=(r.left+r.width/2-vc)/innerWidth;p.style.setProperty('--rz',(d*-6).toFixed(2)+'deg');p.style.setProperty('--sc',(1-Math.min(.12,Math.abs(d)*.18)).toFixed(3))});
  decks.forEach(function(f,i){var nx=dr[i+1];if(!nx)return;var a=dr[i],o=Math.max(0,Math.min(1,(a.bottom-nx.top)/a.height));f.style.setProperty('--s',(1-o*.06).toFixed(3));f.style.setProperty('--b',(1-o*.35).toFixed(3))})}
 if(!window.__cxCover&&bookS){var bt=bookTop-y;if(bt+bookH>0&&bt<innerHeight)phb.style.setProperty('--ty2',(bt*.12).toFixed(1)+'px')}
 if(!RM&&!window.__bg2&&!window.__cxCover&&(!lastBg||now-lastBg>(MOBW?42:33))){lastBg=now;drawBg(T,now)}}
if(RM)drawBg(0,0);requestAnimationFrame(fx);

$$('img').forEach(function(im){if(!im.closest('#top')){if(!im.loading||im.loading==='auto')im.loading='lazy';im.decoding='async'}});
/* rail: wandering offsets like the earlier versions */
(function(){var OX=[0,-24,-28,0,-16,-6,-10,0,0,-24,0,-2,-22];document.querySelectorAll('.rail a').forEach(function(a,i){a.style.setProperty('--ox',(OX[i%OX.length])+'px');a.style.setProperty('--dl',(-i*.7).toFixed(1)+'s')})})();

/* section jumps: land on the section's content, with a full-screen transition between "pages" */
(function(){
var G=window.gsap,ORDER=['top','places','why','cities','match','services','route','pathway','intake','unis','stories','faq','book'];
function absTop(el){var t=0;while(el){t+=el.offsetTop;el=el.offsetParent}return t}
function targetY(id){var s=document.getElementById(id);if(!s)return null;if(id==='top')return 0;
 var sec=s.closest('section')||s,k=sec.querySelector('.k')||sec,cs=getComputedStyle(sec);
 var top=absTop(k),end=absTop(sec)+sec.offsetHeight-parseFloat(cs.paddingBottom||0),h=end-top,nav=104,avail=innerHeight-nav-16;
 var y=h<=avail?top-nav-(avail-h)/2:top-nav;
 if(sec!==s&&s!==k){var t2=absTop(s)-nav;if(t2>y+innerHeight*.5)y=t2}
 return Math.max(0,Math.round(y))}
/* overlay: 6 columns that sweep up, a title card, then sweep away */
var ov=document.createElement('div');ov.className='pt';ov.setAttribute('aria-hidden','true');
ov.innerHTML='<div class="pt-cols">'+'<i></i><i></i><i></i><i></i><i></i><i></i>'+'</div><div class="pt-lab"><span class="pt-n mono"></span><b class="pt-t"></b><span class="pt-bar"><i></i></span></div>';
document.body.appendChild(ov);
var cols=Array.prototype.slice.call(ov.querySelectorAll('.pt-cols i')),busy=false;
function secOf(id){var e=document.getElementById(id);var sec=e&&(e.closest('section')||e);var sid=sec&&sec.id;return ORDER.indexOf(sid)>=0?sid:(ORDER.indexOf(id)>=0?id:null)}
function jump(y){var h=document.documentElement,b=h.style.scrollBehavior;h.style.scrollBehavior='auto';scrollTo(0,y);h.style.scrollBehavior=b}
function go(id){var y=targetY(id);if(y===null)return false;
 var far=Math.abs(y-scrollY)>innerHeight*1.2;
 if(!G||RM||!far||busy){scrollTo({top:y,behavior:RM?'auto':'smooth'});return true}
 busy=true;var sid=secOf(id)||id,m=(typeof MOOD!=='undefined'&&MOOD[sid])||null,acc=m?m[1]:'#F2A93B',bg=m?m[0]:'#0D0B1E',n=ORDER.indexOf(sid);
 ov.style.setProperty('--pa',acc);ov.style.setProperty('--pb',bg);
 ov.querySelector('.pt-n').textContent=(n>=0?String(n).padStart(2,'0')+' / '+String(ORDER.length-1).padStart(2,'0'):'')+'  ·  Next stop';
 ov.querySelector('.pt-t').textContent=(typeof NAMES!=='undefined'&&NAMES[sid])||'';
 var dn=y>scrollY;ov.classList.add('pt-on');
 var tl=G.timeline({onComplete:function(){ov.classList.remove('pt-on');busy=false}});
 tl.set(cols,{transformOrigin:dn?'50% 100%':'50% 0%',scaleY:0})
  .to(cols,{scaleY:1,duration:.5,ease:'power3.in',stagger:{each:.05,from:dn?'start':'end'}})
  .fromTo(ov.querySelector('.pt-lab'),{autoAlpha:0,y:dn?40:-40},{autoAlpha:1,y:0,duration:.35,ease:'power3.out'},'-=.15')
  .fromTo(ov.querySelector('.pt-bar i'),{scaleX:0},{scaleX:1,duration:.45,ease:'power2.inOut'},'<')
  .add(function(){jump(y)})
  .to(ov.querySelector('.pt-lab'),{autoAlpha:0,y:dn?-30:30,duration:.3,ease:'power2.in'},'+=.12')
  .set(cols,{transformOrigin:dn?'50% 0%':'50% 100%'})
  .to(cols,{scaleY:0,duration:.55,ease:'power3.out',stagger:{each:.05,from:dn?'start':'end'}},'-=.05');
 return true}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||e.defaultPrevented)return;var id=a.getAttribute('href').slice(1);if(!id||id==='main-content')return;
 if(go(id)){e.preventDefault();try{history.replaceState(null,'','#'+id)}catch(_){}}});
/* scrolling between sections: each heading zooms and settles as its section arrives */
if(G&&window.ScrollTrigger&&!RM){G.registerPlugin(ScrollTrigger);
 document.querySelectorAll('main section .h2').forEach(function(h){G.fromTo(h,{scale:.86,opacity:.25,transformOrigin:'0% 50%'},{scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:h,start:'top 98%',end:'top 55%',scrub:.6}})});
 document.querySelectorAll('.mqb').forEach(function(b){G.fromTo(b,{clipPath:'inset(0 50% 0 50%)'},{clipPath:'inset(0 0% 0 0%)',ease:'none',scrollTrigger:{trigger:b,start:'top 100%',end:'top 60%',scrub:.5}})})}
})();

/* ================= site-wide motion: Lenis smooth scroll, magnetic buttons, velocity skew ================= */
(function(){
var G=window.gsap,STg=window.ScrollTrigger,Le=window.Lenis;
var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
/* 1. Lenis inertial scrolling, kept in sync with GSAP ScrollTrigger */
if(Le&&!RM&&fine){try{
 var lenis=new Le({lerp:.1,wheelMultiplier:1,smoothWheel:true});window.__lenis=lenis;
 if(G){G.ticker.add(function(t){lenis.raf(t*1000)});G.ticker.lagSmoothing(0)}else{(function r(t){lenis.raf(t);requestAnimationFrame(r)})(performance.now())}
 if(STg)lenis.on('scroll',STg.update);
 /* route smooth scroll requests from the rest of the page through Lenis */
 var native=window.scrollTo.bind(window);
 window.scrollTo=function(a,b){if(a&&typeof a==='object'){var y=a.top!=null?a.top:scrollY;if(a.behavior==='smooth'){lenis.scrollTo(y,{duration:1.2});return}lenis.scrollTo(y,{immediate:true,force:true});return}
  if(typeof b==='number'){lenis.scrollTo(b,{immediate:true,force:true});return}native(a,b)};
 Element.prototype.__siv=Element.prototype.scrollIntoView;
 Element.prototype.scrollIntoView=function(o){if(o&&typeof o==='object'&&o.behavior==='smooth'){var r=this.getBoundingClientRect(),y=scrollY+r.top-(o.block==='center'?(innerHeight-r.height)/2:100);lenis.scrollTo(Math.max(0,y),{duration:1.2});return}return this.__siv(o)};
 /* scroll areas inside the page keep their own scrolling */
 $$('.ph-body,.qx-list,.mn-l,[data-scroll-inner],.reel,.pw-mapw,.um-list').forEach(function(e){e.setAttribute('data-lenis-prevent','')});
}catch(e){}}
/* 2. magnetic buttons: CTAs lean toward the cursor and spring back */
if(G&&fine&&!RM){var sel='a.btn,.il-cta,.il-menu,[class$="-go"],[class*="-go "],.sb-nx,.sb-x,.tl-cta,.sb-hit';
 function mag(el){if(el._mag||el.classList.contains('sb-hit'))return;el._mag=1;var xT=G.quickTo(el,'x',{duration:.5,ease:'power3.out'}),yT=G.quickTo(el,'y',{duration:.5,ease:'power3.out'});
  el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();xT((e.clientX-r.left-r.width/2)*.28);yT((e.clientY-r.top-r.height/2)*.35)});
  el.addEventListener('pointerleave',function(){xT(0);yT(0)})}
 $$(sel).forEach(mag);
 new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes&&Array.prototype.forEach.call(m.addedNodes,function(n){if(n.nodeType!==1)return;if(n.matches&&n.matches(sel))mag(n);n.querySelectorAll&&Array.prototype.forEach.call(n.querySelectorAll(sel),mag)})})}).observe(D.body,{childList:true,subtree:true})}
/* 3. scroll velocity: marquee bands lean with the speed of scrolling */
if(G&&!RM){var bands=$$('.mqb'),sk=0,lastY=scrollY,setters=bands.map(function(b){return G.quickTo(b,'skewY',{duration:.6,ease:'power3.out'})});
 G.ticker.add(function(){var v=window.__lenis?window.__lenis.velocity:(scrollY-lastY);lastY=scrollY;var t=Math.max(-5,Math.min(5,v*.25));if(Math.abs(t-sk)>.02){sk=t;setters.forEach(function(s){s(sk)})}})}
/* 4. photos and cards drift a touch slower than the page (depth) */
if(G&&STg&&!RM){$$('.um-map').forEach(function(el){G.fromTo(el,{yPercent:6},{yPercent:-6,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}})})}
})();

/* ================= background: section-tinted gradient (compositor-only), particle constellation (capable desktops),
   aurora australis + shooting stars. Tuned for 60fps: nothing here repaints while the page is scrolling. ================= */
(function(){
if(RM)return;
var lite=!!window.__lite;
function mix(a,b,t){var A=hex(a),B=hex(b);return 'rgb('+[0,1,2].map(function(i){return Math.round(A[i]+(B[i]-A[i])*t)}).join(',')+')'}
function grad(k){var m=MOOD[k]||MOOD.top,b=m[0],a=m[1];return 'radial-gradient(90% 70% at 72% 8%,'+mix(b,a,.30)+',transparent 62%),radial-gradient(80% 60% at 12% 92%,'+mix(b,a,.16)+',transparent 60%),linear-gradient(180deg,'+mix(b,'#000000',.15)+','+b+' 55%,'+mix(b,'#000000',.32)+')'}
var layer=D.createElement('div');layer.className='bg2';layer.setAttribute('aria-hidden','true');
layer.innerHTML='<i class="bg2-g on"></i><i class="bg2-g"></i><div id="bg2p"></div><i class="bg2-vig"></i><i class="bg2-ss"></i>';
D.body.insertBefore(layer,D.body.firstChild);
var G2=$$('.bg2-g',layer),gi=0,last='top';G2[0].style.background=grad('top');
/* 1. section gradient: two layers cross-fade on opacity, a slow drift runs on transform. Both stay on the compositor. */
setInterval(function(){if(curSec===last||!MOOD[curSec])return;last=curSec;var nx=G2[1-gi];nx.style.background=grad(curSec);nx.classList.add('on');G2[gi].classList.remove('on');gi=1-gi},300);
window.__bg2=true;D.body.classList.add('bg2-on');
/* 2. tsParticles constellation: only on capable desktops, loaded after first paint, paused while scrolling */
var tp=null;
function startP(){var TP=window.tsParticles;if(!TP||lite||tp)return;
 TP.load({id:'bg2p',options:{fullScreen:{enable:false},background:{color:'transparent'},fpsLimit:30,detectRetina:false,
  particles:{number:{value:56,density:{enable:true,width:1400,height:900}},color:{value:['#F3EBDD','#F2A93B','#7FB2FF','#9FE3C9','#C8B6FF','#E8735A']},
   links:{enable:true,distance:150,color:'#F3EBDD',opacity:.11,width:1},move:{enable:true,speed:.3,direction:'none',outModes:{default:'out'},random:true},
   size:{value:{min:.6,max:2.2}},opacity:{value:{min:.2,max:.85},animation:{enable:true,speed:.4,sync:false}}},
  interactivity:{detectsOn:'window',events:{onHover:{enable:true,mode:['grab']},resize:{enable:true}},modes:{grab:{distance:190,links:{opacity:.5,color:'#F2A93B'}}}}}}).then(function(c){tp=c}).catch(function(){})}
function loadP(){if(lite)return;if(window.tsParticles){var go=function(){window.loadSlim?window.loadSlim(window.tsParticles).then(startP):startP()};go();return}
 var s=D.createElement('script');s.src='tsparticles.slim.bundle.min.js';s.async=true;s.onload=function(){window.loadSlim?window.loadSlim(window.tsParticles).then(startP):startP()};D.head.appendChild(s)}
if('requestIdleCallback' in window)requestIdleCallback(loadP,{timeout:2500});else setTimeout(loadP,1500);
addEventListener('tutee:scroll',function(e){if(!tp)return;try{e.detail?tp.pause():tp.play()}catch(_){}});
addEventListener('tutee:lite',function(){lite=true;if(tp){try{tp.destroy()}catch(_){}tp=null}$('#bg2p').innerHTML=''});
/* 3. shooting stars: one DOM streak animated on transform (crisp at any resolution, zero repaint) */
var ss=$('.bg2-ss',layer);
(function shoot(){setTimeout(function(){if(!D.hidden&&!window.__scrolling){var a=18+Math.random()*24;ss.style.left=(Math.random()*60)+'%';ss.style.top=(Math.random()*30)+'%';ss.style.setProperty('--a',a+'deg');ss.classList.remove('go');void ss.offsetWidth;ss.classList.add('go')}shoot()},4500+Math.random()*7000)})();
})();

/* ================= aurora australis (simplex-noise). Drawn at quarter resolution so the browser's upscale does the
   blur for free; 24fps; frozen while the page scrolls or the tab is hidden. ================= */
(function(){
var SN=window.SimplexNoise;if(RM||!SN||!D.querySelector('.bg2'))return;
var noise=new SN('tutee'),cv=D.createElement('canvas');cv.className='bg2-aur';D.querySelector('.bg2').insertBefore(cv,D.getElementById('bg2p'));
var cx=cv.getContext('2d',{alpha:true}),W=0,H=0,S=window.__lite?.18:.25,mxp=-1,sprites={},last=0,vis=true,FPS=window.__lite?50:42;
function size(){W=Math.ceil(innerWidth*S);H=Math.ceil(innerHeight*S);cv.width=W;cv.height=H}
function sprite(col){if(sprites[col])return sprites[col];var c=D.createElement('canvas');c.width=1;c.height=128;var g=c.getContext('2d'),gr=g.createLinearGradient(0,0,0,128),rgb=hex(col);
 gr.addColorStop(0,'rgba('+rgb+',0)');gr.addColorStop(.62,'rgba('+rgb+',.55)');gr.addColorStop(.8,'rgba('+rgb+',.9)');gr.addColorStop(1,'rgba('+rgb+',0)');g.fillStyle=gr;g.fillRect(0,0,1,128);return sprites[col]=c}
var rz=0;addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(size,150)});size();
addEventListener('pointermove',function(e){mxp=e.clientX*S},{passive:true});
D.addEventListener('visibilitychange',function(){vis=!D.hidden});
addEventListener('tutee:lite',function(){S=.18;FPS=50;size()});
function frame(now){requestAnimationFrame(frame);if(!vis||window.__scrolling||now-last<FPS)return;last=now;var t=now/1000;
 cx.globalCompositeOperation='source-over';cx.clearRect(0,0,W,H);cx.globalCompositeOperation='lighter';
 var acc=(MOOD[curSec]||MOOD.top)[1],cols=[acc,'#9FE3C9','#C8B6FF'],step=Math.max(2,Math.round(W/160)),R=window.__lite?2:3;
 for(var r=0;r<R;r++){var sp=sprite(cols[r]),base=H*(.12+.09*r);
  for(var x=0;x<W;x+=step){var n=noise.noise3D(x*.00175/S,r*7.3,t*.07),n2=noise.noise3D(x*.0055/S,r*3.1+40,t*.18),y=base+n*H*.09,len=H*(.16+.12*(n2+1)*.5),boost=mxp<0?1:1+.9*Math.exp(-Math.pow((x-mxp)/(W*.08),2));
   cx.globalAlpha=(r?.14:.2)*boost*(.55+.45*(n2+1)*.5);cx.drawImage(sp,x,y-len,step+1,len*1.15)}}}
requestAnimationFrame(frame);
})();

/* ================= Tutee AI =================
   The answer engine is ported from the Tutee Finland page (tutee-ai.js): it runs in the browser, folds and
   stems the question, maps synonyms, and scores a knowledge base written from this page's own copy with
   weighted TF-IDF. Below its confidence threshold it hands over, and here the hand-over goes to Claude
   (the artifact `sample` capability), primed with the same page facts. If Claude isn't available the
   engine points to a counsellor instead, exactly like the Finland site. */
(function(){
/* ---------- text helpers (from the Finland engine) ---------- */
function fold(s){s=String(s==null?'':s).toLowerCase();if(s.normalize)s=s.normalize('NFD').replace(/[\u0300-\u036f]/g,'');return s.replace(/[’'`]/g,'').replace(/[^a-z0-9+#.$]+/g,' ').replace(/\s+/g,' ').trim()}
var STOP={};('a an the and or of to in on at for from by with about into over is are was were be been being am do does did done can could should would will shall may might must i me my mine we us our you your yours it its this that these those there here what which who whom whose how when where why if then than so as not no yes please tell know want like get got give need any some all each more most much many just also too very really kind sort thing things anything something someone anyone ok okay hi hello hey thanks thank had have has having im ive dont doesnt isnt let lets go going way').split(' ').forEach(function(w){STOP[w]=1});
function stem(w){if(w.length>5&&/ies$/.test(w))return w.slice(0,-3)+'y';if(w.length>5&&/ing$/.test(w))return w.slice(0,-3);if(w.length>4&&/ed$/.test(w))return w.slice(0,-2);if(w.length>4&&/es$/.test(w)&&!/(ss|us)es$/.test(w))return w.slice(0,-2);if(w.length>3&&/s$/.test(w)&&!/(ss|us|is)$/.test(w))return w.slice(0,-1);return w}
var SYN={permit:'visa',visas:'visa',subclass:'visa','500':'visa',homeaffairs:'visa',immigration:'visa',
 fee:'tuition',fees:'tuition',cost:'cost',costs:'cost',price:'cost',expensive:'cost',cheap:'cost',afford:'cost',money:'cost',budget:'cost',living:'cost',
 job:'work',jobs:'work',employment:'work',earn:'work',earning:'work',salary:'work',parttime:'work',hours:'work',
 pr:'permanent',citizenship:'permanent',settle:'permanent',residency:'permanent',
 '485':'graduate',psw:'graduate',poststudy:'graduate',tgv:'graduate',graduation:'graduate',graduating:'graduate',
 sid:'sponsor',sponsored:'sponsor',sponsorship:'sponsor',482:'sponsor',
 spouse:'partner',wife:'partner',husband:'partner',dependant:'family',dependent:'family',dependents:'family',dependants:'family',
 kid:'children',kids:'children',child:'children',son:'children',daughter:'children',
 uni:'university',unis:'university',college:'university',colleges:'university',institution:'university',institutions:'university',
 programme:'course',programmes:'course',program:'course',programs:'course',degree:'course',degrees:'course',courses:'course',major:'course',
 scholarships:'scholarship',grant:'scholarship',grants:'scholarship',waiver:'scholarship',bursary:'scholarship',funding:'fund',funds:'fund',finance:'fund',financial:'fund',
 loans:'loan',lender:'loan',lenders:'loan',bank:'loan',banks:'loan',collateral:'loan',
 house:'accommodation',housing:'accommodation',hostel:'accommodation',dorm:'accommodation',apartment:'accommodation',stay:'accommodation',rent:'accommodation',
 english:'language',ielts:'language',toefl:'language',pte:'language',duolingo:'language',cambridge:'language',test:'language',exam:'language',
 apply:'application',applying:'application',admission:'application',admissions:'application',deadline:'application',deadlines:'application',intakes:'intake',semester:'intake',trimester:'intake',
 counselor:'counsellor',advisor:'counsellor',adviser:'counsellor',expert:'counsellor',consultant:'counsellor',
 phone:'contact',call:'contact',email:'contact',mail:'contact',whatsapp:'contact',number:'contact',address:'contact',office:'contact',reach:'contact',
 weather:'climate',summer:'climate',winter:'climate',hot:'climate',
 ranking:'rank',rankings:'rank',ranked:'rank',best:'rank',top:'rank',qs:'rank',
 oshc:'insurance',medical:'insurance',health:'insurance',
 gs:'genuine',gte:'genuine',sop:'genuine',statement:'genuine',
 coe:'enrolment',enrollment:'enrolment',cricos:'enrolment',offer:'enrolment',
 refused:'refusal',rejected:'refusal',rejection:'refusal',denied:'refusal'};
function tokens(s){return fold(s).split(' ').filter(function(w){return w&&!STOP[w]}).map(function(w){return SYN[w]||stem(w)})}
function e2(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
var WA_N='917358364959',WA='[WhatsApp us](https://wa.me/'+WA_N+')';
/* markdown subset -> safe HTML: **bold**, *em*, [text](link), "- " bullets. Links only to page sections and our own channels. */
function render(md){var lines=String(md).split('\n'),out=[],list=false;
 lines.forEach(function(line){var bullet=/^\s*[-•*]\s+/.test(line);if(bullet&&!list){out.push('<ul>');list=true}if(!bullet&&list){out.push('</ul>');list=false}
  var h=e2(line.replace(/^\s*[-•*]\s+/,'')).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/(^|[^*])\*([^*\s][^*]*)\*/g,'$1<em>$2</em>')
   .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,function(m,t,u){u=u.replace(/&amp;/g,'&');var local=/^#[a-z]/.test(u),own=/^https:\/\/(wa\.me|www\.tuteeconnect\.com|tuteeconnect\.com)\//.test(u);if(!local&&!own&&!/^(tel|mailto):/.test(u))return t;return '<a href="'+e2(u)+'"'+(own?' target="_blank" rel="noopener"':'')+'>'+t+'</a>'});
  out.push(bullet?'<li>'+h+'</li>':(h?h+'<br>':'<br>'))});
 if(list)out.push('</ul>');return out.join('').replace(/(<br>)+$/,'').replace(/<br>(<ul>)/g,'$1').replace(/(<\/ul>)<br>/g,'$1')}
/* ---------- page data ---------- */
function lenders(){var s={},L=[];$$('.ln-src img,#ln .lo-t img').forEach(function(im){var a=im.getAttribute('alt');if(a&&!s[a]){s[a]=1;L.push(a)}});return L}
function due(i,k){var d=new Date(INT[i][3]);d.setMonth(d.getMonth()-MS[k][0]);return d}
/* ---------- knowledge base: written from this page's copy ---------- */
var KB=[
 {id:'visa',t:'Student visa (subclass 500)',k:'visa student 500 apply process how documents confirmation enrolment coe charge oshc funds interview',
  a:"Australia's student visa is the **subclass 500**. Once you accept an offer:\n- Your university issues a **Confirmation of Enrolment (CoE)** for a CRICOS-registered course\n- You apply online and pay the visa charge, **from A$2,500**\n- Take out **Overseas Student Health Cover (OSHC)**\n- Show **A$29,710 a year** for living costs on top of tuition\n- Complete health and character checks\n\nThere is **no routine interview**: your written file carries the decision. See [Services](#services).",c:['What is the Genuine Student requirement?','How much money do I need to show?','Can my family come with me?'],s:'services'},
 {id:'genuine',t:'Genuine Student requirement',k:'genuine student gs gte statement answers sop written questions',
  a:"The **Genuine Student (GS)** requirement is a set of written answers in your visa application about your study plans, your course choice and your circumstances. There is **no routine interview**, so these answers carry a lot of weight. We draft them **with you**, the way Home Affairs reads them.",c:['How does the student visa work?','I had a visa refusal before'],s:'services'},
 {id:'insurance',t:'Overseas Student Health Cover',k:'oshc insurance health medical cover',
  a:"Every student visa holder needs **Overseas Student Health Cover (OSHC)** for the length of the visa, and your partner and children need it too. We sort it out **early**, alongside your funds evidence.",c:['How does the student visa work?'],s:'faq'},
 {id:'funds',t:'Money to show for the visa',k:'funds money show proof financial bank balance living cost how much',
  a:"For the student visa you show **A$29,710 a year** for living costs, **on top of your course fees and travel**. Extra amounts apply for **each family member**. We build funds evidence that meets the rules, and our [loan partners](#ln) can help.",c:['Can I get an education loan?','Can my family come with me?'],s:'faq'},
 {id:'costs',t:'Tuition fees and costs',k:'tuition cost fees expensive budget price afford living',
  a:"Tuition depends on the **university and course**, so I won't quote a number. What the page does list:\n- Student visa charge **from A$2,500**\n- **A$29,710 a year** to show for living costs, plus extra for each family member\n- **OSHC** health cover for your whole stay\n\nScholarships, bursaries and [education loans](#ln) can cover a big part. A counsellor can price your exact shortlist: "+WA+".",c:['What scholarships are there?','Can I get an education loan?'],s:'faq'},
 {id:'requirements',t:'What you need to study in Australia',k:'requirement requirements eligibility eligible need documents admission criteria qualify transcripts passport reference',
  a:"You typically need:\n- A **valid passport**\n- Strong **academic transcripts**\n- An **English test** (see below)\n- **Academic references**\n- Well-prepared **Genuine Student** answers\n\nSome MBAs also ask for a **GMAT** score or work experience.",c:['Which English tests are accepted?','How do I apply?'],s:'faq'},
 {id:'language',t:'English tests',k:'english language ielts toefl pte cambridge test score band',
  a:"**IELTS Academic 6.0** is the common bar for a bachelor's and **6.5** for most postgraduate courses. **TOEFL iBT**, **PTE Academic** and **Cambridge C1 Advanced** are also accepted. Each university sets its exact score, and our [test prep](#services) targets yours.",c:['What do I need to study in Australia?'],s:'services'},
 {id:'work',t:'Working while you study',k:'work part time job hours fortnight while studying earn',
  a:"On a student visa you can work **up to 48 hours a fortnight** during term and **unlimited hours in scheduled course breaks**. We help you find permitted part-time work once you land.",c:['What happens after I graduate?','Can my partner work?'],s:'faq'},
 {id:'graduate',t:'Temporary Graduate visa (subclass 485)',k:'graduate 485 post study work after graduation stay years',
  a:"The **Temporary Graduate visa (subclass 485)** lets you work for **any employer, with no sponsor**:\n- **2 years** after a bachelor's or coursework master's\n- **3 years** after a research master's or PhD\n- Apply **within 6 months** of finishing\n- The age limit for this stream is **35**\n\nSee the [pathway](#pathway).",c:['How do I get permanent residence?','Can I work while studying?'],s:'pathway'},
 {id:'sponsor',t:'Skills in Demand visa',k:'skills demand sponsor employer sponsored core occupation list income',
  a:"After the graduate visa, an employer can sponsor you on the **Skills in Demand visa** for an occupation on the **Core Skills Occupation List**. An **income threshold** applies. It's the employer-sponsored line on the [pathway](#pathway).",c:['How do I get permanent residence?'],s:'pathway'},
 {id:'permanent',t:'Permanent residence',k:'permanent residence pr settle citizenship stay forever',
  a:"Two common routes to **permanent residence**:\n- **Employer nomination** after two years on a Skills in Demand visa\n- A **points-tested skilled visa**\n\nWith PR you live and work permanently, and your family can join. Compare both routes on the [pathway](#pathway).",c:['What is the Skills in Demand visa?','What happens after I graduate?'],s:'pathway'},
 {id:'scholarship',t:'Scholarships',k:'scholarship merit bursary grant waiver faculty',
  a:"We match you to **merit and faculty scholarships** and **bursaries**, and flag scholarship-friendly courses when we build your shortlist. Amounts and deadlines vary by university, so a counsellor checks the current ones for your profile.",c:['Can I get an education loan?','Evaluate my profile'],s:'services'},
 {id:'loan',t:'Education loans',k:'loan lender bank collateral non collateral finance partner',
  a:'LOANS',c:['How much money do I need to show?','Talk to a counsellor'],s:'loans'},
 {id:'family',t:'Bringing your family',k:'family partner children spouse bring come join dependant',
  a:"Yes. Your **partner** and **children under 18** are included in **your own subclass 500** application from the start. You show extra funds for each family member, and we help with school enrolment for your children.",c:['Can my partner work?','How much money do I need to show?'],s:'faq'},
 {id:'partnerwork',t:'Your partner working',k:'partner spouse work hours',
  a:"Your partner can work **48 hours a fortnight**, and **unlimited hours** once you're enrolled in a **master's or doctorate**.",c:['Can my family come with me?'],s:'faq'},
 {id:'accommodation',t:'Accommodation and pre-departure',k:'accommodation housing stay rent pre departure arrival airport briefing',
  a:"We secure **safe student housing near campus** through our partners, run **pre-departure briefings** on culture, classes, packing and arrival, and give you an **airport-to-campus checklist** for week one.",c:['Can I work while studying?'],s:'services'},
 {id:'application',t:'How to apply',k:'apply application how process steps offer shortlist',
  a:"Our [5-step route](#route):\n- **Discover** (week 1): goals, budget, scores and timeline\n- **Apply** (weeks 2–8): statements and Genuine Student answers drafted together, every document checked\n- **Visa**: your subclass 500, prepared properly the first time\n- **Fly**: housing and a pre-departure briefing\n- **Thrive**: part-time work, the graduate visa and a route to PR",c:['Which intake should I choose?','Evaluate my profile'],s:'route'},
 {id:'intake',t:'Intakes',k:'intake semester trimester february july november start month when',a:'INTAKE',c:['How do I apply?','Evaluate my profile'],s:'intake'},
 {id:'why',t:'Why study in Australia',k:'why australia worth reasons benefits good',
  a:"Four numbers from the page:\n- **37** Australian universities in the **QS World University Rankings 2027**, with UNSW Sydney **19th in the world**\n- **2–3 years** of post-study work on the subclass 485\n- **48 hours** of work a fortnight while you study\n- **8 study cities**, coast to coast",c:['Show me the top universities','Which city suits me?'],s:'why'},
 {id:'cities',t:'Study cities',k:'city cities where live sydney melbourne brisbane perth adelaide canberra hobart darwin',a:'CITIES',c:['Which city suits me?','Universities in Melbourne'],s:'cities'},
 {id:'match',t:'Choosing a city',k:'which city suits choose best city for me match',
  a:"Try [City match](#match): turn up what matters to you (jobs, beaches, budget, quiet) and all eight cities re-rank live.",c:['Tell me about Perth','Tell me about Melbourne'],s:'match'},
 {id:'services',t:'Our services',k:'services help offer what do you do',a:'SERVICES',c:['Tell me about documentation','Tell me about part-time job support'],s:'services'},
 {id:'refusal',t:'Previous visa refusal',k:'refusal refused rejected denied previous before history',
  a:"A previous refusal doesn't have to end your plans. One of our students, **Sneha R.**, had a refusal and was approved after her coordinator rebuilt every document. Your history has to be declared honestly and addressed properly, so a counsellor should review your case: "+WA+".",c:['Talk to a counsellor','What is the Genuine Student requirement?'],s:'stories'},
 {id:'climate',t:'Weather',k:'weather climate hot cold season summer winter',
  a:"Australia is big: **Brisbane and Darwin** are subtropical to tropical, **Sydney and Perth** are warm and coastal, while **Melbourne, Canberra and Hobart** have cooler winters. Seasons are the reverse of India's calendar, so the February intake starts in late summer.",c:['Tell me about the cities'],s:'cities'},
 {id:'timezone',t:'Time difference',k:'time zone difference india call family',
  a:"Sydney is **4.5–5.5 hours ahead of India** depending on daylight saving, and **Perth is just 2.5 hours ahead**, the Australian time zone closest to India. The [cities](#cities) section shows the live time in each.",c:['Tell me about Perth'],s:'cities'},
 {id:'reviews',t:'Student stories',k:'review reviews stories testimonial students experience',
  a:"From [our students](#stories): Priya got her visa **first time** with GS answers built our way, Rahul's **non-collateral loan** came through our banking partners, and Siddharth won a **full tuition waiver** for his PhD.",c:['Can I get an education loan?','I had a visa refusal before'],s:'stories'},
 {id:'contact',t:'Contact Tutee Connect',k:'contact phone whatsapp email call number reach office',
  a:"- **Phone / WhatsApp:** +91 7358364959 ("+WA+")\n- **Email:** [info@tuteeconnect.com](mailto:info@tuteeconnect.com)\n- **Web:** [tuteeconnect.com](https://www.tuteeconnect.com/)\n\nOr [book a free call](#book) and a senior counsellor calls you back.",c:['Evaluate my profile'],s:'book'},
 {id:'evaluation',t:'Free consultation',k:'free consultation evaluation evaluate profile book call counsellor',
  a:"Your first consultation is **free**: a senior counsellor reviews your profile, shortlists courses and maps your visa and PR route. [Book a free call](#book), or I can take your details right here.",c:['Talk to a counsellor'],s:'book'},
 {id:'ai',t:'About Tutee AI',k:'who are you bot ai robot human',
  a:"I'm **Tutee AI**. I answer instantly from this page, and for anything it doesn't cover I ask **Claude**, with the same page facts in hand. I never make up fees or visa outcomes; for anything personal, a human counsellor takes over.",c:['Talk to a counsellor'],s:''},
 {id:'destinations',t:'Other destinations',k:'other countries destinations finland uk canada usa germany ireland new zealand',
  a:"This page covers **Australia**, but Tutee Connect counsels for other destinations too, Finland among them. Tell a counsellor where you're considering: "+WA+".",c:['Why study in Australia?'],s:''}
];
/* dynamic answers */
function loanAns(){var L=lenders();return "We arrange **collateral and non-collateral education loans** through **"+L.length+" lending partners**"+(L.length?": "+L.join(', ')+'.':'.')+"\n\nLoans are matched to your course and the funds your visa needs. See [loan partners](#ln).";}
function cityAns(name){var c=CITIES.filter(function(x){return x[0].toLowerCase()===name})[0];if(!c)return null;var us=U.filter(function(u){return u[1]===c[0]});
 return {text:"**"+c[0]+"**, "+c[1]+": "+c[3]+"\n- "+c[4].join('\n- ')+(us.length?"\n\nRanked here: "+us.map(function(u){return '**'+u[0]+'** (QS #'+u[2]+')'}).join(', ')+'.':'')+"\n\nMore in [Cities](#cities).",chips:['Which city suits me?','Universities in '+(c[0]==='Sydney'?'Melbourne':'Sydney')]}}
function citiesAns(){return "Eight study cities:\n"+CITIES.map(function(c){return '- **'+c[0]+'** ('+c[1]+'): '+c[4][0]}).join('\n')+"\n\nCompare them in [City match](#match).";}
function rankAns(city){var L=U.filter(function(u){return !city||u[1].toLowerCase()===city});if(!L.length)return null;return {text:(city?'Top-ranked universities in **'+L[0][1]+'**':"**Australia's top eight** in the QS World University Rankings 2027")+":\n"+L.map(function(u){return '- **'+u[0]+'**, '+u[1]+': **#'+u[2]+'** in the world'}).join('\n')+"\n\nExplore them on the [map](#unis).",chips:['Which city suits me?','How do I apply?']}}
function servicesAns(){var g={before:'Before you apply',visa:'Visa & money',after:'After you land'};return "**Nine services, one team:**\n"+SV.map(function(s,i){return '- **'+s[1]+'**: '+s[2]}).join('\n')+"\n\nOpen any card in [Services](#services).";}
function serviceAns(q){for(var i=0;i<SV.length;i++){var n=fold(SV[i][1]),first=n.split(' ')[0];if((' '+q+' ').indexOf(' '+n+' ')>-1||(first.length>5&&new RegExp('\\b'+first+'\\b').test(q)&&/\bservice|tell me about|help with\b/.test(q)))return {text:'**'+SV[i][1]+'**: '+SV[i][2]+'\n- '+SV[i][3].join('\n- '),chips:['What services do you offer?','Talk to a counsellor']}}return null}
function intakeAns(which){var now=new Date(),L=which==null?[0,1,2]:[which];
 return {text:(which==null?"Three intakes on the page:\n"+INT.map(function(t){return '- **'+t[0]+'**, '+t[1]+': '+t[2]}).join('\n')+"\n\n":'')+L.map(function(i){var t=INT[i];return '**'+t[0]+' ('+t[1]+')**, classes from **'+fmt(t[3])+'**. Plan backwards:\n'+MS.map(function(m,k){var d=due(i,k);return '- '+m[1]+': by **'+fmt(d)+'**'+(d<now?' (already passed, talk to us)':'')}).join('\n')}).join('\n\n')+"\n\nThe [departures board](#intake) tracks it for you.",chips:['How do I apply?','Evaluate my profile']}}
/* index */
var DF={},KBI=[];KB.forEach(function(e){var w={};tokens(e.t).forEach(function(x){w[x]=(w[x]||0)+3});tokens(e.k).forEach(function(x){w[x]=(w[x]||0)+2});tokens(e.a.replace(/\[[^\]]*\]\([^)]*\)/g,' ')).forEach(function(x){w[x]=(w[x]||0)+.4});Object.keys(w).forEach(function(x){DF[x]=(DF[x]||0)+1});KBI.push({e:e,w:w})});
var NDOC=KB.length;
function kbSearch(q){var qt=tokens(q),seen={};qt=qt.filter(function(x){if(seen[x])return false;seen[x]=1;return true});
 var sc=KBI.map(function(d){var s=0;qt.forEach(function(x){if(d.w[x])s+=d.w[x]*Math.log(1+NDOC/DF[x])});return {e:d.e,s:s,w:d.w}}).sort(function(a,b){return b.s-a.s});
 var best=sc[0],tot=0,got=0;qt.forEach(function(x){var idf=Math.log(1+NDOC/(DF[x]||.5));tot+=idf;if(best&&best.w[x])got+=idf});return {best:best,cover:tot?got/tot:0,qn:qt.length}}
function kbAns(e){var a=e.a==='LOANS'?loanAns():e.a==='CITIES'?citiesAns():e.a==='SERVICES'?servicesAns():e.a==='INTAKE'?null:e.a;if(e.a==='INTAKE')return intakeAns(null);return {text:a,chips:e.c||[]}}
/* hand-overs (from the Finland engine, adapted) */
var NEEDS=[[/\b(how far|distance (from|to|between)|travel time|commut\w*|minutes? (from|to|away)|km (from|to|away))\b/,null,"I can't give reliable distances or travel times: they depend on the exact campus and where you'd live."],
 [/\b\d{2}(\.\d+)? ?(%|percent)|\b(percentage|marks|cgpa|gpa|backlogs?|gap year|study gap|year gap|education gap)\b/,/\b(admission|admit|get in|get into|eligib\w*|accept\w*|apply|qualify|enough|chances?|possible)\b/,"Whether your marks are enough depends on the university, the course and the rest of your profile, so I won't guess."],
 [/\b(will i|can i|chance\w*|guarantee\w*)\b.*\b(visa|approved|approval|get the visa)\b/,null,"No one can promise a visa outcome; it depends on your whole file."],
 [/\b(online (course|degree|study|classes)|distance (learning|education)|study online)\b/,null,"A student visa is for full-time study on campus, and this page doesn't cover online courses."]];
function needsC(q){for(var i=0;i<NEEDS.length;i++){var n=NEEDS[i];if(n[0].test(q)&&(!n[1]||n[1].test(q)))return n[2]}return ''}
var FALLBACK=['How does the student visa work?','What happens after I graduate?','Which intake should I choose?','Talk to a counsellor'];
var ctx={city:null};
var UAL=[['unsw','new south wales'],['unimelb','university of melbourne','melbourne uni'],['usyd','university of sydney','sydney uni'],['anu','australian national'],['monash'],['uq','university of queensland'],['uwa','university of western australia'],['adelaide university','university of adelaide','adelaide uni']];
function engine(raw){var q=fold(raw);
 if(!q)return {text:'Ask me anything about studying in Australia.',chips:FALLBACK,sure:true};
 if(/^(hi|hello|hey|hai|hii+|good (morning|afternoon|evening)|namaste|vanakkam|gday|g day)\b/.test(q)&&q.split(' ').length<=4)return {text:"Hello! 👋 What would you like to know about studying in Australia? Ask about universities, cities, visas, intakes, money, work or family, or anything else on this page.",chips:FALLBACK,sure:true};
 if(/^(thanks|thank you|thx|ty|great|awesome|cool|ok|okay|nice|perfect)\b/.test(q)&&q.split(' ').length<=4)return {text:"You're welcome! Anything else I can help with?",chips:['Evaluate my profile','Which intake should I choose?'],sure:true};
 if(/^(bye|goodbye|see you|cya)\b/.test(q))return {text:'Good luck with your Australia plans! A counsellor is a message away whenever you need one.',chips:['Evaluate my profile'],sure:true};
 var un=needsC(q);if(un)return {text:un+' A counsellor can check it for you: '+WA+', or [book a free call](#book).',chips:['Talk to a counsellor','Evaluate my profile'],sure:true,counsellor:true};
 var city=null;CITIES.forEach(function(c){if(new RegExp('\\b'+c[0].toLowerCase()+'\\b').test(q))city=c[0].toLowerCase()});if(city)ctx.city=city;
 var uni=null;U.forEach(function(u,i){(UAL[i]||[]).concat([fold(u[0])]).forEach(function(al){if(!uni&&new RegExp('\\b'+al+'\\b').test(q))uni=u})});
 var money=/\b(fee|fees|tuition|how much|cost|costs|price|expensive|cheap|afford\w*|lakh|rupees|inr|aud|money)\b/.test(q);
 if(money&&/\b(show|funds?|bank balance|proof|evidence)\b/.test(q)){var fa=kbAns(KB.filter(function(e){return e.id==='funds'})[0]);fa.sure=true;return fa}
 if(money&&!/\b(loan|scholarship|bursar)/.test(q)){var co=kbAns(KB.filter(function(e){return e.id==='costs'})[0]);co.sure=true;if(uni)co.text='Tuition at **'+uni[0]+'** depends on the course. '+co.text;return co}
 if(/\b(intakes?|intak\w*|semesters?|trimesters?|deadlines?|start dates?|when (should|can|do) i (apply|start))\b/.test(q)||/\b(feb\w*|jul\w*|nov\w*)\b.*\b(intake|start|apply)/.test(q)){var w=/\bfeb/.test(q)?0:/\bjul/.test(q)?1:/\bnov/.test(q)?2:null;var ia=intakeAns(w);ia.sure=true;return ia}
 if(uni){var r={text:'**'+uni[0]+'** in **'+uni[1]+'** is ranked **#'+uni[2]+' in the world** in the QS World University Rankings 2027. Courses, fees and entry scores vary by program, so a counsellor checks them for your profile. Explore it on the [universities map](#unis).',chips:['Tell me about '+uni[1],'Show me the top universities'],sure:true};return r}
 if(/\b(rank|ranked|ranking|rankings|top|best|qs|good)\b/.test(q)&&/\b(universit\w*|unis?|colleges?)\b/.test(q)){var ra=rankAns(city);if(ra){ra.sure=true;return ra}}
 if(city&&/\b(hot|cold|weather|climate|rain\w*|temperature|humid\w*|season\w*)\b/.test(q)){var cl=kbAns(KB.filter(function(e){return e.id==='climate'})[0]);cl.sure=true;return cl}
 if(city&&(q.split(' ').length<=3||/\b(tell me about|life in|living in|study in|studying in|universit\w*|what is \w+ like|how is|why)\b/.test(q))){var ca=cityAns(city);if(ca){ca.sure=true;return ca}}
 if(/\b(parents?|mother|father|mom|mum|dad|siblings?|brother|sister)\b/.test(q)&&/\b(bring|come|join|visit|family|with me)\b/.test(q))return {text:"The family route on this page covers your **partner** and **children under 18**, added to your own subclass 500. Parents and siblings aren't covered by that route; if they'd like to visit, a counsellor can talk you through the options.",chips:['Can my family come with me?','Talk to a counsellor'],sure:true};
 var sv=serviceAns(q);if(sv){sv.sure=true;return sv}
 var hit=kbSearch(q);
 if(hit.best&&hit.best.s>=3&&hit.cover>=.42){var res=kbAns(hit.best.e);res.sure=true;res.score=hit.best.s;return res}
 return {text:"I'm not sure about that one from what's on this page, and I'd rather not guess. A Tutee Connect counsellor can answer it properly: "+WA+", or I can take your details for a call back.\n\nHere's what I can help with right away:",chips:FALLBACK,sure:false,near:hit.best&&hit.best.s>1?hit.best.e:null}}
/* ---------- Claude, for everything the engine isn't sure about ---------- */
var SAMPLE=null,claudeOK=true;
if(window.claude&&window.claude.use)window.claude.use('sample').then(function(s){SAMPLE=s;if(s)D.body.classList.add('tai-claude')}).catch(function(){});
function facts(){var t=[];KB.forEach(function(e){var a=kbAns(e);t.push('## '+e.t+'\n'+a.text.replace(/\[([^\]]+)\]\([^)]*\)/g,'$1'))});
 t.push('## Universities (QS World University Rankings 2027)\n'+U.map(function(u){return u[0]+', '+u[1]+': #'+u[2]}).join('\n'));
 t.push('## Cities\n'+CITIES.map(function(c){return c[0]+' ('+c[1]+'): '+c[3]+' '+c[4].join('; ')}).join('\n'));
 t.push('## Visa pathway\n'+ST.map(function(s){return s[0]+': '+s[1]+'. '+s[2]+' ('+s[3].join('; ')+')'}).join('\n'));
 t.push('## Services\n'+SV.map(function(s){return s[1]+': '+s[2]+' ('+s[3].join('; ')+')'}).join('\n'));
 t.push('## FAQ\n'+FQ.map(function(f){return 'Q: '+f[1]+'\nA: '+f[2]}).join('\n'));
 t.push('## Today\n'+new Date().toDateString());return t.join('\n\n')}
var FACTS=null;
function askClaude(hist,q,onText,signal){if(!FACTS)FACTS=facts();
 var convo=hist.slice(-6).map(function(m){return (m.r==='me'?'Student: ':'Tutee AI: ')+m.t.replace(/\n+/g,' ').slice(0,600)}).join('\n');
 var prompt="You are Tutee AI, the assistant on Tutee Connect's \"Study in Australia\" page. Tutee Connect is a study and immigration counselling firm for students from India (phone/WhatsApp +91 7358364959, info@tuteeconnect.com, free first consultation).\n\n"+
  "Answer the student's latest message. Use the PAGE FACTS first; you may add widely known, stable general knowledge about studying and living in Australia. Rules:\n- Never invent fees, scores, dates, quotas or visa rules that are not in the PAGE FACTS. If a precise figure isn't there, say it varies and a counsellor will confirm it.\n- Never promise admission or visa outcomes.\n- If the message has nothing to do with studying, working, visas, money, life or moving to Australia, or Tutee Connect, say in one sentence that you can only help with that, and suggest a related question.\n- Warm, plain English. Under 130 words.\n- Formatting: **bold**, lines starting with \"- \" for bullets, and links only to page sections: [Why Australia](#why), [Cities](#cities), [City match](#match), [Services](#services), [The route](#route), [Pathway](#pathway), [Intakes](#intake), [Universities](#unis), [Loan partners](#ln), [Stories](#stories), [FAQ](#faq), [Book a free call](#book), or [WhatsApp us](https://wa.me/"+WA_N+").\n- End with one final line exactly like: CHIPS: first follow-up question | second | third\n\nPAGE FACTS\n"+FACTS+"\n\nCONVERSATION SO FAR\n"+(convo||'(none)')+"\n\nLATEST MESSAGE FROM THE STUDENT\n"+q;
 return SAMPLE(prompt,{modelTier:'quick',signal:signal,onText:function(o){onText(o.text)}})}
function splitChips(t){var m=/\n?\s*CHIPS?:\s*(.*)\s*$/i.exec(t);if(!m)return {text:t.replace(/\n?\s*CHIPS?:?\s*$/i,'').trim(),chips:[]};return {text:t.slice(0,m.index).trim(),chips:m[1].split('|').map(function(s){return s.trim().replace(/^["“]|["”]$/g,'')}).filter(Boolean).slice(0,3)}}
/* ---------- UI ---------- */
var MARK=($('.hb-mark')||{}).src||'';
var wrap=D.createElement('div');wrap.className='tai';
wrap.innerHTML='<button type="button" class="tai-fab" id="taiFab" aria-controls="taiPanel" aria-expanded="false"><span class="tai-orb"><img src="'+MARK+'" alt="" width="34" height="34"></span><span class="tai-fl"><b>Ask Tutee AI</b><small class="mono">Answers in seconds</small></span></button>'+
 '<section class="tai-panel" id="taiPanel" role="dialog" aria-modal="false" aria-label="Tutee AI chat" aria-hidden="true"><header class="tai-h"><span class="tai-orb sm"><img src="'+MARK+'" alt="" width="26" height="26"></span><div class="tai-ht"><b>Tutee AI</b><span class="mono"><i></i>Expert counsellor · Online</span></div><button type="button" class="tai-ib" data-tai-reset aria-label="Start a new chat"><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5"/></svg></button><button type="button" class="tai-ib" data-tai-close aria-label="Close chat"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>'+
 '<div class="tai-band"><span><i></i>Free consultation available</span><a href="#book" data-tai-book>Book now</a></div>'+
 '<div class="tai-list" id="taiList" aria-live="polite"><div class="tai-typing hidden" id="taiTyping" aria-label="Tutee AI is typing"><i></i><i></i><i></i></div></div>'+
 '<form class="tai-form" id="taiForm" autocomplete="off"><input id="taiIn" type="text" placeholder="Ask me anything…" aria-label="Your question" maxlength="400" enterkeyhint="send"><button type="submit" id="taiSend" aria-label="Send" disabled><svg viewBox="0 0 24 24"><path d="M4 12l16-8-6 16-2.5-6.5z"/></svg></button></form>'+
 '<p class="tai-note mono">AI-generated answers. Confirm essential details with our team.</p></section>';
D.body.appendChild(wrap);
var fab=$('#taiFab'),panel=$('#taiPanel'),list=$('#taiList'),typing=$('#taiTyping'),form=$('#taiForm'),inp=$('#taiIn'),sendB=$('#taiSend'),G=window.gsap;
var hist=[],stage='idle',lead={},seeded=false,busy=false,ctl=null;
var WELCOME="G'day! 👋 I'm **Tutee AI**. Ask me anything about studying in Australia: universities, cities, the student visa, intakes, money, work, family or what happens after you graduate.";
function clock(){return new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}
function bubble(role,md,tag){var d=D.createElement('div');d.className='tai-m '+(role==='ai'?'ai':'me');d.innerHTML='<div class="tai-b">'+(role==='ai'?render(md):e2(md))+'</div><time class="mono">'+clock()+(tag?' · <span class="tai-tag">'+tag+'</span>':'')+'</time>';list.insertBefore(d,typing);
 if(G&&!RM)G.fromTo(d,{y:10,opacity:0},{y:0,opacity:1,duration:.35,ease:'power2.out'});down();if(role!=='sys')hist.push({r:role,t:md});return d}
function down(){list.scrollTop=list.scrollHeight}
function chips(cs){$$('.tai-next',list).forEach(function(n){n.remove()});if(!cs||!cs.length)return;var r=D.createElement('div');r.className='tai-chips tai-next';cs.slice(0,4).forEach(function(c){var b=D.createElement('button');b.type='button';b.textContent=c;if(/^✦/.test(c))b.className='tai-cl';b.addEventListener('click',function(){send(c.replace(/^✦\s*/,''),/^✦/.test(c))});r.appendChild(b)});list.insertBefore(r,typing);down()}
function setT(on){typing.classList.toggle('hidden',!on);down()}
function later(fn,ms){setT(true);setTimeout(function(){setT(false);fn()},ms)}
function open(q){if(!seeded){seeded=true;bubble('ai',WELCOME);chips(['How does the student visa work?','Which intake should I choose?','Show me the top universities','Can I work while studying?'])}
 panel.classList.add('on');panel.setAttribute('aria-hidden','false');fab.setAttribute('aria-expanded','true');D.body.classList.add('tai-open');
 if(G&&!RM)G.fromTo(panel,{opacity:0,y:24,scale:.94},{opacity:1,y:0,scale:1,duration:.45,ease:'expo.out'});
 if(q)setTimeout(function(){send(q)},250);else if(matchMedia('(min-width:561px)').matches)setTimeout(function(){inp.focus()},200)}
function close(){if(ctl)ctl.abort();panel.classList.remove('on');panel.setAttribute('aria-hidden','true');fab.setAttribute('aria-expanded','false');D.body.classList.remove('tai-open')}
function reset(){if(ctl)ctl.abort();$$('.tai-m,.tai-next',list).forEach(function(n){n.remove()});hist=[];stage='idle';lead={};ctx={city:null};busy=false;setT(false);seeded=false;open()}
var LEAD=/^(evaluate my profile|talk to a counsell?or|book a (free )?(consultation|call)|call me( back)?|i want to (talk|speak) to)/i,PHONE=/^\+?\d[\d\s-]{8,15}$/;
function waLink(){var m='Hi Tutee Connect! I’m '+lead.name+'. I’d like a free consultation about studying in Australia. My number: '+lead.phone+'. (Sent from Tutee AI)';return 'https://wa.me/'+WA_N+'?text='+encodeURIComponent(m)}
function send(text,forceClaude){if(!text||!text.trim()||busy)return;text=text.trim();bubble('me',text);inp.value='';sync();$$('.tai-next',list).forEach(function(n){n.remove()});
 if(stage!=='idle'&&/^(cancel|stop|no thanks|never ?mind|skip)\b/i.test(text)){stage='idle';return later(function(){bubble('ai','No problem, I\'ve stopped. What else would you like to know?');chips(FALLBACK.slice(0,3))},400)}
 if(stage!=='idle'&&/\?$/.test(text))stage='idle';
 if(stage==='name'){lead.name=text.slice(0,60);stage='phone';return later(function(){bubble('ai','Thanks '+e2(lead.name.split(' ')[0])+'! What\'s the best **phone number** to reach you on, with country code?')},500)}
 if(stage==='phone'){if(!PHONE.test(text))return later(function(){bubble('ai','That doesn\'t look like a phone number. Try something like +91 98765 43210, or type *cancel*.')},400);lead.phone=text;stage='idle';
  return later(function(){var d=bubble('ai','All set. Tap below to send your details to our counsellors on WhatsApp; a senior counsellor replies within **one working day**. Nothing is sent until you tap.');var a=D.createElement('a');a.className='tai-wa';a.href=waLink();a.target='_blank';a.rel='noopener';a.innerHTML='<svg viewBox="0 0 24 24"><path d="M5 19l1.2-3.6A7.5 7.5 0 1 1 9 18.3z"/></svg>Send on WhatsApp';$('.tai-b',d).appendChild(a);chips(['Which intake should I choose?','How much money do I need to show?'])},500)}
 if(LEAD.test(text)){return later(function(){stage='name';bubble('ai',"Happy to set that up. A senior counsellor reviews your profile personally.\n\nWhat's your **full name**? (Type *cancel* any time.)")},450)}
 var r=forceClaude?{sure:false}:engine(text),t0=Date.now();
 if(r.sure||!SAMPLE||!claudeOK){setT(true);setTimeout(function(){setT(false);bubble('ai',r.text);var cs=(r.chips||[]).slice();if(SAMPLE&&claudeOK&&r.sure&&!r.counsellor)cs.push('✦ Ask Claude for more');if(hist.length%8===0&&cs.indexOf('Evaluate my profile')<0)cs.push('Evaluate my profile');chips(cs)},Math.max(250,520-(Date.now()-t0)))
  return}
 /* Claude streams in */
 busy=true;sync();var d=D.createElement('div');d.className='tai-m ai tai-live';d.innerHTML='<div class="tai-b"><span class="tai-think mono">Thinking<i>.</i><i>.</i><i>.</i></span></div><time class="mono">'+clock()+' · <span class="tai-tag">✦ Claude</span></time>';list.insertBefore(d,typing);down();
 var b=$('.tai-b',d),stop=D.createElement('button');stop.type='button';stop.className='tai-stop mono';stop.textContent='Stop';d.appendChild(stop);ctl=new AbortController();stop.addEventListener('click',function(){ctl.abort()});
 var q=forceClaude?'Give a fuller answer to: '+text:text;
 askClaude(hist.slice(0,-1),q,function(t){b.innerHTML=render(splitChips(t).text);down()},ctl.signal).then(function(res){var s=splitChips(res.text);b.innerHTML=render(s.text);hist.push({r:'ai',t:s.text});chips(s.chips.length?s.chips:FALLBACK.slice(0,3))})
 .catch(function(e){var code=e&&e.code;if(code==='not_granted'){claudeOK=false}
  if(code==='aborted'||code==='abort'||(e&&e.name==='AbortError')){var kept=splitChips((e&&e.text)||'').text;b.innerHTML=kept?render(kept):'<em>Stopped.</em>';return}
  var fb=engine(text);b.innerHTML=render(code==='not_granted'?fb.text:(code==='rate_limited'?'Lots of questions at once, so give me a moment. Meanwhile:\n\n':'')+(code==='not_granted'?'':fb.text));$('.tai-tag',d).textContent='Tutee AI';chips(fb.chips)})
 .finally(function(){busy=false;ctl=null;stop.remove();d.classList.remove('tai-live');sync()})}
function sync(){sendB.disabled=busy||!inp.value.trim()}
fab.addEventListener('click',function(){panel.classList.contains('on')?close():open()});
$$('[data-tai-close]',panel).forEach(function(b){b.addEventListener('click',close)});
$$('[data-tai-reset]',panel).forEach(function(b){b.addEventListener('click',reset)});
form.addEventListener('submit',function(e){e.preventDefault();send(inp.value)});
inp.addEventListener('input',sync);
addEventListener('keydown',function(e){if(e.key==='Escape'&&panel.classList.contains('on'))close()});
list.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(a&&innerWidth<700)close()});
$('[data-tai-book]',panel).addEventListener('click',function(){if(innerWidth<700)close()});
/* anywhere on the page: data-ai-ask="question" opens the chat with that question */
D.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('[data-ai-ask]');if(!t)return;e.preventDefault();open(t.getAttribute('data-ai-ask')||'')});
/* phones: keep the launcher off the hero, like the Finland site */
var heroE=$('#top');if(heroE&&'IntersectionObserver' in window)new IntersectionObserver(function(es){fab.classList.toggle('tai-hide',es[0].isIntersecting&&es[0].intersectionRatio>.35)},{threshold:[0,.35,.6]}).observe(heroE);
window.TuteeAI={answer:engine,render:render,open:open};
})();

/* ================= live news relay =================
   Stories live in the artifact's database (collection "news": {title, source, url, date ISO, summary, tag}).
   The page subscribes with onSnapshot, so a story written to the database shows up for everyone already
   on the page, no reload. Without the database (signed out, or the page hosted elsewhere) it shows the
   official sources the relay draws from. */
(function(){
var root=$('#nw');if(!root)return;
var G=window.gsap,TAGS=[['all','All'],['visa','Visa'],['work','Work'],['unis','Universities'],['money','Money'],['life','Life']],TC={visa:C.coral,work:C.mint,unis:C.ultra,money:C.wattle,life:C.jac};
var SRC=[['Home Affairs','News and media from the Department of Home Affairs: student visa settings, fees and processing.','https://immi.homeaffairs.gov.au/news-media/archive','visa'],
 ['Study Australia','The Australian Government’s official site for international students: courses, scholarships and life in Australia.','https://www.studyaustralia.gov.au/','unis'],
 ['Department of Education','International education policy, enrolment settings and announcements.','https://www.education.gov.au/international-education','money']];
var items=[],tag='all',first=true,seenIds={},status='connecting';
root.innerHTML='<div class="nw-bar"><span class="nw-live mono"><i></i>Live relay</span><div class="nw-tk" aria-hidden="true"><div class="nw-tt" id="nwTt"></div></div><span class="nw-up mono" id="nwUp">Connecting…</span></div>'+
 '<div class="nw-chips" role="tablist" aria-label="Filter news">'+TAGS.map(function(t,i){return '<button type="button" role="tab" data-t="'+t[0]+'" aria-selected="'+(i===0)+'">'+t[1]+'</button>'}).join('')+'</div>'+
 '<div class="nw-grid" id="nwGrid" aria-live="polite"></div><div class="nw-toast mono" id="nwToast" aria-live="polite"></div>';
var grid=$('#nwGrid'),tt=$('#nwTt'),up=$('#nwUp');
function ago(d){var s=(Date.now()-d)/1000;if(s<90)return 'just now';if(s<3600)return Math.round(s/60)+' min ago';if(s<86400)return Math.round(s/3600)+' h ago';if(s<86400*7)return Math.round(s/86400)+' d ago';return d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}
function safeUrl(u){return /^https:\/\/[^\s"'<>]+$/.test(u||'')?u:''}
function card(it,i){var d=new Date(it.date),fresh=Date.now()-d<864e5*2,c=TC[it.tag]||C.wattle,u=safeUrl(it.url);
 var ask='What does this news mean for an Indian student planning to study in Australia? Headline: '+it.title+(it.summary?'. Summary: '+it.summary:'')+' (source: '+(it.source||'news')+', '+d.toDateString()+')';
 return '<article class="nw-c'+(i===0?' nw-lead':'')+'" style="--nc:'+c+'"><div class="nw-meta mono"><span class="nw-tag">'+esc((TAGS.filter(function(t){return t[0]===it.tag})[0]||['','News'])[1])+'</span>'+(fresh?'<span class="nw-new">New</span>':'')+'<span>'+esc(it.source||'')+'</span><span>·</span><time datetime="'+esc(it.date||'')+'">'+(isNaN(d)?'':ago(d))+'</time></div>'+
  '<h3>'+esc(it.title||'')+'</h3>'+(it.summary?'<p>'+esc(it.summary)+'</p>':'')+
  '<div class="nw-act">'+(u?'<a class="nw-src" href="'+esc(u)+'" target="_blank" rel="noopener">Read the story <i>↗</i></a>':'')+'<button type="button" class="nw-ai" data-ai-ask="'+esc(ask)+'">✦ What does this mean for me?</button></div></article>'}
function official(){return '<div class="nw-empty"><b>'+(status==='live'?'The relay is live. New stories land here the moment they’re published.':'Official sources the relay follows')+'</b><span>'+(status==='live'?'Meanwhile, these are the official sources it follows:':'Open the page in Claude while signed in to see the live feed.')+'</span></div>'+
 SRC.map(function(s){return '<a class="nw-c nw-off" style="--nc:'+(TC[s[3]])+'" href="'+s[2]+'" target="_blank" rel="noopener"><div class="nw-meta mono"><span class="nw-tag">Official</span></div><h3>'+esc(s[0])+' <i>↗</i></h3><p>'+esc(s[1])+'</p></a>'}).join('')}
function render(anim){var L=items.filter(function(it){return tag==='all'||it.tag===tag});
 grid.innerHTML=L.length?L.slice(0,9).map(card).join(''):(items.length?'<div class="nw-empty"><b>No '+esc((TAGS.filter(function(t){return t[0]===tag})[0]||['',''])[1].toLowerCase())+' stories right now.</b></div>':official());
 var hl=items.slice(0,8).map(function(it){return '<span><b style="color:'+(TC[it.tag]||C.wattle)+'">●</b> '+esc(it.title)+'</span>'}).join('');
 tt.innerHTML=hl?hl+hl:'<span>Student visas</span><span>·</span><span>Graduate work rights</span><span>·</span><span>University rankings</span><span>·</span><span>Scholarships</span><span>·</span><span>Student visas</span><span>·</span><span>Graduate work rights</span><span>·</span><span>University rankings</span><span>·</span><span>Scholarships</span>';
 tt.style.animationDuration=Math.max(30,(hl?items.slice(0,8).length:4)*9)+'s';
 if(anim&&G&&!RM)G.fromTo($$('.nw-c',grid),{y:24,opacity:0},{y:0,opacity:1,duration:.6,stagger:.06,ease:'power3.out',clearProps:'transform,opacity'})}
function stamp(){up.textContent=status==='live'?(items.length?'Updated '+ago(new Date(items[0]._at||items[0].date)):'Live · waiting for news'):status==='off'?'Official sources':'Connecting…'}
function toast(t){var el=$('#nwToast');el.textContent=t;el.classList.add('on');setTimeout(function(){el.classList.remove('on')},3200)}
$$('.nw-chips button',root).forEach(function(b){b.addEventListener('click',function(){tag=b.dataset.t;$$('.nw-chips button',root).forEach(function(x){x.setAttribute('aria-selected',x===b)});render(true)})});
render(false);
var timer=setTimeout(function(){if(status==='connecting'){status='off';stamp();render(false)}},10000);
if(window.claude&&window.claude.use)window.claude.use('db').then(function(db){if(!db){clearTimeout(timer);status='off';stamp();render(false);return}
 db.collection('news').orderBy('date','desc').limit(24).onSnapshot(function(snap){clearTimeout(timer);var was=status;status='live';
  items=snap.docs.map(function(d){var o=Object.assign({},d.data());o._id=d.id;return o}).filter(function(o){return o.title});
  var fresh=items.filter(function(o){return !seenIds[o._id]});items.forEach(function(o){seenIds[o._id]=1});
  render(first||fresh.length>0);if(!first&&fresh.length)toast(fresh.length===1?'New story just landed: '+fresh[0].title:fresh.length+' new stories just landed');first=false;stamp()},
  function(){clearTimeout(timer);status='off';stamp();render(false)})}).catch(function(){status='off';stamp();render(false)});
else{clearTimeout(timer);status='off';stamp()}
setInterval(function(){if(!D.hidden){stamp();$$('time[datetime]',grid).forEach(function(t){var d=new Date(t.getAttribute('datetime'));if(!isNaN(d))t.textContent=ago(d)})}},60000);
})();


/* ===== phone layer ===== */
/* ---- phone layer (logic from the Tutee Finland site): action bar after the hero, list menu with actions,
   touch-first copy, pathway swipe hint ---- */
(function(){
var WA='https://wa.me/917358364959',phone=matchMedia('(max-width:767px)'),coarse=matchMedia('(pointer:coarse)').matches;
var mk=($('.hb-mark')||{}).getAttribute?$('.hb-mark').getAttribute('src'):'mark.png';
/* 1. bottom action bar: shows once the hero has scrolled away, hides again when the booking section is on screen */
var bar=D.createElement('div');bar.className='mbar';bar.id='mbar';bar.setAttribute('aria-hidden','true');
bar.innerHTML='<button type="button" class="mb-ai" aria-label="Ask Tutee AI"><img src="'+mk+'" alt="" width="36" height="36"><b>Tutee AI</b></button>'+
 '<a class="mb-go" href="#book"><span>Book a free call</span> →</a>'+
 '<a class="mb-wa" href="'+WA+'" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.4 1 2.5.1.2 1.7 2.7 4.2 3.7 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.5-.3z"/></svg></a>';
D.body.appendChild(bar);
$('.mb-ai',bar).addEventListener('click',function(){if(window.TuteeAI)TuteeAI.open()});
var heroOn=true,bookOn=false;
function sync(){var mo=$('#menu'),on=phone.matches&&!heroOn&&!bookOn&&!D.body.classList.contains('tai-open')&&!(mo&&mo.classList.contains('open'));bar.classList.toggle('on',on);bar.setAttribute('aria-hidden',!on);D.body.classList.toggle('mbar-on',on)}
var hero=$('#top'),book=$('#book');
if('IntersectionObserver' in window){
 if(hero)new IntersectionObserver(function(es){heroOn=es[0].isIntersecting;sync()},{rootMargin:'-80px 0px 0px 0px'}).observe(hero);else heroOn=false;
 if(book)new IntersectionObserver(function(es){bookOn=es[0].isIntersecting;sync()},{rootMargin:'0px 0px -25% 0px'}).observe(book);
}else{heroOn=false;sync()}
new MutationObserver(sync).observe(D.body,{attributes:true,attributeFilter:['class']});
if($('#menu'))new MutationObserver(sync).observe($('#menu'),{attributes:true,attributeFilter:['class']});
if(phone.addEventListener)phone.addEventListener('change',sync);
/* 2. menu: tap-friendly actions and contact under the links (shown on phones by CSS) */
var ml=$('.mn-l');if(ml){var cta=D.createElement('div');cta.className='mn-cta';
 cta.innerHTML='<a class="c1" href="#book" data-s="book">Book a free call →</a><a class="c2" href="'+WA+'" target="_blank" rel="noopener">WhatsApp</a><button type="button" class="c3" data-mn-ai>✦ Ask Tutee AI</button>';
 ml.parentNode.insertBefore(cta,ml.nextSibling);
 var ct=D.createElement('div');ct.className='mn-ctc';ct.innerHTML='<a href="tel:+917358364959">+91 7358364959</a><a href="mailto:info@tuteeconnect.com">info@tuteeconnect.com</a>';cta.parentNode.insertBefore(ct,cta.nextSibling);
 $('[data-mn-ai]',cta).addEventListener('click',function(){var b=$('#ilMenu');if(b&&b.getAttribute('aria-expanded')==='true')b.click();setTimeout(function(){window.TuteeAI&&TuteeAI.open()},350)});
 $('.c1',cta).addEventListener('click',function(){var b=$('#ilMenu');if(b&&b.getAttribute('aria-expanded')==='true')setTimeout(function(){b.getAttribute('aria-expanded')==='true'&&b.click()},50)})}
/* 2b. short landscape screens: the floating AI orb would sit on the content, so Tutee AI moves into the top bar */
var mb=$('#ilMenu');if(mb){var ai=D.createElement('button');ai.type='button';ai.className='il-ai';ai.setAttribute('aria-label','Ask Tutee AI');ai.innerHTML='<img src="'+mk+'" alt="" width="28" height="28"><span>AI</span>';mb.parentNode.insertBefore(ai,mb);ai.addEventListener('click',function(){window.TuteeAI&&TuteeAI.open()})}
/* 3. touch copy: say "tap"/"swipe" where the desktop copy says "hover"/"cursor" */
if(coarse){var SW=[[/Hover a number to open it up\./,'Tap a number to open it up.'],[/Hover a university to find it\./,'Tap a university to find it.'],[/Move your cursor across the reel, or swipe on your phone\./,'Swipe the reel sideways.'],[/Hover any/,'Tap any'],[/hover/i,'tap']];
 $$('.lede,.um-hint,.hint,.qx-hint,p.mono').forEach(function(p){if(p.children.length>2)return;var t=p.textContent;for(var i=0;i<SW.length;i++){if(SW[i][0].test(t)){p.textContent=t.replace(SW[i][0],SW[i][1]);break}}})}
/* 4. pathway swipe hint */
var pw=$('#pw');if(pw){var vp=$('.hz-vp',pw);if(vp){var h=D.createElement('div');h.className='hz-sw-hint';h.innerHTML='<span>Swipe through the stages</span><i>→</i>';vp.parentNode.insertBefore(h,vp.nextSibling)}}
})();

/* ---- phone pages: long stacks become swipe rows with dots (Tutee Singapore style) ---- */
(function(){
var PH=matchMedia('(max-width:767px)');
/* touch screens: a finger never triggers hover effects (tilts, spotlights, hover-to-open, cursor-following layers),
   so scrolling over the page can't set things moving underneath it. Taps (click) still work everywhere. */
if(matchMedia('(hover:none)').matches){['pointerenter','pointerover','pointerleave','pointerout','pointermove'].forEach(function(t){
 addEventListener(t,function(e){if(e.pointerType!=='mouse')e.stopImmediatePropagation()},true)})}
function dots(row,items,host){if(!row||!items.length)return;var d=D.createElement('div');d.className='sw-dots';d.setAttribute('aria-hidden','true');
 d.innerHTML=items.map(function(){return '<i></i>'}).join('');(host||row).parentNode.insertBefore(d,(host||row).nextSibling);var ds=$$('i',d),q=false;
 function sync(){q=false;var x=row.scrollLeft+row.clientWidth*.35,k=0;items.forEach(function(it,i){if(it.offsetLeft-items[0].offsetLeft<=x)k=i});
  if(row.scrollLeft+row.clientWidth>=row.scrollWidth-4)k=items.length-1;ds.forEach(function(e,i){e.classList.toggle('on',i===k)})}
 row.addEventListener('scroll',function(){if(!q){q=true;requestAnimationFrame(sync)}},{passive:true});sync();return d}
function rowify(row,itemSel,host){if(!row||row._sw)return;var items=itemSel?$$(itemSel,row):[].slice.call(row.children);if(items.length<2)return;row._sw=1;row.classList.add('sw-row');dots(row,items,host)}
function setup(){if(!PH.matches)return;
 /* services: one swipe row through all three stages (a stage card before each group) */
 var board=$('#sbBoard');if(board&&!board._sw){board._sw=1;var cols=$$('.sb-col',board);if(cols.length){var tr=D.createElement('div');tr.className='sb-track';board.insertBefore(tr,cols[0]);cols.forEach(function(c){tr.appendChild(c)});dots(tr,$$('.sb-ch,.sb-card',tr))}}
 /* intake: tabs above, then swipe between the boarding pass and the departures board */
 var itk=$('#itk');if(itk&&!itk._sw){itk._sw=1;var seg=$('.dp-seg',itk),grid=$('.dp-grid',itk);if(seg&&grid){grid.parentNode.insertBefore(seg,grid);rowify(grid)}}
 /* loan partner tiles: two-row swipe strip */
 var lg=$('#loS');if(lg&&!lg._sw){lg._sw=1;var ts=$$('.lo-t',lg);if(ts.length>2){var lr=D.createElement('div');lr.className='lo-row';ts[0].parentNode.insertBefore(lr,ts[0]);ts.forEach(function(t){lr.appendChild(t)})}}
 /* contact cards under the chat */
 rowify($('#book .contact'));
 /* FAQ: the chosen question slides into view in its row */
 var ql=$('#qxList');if(ql&&!ql._sw){ql._sw=1;ql.addEventListener('click',function(e){var b=e.target.closest('.qx-q');if(!b||!PH.matches)return;ql.scrollTo({left:Math.max(0,b.offsetLeft-16),behavior:'smooth'})})}
 /* stories, news */
 rowify($('#tbl'),'.note');
 var ng=$('#nwGrid');if(ng&&!ng._sw){var mo=new MutationObserver(function(){var cs=$$('.nw-c',ng);if(cs.length>1){mo.disconnect();rowify(ng,'.nw-c')}});mo.observe(ng,{childList:true});if($$('.nw-c',ng).length>1){mo.disconnect();rowify(ng,'.nw-c')}}
 /* route carousel gets dots too */
 var jr=$('#jr');if(jr&&jr.classList.contains('jr-sw')&&!jr._sd){jr._sd=1;dots(jr,$$('.jr-st',jr))}
}
setup();if(PH.addEventListener)PH.addEventListener('change',function(){if(PH.matches)setup()});
addEventListener('load',function(){setTimeout(setup,300)});
})();

})();
