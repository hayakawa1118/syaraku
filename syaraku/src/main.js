import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <h1>SYARAKU MOTOR</h1>
    <p>地域密着のカーショップ</p>
  </header>

  <main>
    <section class="hero">
      <h2>あなたのカーライフをサポート</h2>
      <p>
        新車・中古車販売から整備、車検まで。<br>
        安心して任せられる町の車屋です。
      </p>
      <button>お問い合わせ</button>
    </section>

    <section class="services">
      <h2>サービス内容</h2>

      <div class="card">
        <h3>中古車販売</h3>
        <p>ご予算に合わせた最適な1台をご提案します。</p>
      </div>

      <div class="card">
        <h3>車検・整備</h3>
        <p>安心安全のメンテナンス対応。</p>
      </div>

      <div class="card">
        <h3>オイル交換</h3>
        <p>スピーディーに対応いたします。</p>
      </div>
    </section>
  </main>
`