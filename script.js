// ==========================================
// 1. DATA STATE & CONFIGURATION
// ==========================================
const STORAGE_KEY = 'hyre_builder_autosave';

/**
 * Dicționar complet de traduceri.
 * Acoperă interfața publică, Dashboard-ul, placeholders și mesajele de sistem.
 */
const translations = {
    ro: {
        // Navigație și Titluri Secțiuni
        nav_projects: "Proiecte",
        nav_stack: "Tehnologii",
        nav_contact: "Contact",
        hero_explore: "Explorează Proiectele",
        hero_cv: "Descarcă CV",
        sec_exp_span: "Parcursul meu",
        sec_exp_h2: "Experiență & Educație",
        sec_proj_span: "Portofoliu",
        sec_proj_h2: "Proiecte Selectate",
        sec_contact_span: "Contact",
        sec_contact_h2: "Hai să discutăm",
        
        // Formular de Contact
        label_name: "Numele tău",
        label_email: "Email",
        label_message: "Mesaj",
        ph_name: "Ex: Ion Popescu",
        ph_email: "ion@exemplu.ro",
        ph_message: "Spune-mi despre proiectul tău...",
        btn_send: "Trimite Mesajul",
        contact_direct: "Scrie-mi direct",

        // Dashboard UI - Header și Tab-uri
        btn_customize: "Personalizează Site-ul",
        db_title: "Hyre Dashboard",
        tab_info: "Info",
        tab_share: "🚀 Share",
        tab_tech: "Tech",
        tab_path: "Parcurs",
        tab_projects: "Proiecte",
        tab_design: "Stil",

        // Dashboard Labels - Tab Info
        lbl_logo_img: "Logo Imagine (Opțional)",
        sm_logo_img: "Va fi afișată rotundă lângă text.",
        lbl_logo_txt: "Logo Text / Nume",
        lbl_favicon: "Favicon (Imagine Tab Browser)",
        sm_favicon: "Încarcă un fișier .png sau .ico (recomandat 32x32px).",
        lbl_badge: "Badge Disponibilitate",
        lbl_hero_title: "Titlu Principal",
        lbl_hero_desc: "Descriere Hero",
        lbl_cv_url: "Link URL către CV",
        lbl_formspree: "Formspree ID",
        lbl_seo_header: "🔍 Setări SEO & Social Media",
        lbl_meta_title: "Titlu SEO",
        lbl_meta_desc: "Descriere Meta",
        lbl_og_img: "Imagine Preview Social (Open Graph)",
        sm_og_img: "Această imagine va apărea când postezi link-ul pe LinkedIn.",

        // Dashboard - Tab Share
        lbl_share_title: "Îți place Hyre? Recomandă-l!",
        sm_share_desc: "Ajută și alți developeri să își construiască un portofoliu Senior Grade.",
        copy_link: "Copiază Link",
        copied: "Copiat! ✅",

        // Dashboard - Liste și Placeholder-uri specifice
        btn_add_tech: "+ Tehnologie",
        btn_add_exp: "+ Etapă",
        btn_add_proj: "+ Proiect",
        ph_tech_name: "Nume (ex: Java)",
        ph_tech_icon: "Clasă Devicon sau URL imagine",
        ph_exp_year: "An fundal",
        ph_exp_date: "Perioadă",
        ph_exp_title: "Titlu",
        ph_exp_comp: "Companie",
        ph_exp_desc: "Descriere",
        ph_exp_lucide: "Nume iconiță de pe lucide.dev",
        btn_delete: "Șterge",

        // Dashboard - Tab Stil
        lbl_font: "Font Principal",
        lbl_order: "Ordine Secțiuni",
        lbl_accent: "Culoare Accent",
        lbl_bg_color: "Culoare Fundal",
        lbl_email_fld: "Email Contact",
        lbl_github_fld: "GitHub URL",
        lbl_linkedin_fld: "LinkedIn URL",

        // Dashboard - Footer
        btn_docs: "Ghid de Lansare",
        btn_preview: "Preview Mode",
        btn_export: "Exportă index.html",
        btn_reset: "Resetează Progresul",

        // Buy Me a Coffee
        lbl_coffee: "Link Buy Me a Coffee",
        btn_coffee: "Cumpără-mi o cafea",
        btn_support: "Susține Proiectul",
        
        // Mesaje Sistem și Validări
        exit_preview: "Ieșire Preview",
        confirm_reset: "Sigur vrei să resetezi progresul Hyre?",
        alert_copy: "Email copiat!",
        seo_perfect: "Perfect",
        seo_short: "Prea scurt",
        seo_long: "Prea lung",
        chars: "caractere"
    },
    en: {
        // Site UI
        nav_projects: "Projects",
        nav_stack: "Tech Stack",
        nav_contact: "Contact",
        hero_explore: "Explore Projects",
        hero_cv: "Download CV",
        sec_exp_span: "My Journey",
        sec_exp_h2: "Experience & Education",
        sec_proj_span: "Portfolio",
        sec_proj_h2: "Selected Projects",
        sec_contact_span: "Contact",
        sec_contact_h2: "Let's Talk",

        // Contact Form
        label_name: "Your Name",
        label_email: "Email",
        label_message: "Message",
        ph_name: "Ex: John Doe",
        ph_email: "john@example.com",
        ph_message: "Tell me about your project...",
        btn_send: "Send Message",
        contact_direct: "Email me directly",

        //Buy Me a Coffee
        lbl_coffee: "Buy Me a Coffee Link",
        btn_coffee: "Buy Me a Coffee",
        btn_support: "Support Project",

        // Dashboard UI - Header & Tabs
        btn_customize: "Customize Website",
        db_title: "Hyre Dashboard",
        tab_info: "Info",
        tab_share: "🚀 Share",
        tab_tech: "Tech",
        tab_path: "Journey",
        tab_projects: "Projects",
        tab_design: "Style",

        // Dashboard Labels - Tab Info
        lbl_logo_img: "Logo Image (Optional)",
        sm_logo_img: "It will be displayed round next to the text.",
        lbl_logo_txt: "Logo Text / Name",
        lbl_favicon: "Favicon (Browser Tab Icon)",
        sm_favicon: "Upload a .png or .ico file (32x32px recommended).",
        lbl_badge: "Availability Badge",
        lbl_hero_title: "Main Title",
        lbl_hero_desc: "Hero Description",
        lbl_cv_url: "CV URL Link",
        lbl_formspree: "Formspree ID",
        lbl_seo_header: "🔍 SEO & Social Media Settings",
        lbl_meta_title: "SEO Title",
        lbl_meta_desc: "Meta Description",
        lbl_og_img: "Social Preview Image (Open Graph)",
        sm_og_img: "This image will appear when you post the link on LinkedIn.",

        // Dashboard - Tab Share
        lbl_share_title: "Like Hyre? Recommend it!",
        sm_share_desc: "Help other developers build a Senior Grade portfolio.",
        copy_link: "Copy Link",
        copied: "Copied! ✅",

        // Dashboard - Lists
        btn_add_tech: "+ Technology",
        btn_add_exp: "+ Stage",
        btn_add_proj: "+ Project",
        ph_tech_name: "Name (e.g., Java)",
        ph_tech_icon: "Devicon class or image URL",
        ph_exp_year: "Bg Year",
        ph_exp_date: "Period",
        ph_exp_title: "Title",
        ph_exp_comp: "Company",
        ph_exp_desc: "Description",
        ph_exp_lucide: "Icon name from lucide.dev",
        btn_delete: "Delete",

        // Dashboard - Tab Style
        lbl_font: "Primary Font",
        lbl_order: "Section Order",
        lbl_accent: "Accent Color",
        lbl_bg_color: "Background Color",
        lbl_email_fld: "Contact Email",
        lbl_github_fld: "GitHub URL",
        lbl_linkedin_fld: "LinkedIn URL",

        // Dashboard - Footer
        btn_docs: "Launch Guide",
        btn_preview: "Preview Mode",
        btn_export: "Export index.html",
        btn_reset: "Reset Progress",

        // System
        exit_preview: "Exit Preview",
        confirm_reset: "Are you sure you want to reset Hyre progress?",
        alert_copy: "Email copied!",
        seo_perfect: "Perfect",
        seo_short: "Too short",
        seo_long: "Too long",
        chars: "chars"
    }
};

const defaultData = {
    general: {
        lang: "ro",
        logo: "HYRE",
        logoImage: "",
        metaTitle: "",
        metaDescription: "",
        ogImage: "",
        faviconImage: "",
        coffeeUrl: "", // Lasă gol implicit
        heroBadge: "Disponibil pentru proiecte noi",
        heroTitle: "Transform idei în experiențe digitale memorabile.",
        heroDesc: "Sunt un Junior Developer axat pe detalii, performanță și un design care contează. Îmbin estetica cu funcționalitatea.",
        cvLink: "#",
        formspreeId: "xdannwvj"
    },
    stack: [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Selenium", icon: "devicon-selenium-original colored" }
    ],
    experience: [
        { year: "2024", date: "2024 - Prezent", title: "Junior QA Automation", company: "Freelance", desc: "Dezvoltare framework-uri de testare.", icon: "briefcase" },
        { year: "2023", date: "2023 - 2024", title: "Curs Full Stack", company: "Academia IT", desc: "Studiu intensiv JavaScript și Node.js.", icon: "graduation-cap" }
    ],
    projects: [
        { size: "large", badge: "E2E Testing", title: "E-Commerce Suite", desc: "Framework bazat pe Page Object Model.", tags: "Java, Selenide, Allure" },
        { size: "small", badge: "API", title: "Rest API Test", desc: "Validare JSON Schema.", tags: "RestAssured, JUnit" }
    ],
    design: {
        accent: "#6366f1",
        bg: "#ffffff",
        font: "Plus Jakarta Sans",
        order: ["experience", "projects", "stack"],
        email: "salut@numeprenume.ro",
        github: "#",
        linkedin: "#"
    }
};

let portfolioData = JSON.parse(JSON.stringify(defaultData));

// ==========================================
// 2. INITIALIZARE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { 
            portfolioData = JSON.parse(saved); 
        } catch (e) { 
            console.error("Error loading autosave"); 
        }
    }
    
    // Sincronizăm selectorul de limbă cu datele salvate
    const currentLang = portfolioData.general.lang || "ro";
    const radio = document.getElementById(`lang-${currentLang}`);
    if (radio) radio.checked = true;

    initEditor();
    renderAll();
});

// ==========================================
// 3. RENDER FUNCTIONS (CORE LOGIC)
// ==========================================
function renderAll() {
    const lang = portfolioData.general.lang || 'ro';
    const t = translations[lang];

    // Traducere etichetă Dashboard
    document.getElementById('lbl-coffee').innerText = t.lbl_coffee;

    // Traducere și link buton site public
    const coffeeBtn = document.getElementById('display-coffee-link');
    document.getElementById('btn-coffee-text').innerText = t.btn_coffee;
    coffeeBtn.href = portfolioData.general.coffeeUrl || "#";

    // Ascunde butonul dacă nu există link setat
    if (!portfolioData.general.coffeeUrl) {
        coffeeBtn.style.display = "none";
    } else {
        coffeeBtn.style.display = "flex";
    }

    // Traducere buton creator
    document.getElementById('creator-coffee-txt').innerText = t.btn_support;

    // --- A. TRADUCERE UI SITE ---
    document.getElementById('nav-link-projects').innerText = t.nav_projects;
    document.getElementById('nav-link-stack').innerText = t.nav_stack;
    document.getElementById('nav-link-contact').innerText = t.nav_contact;
    document.getElementById('hero-btn-explore').innerText = t.hero_explore;
    document.getElementById('display-cv-link').innerHTML = `${t.hero_cv} <i data-lucide="download"></i>`;
    
    // Titluri Secțiuni
    document.getElementById('sec-exp-span').innerText = t.sec_exp_span;
    document.getElementById('sec-exp-h2').innerText = t.sec_exp_h2;
    document.getElementById('sec-proj-span').innerText = t.sec_proj_span;
    document.getElementById('sec-proj-h2').innerText = t.sec_proj_h2;
    document.getElementById('sec-contact-span').innerText = t.sec_contact_span;
    document.getElementById('sec-contact-h2').innerText = t.sec_contact_h2;

    // Formular de Contact (Labels + Placeholders)
    document.getElementById('label-name').innerText = t.label_name;
    document.getElementById('input-name').placeholder = t.ph_name;
    document.getElementById('label-email').innerText = t.label_email;
    document.getElementById('input-email').placeholder = t.ph_email;
    document.getElementById('label-message').innerText = t.label_message;
    document.getElementById('input-message').placeholder = t.ph_message;
    document.getElementById('submit-btn').innerHTML = `${t.btn_send} <i data-lucide="send"></i>`;
    document.getElementById('contact-direct-txt').innerText = t.contact_direct;

    // --- B. TRADUCERE UI DASHBOARD ---
    document.getElementById('toggle-editor').innerHTML = `<i data-lucide="settings"></i> ${t.btn_customize}`;
    document.getElementById('db-title').innerText = t.db_title;
    
    // Tab buttons
    document.getElementById('tab-info').innerText = t.tab_info;
    document.getElementById('tab-share-txt').innerText = t.tab_share;
    document.getElementById('tab-tech-txt').innerText = t.tab_tech;
    document.getElementById('tab-exp-txt').innerText = t.tab_path;
    document.getElementById('tab-proj-txt').innerText = t.tab_projects;
    document.getElementById('tab-design-txt').innerText = t.tab_design;

    // Labels și Helpers
    document.getElementById('lbl-logo-img').innerText = t.lbl_logo_img;
    document.getElementById('sm-logo-img').innerText = t.sm_logo_img;
    document.getElementById('lbl-logo-txt').innerText = t.lbl_logo_txt;
    document.getElementById('lbl-favicon').innerText = t.lbl_favicon;
    document.getElementById('sm-favicon').innerText = t.sm_favicon;
    document.getElementById('lbl-badge').innerText = t.lbl_badge;
    document.getElementById('lbl-hero-title').innerText = t.lbl_hero_title;
    document.getElementById('lbl-hero-desc').innerText = t.lbl_hero_desc;
    document.getElementById('lbl-cv-url').innerText = t.lbl_cv_url;
    document.getElementById('lbl-formspree').innerText = t.lbl_formspree;
    document.getElementById('lbl-seo-header').innerText = t.lbl_seo_header;
    document.getElementById('lbl-meta-title').innerText = t.lbl_meta_title;
    document.getElementById('lbl-meta-desc').innerText = t.lbl_meta_desc;
    document.getElementById('lbl-og-img').innerText = t.lbl_og_img;
    document.getElementById('sm-og-img').innerText = t.sm_og_img;
    document.getElementById('lbl-share-title').innerText = t.lbl_share_title;
    document.getElementById('sm-share-desc').innerText = t.sm_share_desc;
    document.getElementById('copy-text').innerText = t.copy_link;
    
    document.getElementById('btn-add-tech').innerText = t.btn_add_tech;
    document.getElementById('btn-add-exp').innerText = t.btn_add_exp;
    document.getElementById('btn-add-proj').innerText = t.btn_add_proj;
    
    document.getElementById('lbl-font').innerText = t.lbl_font;
    document.getElementById('lbl-order').innerText = t.lbl_order;
    document.getElementById('lbl-accent').innerText = t.lbl_accent;
    document.getElementById('lbl-bg-color').innerText = t.lbl_bg_color;
    document.getElementById('lbl-email-fld').innerText = t.lbl_email_fld;
    document.getElementById('lbl-github-fld').innerText = t.lbl_github_fld;
    document.getElementById('lbl-linkedin-fld').innerText = t.lbl_linkedin_fld;

    // Footer butoane Dashboard
    document.getElementById('btn-docs').innerHTML = `<i data-lucide="book-open"></i> ${t.btn_docs}`;
    document.getElementById('btn-preview').innerHTML = `<i data-lucide="eye"></i> ${t.btn_preview}`;
    document.getElementById('btn-export').innerHTML = `<i data-lucide="download"></i> ${t.btn_export}`;
    document.getElementById('btn-reset').innerText = t.btn_reset;

    // --- C. RANDARE VIZUALĂ ȘI STILURI ---
    const fontName = portfolioData.design.font || "Plus Jakarta Sans";
    document.title = `${portfolioData.general.logo || "Portofoliu"} | Hyre`;
    
    // Injectare Google Font
    let linkTag = document.getElementById('dynamic-google-font');
    if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.id = 'dynamic-google-font';
        linkTag.rel = 'stylesheet';
        document.head.appendChild(linkTag);
    }
    linkTag.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@300;400;600;800&display=swap`;
    document.documentElement.style.setProperty('--font-main', `'${fontName}', sans-serif`);

    // Logo & Favicon
    const logoContainer = document.getElementById('display-logo');
    let logoHTML = portfolioData.general.logoImage ? `<img src="${portfolioData.general.logoImage}" alt="Logo">` : "";
    logoHTML += `${portfolioData.general.logo || "HYRE"}<span>.</span>`;
    logoContainer.innerHTML = logoHTML;

    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        if (portfolioData.general.faviconImage) {
            favicon.href = portfolioData.general.faviconImage;
        } else {
            const acc = (portfolioData.design.accent || "#6366f1").replace('#', '%23');
            const firstLetter = (portfolioData.general.logo || "H").charAt(0).toUpperCase();
            favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='${acc}'></rect><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='sans-serif' font-size='60' font-weight='800' fill='white'>${firstLetter}</text></svg>`;
        }
    }

    // Hero Content
    const heroTitle = portfolioData.general.heroTitle || "";
    document.getElementById('display-hero-badge').innerText = portfolioData.general.heroBadge || "";
    // Menținem span-ul pentru efectul de culoare pe anumite cuvinte dacă există (logică originală)
    document.getElementById('display-hero-title').innerHTML = heroTitle.replace("experiențe digitale", "<span>experiențe digitale</span>");
    document.getElementById('display-hero-desc').innerText = portfolioData.general.heroDesc || "";
    document.getElementById('display-cv-link').href = portfolioData.general.cvLink || "#";

    // CSS Variables
    document.documentElement.style.setProperty('--accent', portfolioData.design.accent);
    document.documentElement.style.setProperty('--bg', portfolioData.design.bg);

    // Gestiune Ordine Secțiuni
    const mainContainer = document.querySelector('main.container');
    const sections = {
        stack: document.getElementById('stack'),
        experience: document.getElementById('experience'),
        projects: document.getElementById('projects')
    };
    const hero = document.getElementById('hero');
    if (hero) mainContainer.appendChild(hero);

    const sectionOrder = portfolioData.design.order || ["experience", "projects", "stack"];
    sectionOrder.forEach(key => {
        if (sections[key]) mainContainer.appendChild(sections[key]);
    });

    const contact = document.getElementById('contact');
    if (contact) mainContainer.appendChild(contact);

    // --- D. RANDARE LISTE ---
    
    // Tehnologii (Marquee)
    document.getElementById('display-stack').innerHTML = [...(portfolioData.stack || []), ...(portfolioData.stack || [])].map(item => `
        <div class="tech-card">
            ${item.icon.includes('http') || item.icon.includes('data:') ? `<img src="${item.icon}">` : `<i class="${item.icon}"></i>`}
            <span>${item.name}</span>
        </div>
    `).join('');

    // Experiență (Timeline)
    document.getElementById('display-experience').innerHTML = (portfolioData.experience || []).map(item => `
        <div class="timeline-item" data-year="${item.year}">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <div class="timeline-header"><i data-lucide="${item.icon}"></i><h3>${item.title}</h3></div>
                <h4>${item.company}</h4><p>${item.desc}</p>
            </div>
        </div>
    `).join('');

    // Proiecte (Bento Grid)
    document.getElementById('display-projects').innerHTML = (portfolioData.projects || []).map(p => `
        <div class="bento-item ${p.size}">
            <div class="bento-content">
                <div class="badge">${p.badge}</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="bento-tags">${p.tags.split(',').map(t => `<span>${t.trim()}</span>`).join('')}</div>
            </div>
        </div>
    `).join('');

    // Sincronizare Lucide și Storage
    if (typeof lucide !== 'undefined') lucide.createIcons();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
    
    setupShareLinks();
    validateMetaTags();
}

// ==========================================
// 4. EDITOR LOGIC
// ==========================================
function initEditor() {
    const sidebar = document.getElementById('editor-sidebar');
    const toggleBtn = document.getElementById('toggle-editor');
    const closeBtn = document.getElementById('close-editor');

    if (toggleBtn) toggleBtn.onclick = () => sidebar.classList.toggle('active');
    if (closeBtn) closeBtn.onclick = () => sidebar.classList.remove('active');

    // Tab Logic
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            const pane = document.getElementById(`tab-${btn.dataset.tab}`);
            if (pane) pane.classList.add('active');
        };
    });

    // Bindings automate pentru câmpurile Dashboard
    bindInput('edit-logo', 'general', 'logo');
    bindInput('edit-hero-badge', 'general', 'heroBadge');
    bindInput('edit-hero-title', 'general', 'heroTitle');
    bindInput('edit-hero-desc', 'general', 'heroDesc');
    bindInput('edit-cv-link', 'general', 'cvLink');
    bindInput('edit-formspree', 'general', 'formspreeId');
    bindInput('edit-color-accent', 'design', 'accent');
    bindInput('edit-color-bg', 'design', 'bg');
    bindInput('edit-email', 'design', 'email');
    bindInput('edit-github', 'design', 'github');
    bindInput('edit-linkedin', 'design', 'linkedin');
    bindInput('edit-coffee', 'general', 'coffeeUrl');
    bindInput('edit-meta-title', 'general', 'metaTitle');
    bindInput('edit-meta-desc', 'general', 'metaDescription');

    // Font Select
    const fontSelect = document.getElementById('edit-font');
    if (fontSelect) fontSelect.value = portfolioData.design.font || "Plus Jakarta Sans";

    // Layout Order Select
    const orderSelect = document.getElementById('edit-layout-order');
    if (orderSelect && portfolioData.design.order) orderSelect.value = portfolioData.design.order.join(',');

    renderEditorLists();
}

/**
 * Funcția originală de binding pentru input-uri
 */
function bindInput(id, section, key) {
    const el = document.getElementById(id);
    if (!el || !portfolioData[section]) return;
    el.value = portfolioData[section][key] || "";
    el.oninput = (e) => {
        portfolioData[section][key] = e.target.value;
        renderAll();
    };
}

// ==========================================
// 5. GESTIUNE LISTE (STACK, EXP, PROJECTS)
// ==========================================
function renderEditorLists() {
    const lang = portfolioData.general.lang || 'ro';
    const t = translations[lang];

    // Editor Tehnologii
    const stackList = document.getElementById('stack-editor-list');
    stackList.innerHTML = portfolioData.stack.map((item, i) => `
        <div class="item-editor-card">
            <input type="text" value="${item.name}" oninput="updateListItem('stack', ${i}, 'name', this.value)" placeholder="${t.ph_tech_name}">
            <input type="text" value="${item.icon}" oninput="updateListItem('stack', ${i}, 'icon', this.value)" placeholder="${t.ph_tech_icon}">
            <div class="item-controls">
                <button onclick="moveItem('stack', ${i}, -1)" class="btn-small">↑</button>
                <button onclick="moveItem('stack', ${i}, 1)" class="btn-small">↓</button>
                <button onclick="removeItem('stack', ${i})" class="btn-small btn-del">${t.btn_delete}</button>
            </div>
        </div>
    `).join('');

    // Editor Experiență
    const expList = document.getElementById('exp-editor-list');
    expList.innerHTML = portfolioData.experience.map((item, i) => `
        <div class="item-editor-card">
            <input type="text" value="${item.year}" oninput="updateListItem('experience', ${i}, 'year', this.value)" placeholder="${t.ph_exp_year}">
            <input type="text" value="${item.date}" oninput="updateListItem('experience', ${i}, 'date', this.value)" placeholder="${t.ph_exp_date}">
            <input type="text" value="${item.title}" oninput="updateListItem('experience', ${i}, 'title', this.value)" placeholder="${t.ph_exp_title}">
            <input type="text" value="${item.company}" oninput="updateListItem('experience', ${i}, 'company', this.value)" placeholder="${t.ph_exp_comp}">
            <textarea oninput="updateListItem('experience', ${i}, 'desc', this.value)" placeholder="${t.ph_exp_desc}">${item.desc}</textarea>
            <input type="text" value="${item.icon}" oninput="updateListItem('experience', ${i}, 'icon', this.value)" placeholder="${t.ph_exp_lucide}">
            <div class="item-controls">
                <button onclick="moveItem('experience', ${i}, -1)" class="btn-small">↑</button>
                <button onclick="moveItem('experience', ${i}, 1)" class="btn-small">↓</button>
                <button onclick="removeItem('experience', ${i})" class="btn-small btn-del">${t.btn_delete}</button>
            </div>
        </div>
    `).join('');

    // Editor Proiecte
    const projList = document.getElementById('project-editor-list');
    projList.innerHTML = portfolioData.projects.map((item, i) => `
        <div class="item-editor-card">
            <select onchange="updateListItem('projects', ${i}, 'size', this.value)">
                <option value="large" ${item.size === 'large' ? 'selected' : ''}>Mare (2 col)</option>
                <option value="small" ${item.size === 'small' ? 'selected' : ''}>Mic (1 col)</option>
            </select>
            <input type="text" value="${item.badge}" oninput="updateListItem('projects', ${i}, 'badge', this.value)" placeholder="Badge">
            <input type="text" value="${item.title}" oninput="updateListItem('projects', ${i}, 'title', this.value)" placeholder="Titlu">
            <textarea oninput="updateListItem('projects', ${i}, 'desc', this.value)" placeholder="Descriere">${item.desc}</textarea>
            <input type="text" value="${item.tags}" oninput="updateListItem('projects', ${i}, 'tags', this.value)" placeholder="Tag-uri">
            <div class="item-controls">
                <button onclick="moveItem('projects', ${i}, -1)" class="btn-small">↑</button>
                <button onclick="moveItem('projects', ${i}, 1)" class="btn-small">↓</button>
                <button onclick="removeItem('projects', ${i})" class="btn-small btn-del">${t.btn_delete}</button>
            </div>
        </div>
    `).join('');
}

// Helper Functions pentru Liste
function updateListItem(section, index, key, value) { portfolioData[section][index][key] = value; renderAll(); }
function removeItem(section, index) { portfolioData[section].splice(index, 1); renderEditorLists(); renderAll(); }
function moveItem(section, index, d) { 
    const ni = index + d; if (ni < 0 || ni >= portfolioData[section].length) return;
    [portfolioData[section][index], portfolioData[section][ni]] = [portfolioData[section][ni], portfolioData[section][index]];
    renderEditorLists(); renderAll(); 
}

function addStackField() { portfolioData.stack.push({ name: "Tech", icon: "devicon-javascript-plain colored" }); renderEditorLists(); renderAll(); }
function addExperienceField() { portfolioData.experience.push({ year: "2025", date: "Perioada", title: "Titlu", company: "Nume", desc: "...", icon: "briefcase" }); renderEditorLists(); renderAll(); }
function addProjectField() { portfolioData.projects.push({ size: "small", badge: "Nou", title: "Proiect", desc: "...", tags: "HTML" }); renderEditorLists(); renderAll(); }

// ==========================================
// 6. SYSTEM FUNCTIONS (LANGUAGE, RESET, EXPORT)
// ==========================================
function updateLanguage(lang) {
    portfolioData.general.lang = lang;
    renderAll();
    renderEditorLists(); // Esențial pentru placeholders
}

function resetData() { 
    const lang = portfolioData.general.lang || 'ro';
    if (confirm(translations[lang].confirm_reset)) { 
        localStorage.removeItem(STORAGE_KEY); location.reload(); 
    } 
}

/**
 * Logica complexă de export: curăță interfața de editor și atributele de browser
 */
async function exportHTML() {
    const docClone = document.documentElement.cloneNode(true);
    let cssContent = "";
    
    // Preluare CSS pentru Inlining
    try {
        const response = await fetch('style.css');
        if (response.ok) cssContent = await response.text();
    } catch (e) {
        for (const sheet of document.styleSheets) {
            try { if (!sheet.href || sheet.href.includes('style.css')) { for (const rule of sheet.cssRules) cssContent += rule.cssText + "\n"; } } catch (err) {}
        }
    }
    const cssLink = docClone.querySelector('link[href="style.css"]');
    if (cssLink && cssContent) {
        const styleTag = document.createElement('style'); styleTag.textContent = cssContent;
        cssLink.parentNode.replaceChild(styleTag, cssLink);
    }

    // Eliminăm elementele specifice editorului și selectorul de limbă
    ['#editor-sidebar', '#toggle-editor', '#exit-preview-btn', '.editor-trigger-btn', '.lang-selector-main'].forEach(s => {
        const el = docClone.querySelector(s); if (el) el.remove();
    });

    // Curățare atribute injectate de extensii (NordPass, Grammarly etc.)
    const cleanTags = (tag) => {
        if(!tag) return;
        Array.from(tag.attributes).forEach(attr => {
            if (attr.name.startsWith('data-') && !attr.name.startsWith('data-lucide') && !attr.name.startsWith('data-year')) {
                tag.removeAttribute(attr.name);
            }
        });
        tag.childNodes.forEach(node => { if(node.nodeType === 1) cleanTags(node); });
    };
    cleanTags(docClone);

    // Eliminăm scripturile grele și injectăm Runtime-ul de vizitator
    docClone.querySelectorAll('script').forEach(s => { if (s.src && (s.src.includes('script.js') || s.src.includes('lucide'))) s.remove(); });

    const runtimeJS = `
        document.addEventListener('DOMContentLoaded', () => { 
            if(typeof lucide !== 'undefined') lucide.createIcons(); 
        }); 
        function copyEmail() { 
            navigator.clipboard.writeText('${portfolioData.design.email}').then(() => alert('Email copiat!')); 
        }
    `;
    const scriptTag = document.createElement('script'); scriptTag.textContent = runtimeJS;
    docClone.querySelector('body').appendChild(scriptTag);

    // Generare Fișier
    const blob = new Blob(['<!DOCTYPE html>\n' + docClone.outerHTML], { type: 'text/html' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'index.html'; a.click();
}

// ==========================================
// 7. UTILS (SHARE, SEO, UPLOAD, PREVIEW)
// ==========================================
function copyEmail() { 
    const lang = portfolioData.general.lang || 'ro';
    navigator.clipboard.writeText(portfolioData.design.email).then(() => alert(translations[lang].alert_copy)); 
}

function handleLogoUpload(input) { if (input.files && input.files[0]) { const reader = new FileReader(); reader.onload = (e) => { portfolioData.general.logoImage = e.target.result; renderAll(); }; reader.readAsDataURL(input.files[0]); } }
function handleFaviconUpload(input) { if (input.files && input.files[0]) { const reader = new FileReader(); reader.onload = (e) => { portfolioData.general.faviconImage = e.target.result; renderAll(); }; reader.readAsDataURL(input.files[0]); } }
function handleOGImageUpload(input) { if (input.files && input.files[0]) { const reader = new FileReader(); reader.onload = (e) => { portfolioData.general.ogImage = e.target.result; renderAll(); }; reader.readAsDataURL(input.files[0]); } }

function updateFont(val) { portfolioData.design.font = val; renderAll(); }
function updateLayoutOrder(val) { portfolioData.design.order = val.split(','); renderAll(); }

function togglePreviewMode() {
    const isPreview = document.body.classList.toggle('preview-active');
    const lang = portfolioData.general.lang || 'ro';
    if (isPreview) {
        document.getElementById('editor-sidebar').classList.remove('active');
        const exitBtn = document.createElement('button');
        exitBtn.id = 'exit-preview-btn';
        exitBtn.innerHTML = `<i data-lucide="eye-off"></i> ${translations[lang].exit_preview}`;
        exitBtn.className = 'exit-preview-floating';
        exitBtn.onclick = togglePreviewMode;
        document.body.appendChild(exitBtn);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } else {
        const btn = document.getElementById('exit-preview-btn'); if (btn) btn.remove();
    }
}

function setupShareLinks() {
    const appUrl = "https://apps.qualiadept.eu/hyre/";
    const lnk = document.getElementById('share-linkedin');
    const x = document.getElementById('share-x');
    if(lnk) lnk.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(appUrl)}`;
    if(x) x.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(appUrl)}`;
}

function copyHyreLink() {
    const lang = portfolioData.general.lang || 'ro';
    navigator.clipboard.writeText("https://apps.qualiadept.eu/hyre/").then(() => {
        const txt = document.getElementById('copy-text'); const old = txt.innerText;
        txt.innerText = translations[lang].copied; setTimeout(() => { txt.innerText = old; }, 2000);
    });
}

function validateMetaTags() {
    const lang = portfolioData.general.lang || 'ro';
    const title = portfolioData.general.metaTitle || "";
    const titleHint = document.getElementById('meta-title-hint');
    if (titleHint) {
        if (title.length > 0) {
            const status = title.length < 30 ? translations[lang].seo_short : title.length > 60 ? translations[lang].seo_long : translations[lang].seo_perfect;
            titleHint.innerText = `⚠️ ${title.length} ${translations[lang].chars} (${status})`;
        } else {
            titleHint.innerText = "";
        }
    }
}

// Progress Bar Scroll Logic
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
    if (scrolled > 99) progressBar.classList.add('is-finished');
    else progressBar.classList.remove('is-finished');
});