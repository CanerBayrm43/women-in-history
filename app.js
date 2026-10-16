/* Site davranışları: kategori kartları, kadın kartları, detay penceresi ve favoriler. */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const ikonlar = { palet: '🎨', atom: '⚛️', kitap: '📚', tarih: '🏛️', siyaset: '⚖️', spor: '🏅', muzik: '🎼', teknoloji: '💻' };
  const alanListe = $('alanListe'), kartlar = $('kartlar'), ara = $('ara');
  const detay = $('detay'), favDialog = $('favDialog');
  let seciliAlan = 'tum', acikKadin = null;
  let favoriler = [];
  try { favoriler = JSON.parse(localStorage.getItem('unutulmayanKadinlarFavoriler') || '[]'); } catch (_) {}

  const guvenli = (s = '') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const alanAdi = id => (ALANLAR.find(a => a.id === id) || {}).ad || id;
  const tarih = k => k.dogum + (k.olum ? ' – ' + k.olum : ' – Yaşıyor');
  const harfler = ad => ad.trim().split(/\s+/).slice(0, 2).map(x => x[0] || '').join('').toLocaleUpperCase('tr-TR');
  const fotoHtml = (k, cls='foto') => k.foto
    ? `<div class="${cls}"><img src="${guvenli(k.foto)}" alt="${guvenli(k.ad)}" loading="lazy" onerror="this.remove();this.parentElement.textContent='${guvenli(harfler(k.ad))}'"></div>`
    : `<div class="${cls}" role="img" aria-label="${guvenli(k.ad)} için fotoğraf eklenmemiş"><span>${guvenli(harfler(k.ad))}</span></div>`;

  function kaydetFavoriler() {
    try { localStorage.setItem('unutulmayanKadinlarFavoriler', JSON.stringify(favoriler)); } catch (_) {}
    $('favSay').textContent = favoriler.length;
  }
  function alanlariCiz() {
    alanListe.innerHTML = `<button class="alan" type="button" data-alan="tum" aria-selected="${seciliAlan==='tum'}"><span aria-hidden="true">✦</span><h3>Tüm kadınlar</h3><p>Bütün alanlardaki kadınları keşfet.</p><span class="adet">${KADINLAR.length} kadın</span></button>` + ALANLAR.map(a => {
      const adet = KADINLAR.filter(k => k.kategori === a.id).length;
      return `<button class="alan" type="button" data-alan="${guvenli(a.id)}" aria-selected="${seciliAlan===a.id}"><span aria-hidden="true">${ikonlar[a.ikon] || '✦'}</span><h3>${guvenli(a.ad)}</h3><p>${guvenli(a.aciklama || '')}</p><span class="adet">${adet} kadın</span></button>`;
    }).join('');
  }
  function gorunenKadınlar() {
    const q = (ara.value || '').toLocaleLowerCase('tr-TR').trim();
    return KADINLAR.filter(k => (seciliAlan === 'tum' || k.kategori === seciliAlan) && (!q || [k.ad,k.unvan,k.ozet,alanAdi(k.kategori),...(k.detaylar||[])].join(' ').toLocaleLowerCase('tr-TR').includes(q)));
  }
  function kadinKarti(k, mini=false) {
    return `<article class="kart">${fotoHtml(k)}<div class="kart-g"><p class="etiket">${guvenli(alanAdi(k.kategori))}</p><h3>${guvenli(k.ad)}</h3><p class="tarih">${guvenli(tarih(k))}</p><p>${guvenli(k.unvan || '')}</p>${mini?'':`<button class="btn btn-kucuk" type="button" data-detay="${guvenli(k.id)}">Hikâyesini keşfet</button>`}</div></article>`;
  }
  function kadinlariCiz() {
    const liste = gorunenKadınlar();
    $('listeBaslik').textContent = seciliAlan === 'tum' ? 'Tüm kadınlar' : alanAdi(seciliAlan);
    $('listeAlt').textContent = `${liste.length} kadın listeleniyor. Bir profili açarak hikâyesini okuyabilirsin.`;
    kartlar.innerHTML = liste.map(k => kadinKarti(k)).join('');
    $('bos').hidden = liste.length !== 0;
  }
  function detayAc(id) {
    const k = KADINLAR.find(x => x.id === id); if (!k) return;
    acikKadin = id;
    $('dFoto').innerHTML = k.foto ? `<img src="${guvenli(k.foto)}" alt="${guvenli(k.ad)}" onerror="this.remove();this.parentElement.textContent='${guvenli(harfler(k.ad))}'">` : `<span>${guvenli(harfler(k.ad))}</span>`;
    $('dKat').textContent = alanAdi(k.kategori); $('dAd').textContent = k.ad;
    $('dTarih').textContent = tarih(k); $('dUnvan').textContent = k.unvan || '';
    $('dOzet').textContent = k.ozet || '';
    $('dAlinti').hidden = !k.alinti; $('dAlinti').textContent = k.alinti || '';
    $('dDetay').innerHTML = (k.detaylar || []).map(x => `<li>${guvenli(x)}</li>`).join('');
    $('dZamanBlok').hidden = !(k.olaylar || []).length;
    $('dZaman').innerHTML = (k.olaylar || []).map(x => `<li><strong>${guvenli(x.yil)}</strong> ${guvenli(x.metin)}</li>`).join('');
    $('dFav').textContent = favoriler.includes(id) ? '★ Favorilerden çıkar' : '☆ Favorilere ekle';
    detay.showModal();
  }
  function favorileriAc() {
    const liste = KADINLAR.filter(k => favoriler.includes(k.id));
    $('favListe').innerHTML = liste.map(k => kadinKarti(k, true).replace('class="kart"','class="kart"')).join('');
    $('favBos').hidden = liste.length > 0;
    favDialog.showModal();
  }
  function gez(dir) {
    const liste = gorunenKadınlar(); if (!liste.length) return;
    let i = liste.findIndex(k => k.id === acikKadin); i = (i + dir + liste.length) % liste.length; detayAc(liste[i].id);
  }

  $('marka').textContent = 'İz Bırakan Kadınlar';
  $('okulAdi').textContent = SITE.okul && !SITE.okul.startsWith('OKULUNUN') ? SITE.okul : 'BİR HAFIZA VE KEŞİF ARŞİVİ';
  $('slogan').textContent = SITE.slogan || 'Tarihe iz bırakan kadınların hikâyelerini yeniden keşfet.';
  $('altYazi').textContent = SITE.altYazi || 'Tarihe iz bırakan kadınların hikâyeleri.';
  $('sKadin').textContent = KADINLAR.length; $('sAlan').textContent = ALANLAR.length;
  kaydetFavoriler(); alanlariCiz(); kadinlariCiz();

  alanListe.addEventListener('click', e => { const b = e.target.closest('[data-alan]'); if (!b) return; seciliAlan = b.dataset.alan; alanlariCiz(); kadinlariCiz(); $('kadinlar').scrollIntoView({behavior:'smooth'}); });
  ara.addEventListener('input', kadinlariCiz);
  kartlar.addEventListener('click', e => { const b = e.target.closest('[data-detay]'); if (b) detayAc(b.dataset.detay); });
  $('rastgele').addEventListener('click', () => { if (KADINLAR.length) detayAc(KADINLAR[Math.floor(Math.random()*KADINLAR.length)].id); });
  $('favAc').addEventListener('click', favorileriAc);
  $('kapat').addEventListener('click', () => detay.close());
  $('favKapat').addEventListener('click', () => favDialog.close());
  $('dFav').addEventListener('click', () => { if (!acikKadin) return; favoriler = favoriler.includes(acikKadin) ? favoriler.filter(x => x !== acikKadin) : [...favoriler, acikKadin]; kaydetFavoriler(); $('dFav').textContent = favoriler.includes(acikKadin) ? '★ Favorilerden çıkar' : '☆ Favorilere ekle'; });
  $('onceki').addEventListener('click', () => gez(-1)); $('sonraki').addEventListener('click', () => gez(1));
  $('favListe').addEventListener('click', e => { const b = e.target.closest('[data-detay]'); if (b) { favDialog.close(); detayAc(b.dataset.detay); } });
})();
