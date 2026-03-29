/* ── TRANSLATIONS ── */
const translations = {
  en: {
    nav_about: "About", nav_menu: "Menu", nav_gallery: "Gallery", nav_contact: "Contact",
    hero_sub: "Restaurant · Halal · Batumi",
    hero_tagline: "Authentic flavours of Anatolia, lovingly prepared in the heart of Batumi.",
    hero_btn1: "View Menu", hero_btn2: "Find Us", scroll: "Scroll",
    about_label: "Our Story", about_title: "A Taste of Turkey in Batumi",
    about_p1: "Fatisa brings the warmth of Turkish hospitality to the heart of Batumi. Every dish is crafted from recipes passed down through generations — rich pides, silky menemen, and delicate baklava made fresh each morning.",
    about_p2: "Our kitchen uses only halal-certified ingredients, ensuring every guest dines with confidence and comfort. Whether you're stopping for a leisurely Turkish breakfast or an evening meal, we welcome you like family.",
    stat_rating: "Rating", stat_years: "Years",
    menu_label: "What We Serve", menu_title: "Our Menu",
    tab_breakfast: "Breakfast", tab_mains: "Mains", tab_desserts: "Desserts", tab_drinks: "Drinks",
    m_b1: "Turkish Breakfast Platter", m_b1d: "Cheese, olives, tomato, egg, honey, clotted cream, bread",
    m_b2: "Menemen", m_b2d: "Scrambled eggs with peppers, tomatoes & herbs",
    m_b3: "Sucuklu Yumurta", m_b3d: "Fried eggs with spiced Turkish sausage",
    m_b4d: "Sesame-crusted bread ring, served warm",
    m_m1d: "Boat-bread with diced lamb & melted cheese",
    m_m2d: "Mixed pide with ground beef, vegetables",
    m_m3d: "Thin flatbread with spiced minced meat",
    m_m4: "Lentil Soup", m_m4d: "Traditional red lentil with lemon & cumin",
    m_d1d: "Layered filo with pistachio & rose syrup",
    m_d2d: "Crispy shredded wheat with cheese & syrup, served hot",
    m_d3d: "Baked rice pudding with cinnamon",
    m_dr1: "Turkish Tea", m_dr1d: "Served in traditional tulip glass",
    m_dr2d: "Traditional Turkish coffee, with or without foam",
    m_dr3d: "Chilled salted yoghurt drink",
    menu_note: "* Menu and prices are indicative. Please ask your server for today's full menu.",
    gallery_label: "Gallery", gallery_title: "Moments at Fatisa",
    g1:"Interior",g2:"Breakfast",g3:"Terrace",g4:"Pide",g5:"Desserts",g6:"Coffee",g7:"Kitchen",
    contact_label: "Visit Us", contact_title: "Find Fatisa",
    c_address: "Address", c_address_detail: "(Add your exact street address here)",
    c_hours: "Opening Hours", c_hours_detail: "Daily · 09:00 – 22:00",
    c_phone: "Phone",
    c_instagram: "Instagram", c_facebook: "Facebook", c_wolt: "Order on Wolt",
    map_placeholder: "Add Google Maps embed here"
  },
  tr: {
    nav_about: "Hakkımızda", nav_menu: "Menü", nav_gallery: "Galeri", nav_contact: "İletişim",
    hero_sub: "Restoran · Helal · Batum",
    hero_tagline: "Anadolu'nun otantik lezzetleri, Batum'un kalbinde sevgiyle hazırlanıyor.",
    hero_btn1: "Menüyü Gör", hero_btn2: "Bizi Bul", scroll: "Kaydır",
    about_label: "Hikayemiz", about_title: "Batum'da Türk Lezzetleri",
    about_p1: "Fatisa, Türk misafirperverliğinin sıcaklığını Batum'un kalbine taşır. Her yemek, kuşaktan kuşağa aktarılan tariflerle hazırlanır — lezzetli pideler, kadifemsi menemen ve her sabah taze yapılan baklava.",
    about_p2: "Mutfağımız yalnızca helal sertifikalı malzemeler kullanır; her misafirimiz güvenle yemek yer. İster sabah kahvaltısı ister akşam yemeği için gelin, sizi aile gibi karşılarız.",
    stat_rating: "Puan", stat_years: "Yıl",
    menu_label: "Servis Ettiklerimiz", menu_title: "Menümüz",
    tab_breakfast: "Kahvaltı", tab_mains: "Ana Yemekler", tab_desserts: "Tatlılar", tab_drinks: "İçecekler",
    m_b1: "Türk Kahvaltı Tabağı", m_b1d: "Peynir, zeytin, domates, yumurta, bal, kaymak, ekmek",
    m_b2: "Menemen", m_b2d: "Biber, domates ve otlarla karıştırılmış yumurta",
    m_b3: "Sucuklu Yumurta", m_b3d: "Baharatlı Türk sucuğuyla kızartılmış yumurta",
    m_b4d: "Susamlı ekmek çemberi, sıcak servis",
    m_m1d: "Kuşbaşı kuzu eti ve erimiş peynirli pide",
    m_m2d: "Kıyma ve sebzeli karışık pide",
    m_m3d: "Baharatlı kıymalı ince hamur",
    m_m4: "Mercimek Çorbası", m_m4d: "Limon ve kimyon ile geleneksel kırmızı mercimek",
    m_d1d: "Antep fıstığı ve gül şerbetli baklavalık yufka",
    m_d2d: "Peynir ve şekerli crispy kadayıf, sıcak servis",
    m_d3d: "Tarçınlı fırın sütlaç",
    m_dr1: "Türk Çayı", m_dr1d: "Geleneksel lale bardağında servis",
    m_dr2d: "Köpüklü veya köpüksüz Türk kahvesi",
    m_dr3d: "Soğuk tuzlu yoğurt içeceği",
    menu_note: "* Menü ve fiyatlar tahminidir. Günün tam menüsü için garsona sorunuz.",
    gallery_label: "Galeri", gallery_title: "Fatisa'da Anlar",
    g1:"İç Mekan",g2:"Kahvaltı",g3:"Teras",g4:"Pide",g5:"Tatlılar",g6:"Kahve",g7:"Mutfak",
    contact_label: "Bizi Ziyaret Edin", contact_title: "Fatisa'yı Bulun",
    c_address: "Adres", c_address_detail: "(Tam adresinizi buraya ekleyin)",
    c_hours: "Çalışma Saatleri", c_hours_detail: "Her Gün · 09:00 – 22:00",
    c_phone: "Telefon",
    c_instagram: "Instagram", c_facebook: "Facebook", c_wolt: "Wolt'tan Sipariş Ver",
    map_placeholder: "Google Harita ekleyin"
  },
  ka: {
    nav_about: "ჩვენ შესახებ", nav_menu: "მენიუ", nav_gallery: "გალერეა", nav_contact: "კონტაქტი",
    hero_sub: "რესტორანი · ჰალალ · ბათუმი",
    hero_tagline: "ანატოლიის ავთენტური გემოები, სიყვარულით მომზადებული ბათუმის გულში.",
    hero_btn1: "მენიუ", hero_btn2: "გვიპოვეთ", scroll: "გადახვიეთ",
    about_label: "ჩვენი ისტორია", about_title: "თურქული გემოები ბათუმში",
    about_p1: "ფათისა თურქული სტუმართმოყვარეობის სითბოს ბათუმის გულს უზიარებს. ყველა კერძი თაობიდან თაობაზე გადმოცემული რეცეპტებით მზადდება.",
    about_p2: "ჩვენი სამზარეულო მხოლოდ ჰალალ სერტიფიცირებულ პროდუქტებს იყენებს. მოდით საუზმეზე ან სადილზე — გაგიმასპინძლდებით ოჯახივით.",
    stat_rating: "რეიტინგი", stat_years: "წელი",
    menu_label: "ჩვენი კერძები", menu_title: "მენიუ",
    tab_breakfast: "საუზმე", tab_mains: "მთავარი კერძები", tab_desserts: "დესერტები", tab_drinks: "სასმელები",
    m_b1: "თურქული საუზმის სეტი", m_b1d: "ყველი, ზეითუნი, პომიდორი, კვერცხი, თაფლი, ნაღები, პური",
    m_b2: "მენემენი", m_b2d: "კვერცხი წიწაკით, პომიდვრით და მწვანილით",
    m_b3: "სუჯუქიანი კვერცხი", m_b3d: "შემწვარი კვერცხი ყველოვანი თურქული სოსისით",
    m_b4d: "სეზამის პური, თბილი მიწოდება",
    m_m1d: "პიდე კუბიკებად დაჭრილი კარაჩხი ხორცით და დნობადი ყველით",
    m_m2d: "შერეული პიდე დაქუცმაცებული საქონლის ხორცით",
    m_m3d: "თხელი ფლატბრედი სუნელიანი ხორცით",
    m_m4: "ოსპის წვნიანი", m_m4d: "ტრადიციული წითელი ოსპი ლიმონითა და კუმინით",
    m_d1d: "ფისტიკიანი ბაკლავა ვარდის სიროფით",
    m_d2d: "ქუნეფე ყველით და სიროფით, ცხელი",
    m_d3d: "გამომცხვარი ბრინჯის პუდინგი დარიჩინით",
    m_dr1: "თურქული ჩაი", m_dr1d: "ტრადიციულ ყვავილის ჭიქაში",
    m_dr2d: "ტრადიციული თურქული ყავა",
    m_dr3d: "ცივი მარილიანი იოგურტის სასმელი",
    menu_note: "* მენიუ და ფასები სავარაუდოა. გთხოვთ ჰკითხოთ მიმტანს დღვანდელ მენიუზე.",
    gallery_label: "გალერეა", gallery_title: "მომენტები ფათისაში",
    g1:"ინტერიერი",g2:"საუზმე",g3:"ტერასა",g4:"პიდე",g5:"დესერტები",g6:"ყავა",g7:"სამზარეულო",
    contact_label: "მოგვიარეთ", contact_title: "იპოვეთ ფათისა",
    c_address: "მისამართი", c_address_detail: "(დაამატეთ ზუსტი მისამართი)",
    c_hours: "სამუშაო საათები", c_hours_detail: "ყოველდღე · 09:00 – 22:00",
    c_phone: "ტელეფონი",
    c_instagram: "Instagram", c_facebook: "Facebook", c_wolt: "შეუკვეთეთ Wolt-ით",
    map_placeholder: "დაამატეთ Google Maps"
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  document.documentElement.lang = lang;
}

/* ── MENU TABS ── */
function switchTab(tab) {
  const panels = document.querySelectorAll('.menu-panel');
  const tabs = document.querySelectorAll('.menu-tab');

  panels.forEach(p => p.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  const target = document.getElementById('panel-' + tab);
  target.classList.add('active');
  event.target.classList.add('active');
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── NAV SHRINK ON SCROLL ── */
const nav = document.querySelector('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScroll = y;
}, { passive: true });

/* ── ACTIVE NAV LINK ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => sectionObserver.observe(s));

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}

/* ── COUNTER ANIMATION ── */
const counters = document.querySelectorAll('.stat-num[data-count]');
let countersDone = false;

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersDone) {
      countersDone = true;
      counters.forEach(counter => {
        const target = parseFloat(counter.dataset.count);
        const suffix = counter.dataset.suffix || '';
        const isFloat = target % 1 !== 0;
        const duration = 1800;
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = target * ease;

          if (isFloat) {
            counter.textContent = current.toFixed(1) + suffix;
          } else {
            counter.textContent = Math.floor(current) + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            counter.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
          }
        }
        requestAnimationFrame(tick);
      });
    }
  });
}, { threshold: 0.5 });

if (counters.length > 0) {
  counterObserver.observe(counters[0].closest('.about-stats'));
}

/* ── HERO PARTICLES ── */
(function initParticles() {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const count = 35;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.25 - 0.1,
      opacity: Math.random() * 0.4 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 169, 76, ${p.opacity})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
