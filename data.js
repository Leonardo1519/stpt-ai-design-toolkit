// 汕职院AI设计智库 - 数据文件

// 高校AI设计工作室数据
const STUDIOS_DATA = {
    sectionTitle: '高校AI设计工作室',
    sectionSubtitle: '国内外高校AI设计工作室',
    studios: [
        {
            id: 'tongji-dai',
            name: '同济大学设计创意学院',
            url: 'https://www.sheji.ai/',
            description: '同济大学设计创意学院设计人工智能实验室（D&AI Lab）是国内领先的AI设计研究机构，专注于设计智能、人机交互、数据可视化等前沿领域。实验室致力于探索AI技术在设计领域的创新应用，推动设计教育与产业的数字化转型。',
            cover: 'assets/studios/同济大学设计创意学院.jpg',
            tags: ['设计人工智能', '人机交互', '数据可视化']
        },
        {
            id: 'cafa-future-media',
            name: '中央美术学院 · 未来媒体工作室',
            url: 'https://www.cafa.edu.cn/',
            description: '中央美术学院未来媒体工作室聚焦于数字艺术与新媒体技术的交叉研究，探索AI、VR/AR、交互装置等前沿技术在艺术创作中的应用。工作室培养具有创新思维和技术能力的复合型艺术人才，推动中国数字艺术的发展。',
            cover: 'assets/studios/中央美术学院-未来媒体工作室.jpg',
            tags: ['数字艺术', '新媒体', '交互装置']
        },
        {
            id: 'aidlab',
            name: '香港理工大学 & 英国皇家艺术学院 · AiDLab实验室',
            url: 'https://www.aidlab.hk/',
            description: 'AiDLab（人工智能设计实验室）是香港理工大学与英国皇家艺术学院联合创办的研究机构，专注于AI驱动的设计创新。实验室汇聚全球顶尖设计与技术人才，开展跨学科研究，探索AI在产品设计、服务设计、社会创新等领域的应用。',
            cover: 'assets/studios/香港理工大学 & 英国皇家艺术学院-AiDLab实验室.jpg',
            tags: ['AI设计', '跨学科研究', '设计创新']
        },
        {
            id: 'mit-media-lab',
            name: '麻省理工学院 · Media Lab实验室',
            url: 'https://www.media.mit.edu/',
            description: 'MIT Media Lab是全球最具影响力的跨学科研究实验室之一，汇集艺术、科学、设计与技术。实验室在人机交互、可穿戴计算、AI创意工具等领域开创了众多突破性研究，培养了大量科技与设计领域的领军人才。',
            cover: 'assets/studios/麻省理工学院-MediaLab实验室.jpg',
            tags: ['跨学科研究', '人机交互', '创意技术']
        },
        {
            id: 'kcl-creative-ai',
            name: '伦敦国王学院 · Creative AI Lab',
            url: 'https://www.kcl.ac.uk/research/creative-ai',
            description: 'Creative AI Lab是伦敦国王学院的前沿研究实验室，专注于人工智能技术在创意产业中的应用。实验室研究涵盖AI艺术生成、音乐创作、自然语言处理等领域，推动人工智能技术与人文艺术的深度融合。',
            cover: 'assets/studios/伦敦国王学院 -Creative AI Lab.jpg',
            tags: ['创意AI', 'AI艺术', '人文技术']
        },
        {
            id: 'hfg-ai-design',
            name: '德国施瓦本格明德设计学院 · AI+Design Lab',
            url: 'https://www.hfg-gmuend.de/',
            description: 'AI+Design Lab是德国施瓦本格明德设计学院（HfG）的创新研究实验室，专注于人工智能与设计的交叉研究。实验室探索AI在工业设计、交互设计、可持续设计等领域的应用，培养具有批判性思维的设计研究者。',
            cover: 'assets/studios/德国施瓦本格明德设计学院-AI-Design-Lab.jpg',
            tags: ['工业设计', '交互设计', '设计研究']
        }
    ]
};

// 案例研究数据
const CASE_STUDIES_DATA = {
    sectionTitle: '案例研究',
    sectionSubtitle: 'AI技术在设计行业的应用',
    cases: [
        {
            id: 'aliyun-asian-games',
            title: '阿里云智能设计用"数字水墨"献礼杭州亚运会',
            description: '阿里云基于AI技术打造"数字水墨"视觉系统，以动态水墨风格演绎杭州亚运会主题。系统通过算法模拟水墨渲染效果，生成开幕式视觉、海报及宣传片等数字内容，将传统水墨艺术与现代体育精神融合，展现中国文化与科技创新的结合。',
            url: 'https://www.digitaling.com/articles/981875.html',
            cover: 'assets/cases/case-aliyun-asian-games.jpg',
            tags: ['阿里云', '视觉设计', '文化创意']
        },
        {
            id: 'luban-double11',
            title: '鹿班AI赋能双十一电商营销设计',
            description: '阿里巴巴旗下AI设计平台"鹿班"在双十一期间自动生成海量营销海报与广告素材。系统可根据商品信息、品牌风格实时生成个性化设计，极大提升设计效率与一致性，助力商家快速响应营销需求，实现智能化、规模化设计输出。',
            url: 'https://www.uisdc.com/responsible-for-the-design-of-luban',
            cover: 'assets/cases/case-luban-double11.jpg',
            tags: ['阿里巴巴', '电商设计', '智能生成']
        },
        {
            id: 'alimama-font',
            title: '阿里妈妈AI智造字，全新可变字体再发布',
            description: '阿里妈妈发布基于AI的可变字体系统，支持字形、字重、字宽等多维度动态调整。通过深度学习生成字形结构，实现字体在多种场景下的自适应排版与视觉优化，提升品牌文字设计的灵活性与表现力。',
            url: 'https://developer.aliyun.com/article/1248344',
            cover: 'assets/cases/case-alimama-font.jpg',
            tags: ['阿里妈妈', '字体设计', '深度学习']
        },
        {
            id: 'dunhuang-restore',
            title: '敦煌研究院 × 腾讯AI Lab：敦煌壁画智能修复',
            description: '腾讯AI Lab与敦煌研究院合作，利用AI图像修复技术对敦煌壁画进行数字化修复与保护。系统通过学习壁画纹理与色彩规律，自动填补缺损部分，还原壁画原貌，为文化遗产的数字化存档与研究和非遗文化传承提供技术支持。项目成果: 数字敦煌线上博物馆。',
            url: 'https://baijiahao.baidu.com/s?id=1695108068425546909&wfr=spider&for=pc',
            cover: 'assets/cases/case-dunhuang.jpg',
            tags: ['腾讯AI Lab', '文化遗产', '图像修复']
        },
        {
            id: 'sanxingdui',
            title: '三星堆遗址 × 腾讯数字文化实验室: 三星堆考古与文物数字化保护',
            description: '腾讯数字文化实验室与三星堆合作，运用3D扫描、AI重建等技术对出土文物进行高精度数字化建模。项目构建了文物数字档案与虚拟展示系统，助力考古研究、公众教育与文化遗产的可持续保护。',
            url: 'https://www.tencent.com/index.php/zh-cn/articles/2201763.html',
            cover: 'assets/cases/case-sanxingdui.jpg',
            tags: ['腾讯', '3D建模', '文物保护']
        },
        {
            id: 'nike-3d-shoes',
            title: '探索未来 | 耐克推出全新的3D打印AI概念运动鞋',
            description: '耐克发布基于AI与3D打印技术的概念运动鞋，通过算法优化鞋履结构，实现轻量化与个性化支撑。AI辅助设计流程可根据运动数据生成适配不同脚型与运动模式的鞋底与鞋面结构，探索未来运动装备的智能制造路径。',
            url: 'https://baijiahao.baidu.com/s?id=1796746427995731544&wfr=spider&for=pc',
            cover: 'assets/cases/case-nike-3d-shoes.jpg',
            tags: ['耐克', '3D打印', '产品设计']
        },
        {
            id: 'jinshan-painting',
            title: '同济大学设计人工智能实验室 | 金山农民画：AI赋能手工艺保护',
            description: '该项目是科技赋能文化遗产保护的典型。实验室利用Tezign.EYE机器学习引擎，对金山农民画的色彩、构图、笔触等艺术风格进行解构与学习，构建其数字风格模型。公众只需绘制简单线条，AI即可实时生成一幅具有正宗金山农民画风格的艺术作品。该项目将高门槛的民间艺术创作，转化为低门槛、高互动性的公共文化体验，为非遗的数字化保存、传播与创新性发展提供了前沿技术路径。',
            url: 'https://www.sheji.ai/research/6191c8a824a243000d5d50c8',
            cover: 'assets/cases/case-jinshan-painting.jpg',
            tags: ['同济大学', '非遗保护', '风格迁移']
        },
        {
            id: 'designnet',
            title: '同济大学设计人工智能实验室 | DesignNet平面设计数据集',
            description: '同济大学设计人工智能实验室构建了DesignNet数据集，收录大量平面设计样本及其设计元素标注。该数据集支持AI在排版、配色、构图等方面的学习与研究，为设计智能化工具的开发提供基础资源与算法训练支持。',
            url: 'https://www.sheji.ai/research/6191bea1e0ffc6001d3dcf74',
            cover: 'assets/cases/case-designnet.jpg',
            tags: ['同济大学', '数据集', '设计研究']
        }
    ]
};

// AI工具数据

const AI_TOOLS_DATA = {
    categories: [
        { id: 'hot', name: '热门推荐', icon: '🔥' },
        { id: 'chat', name: 'AI对话聊天 | 办公', icon: '💬' },
        { id: 'image', name: 'AI图像生成', icon: '🎨' },
        { id: 'video', name: 'AI视频动画和数字人', icon: '🎬' },
        { id: 'audio', name: 'AI音频工具', icon: '🎵' },
        { id: 'ui', name: 'AI界面设计与前端', icon: '🖥️' },
        { id: 'code', name: 'AI编程开发', icon: '💻' },
        { id: 'platform', name: 'AI多功能集成平台', icon: '🚀' },
        { id: 'community', name: 'AI资源社区', icon: '🌐' },
        { id: 'learning', name: 'AI学习网站', icon: '📚' }
    ],
    
    tools: [
        // ========== 热门推荐 ==========
        {
            id: 'jianying',
            name: '剪映',
            url: 'https://www.capcut.cn/',
            description: '字节跳动旗下的智能视频剪辑工具',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/1-剪映.svg'
        },
        {
            id: 'jimeng',
            name: '即梦',
            url: 'https://jimeng.jianying.com/ai-tool/home',
            description: '字节跳动旗下的AIGC视频与图像生成平台',
            category: 'hot',
            logo: 'assets/logos/即梦-logo.png'
        },
        {
            id: 'netease-ai-studio',
            name: '网易云课堂 | AI设计工坊',
            url: 'https://sd.study.163.com/',
            description: '网易云课堂推出的AI作画平台，在线使用Stable Diffusion出图',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/3-网易云课堂 -AI设计工坊.svg'
        },
        {
            id: 'uisdc',
            name: '优设网学习社区',
            url: 'https://www.uisdc.com/',
            description: 'AIGC设计师学习与交流平台',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/4-优设网学习社区.svg'
        },
        {
            id: 'deepseek-hot',
            name: 'DeepSeek',
            url: 'https://www.deepseek.com/',
            description: '深度求索推出的高性能免费AI对话助手',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/5-DeepSeek.svg'
        },
        {
            id: 'yuanbao-hot',
            name: '腾讯元宝',
            url: 'https://yuanbao.tencent.com/',
            description: '腾讯推出的基于deepseek模型的AI智能助手',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/6-腾讯元宝.svg'
        },
        {
            id: 'doubao-hot',
            name: '豆包',
            url: 'https://www.doubao.com',
            description: '字节跳动推出的AI对话助手',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/7-豆包.svg'
        },
        {
            id: 'chatgpt-hot',
            name: 'ChatGPT',
            url: 'https://chat.openai.com/',
            description: 'OpenAI开发的AI对话系统',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/8-ChatGPT.svg'
        },
        {
            id: 'cursor-hot',
            name: 'Cursor',
            url: 'https://cursor.com/',
            description: '集成多个AI大模型的代码编辑器与编程助手，显著提升开发效率',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/10-Cursor.svg'
        },
        {
            id: 'coze-hot',
            name: 'Coze',
            url: 'https://www.coze.cn/',
            description: '字节跳动推出的一站式AI Bot开发平台',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/9-Coze.svg'
        },
        {
            id: 'siliconflow-hot',
            name: '硅基流动',
            url: 'https://www.siliconflow.cn/',
            description: '国产AI模型托管与服务平台',
            category: 'hot',
            logo: 'assets/logos/1-热门推荐/11-硅基流动.svg'
        },

        // ========== AI对话聊天 | 办公 ==========
        {
            id: 'deepseek',
            name: 'DeepSeek',
            url: 'https://www.deepseek.com/',
            description: '深度求索推出的高性能免费AI对话助手',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/1-DeepSeek.svg'
        },
        {
            id: 'kimi',
            name: 'Kimi',
            url: 'https://www.kimi.com/',
            description: '月之暗面推出的AI聊天机器人，支持长文本阅读的智能助手',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/2-Kimi.svg'
        },
        {
            id: 'notion',
            name: 'Notion',
            url: 'https://www.notion.com/product/ai',
            description: '集成AI的笔记与协作平台',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/3-Notion.svg'
        },
        {
            id: 'doubao',
            name: '豆包',
            url: 'https://www.doubao.com',
            description: '字节跳动推出的AI对话助手',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/4-豆包.svg'
        },
        {
            id: 'qianwen',
            name: '通义千问',
            url: 'https://www.qianwen.com/',
            description: '阿里巴巴推出的AI智能对话大模型',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/5-通义千问.svg'
        },
        {
            id: 'yuanbao',
            name: '腾讯元宝',
            url: 'https://yuanbao.tencent.com/',
            description: '腾讯推出的基于deepseek模型的AI智能助手',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/6-腾讯元宝.svg'
        },
        {
            id: 'zhipu',
            name: '智谱清言',
            url: 'https://chatglm.cn/main/alltoolsdetail?lang=zh',
            description: '智谱AI推出的生成式AI助手，基于ChatGLM模型',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/7-智谱清言.svg'
        },
        {
            id: 'xinghuo',
            name: '讯飞星火',
            url: 'https://xinghuo.xfyun.cn/desk',
            description: '科大讯飞推出的智能AI对话系统',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/8-讯飞星火.svg'
        },
        {
            id: 'iflyrec',
            name: '讯飞智慧办公平台',
            url: 'https://www.iflyrec.com/',
            description: '科大讯飞推出的AI会议转录与办公助手',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/9-讯飞智慧办公平台.svg'
        },
        {
            id: 'yiyan',
            name: '文心一言',
            url: 'https://yiyan.baidu.com/',
            description: '百度推出的智能对话大模型',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/10-文心一言.svg'
        },
        {
            id: 'wenku',
            name: '百度文库AI',
            url: 'https://wenku.baidu.com',
            description: 'AI辅助文档生成与处理',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/11-百度文库AI.svg'
        },
        {
            id: 'lingxi',
            name: 'WPS灵犀',
            url: 'https://lingxi.wps.cn/',
            description: 'WPS推出的AI智能聊天工具',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/12-WPS灵犀.svg'
        },
        {
            id: 'chatgpt',
            name: 'ChatGPT',
            url: 'https://chat.openai.com/',
            description: 'OpenAI开发的AI对话系统',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/13-ChatGPT.svg'
        },
        {
            id: 'claude',
            name: 'Claude.AI',
            url: 'https://claude.ai/',
            description: 'Anthropic开发的AI办公智能助手',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/14-Claude.AI.svg'
        },
        {
            id: 'grok',
            name: 'Grok',
            url: 'https://x.ai/',
            description: '马斯克旗下的xAI公司开发的AI聊天机器人',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/15-Grok.svg'
        },
        {
            id: 'perplexity',
            name: 'Perplexity.AI',
            url: 'https://www.perplexity.ai/',
            description: 'AI驱动的联网搜索问答工具',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/16-Perplexity.AI.svg'
        },
        {
            id: 'wpsai',
            name: 'WPS AI',
            url: 'https://ai.wps.cn/',
            description: 'WPS办公软件AI功能合集',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/17-WPS AI.svg'
        },
        {
            id: 'mindshow',
            name: 'Mindshow.AI',
            url: 'https://mindshow.fun/',
            description: 'AI一键生成PPT演示稿',
            category: 'chat',
            logo: 'assets/logos/2-AI对话聊天-办公/18-Mindshow.AI.svg'
        },

        // ========== AI图像生成 ==========
        {
            id: 'jimeng-img',
            name: '即梦',
            url: 'https://jimeng.jianying.com/ai-tool/home',
            description: '字节跳动旗下的AIGC视频与图像生成平台',
            category: 'image',
            logo: 'assets/logos/即梦-logo.png'
        },
        {
            id: 'wanxiang',
            name: '通义万相',
            url: 'https://tongyi.aliyun.com/wan/',
            description: '阿里通义AI图像生成工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/2-通义万相.svg'
        },
        {
            id: 'dreamstudio',
            name: 'Dream Studio',
            url: 'https://stability.ai/dreamstudio',
            description: 'Stability AI官方图像生成工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/3-Dream Studio.svg'
        },
        {
            id: 'midjourney',
            name: 'Midjourney',
            url: 'https://www.midjourney.com',
            description: '知名AI绘画与图像生成平台',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/4-Midjourney.svg'
        },
        {
            id: 'youchuan',
            name: '悠船',
            url: 'https://www.youchuan.cn/',
            description: '在线AI绘画创作平台',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/5-悠船.svg'
        },
        {
            id: 'netease-sd',
            name: '网易云课堂 | AI设计工坊',
            url: 'https://sd.study.163.com/',
            description: '网易云课堂推出的AI作画平台，在线使用Stable Diffusion出图',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/6-网易云课堂 -AI设计工坊.svg'
        },
        {
            id: 'comfyui',
            name: 'ComfyUI',
            url: 'https://www.comfy.org/zh-cn/',
            description: 'ComfyUI是免费开源的AI创作平台，通过节点式可视化工作流为用户提供对图像、视频等生成过程的极致掌控力',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/7-ComfyUI.svg'
        },
        {
            id: 'canva',
            name: 'Canvas可画',
            url: 'https://www.canva.cn/',
            description: '集成多种设计功能的AI的在线设计工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/8-Canvas可画.svg'
        },
        {
            id: 'liblib',
            name: 'LiblibAI',
            url: 'https://www.liblib.art/',
            description: '国内AI图像创作平台和Stable Diffusion模型社区',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/9-LiblibAI.svg'
        },
        {
            id: 'leonardo',
            name: 'Leonardo.AI',
            url: 'https://app.leonardo.ai/',
            description: 'AI驱动的高质量图像生成平台，专注于游戏与数字艺术创作',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/10-Leonardo.AI.svg'
        },
        {
            id: 'gaoding',
            name: '稿定AI',
            url: 'https://www.gaoding.com/',
            description: '电商营销设计AIGC在线设计工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/11-稿定AI.svg'
        },
        {
            id: 'designkit',
            name: '美图设计室',
            url: 'https://www.designkit.cn/',
            description: '美图推出的AI设计工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/12-美图设计室.svg'
        },
        {
            id: 'yunxiu',
            name: '美图云修',
            url: 'https://yunxiu.meitu.com/',
            description: '美图推出专业级AI人像精修工具，可用于商业摄影后期处理',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/13-美图云修.svg'
        },
        {
            id: 'wanxiangyingzao',
            name: '万相营造',
            url: 'https://agi.taobao.com/',
            description: '淘宝推出的电商营销AI设计平台',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/14-万相营造.svg'
        },
        {
            id: 'piccopilot',
            name: 'Pic Copilot',
            url: 'https://www.piccopilot.com/',
            description: '阿里巴巴国际站推出的电商营销AI图片生成工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/15-Pic Copilot.svg'
        },
        {
            id: 'taishan',
            name: '腾讯云智绘',
            url: 'https://taishan.qq.com/brand/',
            description: '腾讯云智能图像创作平台',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/16-腾讯云智绘.svg'
        },
        {
            id: 'ddesign',
            name: 'D.DESIGN堆友',
            url: 'https://d.design/',
            description: 'AI设计资源与电商模板库',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/17-D.DESIGN堆友.svg'
        },
        {
            id: 'bigjpg',
            name: 'BigJPG',
            url: 'https://bigjpg.com/',
            description: 'AI人工智能图片放大工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/18-BigJPG.svg'
        },
        {
            id: 'aicolors',
            name: 'AIcolors',
            url: 'https://www.bairesdev.com/tools/ai-colors',
            description: '根据文本生成调色板，提供配色案例参考',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/19-AIcolors.svg'
        },
        {
            id: 'zitijia',
            name: '字体家AI神笔',
            url: 'https://www.ai.zitijia.com/',
            description: 'AI生成与设计字体工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/20-字体家AI神笔.svg'
        },
        {
            id: 'yanque',
            name: '燕雀光年',
            url: 'https://www.yanqueai.com/',
            description: '智能logo设计和营销视频制作工具。可生成logo的静态和动态图像、样机效果图和完整VI方案',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/21-燕雀光年.svg'
        },
        {
            id: 'logomaker',
            name: '标智客',
            url: 'https://www.logomaker.com.cn/',
            description: 'AI辅助Logo设计和VI效果图设计平台',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/22-标智客.svg'
        },
        {
            id: 'logosc',
            name: '标小智',
            url: 'https://www.logosc.cn/',
            description: '智能Logo设计与VI视觉系统生成工具',
            category: 'image',
            logo: 'assets/logos/标小智-logo.png'
        },
        {
            id: 'looka',
            name: 'Looka',
            url: 'https://looka.com/',
            description: 'AI驱动的Logo设计平台',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/24-Looka.svg'
        },
        {
            id: 'hunyuan3d',
            name: '腾讯混元3D',
            url: 'https://3d.hunyuan.tencent.com/',
            description: '腾讯3D内容AI创作平台，支持文本和图像输入生成高质量3D模型',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/25-腾讯混元3D.svg'
        },
        {
            id: 'meshy',
            name: 'Meshy',
            url: 'https://www.meshy.ai/',
            description: 'AI生成3D模型平台',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/26-Meshy.svg'
        },
        {
            id: 'tripo',
            name: 'Tripo',
            url: 'https://www.tripo3d.ai/',
            description: 'AI快速生成3D模型工具',
            category: 'image',
            logo: 'assets/logos/3-AI图像生成/27-Tripo.svg'
        },

        // ========== AI视频动画和数字人制作 ==========
        {
            id: 'jianying-video',
            name: '剪映',
            url: 'https://www.capcut.cn/',
            description: '字节跳动旗下的智能视频剪辑工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/1-剪映.svg'
        },
        {
            id: 'kling',
            name: '可灵AI',
            url: 'https://app.klingai.com/cn/',
            description: 'AI生成真人视频内容工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/2-可灵AI.svg'
        },
        {
            id: 'zenvideo',
            name: '腾讯智影',
            url: 'https://zenvideo.qq.com/',
            description: '腾讯智能视频创作平台',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/3-腾讯智影.svg'
        },
        {
            id: 'hunyuan-video',
            name: '腾讯混元AI视频',
            url: 'https://video.hunyuan.tencent.com/',
            description: '腾讯AIGC视频生成工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/4-腾讯混元AI视频.svg'
        },
        {
            id: 'hailuo',
            name: '海螺AI',
            url: 'https://hailuoai.com/',
            description: 'AI视频生成与剪辑平台',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/5-海螺AI.svg'
        },
        {
            id: 'soundview',
            name: 'Soundview',
            url: 'https://soundviewai.com/',
            description: 'AI视频脚本生成工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/6-Soundview.svg'
        },
        {
            id: 'vidu',
            name: 'Vidu',
            url: 'https://www.vidu.cn/',
            description: 'AI生成高真实感视频工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/7-Vidu.svg'
        },
        {
            id: 'runway',
            name: 'Runway',
            url: 'https://runwayml.com',
            description: 'AI视频编辑与生成平台',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/8-Runway.svg'
        },
        {
            id: 'stablevideo',
            name: 'Stable Video',
            url: 'https://stability.ai/stable-video',
            description: 'Stability AI视频生成模型',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/9-Stable Video.svg'
        },
        {
            id: 'hifly',
            name: '飞影数字人',
            url: 'https://hifly.cc',
            description: 'AI数字人视频生成工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/10-飞影数字人.svg'
        },
        {
            id: 'chanjing',
            name: '蝉镜',
            url: 'https://www.chanjing.cc',
            description: '数字人定制与内容生成平台',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/11-蝉镜.svg'
        },
        {
            id: 'bihuo',
            name: '必火AI数字人',
            url: 'https://www.bihuoai.com/',
            description: '数字人直播与视频制作',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/12-必火AI数字人.svg'
        },
        {
            id: 'laihua',
            name: '来画',
            url: 'https://www.laihua.com/',
            description: 'AI动画与数字人视频制作平台',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/13-来画.svg'
        },
        {
            id: 'paivideo',
            name: '拍我AI',
            url: 'https://pai.video/',
            description: 'AI真人视频生成工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/14-拍我AI.svg'
        },
        {
            id: 'moki',
            name: 'MOKI',
            url: 'https://www.moki.cn/',
            description: 'MOKI是一款国产AI视频与AI动画生成工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/15-MOKI.svg'
        },
        {
            id: 'genmo',
            name: 'genmo',
            url: 'https://www.genmo.ai/',
            description: 'AI视频内容生成工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/16-genmo.svg'
        },
        {
            id: 'pika',
            name: 'Pika',
            url: 'https://pika.art/',
            description: 'AI视频与动画生成和编辑工具',
            category: 'video',
            logo: 'assets/logos/4-AI视频和动画工具-数字人制作/17-Pika.svg'
        },

        // ========== AI音频工具 ==========
        {
            id: 'tianyin',
            name: '网易天音',
            url: 'https://tianyin.music.163.com/',
            description: 'AI辅助音乐创作平台',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/1-网易天音.svg'
        },
        {
            id: 'tianqin',
            name: '腾讯天琴',
            url: 'https://y.qq.com/tme_studio/',
            description: '腾讯AI音乐创作工具',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/2-腾讯天琴.svg'
        },
        {
            id: 'mureka',
            name: 'Mureka',
            url: 'https://www.mureka.cn/',
            description: 'AI音乐商用创作平台',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/3-Mureka.svg'
        },
        {
            id: 'moyin',
            name: '魔音工坊',
            url: 'https://www.moyin.com/',
            description: 'AI配音与语音合成工具',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/4-魔音工坊.svg'
        },
        {
            id: 'dubbingx',
            name: '智声云配',
            url: 'https://app.dubbingx.com/',
            description: '一款专注于AI配音与语音合成（TTS）的智能工具',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/5-智声云配.svg'
        },
        {
            id: 'fishaudio',
            name: 'Fish Audio',
            url: 'https://fishspeech.net/',
            description: '语音合成与AI配音工具',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/6-Fish Audio.svg'
        },
        {
            id: 'lalal',
            name: 'LALA.AI',
            url: 'https://www.lalal.ai/',
            description: '人声与伴奏AI分离工具',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/7-LALA.AI.svg'
        },
        {
            id: 'lanzao',
            name: '蓝藻AI',
            url: 'https://aigc.unisound.com/',
            description: '云知声旗下的AI配音和声音克隆平台',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/8-蓝藻AI.svg'
        },
        {
            id: 'bgmcat',
            name: 'BGM猫',
            url: 'https://bgmcat.com/',
            description: 'AI背景音乐生成平台',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/9-BGM猫.svg'
        },
        {
            id: 'stableaudio',
            name: 'Stable Audio',
            url: 'https://stability.ai/stable-audio',
            description: 'Stability AI音频生成工具',
            category: 'audio',
            logo: 'assets/logos/5-AI音频工具/10-Stable Audio.svg'
        },

        // ========== AI界面设计与前端开发 ==========
        {
            id: 'pixso',
            name: 'Pixso AI',
            url: 'https://pixso.cn/pixso-ai-generator/',
            description: '集成AI的UI协作设计工具',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/1-Pixso AI.svg'
        },
        {
            id: 'mastergo',
            name: 'MasterGo AI',
            url: 'https://mastergo.com',
            description: 'AI辅助UI设计平台',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/2-MasterGo AI.svg'
        },
        {
            id: 'jsdesign',
            name: '即时设计AI',
            url: 'https://js.design',
            description: '在线UI设计AI工具',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/3-即时设计AI.svg'
        },
        {
            id: 'modao',
            name: '墨刀AI',
            url: 'https://modao.cc/feature/ai',
            description: 'AI辅助原型设计工具',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/4-墨刀AI.svg'
        },
        {
            id: 'figmaai',
            name: 'Figma AI',
            url: 'https://www.figma.com/ai/',
            description: 'Figma内置AI设计功能',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/5-Figma AI.svg'
        },
        {
            id: 'visily',
            name: 'Visily',
            url: 'https://www.visily.ai/',
            description: '线框图转高保真UI设计工具',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/6-Visily.svg'
        },
        {
            id: 'qoqo',
            name: 'QoQo',
            url: 'https://qoqo.ai/',
            description: 'AI用户旅程图生成工具',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/7-QoQo.svg'
        },
        {
            id: 'lovable',
            name: 'Lovable',
            url: 'https://lovable.dev/',
            description: 'UI智能设计平台，可生成单个网页的前端代码',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/8-Lovable.svg'
        },
        {
            id: 'v0',
            name: 'V0',
            url: 'https://v0.dev/',
            description: '文本生成UI组件工具，可生成单个网页的前端代码',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/9-V0.svg'
        },
        {
            id: 'bolt',
            name: 'Bolt',
            url: 'https://bolt.new/',
            description: 'AI快速生成前端页面工具，可生成完整的网站结构代码',
            category: 'ui',
            logo: 'assets/logos/6-AI界面设计-前端开发/10-Bolt.svg'
        },

        // ========== AI编程开发 ==========
        {
            id: 'cursor',
            name: 'Cursor',
            url: 'https://cursor.com/',
            description: '集成多个AI大模型的代码编辑器与编程助手，显著提升开发效率',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/1-Cursor.svg'
        },
        {
            id: 'windsurf',
            name: 'Windsurf',
            url: 'https://windsurf.com',
            description: 'AI辅助编程开发工具',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/2-Windsurf.svg'
        },
        {
            id: 'trae',
            name: 'Trae',
            url: 'https://www.trae.cn/',
            description: '字节跳动推出的AI编程助手',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/3-Trae.svg'
        },
        {
            id: 'qoder',
            name: 'Qoder',
            url: 'https://qoder.com',
            description: 'AI辅助代码生成工具',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/4-Qoder.svg'
        },
        {
            id: 'lingma',
            name: '通义灵码',
            url: 'https://lingma.aliyun.com/',
            description: '阿里云智能编码助手',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/5-通义灵码.svg'
        },
        {
            id: 'codebuddy',
            name: 'CodeBuddy IDE',
            url: 'https://www.codebuddy.ai',
            description: '腾讯开发的智能代码编辑器',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/6-CodeBuddy IDE.svg'
        },
        {
            id: 'github',
            name: 'Github',
            url: 'https://github.com/',
            description: 'AI项目开发的核心协作平台，支持代码托管、协作与开源生态构建',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/7-Github.svg'
        },
        {
            id: 'vercel',
            name: 'Vercel',
            url: 'https://vercel.com/',
            description: 'AI应用一键部署与加速平台，专注前端与全栈项目云端发布',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/8-Vercel.svg'
        },
        {
            id: 'coze',
            name: 'Coze',
            url: 'https://www.coze.cn/',
            description: '字节跳动推出的一站式AI Bot开发平台',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/9-Coze.svg'
        },
        {
            id: 'qianfan',
            name: '百度千帆',
            url: 'https://cloud.baidu.com/product-s/qianfan_home',
            description: '百度智能体开发平台',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/10-百度千帆.svg'
        },
        {
            id: 'electron',
            name: 'Electron',
            url: 'https://www.electronjs.org/',
            description: '跨平台桌面应用开发框架',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/11-Electron.svg'
        },
        {
            id: 'expo',
            name: 'Expo',
            url: 'https://expo.dev/',
            description: 'React Native移动应用开发平台',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/12-Expo.svg'
        },
        {
            id: 'flutter',
            name: 'Flutter',
            url: 'https://flutter.cn/',
            description: '谷歌跨平台UI开发框架',
            category: 'code',
            logo: 'assets/logos/7-AI编程开发/13-Flutter.svg'
        },

        // ========== AI多功能集成平台 ==========
        {
            id: 'volcengine',
            name: '火山引擎',
            url: 'https://www.volcengine.com',
            description: '字节跳动旗下的企业级技术服务平台，提供云服务、AI技术支持等一站式解决方案',
            category: 'platform',
            logo: 'assets/logos/8-AI多功能集成平台/1-火山引擎.svg'
        },
        {
            id: 'cherrystudio',
            name: 'Cherry Studio',
            url: 'https://www.cherry-ai.com',
            description: '可集成多款AI模型的 AI 对话客户端；支持多格式文件的导入和网页导入等来组件AI个性化知识库',
            category: 'platform',
            logo: 'assets/logos/8-AI多功能集成平台/2-Cherry Studio.svg'
        },
        {
            id: 'askmanyai',
            name: 'AskManyAI',
            url: 'https://askmany.cn/',
            description: '集成多款AI模型的AI对话与智能助手平台',
            category: 'platform',
            logo: 'assets/logos/8-AI多功能集成平台/3-AskManyAI.svg'
        },
        {
            id: 'poe',
            name: 'Poe',
            url: 'https://poe.com/',
            description: '由美国知识问答社区Quora推出的、集成多款AI模型的聊天平台',
            category: 'platform',
            logo: 'assets/logos/8-AI多功能集成平台/4-Poe.svg'
        },

        // ========== AI资源社区 ==========
        {
            id: 'promptpilot',
            name: 'PromptPilot',
            url: 'https://promptpilot.volcengine.com/',
            description: '由字节跳动火山引擎推出的AI提示词助手，帮助用户生成、优化和管理提示词（Prompt）',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/1-PromptPilot.svg'
        },
        {
            id: 'huggingface',
            name: 'Hugging Face',
            url: 'https://huggingface.co',
            description: 'AI模型与数据资源开源社区',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/2-Hugging Face.svg'
        },
        {
            id: 'civitai',
            name: 'Civitai',
            url: 'https://civitai.com',
            description: 'Stable Diffusion模型资源分享平台',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/3-Civitai.svg'
        },
        {
            id: 'smithery',
            name: 'Smithery.AI',
            url: 'https://smithery.ai/',
            description: 'MCP工具资源聚合与分享网站',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/4-Smithery.AI.svg'
        },
        {
            id: 'modelscope',
            name: '魔搭社区',
            url: 'https://modelscope.cn',
            description: '阿里云推出的AI大模型资源的开源社区，提供从模型训练到部署的全流程服务',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/5-魔搭社区.svg'
        },
        {
            id: 'siliconflow',
            name: '硅基流动',
            url: 'https://www.siliconflow.cn/',
            description: '国产AI模型托管与服务平台',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/6-硅基流动.svg'
        },
        {
            id: 'replicate',
            name: 'Replicate',
            url: 'https://replicate.com/',
            description: 'AI模型云端部署与运行平台',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/7-Replicate.svg'
        },
        {
            id: 'kaggle',
            name: 'Kaggle',
            url: 'https://www.kaggle.com/',
            description: '数据科学与AI竞赛社区，包含大量机器学习所需数据资源',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/8-Kaggle.svg'
        },
        {
            id: 'aimodel',
            name: '模力方舟',
            url: 'https://ai.gitee.com/',
            description: '由开源中国（Gitee）推出的AI应用开发的开源平台, 提供各种模型和数据集下载资源',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/9-模力方舟.svg'
        },
        {
            id: 'labelstudio',
            name: 'Label Studio',
            url: 'https://labelstud.io/',
            description: '免费的机器学习数据标注AI平台。支持图像、文本、音频、视频等多种数据的分类、检测',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/10-Label Studio.svg'
        },
        {
            id: 'cvat',
            name: 'CVAT',
            url: 'https://www.cvat.ai/',
            description: '计算机视觉标注工具，擅长图像和视频的物体检测、跟踪与分割，适合处理大型视觉数据集',
            category: 'community',
            logo: 'assets/logos/9-AI资源社区/11-CVAT.svg'
        },

        // ========== AI学习网站 ==========
        {
            id: 'mixlab',
            name: 'MixLab AI编程知识库',
            url: 'https://qwyofiv4bd3.feishu.cn/wiki/BEo9wlaDriAHfkkLS7Cc1kxVn9s',
            description: 'AI与编程学习资源库',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/1-MixLab AI编程知识库.svg'
        },
        {
            id: 'aidaxue',
            name: '科大讯飞AI大学堂',
            url: 'https://www.aidaxue.com/',
            description: 'AI技术与应用学习平台',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/2-科大讯飞AI大学堂.svg'
        },
        {
            id: 'uied',
            name: 'UIED学习社区',
            url: 'https://www.uied.cn/',
            description: 'UI与AI设计学习社区',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/3-UIED学习社区.svg'
        },
        {
            id: 'uisdc-learn',
            name: '优设网学习社区',
            url: 'https://www.uisdc.com/',
            description: 'AIGC设计师学习与交流平台',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/4-优设网学习社区.svg'
        },
        {
            id: 'aliyun-ai',
            name: '阿里云人工智学习路线',
            url: 'https://developer.aliyun.com/learning/roadmap/ai',
            description: '阿里云提供完整的人工智能学习路径',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/5-阿里云人工智学习路线.svg'
        },
        {
            id: 'deeplearningai',
            name: 'DeepLearning.AI',
            url: 'https://www.deeplearning.ai/',
            description: '由人工智能领域知名专家吴恩达(Andrew Ng)创立的AI学习平台',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/6-DeepLearning.AI.svg'
        },
        {
            id: 'mlbeginner',
            name: 'ML for Beginner',
            url: 'https://microsoft.github.io/ML-For-Beginners/',
            description: '微软云倡导者团队开发的面相初学者的机器学习课程项目',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/7-ML for Beginner.svg'
        },
        {
            id: 'coding',
            name: '腾讯扣叮',
            url: 'https://coding.qq.com/',
            description: '青少年编程与AI学习平台',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/8-腾讯扣叮.svg'
        },
        {
            id: 'huaweicloud',
            name: '华为云在线课堂',
            url: 'https://edu.huaweicloud.com/',
            description: '华为云技术与AI课程',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/9-华为云在线课堂.svg'
        },
        {
            id: 'showmeai',
            name: 'ShowMeAI知识社区',
            url: 'https://www.showmeai.tech/',
            description: '人工智能领域的资料库和学习社区',
            category: 'learning',
            logo: 'assets/logos/10-AI学习网站/10-ShowMeAI知识社区.svg'
        }
    ]
};

