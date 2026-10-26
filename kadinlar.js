/* =====================================================================
   BURASI SENİN İÇERİK DOSYAN — yeni kadın eklemek için sadece bunu düzenle.
   1) Okul bilgileri  2) Alanlar (kategoriler)  3) Kadınlar listesi
   ===================================================================== */

/* 1) OKUL / SİTE BİLGİLERİ */
const SITE = {
  okul: "Tavşanlı Borsa İstanbul Anadolu Lisesi",
  slogan: "Bilimde, sanatta, siyasette ve toplumsal hayatta çığır açan kadınların hikâyeleri. Okulumuzun öğrencileri tarafından hazırlandı.",
  altYazi: "© 2026 · Tavşanlı Borsa İstanbul Anadolu Lisesi · Tüm içerikler öğrencilerimiz tarafından hazırlanmıştır."
};

/* 2) ALANLAR — yeni alan eklemek için bir satır kopyala (id benzersiz olmalı).
   ikon seçenekleri: "palet", "atom", "kitap", "tarih", "siyaset", "spor", "muzik", "teknoloji" */
const ALANLAR = [
  { id: "fizik",     ad: "Fizik, Astronomi ve Uzay Bilimleri",  ikon: "atom",      aciklama: "Fizik, astronomi ve uzay bilimlerinde çığır açan kadınlar." },
  { id: "biyoloji",  ad: "Biyoloji, Tıp ve Sağlık Bilimleri",   ikon: "kitap",     aciklama: "Yaşam bilimleri, tıp ve halk sağlığı alanında öncü kadınlar." },
  { id: "matematik", ad: "Matematik, Bilgisayar ve Mühendislik", ikon: "teknoloji", aciklama: "Sayıların, algoritmaların ve mühendisliğin dünyasında iz bırakan kadınlar." },
  { id: "hukumdar",  ad: "Türk ve İslam Tarihi Hükümdarları, Siyasi ve Askeri Liderler", ikon: "tarih", aciklama: "Devlet yöneten, ordu komuta eden ve siyasete yön veren kadınlar." },
  { id: "islam",     ad: "İslam Tarihi Öncüleri ve Şahsiyetleri", ikon: "kitap",   aciklama: "İslam tarihinde ilim, edep ve hizmetle öne çıkan kadınlar." },
  { id: "sanat",     ad: "Sanat, Edebiyat, Sahne ve Sanat Tarihi", ikon: "palet",  aciklama: "Resim, müzik, sahne ve edebiyatta kalem ve fırça tutan kadınlar." },
  { id: "toplum",    ad: "Toplumsal Mücadele, Savunma ve Kamu Hizmeti", ikon: "siyaset", aciklama: "Hak mücadelesi veren, toplumuna ve ülkesine hizmet eden kadınlar." }
];

/* 3) KADINLAR — yeni kadın eklemek için aşağıdaki bir bloğu kopyalayıp
   virgülle ayırarak yapıştır ve bilgileri değiştir.
   - id      : benzersiz, boşluksuz, küçük harf (örn. "fatma-aliye")
   - kategori: yukarıdaki ALANLAR'dan birinin id'si
   - foto    : "gorseller/dosya-adi.jpg" (gorseller klasörüne koy). Boş bırakırsan baş harfler görünür.
   - olum    : yaşıyorsa "" bırak
   - alinti  : istemezsen "" bırak
   - olaylar : istemezsen [] bırak                                              */
const KADINLAR = [

  /* ================= FİZİK, ASTRONOMİ VE UZAY BİLİMLERİ ================= */
  {
    id: "marie-curie", kategori: "fizik",
    ad: "Marie Curie", dogum: "1867", olum: "1934",
    unvan: "Fizikçi ve Kimyager",
    foto: "gorseller/marie-curie.jpg",
    ozet: "Radyoaktivite üzerine çığır açan çalışmalarıyla iki farklı bilim alanında (Fizik ve Kimya) Nobel Ödülü kazanan ilk ve tek bilim insanıdır. Polonyum ve radyum elementlerini keşfederek modern nükleer bilimin ve kanser tedavisinde kullanılan radyoterapinin temellerini atmıştır.",
    detaylar: [
      "Polonya'da doğup maddi imkânsızlıklara rağmen Paris'e giderek Sorbonne Üniversitesi'nde fizik ve matematik alanlarında dereceyle mezun oldu.",
      "Eşi Pierre Curie ile birlikte uranyum cevherlerinden radyoaktif bozunmayı inceleyerek Polonyum ve Radyum elementlerini izole etmeyi başardı.",
      "I. Dünya Savaşı sırasında cephe gerisinde yaralı askerlerin tedavisi için taşınabilir X-ışını (röntgen) üniteleri tasarladı ve bizzat sahada kullandı."
    ],
    alinti: "Hayatta hiçbir şeyden korkulmamalı, her şey anlaşılmalıdır. Şimdi daha çok anlama zamanı, böylece daha az korkabiliriz.",
    olaylar: [
      { yil: "1867", metin: "Polonya'nın Varşova kentinde dünyaya geldi." },
      { yil: "1903", metin: "Radyoaktivite üzerine çalışmalarıyla Nobel Fizik Ödülü'nü kazandı ve Nobel alan ilk kadın oldu." },
      { yil: "1911", metin: "Saf radyum ve polonyumu izole etmesiyle Nobel Kimya Ödülü'ne layık görüldü." },
      { yil: "1934", metin: "Fransa'da hayatını kaybetti." }
    ]
  },
  {
    id: "lise-meitner", kategori: "fizik",
    ad: "Lise Meitner", dogum: "1878", olum: "1968",
    unvan: "Nükleer Fizikçi",
    foto: "gorseller/lise-meitner.jpg",
    ozet: "Atom çekirdeğinin bölünmesi anlamına gelen nükleer fisyonun teorik açıklamasını ilk kez yapan ve nükleer enerjinin kapısını aralayan Avusturyalı teorik fizikçidir.",
    detaylar: [
      "Viyana Üniversitesi'nde fizik doktorası alan ikinci kadın oldu ve Max Planck'ın derslerine katılmasına izin verilen ilk kadın olarak Berlin'e gitti.",
      "Kimyager Otto Hahn ile uzun yıllar laboratuvar ortağı olarak protaktinyum elementini keşfetti ve uranyum atomunun nötron bombardımanı deneylerini yürüttü.",
      "Nazi Almanya'sından İsveç'e kaçmak zorunda kaldı; burada kuzeni Otto Frisch ile birlikte Hahn'ın deney sonuçlarını inceleyerek fisyon reaksiyonunu matematiksel olarak açıkladı."
    ],
    alinti: "Bilim insanları yaşamı kolaylaştırmak değil, gerçeği aramak için çabalar.",
    olaylar: [
      { yil: "1878", metin: "Avusturya'nın Viyana şehrinde doğdu." },
      { yil: "1938", metin: "Yahudi kökeni nedeniyle Nazi baskısından kaçarak İsveç'e sığındı." },
      { yil: "1939", metin: "Nükleer fisyon adını verdikleri olayı yayınladığı makaleyle teorik olarak dünya bilimine duyurdu." },
      { yil: "1968", metin: "İngiltere'de hayatını kaybetti." }
    ]
  },
  {
    id: "jocelyn-bell-burnell", kategori: "fizik",
    ad: "Jocelyn Bell Burnell", dogum: "1943", olum: "",
    unvan: "Astrofizikçi",
    foto: "gorseller/jocelyn-bell-burnell.jpg",
    ozet: "Lisansüstü öğrencisiyken evrenin en yoğun cisimlerinden olan ve muazzam bir hızla dönerek düzenli radyo sinyalleri yayan pulsar (atarca) yıldızlarını keşfeden Kuzey İrlandalı astrofizikçidir.",
    detaylar: [
      "Cambridge Üniversitesi'nde doktora yaparken kendisinin inşasında çalıştığı radyo teleskobundan gelen kilometrelerce uzunluktaki grafik kağıtlarını elle inceledi.",
      "Uzayın derinliklerinden gelen son derece düzenli ve tekrarlayan radyo sinyallerini fark etti; bu sinyallerin dönen nötron yıldızlarına ait olduğunu kanıtladı.",
      "1974 Nobel Fizik Ödülü bu keşfe verildi ancak ödül sadece tez danışmanına gitti; buna rağmen Bell, bilim dünyasında hak ettiği saygınlığı kazandı ve 2018'deki 3 milyon dolarlık Breakthrough Ödülü'nün tamamını kadın ve azınlık fizik öğrencilerine bağışladı."
    ],
    alinti: "Bir şeyleri fark eden kişi genellikle sisteme tam olarak ait olmayan, dışarıdan bakan kişidir.",
    olaylar: [
      { yil: "1943", metin: "Kuzey İrlanda'da doğdu." },
      { yil: "1967", metin: "İlk pulsar sinyalini (CP 1919) keşfetti." },
      { yil: "2018", metin: "Temel Fizik Özel Breakthrough Ödülü'nü kazandı." }
    ]
  },
  {
    id: "chien-shiung-wu", kategori: "fizik",
    ad: "Chien-Shiung Wu", dogum: "1912", olum: "1997",
    unvan: "Deneysel Fizikçi",
    foto: "gorseller/chien-shiung-wu.jpg",
    ozet: "Fiziğin temel ilkelerinden biri kabul edilen \"parite korunum yasasının\" zayıf nükleer etkileşimlerde geçerli olmadığını deneysel olarak kanıtlayan ve \"Fiziğin First Lady'si\" olarak tanınan Çin asıllı Amerikalı fizikçidir.",
    detaylar: [
      "ABD'ye giderek UC Berkeley'de doktorasını tamamladı; II. Dünya Savaşı sırasında Manhattan Projesi'nde uranyum zenginleştirme ve Geiger sayacı geliştirme süreçlerinde kilit rol oynadı.",
      "Teorik fizikçiler Tsung-Dao Lee ve Chen-Ning Yang'ın hipotezini sınamak için mutlak sıfıra yakın sıcaklıkta Kobalt-60 atomlarıyla ünlü \"Wu Deneyi\"ni kurguladı.",
      "Deney sonucunda parite yasasının ihlal edildiğini kanıtladı; teori sahipleri Nobel alırken Wu'nun deneysel başarısı ödüllendirilmedi ancak kendisi Amerikan Fizik Derneği'nin ilk kadın başkanı seçildi."
    ],
    alinti: "Laboratuvardan çıkıp kirli bulaşıklarla dolu bir ev tezgahına dönmekten daha kötü tek bir şey vardır; o da laboratuvara hiç gidememektir!",
    olaylar: [
      { yil: "1912", metin: "Çin'in Jiangsu eyaletinde doğdu." },
      { yil: "1944", metin: "Manhattan Projesi ekibine katıldı." },
      { yil: "1956", metin: "Paritenin korunamadığını ispatlayan tarihi Wu Deneyi'ni gerçekleştirdi." },
      { yil: "1997", metin: "New York'ta hayatını kaybetti." }
    ]
  },
  {
    id: "henrietta-swan-leavitt", kategori: "fizik",
    ad: "Henrietta Swan Leavitt", dogum: "1868", olum: "1921",
    unvan: "Gökbilimci",
    foto: "gorseller/henrietta-swan-leavitt.jpg",
    ozet: "Sefeid tipi değişken yıldızların parlaklığı ile değişim periyotları arasındaki doğrudan ilişkiyi keşfederek, gökbilimcilere evrendeki galaksilerin uzaklığını ölçebilecekleri \"standart bir cetvel\" kazandıran Amerikalı astronomdur.",
    detaylar: [
      "Radcliffe College mezuniyeti sonrası Harvard Kolej Gözlemevi'nde \"Harvard Computers\" adlı kadın grupta fotoğraf plakalarını analiz eden hesaplamacı olarak işe başladı.",
      "Magellan Bulutları'ndaki binlerce değişken yıldızı inceleyerek daha parlak yıldızların daha uzun parlaklık değişim periyoduna sahip olduğunu (Leavitt Yasası) keşfetti.",
      "Bu keşif, Edwin Hubble'ın Samanyolu dışındaki galaksilerin varlığını kanıtlamasına ve evrenin genişlediğini fark etmesine doğrudan zemin hazırladı."
    ],
    alinti: "Bir veri grubundaki düzeni fark etmek, evrenin kapılarını aralamak gibidir.",
    olaylar: [
      { yil: "1868", metin: "ABD'nin Massachusetts eyaletinde doğdu." },
      { yil: "1912", metin: "Değişken yıldızlarda periyot-parlaklık bağıntısını resmi olarak yayımladı." },
      { yil: "1921", metin: "Mide kanseri nedeniyle hayatını kaybetti." }
    ]
  },
  {
    id: "katharine-blodgett", kategori: "fizik",
    ad: "Katharine Blodgett", dogum: "1898", olum: "1979",
    unvan: "Fizikçi ve Kimyager",
    foto: "gorseller/katharine-blodgett.jpg",
    ozet: "Yüzey kimyası üzerine uzmanlaşarak cam yüzeyindeki ışık yansımasını tamamen ortadan kaldıran monomoleküler kaplama yöntemini ve \"görünmez camı\" icat eden Amerikalı fizikçidir.",
    detaylar: [
      "Bryn Mawr College sonrası Chicago Üniversitesi'nde yüksek lisans yaptı; Nobel ödüllü Irving Langmuir ile General Electric (GE) laboratuvarlarında çalışmaya başladı.",
      "Cambridge Üniversitesi'nden fizik doktorası alan ilk kadın oldu.",
      "Cam yüzeyine molekül kalınlığında katmanlar ekleyerek ışığın yansımasını %99 oranında engelleyen tekniği (Langmuir-Blodgett filmi) geliştirdi; bu icat denizaltı periskoplarından kamera merceklerine ve gözlüklere kadar geniş bir alanda devrim yarattı."
    ],
    alinti: "Deneyleriniz beklediğiniz sonucu vermiyorsa, doğa size henüz bilmediğiniz bir şeyi öğretmeye çalışıyordur.",
    olaylar: [
      { yil: "1898", metin: "ABD'nin New York eyaletinde doğdu." },
      { yil: "1926", metin: "Cambridge Üniversitesi'nde fizik alanında doktora unvanı alan ilk kadın oldu." },
      { yil: "1938", metin: "Yansıtmasız (görünmez) cam teknolojisi için patent başvurusunda bulundu." },
      { yil: "1979", metin: "ABD'de hayatını kaybetti." }
    ]
  },
  {
    id: "ida-noddack", kategori: "fizik",
    ad: "Ida Noddack", dogum: "1896", olum: "1978",
    unvan: "Kimyager ve Fizikçi",
    foto: "gorseller/ida-noddack.jpg",
    ozet: "Periyodik tablonun 75 numaralı elementi olan renyumu keşfeden ve Enrico Fermi'nin deneylerini eleştirerek \"çekirdeğin parçalanabileceği\" (nükleer fisyon) fikrini bilim tarihinde ilk kez dile getiren Alman kimyagerdir.",
    detaylar: [
      "Berlin Teknik Üniversitesi'nden kimya mühendisliği diploması ve doktorası alan ilk kadınlardan biridir.",
      "Eşi Walter Noddack ile birlikte platinum cevherlerini inceleyerek periyodik cetvelin henüz keşfedilmemiş öğelerinden Renyum (Rhenium) elementini buldu.",
      "1934 yılında Fermi'nin uranyumu nötronlarla bombaladığı deney raporunu incelediğinde, ortaya çıkan ürünlerin yeni bir ağır element değil, atom çekirdeğinin büyük parçalara bölünmesi sonucu oluşan hafif elementler olabileceğini yazdı; ancak dönemin erkek egemen bilim camiası bu görüşü göz ardı etti."
    ],
    alinti: "Bilimsel hipotezler, otoritelerin kabul gördüğü kalıplarla sınırlandırılmamalıdır.",
    olaylar: [
      { yil: "1896", metin: "Almanya'nın Wesel kentinde doğdu." },
      { yil: "1925", metin: "Renyum elementini keşfettiğini duyurdu." },
      { yil: "1934", metin: "\"On Element 93\" başlıklı makalesinde çekirdek bölünmesi (fisyon) fikrini dünyada ilk kez önerdi." }
    ]
  },
  {
    id: "maria-goeppert-mayer", kategori: "fizik",
    ad: "Maria Goeppert Mayer", dogum: "1906", olum: "1972",
    unvan: "Teorik Fizikçi",
    foto: "gorseller/maria-goeppert-mayer.jpg",
    ozet: "Atom çekirdeğinin iç yapısını, elektron katmanlarına benzer şekilde düzenlenmiş nükleer kabuk modeli ile açıklayarak Nobel Fizik Ödülü kazanan Alman asıllı Amerikalı teorik fizikçidir.",
    detaylar: [
      "Göttingen Üniversitesi'nde Max Born danışmanlığında teorik fizik doktorası yaptı; kuantum mekaniğindeki iki fotonlu emilim teorisini öne sürdü.",
      "ABD'ye taşındıktan sonra yıllarca üniversitelerde kadrosuz veya ücretsiz olarak çalışmak zorunda kaldı, buna rağmen araştırmalarını durdurmadı.",
      "Çekirdekteki proton ve nötronların belirli \"sihirli sayılarda\" (2, 8, 20, 28, 50, 82, 126) son derece kararlı olduğunu fark etti ve spin-yörünge çiftlenimi yaklaşımıyla nükleer kabuk modelini (Nuclear Shell Model) inşa etti."
    ],
    alinti: "Kazanmak istediğiniz şey matematik ve fizikle çalışmaksa, karşınıza çıkan engeller sadece çözülecek birer denklem gibidir.",
    olaylar: [
      { yil: "1906", metin: "Katowice'de (günümüz Polonya'sı) doğdu." },
      { yil: "1949", metin: "Nükleer kabuk modeline dair temel makalesini yayımladı." },
      { yil: "1963", metin: "Marie Curie'den tam 60 yıl sonra Nobel Fizik Ödülü'nü kazanan ikinci kadın oldu." }
    ]
  },
  {
    id: "donna-strickland", kategori: "fizik",
    ad: "Donna Strickland", dogum: "1959", olum: "",
    unvan: "Optik Fizikçisi",
    foto: "gorseller/donna-strickland.jpg",
    ozet: "Lazer ışınlarının gücünü ve yoğunluğunu, amplifikatör malzemeye zarar vermeden devasa boyutlara çıkaran \"Chirped Pulse Amplification\" (CPA) tekniğini geliştiren Kanadalı optik fizikçisidir.",
    detaylar: [
      "McMaster Üniversitesi'nde mühendislik fiziği okuduktan sonra Rochester Üniversitesi'nde Gerard Mourou danışmanlığında doktora yaptı.",
      "Doktora tezi çalışmasında, kısa lazer darbelerini önce zamansal olarak uzatan, ardından yükseltip tekrar sıkıştıran CPA yöntemini icat etti.",
      "Bu buluş; göz lazer ameliyatlarından (LASIK), hassas sanayi kesimlerine ve yüksek yoğunluklu lazer-plazma fiziği araştırmalarına kadar geniş bir kullanım alanı yarattı."
    ],
    alinti: "Bir kadın olarak bilime katkı sağladığınızda, önemli olan cinsiyetiniz değil, ürettiğiniz bilimin kalitesidir.",
    olaylar: [
      { yil: "1959", metin: "Kanada'nın Ontario eyaletinde doğdu." },
      { yil: "1985", metin: "CPA teknolojisini tanıtan doktora tez çalışmasını yayımladı." },
      { yil: "2018", metin: "Fizik Nobel Ödülü'nü kazanarak tarihteki üçüncü kadın Nobel fizik laureatı oldu." }
    ]
  },

  /* ================= BİYOLOJİ, TIP VE SAĞLIK BİLİMLERİ ================= */
  {
    id: "nettie-stevens", kategori: "biyoloji",
    ad: "Nettie Stevens", dogum: "1861", olum: "1912",
    unvan: "Genetikçi ve Sitolog",
    foto: "gorseller/nettie-stevens.jpg",
    ozet: "Canlılarda cinsiyetin çevresel faktörlerle değil, kalıtımsal olarak kromozomlar (X ve Y kromozomları) tarafından belirlendiğini keşfeden Amerikalı genetikçidir.",
    detaylar: [
      "Öğretmenlik yapıp biriktirdiği parayla Stanford Üniversitesi'ne girdi ve Bryn Mawr College'da sitoloji üzerine doktora yaptı.",
      "Un kurtları (Tenebrio molitor) ve çeşitli böcek türlerinin sperm ve yumurta hücrelerini mikroskop altında titizlikle inceledi.",
      "Dişi hücrelerin iki büyük kromozoma (XX), erkek hücrelerin ise bir büyük ve bir küçük kromozoma (XY) sahip olduğunu görerek cinsiyet kromozomu teorisini ortaya koydu."
    ],
    alinti: "Gerçek bilimsel bilgi, gözlemlerin sabırla ve ön yargısızca analiz edilmesiyle elde edilir.",
    olaylar: [
      { yil: "1861", metin: "ABD'nin Vermont eyaletinde doğdu." },
      { yil: "1905", metin: "Cinsiyetin XY kromozom çiftine bağlı olarak kalıtıldığını açıklayan araştırmasını yayımladı." },
      { yil: "1912", metin: "Meme kanseri nedeniyle erken yaşta hayatını kaybetti." }
    ]
  },
  {
    id: "rosalind-franklin", kategori: "biyoloji",
    ad: "Rosalind Franklin", dogum: "1920", olum: "1958",
    unvan: "Biyofizikçi ve Kimyager",
    foto: "gorseller/rosalind-franklin.jpg",
    ozet: "X-ışını kristalografisi yöntemini kullanarak DNA'nın çift sarmal (double helix) yapıda olduğunu gösteren kritik \"Fotoğraf 51\"i çeken İngiliz biyofizikçidir.",
    detaylar: [
      "Cambridge Üniversitesi'nde fiziksel kimya alanında doktora yaptı; kömür ve karbon yapısı üzerine çalışmalarıyla kömür sanayisine yön verdi.",
      "King's College London'a geçerek nemli ortamlarda DNA liflerinin X-ışını kırınımı desenlerini elde etmeye çalıştı.",
      "Çektiği net fotoğraflar ve yaptığı matematiksel ölçümler, James Watson ve Francis Crick'in DNA modelini inşa etmelerinde anahtar rol oynadı; ayrıca tütün mozaik virüsü ve çocuk felci virüsünün yapısını çözümledi."
    ],
    alinti: "Bilim ve günlük yaşam birbiriyle bütünleşmelidir, birbirinden ayrı düşünülemez.",
    olaylar: [
      { yil: "1920", metin: "İngiltere'nin Londra şehrinde doğdu." },
      { yil: "1952", metin: "DNA'nın sarmal yapısını açıkça kanıtlayan ünlü \"Fotoğraf 51\"i çekti." },
      { yil: "1958", metin: "Yumurtalık kanseri nedeniyle 37 yaşında hayatını kaybetti." }
    ]
  },
  {
    id: "mary-anning", kategori: "biyoloji",
    ad: "Mary Anning", dogum: "1799", olum: "1847",
    unvan: "Paleontolog ve Fosil Avcısı",
    foto: "gorseller/mary-anning.jpg",
    ozet: "İngiltere'nin Jura Devri kıyılarında gerçekleştirdiği kazılarla ilk eksiksiz İhtiyozor ve Plesiyozor iskeletlerini gün ışığına çıkaran, jeoloji ve paleontolojinin gelişmesini sağlayan öncü fosil araştırmacısıdır.",
    detaylar: [
      "Lyme Regis kentinin tehlikeli falezlerinde, marangoz babasından öğrendiği fosil arama teknikleriyle çalıştı.",
      "Bütün halde ilk İhtiyozor (balık kertenkelesi) ve ilk iki Plesiyozor (uzun boyunlu deniz sürüngeni) fosilini çıkardı; fosilleşmiş dışkıların (koprolit) beslenme alışkanlıklarını gösterdiğini anladı.",
      "Resmi bir eğitimi olmamasına rağmen anatomi ve çizim yeteneğiyle dönemin ünlü jeologlarına danışmanlık yaptı ancak Londra Jeoloji Cemiyeti'ne kadın olduğu için üye alınmadı."
    ],
    alinti: "Falezlerin kayıp dünyası, geçmişin izlerini doğru okuyabilenlere konuşur.",
    olaylar: [
      { yil: "1799", metin: "İngiltere'nin Dorset eyaletinde doğdu." },
      { yil: "1811", metin: "Kardeşiyle birlikte ilk tam İhtiyozor iskeletini çıkardı." },
      { yil: "1823", metin: "İlk eksiksiz Plesiyozor fosil keşfini gerçekleştirdi." },
      { yil: "1847", metin: "Lyme Regis'te hayatını kaybetti." }
    ]
  },
  {
    id: "alice-ball", kategori: "biyoloji",
    ad: "Alice Ball", dogum: "1892", olum: "1916",
    unvan: "Kimyager",
    foto: "gorseller/alice-ball.jpg",
    ozet: "Cüzzam (Lepra) hastalığının tedavisinde kullanılan Chaulmoogra ağacı yağını enjekte edilebilir ve suda çözünür bir forma dönüştüren \"Ball Yöntemi\"ni geliştiren Afro-Amerikan kimyagerdir.",
    detaylar: [
      "Washington Üniversitesi'nde eczacılık eğitimi aldı; Hawaii Üniversitesi'nin ilk kadın ve ilk Afro-Amerikan kimya yüksek lisans mezunu ve öğretim üyesi oldu.",
      "O dönem cüzzam tedavisinde kullanılan ancak acı veren ve emilmeyen Chaulmoogra yağının etil ester türevlerini sentezlemeyi başardı.",
      "Geliştirdiği bu yöntem sayesinde binlerce hasta karantina adalarından evlerine dönebildi; yöntemi yayınlayamadan genç yaşta vefat edince başarısı bir süre rektör tarafından sahiplenildiyse de sonradan gerçek ortaya çıktı."
    ],
    alinti: "Kimya, doğadaki en karmaşık problemleri insanlığın şifasına dönüştürme gücüne sahiptir.",
    olaylar: [
      { yil: "1892", metin: "ABD'nin Washington eyaletinde doğdu." },
      { yil: "1915", metin: "Cüzzam ilacının suda çözünmesini sağlayan esterleşme reaksiyonunu başardı." },
      { yil: "1916", metin: "Laboratuvar kazası veya klor gazı zehirlenmesi sonucu 24 yaşında hayatını kaybetti." }
    ]
  },
  {
    id: "esther-lederberg", kategori: "biyoloji",
    ad: "Esther Lederberg", dogum: "1922", olum: "2006",
    unvan: "Mikrobiyolog ve Biyokimyager",
    foto: "gorseller/esther-lederberg.jpg",
    ozet: "Bakterilerde antibiyotik direncinin gelişimini ve genetik mutasyonları incelemeyi sağlayan \"replika kaplama\" (replica plating) tekniğini icat eden ve Bakteriyofaj Lambda'yı keşfeden mikrobiyologdur.",
    detaylar: [
      "Stanford ve Wisconsin üniversitelerinde genetik alanında araştırmalar yürüttü.",
      "Bakteri kolonilerini bir kadife kumaş yardımıyla petri kabından diğerine birebir aktaran \"Replika Kaplama\" yöntemini geliştirdi; bu teknik bakteriyel genetik araştırmalarının temel yöntemi oldu.",
      "Bakteri DNA'sına entegre olabilen Bakteriyofaj Lambda virüsünü ve E. coli'deki F plazmidini keşfetti; çalışmaları eşi Joshua Lederberg'e Nobel kazandırırken kendisi arka planda bırakıldı."
    ],
    alinti: "Görünmeyen dünyanın kurallarını anlamak, yaşamın kodlarını anlamaktır.",
    olaylar: [
      { yil: "1922", metin: "ABD'nin New York kentinde doğdu." },
      { yil: "1950", metin: "Bakteriyofaj Lambda virüsünü ilk kez izole etti." },
      { yil: "1952", metin: "Replika kaplama tekniğini açıklayan makalesini yayımladı." },
      { yil: "2006", metin: "ABD'de hayatını kaybetti." }
    ]
  },
  {
    id: "trotula-di-salerno", kategori: "biyoloji",
    ad: "Trotula di Salerno", dogum: "yaklaşık 1100", olum: "yaklaşık 1160",
    unvan: "Hekim ve Profesör",
    foto: "gorseller/trotula-di-salerno.jpg",
    ozet: "12. yüzyılda İtalya'daki Salerno Tıp Okulu'nda dersler veren, kadın hastalıkları, doğum ve jinekoloji üzerine tıp tarihinin ilk sistematik kitaplarını yazan kadın hekimdir.",
    detaylar: [
      "Orta Çağ Avrupa'sında kadınların tıp eğitimi almasına izin veren nadir merkezlerden olan Salerno'da yetişti ve profesör unvanı aldı.",
      "Kadın hastalıkları, adet düzensizlikleri, doğum sancılarının azaltılması ve doğum sonrası bakım üzerine yazdığı \"Trotula Ensemble\" (özellikle De passionibus mulierum) metinleri yüzyıllar boyunca tıp fakültelerinde ders kitabı olarak okutuldu.",
      "Kısırlığın sadece kadınlardan değil erkeklerden de kaynaklanabileceğini bilimsel olarak öne süren ilk hekimlerden biri oldu."
    ],
    alinti: "Merhamet ve bilgi birleştiğinde hekimlik gerçek anlamına ulaşır.",
    olaylar: [
      { yil: "~1100", metin: "İtalya'nın Salerno kentinde doğdu (yaklaşık tarih)." },
      { yil: "~1150", metin: "Jinekoloji ve kadın sağlığı üzerine temel tıp risalelerini kaleme aldı." },
      { yil: "~1160", metin: "Hayatını kaybetti (yaklaşık tarih)." }
    ]
  },
  {
    id: "rachel-carson", kategori: "biyoloji",
    ad: "Rachel Carson", dogum: "1907", olum: "1964",
    unvan: "Deniz Biyoloğu ve Yazar",
    foto: "gorseller/rachel-carson.jpg",
    ozet: "Sentetik pestisitlerin (özellikle DDT) doğaya verdiği zararları ortaya koyduğu \"Sessiz Bahar\" (Silent Spring) adlı eseriyle küresel çevre koruma hareketini ve ekoloji bilincini başlatan Amerikalı deniz biyoloğudur.",
    detaylar: [
      "Johns Hopkins Üniversitesi'nde zooloji yüksek lisansı tamamladıktan sonra ABD Balıkçılık ve Yaban Hayatı Servisi'nde baş editör ve biyolog olarak çalıştı.",
      "Tarımda ve sivrisinek mücadelesinde kontrolsüzce kullanılan DDT gibi zehirli kimyasalların besin zincirine sızarak kuş popülasyonlarını yok ettiğini ve insan sağlığını tehdit ettiğini raporladı.",
      "Kimya sanayisinin ağır saldırılarına rağmen geri adım atmadı; çalışmaları ABD Çevre Koruma Ajansı'nın (EPA) kurulmasına ve DDT'nin yasaklanmasına yol açtı."
    ],
    alinti: "Doğaya karşı savaşımızı kazanırsak, kaybeden taraf biz olacağız.",
    olaylar: [
      { yil: "1907", metin: "ABD'nin Pennsylvania eyaletinde doğdu." },
      { yil: "1962", metin: "Çevre biliminde milat kabul edilen \"Sessiz Bahar\" kitabını yayımladı." },
      { yil: "1964", metin: "Kanser ve kalp yetmezliği nedeniyle hayatını kaybetti." }
    ]
  },
  {
    id: "maria-sibylla-merian", kategori: "biyoloji",
    ad: "Maria Sibylla Merian", dogum: "1647", olum: "1717",
    unvan: "Doğabilimci ve Entomolog",
    foto: "gorseller/maria-sibylla-merian.jpg",
    ozet: "Canlı böcekleri doğrudan gözlemleyerek tırtılların kelebeğe dönüşümünü (metamorfoz) detaylı çizimlerle belgeleyen, entomoloji (böcek bilimi) biliminin öncüsü sayılan doğabilimcidir.",
    detaylar: [
      "Frankfurt'ta ressam ve yayıncı bir ailede büyüdü; küçük yaşlardan itibaren tırtılları toplayıp beslenme alışkanlıklarını ve başkalaşım evrelerini çizmeye başladı.",
      "Dönemde böceklerin \"çamurdan kendiliğinden oluştuğu\" (spontane jenerasyon) inancını çürüterek yumurta, larva, pupa ve ergin evrelerini bilimsel olarak kanıtladı.",
      "52 yaşındayken kızlarıyla birlikte Güney Amerika'daki Surinam'a giderek tropikal ormanlardaki böcek ve bitki türlerini yerinde inceledi ve devasa bir bilimsel katalog hazırladı."
    ],
    alinti: "Doğadaki en küçük canlı bile mucizevi bir düzenin parçasıdır.",
    olaylar: [
      { yil: "1647", metin: "Almanya'nın Frankfurt kentinde doğdu." },
      { yil: "1699", metin: "Surinam'a 2 yıllık bilimsel keşif gezisine çıktı." },
      { yil: "1705", metin: "Şaheseri \"Metamorphosis insectorum Surinamensium\" kitabını bastırdı." },
      { yil: "1717", metin: "Amsterdam'da hayatını kaybetti." }
    ]
  },
  {
    id: "jeanne-villepreux-power", kategori: "biyoloji",
    ad: "Jeanne Villepreux-Power", dogum: "1794", olum: "1871",
    unvan: "Deniz Biyoloğu",
    foto: "gorseller/jeanne-villepreux-power.jpg",
    ozet: "Deniz canlılarının davranışlarını ve gelişimlerini doğal ortamlarına yakın koşullarda incelemek için ilk cam akvaryumu tasarlayıp kullanan Fransız deniz biyoloğudur.",
    detaylar: [
      "Terzi olarak çalışırken Sicilya'ya taşındı ve doğa bilimlerine ilgi duyarak adanın deniz ekosistemini incelemeye başladı.",
      "Argonauta argo (kağıtlı deniz salyangozu) türünün kabuğunu kendisinin mi salgıladığını yoksa başka canlıların kabuğunu mu kullandığını çözmek için özel cam akvaryumlar (\"Power Akvaryumu\") geliştirdi.",
      "Tasarladığı üç farklı akvaryum tipi (ev tipi cam, kafesli deniz tipi ve cam çerçeveli sığ su tipi) modern deniz biyolojisinin deneysel gözlem standartlarını oluşturdu."
    ],
    alinti: "Gözlem, doğanın sırlarını çözmenin en güvenilir anahtarıdır.",
    olaylar: [
      { yil: "1794", metin: "Fransa'nın Juillac kasabasında doğdu." },
      { yil: "1832", metin: "Deniz organizmalarını incelemek için ilk modern akvaryumu icat etti." },
      { yil: "1839", metin: "Londra Zooloji Cemiyeti'nin ilk kadın üyelerinden biri seçildi." },
      { yil: "1871", metin: "Fransa'da hayatını kaybetti." }
    ]
  },
  {
    id: "alice-hamilton", kategori: "biyoloji",
    ad: "Alice Hamilton", dogum: "1869", olum: "1970",
    unvan: "Hekim ve Toksikolog",
    foto: "gorseller/alice-hamilton.jpg",
    ozet: "Sanayi işçilerinin maruz kaldığı ağır metal ve kimyasal zehirlenmeleri araştırarak iş sağlığı ve güvenliği (endüstriyel toksikoloji) alanının temellerini atan Amerikalı hekimdir.",
    detaylar: [
      "Michigan Üniversitesi Tıp Fakültesi'ni bitirdikten sonra Almanya'da bakteriyoloji eğitimi aldı.",
      "Chicago'daki Hull House toplum merkezinde yaşarken fabrika işçilerinin kurşun, cıva, karbon monoksit ve radyum zehirlenmelerini sahada inceledi.",
      "İş yerlerindeki zehirli gaz ve maddelerin çalışanların sağlığı üzerindeki tahribatını bilimsel verilerle kanıtlayarak ABD'de ilk işçi tazminatı ve iş güvenliği yasalarının çıkarılmasını sağladı."
    ],
    alinti: "İnsan hayatı ve sağlığı, sanayi üretiminin maliyet kalemlerinden biri olamaz.",
    olaylar: [
      { yil: "1869", metin: "ABD'nin Indiana eyaletinde doğdu." },
      { yil: "1919", metin: "Harvard Üniversitesi Tıp Fakültesi'ne atanan ilk kadın öğretim üyesi oldu." },
      { yil: "1970", metin: "101 yaşında hayatını kaybetti." }
    ]
  },
  {
    id: "flossie-wong-staal", kategori: "biyoloji",
    ad: "Flossie Wong-Staal", dogum: "1947", olum: "2020",
    unvan: "Virolog",
    foto: "gorseller/flossie-wong-staal.jpg",
    ozet: "HIV virüsünü ilk kez moleküler düzeyde klonlayan, genetik haritasını çıkaran ve virüsün bağışıklık sistemini nasıl çökerttiğini kanıtlayan Çin asıllı Amerikalı moleküler biyologdur.",
    detaylar: [
      "Hong Kong'dan ABD'ye giderek UCLA'da moleküler biyoloji doktorası yaptı; National Cancer Institute (NCI) bünyesinde çalıştı.",
      "1985 yılında HIV'in genetik yapısını klonlayarak dizilemeyi başardı; bu gelişme AIDS teşhisinde kullanılan kan testlerinin geliştirilmesini sağladı.",
      "Virüsün insan vücudunda geçirdiği mutasyon çeşitliliğini açıklayarak antiretroviral tedavi ilaçlarının ve çoklu ilaç kombinasyonlarının tasarlanmasına öncülük etti."
    ],
    alinti: "Virüsün genetik şifresini çözmek, ona karşı mücadelede en güçlü silahımızdır.",
    olaylar: [
      { yil: "1947", metin: "Çin'in Guangzhou kentinde doğdu." },
      { yil: "1985", metin: "HIV virüsünü genetik olarak klonlayan ilk bilim insanı oldu." },
      { yil: "2020", metin: "Pnömoni komplikasyonları nedeniyle hayatını kaybetti." }
    ]
  },
  {
    id: "patricia-bath", kategori: "biyoloji",
    ad: "Patricia Bath", dogum: "1942", olum: "2019",
    unvan: "Göz Doktoru ve Cerrah",
    foto: "gorseller/patricia-bath.jpg",
    ozet: "Lazer teknolojisiyle kataraktlı merceği acısız ve hızlı şekilde buharlaştırıp temizleyen \"Lazerphaco Probe\" cihazını icat ederek tıbbi patent alan ilk Afro-Amerikan kadın doktordur.",
    detaylar: [
      "Howard Üniversitesi Tıp Fakültesi mezuniyeti sonrası New York Üniversitesi'nde göz cerrahisi uzmanlığını tamamladı.",
      "Yoksul bölgelerdeki körlük oranlarının yüksekliğini fark ederek \"Toplumsal Göz Sağlığı\" (Community Ophthalmology) disiplinini kurdu.",
      "1981'de tasarlamaya başladığı Lazerphaco cihazı sayesinde katarakt nedeniyle yıllarca kör kalmış hastaların yeniden görmesini sağladı."
    ],
    alinti: "Görme hakkı temel bir insan hakkıdır; ırk, cinsiyet ve gelir düzeyinden bağımsız korunmalıdır.",
    olaylar: [
      { yil: "1942", metin: "ABD'nin New York kentinde doğdu." },
      { yil: "1988", metin: "Lazerle katarakt ameliyatı yapan buluşu için tıbbi patent aldı." },
      { yil: "2019", metin: "Kanser komplikasyonları nedeniyle hayatını kaybetti." }
    ]
  },
  {
    id: "may-britt-moser", kategori: "biyoloji",
    ad: "May-Britt Moser", dogum: "1963", olum: "",
    unvan: "Nörofizyolog",
    foto: "gorseller/may-britt-moser.jpg",
    ozet: "Beynin entorinal korteks bölgesinde yön bulmayı, konum belirlemeyi ve haritalandırmayı sağlayan \"grid hücrelerini\" (ızgara hücreleri) keşfederek Nobel Ödülü kazanan Norveçli sinirbilimci.",
    detaylar: [
      "Oslo Üniversitesi'nde psikoloji ve nörofizyoloji eğitimi aldı; eşi Edvard Moser ile birlikte Norveç Bilim ve Teknoloji Üniversitesi'nde (NTNU) Sinirsel Hesaplama Merkezi'ni kurdu.",
      "Beynin içsel GPS sisteminin nasıl çalıştığını ortaya koydu; grid hücrelerinin mekânsal navigasyon ve hafıza süreçlerindeki rolünü hücresel düzeyde haritalandırdı.",
      "Bu buluş, Alzheimer gibi nörodejeneratif hastalıklarda yön duygusunun ve hafızanın nasıl bozulduğunu anlamada çığır açtı."
    ],
    alinti: "Beynin kendi konumunu nasıl haritalandırdığını anlamak, insan zihninin en derin gizemlerinden birini çözmektir.",
    olaylar: [
      { yil: "1963", metin: "Norveç'in Fosnavåg kasabasında doğdu." },
      { yil: "2005", metin: "Yön bulmayı sağlayan \"grid hücreleri\" keşfini duyurdu." },
      { yil: "2014", metin: "Nobel Fizyoloji veya Tıp Ödülü'ne layık görüldü." }
    ]
  },

  /* ================= MATEMATİK, BİLGİSAYAR VE MÜHENDİSLİK ================= */
  {
    id: "katherine-johnson", kategori: "matematik",
    ad: "Katherine Johnson", dogum: "1918", olum: "2020",
    unvan: "Matematikçi",
    foto: "gorseller/katherine-johnson.jpg",
    ozet: "NASA ve öncülü NACA'da uzay uçuşlarının karmaşık yörünge hesaplamalarını elle yaparak ABD'nin insanlı uzay programlarının (Mercury ve Apollo) başarısını sağlayan Afro-Amerikan matematikçidir.",
    detaylar: [
      "Küçük yaşta matematik dehası göstererek West Virginia State College'dan 18 yaşında dereceyle mezun oldu.",
      "1953'te NASA'nın Langley Araştırma Merkezi'nde \"insan bilgisayar\" olarak çalışmaya başladı ve analiz yeteneğiyle kısa sürede araştırmacı mühendis ekibine katıldı.",
      "Alan Shepard'ın ABD'nin ilk insanlı uzay uçuşu yörüngesini, John Glenn'in Dünya etrafındaki tarihi uçuşunun rotasını ve Apollo 11'in Ay'a iniş/dönüş hesaplamalarını gerçekleştirdi."
    ],
    alinti: "Yaptığım işi çok sevdim. Her gün işe gitmek için sabırsızlanıyordum, çünkü bir şeyler keşfediyorduk.",
    olaylar: [
      { yil: "1918", metin: "ABD'nin West Virginia eyaletinde doğdu." },
      { yil: "1962", metin: "John Glenn'in yörünge uçuşu öncesinde dijital bilgisayar hesaplarını elle doğrulayarak uçuşu onayladı." },
      { yil: "2015", metin: "ABD Başkanı Barack Obama tarafından Başkanlık Özgürlük Madalyası ile ödüllendirildi." },
      { yil: "2020", metin: "101 yaşında hayatını kaybetti." }
    ]
  },
  {
    id: "hypatia", kategori: "matematik",
    ad: "Hypatia", dogum: "370", olum: "415",
    unvan: "Filozof, Matematikçi ve Astronom",
    foto: "gorseller/hypatia.jpg",
    ozet: "Antik Çağ'ın İskenderiye kentinde yaşamış, Neo-Platoncu felsefe okulunun liderliğini yapmış, matematik, geometri ve astronomi alanında dersler vermiş tarihin bilinen ilk kadın matematikçisidir.",
    detaylar: [
      "Matematikçi Theon'un kızı olarak yetişti; İskenderiye Kütüphanesi ve Müzesi'nin bilimsel geleneğini sürdürdü.",
      "Apollonius'un konikleri ve Diophantus'un cebiri üzerine şerhler (açıklayıcı metinler) yazdı; astrolab ve hidrometre gibi bilimsel aletlerin geliştirilmesine katkıda bulundu.",
      "Dönemin siyasi, dini ve dogmatik çatışmalarının ortasında kalarak fanatik bir grup tarafından trajik bir şekilde katledildi; bu olay antik bilim çağının kapanış simgelerinden sayıldı."
    ],
    alinti: "Düşünme hakkınızı saklı tutun; çünkü yanlış düşünmek bile hiç düşünmemekten iyidir.",
    olaylar: [
      { yil: "370", metin: "Mısır'ın İskenderiye kentinde doğdu." },
      { yil: "400", metin: "İskenderiye Okulu'nun başına geçerek felsefe, matematik ve astronomi dersleri vermeye başladı." },
      { yil: "415", metin: "Dini ve politik gerilimler sonucu hayatını kaybetti." }
    ]
  },
  {
    id: "ada-lovelace", kategori: "matematik",
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

  /* ================= TÜRK VE İSLAM TARİHİ HÜKÜMDARLARI, SİYASİ VE ASKERİ LİDERLER =================
     (Henüz kimse eklenmedi — aşağıdaki şablonu kopyalayıp doldurabilirsin.) */

  /* ================= İSLAM TARİHİ ÖNCÜLERİ VE ŞAHSİYETLERİ =================
     (Henüz kimse eklenmedi.) */

  /* ================= SANAT, EDEBİYAT, SAHNE VE SANAT TARİHİ ================= */
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
  {
    id: "fatma-aliye", kategori: "sanat",
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
    id: "halide-edib", kategori: "sanat",
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

  /* ================= TOPLUMSAL MÜCADELE, SAVUNMA VE KAMU HİZMETİ =================
     (Henüz kimse eklenmedi.)

  ŞABLON — kopyala, yapıştır, virgülle ayır:
  ,{
    id: "ornek-id", kategori: "toplum",
    ad: "", dogum: "", olum: "",
    unvan: "",
    foto: "gorseller/ornek-id.jpg",
    ozet: "",
    detaylar: ["", "", ""],
    alinti: "",
    olaylar: [ { yil: "", metin: "" } ]
  }
  */
];
