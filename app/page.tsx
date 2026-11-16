import Image from 'next/image'

const etsyUrl = 'https://www.etsy.com/search?q=Damelina+3D+prints'

const collections = [
  { number: '01', title: 'Vice City frames', description: 'Рамки за снимки с характер — цветни, персонални и създадени да пазят любимите ви моменти.', tag: 'НАЙ-ТЪРСЕНИ', tone: 'pink' },
  { number: '02', title: 'Любов от принтера', description: 'Малки жестове с голямо значение. Персонализирани подаръци за Свети Валентин и не само.', tag: 'С ЛЮБОВ', tone: 'coral' },
  { number: '03', title: 'GTA VI universe', description: 'Колекционерски 3D принтове за фенове на Vice City. Вдъхновени от естетиката на играта, направени с внимание към детайла.', tag: 'ФЕН КОЛЕКЦИЯ', tone: 'cyan' },
]

export default function Page() {
  return (
    <main>
      <div className="announcement">МАЛКИ СЕРИИ. ГОЛЯМА ЛИЧНОСТ. <span>ДЕТАЙЛ ВЪВ ВСЕКИ СЛОЙ</span></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Дамелина — начало"><span className="brand-mark">D</span><span>DAMELINA<small>3D PRINT STUDIO</small></span></a>
        <nav aria-label="Основна навигация"><a href="#kolekcii">Колекции</a><a href="#za-nas">За нас</a><a href="#kontakt">Контакт</a></nav>
        <a className="header-cta" href={etsyUrl} target="_blank" rel="noreferrer">Към Etsy <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> DAMELINA ЕООД · 3D PRINTING</p>
          <h1>От Vice City<br />с <em>любов.</em></h1>
          <p className="hero-text">Цвят, характер и детайл във всеки слой. Открийте 3D принтирани рамки и колекционерски находки, създадени за вашия свят.</p>
          <div className="hero-actions"><a className="button button-primary" href={etsyUrl} target="_blank" rel="noreferrer">Разгледай в Etsy <span>↗</span></a><a className="text-link" href="#kolekcii">Открий колекциите <span>↓</span></a></div>
          <div className="hero-note"><span className="note-line" /> <span>ПРИНТИРАНО С ГРИЖА<br /><b>Създадено да остане.</b></span></div>
        </div>
        <div className="hero-art" aria-label="Дизайнерска 3D принтирана рамка в неонови цветове">
          <div className="art-glow" />
          <Image src="/damelina-hero.png" alt="Ръчно завършена 3D принтирана рамка в розово и виолетово, вдъхновена от неоновия залез на Vice City" fill priority sizes="(max-width: 800px) 100vw, 50vw" className="hero-image" />
          <div className="art-stamp"><span>MADE IN</span><strong>BG</strong><span>WITH CARE</span></div>
          <div className="art-caption">01 / VICE CITY<br /><span>THE FRAME EDITION</span></div>
        </div>
        <div className="hero-bottom"><span>DESIGNED WITH CARE</span><span>ЦВЯТ · ФОРМА · ХАРАКТЕР</span><span>ЛИСТ ПО ЛИСТ · СЛОЙ ПО СЛОЙ</span></div>
      </section>

      <section className="ticker" aria-label="Нашите предложения"><div>3D ПРИНТИНГ <b>✳</b> GTA VI ВДЪХНОВЕНИЕ <b>✳</b> ПЕРСОНАЛИЗИРАНИ РАМКИ <b>✳</b> ДИЗАЙН С ХАРАКТЕР <b>✳</b> 3D ПРИНТИНГ <b>✳</b> GTA VI ВДЪХНОВЕНИЕ <b>✳</b></div></section>

      <section className="collections section-wrap" id="kolekcii">
        <div className="section-heading"><div><p className="eyebrow">ИЗБЕРИ СВОЯ СВЯТ</p><h2>Принтираме <em>усещане.</em></h2></div><p>Всеки предмет започва с идея<br />и завършва с нещо истинско.</p></div>
        <div className="collection-grid">{collections.map((item) => <article className={`collection-card ${item.tone}`} key={item.number}><div className="card-top"><span>{item.number} / 03</span><span className="card-tag">{item.tag}</span></div><div className="card-graphic" aria-hidden="true"><div className="graphic-shape"><span /></div><span className="graphic-orbit" /></div><div className="card-copy"><h3>{item.title}</h3><p>{item.description}</p><a href={etsyUrl} target="_blank" rel="noreferrer">Разгледай <span>↗</span></a></div></article>)}</div>
      </section>

      <section className="manifesto" id="za-nas"><div className="manifesto-inner"><p className="eyebrow">ДИЗАЙН С ХАРАКТЕР</p><h2>Не е масово.<br /><em>И точно затова</em><br />е специално.</h2><div className="manifesto-bottom"><p>Дамелина ЕООД превръща добрите идеи в предмети, които искате да докоснете. Работим с Bambu Lab 3D принтери и подбираме всеки цвят, форма и финиш с внимание към детайла.</p><a className="button button-light" href={etsyUrl} target="_blank" rel="noreferrer">Намери ни в Etsy <span>↗</span></a></div></div><span className="manifesto-orb orb-one"/><span className="manifesto-orb orb-two"/></section>

      <section className="process section-wrap"><p className="eyebrow">СЛОЙ ПО СЛОЙ</p><div className="process-row"><h2>От идея<br />до <em>обект.</em></h2><div className="process-steps"><div><span>01</span><p><b>Идея</b> — избираме дизайн и цветове.</p></div><div><span>02</span><p><b>Принт</b> — Bambu Lab прецизно изгражда всеки слой.</p></div><div><span>03</span><p><b>Твоят момент</b> — готово за подарък или за теб.</p></div></div></div></section>

      <footer id="kontakt"><div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark">D</span><span>DAMELINA<small>3D PRINT STUDIO</small></span></a><p>Предмети с характер.<br />Създадени с грижа, слой по слой.</p><a className="button button-primary" href={etsyUrl} target="_blank" rel="noreferrer">Посети Etsy магазина <span>↗</span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ДАМЕЛИНА ЕООД</span><span>СЪЗДАДЕНО С ГРИЖА</span><a href={etsyUrl} target="_blank" rel="noreferrer">ETSY SHOP ↗</a></div></footer>
    </main>
  )
}
