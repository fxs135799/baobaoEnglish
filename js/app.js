// ========== 数据：260个单词（52周 x 5天）==========
const allWords = [
    // 第1-6周：动物（30个）
    {emoji:'🐱', english:'cat', chinese:'小猫'},
    {emoji:'🐶', english:'dog', chinese:'小狗'},
    {emoji:'🦆', english:'duck', chinese:'鸭子'},
    {emoji:'🐟', english:'fish', chinese:'小鱼'},
    {emoji:'🐦', english:'bird', chinese:'小鸟'},
    {emoji:'🐷', english:'pig', chinese:'小猪'},
    {emoji:'🐮', english:'cow', chinese:'奶牛'},
    {emoji:'🐑', english:'sheep', chinese:'绵羊'},
    {emoji:'🐵', english:'monkey', chinese:'猴子'},
    {emoji:'🐻', english:'bear', chinese:'小熊'},
    {emoji:'🐯', english:'tiger', chinese:'老虎'},
    {emoji:'🦁', english:'lion', chinese:'狮子'},
    {emoji:'🐘', english:'elephant', chinese:'大象'},
    {emoji:'🐰', english:'rabbit', chinese:'兔子'},
    {emoji:'🐸', english:'frog', chinese:'青蛙'},
    {emoji:'🐔', english:'chicken', chinese:'小鸡'},
    {emoji:'🐴', english:'horse', chinese:'小马'},
    {emoji:'🐭', english:'mouse', chinese:'老鼠'},
    {emoji:'🐼', english:'panda', chinese:'熊猫'},
    {emoji:'🐝', english:'bee', chinese:'蜜蜂'},
    {emoji:'🦊', english:'fox', chinese:'狐狸'},
    {emoji:'🐺', english:'wolf', chinese:'狼'},
    {emoji:'🦓', english:'zebra', chinese:'斑马'},
    {emoji:'🦒', english:'giraffe', chinese:'长颈鹿'},
    {emoji:'🦘', english:'kangaroo', chinese:'袋鼠'},
    {emoji:'🦛', english:'hippo', chinese:'河马'},
    {emoji:'🦏', english:'rhino', chinese:'犀牛'},
    {emoji:'🐊', english:'crocodile', chinese:'鳄鱼'},
    {emoji:'🦉', english:'owl', chinese:'猫头鹰'},
    {emoji:'🦇', english:'bat', chinese:'蝙蝠'},

    // 第7-10周：水果（20个）
    {emoji:'🍎', english:'apple', chinese:'苹果'},
    {emoji:'🍌', english:'banana', chinese:'香蕉'},
    {emoji:'🍇', english:'grape', chinese:'葡萄'},
    {emoji:'🍊', english:'orange', chinese:'橙子'},
    {emoji:'🍑', english:'peach', chinese:'桃子'},
    {emoji:'🍉', english:'watermelon', chinese:'西瓜'},
    {emoji:'🍓', english:'strawberry', chinese:'草莓'},
    {emoji:'🍒', english:'cherry', chinese:'樱桃'},
    {emoji:'🍐', english:'pear', chinese:'梨子'},
    {emoji:'🥭', english:'mango', chinese:'芒果'},
    {emoji:'🍋', english:'lemon', chinese:'柠檬'},
    {emoji:'🫐', english:'blueberry', chinese:'蓝莓'},
    {emoji:'🍍', english:'pineapple', chinese:'菠萝'},
    {emoji:'🥝', english:'kiwi', chinese:'猕猴桃'},
    {emoji:'🥥', english:'coconut', chinese:'椰子'},
    {emoji:'🍈', english:'melon', chinese:'哈密瓜'},
    {emoji:'🟣', english:'plum', chinese:'李子'},
    {emoji:'🟠', english:'apricot', chinese:'杏子'},
    {emoji:'🥑', english:'avocado', chinese:'牛油果'},
    {emoji:'🌰', english:'chestnut', chinese:'栗子'},

    // 第11-14周：颜色+数字（21个）
    {emoji:'❤️', english:'red', chinese:'红色'},
    {emoji:'💙', english:'blue', chinese:'蓝色'},
    {emoji:'💚', english:'green', chinese:'绿色'},
    {emoji:'💛', english:'yellow', chinese:'黄色'},
    {emoji:'💜', english:'purple', chinese:'紫色'},
    {emoji:'🌸', english:'pink', chinese:'粉色'},
    {emoji:'🖤', english:'black', chinese:'黑色'},
    {emoji:'🤍', english:'white', chinese:'白色'},
    {emoji:'🟧', english:'orange', chinese:'橙色'},
    {emoji:'🤎', english:'brown', chinese:'棕色'},
    {emoji:'🐘', english:'gray', chinese:'灰色'},
    {emoji:'1️⃣', english:'one', chinese:'一'},
    {emoji:'2️⃣', english:'two', chinese:'二'},
    {emoji:'3️⃣', english:'three', chinese:'三'},
    {emoji:'4️⃣', english:'four', chinese:'四'},
    {emoji:'5️⃣', english:'five', chinese:'五'},
    {emoji:'6️⃣', english:'six', chinese:'六'},
    {emoji:'7️⃣', english:'seven', chinese:'七'},
    {emoji:'8️⃣', english:'eight', chinese:'八'},
    {emoji:'9️⃣', english:'nine', chinese:'九'},
    {emoji:'🔟', english:'ten', chinese:'十'},

    // 第15-18周：食物（20个）
    {emoji:'🍞', english:'bread', chinese:'面包'},
    {emoji:'🎂', english:'cake', chinese:'蛋糕'},
    {emoji:'🥛', english:'milk', chinese:'牛奶'},
    {emoji:'🥚', english:'egg', chinese:'鸡蛋'},
    {emoji:'🍚', english:'rice', chinese:'米饭'},
    {emoji:'🍜', english:'noodle', chinese:'面条'},
    {emoji:'🥩', english:'meat', chinese:'肉'},
    {emoji:'🍪', english:'cookie', chinese:'饼干'},
    {emoji:'🍬', english:'candy', chinese:'糖果'},
    {emoji:'🍫', english:'chocolate', chinese:'巧克力'},
    {emoji:'🍦', english:'ice cream', chinese:'冰淇淋'},
    {emoji:'🍔', english:'hamburger', chinese:'汉堡'},
    {emoji:'🍕', english:'pizza', chinese:'披萨'},
    {emoji:'🥪', english:'sandwich', chinese:'三明治'},
    {emoji:'🥣', english:'soup', chinese:'汤'},
    {emoji:'🧃', english:'juice', chinese:'果汁'},
    {emoji:'🍵', english:'tea', chinese:'茶'},
    {emoji:'💧', english:'water', chinese:'水'},
    {emoji:'🧀', english:'cheese', chinese:'奶酪'},
    {emoji:'🥗', english:'salad', chinese:'沙拉'},

    // 第19-20周：食物+家庭（12个）
    {emoji:'🌭', english:'hot dog', chinese:'热狗'},
    {emoji:'🍩', english:'donut', chinese:'甜甜圈'},
    {emoji:'🍿', english:'popcorn', chinese:'爆米花'},
    {emoji:'🥧', english:'pie', chinese:'派'},
    {emoji:'🍮', english:'pudding', chinese:'布丁'},
    {emoji:'🍯', english:'honey', chinese:'蜂蜜'},
    {emoji:'👩', english:'mom', chinese:'妈妈'},
    {emoji:'👨', english:'dad', chinese:'爸爸'},
    {emoji:'👶', english:'baby', chinese:'宝宝'},
    {emoji:'👦', english:'brother', chinese:'哥哥'},
    {emoji:'👧', english:'sister', chinese:'姐姐'},
    {emoji:'👴', english:'grandpa', chinese:'爷爷'},

    // 第21-22周：家庭+身体（13个）
    {emoji:'👵', english:'grandma', chinese:'奶奶'},
    {emoji:'🤝', english:'friend', chinese:'朋友'},
    {emoji:'👩‍🏫', english:'teacher', chinese:'老师'},
    {emoji:'👨‍⚕️', english:'doctor', chinese:'医生'},
    {emoji:'👮', english:'police', chinese:'警察'},
    {emoji:'👨‍🚒', english:'fireman', chinese:'消防员'},
    {emoji:'👤', english:'head', chinese:'头'},
    {emoji:'👁️', english:'eye', chinese:'眼睛'},
    {emoji:'👂', english:'ear', chinese:'耳朵'},
    {emoji:'👃', english:'nose', chinese:'鼻子'},
    {emoji:'👄', english:'mouth', chinese:'嘴巴'},
    {emoji:'✋', english:'hand', chinese:'手'},
    {emoji:'💪', english:'arm', chinese:'手臂'},

    // 第23周：身体+动作（7个）
    {emoji:'🦵', english:'leg', chinese:'腿'},
    {emoji:'🦶', english:'foot', chinese:'脚'},
    {emoji:'💇', english:'hair', chinese:'头发'},
    {emoji:'😊', english:'face', chinese:'脸'},
    {emoji:'🦷', english:'tooth', chinese:'牙齿'},
    {emoji:'🏃', english:'run', chinese:'跑'},
    {emoji:'⬆️', english:'jump', chinese:'跳'},

    // 第24-25周：动作（10个）
    {emoji:'🚶', english:'walk', chinese:'走'},
    {emoji:'🍽️', english:'eat', chinese:'吃'},
    {emoji:'🥤', english:'drink', chinese:'喝'},
    {emoji:'😴', english:'sleep', chinese:'睡'},
    {emoji:'🎮', english:'play', chinese:'玩'},
    {emoji:'🎤', english:'sing', chinese:'唱'},
    {emoji:'💃', english:'dance', chinese:'跳舞'},
    {emoji:'🎨', english:'draw', chinese:'画'},
    {emoji:'📖', english:'read', chinese:'读'},
    {emoji:'🏊', english:'swim', chinese:'游泳'},

    // 第26-27周：自然（10个）
    {emoji:'☀️', english:'sun', chinese:'太阳'},
    {emoji:'🌙', english:'moon', chinese:'月亮'},
    {emoji:'⭐', english:'star', chinese:'星星'},
    {emoji:'🌧️', english:'rain', chinese:'雨'},
    {emoji:'❄️', english:'snow', chinese:'雪'},
    {emoji:'☁️', english:'cloud', chinese:'云'},
    {emoji:'🌸', english:'flower', chinese:'花'},
    {emoji:'🌳', english:'tree', chinese:'树'},
    {emoji:'🌱', english:'grass', chinese:'草'},
    {emoji:'⛰️', english:'mountain', chinese:'山'},

    // 第28周：自然+物品（5个）
    {emoji:'🌊', english:'river', chinese:'河'},
    {emoji:'🌊', english:'sea', chinese:'大海'},
    {emoji:'⚽', english:'ball', chinese:'球'},
    {emoji:'🚗', english:'car', chinese:'汽车'},
    {emoji:'📚', english:'book', chinese:'书'},

    // 第29-30周：物品（10个）
    {emoji:'✏️', english:'pen', chinese:'笔'},
    {emoji:'🧸', english:'toy', chinese:'玩具'},
    {emoji:'🛏️', english:'bed', chinese:'床'},
    {emoji:'🪑', english:'chair', chinese:'椅子'},
    {emoji:'🪑', english:'table', chinese:'桌子'},
    {emoji:'🚪', english:'door', chinese:'门'},
    {emoji:'🪟', english:'window', chinese:'窗户'},
    {emoji:'📱', english:'phone', chinese:'电话'},
    {emoji:'⏰', english:'clock', chinese:'时钟'},
    {emoji:'💡', english:'light', chinese:'灯'},

    // 第31周：物品+衣服（5个）
    {emoji:'🎒', english:'bag', chinese:'书包'},
    {emoji:'☂️', english:'umbrella', chinese:'雨伞'},
    {emoji:'🧢', english:'hat', chinese:'帽子'},
    {emoji:'👟', english:'shoe', chinese:'鞋子'},
    {emoji:'🧦', english:'sock', chinese:'袜子'},

    // 第32周：衣服（5个）
    {emoji:'🧥', english:'coat', chinese:'外套'},
    {emoji:'👖', english:'pants', chinese:'裤子'},
    {emoji:'👗', english:'dress', chinese:'裙子'},
    {emoji:'👘', english:'skirt', chinese:'短裙'},
    {emoji:'👔', english:'shirt', chinese:'衬衫'},

    // 第33周：衣服+情绪（5个）
    {emoji:'👕', english:'T-shirt', chinese:'T恤'},
    {emoji:'🧣', english:'scarf', chinese:'围巾'},
    {emoji:'😊', english:'happy', chinese:'开心'},
    {emoji:'😢', english:'sad', chinese:'难过'},
    {emoji:'😠', english:'angry', chinese:'生气'},

    // 第34周：情绪（5个）
    {emoji:'😱', english:'scared', chinese:'害怕'},
    {emoji:'😫', english:'tired', chinese:'累'},
    {emoji:'😲', english:'surprised', chinese:'惊讶'},
    {emoji:'😭', english:'cry', chinese:'哭'},
    {emoji:'😆', english:'laugh', chinese:'笑'},

    // 第35周：情绪+地点（5个）
    {emoji:'🙂', english:'smile', chinese:'微笑'},
    {emoji:'🤗', english:'hug', chinese:'拥抱'},
    {emoji:'🏠', english:'home', chinese:'家'},
    {emoji:'🏫', english:'school', chinese:'学校'},
    {emoji:'🌳', english:'park', chinese:'公园'},

    // 第36周：地点（5个）
    {emoji:'🏥', english:'hospital', chinese:'医院'},
    {emoji:'🦁', english:'zoo', chinese:'动物园'},
    {emoji:'🚜', english:'farm', chinese:'农场'},
    {emoji:'🏪', english:'shop', chinese:'商店'},
    {emoji:'🍽️', english:'restaurant', chinese:'餐厅'},

    // 第37周：地点+交通工具（5个）
    {emoji:'🚽', english:'toilet', chinese:'厕所'},
    {emoji:'🍳', english:'kitchen', chinese:'厨房'},
    {emoji:'🚌', english:'bus', chinese:'公交车'},
    {emoji:'🚆', english:'train', chinese:'火车'},
    {emoji:'✈️', english:'plane', chinese:'飞机'},

    // 第38周：交通工具（5个）
    {emoji:'🚢', english:'ship', chinese:'船'},
    {emoji:'🚲', english:'bike', chinese:'自行车'},
    {emoji:'🛵', english:'motorcycle', chinese:'摩托车'},
    {emoji:'🚕', english:'taxi', chinese:'出租车'},
    {emoji:'🚚', english:'truck', chinese:'卡车'},

    // 第39周：交通工具+昆虫（5个）
    {emoji:'🚑', english:'ambulance', chinese:'救护车'},
    {emoji:'🚇', english:'subway', chinese:'地铁'},
    {emoji:'🦋', english:'butterfly', chinese:'蝴蝶'},
    {emoji:'🐜', english:'ant', chinese:'蚂蚁'},
    {emoji:'🕷️', english:'spider', chinese:'蜘蛛'},

    // 第40周：昆虫+形状（5个）
    {emoji:'🐌', english:'snail', chinese:'蜗牛'},
    {emoji:'🐞', english:'ladybug', chinese:'瓢虫'},
    {emoji:'🦀', english:'crab', chinese:'螃蟹'},
    {emoji:'🐢', english:'turtle', chinese:'乌龟'},
    {emoji:'🐍', english:'snake', chinese:'蛇'},

    // 第41周：形状（5个）
    {emoji:'⭕', english:'circle', chinese:'圆形'},
    {emoji:'🟥', english:'square', chinese:'正方形'},
    {emoji:'🔺', english:'triangle', chinese:'三角形'},
    {emoji:'⭐', english:'star', chinese:'星星'},
    {emoji:'❤️', english:'heart', chinese:'心形'},

    // 第42周：形状+玩具（5个）
    {emoji:'♦️', english:'diamond', chinese:'菱形'},
    {emoji:'🟩', english:'rectangle', chinese:'长方形'},
    {emoji:'🥚', english:'oval', chinese:'椭圆形'},
    {emoji:'🪁', english:'kite', chinese:'风筝'},
    {emoji:'🎈', english:'balloon', chinese:'气球'},

    // 第43周：玩具+日常（5个）
    {emoji:'🛝', english:'slide', chinese:'滑梯'},
    {emoji:'🎪', english:'swing', chinese:'秋千'},
    {emoji:'🧸', english:'doll', chinese:'娃娃'},
    {emoji:'🤖', english:'robot', chinese:'机器人'},
    {emoji:'🎎', english:'puppet', chinese:'木偶'},

    // 第44周：玩具+日常（5个）
    {emoji:'🧱', english:'blocks', chinese:'积木'},
    {emoji:'👋', english:'hello', chinese:'你好'},
    {emoji:'👋', english:'bye', chinese:'再见'},
    {emoji:'🙏', english:'thank you', chinese:'谢谢'},
    {emoji:'🙏', english:'please', chinese:'请'},

    // 第45周：日常（5个）
    {emoji:'😔', english:'sorry', chinese:'对不起'},
    {emoji:'🌅', english:'good morning', chinese:'早上好'},
    {emoji:'🌙', english:'good night', chinese:'晚安'},
    {emoji:'✅', english:'yes', chinese:'是'},
    {emoji:'👍', english:'good', chinese:'好的'},

    // 第46周：日常+方向（5个）
    {emoji:'❌', english:'no', chinese:'不是'},
    {emoji:'❤️', english:'love', chinese:'爱'},
    {emoji:'⬆️', english:'up', chinese:'上'},
    {emoji:'⬇️', english:'down', chinese:'下'},
    {emoji:'⬅️', english:'left', chinese:'左'},

    // 第47周：方向+大小（5个）
    {emoji:'➡️', english:'right', chinese:'右'},
    {emoji:'🐘', english:'big', chinese:'大'},
    {emoji:'🐭', english:'small', chinese:'小'},
    {emoji:'🔥', english:'hot', chinese:'热'},
    {emoji:'❄️', english:'cold', chinese:'冷'},

    // 第48周：状态+动物（5个）
    {emoji:'✨', english:'clean', chinese:'干净'},
    {emoji:'🧹', english:'dirty', chinese:'脏'},
    {emoji:'🚀', english:'fast', chinese:'快'},
    {emoji:'🐐', english:'goat', chinese:'山羊'},
    {emoji:'🦌', english:'deer', chinese:'鹿'},

    // 第49周：动物+食物（5个）
    {emoji:'🐫', english:'camel', chinese:'骆驼'},
    {emoji:'🦚', english:'peacock', chinese:'孔雀'},
    {emoji:'🥜', english:'peanut', chinese:'花生'},
    {emoji:'🥕', english:'carrot', chinese:'胡萝卜'},
    {emoji:'🍅', english:'tomato', chinese:'番茄'},

    // 第50周：食物（5个）
    {emoji:'🥔', english:'potato', chinese:'土豆'},
    {emoji:'🌽', english:'corn', chinese:'玉米'},
    {emoji:'🌬️', english:'wind', chinese:'风'},
    {emoji:'🌫️', english:'fog', chinese:'雾'},
    {emoji:'🌈', english:'rainbow', chinese:'彩虹'},

    // 第51-52周：自然+其他（5个）
    {emoji:'⚡', english:'thunder', chinese:'雷'},
    {emoji:'🥁', english:'drum', chinese:'鼓'},
    {emoji:'🐱', english:'cat', chinese:'小猫'},
    {emoji:'🍎', english:'apple', chinese:'苹果'},
    {emoji:'❤️', english:'red', chinese:'红色'}
];

// 工具函数
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// 生成52周数据
const weeks = [];
for (let i = 0; i < 52; i++) {
    weeks.push({
        weekNum: i + 1,
        days: allWords.slice(i * 5, i * 5 + 5)
    });
}

const dayNames = ['周一', '周二', '周三', '周四', '周五'];
const STORAGE_KEY = 'babyEnglishPlan';

// ========== 状态 ==========
let learnedCount = 0;
let currentWeek = 0;
let currentDayIndex = 0;
let isReview = false;

let examWeek = 0;
let examQuestions = [];
let currentExamIndex = 0;
let examScore = 0;

// ========== 初始化 ==========
function init() {
    loadProgress();
    currentWeek = Math.min(51, Math.floor(learnedCount / 5));
    updatePlanUI();
}

// ========== 页面导航 ==========
function showPage(id) {
    const el = document.getElementById(id);
    if (!el) {
        console.error('Page not found:', id);
        return;
    }
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
}

function goToIntro() {
    showPage('intro-page');
}

function goToPlan() {
    showPage('plan-page');
    updatePlanUI();
}

function goToComplete() {
    showPage('complete-page');
}

function startDay(weekIdx, dayIdx) {
    const globalDay = weekIdx * 5 + dayIdx;
    if (globalDay > learnedCount) return; // 锁定

    isReview = globalDay < learnedCount;
    currentWeek = weekIdx;
    currentDayIndex = dayIdx;
    showPage('learn-page');

    document.getElementById('learn-week-num').textContent = weekIdx + 1;
    document.getElementById('learn-day-name').textContent = dayNames[dayIdx];

    loadWord();
}

function quitDay() {
    goToPlan();
}

function finishDay() {
    if (!isReview) {
        const globalDay = currentWeek * 5 + currentDayIndex;
        if (globalDay === learnedCount) {
            learnedCount++;
            saveProgress();
        }
    }
    const title = document.getElementById('complete-title');
    const text = document.getElementById('complete-text');
    const star = document.getElementById('complete-star');
    if (title) title.textContent = '今日学习完成！';
    if (star) star.textContent = '⭐';
    if (learnedCount >= 260) {
        text.textContent = '恭喜宝宝！52周计划全部完成！';
    } else if ((currentWeek * 5 + currentDayIndex) % 5 === 4) {
        text.textContent = '本周完成！宝宝真棒！';
    } else {
        text.textContent = '宝宝真棒！明天见！';
    }
    goToComplete();
}

// ========== 考试 ==========
function startExam(weekIdx) {
    if (!document.getElementById('exam-page')) {
        alert('页面加载不完整，请按 Ctrl+F5 强制刷新后重试');
        return;
    }
    try {
        examWeek = weekIdx;
        examScore = 0;
        currentExamIndex = 0;

        const weekWords = weeks[weekIdx].days;
        if (!weekWords || weekWords.length === 0) {
            alert('本周没有单词数据');
            return;
        }

        // 内联打乱函数，避免浏览器缓存旧版 JS 导致 shuffle 未定义
        function doShuffle(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        examQuestions = weekWords.map((target) => {
            let distractors = weekWords.filter((w) => w.english !== target.english);
            distractors = doShuffle(distractors).slice(0, 3);
            const options = doShuffle([target, ...distractors]);
            return { target, options };
        });

        showPage('exam-page');
        document.getElementById('exam-week-num').textContent = weekIdx + 1;
        renderExamProgress();
        loadExamQuestion();
    } catch (e) {
        alert('考试启动失败: ' + (e.message || e));
        console.error('考试启动失败:', e);
    }
}

function playExamWord() {
    const q = examQuestions[currentExamIndex];
    if (!q) return;
    const utter = new SpeechSynthesisUtterance(q.target.english);
    utter.lang = 'en-US';
    utter.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
}

function loadExamQuestion() {
    const q = examQuestions[currentExamIndex];
    document.getElementById('exam-hint').textContent = '👂 第 ' + (currentExamIndex + 1) + ' 题，听听是什么？';

    const optsDiv = document.getElementById('exam-options');
    optsDiv.innerHTML = '';
    q.options.forEach((opt) => {
        const btn = document.createElement('div');
        btn.className = 'exam-option';
        btn.textContent = opt.emoji;
        btn.onclick = () => checkExamAnswer(opt, btn);
        optsDiv.appendChild(btn);
    });

    setTimeout(() => playExamWord(), 500);
}

function checkExamAnswer(selectedOpt, btnEl) {
    const q = examQuestions[currentExamIndex];
    const optsDiv = document.getElementById('exam-options');
    const btns = optsDiv.querySelectorAll('.exam-option');

    // 禁用所有点击
    btns.forEach((b) => (b.style.pointerEvents = 'none'));

    if (selectedOpt.english === q.target.english) {
        btnEl.style.borderColor = '#2ecc71';
        btnEl.style.background = '#e8f8f5';
        examScore++;
        showFeedback(true, '太棒了！');
    } else {
        btnEl.classList.add('wrong');
        // 高亮正确答案
        q.options.forEach((opt, idx) => {
            if (opt.english === q.target.english) {
                btns[idx].style.borderColor = '#2ecc71';
                btns[idx].style.background = '#e8f8f5';
            }
        });
        showFeedback(false, '正确答案是 ' + q.target.chinese);
    }

    updateExamProgress();
    setTimeout(() => {
        nextExamQuestion();
    }, 1500);
}

function nextExamQuestion() {
    currentExamIndex++;
    if (currentExamIndex >= examQuestions.length) {
        finishExam();
    } else {
        loadExamQuestion();
    }
}

function renderExamProgress() {
    const div = document.getElementById('exam-progress');
    div.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const dot = document.createElement('div');
        dot.className = 'exam-dot';
        dot.id = 'exam-dot-' + i;
        div.appendChild(dot);
    }
}

function updateExamProgress() {
    for (let i = 0; i < 5; i++) {
        const dot = document.getElementById('exam-dot-' + i);
        if (!dot) continue;
        dot.classList.remove('correct', 'wrong');
        if (i < examScore) dot.classList.add('correct');
        else if (i < currentExamIndex) dot.classList.add('wrong');
    }
}

function finishExam() {
    const title = document.getElementById('complete-title');
    const text = document.getElementById('complete-text');
    const star = document.getElementById('complete-star');
    if (title) title.textContent = '考试完成！';
    if (text) text.textContent = '答对 ' + examScore + ' / 5 题';
    if (star) star.textContent = examScore >= 5 ? '⭐' : (examScore > 0 ? '⭐' : '💪');
    showPage('complete-page');
}

function quitExam() {
    goToPlan();
}

// ========== 计划页 ==========
function updatePlanUI() {
    document.getElementById('plan-week-num').textContent = currentWeek + 1;
    document.getElementById('learned-count').textContent = learnedCount;
    document.getElementById('plan-progress-fill').style.width = (learnedCount / 260 * 100) + '%';

    const grid = document.getElementById('days-grid');
    grid.innerHTML = '';

    const weekData = weeks[currentWeek];
    weekData.days.forEach((word, idx) => {
        const globalDay = currentWeek * 5 + idx;
        const card = document.createElement('div');
        card.className = 'day-card';
        if (globalDay < learnedCount) card.classList.add('completed');
        else if (globalDay === learnedCount) card.classList.add('today');
        else card.classList.add('locked');

        let status = '';
        if (globalDay < learnedCount) status = '✅';
        else if (globalDay === learnedCount) status = '🔥';
        else status = '🔒';

        card.innerHTML = `
            <div class="day-label">${dayNames[idx]}</div>
            <div class="day-emoji">${word.emoji}</div>
            <div class="day-word">${word.english}</div>
            <div class="day-status">${status}</div>
        `;

        if (globalDay <= learnedCount) {
            card.onclick = () => startDay(currentWeek, idx);
        }

        grid.appendChild(card);
    });

    // 本周考试入口
    const container = document.getElementById('exam-entry-container');
    if (container) {
        container.innerHTML = '';
        if (learnedCount >= currentWeek * 5 + 5) {
            container.innerHTML = `<button class="btn exam-btn" onclick="startExam(${currentWeek})">📝 本周小考试</button>`;
        }
    }
}

function prevWeek() {
    if (currentWeek > 0) {
        currentWeek--;
        updatePlanUI();
    }
}

function nextWeek() {
    if (currentWeek < 51) {
        currentWeek++;
        updatePlanUI();
    }
}

// ========== 语音 ==========
function playWord() {
    const word = getCurrentWord();
    if (!word) return;
    const utter = new SpeechSynthesisUtterance(word.english);
    utter.lang = 'en-US';
    utter.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
}

function startSpeak() {
    onAnswerCorrect();
}

// ========== 学习逻辑 ==========
function getCurrentWord() {
    return weeks[currentWeek].days[currentDayIndex];
}

function loadWord() {
    const word = getCurrentWord();
    if (!word) return;

    document.getElementById('word-emoji').textContent = word.emoji;
    document.getElementById('word-english').textContent = word.english;
    document.getElementById('word-chinese').textContent = word.chinese;

    const card = document.getElementById('word-card');
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = '';
}

function checkAnswer(resultText) {
    const target = getCurrentWord().english.toLowerCase();
    const result = resultText.toLowerCase().replace(/[^a-z]/g, '');
    let correct = false;

    if (result.length === 0) {
        correct = false;
    } else if (result === target) {
        correct = true;
    } else if (result.includes(target) || target.includes(result)) {
        correct = true;
    } else if (levenshteinDistance(result, target) <= 1) {
        correct = true;
    }

    if (correct) {
        onAnswerCorrect();
    } else {
        showFeedback(false, '宝宝再说一次！');
    }
}

function onAnswerCorrect() {
    showFeedback(true, '太棒了！');
    setTimeout(() => {
        finishDay();
    }, 1500);
}

// ========== 反馈弹窗 ==========
function showFeedback(correct, text) {
    const overlay = document.getElementById('feedback-overlay');
    const emoji = document.getElementById('feedback-emoji');
    const feedbackText = document.getElementById('feedback-text');

    if (emoji) emoji.textContent = correct ? '⭐' : '😅';
    if (feedbackText) {
        feedbackText.textContent = text;
        feedbackText.className = 'feedback-text ' + (correct ? 'feedback-correct' : 'feedback-wrong');
    }
    if (overlay) overlay.classList.add('show');

    setTimeout(() => {
        if (overlay) overlay.classList.remove('show');
    }, 1500);
}

// ========== 本地存储 ==========
function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const data = JSON.parse(raw);
            learnedCount = data.learnedCount || 0;
        }
    } catch (e) {
        learnedCount = 0;
    }
}

function saveProgress() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ learnedCount }));
    } catch (e) {}
}

// ========== 编辑距离（简单容错） ==========
function levenshteinDistance(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;

    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + cost
            );
        }
    }
    return dp[m][n];
}

// ========== 启动 ==========
document.addEventListener('DOMContentLoaded', init);
