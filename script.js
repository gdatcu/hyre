// 1. DATA STATE & CONFIG
const STORAGE_KEY = 'hyre_builder_autosave';

const defaultData = {
    general: {
        logo: "HYRE",
        logoImage: "",
        metaTitle: "",
        metaDescription: "",
        ogImage: "",
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
        font: "Plus Jakarta Sans", // Valoarea default
        order: ["experience", "projects", "stack"], // Ordinea implicită
        email: "salut@numeprenume.ro",
        github: "#",
        linkedin: "#"
    }
};

let portfolioData = JSON.parse(JSON.stringify(defaultData));

// 2. INITIALIZARE
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { portfolioData = JSON.parse(saved); } catch (e) { console.error("Error loading autosave"); }
    }
    initEditor();
    renderAll();
});

// 3. RENDER FUNCTIONS
function renderAll() {
    // 1. Google Font & Title dinamic
    const fontName = portfolioData.design.font || "Plus Jakarta Sans";
    document.title = `${portfolioData.general.logo || "Portofoliu"} | Hyre`;
    
    let linkTag = document.getElementById('dynamic-google-font');
    if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.id = 'dynamic-google-font';
        linkTag.rel = 'stylesheet';
        document.head.appendChild(linkTag);
    }
    linkTag.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@300;400;600;800&display=swap`;
    document.documentElement.style.setProperty('--font-main', `'${fontName}', sans-serif`);

    // 2. Logo & Favicon
    const logoContainer = document.getElementById('display-logo');
    let logoHTML = portfolioData.general.logoImage ? `<img src="${portfolioData.general.logoImage}" alt="Logo">` : "";
    logoHTML += `${portfolioData.general.logo || "HYRE"}<span>.</span>`;
    logoContainer.innerHTML = logoHTML;

    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        const acc = (portfolioData.design.accent || "#6366f1").replace('#', '%23');
        favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='${acc}'></rect><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='sans-serif' font-size='60' font-weight='800' fill='white'>H</text></svg>`;
    }

    // 3. Hero Section
    const heroTitle = portfolioData.general.heroTitle || "";
    document.getElementById('display-hero-badge').innerText = portfolioData.general.heroBadge || "";
    document.getElementById('display-hero-title').innerHTML = heroTitle.replace("experiențe digitale", "<span>experiențe digitale</span>");
    document.getElementById('display-hero-desc').innerText = portfolioData.general.heroDesc || "";
    document.getElementById('display-cv-link').href = portfolioData.general.cvLink || "#";

    // 4. Stiluri Globale
    document.documentElement.style.setProperty('--accent', portfolioData.design.accent);
    document.documentElement.style.setProperty('--bg', portfolioData.design.bg);

    // 5. GESTIUNE ORDINE SECȚIUNI (Nou!)
    // --- LOGICĂ REORDONARE SECȚIUNI ---
    const mainContainer = document.querySelector('main.container');
    const sections = {
        stack: document.getElementById('stack'),
        experience: document.getElementById('experience'),
        projects: document.getElementById('projects')
    };

    // Păstrăm Hero mereu la început
    const hero = document.getElementById('hero');
    if (hero) mainContainer.appendChild(hero);

    // Mutăm secțiunile conform ordinii alese
    const sectionOrder = portfolioData.design.order || ["stack", "experience", "projects"];
    sectionOrder.forEach(key => {
        if (sections[key]) mainContainer.appendChild(sections[key]);
    });

    // Păstrăm Contactul mereu la final
    const contact = document.getElementById('contact');
    if (contact) mainContainer.appendChild(contact);
    // --- FINAL LOGICĂ REORDONARE ---

    // 6. Randare Liste (Stack, Exp, Proiecte)
    document.getElementById('display-stack').innerHTML = [...(portfolioData.stack || []), ...(portfolioData.stack || [])].map(item => `
        <div class="tech-card">${item.icon.includes('http') || item.icon.includes('data:') ? `<img src="${item.icon}">` : `<i class="${item.icon}"></i>`}<span>${item.name}</span></div>
    `).join('');

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

    document.getElementById('display-projects').innerHTML = (portfolioData.projects || []).map(p => `
        <div class="bento-item ${p.size}"><div class="bento-content"><div class="badge">${p.badge}</div><h3>${p.title}</h3><p>${p.desc}</p><div class="bento-tags">${p.tags.split(',').map(t => `<span>${t.trim()}</span>`).join('')}</div></div></div>
    `).join('');

    // Re-inițializare iconițe Lucide (importante pentru noile iconițe alese)
    if (typeof lucide !== 'undefined') lucide.createIcons();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));

    // Apelăm funcția de setup la randare
    // Adaugă la finalul funcției renderAll():
    setupShareLinks();

    validateMetaTags(); // Actualizează sugestiile SEO
}

// 4. EDITOR LOGIC
function initEditor() {
    const sidebar = document.getElementById('editor-sidebar');
    const toggleBtn = document.getElementById('toggle-editor');
    const closeBtn = document.getElementById('close-editor');

    // Control deschidere sidebar
    if (toggleBtn) toggleBtn.onclick = () => sidebar.classList.toggle('active');
    if (closeBtn) closeBtn.onclick = () => sidebar.classList.remove('active');

    // Logica de schimbare a tab-urilor
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            const pane = document.getElementById(`tab-${btn.dataset.tab}`);
            if (pane) pane.classList.add('active');
        };
    });

    // Legarea automată a câmpurilor simple (Text, Culoare, Textarea)
    const bindings = [
        ['edit-logo', 'general', 'logo'],
        ['edit-hero-badge', 'general', 'heroBadge'],
        ['edit-hero-title', 'general', 'heroTitle'],
        ['edit-hero-desc', 'general', 'heroDesc'],
        ['edit-cv-link', 'general', 'cvLink'],
        ['edit-formspree', 'general', 'formspreeId'],
        ['edit-color-accent', 'design', 'accent'],
        ['edit-color-bg', 'design', 'bg'],
        ['edit-email', 'design', 'email'],
        ['edit-github', 'design', 'github'],
        ['edit-linkedin', 'design', 'linkedin'],
        ['edit-meta-title', 'general', 'metaTitle'],
        ['edit-meta-desc', 'general', 'metaDescription']
    ];

    bindings.forEach(([id, section, key]) => {
        const el = document.getElementById(id);
        if (el && portfolioData[section]) {
            el.value = portfolioData[section][key] || "";
            el.oninput = (e) => {
                portfolioData[section][key] = e.target.value;
                renderAll();
            };
        }
    });

    // Font selector
    const fontSelect = document.getElementById('edit-font');
    if (fontSelect) fontSelect.value = portfolioData.design.font || "Plus Jakarta Sans";

    // Selector Ordine Secțiuni (Nou!)
    const orderSelect = document.getElementById('edit-layout-order');
    if (orderSelect && portfolioData.design.order) {
        orderSelect.value = portfolioData.design.order.join(',');
    }

    // Randăm listele pentru Tehnologii, Experiență și Proiecte
    renderEditorLists();
}

function bindInput(id, section, key) {
    const input = document.getElementById(id);
    if (!input) return;
    input.value = portfolioData[section][key];
    input.addEventListener('input', (e) => {
        portfolioData[section][key] = e.target.value;
        renderAll();
    });
}

// 5. LIST EDITORS (Gestiune Stack, Exp, Proiecte)
function renderEditorLists() {
    // 1. Editor Tehnologii (Stack)
    const stackList = document.getElementById('stack-editor-list');
    stackList.innerHTML = portfolioData.stack.map((item, i) => `
        <div class="item-editor-card">
            <input type="text" value="${item.name}" oninput="updateListItem('stack', ${i}, 'name', this.value)" placeholder="Nume (ex: Java)">
            <input type="text" value="${item.icon}" oninput="updateListItem('stack', ${i}, 'icon', this.value)" placeholder="Clasă Devicon sau URL imagine">
            <div class="item-controls">
                <button onclick="moveItem('stack', ${i}, -1)" class="btn-small">↑</button>
                <button onclick="moveItem('stack', ${i}, 1)" class="btn-small">↓</button>
                <button onclick="removeItem('stack', ${i})" class="btn-small btn-del">Șterge</button>
            </div>
        </div>
    `).join('');

    // 2. Editor Experiență (cu suport Lucide Icons)
    const expList = document.getElementById('exp-editor-list');
    expList.innerHTML = portfolioData.experience.map((item, i) => `
        <div class="item-editor-card">
            <input type="text" value="${item.year}" oninput="updateListItem('experience', ${i}, 'year', this.value)" placeholder="An fundal">
            <input type="text" value="${item.date}" oninput="updateListItem('experience', ${i}, 'date', this.value)" placeholder="Perioadă">
            <input type="text" value="${item.title}" oninput="updateListItem('experience', ${i}, 'title', this.value)" placeholder="Titlu">
            <input type="text" value="${item.company}" oninput="updateListItem('experience', ${i}, 'company', this.value)" placeholder="Companie">
            <textarea oninput="updateListItem('experience', ${i}, 'desc', this.value)" placeholder="Descriere">${item.desc}</textarea>
            
            <div class="field-group" style="margin-top: 10px;">
                <label style="font-size: 0.7rem;">Iconiță Lucide (ex: code, heart, terminal)</label>
                <input type="text" value="${item.icon}" 
                    oninput="updateListItem('experience', ${i}, 'icon', this.value)" 
                    placeholder="Nume iconiță de pe lucide.dev">
            </div>

            <div class="item-controls">
                <button onclick="moveItem('experience', ${i}, -1)" class="btn-small">↑</button>
                <button onclick="moveItem('experience', ${i}, 1)" class="btn-small">↓</button>
                <button onclick="removeItem('experience', ${i})" class="btn-small btn-del">Șterge</button>
            </div>
        </div>
    `).join('');

    // 3. Editor Proiecte
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
            <input type="text" value="${item.tags}" oninput="updateListItem('projects', ${i}, 'tags', this.value)" placeholder="Tag-uri (separate prin virgulă)">
            <div class="item-controls">
                <button onclick="moveItem('projects', ${i}, -1)" class="btn-small">↑</button>
                <button onclick="moveItem('projects', ${i}, 1)" class="btn-small">↓</button>
                <button onclick="removeItem('projects', ${i})" class="btn-small btn-del">Șterge</button>
            </div>
        </div>
    `).join('');
}

// 6. HELPER FUNCTIONS PENTRU LISTE
function updateListItem(section, index, key, value) {
    portfolioData[section][index][key] = value;
    renderAll();
}

function removeItem(section, index) {
    portfolioData[section].splice(index, 1);
    renderEditorLists();
    renderAll();
}

function moveItem(section, index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= portfolioData[section].length) return;
    const temp = portfolioData[section][index];
    portfolioData[section][index] = portfolioData[section][newIndex];
    portfolioData[section][newIndex] = temp;
    renderEditorLists();
    renderAll();
}

function addStackField() { portfolioData.stack.push({ name: "Tech", icon: "devicon-javascript-plain colored" }); renderEditorLists(); renderAll(); }
function addExperienceField() { portfolioData.experience.push({ year: "2025", date: "Perioada", title: "Titlu Nou", company: "Nume", desc: "...", icon: "briefcase" }); renderEditorLists(); renderAll(); }
function addProjectField() { portfolioData.projects.push({ size: "small", badge: "Nou", title: "Proiect", desc: "...", tags: "HTML" }); renderEditorLists(); renderAll(); }

function resetData() {
    if (confirm("Sigur vrei să resetezi progresul Hyre?")) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }
}

// 7. EXPORT HTML (Varianta Finală - Single File Portable)
async function exportHTML() {
    // 1. Clonăm documentul pentru a lucra pe o copie curată
    const docClone = document.documentElement.cloneNode(true);

    // 2. INTEGRARE CSS (Inlining)
    let cssContent = "";
    try {
        const response = await fetch('style.css');
        if (response.ok) cssContent = await response.text();
    } catch (e) {
        // Fallback: Citim direct din regulile încărcate în browser
        for (const sheet of document.styleSheets) {
            try {
                if (!sheet.href || sheet.href.includes('style.css')) {
                    for (const rule of sheet.cssRules) cssContent += rule.cssText + "\n";
                }
            } catch (err) {}
        }
    }

    const cssLink = docClone.querySelector('link[href="style.css"]');
    if (cssLink && cssContent) {
        const styleTag = document.createElement('style');
        styleTag.textContent = cssContent;
        cssLink.parentNode.replaceChild(styleTag, cssLink);
    }

    // 3. CURĂȚARE INTERFAȚĂ EDITOR
    const toRemove = ['#editor-sidebar', '#toggle-editor', '#exit-preview-btn', '.editor-trigger-btn'];
    toRemove.forEach(selector => {
        const el = docClone.querySelector(selector);
        if (el) el.remove();
    });

    // 4. CURĂȚARE ATRIBUTE INJECTATE DE EXTENSII (NordPass, etc.)
    const cleanTags = (tag) => {
        if(!tag) return;
        Array.from(tag.attributes).forEach(attr => {
            if (attr.name.startsWith('data-') && !attr.name.startsWith('data-lucide') && !attr.name.startsWith('data-year')) {
                tag.removeAttribute(attr.name);
            }
        });
    };
    cleanTags(docClone);
    cleanTags(docClone.querySelector('body'));

    // 5. INTEGRARE JS ESENȚIAL (Visitor Runtime)
    docClone.querySelectorAll('script').forEach(s => {
        if (s.src && (s.src.includes('script.js') || s.src.includes('lucide'))) {
            if (s.src.includes('script.js')) s.remove();
        } else if (!s.src) {
            s.remove();
        }
    });

    const runtimeJS = "document.addEventListener('DOMContentLoaded', () => { " +
        "if(typeof lucide !== 'undefined') lucide.createIcons(); " +
        "window.addEventListener('scroll', () => { " +
        "const bar = document.getElementById('scroll-progress-bar'); " +
        "if(!bar) return; " +
        "const winScroll = document.body.scrollTop || document.documentElement.scrollTop; " +
        "const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; " +
        "const scrolled = (winScroll / height) * 100; " +
        "bar.style.width = scrolled + '%'; " +
        "if (scrolled > 99) bar.classList.add('is-finished'); " +
        "else bar.classList.remove('is-finished'); " +
        "}); }); " +
        "function copyEmail() { " +
        "const email = '" + (portfolioData.design.email || "") + "'; " +
        "navigator.clipboard.writeText(email).then(() => alert('Email copiat!')); }";

    const scriptTag = document.createElement('script');
    scriptTag.textContent = runtimeJS;
    docClone.querySelector('body').appendChild(scriptTag);

    // 6. CONFIGURARE SEO
    const seoTitle = portfolioData.general.metaTitle || (portfolioData.general.logo + " | Portofoliu");
    const seoDesc = portfolioData.general.metaDescription || "";
    const ogImg = portfolioData.general.ogImage || "";

    const titleTag = docClone.querySelector('title');
    if (titleTag) titleTag.innerText = seoTitle;

    const seoMeta = '<meta name="description" content="' + seoDesc + '">' +
                   '<meta property="og:title" content="' + seoTitle + '">' +
                   '<meta property="og:description" content="' + seoDesc + '">' +
                   '<meta property="og:image" content="' + ogImg + '">';
    
    docClone.querySelector('head').insertAdjacentHTML('beforeend', seoMeta);

    // 7. DESCARCARE
    const finalHTML = '<!DOCTYPE html>\n' + docClone.outerHTML;
    const blob = new Blob([finalHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
}

function copyEmail() {
    const email = portfolioData.design.email;
    navigator.clipboard.writeText(email).then(() => alert("Email copiat!"));
}

function handleLogoUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            portfolioData.general.logoImage = e.target.result;
            renderAll();
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function updateFont(val) {
    portfolioData.design.font = val;
    renderAll();
}

function updateLayoutOrder(val) {
    portfolioData.design.order = val.split(',');
    renderAll();
}

function togglePreviewMode() {
    const isPreview = document.body.classList.toggle('preview-active');
    const sidebar = document.getElementById('editor-sidebar');
    
    if (isPreview) {
        // Închidem sidebar-ul dacă este deschis
        sidebar.classList.remove('active');
        
        // Creăm un buton temporar de "Ieșire Preview"
        const exitBtn = document.createElement('button');
        exitBtn.id = 'exit-preview-btn';
        exitBtn.innerHTML = '<i data-lucide="eye-off"></i> Ieșire Preview';
        exitBtn.className = 'exit-preview-floating';
        exitBtn.onclick = togglePreviewMode;
        document.body.appendChild(exitBtn);
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } else {
        // Eliminăm butonul de ieșire
        const exitBtn = document.getElementById('exit-preview-btn');
        if (exitBtn) exitBtn.remove();
    }
}

// Permitem ieșirea din Preview apăsând tasta Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('preview-active')) {
        togglePreviewMode();
    }
});

function setupShareLinks() {
    // Folosim link-ul de bază al aplicației Hyre (sau link-ul tău de GitHub)
    const appUrl = "https://apps.qualiadept.eu/hyre/"; 
    const message = "Tocmai am folosit Hyre pentru a-mi genera un portofoliu Senior Grade! 🚀 Încearcă-l și tu:";

    const lnk = document.getElementById('share-linkedin');
    const x = document.getElementById('share-x');

    if(lnk) lnk.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(appUrl)}`;
    if(x) x.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(appUrl)}`;
}

function copyHyreLink() {
    const appUrl = "https://apps.qualiadept.eu/hyre/";
    navigator.clipboard.writeText(appUrl).then(() => {
        const txt = document.getElementById('copy-text');
        txt.innerText = "Copiat! ✅";
        setTimeout(() => { txt.innerText = "Copiază Link"; }, 2000);
    });
}

// Funcție nouă pentru imaginea Open Graph
function handleOGImageUpload(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            portfolioData.general.ogImage = e.target.result; // Salvare ca Base64
            renderAll();
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Adaugă această funcție în script.js
function validateMetaTags() {
    const title = portfolioData.general.metaTitle || "";
    const desc = portfolioData.general.metaDescription || "";
    
    const titleHint = document.getElementById('meta-title-hint');
    const descHint = document.getElementById('meta-desc-hint');

    // Validare Titlu (Ideal: 30 - 60 caractere)
    if (title.length === 0) {
        titleHint.innerText = "";
    } else if (title.length < 30) {
        titleHint.innerText = `⚠️ Prea scurt (${title.length} caractere). Minim recomandat: 30.`;
        titleHint.style.color = "#f59e0b"; // Portocaliu
    } else if (title.length > 60) {
        titleHint.innerText = `⚠️ Prea lung (${title.length} caractere). Va fi tăiat de Google.`;
        titleHint.style.color = "#ef4444"; // Roșu
    } else {
        titleHint.innerText = `✅ Perfect (${title.length} caractere).`;
        titleHint.style.color = "#10b981"; // Verde
    }

    // Validare Descriere (Ideal: 120 - 160 caractere)
    if (desc.length === 0) {
        descHint.innerText = "";
    } else if (desc.length < 120) {
        descHint.innerText = `ℹ️ Recomandat: mai detaliat (${desc.length}/160).`;
        descHint.style.color = "#6366f1"; // Accent color
    } else if (desc.length > 160) {
        descHint.innerText = `⚠️ Prea lungă (${desc.length} caractere). Va fi tăiată în previzualizări.`;
        descHint.style.color = "#ef4444"; 
    } else {
        descHint.innerText = `✅ Lungime ideală (${desc.length} caractere).`;
        descHint.style.color = "#10b981";
    }
}

// Actualizează funcția de scroll din script.js
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    progressBar.style.width = scrolled + "%";

    // Declanșăm efectele de final (Glow + Sparkle)
    if (scrolled > 99) {
        progressBar.classList.add('is-finished');
    } else {
        // Eliminăm clasa dacă utilizatorul urcă înapoi, pentru a putea re-declanșa scânteia
        progressBar.classList.remove('is-finished');
    }
});