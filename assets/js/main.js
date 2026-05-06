/*=============== WELCOME POPUP ===============*/
(function () {
  var overlay = document.createElement('div');
  overlay.classList.add('welcome-overlay');
  overlay.id = 'welcome-overlay';
  overlay.innerHTML =
    '<div class="welcome-overlay__bg"></div>' +
    '<div class="welcome-card">' +
      '<div class="wc-deco wc-deco--tl">\u273f</div>' +
      '<div class="wc-deco wc-deco--tr">\u2729</div>' +
      '<div class="wc-deco wc-deco--bl">\u2661</div>' +
      '<div class="wc-deco wc-deco--br">\u274b</div>' +
      '<div class="welcome-card__avatar"><img src="assets/img/photo1.jpeg" alt="Dalia avatar" /></div>' +
      '<div class="welcome-card__badge" id="wc-badge">\u273f creative web developer \u273f</div>' +
      '<h2 class="welcome-card__hi" id="wc-hi">Hi, I\'m Dalia \u2726</h2>' +
      '<div class="wc-divider"><span>\u2726</span><span>\u273f</span><span>\u2726</span></div>' +
      '<p class="welcome-card__sub" id="wc-sub">' +
        'Based in <b>Toulon, France</b> \u2014 D\u00E9veloppeur Web et Web Mobile student &amp; <b>open to internship</b> \uD83C\uDF37<br>' +
        'I build cute, functional things \u2014 glassmorphism, pastel pixels &amp; clean code.' +
      '</p>' +
      '<button class="welcome-card__btn" id="welcome-enter-btn">' +
        '<span id="wc-btn">Enter \u2661</span>' +
        '<i class="ri-arrow-right-line"></i>' +
      '</button>' +
    '</div>';
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  function dismiss() {
    overlay.classList.add('dismissing');
    document.body.style.overflow = '';
    setTimeout(function () { if (overlay.parentNode) overlay.remove(); }, 480);
  }
  var enterBtn = document.getElementById('welcome-enter-btn');
  if (enterBtn) enterBtn.addEventListener('click', dismiss);
  var bgEl = overlay.querySelector('.welcome-overlay__bg');
  if (bgEl) bgEl.addEventListener('click', dismiss);
}());

/*=============== INJECT BUBBLES ===============*/
var bubblesWrap = document.createElement('div');
bubblesWrap.classList.add('bubbles-wrap');
for (var _bi = 0; _bi < 12; _bi++) {
  var _bub = document.createElement('div');
  _bub.classList.add('bubble');
  bubblesWrap.appendChild(_bub);
}
document.body.appendChild(bubblesWrap);

/*=============== INJECT STARS ===============*/
var starsWrap = document.createElement('div');
starsWrap.classList.add('stars-wrap');
for (var _si = 0; _si < 20; _si++) {
  var _star = document.createElement('div');
  _star.classList.add('star');
  starsWrap.appendChild(_star);
}
var shoot1 = document.createElement('div');
shoot1.classList.add('star', 'shooting');
var shoot2 = document.createElement('div');
shoot2.classList.add('star', 'shooting', 'shooting-2');
starsWrap.appendChild(shoot1);
starsWrap.appendChild(shoot2);
document.body.appendChild(starsWrap);

/*=============== INJECT SUN & MOON ===============*/
var sunEl = document.createElement('div');
sunEl.classList.add('sun');
document.body.appendChild(sunEl);
var moonEl = document.createElement('div');
moonEl.classList.add('moon');
document.body.appendChild(moonEl);

/*=============== INJECT KAWAII MASCOTS ===============*/
var kawaiiMusic = document.createElement('img');
kawaiiMusic.src = 'assets/img/kawaii-music.gif';
kawaiiMusic.alt = '';
kawaiiMusic.classList.add('kawaii-music');
kawaiiMusic.setAttribute('aria-hidden', 'true');
document.body.appendChild(kawaiiMusic);

var kawaiiCat = document.createElement('img');
kawaiiCat.src = 'assets/img/kawaii-cat.gif';
kawaiiCat.alt = '';
kawaiiCat.classList.add('kawaii-cat');
kawaiiCat.setAttribute('aria-hidden', 'true');
document.body.appendChild(kawaiiCat);

/*=============== SHOW MENU ===============*/
var navMenu   = document.getElementById('nav-menu');
var navToggle = document.getElementById('nav-toggle');
var navClose  = document.getElementById('nav-close');
if (navToggle) navToggle.addEventListener('click', function () { if (navMenu) navMenu.classList.add('show-menu'); });
if (navClose)  navClose.addEventListener('click',  function () { if (navMenu) navMenu.classList.remove('show-menu'); });
document.querySelectorAll('.nav__link').forEach(function (n) {
  n.addEventListener('click', function () {
    var m = document.getElementById('nav-menu');
    if (m) m.classList.remove('show-menu');
  });
});

/*=============== SHADOW HEADER ===============*/
window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  if (!header) return;
  header.classList.toggle('shadow-header', window.scrollY >= 50);
}, { passive: true });

/*=============== TYPEWRITER ===============*/
var currentLang = 'en';

var typeRolesEN = [
  'Creative Web Developer',
  'D\u00e9veloppeur Web et Web Mobile Student',
  'Frontend Specialist',
  'UI/UX Enthusiast',
  'Seeking Internship \u2605'
];
var typeRolesFR = [
  'D\u00e9veloppeuse Web Cr\u00e9ative',
  '\u00c9tudiante D\u00e9veloppeur Web et Web Mobile',
  'Sp\u00e9cialiste Frontend',
  'Passionn\u00e9e UI/UX',
  'En recherche de stage \u2605'
];

var typeRoleIndex = 0, typeCharIndex = 0, typeDeleting = false, typeTimer = null;

function runTypewriter() {
  var el = document.getElementById('typewriter-text');
  if (!el) return;
  var roles = (currentLang === 'fr') ? typeRolesFR : typeRolesEN;
  var cur = roles[typeRoleIndex % roles.length];
  if (typeDeleting) { el.textContent = cur.substring(0, typeCharIndex - 1); typeCharIndex--; }
  else              { el.textContent = cur.substring(0, typeCharIndex + 1); typeCharIndex++; }
  var speed = typeDeleting ? 60 : 100;
  if (!typeDeleting && typeCharIndex === cur.length) { speed = 2000; typeDeleting = true; }
  else if (typeDeleting && typeCharIndex === 0) { typeDeleting = false; typeRoleIndex = (typeRoleIndex + 1) % roles.length; speed = 400; }
  typeTimer = setTimeout(runTypewriter, speed);
}
setTimeout(runTypewriter, 1500);

/*=============== SKILL TAGS ===============*/
var aboutListEl = document.querySelector('.about__list');
if (aboutListEl) {
  var skills = ['HTML', 'CSS', 'JS', 'Umbraco', 'React', 'Angular',
    'SQL', 'Node.js', 'API', 'WordPress', 'Tailwind', 'Python',
    'PHP', 'Figma'];
  aboutListEl.innerHTML = '';
  var tagsWrap = document.createElement('div');
  tagsWrap.classList.add('skill-tags');
  skills.forEach(function (s) {
    var tag = document.createElement('span');
    tag.classList.add('skill-tag');
    tag.textContent = s;
    tagsWrap.appendChild(tag);
  });
  aboutListEl.appendChild(tagsWrap);
}

/*=============== STATS COUNTER ===============*/
var aboutInfoEl = document.querySelector('.about__info');
if (aboutInfoEl) {
  aboutInfoEl.insertAdjacentHTML('beforeend',
    '<div class="stats">' +
      '<div class="stat-item"><span class="stat-number" data-target="7">0+</span><span class="stat-label">Months @ Carbon Six</span></div>' +
      '<div class="stat-item"><span class="stat-number" data-target="6">0+</span><span class="stat-label">Projects shipped</span></div>' +
      '<div class="stat-item"><span class="stat-number" data-target="14">0+</span><span class="stat-label">Skills</span></div>' +
    '</div>');
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var steps = 30, stepTime = 40, inc = target / steps, cur = 0;
    function tick() { cur += inc; if (cur < target) { el.textContent = Math.floor(cur) + '+'; setTimeout(tick, stepTime); } else { el.textContent = target + '+'; } }
    tick();
  }
  var statsObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { document.querySelectorAll('.stat-number').forEach(animateCounter); statsObs.disconnect(); } });
  }, { threshold: 0.5 });
  var statsSec = document.querySelector('.stats');
  if (statsSec) statsObs.observe(statsSec);
}

/*=============== CONTACT FORM (Netlify Forms) ===============*/
var contactFormEl    = document.getElementById('contact-form');
var contactMessageEl = document.getElementById('contact-message');
var btnSendEl        = document.getElementById('contact-button');
if (contactFormEl) {
  contactFormEl.addEventListener('submit', function (e) {
    e.preventDefault();
    // Honeypot check — silently drop bot submissions
    var hp = document.getElementById('website');
    if (hp && hp.value.trim() !== '') {
      contactMessageEl.innerHTML = 'Message sent ✅';
      setTimeout(function () { contactMessageEl.innerHTML = ''; }, 5000);
      contactFormEl.reset();
      return;
    }
    btnSendEl.innerHTML = "<i class='ri-send-plane-line'></i> Sending...";
    btnSendEl.disabled = true;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: (function () {
        var data = new FormData(contactFormEl);
        var pairs = [];
        data.forEach(function (value, key) {
          pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        });
        return pairs.join('&');
      })()
    })
      .then(function (resp) {
        if (!resp.ok) throw new Error('Network response was not ok');
        contactMessageEl.innerHTML = 'Message sent \u2705';
        setTimeout(function () { contactMessageEl.innerHTML = ''; }, 5000);
        contactFormEl.reset();
      })
      .catch(function () {
        contactMessageEl.innerHTML = 'Error \u274c \u2014 try emailing bacaridalia@outlook.fr';
        setTimeout(function () { contactMessageEl.innerHTML = ''; }, 8000);
      })
      .then(function () {
        btnSendEl.innerHTML = "<i class='ri-send-plane-line'></i> Send Message";
        btnSendEl.disabled = false;
      });
  });
}

/*=============== SCROLL UP ===============*/
window.addEventListener('scroll', function () {
  var el = document.getElementById('scroll-up');
  if (el) el.classList.toggle('show-scroll', window.scrollY >= 350);
}, { passive: true });

/*=============== ACTIVE LINK ===============*/
var pageSections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function () {
  var y = window.scrollY;
  pageSections.forEach(function (s) {
    var top = s.offsetTop - 58;
    var lnk = document.querySelector('.nav__menu a[href*=' + s.getAttribute('id') + ']');
    if (lnk) lnk.classList.toggle('active-link', y > top && y <= top + s.offsetHeight);
  });
}, { passive: true });

/*=============== DARK / LIGHT THEME ===============*/
var isDarkMQ = window.matchMedia('(prefers-color-scheme: dark)');
var themeBtn = document.getElementById('theme-button');
function applyDark()  { document.body.classList.add('dark-theme');    if (themeBtn) { themeBtn.classList.add('ri-moon-line');    themeBtn.classList.remove('ri-sun-line'); } }
function applyLight() { document.body.classList.remove('dark-theme'); if (themeBtn) { themeBtn.classList.remove('ri-moon-line'); themeBtn.classList.add('ri-sun-line'); } }
isDarkMQ.matches ? applyDark() : applyLight();
isDarkMQ.addEventListener('change', function () { isDarkMQ.matches ? applyDark() : applyLight(); });
if (themeBtn) themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  themeBtn.classList.toggle('ri-moon-line');
  themeBtn.classList.toggle('ri-sun-line');
});

/*=============== TRANSLATIONS ===============*/
var btnEn = document.getElementById('btn-en');
var btnFr = document.getElementById('btn-fr');

var T = {
  en: {
    'nav-home': 'Home', 'nav-about': 'About Me', 'nav-projects': 'Projects',
    'nav-contact': 'Contact Me', 'nav-cv': 'Download CV',
    'home-desc': '<b><span class="typewriter" id="typewriter-text">Creative Web Developer</span></b>'
      + ', based in <b>Toulon, France</b>. Currently training for a <b>Titre Pro D\u00e9veloppeur Web et Web Mobile (Bac+2)</b>'
      + ' and actively <b>looking for an internship</b> (28 Sept \u2192 20 Nov 2025).'
      + ' Passionate about UX and new technologies \u2014 I design modern, memorable interfaces'
      + ' from Figma mockup to deployment.',
    'scroll-text': 'Scroll Down',
    'home-availability': 'Available for internship · 28 Sept → 20 Nov 2025 · Toulon or remote',
    'home-cta-cv': 'Download CV',
    'home-cta-contact': 'Contact Me',
    'about-title': 'About Me.',
    'about-desc': 'As a <b>Creative Web Developer</b> in training (Titre Pro Développeur Web et Web Mobile, Bac+2),'
      + ' I design modern and memorable web interfaces \u2014 from Figma mockup to deployment.'
      + ' I worked <b>7 months at Carbon Six</b> as a Web Developer intern: CMS integration'
      + ' (Umbraco, HubSpot, WordPress), client projects and quality standards.<br><br>'
      + 'During my <b>12-week bootcamp at Skills City</b> with <b>IBM</b>, I used Whisper AI'
      + ' to translate thousands of Albanian audio files into English in real time.'
      + ' Currently based in <b>Toulon, France</b> \u2014 actively seeking an'
      + ' <b>internship from 28 Sept to 20 Nov 2025</b>.',
    'about-cv-view-btn': 'View CV', 'about-cv-btn': 'Download CV', 'about-contact-btn': 'Contact Me',
    'exp-title': 'Experience.', 'exp-frontend': 'Front End', 'exp-backend': 'Back End',
    'projects-title': 'Projects.',
    'music-title': 'Music.',
    'music-sub': 'I love listening to music, it helps me relax and focus. Here are some of my favorite songs.',
    'contact-title': 'Contact Me.',
    'contact-desc1': "I will read all emails. Send me any message and I'll get back to you.",
    'contact-desc2': 'I need your <b>Name</b> and <b>Email</b>, and I\'ll reply in a few hours.',
    'contact-form-title': 'Send Me A Message',
    'contact-ph-name': 'First Name', 'contact-ph-email': 'Email Address',
    'contact-ph-subject': 'Subject', 'contact-ph-msg': 'Message',
    'contact-send-btn': 'Send Message',
    'contact-social1': 'Does not send email', 'contact-social2': 'Write me on my social networks',
    'footer-about': 'About', 'footer-exp': 'Experience', 'footer-projects': 'Projects',
    'footer-copy': '\u00a9 All Rights Reserved By',
    'stat-years': 'Months @ Carbon Six', 'stat-projects': 'Projects shipped', 'stat-skills': 'Skills',
    'wc-badge': '\u273f creative web developer \u273f',
    'wc-hi': "Hi, I'm Dalia \u2726",
    'wc-sub': 'Based in <b>Toulon, France</b> \u2014 D\u00E9veloppeur Web et Web Mobile student &amp; <b>open to internship</b> \uD83C\uDF37<br>'
            + 'I build cute, functional things \u2014 glassmorphism, pastel pixels &amp; clean code.',
    'wc-btn': 'Enter \u2661',
    'proj-realestate': "Helps house hunters find the right property in seconds \u2014 smart filters by price, type and location, and a built-in inquiry form to contact owners directly. Angular + TypeScript.",
    'proj-learning': "A one-stop hub for new developers \u2014 handpicked tutorials, docs and tools, organised so beginners stop wasting time hunting through random YouTube playlists.",
    'proj-restaurant': "Lets customers browse the menu and place orders right from their phone \u2014 no calls, no queues. A polished React interface built around the customer's flow.",
    'proj-weather': 'Tells you in one glance if you need an umbrella \u2014 clean, fast, accurate. Real-time data from a public REST API and a UI tuned for daily use.',
    'proj-portfolio': 'My first web portfolio in HTML, CSS and JavaScript. Visually appealing and interactive showcase of my professional profile.',
    'proj-calc': 'Turning a boring everyday tool into something delightful \u2014 full keyboard support, memory functions and sparkle animations. Built from scratch with HTML, CSS & JS.',
    'proj-kanban': "Underwater-themed Kanban app with animated whales, fish and bubbles. Glassmorphism columns and full ocean vibes.",
    'proj-soon': 'Live Demo \u2014 Soon'
  },
  fr: {
    'nav-home': 'Accueil', 'nav-about': '\u00c0 Propos', 'nav-projects': 'Projets',
    'nav-contact': 'Me Contacter', 'nav-cv': 'T\u00e9l\u00e9charger CV',
    'home-desc': '<b><span class="typewriter" id="typewriter-text">D\u00e9veloppeuse Web Cr\u00e9ative</span></b>'
      + ', bas\u00e9e \u00e0 <b>Toulon, France</b>. En formation <b>Titre Pro D\u00e9veloppeur Web et Web Mobile (Bac+2)</b>'
      + ' et en recherche active d\'un <b>stage</b> du 28 sept au 20 nov 2025.'
      + ' Passionn\u00e9e par l\'UX et les nouvelles technologies \u2014 je con\u00e7ois des'
      + ' interfaces modernes et m\u00e9morables, de la maquette Figma au d\u00e9ploiement.',
    'scroll-text': 'D\u00e9filer',
    'home-availability': 'Disponible pour un stage \u00b7 28 sept \u2192 20 nov 2025 \u00b7 Toulon ou remote',
    'home-cta-cv': 'T\u00e9l\u00e9charger CV',
    'home-cta-contact': 'Me Contacter',
    'about-title': '\u00c0 Propos.',
    'about-desc': 'D\u00e9veloppeuse web cr\u00e9ative en formation (<b>Titre Pro D\u00e9veloppeur Web et Web Mobile, Bac+2</b>),'
      + ' je con\u00e7ois des interfaces modernes et m\u00e9morables \u2014 de la maquette Figma au d\u00e9ploiement.'
      + ' J\'ai travaill\u00e9 <b>7 mois chez Carbon Six</b> en stage : int\u00e9gration CMS'
      + ' (Umbraco, HubSpot, WordPress), projets client et gestion de la qualit\u00e9.<br><br>'
      + 'Durant mon <b>bootcamp de 12 semaines chez Skills City</b> avec <b>IBM</b>,'
      + ' j\'ai utilis\u00e9 Whisper AI pour traduire des milliers de fichiers audio albanais en anglais en temps r\u00e9el.'
      + ' Actuellement \u00e0 <b>Toulon, France</b> \u2014 en recherche d\'un'
      + ' <b>stage du 28 sept au 20 nov 2025</b>.',
    'about-cv-view-btn': 'Voir le CV', 'about-cv-btn': 'T\u00e9l\u00e9charger CV', 'about-contact-btn': 'Me Contacter',
    'exp-title': 'Exp\u00e9rience.', 'exp-frontend': 'Front End', 'exp-backend': 'Back End',
    'projects-title': 'Projets.',
    'music-title': 'Musique.',
    'music-sub': "J'adore la musique, \u00e7a m'aide \u00e0 me concentrer. Voici quelques-unes de mes chansons pr\u00e9f\u00e9r\u00e9es.",
    'contact-title': 'Me Contacter.',
    'contact-desc1': 'Je lis tous mes emails. Envoyez-moi un message et je vous r\u00e9pondrai.',
    'contact-desc2': 'J\'ai besoin de votre <b>Nom</b> et <b>Email</b>, je r\u00e9pondrai en quelques heures.',
    'contact-form-title': 'Envoyez-moi un Message',
    'contact-ph-name': 'Pr\u00e9nom', 'contact-ph-email': 'Adresse Email',
    'contact-ph-subject': 'Sujet', 'contact-ph-msg': 'Message',
    'contact-send-btn': 'Envoyer',
    'contact-social1': "N'envoie pas d'email", 'contact-social2': 'Contactez-moi sur mes r\u00e9seaux',
    'footer-about': '\u00c0 Propos', 'footer-exp': 'Exp\u00e9rience', 'footer-projects': 'Projets',
    'footer-copy': '\u00a9 Tous droits r\u00e9serv\u00e9s par',
    'stat-years': 'Mois @ Carbon Six', 'stat-projects': 'Projets livr\u00e9s', 'stat-skills': 'Comp\u00e9tences',
    'wc-badge': '\u273f d\u00e9veloppeuse web cr\u00e9ative \u273f',
    'wc-hi': 'Bonjour, je suis Dalia \u2726',
    'wc-sub': 'Bas\u00e9e \u00e0 <b>Toulon</b> \u2014 en formation D\u00e9veloppeur Web et Web Mobile &amp; <b>en recherche de stage</b> \uD83C\uDF37<br>'
            + 'Je cr\u00e9e des choses mignonnes et fonctionnelles \u2014 glassmorphisme &amp; code propre.',
    'wc-btn': 'Entrer \u2661',
    'proj-realestate': "Aide \u00e0 trouver le bien parfait en quelques secondes \u2014 filtres intelligents par prix, type et localisation, formulaire de contact direct propri\u00e9taire. Angular + TypeScript.",
    'proj-learning': "Un hub centralis\u00e9 pour les d\u00e9butants \u2014 tutos, docs et outils s\u00e9lectionn\u00e9s, pour arr\u00eater de perdre du temps sur des playlists YouTube al\u00e9atoires.",
    'proj-restaurant': "Permet aux clients de consulter le menu et commander depuis leur t\u00e9l\u00e9phone \u2014 fini les appels et files d'attente. Interface React pens\u00e9e pour le client.",
    'proj-weather': "Dit en un coup d'\u0153il s'il faut prendre un parapluie \u2014 simple, rapide, pr\u00e9cis. Donn\u00e9es en temps r\u00e9el via REST API.",
    'proj-portfolio': 'Mon premier portfolio HTML, CSS et JavaScript. Pr\u00e9sentation interactive de mon profil.',
    'proj-calc': "Transformer un outil banal en exp\u00e9rience plaisante \u2014 support clavier complet, fonctions m\u00e9moire et animations. HTML, CSS et JS purs.",
    'proj-kanban': 'Kanban sous-marin avec baleines, poissons et bulles anim\u00e9s. Colonnes glassmorphism et ambiance oc\u00e9an.',
    'proj-soon': 'D\u00e9mo \u2014 Bient\u00f4t'
  }
};

/*=============== APPLY LANGUAGE ===============*/
function setQ(sel, val, isHTML) {
  var el = document.querySelector(sel);
  if (!el) return;
  if (isHTML) el.innerHTML = val; else el.textContent = val;
}

function applyLang(lang) {
  var t = T[lang];
  if (!t) return;

  /* Nav */
  var navEls = document.querySelectorAll('.nav__link');
  var navKeys = ['nav-home', 'nav-about', 'nav-projects', 'nav-contact', 'nav-cv'];
  navEls.forEach(function (el, i) {
    if (!navKeys[i] || !t[navKeys[i]]) return;
    var nodes = el.childNodes;
    for (var n = nodes.length - 1; n >= 0; n--) {
      if (nodes[n].nodeType === 3) { nodes[n].textContent = ' ' + t[navKeys[i]]; return; }
    }
    el.appendChild(document.createTextNode(' ' + t[navKeys[i]]));
  });

  /* Home + typewriter restart */
  var hd = document.querySelector('.home__description');
  if (hd) {
    hd.innerHTML = t['home-desc'];
    if (typeTimer) clearTimeout(typeTimer);
    typeRoleIndex = 0; typeCharIndex = 0; typeDeleting = false;
    setTimeout(runTypewriter, 300);
  }
  setQ('.home__scroll-text', t['scroll-text']);
  setQ('#home-availability-text', t['home-availability']);
  var hCv = document.getElementById('home-cta-cv');
  if (hCv) hCv.innerHTML = '<i class="ri-download-2-line"></i> ' + t['home-cta-cv'];
  var hCt = document.querySelector('#home-cta-contact .button__ghost-title');
  if (hCt) hCt.textContent = t['home-cta-contact'];

  /* About */
  setQ('.about .section__title-1', t['about-title']);
  setQ('.about__description', t['about-desc'], true);
  var cvView = document.getElementById('about-cv-view');
  if (cvView) cvView.innerHTML = '<i class="ri-eye-line"></i> ' + t['about-cv-view-btn'];
  var cvDl = document.getElementById('about-cv-download');
  if (cvDl) cvDl.innerHTML = '<i class="ri-download-2-line"></i> ' + t['about-cv-btn'];
  setQ('.about__buttons .button__ghost .button__ghost-title', t['about-contact-btn']);

  /* Experience */
  setQ('.experience .section__title-2 span', t['exp-title']);
  var exBx = document.querySelectorAll('.experience__box__title');
  if (exBx[0]) exBx[0].textContent = t['exp-frontend'];
  if (exBx[1]) exBx[1].textContent = t['exp-backend'];

  /* Projects */
  setQ('.projects .section__title-1 span', t['projects-title']);
  document.querySelectorAll('.projects__card[data-proj]').forEach(function (card) {
    var key = 'proj-' + card.getAttribute('data-proj');
    var descEl = card.querySelector('.projects__description');
    if (descEl && t[key]) descEl.textContent = t[key];
    var soonSpan = card.querySelector('.ocean-coming-btn span');
    if (soonSpan) soonSpan.textContent = t['proj-soon'];
  });

  /* Music */
  var mt = document.querySelector('.music .section__title-2 span');
  if (mt) mt.innerHTML = t['music-title'] + '<i class="ri-spotify-line"></i>';
  setQ('.music__title-sub', t['music-sub']);

  /* Contact */
  setQ('.contact__data .section__title-2 span', t['contact-title']);
  setQ('.contact__description-1', t['contact-desc1']);
  setQ('.contact__description-2', t['contact-desc2'], true);
  setQ('.contact__title', t['contact-form-title']);
  ['name', 'email', 'subject', 'message'].forEach(function (id, i) {
    var phKey = ['contact-ph-name', 'contact-ph-email', 'contact-ph-subject', 'contact-ph-msg'][i];
    var inp = document.getElementById(id); if (inp) inp.placeholder = t[phKey];
    var lbl = document.querySelector('label[for="' + id + '"]'); if (lbl) lbl.textContent = t[phKey];
  });
  var sb = document.getElementById('contact-button');
  if (sb && !sb.disabled) sb.innerHTML = '<i class="ri-send-plane-line"></i> ' + t['contact-send-btn'];
  setQ('.contact__social-description-1', t['contact-social1']);
  setQ('.contact__social-description-2', t['contact-social2']);

  /* Footer */
  var fl = document.querySelectorAll('.footer__link');
  ['footer-about', 'footer-exp', 'footer-projects'].forEach(function (k, i) { if (fl[i]) fl[i].textContent = t[k]; });
  var fc = document.querySelector('.footer__copy');
  if (fc) { var anch = fc.querySelector('a'); if (anch) fc.innerHTML = t['footer-copy'] + ' ' + anch.outerHTML; }

  /* Stats */
  var sl = document.querySelectorAll('.stat-label');
  ['stat-years', 'stat-projects', 'stat-skills'].forEach(function (k, i) { if (sl[i]) sl[i].textContent = t[k]; });

  /* Welcome popup */
  var wcBadge = document.getElementById('wc-badge'); if (wcBadge) wcBadge.textContent = t['wc-badge'];
  var wcHi    = document.getElementById('wc-hi');    if (wcHi)    wcHi.textContent    = t['wc-hi'];
  var wcSub   = document.getElementById('wc-sub');   if (wcSub)   wcSub.innerHTML     = t['wc-sub'];
  var wcBtn   = document.getElementById('wc-btn');   if (wcBtn)   wcBtn.textContent   = t['wc-btn'];

  document.documentElement.lang = lang;
}

applyLang('en');

if (btnEn) btnEn.addEventListener('click', function () {
  if (currentLang === 'en') return;
  currentLang = 'en';
  btnEn.classList.add('active');
  if (btnFr) btnFr.classList.remove('active');
  applyLang('en');
});
if (btnFr) btnFr.addEventListener('click', function () {
  if (currentLang === 'fr') return;
  currentLang = 'fr';
  btnFr.classList.add('active');
  if (btnEn) btnEn.classList.remove('active');
  applyLang('fr');
});

/*=============== SCROLL REVEAL ===============*/
var sr = ScrollReveal({ origin: 'top', distance: '40px', duration: 1800, delay: 200 });
sr.reveal('.home__perfil, .about__image, .contact__mail, #experience-box-right, #music-box-right', { origin: 'right' });
sr.reveal('.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data, #experience-box-left, #music-box-left', { origin: 'left' });
sr.reveal('.projects__card, .section__title-2, .music__title-sub', { interval: 100 });
sr.reveal('.stat-item', { interval: 120, origin: 'bottom', distance: '20px' });
sr.reveal('.skill-tag', { interval: 40, origin: 'bottom', distance: '15px' });