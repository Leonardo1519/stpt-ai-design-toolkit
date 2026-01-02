// 汕职院AI设计智库 - 主应用脚本

(function() {
    'use strict';

    // DOM元素
    const elements = {
        categoryNav: document.getElementById('categoryNav'),
        toolsGrid: document.getElementById('toolsGrid'),
        searchBtn: document.getElementById('searchBtn'),
        searchModal: document.getElementById('searchModal'),
        searchInput: document.getElementById('searchInput'),
        searchResults: document.getElementById('searchResults'),
        themeBtn: document.getElementById('themeBtn'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mobileSidebar: document.getElementById('mobileSidebar'),
        closeSidebar: document.getElementById('closeSidebar'),
        sidebarOverlay: document.getElementById('sidebarOverlay'),
        mobileCategoryList: document.getElementById('mobileCategoryList'),
        backToTop: document.getElementById('backToTop')
    };

    // 状态
    let currentCategory = 'all';
    let allTools = AI_TOOLS_DATA.tools;
    let categories = AI_TOOLS_DATA.categories;

    // 初始化
    function init() {
        renderCategoryNav();
        renderTools();
        bindEvents();
        initTheme();
    }

    // 渲染分类导航
    function renderCategoryNav() {
        const allTag = createCategoryTag('all', '全部', allTools.length, true);
        elements.categoryNav.appendChild(allTag);

        categories.forEach(cat => {
            const count = allTools.filter(t => t.category === cat.id).length;
            const tag = createCategoryTag(cat.id, `${cat.icon} ${cat.name}`, count);
            elements.categoryNav.appendChild(tag);
        });

        // 移动端分类列表
        categories.forEach(cat => {
            const item = document.createElement('a');
            item.href = `#${cat.id}`;
            item.className = 'mobile-category-item';
            item.textContent = `${cat.icon} ${cat.name}`;
            item.addEventListener('click', (e) => {
                e.preventDefault();
                filterByCategory(cat.id);
                closeMobileSidebar();
            });
            elements.mobileCategoryList.appendChild(item);
        });
    }

    // 创建分类标签
    function createCategoryTag(id, name, count, active = false) {
        const tag = document.createElement('button');
        tag.className = `category-tag${active ? ' active' : ''}`;
        tag.dataset.category = id;
        tag.innerHTML = `${name}<span class="count">${count}</span>`;
        tag.addEventListener('click', () => filterByCategory(id));
        return tag;
    }

    // 按分类筛选
    function filterByCategory(categoryId) {
        currentCategory = categoryId;
        
        // 更新标签状态
        document.querySelectorAll('.category-tag').forEach(tag => {
            tag.classList.toggle('active', tag.dataset.category === categoryId);
        });

        renderTools();
        
        // 滚动到工具区域
        if (categoryId !== 'all') {
            const section = document.querySelector(`[data-section="${categoryId}"]`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    // 渲染工具卡片
    function renderTools() {
        elements.toolsGrid.innerHTML = '';

        if (currentCategory === 'all') {
            // 显示所有分类
            categories.forEach(cat => {
                const categoryTools = allTools.filter(t => t.category === cat.id);
                if (categoryTools.length > 0) {
                    renderCategorySection(cat, categoryTools);
                }
            });
        } else {
            // 显示单个分类
            const cat = categories.find(c => c.id === currentCategory);
            const categoryTools = allTools.filter(t => t.category === currentCategory);
            if (cat && categoryTools.length > 0) {
                renderCategorySection(cat, categoryTools);
            }
        }
    }

    // 渲染分类区块
    function renderCategorySection(category, tools) {
        // 分类标题
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'category-section';
        sectionTitle.dataset.section = category.id;
        sectionTitle.innerHTML = `
            <h2 class="category-title">
                ${category.icon} ${category.name}
                <span class="tool-count">${tools.length} 个工具</span>
            </h2>
        `;
        elements.toolsGrid.appendChild(sectionTitle);

        // 工具卡片
        tools.forEach((tool, index) => {
            const card = createToolCard(tool, index);
            elements.toolsGrid.appendChild(card);
        });
    }

    // 创建工具卡片
    function createToolCard(tool, index) {
        const card = document.createElement('a');
        card.className = 'tool-card';
        card.href = tool.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.style.animationDelay = `${Math.min(index * 0.05, 0.4)}s`;

        const category = categories.find(c => c.id === tool.category);
        const categoryName = category ? category.name : '';

        // 提取域名显示
        const urlDisplay = extractDomain(tool.url);

        card.innerHTML = `
            <div class="tool-card-header">
                <div class="tool-logo">
                    <img src="${tool.logo}" alt="${tool.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22><rect fill=%22%236366f1%22 width=%2240%22 height=%2240%22 rx=%228%22/><text x=%2220%22 y=%2226%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2216%22>${tool.name.charAt(0)}</text></svg>'">
                </div>
                <div class="tool-info">
                    <h3 class="tool-name">
                        ${tool.name}
                        <svg class="external-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </h3>
                    <p class="tool-desc">${tool.description}</p>
                </div>
            </div>
            <div class="tool-tooltip">${tool.description}</div>
        `;

        // 检测文字是否被截断，只有截断时才显示tooltip
        requestAnimationFrame(() => {
            const descEl = card.querySelector('.tool-desc');
            const tooltipEl = card.querySelector('.tool-tooltip');
            if (descEl && tooltipEl) {
                if (descEl.scrollWidth <= descEl.clientWidth) {
                    // 文字没有被截断，隐藏tooltip
                    tooltipEl.style.display = 'none';
                }
            }
        });

        return card;
    }

    // 提取域名
    function extractDomain(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname;
        } catch {
            return url;
        }
    }

    // 绑定事件
    function bindEvents() {
        // 搜索功能
        elements.searchBtn.addEventListener('click', openSearchModal);
        elements.searchModal.addEventListener('click', (e) => {
            if (e.target === elements.searchModal) {
                closeSearchModal();
            }
        });
        elements.searchInput.addEventListener('input', handleSearch);

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSearchModal();
                closeMobileSidebar();
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearchModal();
            }
        });

        // 主题切换
        elements.themeBtn.addEventListener('click', toggleTheme);

        // 移动端菜单
        elements.mobileMenuBtn.addEventListener('click', openMobileSidebar);
        elements.closeSidebar.addEventListener('click', closeMobileSidebar);
        elements.sidebarOverlay.addEventListener('click', closeMobileSidebar);

        // 回到顶部
        window.addEventListener('scroll', handleScroll);
        elements.backToTop.addEventListener('click', scrollToTop);

        // 导航链接点击
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                closeMobileSidebar();
            });
        });
    }

    // 搜索功能
    function openSearchModal() {
        elements.searchModal.classList.add('active');
        elements.searchInput.focus();
    }

    function closeSearchModal() {
        elements.searchModal.classList.remove('active');
        elements.searchInput.value = '';
        elements.searchResults.innerHTML = '';
    }

    function handleSearch() {
        const query = elements.searchInput.value.trim().toLowerCase();
        
        if (!query) {
            elements.searchResults.innerHTML = '';
            return;
        }

        const results = allTools.filter(tool => 
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query)
        ).slice(0, 10);

        if (results.length === 0) {
            elements.searchResults.innerHTML = '<div class="search-no-result">未找到相关工具</div>';
            return;
        }

        elements.searchResults.innerHTML = results.map(tool => `
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="search-result-item">
                <img src="${tool.logo}" alt="${tool.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 40%22><rect fill=%22%236366f1%22 width=%2240%22 height=%2240%22 rx=%228%22/><text x=%2220%22 y=%2226%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2216%22>${tool.name.charAt(0)}</text></svg>'">
                <div class="search-result-info">
                    <h4>${highlightText(tool.name, query)}</h4>
                    <p>${highlightText(tool.description, query)}</p>
                </div>
            </a>
        `).join('');
    }

    // 高亮搜索文本
    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
        elements.mobileSidebar.classList.add('active');
        elements.sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        elements.mobileSidebar.classList.remove('active');
        elements.sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // 滚动处理
    function handleScroll() {
        const scrollY = window.scrollY;
        
        // 显示/隐藏回到顶部按钮
        if (scrollY > 500) {
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

