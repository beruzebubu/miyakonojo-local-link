const jobs = [
  {id:"toto-izakaya",title:"居酒屋スタッフ（ホール・調理補助）",company:"酒と食 人人",area:"都城市",address:"都城市中町2-4 町田ビル1F",category:"飲食・接客",type:"アルバイト・パート",salary:"給与・勤務条件は確認中",summary:"西都城駅近くの居酒屋。接客、配膳、ドリンク、簡単な調理補助などを担当する掲載準備中の求人です。",hours:"勤務時間は店舗確認後に掲載",holidays:"勤務日数・休日は店舗確認後に掲載",access:"西都城駅から約619m",tags:["新着","条件確認中","飲食店","都城市中心部"],image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=82",published:"2026-07-24",description:"酒と食 人人の求人掲載準備ページです。仕事内容・給与・シフト・応募資格は、店舗から正式情報を確認後に更新します。現在は応募前相談として受け付けます。",benefits:"待遇・福利厚生は確認後に掲載",contact:"yosuke8110@gmail.com"},
  {id:"art-hair-grace",title:"美容師スタイリスト",company:"Art Hair GRACE",area:"都城市",address:"都城市栄町13-4",category:"美容・理容",type:"正社員",salary:"最低保証 月給25万円／歩合45％",summary:"年間休日120日。スタイリスト最低保証25万円に加え、地域最高水準の歩合45％を用意しています。",hours:"9:00〜18:30",holidays:"年間休日120日／年末年始12月31日〜1月4日",access:"JR都城駅近く・駐車場15台",tags:["年間休日120日","最低保証25万円","歩合45％","車通勤可"],image:"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=82",published:"2026-07-25",description:"Art Hair GRACEで勤務する美容師スタイリストを募集しています。休日をしっかり確保しながら、売上に応じて高い還元を受けられる給与体系です。最低保証は月給25万円。歩合は地域最高水準の45％で、安定と収入アップの両方を目指せます。",benefits:"年間休日120日。年末年始は12月31日から1月4日まで休業。スタイリスト最低保証月給25万円、歩合45％。その他の待遇は面談時に案内します。",contact:"yosuke8110@gmail.com"},
  {id:"beauty-assistant",title:"美容室アシスタント・受付スタッフ",company:"ローカル美容室 都城店",area:"都城市",address:"都城市中心部",category:"美容・理容",type:"アルバイト・パート",salary:"時給1,050円〜1,300円",summary:"未経験OK。受付・清掃・施術補助から始め、希望者は美容技術も学べます。",hours:"9:00〜18:30の間で4時間以上",holidays:"週2日〜／月曜定休",access:"都城駅から車で8分",tags:["未経験OK","短時間勤務","子育て両立","車通勤可"],image:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=82",published:"2026-07-24",description:"地域のお客様が長く通う美容室で、受付、店内清掃、タオル準備、カラー塗布の補助などを担当します。",benefits:"交通費規定支給、商品割引、技術研修、雇用保険（勤務条件による）",contact:"yosuke8110@gmail.com"},
  {id:"cafe-staff",title:"昼だけ働けるカフェスタッフ",company:"都城ローカルカフェ",area:"都城市",address:"都城市上川東",category:"飲食・接客",type:"アルバイト・パート",salary:"時給1,050円〜",summary:"10時〜15時中心。注文受付、ドリンク、簡単な盛り付けを担当します。",hours:"10:00〜15:00／週3日〜",holidays:"シフト制／土日休み相談可",access:"都城駅から車で6分",tags:["子育て両立","短時間勤務","未経験OK","土日休み相談"],image:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=82",published:"2026-07-22",description:"ランチタイム中心の店舗スタッフです。メニュー数を絞っているため、飲食未経験でも仕事を覚えやすい環境です。",benefits:"まかない、制服貸与、交通費規定支給、扶養内勤務可",contact:"yosuke8110@gmail.com"},
  {id:"food-production",title:"味噌・醤油の食品製造スタッフ",company:"南九州食品製造所",area:"都城市",address:"都城市西町",category:"製造・工場",type:"正社員",salary:"月給19万円〜30万円",summary:"地域の食を支える製造職。原料準備、充填、検品、出荷作業を担当します。",hours:"8:00〜17:00（休憩60分）",holidays:"週休2日／年間休日110日",access:"西都城駅から徒歩7分",tags:["正社員","未経験OK","社会保険","賞与あり"],image:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=82",published:"2026-07-18",description:"味噌・醤油などの製造工程に携わります。最初は検品や包装から始め、慣れてきたら製造機械の操作も担当します。",benefits:"社会保険完備、賞与年2回、昇給、退職金制度、制服貸与",contact:"yosuke8110@gmail.com"},
  {id:"office-mimata",title:"地域企業の一般事務スタッフ",company:"三股ビジネスサポート",area:"三股町",address:"北諸県郡三股町樺山",category:"事務・オフィス",type:"正社員",salary:"月給18万円〜24万円",summary:"電話対応、データ入力、請求書作成など。残業は月平均5時間以内です。",hours:"8:30〜17:30",holidays:"土日祝休み／年間休日120日",access:"三股駅から車で5分",tags:["土日休み","残業少なめ","社会保険","車通勤可"],image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82",published:"2026-07-20",description:"地域企業のバックオフィス業務です。Excelへの入力、電話・来客対応、請求書の発行を担当します。",benefits:"社会保険完備、交通費、賞与、資格取得支援、無料駐車場",contact:"yosuke8110@gmail.com"},
  {id:"care-soo",title:"デイサービス介護補助・送迎",company:"曽於いきいきデイサービス",area:"曽於市",address:"曽於市末吉町",category:"介護・福祉",type:"アルバイト・パート",salary:"時給1,100円〜1,350円",summary:"資格なしから始められる介護補助。利用者の見守り、食事準備、送迎補助です。",hours:"8:30〜16:30の間で5時間以上",holidays:"日曜休み／週3日〜",access:"末吉ICから車で12分",tags:["資格不要","未経験OK","日曜休み","車通勤可"],image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=82",published:"2026-07-23",description:"利用者の見守り、レクリエーション補助、食事準備、送迎車への乗降補助を行います。",benefits:"資格取得支援、制服貸与、交通費、雇用保険（勤務条件による）",contact:"yosuke8110@gmail.com"},
  {id:"delivery-soo",title:"固定ルート配送ドライバー",company:"南九州ローカル配送",area:"曽於市",address:"曽於市財部町",category:"配送・物流",type:"正社員",salary:"月給23万円〜32万円",summary:"県内中心の固定ルート。毎日ほぼ同じ時間に帰れる配送業務です。",hours:"7:00〜16:00",holidays:"週休2日／希望休あり",access:"財部駅から車で7分",tags:["正社員","残業少なめ","社会保険","未経験OK"],image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=82",published:"2026-07-15",description:"スーパーや飲食店へのルート配送です。配送先は県内中心で、長距離運転や深夜勤務はありません。",benefits:"社会保険完備、賞与、無事故手当、資格取得支援、制服貸与",contact:"yosuke8110@gmail.com"}
];

const state = {keyword:"", area:"", type:"", category:""};
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const categories = [...new Set(jobs.map(job => job.category))];

function init(){
  categories.forEach(category => $("#categoryFilter").insertAdjacentHTML("beforeend", `<option>${category}</option>`));
  $("#jobCountHero").textContent = jobs.length;
  bindEvents();
  renderJobs();
}

function bindEvents(){
  $("#heroSearch").addEventListener("submit", event => {
    event.preventDefault();
    state.keyword = $("#heroKeyword").value.trim().toLowerCase();
    state.area = $("#heroArea").value;
    $("#areaFilter").value = state.area;
    renderJobs();
    location.hash = "jobs";
  });

  [["#areaFilter","area"],["#typeFilter","type"],["#categoryFilter","category"]].forEach(([selector,key]) => {
    $(selector).addEventListener("change", event => {
      state[key] = event.target.value;
      renderJobs();
    });
  });

  $("#resetFilters").addEventListener("click", () => {
    Object.assign(state,{keyword:"",area:"",type:"",category:""});
    $("#heroKeyword").value = "";
    $("#heroArea").selectedIndex = 0;
    $("#areaFilter").selectedIndex = 0;
    $("#typeFilter").selectedIndex = 0;
    $("#categoryFilter").selectedIndex = 0;
    $$(".category-card").forEach(card => card.classList.remove("active"));
    renderJobs();
  });

  $("#jobList").addEventListener("click", event => {
    const detail = event.target.closest("[data-detail]");
    if (detail) openJob(detail.dataset.detail);
  });

  $("#closeDialog").addEventListener("click", () => $("#jobDialog").close());
  $("#jobDialog").addEventListener("click", event => { if(event.target === $("#jobDialog")) $("#jobDialog").close(); });
  $("#menuButton").addEventListener("click", () => {
    const nav = $("#mainNav");
    nav.classList.toggle("open");
    $("#menuButton").setAttribute("aria-expanded", nav.classList.contains("open"));
  });
  $$("#mainNav a").forEach(link => link.addEventListener("click", () => $("#mainNav").classList.remove("open")));
}

function filteredJobs(){
  return jobs.filter(job => {
    const haystack = `${job.title} ${job.company} ${job.summary} ${job.tags.join(" ")}`.toLowerCase();
    return (!state.keyword || haystack.includes(state.keyword)) && (!state.area || job.area === state.area) && (!state.type || job.type === state.type) && (!state.category || job.category === state.category);
  });
}

function renderJobs(){
  const data = filteredJobs();
  $("#resultCount").textContent = data.length;
  $("#emptyState").hidden = data.length > 0;
  $("#jobList").innerHTML = data.map(job => `
    <article class="job-card">
      <div class="job-card-image"><img src="${job.image}" alt="${job.company}の求人イメージ" loading="lazy"><span class="area-badge">${job.area}</span></div>
      <div class="job-card-body">
        <div class="job-meta"><span class="tag">${job.type}</span><span class="tag">${job.category}</span></div>
        <h3>${job.title}</h3><p class="company">${job.company}</p><p>${job.summary}</p><div class="salary">${job.salary}</div>
        <div class="job-card-footer"><span class="new-label">掲載 ${formatDate(job.published)}</span><button class="detail-button" data-detail="${job.id}">詳しく見る →</button></div>
      </div>
    </article>`).join("");
}

function openJob(id){
  const job = jobs.find(item => item.id === id);
  const subject = encodeURIComponent(`${job.title}への応募・問い合わせ`);
  const body = encodeURIComponent(`求人番号：${job.id}\n氏名：\n電話番号：\n質問・希望：`);
  $("#jobDialogContent").innerHTML = `
    <div class="dialog-hero"><img src="${job.image}" alt="${job.company}"></div>
    <div class="dialog-body"><div class="job-meta"><span class="tag">${job.area}</span><span class="tag">${job.type}</span><span class="tag">${job.category}</span></div>
    <h2>${job.title}</h2><p class="company">${job.company}｜${job.address}</p><p class="dialog-summary">${job.summary}</p>
    <div class="detail-grid"><div><strong>給与</strong><span>${job.salary}</span></div><div><strong>勤務時間</strong><span>${job.hours}</span></div><div><strong>休日</strong><span>${job.holidays}</span></div><div><strong>アクセス</strong><span>${job.access}</span></div></div>
    <h3>仕事内容</h3><p>${job.description}</p><h3>待遇・福利厚生</h3><p>${job.benefits}</p>
    <div class="apply-box"><strong>応募・見学について</strong><p>応募前の質問や職場見学も相談できます。</p><div class="apply-actions"><a class="primary-button" href="mailto:${job.contact}?subject=${subject}&body=${body}">メールで問い合わせる</a></div></div></div>`;
  $("#jobDialog").showModal();
}

function formatDate(value){ const date = new Date(`${value}T00:00:00`); return `${date.getMonth()+1}/${date.getDate()}`; }

init();