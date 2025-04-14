// 多语言支持
(function() {
    // 语言配置
    const languages = {
        en: {
            // 导航栏
            'lang-home': 'Home',
            'lang-games': 'Games',
            'lang-characters': 'Characters',
            'lang-news': 'News',
            
            // 英雄区域
            'lang-hero-title': 'Welcome to Mario Kart World!',
            'lang-hero-desc': 'Play your favorite Mario games online for free!',
            'lang-play-now': 'Play Now',
            
            // 游戏区域
            'lang-games-title': 'Featured Games',
            'lang-game1-desc': 'Classic platformer adventure!',
            'lang-game2-desc': 'Race with Mario and friends!',
            'lang-game3-desc': 'Fun mini-games with friends!',
            'lang-play-game': 'Play Game',
            'lang-loading': 'Loading...',
            'lang-fullscreen': 'Fullscreen',
            
            // 角色区域
            'lang-characters-title': 'Meet the Characters',
            'lang-mario-desc': 'The main hero of Mushroom Kingdom!',
            'lang-luigi-desc': 'Mario\'s brother and loyal sidekick!',
            'lang-peach-desc': 'The princess of Mushroom Kingdom!',
            'lang-bowser-desc': 'The King of Koopas and Mario\'s arch-enemy!',
            
            // 新闻区域
            'lang-news-title': 'Latest News',
            'lang-news1-title': 'Nintendo Announces Princess Peach: Showtime! Release',
            'lang-news1-excerpt': 'Nintendo has released Princess Peach: Showtime! for Nintendo Switch, the first game to star Princess Peach as the main protagonist since 2005...',
            'lang-news2-title': 'Second Mario Movie Confirmed by Nintendo',
            'lang-news2-excerpt': 'Nintendo and Illumination have officially confirmed that a sequel to The Super Mario Bros. Movie is in production with a planned release in 2026...',
            'lang-read-more': 'Read More',
            
            // 页脚
            'lang-quick-links': 'Quick Links',
            'lang-newsletter': 'Newsletter',
            'lang-newsletter-desc': 'Subscribe for updates and new game releases!',
            'lang-subscribe': 'Subscribe',
            'lang-copyright': '© 2023 Mario Kart World. All characters and game titles are property of Nintendo. This is a fan-made website.',
            
            // 404页面
            'data-lang-404-gameover': 'GAME OVER',
            'data-lang-404-title': 'Page Not Found!',
            'data-lang-404-message': 'Oops! Looks like Mario jumped to another castle.<br>The page you\'re looking for doesn\'t exist.',
            'data-lang-404-continue': 'Continue → World 1-1'
        },
        zh: {
            // 导航栏
            'lang-home': '首页',
            'lang-games': '游戏',
            'lang-characters': '角色',
            'lang-news': '新闻',
            
            // 英雄区域
            'lang-hero-title': '欢迎来到马里奥赛车世界！',
            'lang-hero-desc': '免费在线玩你喜欢的马里奥游戏！',
            'lang-play-now': '立即开始',
            
            // 游戏区域
            'lang-games-title': '精选游戏',
            'lang-game1-desc': '经典平台冒险游戏！',
            'lang-game2-desc': '与马里奥和朋友们一起赛车！',
            'lang-game3-desc': '与朋友一起玩有趣的迷你游戏！',
            'lang-play-game': '开始游戏',
            'lang-loading': '加载中...',
            'lang-fullscreen': '全屏',
            
            // 角色区域
            'lang-characters-title': '认识角色',
            'lang-mario-desc': '蘑菇王国的主要英雄！',
            'lang-luigi-desc': '马里奥的兄弟和忠实伙伴！',
            'lang-peach-desc': '蘑菇王国的公主！',
            'lang-bowser-desc': '库巴王，马里奥的宿敌！',
            
            // 新闻区域
            'lang-news-title': '最新消息',
            'lang-news1-title': '任天堂发布《公主桃花：演出时间！》',
            'lang-news1-excerpt': '任天堂为Nintendo Switch发布了《公主桃花：演出时间！》，这是自2005年以来第一款以碧琪公主为主角的游戏...',
            'lang-news2-title': '任天堂确认第二部马里奥电影',
            'lang-news2-excerpt': '任天堂和Illumination正式确认《超级马里奥兄弟电影》的续集正在制作中，计划于2026年上映...',
            'lang-read-more': '阅读更多',
            
            // 页脚
            'lang-quick-links': '快速链接',
            'lang-newsletter': '订阅通讯',
            'lang-newsletter-desc': '订阅获取更新和新游戏发布信息！',
            'lang-subscribe': '订阅',
            'lang-copyright': '© 2023 马里奥赛车世界。所有角色和游戏名称均为任天堂的财产。这是一个粉丝制作的网站。',
            
            // 404页面
            'data-lang-404-gameover': '游戏结束',
            'data-lang-404-title': '页面未找到！',
            'data-lang-404-message': '哎呀！看来马里奥跳到了另一个城堡。<br>您要找的页面不存在。',
            'data-lang-404-continue': '继续 → 世界 1-1'
        }
    };
    
    // 获取当前语言或设置默认语言（英语）
    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // 更新显示的语言代码
    const updateLanguageDisplay = () => {
        const currentLangElement = document.querySelector('.current-lang');
        if (currentLangElement) {
            currentLangElement.textContent = currentLang.toUpperCase();
        }
    };
    
    // 切换语言
    const switchLanguage = (lang) => {
        if (languages[lang]) {
            currentLang = lang;
            localStorage.setItem('selectedLanguage', lang);
            updateLanguageDisplay();
            applyLanguage();
        }
    };
    
    // 应用语言设置
    const applyLanguage = () => {
        const translations = languages[currentLang];
        
        // 遍历所有带有语言类的元素
        Object.keys(translations).forEach(key => {
            const elements = document.querySelectorAll(`.${key}, [data-${key}]`);
            
            elements.forEach(element => {
                // 检查是否为类选择器还是数据属性选择器
                if (element.classList.contains(key)) {
                    // 类选择器
                    element.textContent = translations[key];
                } else {
                    // 数据属性选择器
                    element.innerHTML = translations[key];
                }
                
                // 特殊处理placeholder属性
                if (element.getAttribute('placeholder')) {
                    const placeholderKey = `${key}-placeholder`;
                    if (translations[placeholderKey]) {
                        element.setAttribute('placeholder', translations[placeholderKey]);
                    }
                }
            });
        });
    };
    
    // 初始化
    document.addEventListener('DOMContentLoaded', function() {
        // 语言切换器事件
        const languageLinks = document.querySelectorAll('.language-dropdown a');
        
        if (languageLinks.length > 0) {
            languageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const lang = this.getAttribute('data-lang');
                    switchLanguage(lang);
                    
                    // 关闭下拉菜单
                    document.querySelector('.language-dropdown').classList.remove('active');
                });
            });
        }
        
        // 应用当前语言
        updateLanguageDisplay();
        applyLanguage();
    });
})(); 