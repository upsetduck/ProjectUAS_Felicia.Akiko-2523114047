const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('mobileOverlay');
const contentSection = document.getElementById('contentSection');

function toggleMenu() {
    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
}

function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    menuToggle.textContent = '☰';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

const contentData = {
    about: {
        title: "Hello, I'm Alex",
        subtitle: "Full-Stack Developer & Designer",
        body: `
            <p>Welcome to my profile! This layout is fully responsive. If you shrink the screen, the sidebar turns into a slide-out mobile drawer menu. Click the navigation items on the left to see Javascript dynamically swap the content.</p>
            <div class="about-me-details">
                <div class="about-me-item">
                    <h4>Passion</h4>
                    <p>I have a deep passion for creating intuitive and visually appealing user interfaces (UI) and seamless user experiences (UX).</p>
                </div>
                <div class="about-me-item">
                    <h4>Skills</h4>
                    <p>My expertise includes HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Python (Django/Flask), SQL, and UI/UX design principles.</p>
                </div>
                 <div class="about-me-item">
                    <h4>Goal</h4>
                    <p>My goal is to contribute to building innovative web applications that make a positive impact.</p>
                </div>
            </div>
        `
    },
    portfolio: {
        title: "My Portfolio",
        subtitle: "Recent Works & Projects",
        body: `
            <p>Here you can feature screenshots or descriptions of your web development projects, case studies, or design assets. Try adding your own image grids or list elements here!</p>
            <ul>
                <li>Project 1: E-commerce Website (React, Node.js)</li>
                <li>Project 2: Portfolio Website (HTML, CSS, JS)</li>
                <li>Project 3: Task Management App (Python, Django)</li>
            </ul>
        `
    },
    services: {
        title: "What I Do",
        subtitle: "Services Tailored to Your Needs",
        body: `
            <p>I offer clean UI/UX prototyping, frontend architecture building, backend API integrations, and search engine optimization (SEO) performance auditing.</p>
            <ul>
                <li>UI/UX Design & Prototyping</li>
                <li>Frontend Development (React, Vue, etc.)</li>
                <li>Backend Development (Node.js, Python, etc.)</li>
                <li>Database Design & Management</li>
                <li>Website Maintenance & Optimization</li>
            </ul>
        `
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Let's work together",
        body: `
            <p>Feel free to drop me an email at <a href="mailto:akiko3036@gmail.com" style="color: var(--primary); text-decoration: none; font-weight: 600;">akiko3036@gmail.com</a> or reach out via my social media links. Looking forward to hearing about your project!</p>
            <div class="social-links">
                <a href="#" target="_blank">
                    <span>LinkedIn</span>
                </a>
                <a href="#" target="_blank">
                    <span>GitHub</span>
                </a>
                <a href="#" target="_blank">
                    <span>Twitter</span>
                </a>
            </div>
        `
    }
};

const navItems = document.querySelectorAll('.nav-item');
const titleEl = document.getElementById('content-title');
const subtitleEl = document.getElementById('content-subtitle');
const bodyEl = document.getElementById('content-body');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const key = item.getAttribute('href').substring(1);
        
        if (contentData[key]) {
            contentSection.classList.remove('fade-in');
            contentSection.classList.add('fade-out');

            setTimeout(() => {
                titleEl.textContent = contentData[key].title;
                subtitleEl.textContent = contentData[key].subtitle;
                bodyEl.innerHTML = contentData[key].body;

                contentSection.classList.remove('fade-out');
                contentSection.classList.add('fade-in');
            }, 300);
        }
        
        closeMenu();
    });
});