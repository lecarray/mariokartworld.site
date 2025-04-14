// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 移动菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // 语言选择器
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
        
        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.language-selector')) {
                languageDropdown.classList.remove('active');
            }
        });
    }
    
    // 游戏卡片点击事件
    const playButtons = document.querySelectorAll('.play-btn');
    const gameDisplay = document.getElementById('game-display');
    const gameIframe = document.getElementById('game-iframe');
    const currentGameTitle = document.getElementById('current-game-title');
    const closeGame = document.getElementById('close-game');
    const loadingSpinner = document.querySelector('.loading-spinner');
    
    if (playButtons.length > 0) {
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const gameUrl = this.getAttribute('data-game');
                const gameTitle = this.parentElement.querySelector('h3').textContent;
                
                // 设置iframe源
                gameIframe.src = gameUrl;
                
                // 设置游戏标题
                currentGameTitle.textContent = gameTitle;
                
                // 显示游戏区域
                gameDisplay.classList.remove('hidden');
                
                // 显示加载动画
                loadingSpinner.style.display = 'flex';
                
                // iframe加载完成后隐藏加载动画
                gameIframe.onload = function() {
                    loadingSpinner.style.display = 'none';
                };
            });
        });
    }
    
    // 关闭游戏
    if (closeGame) {
        closeGame.addEventListener('click', function() {
            gameDisplay.classList.add('hidden');
            // 清空iframe源
            setTimeout(() => {
                gameIframe.src = '';
            }, 300);
        });
    }
    
    // 全屏按钮
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            if (gameIframe.requestFullscreen) {
                gameIframe.requestFullscreen();
            } else if (gameIframe.mozRequestFullScreen) { // Firefox
                gameIframe.mozRequestFullScreen();
            } else if (gameIframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
                gameIframe.webkitRequestFullscreen();
            } else if (gameIframe.msRequestFullscreen) { // IE/Edge
                gameIframe.msRequestFullscreen();
            }
        });
    }
    
    // 滚动到指定区域的平滑效果
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 只有当链接指向页面内锚点时才处理
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                // 如果是"#"，滚动到顶部
                if (targetId === '#') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                }
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // 关闭移动菜单（如果打开）
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                    
                    // 计算滚动位置（考虑固定导航栏的高度）
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 