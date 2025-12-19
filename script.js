// 1. DATA STATE & CONFIG
const STORAGE_KEY = 'hyre_builder_autosave';

const defaultData = {
    general: {
        logo: "HYRE",
        logoImage: "",
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
    // Titlu dinamic tab
    document.title = `${portfolioData.general.logo} | Portofoliu`;

    // --- LOGICA NOUĂ DE RANDARE LOGO ---
    const logoContainer = document.getElementById('display-logo');
    let logoHTML = '';

    // 1. Dacă există imagine, o adăugăm prima
    if (portfolioData.general.logoImage) {
        logoHTML += `<img src="${portfolioData.general.logoImage}" alt="Logo profile">`;
    }

    // 2. Adăugăm întotdeauna textul după imagine
    logoHTML += `${portfolioData.general.logo}<span>.</span>`;

    logoContainer.innerHTML = logoHTML;
    // ------------------------------------
    document.getElementById('display-hero-badge').innerText = portfolioData.general.heroBadge;
    const title = portfolioData.general.heroTitle;
    document.getElementById('display-hero-title').innerHTML = title.replace("experiențe digitale", "<span>experiențe digitale</span>");
    document.getElementById('display-hero-desc').innerText = portfolioData.general.heroDesc;
    document.getElementById('display-cv-link').href = portfolioData.general.cvLink;
    document.getElementById('my-form').action = `https://formspree.io/f/${portfolioData.general.formspreeId}`;

    // Stil & Favicon Dinamic
    document.documentElement.style.setProperty('--accent', portfolioData.design.accent);
    document.documentElement.style.setProperty('--bg', portfolioData.design.bg);
    
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        const accentColor = portfolioData.design.accent.replace('#', '%23');
        favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='${accentColor}'></rect><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='Plus Jakarta Sans, sans-serif' font-size='60' font-weight='800' fill='white'>H</text></svg>`;
    }

    // Social
    document.getElementById('display-email').innerText = portfolioData.design.email;
    document.getElementById('display-github').href = portfolioData.design.github;
    document.getElementById('display-linkedin').href = portfolioData.design.linkedin;

    // Stack
    const stackContainer = document.getElementById('display-stack');
    let stackHTML = '';
    [...portfolioData.stack, ...portfolioData.stack].forEach(item => {
        const isDevicon = item.icon.includes('devicon');
        stackHTML += `<div class="tech-card">${isDevicon ? `<i class="${item.icon}"></i>` : `<img src="${item.icon}" alt="${item.name}">`}<span>${item.name}</span></div>`;
    });
    stackContainer.innerHTML = stackHTML;

    // Experience
    const expContainer = document.getElementById('display-experience');
    expContainer.innerHTML = portfolioData.experience.map(item => `
        <div class="timeline-item" data-year="${item.year}">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <div class="timeline-header"><i data-lucide="${item.icon}"></i><h3>${item.title}</h3></div>
                <h4>${item.company}</h4><p>${item.desc}</p>
            </div>
        </div>
    `).join('');

    // Projects
    const projContainer = document.getElementById('display-projects');
    projContainer.innerHTML = portfolioData.projects.map(p => `
        <div class="bento-item ${p.size}">
            <div class="bento-content">
                <div class="badge">${p.badge}</div><h3>${p.title}</h3><p>${p.desc}</p>
                <div class="bento-tags">${p.tags.split(',').map(t => `<span>${t.trim()}</span>`).join('')}</div>
            </div>
        </div>
    `).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
}

// 4. EDITOR LOGIC
function initEditor() {
    const sidebar = document.getElementById('editor-sidebar');
    const toggleBtn = document.getElementById('toggle-editor');
    const closeBtn = document.getElementById('close-editor');

    toggleBtn?.addEventListener('click', () => sidebar.classList.toggle('active'));
    closeBtn?.addEventListener('click', () => sidebar.classList.remove('active'));

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    const bindings = [
        ['edit-logo', 'general', 'logo'], ['edit-hero-badge', 'general', 'heroBadge'],
        ['edit-hero-title', 'general', 'heroTitle'], ['edit-hero-desc', 'general', 'heroDesc'],
        ['edit-cv-link', 'general', 'cvLink'], ['edit-formspree', 'general', 'formspreeId'],
        ['edit-color-accent', 'design', 'accent'], ['edit-color-bg', 'design', 'bg'],
        ['edit-email', 'design', 'email'], ['edit-github', 'design', 'github'], ['edit-linkedin', 'design', 'linkedin']
    ];
    bindings.forEach(b => bindInput(b[0], b[1], b[2]));
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

    const expList = document.getElementById('exp-editor-list');
    expList.innerHTML = portfolioData.experience.map((item, i) => `
        <div class="item-editor-card">
            <input type="text" value="${item.year}" oninput="updateListItem('experience', ${i}, 'year', this.value)" placeholder="An fundal">
            <input type="text" value="${item.date}" oninput="updateListItem('experience', ${i}, 'date', this.value)" placeholder="Perioadă">
            <input type="text" value="${item.title}" oninput="updateListItem('experience', ${i}, 'title', this.value)" placeholder="Titlu">
            <input type="text" value="${item.company}" oninput="updateListItem('experience', ${i}, 'company', this.value)" placeholder="Companie">
            <textarea oninput="updateListItem('experience', ${i}, 'desc', this.value)" placeholder="Descriere">${item.desc}</textarea>
            <select onchange="updateListItem('experience', ${i}, 'icon', this.value)">
                <option value="briefcase" ${item.icon === 'briefcase' ? 'selected' : ''}>Job</option>
                <option value="graduation-cap" ${item.icon === 'graduation-cap' ? 'selected' : ''}>Educație</option>
                <option value="award" ${item.icon === 'award' ? 'selected' : ''}>Premiu</option>
            </select>
            <div class="item-controls">
                <button onclick="moveItem('experience', ${i}, -1)" class="btn-small">↑</button>
                <button onclick="moveItem('experience', ${i}, 1)" class="btn-small">↓</button>
                <button onclick="removeItem('experience', ${i})" class="btn-small btn-del">Șterge</button>
            </div>
        </div>
    `).join('');

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

// 7. EXPORT HTML
async function exportHTML() {
    let cssContent = "";
    try {
        const response = await fetch('style.css');
        cssContent = await response.text();
    } catch (e) { alert("Eroare stiluri. Rulează pe un server local."); return; }

    const clone = document.documentElement.cloneNode(true);
    clone.querySelector('#editor-sidebar')?.remove();
    clone.querySelector('#toggle-editor')?.remove();
    clone.querySelector('script[src="script.js"]')?.remove();
    clone.querySelector('link[href="style.css"]')?.remove();

    const styleTag = document.createElement('style');
    styleTag.textContent = cssContent;
    clone.querySelector('head').appendChild(styleTag);

    const finalScript = document.createElement('script');
    finalScript.textContent = `
        const portfolioData = ${JSON.stringify(portfolioData, null, 4)};
        document.addEventListener('DOMContentLoaded', () => {
            renderAll();
            // Smooth Scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });
        ${renderAll.toString()}
        function copyEmail() {
            const email = portfolioData.design.email;
            navigator.clipboard.writeText(email).then(() => alert("Email copiat!"));
        }
    `;
    clone.querySelector('body').appendChild(finalScript);

    const blob = new Blob(["<!DOCTYPE html>\n" + clone.outerHTML], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'index.html';
    a.click();
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
