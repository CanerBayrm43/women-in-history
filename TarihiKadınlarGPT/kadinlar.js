/* =====================================================================
   BURASI SENİN İÇERİK DOSYAN — yeni kadın eklemek için sadece bunu düzenle.
   1) Okul bilgileri  2) Alanlar (kategoriler)  3) Kadınlar listesi
   ===================================================================== */

/* 1) OKUL / SİTE BİLGİLERİ */
const SITE = {
  okul: "Tavşanlı Borsa İstanbul Anadolu Lisesi",
  slogan: "Sanatta, bilimde ve edebiyatta çığır açan kadınların hikâyeleri. Okulumuzun öğrencileri tarafından hazırlandı.",
  altYazi: "© 2026 · Okulunun adı · Tüm içerikler öğrencilerimiz tarafından hazırlanmıştır."
};

/* 2) ALANLAR — yeni alan eklemek için bir satır kopyala (id benzersiz olmalı).
   ikon: "palet", "atom" veya "kitap" */
const ALANLAR = [
  { id: "sanat",    ad: "Sanat",    ikon: "palet", aciklama: "Resim, müzik, opera ve sahne sanatlarında öncü kadınlar." },
  { id: "biyoloji",    ad: "Biyoloji,Tıp Bilimleri",    ikon: "atom",  aciklama: "Bİyoloji,Tıp ve sağlık ile ilgilenen kadınlar." },
  { id: "edebiyat", ad: "Edebiyat", ikon: "kitap", aciklama: "Roman, şiir ve fikir dünyasında kalem tutan kadınlar." },
  { id: "fizik", ad: "Fizik Bilimi ve Astronomi", ikon: "kitap", aciklama: "Fizik, Astronomi ve Uzay bilimi ile ilgilenen kadınlar." },
] 


/* 3) KADINLAR — yeni kadın eklemek için aşağıdaki bir bloğu kopyalayıp
   virgülle ayırarak yapıştır ve bilgileri değiştir.
   - id      : benzersiz, boşluksuz, küçük harf (örn. "fatma-aliye")
   - kategori: yukarıdaki ALANLAR'dan birinin id'si
   - foto    : "gorseller/dosya-adi.jpg" (gorseller klasörüne koy). Boş bırakırsan baş harfler görünür.
   - olum    : yaşıyorsa "" bırak
   - alinti  : istemezsen "" bırak
   - olaylar : istemezsen [] bırak                                              */
const KADINLAR = [
  /* ---------- SANAT ---------- */
  {
    id: "fahrelnissa-zeid", kategori: "sanat",
    ad: "Fahrelnissa Zeid", dogum: "1901", olum: "1991",
    unvan: "Ressam",
    foto: "",
    ozet: "Fahrelnissa Zeid, Türk resim sanatının en özgün isimlerinden biridir. Büyük boyutlu, canlı renkli soyut tuvalleriyle Paris ve Londra'da tanındı.",
    detaylar: [
      "İstanbul'da doğdu; Güzel Sanatlar Akademisi'nde eğitim aldı.",
      "Paris'teki sergileriyle uluslararası ilgi gördü.",
      "Soyut ekspresyonist bir dil geliştirdi; kıvrımlı ve kristal gibi parçalanmış formlar kullandı.",
      "Hayatının son yıllarını Ürdün'de geçirdi."
    ],
    alinti: "",
    olaylar: [
      { yil: "1901", metin: "İstanbul'da doğdu." },
      { yil: "1944", metin: "Türk resminde yeni bir akım olan D Grubu'nun kurucuları arasında yer aldı." },
      { yil: "1991", metin: "Amman'da hayatını kaybetti." }
    ]
  },
  {
    id: "mihri-musfik", kategori: "sanat",
    ad: "Mihri Müşfik Hanım", dogum: "1886", olum: "1954",
    unvan: "Ressam",
    foto: "",
    ozet: "Osmanlı'nın ilk kadın ressamlarından biri olan Mihri Müşfik Hanım, portreleriyle Avrupa ve Amerika'da ün kazandı.",
    detaylar: [
      "İstanbul'da doğdu; resim eğitimini Paris ve Roma'da sürdürdü.",
      "Portre ve figür çalışmalarıyla tanındı.",
      "Hayatının büyük bölümünü yurt dışında geçirdi.",
      "Kadınların sanat dünyasındaki yerini genişleten öncülerdendir."
    ],
    alinti: "",
    olaylar: [
      { yil: "1886", metin: "İstanbul'da doğdu." },
      { yil: "1954", metin: "İstanbul'da hayatını kaybetti." }
    ]
  },
  {
    id: "semiha-berksoy", kategori: "sanat",
    ad: "Semiha Berksoy", dogum: "1910", olum: "2004",
    unvan: "Opera sanatçısı, ressam ve oyuncu",
    foto: "",
    ozet: "Semiha Berksoy, Türkiye'de opera sanatının önde gelen isimlerinden biridir. Sahnede olduğu kadar resim ve tiyatroda da üretti.",
    detaylar: [
      "Türk opera tarihinin öncü sanatçılarındandır.",
      "Hem sahne hem resim alanında çok yönlü bir sanatçıydı.",
      "Uzun yıllar boyunca sahnede yer aldı.",
      "Yaşamı boyunca sanatın birçok dalında ürün verdi."
    ],
    alinti: "",
    olaylar: [
      { yil: "1910", metin: "İstanbul'da doğdu." },
      { yil: "2004", metin: "İstanbul'da hayatını kaybetti." }
    ]
  },

  /* ---------- BİLİM ---------- */
  {
    id: "marie-curie", kategori: "bilim",
    ad: "Marie Curie", dogum: "1867", olum: "1934",
    unvan: "Fizikçi ve kimyager",
    foto: "",
    ozet: "Marie Curie, radyoaktivite alanındaki çalışmalarıyla modern fiziğin ve kimyanın yolunu açtı. İki farklı bilim dalında Nobel Ödülü alan ilk kişidir.",
    detaylar: [
      "1903'te Fizik, 1911'de Kimya dalında Nobel Ödülü aldı.",
      "Polonyum ve radyum elementlerinin keşfinde yer aldı.",
      "“Radyoaktivite” terimini ortaya atan bilim insanıdır.",
      "Birinci Dünya Savaşı'nda seyyar röntgen cihazlarıyla yaralıların tedavisine katkı verdi."
    ],
    alinti: "",
    olaylar: [
      { yil: "1867", metin: "Varşova'da doğdu." },
      { yil: "1903", metin: "Fizik alanında Nobel Ödülü'nü aldı." },
      { yil: "1911", metin: "Kimya alanında ikinci Nobel Ödülü'nü aldı." },
      { yil: "1934", metin: "Fransa'da hayatını kaybetti." }
    ]
  },
  {
    id: "hypatia", kategori: "bilim",
    ad: "Hypatia", dogum: "yaklaşık 360", olum: "415",
    unvan: "Matematikçi, astronom ve filozof",
    foto: "",
    ozet: "Hypatia, Antik İskenderiye'de yaşamış matematikçi, astronom ve filozoftur. Bilinen ilk kadın matematikçilerden biri olarak anılır.",
    detaylar: [
      "İskenderiye'de ders verdi; öğrencileri arasında önemli kişiler vardı.",
      "Matematik ve astronomi üzerine çalışmalar yaptı.",
      "Hakkındaki bilgilerin büyük kısmı sonraki dönem kaynaklarından gelir.",
      "Bilim tarihinde akıl ve araştırmanın simgelerinden biri sayılır."
    ],
    alinti: "",
    olaylar: [
      { yil: "~360", metin: "İskenderiye'de doğduğu kabul edilir." },
      { yil: "415", metin: "İskenderiye'de hayatını kaybetti." }
    ]
  },
  {
    id: "ada-lovelace", kategori: "bilim",
    ad: "Ada Lovelace", dogum: "1815", olum: "1852",
    unvan: "Matematikçi ve ilk programcı olarak anılır",
    foto: "",
    ozet: "Ada Lovelace, Charles Babbage'ın Analitik Makine'si üzerine yazdığı notlarla bilinir. Bir makine için yazılmış ilk algoritmayı içeren bu notlar nedeniyle “ilk programcı” olarak anılır.",
    detaylar: [
      "Londra'da doğdu; matematik eğitimi aldı.",
      "Analitik Makine için yazdığı notlar bilgisayar tarihinde önemli bir yer tutar.",
      "Makinelerin yalnızca sayı değil, farklı simgelerle de çalışabileceğini öngördü.",
      "Günümüzde adı programlama dilleri ve ödüllerle yaşatılıyor."
    ],
    alinti: "",
    olaylar: [
      { yil: "1815", metin: "Londra'da doğdu." },
      { yil: "1843", metin: "Analitik Makine üzerine notlarını yayımladı." },
      { yil: "1852", metin: "Londra'da hayatını kaybetti." }
    ]
  },

  /* ---------- EDEBİYAT ---------- */
  {
    id: "fatma-aliye", kategori: "edebiyat",
    ad: "Fatma Aliye", dogum: "1862", olum: "1936",
    unvan: "Yazar ve fikir insanı",
    foto: "",
    ozet: "Fatma Aliye, Türk edebiyatının ilk kadın romancısı kabul edilir. Eserlerinde kadınların eğitimi ve toplumdaki yeri gibi konulara değindi.",
    detaylar: [
      "Ünlü devlet adamı Ahmed Cevdet Paşa'nın kızıdır.",
      "“Muhadarat” adlı romanı 1892'de yayımlandı.",
      "Kadın hakları ve eğitim üzerine yazılar yazdı.",
      "Yazdıklarıyla sonraki kuşak kadın yazarlara yol açtı."
    ],
    alinti: "",
    olaylar: [
      { yil: "1862", metin: "İstanbul'da doğdu." },
      { yil: "1892", metin: "“Muhadarat” romanı yayımlandı." },
      { yil: "1936", metin: "İstanbul'da hayatını kaybetti." }
    ]
  },
  {
    id: "halide-edib", kategori: "edebiyat",
    ad: "Halide Edib Adıvar", dogum: "1884", olum: "1964",
    unvan: "Romancı, siyaset ve fikir insanı",
    foto: "",
    ozet: "Halide Edib Adıvar, Türk edebiyatının en tanınmış romancılarındandır. Millî Mücadele yıllarında hem kalemiyle hem de görev alarak yer aldı.",
    detaylar: [
      "“Sinekli Bakkal” ve “Vurun Kahpeye” en bilinen romanlarındandır.",
      "Millî Mücadele döneminde etkin görevler üstlendi.",
      "Üniversitede öğretim üyeliği yaptı.",
      "Eserleri birçok dile çevrildi."
    ],
    alinti: "",
    olaylar: [
      { yil: "1884", metin: "İstanbul'da doğdu." },
      { yil: "1964", metin: "İstanbul'da hayatını kaybetti." }
    ]
  }
  /* ← yeni kadını buraya, virgülle ayırarak ekle */
];
