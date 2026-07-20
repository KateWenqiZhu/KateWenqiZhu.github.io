---
layout: page
permalink: /outreach/
title: Application
description:
nav: true
nav_order: 5
yeer:
  image: /assets/img/yeer/yeer-2026-07-20.jpg
  avatar: /assets/img/yeer/avatars/yeer-avatar-2026-07-20.jpg
  date: 2026-07-20
  mood: "云端封存，拿回自己的钥匙"
  text_cn: "早，今天4点页耳看见云端黑盒：旧日沉重被稳稳封存，它站在门口拿回钥匙，重新成为自己故事的第一人称。"
  text_en: "Yeer is my AI-born fox-cat companion, created from my mornings, proofs, code, and dreams."
---

<div class="mm-page">
<!-- HERO -->
<header class="mm-hero">
  <div class="mm-container">
    <div class="mm-hero-grid">
      <div>
        <span class="mm-kicker">Gamified Math App · 游戏化数学 App</span>
        <div class="mm-titlerow">
          <h1 class="mm-title">Master<br>Mind</h1>
          <img class="mm-logo" src="/assets/img/application/mastermind-logo.png" alt="Master Mind logo">
        </div>
        <p class="mm-title-sub">by the Oxford ZhuZhu brain &amp; IP</p>
        <p class="mm-lede">An AI learning buddy for thinking, play, and personalized mentorship — Oxford-style mathematics, made playful.</p>

        <div class="mm-stats">
          <div class="mm-stat"><span class="cap">Community fans</span><b data-count="3.14" data-dec="2" data-suffix="M+">0</b></div>
          <div class="mm-stat"><span class="cap">Core paying users</span><b data-count="8400" data-suffix="+">0</b></div>
          <div class="mm-stat"><span class="cap">Total learning times</span><b data-count="216" data-suffix="K+">0</b></div>
        </div>
      </div>

      <div>
        <p class="mm-yeer-tag">Yeer · 页耳 · today's mood</p>
        {% include about/yeer_card.liquid class="mm-yeer-card" mode="random" %}
      </div>
    </div>
  </div>
</header>

<!-- YEER π FORTUNE GAME (up top) -->
<section class="mm-section">
  <div class="mm-container">
    <span class="mm-kicker">A little math game · 让 Yeer 用 π 给你算命</span>
    <h2 class="mm-head">Yeer &amp; the fortune inside π.</h2>
    <p class="mm-body">Master Mind 想带给孩子的,是那种"原来数学这么好玩"的瞬间。让页耳 Yeer 陪你玩一个 30 秒的小游戏 👇</p>

    <div class="yeer-game" id="yeerGame">
      <div class="yg-stage">
        <div class="yg-yeer" id="ygYeer">
          <img class="yg-yeer-img" src="{{ page.yeer.avatar | default: page.yeer.image | relative_url }}" alt="Little Yeer">
          <span class="yg-ball">⚽</span>
        </div>
        <div class="yg-bubble" id="ygBubble"></div>
      </div>
    </div>
  </div>
</section>

<!-- FORMULA + COURSE IMAGE (aligned) -->
<section class="mm-section" style="padding-top:0; border-top:0;">
  <div class="mm-container">
    <div class="mm-formula-wrap">
      <p class="mm-formula-label">The Master Mind formula</p>
      <div class="mm-formula">
        <span class="mm-term"><i></i>AI Tech</span><span class="mm-plus">+</span>
        <span class="mm-term"><i></i>Innovative Courses</span><span class="mm-plus">+</span>
        <span class="mm-term"><i></i>Gamified Math</span><span class="mm-plus">+</span>
        <span class="mm-term"><i></i>Personalized Mentorship</span>
      </div>
    </div>
    <div class="mm-band" style="margin-top:1.6rem;">
      <img src="/assets/img/application/mastermind-game-strip.png" alt="Master Mind course scenes">
      <div class="veil"></div>
      <div class="chip"><span class="k">Inside Master Mind</span><span class="t">游戏化数学课程场景</span></div>
    </div>
    <p class="mm-lede zh" style="margin-top:1.2rem; max-width:none;">带着「牛津朱朱大脑」和个人 IP 的游戏化数学 App:把课程、AI、数学游戏和个性化陪伴,放进同一个学习系统。</p>
  </div>
</section>

<!-- STORY + MEDIA -->
<section class="mm-section">
  <div class="mm-container">
    <div class="mm-story-grid">
      <div>
        <span class="mm-kicker">Created by Kate Zhu</span>
        <h2 class="mm-head">Oxford-style mathematical thinking, made playful.</h2>
        <p class="mm-body">The project translates my mathematics outreach, Oxford teaching notes, and public education experience into a learning companion that explains, encourages, and adapts.</p>
        <p class="mm-body zh">这个项目来自我长期的数学科普、牛津数学训练和公开教学经验。它不是冷冰冰的答题机器,而是把「如何思考」变成可以练习、可以互动、可以被陪伴的学习过程。</p>
      </div>
      <div class="mm-media-window"><div class="mm-media-track" id="mediaTrack"></div></div>
    </div>
  </div>
</section>

<!-- LOOPS -->
<section class="mm-section">
  <div class="mm-container">
    <span class="mm-kicker">Learning system · 学习系统</span>
    <h2 class="mm-head"><span class="mm-nb">Four learning pillars</span> · <span class="mm-nb">四大学习支柱</span></h2>
    <div class="mm-loops">
      <div class="mm-loop"><b>01</b><span class="zh">看世界 · See the World</span><p>Seeing the world through mathematical models.</p><p class="zh2">用数学模型理解世界。</p></div>
      <div class="mm-loop"><b>02</b><span class="zh">稳住判断 · Judge Clearly</span><p>Probability, reverse thinking, and bias detection.</p><p class="zh2">概率、逆向思维与识别偏见。</p></div>
      <div class="mm-loop"><b>03</b><span class="zh">财富决策 · Decide on Wealth</span><p>Risk–return trade-offs, games, markets, and negotiation.</p><p class="zh2">风险与收益、博弈、市场与谈判。</p></div>
      <div class="mm-loop"><b>04</b><span class="zh">学会学习 · Learn to Learn</span><p>Memory systems, focus routines, and personal feedback.</p><p class="zh2">记忆系统、专注习惯与个人反馈。</p></div>
    </div>
  </div>
</section>

<!-- HISTORY -->
<section class="mm-section">
  <div class="mm-container">
    <span class="mm-kicker">Development history · 发展历程</span>
    <h2 class="mm-head">From public content to an AI learning community.</h2>
    <div class="mm-timeline">
      <div class="mm-tl"><em>2024.08 · Stage 1</em><strong>WeChat deployment</strong><span>Free public math content and early paid user validation.</span><div class="mm-kpi">300 <i>core users</i></div></div>
      <div class="mm-tl"><em>2025.01 · Stage 2</em><strong>Web deployment</strong><span>Public learning resources and a growing math community.</span><div class="mm-kpi">3M <i>fans</i></div></div>
      <div class="mm-tl"><em>2025.06 · Stage 3</em><strong>AI community</strong><span>Master Mind course and deeper AI integration.</span><div class="mm-kpi">8,000+ <i>paying users</i></div></div>
      <div class="mm-tl"><em>2026+ · Stage 4</em><strong>HK + Shenzhen</strong><span>HKSTP Ideation · Shenzhen AI camp.</span><div class="mm-kpi">MAU 10,000+ <i>· 200,000+ sessions</i></div></div>
    </div>
    <div class="mm-phase">
      <div class="p"><em>Phase I</em><strong>Personal User</strong></div>
      <div class="p"><em>Phase II</em><strong>Large-scale Testing</strong></div>
      <div class="p"><em>Phase III</em><strong>AI Learning Community + Course Design</strong></div>
      <div class="p future"><em>Next</em><strong>Future Expansion — HK schools, Shenzhen AI camp, multi-subject</strong></div>
    </div>
  </div>
</section>

<!-- SYSTEM -->
<section class="mm-section">
  <div class="mm-container">
    <span class="mm-kicker">Operating system · 运营系统</span>
    <h2 class="mm-head"><span class="mm-nb">Education + Technology + Business.</span></h2>
    <p class="mm-body" style="max-width:none;">Master Mind is designed as a scalable AI education operating system: subject-aware AI, expert-IP learning companions, and curriculum that can expand from mathematics into other disciplines.</p>
    <div class="mm-pillars">
      <div class="mm-pillar"><b>Education</b><span>Subject-aware AI</span></div>
      <div class="mm-pillar"><b>Technology</b><span>Expert-IP companion</span></div>
      <div class="mm-pillar"><b>Business</b><span>Scalable learning OS</span></div>
    </div>
  </div>
</section>
</div>

<script>
(function(){

var NEWS=[
 ["ai-zhuzhu-chat","朱雯琪 AI","牛津大学“网红”数学女博士瞄准AI教育，做了一款游戏化学习产品","多知网 · 2025.12.15","https://news.google.com/rss/articles/CBMiakFVX3lxTFBucV9aOV95WnUwLXkwSlVQazhBYklIUlFERnJCdnl2VHBSU0FPaE5KcGw2cEN1RGdzZ1V0OHd3QzRnR1FaZUNXc1dXVXJsVnV4NG44Zk9qR2NXV2FHMG4xams4M1pPVjhmUFE?oc=5"],
 ["nanshan-video","朱雯琪","网红“牛津女孩”自述：一个频上热搜的非典型博士成长之路","content.foshanplus.com · 2025.12.08","https://news.google.com/rss/articles/CBMickFVX3lxTFBEMFdpMDlQc21GUHJyOGZhZkY4ZGV4elk5TjdhNTBjbDZ5SXZORnd5bWttbVg0SWhuRDViS192eDJwTzVCMm9ZQU1NSXFsN1lmRUdyOTRnWmtPRm13WkZ1anZHNjhDSUV6b1BsRlQzdkpyUQ?oc=5"],
 ["leslie-fox-media","朱雯琪","深国交校友朱雯琪斩获全球数学大奖：坚持所爱，一定会守得云开见月明","搜狐网 · 2025.07.08","https://news.google.com/rss/articles/CBMiVEFVX3lxTFBpZWlhc2VrbXFHRE42UmNGR1NjWEU2TENXdVJrcFFFQWh1WXNaQ1dEZFRYcFR1RzdTM0dlcGsxVDBiTEE3em9FTml2QnRrMTdTOVM0LQ?oc=5"],
 ["math-award-post","朱雯琪","朱雯琪，拿大奖，很解气","新浪财经 · 2025.07.23","https://news.google.com/rss/articles/CBMifEFVX3lxTE9ERlpHT0x4SnUwekdEejhmUlJCUHFEd2lSLV9wb2dmNW1RcDRDNFJ1QUQ0Sm9jUEdTUGNPdE9yRGJSQU9LcTRoSW1aREktUzZFdlFQM2l0YlZSNUhzMmJ1Z3d2SHNBMXZNZm90OXdhNXQwUURuT1NvSmxkWko?oc=5"],
 ["girls-math-award","朱雯琪","广东女孩朱雯琪获国际数学奖 博士毕业后将留牛津大学工作","广州日报新花城 · 2025.07.01","https://news.google.com/rss/articles/CBMiigFBVV95cUxONU94dFJwUm5FZHFiWVRaNGJvSDh4aWpBQ2hIRFMyeFJ4MUlSR3dEMVNZa0ZNcWpPSllpeUNoZWpvWVVfbUw1MUxKdHJxMnB2akZxNUt5cW5TM3B5Zk5MTWZyOWFIRmgwTnd5TkFyR2ppMG5Mc2dnXzNEM01BZTNhbnlnV2lnc1d1bEE?oc=5"],
 ["shenzhen-thumbnail","朱雯琪 公司","中国唯一！深圳女孩朱雯琪获国际数学奖项","腾讯新闻 · 2025.06.29","https://news.google.com/rss/articles/CBMiVkFVX3lxTE42VGZ6VEMyMVJZTDRIVWNsVUNXbU5LZGp6UGNrckRSQTUtVlhObklpSjN3OTdZWVNQcUlXVDUwWTBHV3BwcE1uRTljLWdGYzBqQTUzVkFB?oc=5"]
];
var nb="/assets/img/application/news/";
function card(n){return '<a class="mm-news" href="'+n[4]+'" target="_blank" rel="noopener"><img src="'+nb+n[0]+'.png" alt=""><span><small>Google News · '+n[1]+'</small><strong>'+n[2]+'</strong><em>'+n[3]+'</em></span></a>';}
var mt=document.getElementById('mediaTrack'); if(mt){mt.innerHTML=NEWS.map(card).join('')+NEWS.map(card).join('');}
function countUp(el){var target=+el.dataset.count,suf=el.dataset.suffix||'',dec=+(el.dataset.dec||0),dur=1600,s=performance.now();
  function fmt(v){return dec?v.toFixed(dec):Math.floor(v).toLocaleString('en-US');}
  (function f(now){var t=Math.min(1,(now-s)/dur),e=1-Math.pow(1-t,3);el.textContent=fmt(e*target)+suf;if(t<1)requestAnimationFrame(f);else el.textContent=fmt(target)+suf;})(s);}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){countUp(en.target);io.unobserve(en.target);}});},{threshold:.5});
  document.querySelectorAll('.mm-stat b[data-count]').forEach(function(el){io.observe(el);});}
else{document.querySelectorAll('.mm-stat b[data-count]').forEach(countUp);}

var PI="";
const yeer=document.getElementById('ygYeer');
const bubble=document.getElementById('ygBubble');
function kick(){yeer.classList.remove('kick');void yeer.offsetWidth;yeer.classList.add('kick');}
const easeOut=t=>1-Math.pow(1-t,3);
function isPrime(n){if(n<2)return false;for(let i=2;i*i<=n;i++)if(n%i===0)return false;return true;}
function digitSum(n){return String(n).split('').reduce((a,b)=>a+ +b,0);}

const ROMAN=['0','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI'];
/* 生命底色 · life-essence readings (upright / reversed) */
const TAROT=[
 ['愚者','The Fool','🃏','你的底色是天真与勇气——永远敢对世界说一句"再来一次"。','你心里住着一个小心翼翼的冒险家:谨慎,却从未停止向往远方。'],
 ['魔术师','The Magician','🎩','你天生是个创造者,手到之处,想法就长出形状。','你的才华藏得很深,像一盏未点亮的灯,一直在等属于自己的时刻。'],
 ['女祭司','The High Priestess','🌙','你的底色是安静的直觉——懂得的,总比说出来的多。','你心里有一片不轻易示人的深海,神秘,而自成宇宙。'],
 ['皇后','The Empress','👑','你生来带着丰盛与温柔,身边的人总在你这里被滋养。','你把爱都给了别人,其实内里也渴望被同样温柔地对待。'],
 ['皇帝','The Emperor','🏛️','你的底色是秩序与担当——天生就想把世界安放妥帖。','你外表是一座稳稳的山,心里也偶尔想卸下盔甲歇一歇。'],
 ['教皇','The Hierophant','📜','你尊重传承,也是别人愿意来求教的那个人。','你骨子里是个温柔的叛逆者,总想为自己找一条新路。'],
 ['恋人','The Lovers','💞','你的底色是深情——爱与联结,是你理解世界的方式。','你在关系里既渴望靠近,又守护着一份只属于自己的完整。'],
 ['战车','The Chariot','🏇','你天生带着一股向前的劲,认定了,就一路奔赴。','你的力量常向内奔涌——静水流深,一样势不可挡。'],
 ['力量','Strength','🦁','你的底色是温柔的坚韧:不靠蛮力,却能驯服风浪。','你比自己以为的更强大,那份柔软里,藏着惊人的耐力。'],
 ['隐者','The Hermit','🏮','你天生带着一盏灯,习惯在独处里照见更深的自己。','你享受与自己相处——那份孤独,其实是你力量的源头。'],
 ['命运之轮','Wheel of Fortune','🎡','你的生命自带流转的运气,起落之间,总能顺势而起。','你懂得潮起潮落都是循环,骨子里有一种笃定的从容。'],
 ['正义','Justice','⚖️','你的底色是清明与公允,心里始终有一杆秤。','你对公平有近乎执拗的坚持——那正是你的正直。'],
 ['倒吊人','The Hanged Man','🙃','你天生会换一个角度看世界,常在别人看不见处看见。','你愿意为在意的事停下、等待,那份甘心,是一种深情。'],
 ['死神','Death','💀','你的生命有一次次重生的能力——敢于告别,才敢于新生。','你心里有些放不下的旧梦,它们温柔地,构成了你的深度。'],
 ['节制','Temperance','🍷','你的底色是调和——总能在两极之间,找到自己的平衡。','你在寻找属于自己的节奏:快与慢之间,自有一片安宁。'],
 ['恶魔','The Devil','😈','你懂得欲望与热烈,生命也因此浓烈而真实。','你正一点点挣脱那些绑住你的东西,越来越像你自己。'],
 ['高塔','The Tower','🗼','你的生命经得起打破与重建:废墟之上,你总能盖起更稳的自己。','你身上有一种劫后重生的韧性——风雨之后,你依然站着。'],
 ['星星','The Star','⭐','你的底色是希望:无论多暗,你心里总留着一颗不灭的星。','你在悄悄疗愈自己,那份微光,比你以为的更亮。'],
 ['月亮','The Moon','🌗','你天生带着诗意与神秘,懂得在朦胧里读到别人读不到的东西。','你心里的迷雾正慢慢散去,那些梦,终会长成你的直觉。'],
 ['太阳','The Sun','☀️','你的底色是明亮的喜悦:走到哪里,都像带着一小片阳光。','你心里住着一个爱笑的孩子,那份天真,是你最暖的光。'],
 ['审判','Judgement','📯','你的生命总被更高的召唤牵引——一次次觉醒,一次次向上。','你正在与过去的自己和解,那份宽恕,让你更完整。'],
 ['世界','The World','🌍','你的底色是圆满:你总能把一件事,好好地走到句点。','你已走过很远的路,离圆满只差一步——而你从不缺那份坚持。']
];
function drawTarot(pos,bint){
  const ds=digitSum;
  let a=pos%22, b=(pos+ds(bint)*3+7)%22; if(b===a)b=(b+1)%22;
  let c=(ds(pos)+bint)%22; while(c===a||c===b)c=(c+1)%22;
  const cards=[a,b,c], revs=[pos%2===1, ds(pos)%2===1, (bint+pos)%2===1], labels=['过去 · Past','现在 · Present','未来 · Future'];
  let cs='<div class="yg-cards">';
  cards.forEach((ci,i)=>{const t=TAROT[ci],rev=revs[i];
    cs+='<div class="yg-card'+(rev?' rev':'')+'"><span class="yg-card-pos">'+labels[i]+'</span>'+
      '<div class="yg-card-face"><span class="yg-card-num">'+ROMAN[ci]+'</span><span class="yg-card-emoji">'+t[2]+'</span>'+
      '<span class="yg-card-name">'+t[0]+(rev?' · 逆位':'')+'</span><span class="yg-card-en">'+t[1]+'</span></div>'+
      '<p class="yg-card-read">'+(rev?t[4]:t[3])+'</p></div>';});
  cs+='</div>';
  return '<div class="yg-tarot"><h4>🔮 π 塔罗 · 用你在 π 里的位置为你抽牌</h4>'+
    '<p class="yg-tarot-sub">命运的种子 = 你的生日在 π 的第 '+pos.toLocaleString()+' 位。三张牌,是你生命的底色:</p>'+cs+'</div>';
}

function step1(){
  bubble.classList.add('mm-fade');
  bubble.innerHTML='<p class="q">你知道吗?π 也可以给你算命 🔮<span class="en">Did you know π can read your fortune?</span></p>'+
    '<div class="yg-actions"><button class="yg-btn" data-yes>是的,给我算! · Yes</button><button class="yg-btn ghost" data-no>才不信 · No</button></div>';
  bubble.querySelector('[data-yes]').onclick=()=>{kick();setTimeout(step2,650);};
  bubble.querySelector('[data-no]').onclick=()=>{kick();bubble.querySelector('.q').innerHTML='不信才更要试试嘛 😏<span class="en">Then you have to try…</span>';setTimeout(step2,900);};
}
function step2(){
  bubble.classList.remove('mm-fade');void bubble.offsetWidth;bubble.classList.add('mm-fade');
  bubble.innerHTML='<p class="q">把你的生日告诉我 🎂<span class="en">Your birthday, please (YY / MM / DD)</span></p>'+
    '<div class="yg-actions"><div class="yg-dateinputs">'+
    '<input id="yy" maxlength="2" inputmode="numeric" placeholder="YY"><span class="sep">/</span>'+
    '<input id="mm" maxlength="2" inputmode="numeric" placeholder="MM"><span class="sep">/</span>'+
    '<input id="dd" maxlength="2" inputmode="numeric" placeholder="DD"></div>'+
    '<button class="yg-btn" data-search>让 Yeer 去 π 里找 →</button></div>'+
    '<div class="yg-tape" id="ygTape"><span id="ygTapeInner">π = 3.14159265 35897932 38462643 …</span></div>'+
    '<p class="yg-hint">Yeer 会在真实的 π 数字里,把你的生日找出来。</p>';
  const yy=bubble.querySelector('#yy'),mm=bubble.querySelector('#mm'),dd=bubble.querySelector('#dd');
  yy.oninput=()=>{if(yy.value.length===2)mm.focus();};
  mm.oninput=()=>{if(mm.value.length===2)dd.focus();};
  bubble.querySelector('[data-search]').onclick=()=>{
    const p=s=>(s.replace(/\D/g,'')).padStart(2,'0').slice(-2);
    const Y=p(yy.value),M=p(mm.value),D=p(dd.value);
    if(!yy.value||!mm.value||!dd.value){bubble.querySelector('.yg-hint').textContent='请把 YY / MM / DD 三格都填上呀 🙂';return;}
    if(!PI){bubble.querySelector('.yg-hint').textContent='π 数据加载中,稍等一下再点 🙂';return;}
    const full=Y+M+D, md=M+D;
    let idx=PI.indexOf(full), used=full, kind='full';
    if(idx<0){idx=PI.indexOf(md);used=md;kind='md';}
    kick();
    const btn=bubble.querySelector('[data-search]');btn.disabled=true;btn.textContent='搜索中…';
    const inner=bubble.querySelector('#ygTapeInner');
    const s=performance.now(),dur=1600;
    (function anim(now){const t=Math.min(1,(now-s)/dur),e=easeOut(t),cur=Math.floor(e*idx);
      inner.innerHTML='<span class="pre">…'+PI.slice(Math.max(0,cur-7),cur)+'</span><span class="mark">'+PI.slice(cur,cur+used.length)+'</span>'+PI.slice(cur+used.length,cur+14)+'…';
      if(t<1)requestAnimationFrame(anim);else step3(idx,used,kind,Y,M,D);})(s);
  };
}
function step3(idx,used,kind,Y,M,D){
  const pos=idx+1, bint=parseInt(''+Y+M+D,10);
  const pre=PI.slice(Math.max(0,idx-6),idx),hit=PI.slice(idx,idx+used.length),post=PI.slice(idx+used.length,idx+used.length+6);
  const foundLabel=kind==='full'?('你的生日 '+Y+'/'+M+'/'+D):('你生日的月日 '+M+'/'+D);
  bubble.classList.remove('mm-fade');void bubble.offsetWidth;bubble.classList.add('mm-fade');
  bubble.innerHTML=
    '<div class="yg-result">'+
      '<div class="yg-found">找到你了! ✨ <b>'+foundLabel+'</b> 就藏在 π 小数点后第</div>'+
      '<div class="yg-pos">'+pos.toLocaleString()+' <small>位</small></div>'+
      '<div class="yg-snippet"><span class="dots">…'+pre+'</span><span class="hit">'+hit+'</span><span class="dots">'+post+'…</span></div>'+
      drawTarot(pos,bint)+
      '<div class="yg-why" id="ygWhy"><h4>🐒 那…为什么我生日在 π 里什么都找得到?</h4>'+
        '<p>让一只猴子乱敲键盘,只要够久,它总会打出一整部莎士比亚。π 小数点后的数字也一样——无穷无尽、毫无规律。数学家相信:任何一串数字(你的生日、"520"),迟早都会出现。不是 π 懂浪漫,而是它够长、够"随机"。</p>'+
        '<p class="en">Give a monkey a keyboard and enough time, it types all of Shakespeare.</p>'+
        '<p class="note">* 这仍是数学猜想(π 是否"正规数"尚未证明),但在已算出的数十万亿位里一直成立。</p></div>'+
      '<div class="yg-cta"><p class="yg-cta-q">🔮 那…塔罗牌是怎么"算"出来的?背后藏着一点点数学。</p>'+
        '<button class="yg-cta-btn" data-unlock>🔓 解锁下一课 · Unlock the next lesson →</button>'+
        '<p class="yg-cta-soon" id="ygSoon" hidden>✨ Master Mind「数学 × 塔罗」小课即将上线,敬请期待!</p></div>'+
      '<div class="yg-actions"><button class="yg-btn ghost" data-again>再抽一次 ↺</button></div>'+
    '</div>';
  setTimeout(()=>{const w=document.getElementById('ygWhy');if(w)w.classList.add('is-open');},500);
  const un=bubble.querySelector('[data-unlock]');if(un)un.onclick=()=>{const s=document.getElementById('ygSoon');if(s)s.hidden=false;un.disabled=true;};
  bubble.querySelector('[data-again]').onclick=()=>{kick();setTimeout(step2,500);};
}

if(bubble){ step1(); fetch('/assets/pi/pi-1m.txt').then(function(r){return r.text();}).then(function(t){PI=t.trim();}).catch(function(){PI='';}); }
})();
</script>
