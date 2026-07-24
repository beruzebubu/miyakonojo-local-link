const jobs = [
  {id:"beauty-assistant",title:"美容室アシスタント・受付スタッフ",company:"ローカル美容室 都城店",area:"都城市",address:"都城市中心部",category:"美容・理容",type:"アルバイト・パート",salary:"時給1,050円〜1,300円",salaryValue:1300,summary:"未経験OK。受付・清掃・施術補助から始め、希望者は美容技術も学べます。",hours:"9:00〜18:30の間で4時間以上",holidays:"週2日〜／月曜定休",access:"都城駅から車で8分",tags:["未経験OK","短時間勤務","子育て両立","車通勤可"],image:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=82",published:"2026-07-24",description:"地域のお客様が長く通う美容室で、受付、店内清掃、タオル準備、カラー塗布の補助などを担当します。美容業界が初めての方も、できる仕事から順番に覚えられます。",benefits:"交通費規定支給、商品割引、技術研修、雇用保険（勤務条件による）",contact:"example@example.com"},
  {id:"cafe-staff",title:"昼だけ働けるカフェスタッフ",company:"都城ローカルカフェ",area:"都城市",address:"都城市上川東",category:"飲食・接客",type:"アルバイト・パート",salary:"時給1,050円〜",salaryValue:1050,summary:"10時〜15時中心。注文受付、ドリンク、簡単な盛り付けを担当します。",hours:"10:00〜15:00／週3日〜",holidays:"シフト制／土日休み相談可",access:"都城駅から車で6分",tags:["子育て両立","短時間勤務","未経験OK","土日休み相談"],image:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=82",published:"2026-07-22",description:"ランチタイム中心の店舗スタッフです。メニュー数を絞っているため、飲食未経験でも仕事を覚えやすい環境です。",benefits:"まかない、制服貸与、交通費規定支給、扶養内勤務可",contact:"example@example.com"},
  {id:"food-production",title:"味噌・醤油の食品製造スタッフ",company:"南九州食品製造所",area:"都城市",address:"都城市西町",category:"製造・工場",type:"正社員",salary:"月給19万円〜30万円",salaryValue:300000,summary:"地域の食を支える製造職。原料準備、充填、検品、出荷作業を担当します。",hours:"8:00〜17:00（休憩60分）",holidays:"週休2日／年間休日110日",access:"西都城駅から徒歩7分",tags:["正社員","未経験OK","社会保険","賞与あり"],image:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=82",published:"2026-07-18",description:"味噌・醤油などの製造工程に携わります。最初は検品や包装から始め、慣れてきたら製造機械の操作も担当します。",benefits:"社会保険完備、賞与年2回、昇給、退職金制度、制服貸与",contact:"example@example.com"},
  {id:"office-mimata",title:"地域企業の一般事務スタッフ",company:"三股ビジネスサポート",area:"三股町",address:"北諸県郡三股町樺山",category:"事務・オフィス",type:"正社員",salary:"月給18万円〜24万円",salaryValue:240000,summary:"電話対応、データ入力、請求書作成など。残業は月平均5時間以内です。",hours:"8:30〜17:30",holidays:"土日祝休み／年間休日120日",access:"三股駅から車で5分",tags:["土日休み","残業少なめ","社会保険","車通勤可"],image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82",published:"2026-07-20",description:"地域企業のバックオフィス業務です。Excelへの入力、電話・来客対応、請求書の発行を担当します。",benefits:"社会保険完備、交通費、賞与、資格取得支援、無料駐車場",contact:"example@example.com"},
  {id:"care-soo",title:"デイサービス介護補助・送迎",company:"曽於いきいきデイサービス",area:"曽於市",address:"曽於市末吉町",category:"介護・福祉",type:"アルバイト・パート",salary:"時給1,100円〜1,350円",salaryValue:1350,summary:"資格なしから始められる介護補助。利用者の見守り、食事準備、送迎補助です。",hours:"8:30〜16:30の間で5時間以上",holidays:"日曜休み／週3日〜",access:"末吉ICから車で12分",tags:["資格不要","未経験OK","日曜休み","車通勤可"],image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=82",published:"2026-07-23",description:"利用者の見守り、レクリエーション補助、食事準備、送迎車への乗降補助を行います。介護資格がない方も応募できます。",benefits:"資格取得支援、制服貸与、交通費、雇用保険（勤務条件による）",contact:"example@example.com"},
  {id:"delivery-soo",title:"固定ルート配送ドライバー",company:"南九州ローカル配送",area:"曽於市",address:"曽於市財部町",category:"配送・物流",type:"正社員",salary:"月給23万円〜32万円",salaryValue:320000,summary:"県内中心の固定ルート。毎日ほぼ同じ時間に帰れる配送業務です。",hours:"7:00〜16:00",holidays:"週休2日／希望休あり",access:"財部駅から車で7分",tags:["正社員","残業少なめ","社会保険","未経験OK"],image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=82",published:"2026-07-15",description:"スーパーや飲食店へのルート配送です。配送先は県内中心で、長距離運転や深夜勤務はありません。",benefits:"社会保険完備、賞与、無事故手当、資格取得支援、制服貸与",contact:"example@example.com"}
];

const state={keyword:"",area:"",type:"",category:"",sort:"recommended",tag:"",favoriteOnly:false};
const favoriteKey="miyakonjo-work-favorites";
let favorites=new Set(JSON.parse(localStorage.getItem(favoriteKey)||"[]"));
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const categories=[...new Set(jobs.map(j=>j.category))];
const tags=[...new Set(jobs.flatMap(j=>j.tags))];

function init(){
  categories.forEach(c=>$("#categoryFilter").insertAdjacentHTML("beforeend",`<option>${c}</option>`));
  $("#quickFilters").innerHTML=tags.map(t=>`<button class="chip" data-tag="${t}">${t}</button>`).join("");
  $("#instagramJob").innerHTML=jobs.map(j=>`<option value="${j.id}">${j.title}｜${j.company}</option>`).join("");
  $("#jobCountHero").textContent=jobs.length;
  bindEvents();renderJobs();drawInstagram();
}

function bindEvents(){
  $("#heroSearch").addEventListener("submit",e=>{e.preventDefault();state.keyword=$("#heroKeyword").value.trim();state.area=$("#heroArea").value;$("#keywordFilter").value=state.keyword;$("#areaFilter").value=state.area;renderJobs();location.hash="jobs"});
  [["#keywordFilter","keyword","input"],["#areaFilter","area","change"],["#typeFilter","type","change"],["#categoryFilter","category","change"],["#sortFilter","sort","change"]].forEach(([sel,key,event])=>$(sel).addEventListener(event,e=>{state[key]=e.target.value;renderJobs()}));
  $("#favoriteOnly").addEventListener("change",e=>{state.favoriteOnly=e.target.checked;renderJobs()});
  $("#quickFilters").addEventListener("click",e=>{const b=e.target.closest("[data-tag]");if(!b)return;state.tag=state.tag===b.dataset.tag?"":b.dataset.tag;renderJobs()});
  $("#resetFilters").addEventListener("click",()=>{Object.assign(state,{keyword:"",area:"",type:"",category:"",sort:"recommended",tag:"",favoriteOnly:false});$$(".filters input").forEach(x=>x.value="");$$(".filters select").forEach(x=>x.selectedIndex=0);$("#favoriteOnly").checked=false;renderJobs()});
  $("#jobList").addEventListener("click",e=>{const fav=e.target.closest("[data-favorite]");if(fav){toggleFavorite(fav.dataset.favorite);return}const detail=e.target.closest("[data-detail]");if(detail)openJob(detail.dataset.detail)});
  $("#closeDialog").addEventListener("click",()=>$("#jobDialog").close());
  $("#jobDialog").addEventListener("click",e=>{if(e.target===$("#jobDialog"))$("#jobDialog").close()});
  $("#menuButton").addEventListener("click",()=>{const nav=$("#mainNav");nav.classList.toggle("open");$("#menuButton").setAttribute("aria-expanded",nav.classList.contains("open"))});
  $$("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
  ["#instagramJob","#instagramHeadline","#instagramContact"].forEach(s=>$(s).addEventListener("input",drawInstagram));
  $("#downloadInstagram").addEventListener("click",downloadInstagram);
  $("#copyCaption").addEventListener("click",copyCaption);
}

function filteredJobs(){
  const key=state.keyword.toLowerCase();
  let out=jobs.filter(j=>(!key||[j.title,j.company,j.summary,j.category,...j.tags].join(" ").toLowerCase().includes(key))&&(!state.area||j.area===state.area)&&(!state.type||j.type===state.type)&&(!state.category||j.category===state.category)&&(!state.tag||j.tags.includes(state.tag))&&(!state.favoriteOnly||favorites.has(j.id)));
  if(state.sort==="new")out.sort((a,b)=>b.published.localeCompare(a.published));
  if(state.sort==="salary")out.sort((a,b)=>b.salaryValue-a.salaryValue);
  return out;
}

function renderJobs(){
  const data=filteredJobs();$("#resultCount").textContent=data.length;$("#emptyState").hidden=data.length>0;
  $$(".chip").forEach(b=>b.classList.toggle("active",b.dataset.tag===state.tag));
  $("#jobList").innerHTML=data.map(j=>`<article class="job-card"><div class="job-card-image"><img src="${j.image}" alt="${j.company}の求人イメージ" loading="lazy"><span class="area-badge">${j.area}</span><button class="favorite-button ${favorites.has(j.id)?"active":""}" data-favorite="${j.id}" aria-label="お気に入り">${favorites.has(j.id)?"♥":"♡"}</button></div><div class="job-card-body"><div class="job-meta"><span class="tag">${j.type}</span>${j.tags.slice(0,2).map(t=>`<span class="tag">${t}</span>`).join("")}</div><h3>${j.title}</h3><p class="company">${j.company}</p><p>${j.summary}</p><div class="salary">${j.salary}</div><div class="job-card-footer"><span class="new-label">掲載 ${formatDate(j.published)}</span><button class="detail-button" data-detail="${j.id}">詳しく見る →</button></div></div></article>`).join("");
}

function toggleFavorite(id){favorites.has(id)?favorites.delete(id):favorites.add(id);localStorage.setItem(favoriteKey,JSON.stringify([...favorites]));showToast(favorites.has(id)?"お気に入りに保存しました":"お気に入りから外しました");renderJobs()}
function openJob(id){const j=jobs.find(x=>x.id===id);$("#jobDialogContent").innerHTML=`<div class="dialog-hero"><img src="${j.image}" alt="${j.company}"></div><div class="dialog-body"><div class="job-meta"><span class="tag">${j.area}</span><span class="tag">${j.type}</span>${j.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div><h2>${j.title}</h2><p class="company">${j.company}｜${j.address}</p><p class="dialog-summary">${j.summary}</p><div class="detail-grid"><div><strong>給与</strong><span>${j.salary}</span></div><div><strong>勤務時間</strong><span>${j.hours}</span></div><div><strong>休日</strong><span>${j.holidays}</span></div><div><strong>アクセス</strong><span>${j.access}</span></div></div><h3>仕事内容</h3><p>${j.description}</p><h3>待遇・福利厚生</h3><p>${j.benefits}</p><div class="apply-box"><strong>応募・見学について</strong><p>応募前の質問や職場見学も相談できます。求人番号：${j.id}</p><div class="apply-actions"><a class="primary-button" href="mailto:${j.contact}?subject=${encodeURIComponent(j.title+"への応募・問い合わせ")}&body=${encodeURIComponent("求人番号："+j.id+"\n氏名：\n電話番号：\n質問・希望：")}">メールで問い合わせる</a><button class="secondary-button" onclick="navigator.clipboard.writeText(location.href+'#jobs');document.querySelector('#toast').textContent='求人ページのURLをコピーしました';document.querySelector('#toast').classList.add('show');setTimeout(()=>document.querySelector('#toast').classList.remove('show'),1800)">URLを共有</button></div></div></div>`;$("#jobDialog").showModal()}
function formatDate(s){const d=new Date(s+"T00:00:00");return `${d.getMonth()+1}/${d.getDate()}`}
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove("show"),1800)}

function wrapText(ctx,text,maxWidth){const chars=[...text];const lines=[];let line="";for(const ch of chars){const test=line+ch;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=ch}else line=test}if(line)lines.push(line);return lines}
async function drawInstagram(){
  const canvas=$("#instagramCanvas"),ctx=canvas.getContext("2d"),j=jobs.find(x=>x.id===$("#instagramJob").value)||jobs[0];
  ctx.clearRect(0,0,1080,1350);ctx.fillStyle="#123f27";ctx.fillRect(0,0,1080,1350);
  const img=new Image();img.crossOrigin="anonymous";img.src=j.image;try{await img.decode();ctx.save();ctx.globalAlpha=.62;ctx.drawImage(img,0,0,1080,720);ctx.restore()}catch{}
  const grad=ctx.createLinearGradient(0,320,0,850);grad.addColorStop(0,"rgba(18,63,39,0)");grad.addColorStop(1,"#123f27");ctx.fillStyle=grad;ctx.fillRect(0,280,1080,650);
  ctx.fillStyle="#dff36b";ctx.font="900 34px sans-serif";ctx.fillText("みやこんじょWORK",70,90);
  ctx.fillStyle="#fff";ctx.font="900 48px sans-serif";wrapText(ctx,$("#instagramHeadline").value||"地元で、長く働ける仕事。",900).slice(0,2).forEach((l,i)=>ctx.fillText(l,70,610+i*60));
  ctx.font="900 70px sans-serif";wrapText(ctx,j.title,920).slice(0,3).forEach((l,i)=>ctx.fillText(l,70,780+i*82));
  ctx.fillStyle="#dff36b";ctx.font="900 46px sans-serif";ctx.fillText(j.salary,70,1050);
  ctx.fillStyle="#fff";ctx.font="700 30px sans-serif";ctx.fillText(`${j.area}｜${j.type}`,70,1110);ctx.fillText(j.company,70,1160);
  ctx.fillStyle="#dff36b";ctx.fillRect(70,1215,940,2);ctx.font="800 28px sans-serif";ctx.fillText($("#instagramContact").value||"詳しくはプロフィールのリンクから",70,1270);
}
function downloadInstagram(){drawInstagram().then(()=>{const j=jobs.find(x=>x.id===$("#instagramJob").value)||jobs[0];const a=document.createElement("a");a.download=`${j.id}-instagram.png`;a.href=$("#instagramCanvas").toDataURL("image/png");a.click();showToast("Instagram画像を保存しました")})}
async function copyCaption(){const j=jobs.find(x=>x.id===$("#instagramJob").value)||jobs[0];const caption=`【${j.area}の求人】\n${j.title}\n\n${j.summary}\n\n■勤務先\n${j.company}\n■雇用形態\n${j.type}\n■給与\n${j.salary}\n■勤務時間\n${j.hours}\n■休日\n${j.holidays}\n\n${$("#instagramContact").value}\n\n#都城求人 #三股求人 #曽於求人 #宮崎求人 #鹿児島求人 #地元で働く #みやこんじょWORK`;await navigator.clipboard.writeText(caption);showToast("投稿文をコピーしました")}
init();