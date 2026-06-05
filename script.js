const jobs = [
  {
    title:"美容室アシスタント・受付スタッフ",
    copy:"未経験OK｜週2日〜｜美容が好きな方歓迎",
    company:"ローカル美容室 都城店",
    access:"都城駅から車で8分",
    salary:"時給1,000円〜1,300円",
    type:"アルバイト・パート",
    image:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title:"カフェスタッフ",
    copy:"接客少なめ・短時間OK｜学生・主婦歓迎",
    company:"都城ローカルカフェ",
    access:"都城駅から車で6分",
    salary:"時給1,023円以上",
    type:"アルバイト・パート",
    image:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title:"食品製造・工場スタッフ",
    copy:"創業140年｜味噌・醤油づくりの製造スタッフ",
    company:"都城食品製造所",
    access:"西都城駅から徒歩7分",
    salary:"月給180,000円〜300,000円",
    type:"正社員",
    image:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title:"配送・仕分けスタッフ",
    copy:"軽作業中心｜飲料商品の仕分け・ピッキング",
    company:"都城倉庫",
    access:"都城ICから車で10分",
    salary:"時給1,050円",
    type:"アルバイト・パート",
    image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title:"動物病院アシスタント",
    copy:"動物医療に理解のある方。一緒にペットの命を守りませんか",
    company:"さがら動物病院",
    access:"都城駅から徒歩13分",
    salary:"月給225,000円〜310,000円",
    type:"正社員",
    image:"https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80"
  }
];

const list = document.getElementById("jobs");

list.innerHTML = jobs.map(job => `
  <article class="job-card">
    <img class="job-image" src="${job.image}" alt="">
    <div class="badge">${job.type}</div>
    <div class="favorite">☆</div>
    <div class="job-body">
      <h2 class="job-title">${job.title}</h2>
      <p class="job-copy">${job.copy}</p>
      <div class="job-info">
        <div>🏢 ${job.company}</div>
        <div>🚃 アクセス：${job.access}</div>
        <div class="salary">￥ ${job.salary}</div>
      </div>
    </div>
  </article>
`).join("");
