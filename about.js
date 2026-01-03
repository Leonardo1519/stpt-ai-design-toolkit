// 汕职院AI设计智库 - About Me页面脚本

(function() {
    'use strict';

    // DOM元素
    const elements = {
        themeBtn: document.getElementById('themeBtn'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mobileSidebar: document.getElementById('mobileSidebar'),
        closeSidebar: document.getElementById('closeSidebar'),
        sidebarOverlay: document.getElementById('sidebarOverlay'),
        backToTop: document.getElementById('backToTop')
    };

    // 初始化
    function init() {
        bindEvents();
        initTheme();
        initScrollAnimations();
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

        // 平滑滚动到锚点
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
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

    // 滚动动画
    function initScrollAnimations() {
        const articles = document.querySelectorAll('.about-article');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        articles.forEach(article => {
            observer.observe(article);
        });
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

