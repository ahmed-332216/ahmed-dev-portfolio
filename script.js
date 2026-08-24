const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('#main-nav');
const themeButton = document.querySelector('#theme-button');
const languageButton = document.querySelector('#language-button');
const year = document.querySelector('#year');
const contactForm = document.querySelector('#contact-form');
const backToTop = document.querySelector('#back-to-top');
document.querySelectorAll('.project-card img, .profile-image img, .portrait img, .footer-photo').forEach(image => { image.loading = 'lazy'; image.decoding = 'async'; });
const revealItems = document.querySelectorAll('main>section, .service-list article, .project-card');

const text = {
  ar: { nav: ['الخدمات', 'العمل', 'عنّي', 'تواصل ↗'], hero: ['أبني مواقع توصل فكرتك ', 'للعميل بوضوح.', 'مطور ويب أساعد الشركات ورواد الأعمال على تحويل أفكارهم إلى مواقع سريعة، مرتبة، وسهلة الاستخدام.', 'شاهد ما أقدمه ↗', 'ابدأ مشروعك', 'متاح لمشاريع جديدة'],
    sections: ['01 — الخدمات', 'من الفكرة إلى واجهة تخدم هدفك.', 'أبني صفحات وتجارب ويب تركّز على الوضوح، الأداء، وسهولة الوصول.', '02 — أسلوب العمل', 'مشاريعك القادمة تستحق مساحة مدروسة.', 'كل مشروع يبدأ بفهم المشكلة والهدف، ثم يتحول إلى تجربة واضحة وسريعة وسهلة الاستخدام.', '03 — عن أحمد', 'فضول تقني، وشغل منظم.', 'أنا أحمد هشام، مطور ويب مهتم ببناء مواقع تحترم وقت المستخدم وتساعد أصحاب المشاريع على الظهور بصورة أوضح على الإنترنت.', '04 — تواصل', 'عندك فكرة؟ خلّينا نحوّلها لموقع واضح.'] },
  en: { nav: ['Services', 'Projects', 'About', 'Contact ↗'], hero: ['I build websites that make your idea ', 'clear to customers.', 'I help businesses and founders turn ideas into fast, thoughtful, easy-to-use websites.', 'Explore my services ↗', 'Start a project', 'Available for selected projects'],
    sections: ['01 — SERVICES', 'From a concept to an interface with a purpose.', 'I create web experiences focused on clarity, performance, and usability.', '02 — PROJECTS', 'Practical tools, built with purpose.', 'A selection of interactive projects that combine thoughtful interfaces with practical security concepts.', '03 — ABOUT AHMED', 'Technical curiosity, organized work.', 'I am Ahmed Hesham, a web developer building clear, useful websites for businesses and independent projects.', '04 — CONTACT', 'Have an idea? Let’s turn it into a clear website.'] }
};
let language = 'ar';
const savedLanguage = localStorage.getItem('language');
revealItems.forEach(item => item.classList.add('reveal-item'));
if ('IntersectionObserver' in window) { const revealObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.12 }); revealItems.forEach(item => revealObserver.observe(item)); } else { revealItems.forEach(item => item.classList.add('revealed')); }
const closeMenu = () => { nav.classList.remove('open'); document.body.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰'; };
menuButton.addEventListener('click', () => { const open = !nav.classList.contains('open'); if (open) { nav.classList.add('open'); document.body.classList.add('menu-open'); menuButton.setAttribute('aria-expanded', 'true'); menuButton.textContent = '×'; } else { closeMenu(); } });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => { if (nav.classList.contains('open') && !nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
themeButton.addEventListener('click', () => { const dark = document.body.classList.toggle('dark'); themeButton.textContent = dark ? '☀' : '☾'; themeButton.setAttribute('aria-label', dark ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'); localStorage.setItem('theme', dark ? 'dark' : 'light'); });
if (localStorage.getItem('theme') === 'dark') { document.body.classList.add('dark'); themeButton.textContent = '☀'; }
languageButton.addEventListener('click', () => { language = language === 'ar' ? 'en' : 'ar'; localStorage.setItem('language', language); const t = text[language]; document.documentElement.lang = language; document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'; nav.querySelectorAll('a').forEach((a, i) => a.textContent = t.nav[i]); document.querySelector('.hero h1').innerHTML = t.hero[0] + '<em>' + t.hero[1] + '</em>'; document.querySelector('.hero-copy>p:nth-of-type(2)').textContent = t.hero[2]; document.querySelector('.hero-actions .primary').textContent = t.hero[3]; document.querySelector('.hero-actions .secondary').textContent = t.hero[4]; document.querySelector('.availability').innerHTML = '<i></i> ' + t.hero[5]; const headings = document.querySelectorAll('.section-heading, .contact>div:first-child'); const values = [0,1,2,3,4,5,6,7,8,9,10]; headings[0].querySelector('small').textContent=t.sections[0]; headings[0].querySelector('h2').textContent=t.sections[1]; headings[0].querySelector('p').textContent=t.sections[2]; headings[1].querySelector('small').textContent=t.sections[3]; headings[1].querySelector('h2').textContent=t.sections[4]; headings[1].querySelector('p').textContent=t.sections[5]; headings[2].querySelector('small').textContent=t.sections[6]; headings[2].querySelector('h2').textContent=t.sections[7]; headings[2].querySelector('p').textContent=t.sections[8]; headings[3].querySelector('small').textContent=t.sections[9]; headings[3].querySelector('h2').textContent=t.sections[10]; languageButton.textContent = language === 'ar' ? 'EN' : 'ع'; });
if (savedLanguage === 'en') languageButton.click();
year.textContent = new Date().getFullYear();
contactForm.insertAdjacentHTML('beforeend', '<p class="form-note">سيتم فتح برنامج البريد لديك لإرسال الرسالة.</p>');
window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 500); });
backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
contactForm.addEventListener('submit', event => { event.preventDefault(); const formData = new FormData(contactForm); const subject = encodeURIComponent('مشروع جديد من ' + formData.get('name')); const body = encodeURIComponent('الاسم: ' + formData.get('name') + '\n\n' + formData.get('message')); window.location.href = `mailto:aaahhhmmm@gmail.com?subject=${subject}&body=${body}`; });
