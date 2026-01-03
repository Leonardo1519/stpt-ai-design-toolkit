// 汕职院AI设计智库 - 案例研究页面脚本

(function() {
    'use strict';

    // DOM元素
    const elements = {
        casesGrid: document.getElementById('casesGrid'),
        themeBtn: document.getElementById('themeBtn'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mobileSidebar: document.getElementById('mobileSidebar'),
        closeSidebar: document.getElementById('closeSidebar'),
        sidebarOverlay: document.getElementById('sidebarOverlay'),
        backToTop: document.getElementById('backToTop')
    };

    // 初始化
    function init() {
        renderCaseStudies();
        bindEvents();
        initTheme();
    }

    // 渲染案例研究
    function renderCaseStudies() {
        if (!elements.casesGrid || !CASE_STUDIES_DATA) return;
        
        elements.casesGrid.innerHTML = '';
        
        CASE_STUDIES_DATA.cases.forEach((caseItem, index) => {
            const card = createCaseCard(caseItem, index);
            elements.casesGrid.appendChild(card);
        });
    }

    // 创建案例卡片
    function createCaseCard(caseItem, index) {
        const card = document.createElement('a');
        card.className = 'case-card';
        card.href = caseItem.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.style.animationDelay = `${0.1 + index * 0.05}s`;

        const tagsHtml = caseItem.tags.map(tag => 
            `<span class="case-tag">${tag}</span>`
        ).join('');

        card.innerHTML = `
            <div class="case-cover">
                <img src="${caseItem.cover}" alt="${caseItem.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 225%22><rect fill=%22%231a1a25%22 width=%22400%22 height=%22225%22/><text x=%22200%22 y=%22120%22 text-anchor=%22middle%22 fill=%22%236366f1%22 font-size=%2248%22>📚</text></svg>'">
                <div class="case-cover-overlay"></div>
                <div class="case-link-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                </div>
            </div>
            <div class="case-content">
                <h3 class="case-title">${caseItem.title}</h3>
                <p class="case-desc">${caseItem.description}</p>
                <div class="case-tags">${tagsHtml}</div>
            </div>
        `;

        return card;
    }

    // 绑定事件
    function bindEvents() {
        // 主题切换
        if (elements.themeBtn) {
            elements.themeBtn.addEventListener('click', toggleTheme);
        }

        // 移动端菜单
        if (elements.mobileMenuBtn) {
            elements.mobileMenuBtn.addEventListener('click', openMobileSidebar);
        }
        if (elements.closeSidebar) {
            elements.closeSidebar.addEventListener('click', closeMobileSidebar);
        }
        if (elements.sidebarOverlay) {
            elements.sidebarOverlay.addEventListener('click', closeMobileSidebar);
        }

        // 回到顶部
        window.addEventListener('scroll', handleScroll);
        if (elements.backToTop) {
            elements.backToTop.addEventListener('click', scrollToTop);
        }

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileSidebar();
            }
        });
    }

    // 主题切换
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.dataset.theme = savedTheme;
        updateThemeIcon(savedTheme);
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    function updateThemeIcon(theme) {
        if (!elements.themeBtn) return;
        const icon = theme === 'dark' 
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
               </svg>`
            : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
               </svg>`;
        elements.themeBtn.innerHTML = icon;
    }

    // 移动端侧边栏
    function openMobileSidebar() {
        if (elements.mobileSidebar) {
            elements.mobileSidebar.classList.add('active');
        }
        if (elements.sidebarOverlay) {
            elements.sidebarOverlay.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        if (elements.mobileSidebar) {
            elements.mobileSidebar.classList.remove('active');
        }
        if (elements.sidebarOverlay) {
            elements.sidebarOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    // 滚动处理
    function handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 300) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

