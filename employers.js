const employerStyle = document.createElement('link');
employerStyle.rel = 'stylesheet';
employerStyle.href = 'employers.css';
document.head.appendChild(employerStyle);

const employerForm = document.querySelector('#employerForm');

if (employerForm) {
  employerForm.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(employerForm);
    const get = key => (data.get(key) || '').toString().trim() || '未記入';

    const subject = `【みやこんじょWORK】求人掲載相談｜${get('company')}`;
    const body = [
      'みやこんじょWORK 求人掲載相談',
      '',
      `会社・店舗名：${get('company')}`,
      `担当者名：${get('person')}`,
      `電話番号：${get('phone')}`,
      `メールアドレス：${get('email')}`,
      `所在地：${get('address')}`,
      '',
      `募集職種：${get('job')}`,
      `雇用形態：${get('type')}`,
      `給与：${get('salary')}`,
      `勤務時間：${get('hours')}`,
      `休日：${get('holidays')}`,
      '',
      '仕事内容：',
      get('description'),
      '',
      '応募資格・歓迎条件：',
      get('requirements'),
      '',
      '福利厚生・待遇：',
      get('benefits'),
      '',
      `希望する応募方法：${get('applyMethod')}`,
      `希望する掲載プラン：${get('plan')}`,
      '',
      '補足・相談事項：',
      get('note'),
      '',
      '写真がある場合は、このメールに添付してください。'
    ].join('\n');

    window.location.href = `mailto:yosuke8110@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}