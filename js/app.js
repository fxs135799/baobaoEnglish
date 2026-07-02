// ========== 数据：260个单词（52周 x 5天）==========
const allWords = [
    // 第1-6周：动物（30个）
    {emoji:'🐱', english:'cat', chinese:'小猫', phrase:"Good morning! 早上好！", sentences:["This is a cat. 这是一只小猫。", "I see a cat. 我看见一只小猫。"]},
    {emoji:'🐶', english:'dog', chinese:'小狗', phrase:"Good night! 晚安！", sentences:["This is a dog. 这是一只小狗。", "I see a dog. 我看见一只小狗。"]},
    {emoji:'🦆', english:'duck', chinese:'鸭子', phrase:"Hello! 你好！", sentences:["This is a duck. 这是一只鸭子。", "I see a duck. 我看见一只鸭子。"]},
    {emoji:'🐟', english:'fish', chinese:'小鱼', phrase:"How are you? 你好吗？", sentences:["This is a fish. 这是一只小鱼。", "I see a fish. 我看见一只小鱼。"]},
    {emoji:'🐦', english:'bird', chinese:'小鸟', phrase:"I'm fine. 我很好。", sentences:["This is a bird. 这是一只小鸟。", "I see a bird. 我看见一只小鸟。"]},
    {emoji:'🐷', english:'pig', chinese:'小猪', phrase:"Thank you! 谢谢！", sentences:["This is a pig. 这是一只小猪。", "I see a pig. 我看见一只小猪。"]},
    {emoji:'🐮', english:'cow', chinese:'奶牛', phrase:"You're welcome. 不客气。", sentences:["This is a cow. 这是一只奶牛。", "I see a cow. 我看见一只奶牛。"]},
    {emoji:'🐑', english:'sheep', chinese:'绵羊', phrase:"Please! 请！", sentences:["This is a sheep. 这是一只绵羊。", "I see a sheep. 我看见一只绵羊。"]},
    {emoji:'🐵', english:'monkey', chinese:'猴子', phrase:"I'm sorry. 对不起。", sentences:["This is a monkey. 这是一只猴子。", "I see a monkey. 我看见一只猴子。"]},
    {emoji:'🐻', english:'bear', chinese:'小熊', phrase:"It's okay. 没关系。", sentences:["This is a bear. 这是一只小熊。", "I see a bear. 我看见一只小熊。"]},
    {emoji:'🐯', english:'tiger', chinese:'老虎', phrase:"I love you. 我爱你。", sentences:["This is a tiger. 这是一只老虎。", "I see a tiger. 我看见一只老虎。"]},
    {emoji:'🦁', english:'lion', chinese:'狮子', phrase:"I miss you. 我想你。", sentences:["This is a lion. 这是一只狮子。", "I see a lion. 我看见一只狮子。"]},
    {emoji:'🐘', english:'elephant', chinese:'大象', phrase:"Goodbye! 再见！", sentences:["This is an elephant. 这是一只大象。", "I see an elephant. 我看见一只大象。"]},
    {emoji:'🐰', english:'rabbit', chinese:'兔子', phrase:"See you! 回头见！", sentences:["This is a rabbit. 这是一只兔子。", "I see a rabbit. 我看见一只兔子。"]},
    {emoji:'🐸', english:'frog', chinese:'青蛙', phrase:"Come here! 过来！", sentences:["This is a frog. 这是一只青蛙。", "I see a frog. 我看见一只青蛙。"]},
    {emoji:'🐔', english:'chicken', chinese:'小鸡', phrase:"Let's go! 我们走吧！", sentences:["This is a chicken. 这是一只小鸡。", "I see a chicken. 我看见一只小鸡。"]},
    {emoji:'🐴', english:'horse', chinese:'小马', phrase:"Hurry up! 快点！", sentences:["This is a horse. 这是一只小马。", "I see a horse. 我看见一只小马。"]},
    {emoji:'🐭', english:'mouse', chinese:'老鼠', phrase:"Wait for me! 等等我！", sentences:["This is a mouse. 这是一只老鼠。", "I see a mouse. 我看见一只老鼠。"]},
    {emoji:'🐼', english:'panda', chinese:'熊猫', phrase:"Be careful! 小心！", sentences:["This is a panda. 这是一只熊猫。", "I see a panda. 我看见一只熊猫。"]},
    {emoji:'🐝', english:'bee', chinese:'蜜蜂', phrase:"Well done! 做得好！", sentences:["This is a bee. 这是一只蜜蜂。", "I see a bee. 我看见一只蜜蜂。"]},
    {emoji:'🦊', english:'fox', chinese:'狐狸', phrase:"Good job! 真棒！", sentences:["This is a fox. 这是一只狐狸。", "I see a fox. 我看见一只狐狸。"]},
    {emoji:'🐺', english:'wolf', chinese:'狼', phrase:"You are great! 你太棒了！", sentences:["This is a wolf. 这是一只狼。", "I see a wolf. 我看见一只狼。"]},
    {emoji:'🦓', english:'zebra', chinese:'斑马', phrase:"I'm happy. 我很开心。", sentences:["This is a zebra. 这是一只斑马。", "I see a zebra. 我看见一只斑马。"]},
    {emoji:'🦒', english:'giraffe', chinese:'长颈鹿', phrase:"I'm sad. 我很难过。", sentences:["This is a giraffe. 这是一只长颈鹿。", "I see a giraffe. 我看见一只长颈鹿。"]},
    {emoji:'🦘', english:'kangaroo', chinese:'袋鼠', phrase:"I'm scared. 我很害怕。", sentences:["This is a kangaroo. 这是一只袋鼠。", "I see a kangaroo. 我看见一只袋鼠。"]},
    {emoji:'🦛', english:'hippo', chinese:'河马', phrase:"I'm tired. 我累了。", sentences:["This is a hippo. 这是一只河马。", "I see a hippo. 我看见一只河马。"]},
    {emoji:'🦏', english:'rhino', chinese:'犀牛', phrase:"I'm hungry. 我饿了。", sentences:["This is a rhino. 这是一只犀牛。", "I see a rhino. 我看见一只犀牛。"]},
    {emoji:'🐊', english:'crocodile', chinese:'鳄鱼', phrase:"I'm thirsty. 我渴了。", sentences:["This is a crocodile. 这是一只鳄鱼。", "I see a crocodile. 我看见一只鳄鱼。"]},
    {emoji:'🦉', english:'owl', chinese:'猫头鹰', phrase:"I want water. 我想喝水。", sentences:["This is an owl. 这是一只猫头鹰。", "I see an owl. 我看见一只猫头鹰。"]},
    {emoji:'🦇', english:'bat', chinese:'蝙蝠', phrase:"I want to eat. 我想吃饭。", sentences:["This is a bat. 这是一只蝙蝠。", "I see a bat. 我看见一只蝙蝠。"]},

    // 第7-10周：水果（20个）
    {emoji:'🍎', english:'apple', chinese:'苹果', phrase:"Give me a hug. 抱抱我。", sentences:["This is an apple. 这是一个苹果。", "I eat the apple. 我吃苹果。"]},
    {emoji:'🍌', english:'banana', chinese:'香蕉', phrase:"Kiss me. 亲亲我。", sentences:["This is a banana. 这是一个香蕉。", "I eat the banana. 我吃香蕉。"]},
    {emoji:'🍇', english:'grape', chinese:'葡萄', phrase:"Help me! 帮帮我！", sentences:["This is a grape. 这是一个葡萄。", "I eat the grape. 我吃葡萄。"]},
    {emoji:'🍊', english:'orange', chinese:'橙子', phrase:"I can do it! 我能做到！", sentences:["It is orange. 它是橙子。", "I like orange. 我喜欢橙子。"]},
    {emoji:'🍑', english:'peach', chinese:'桃子', phrase:"I don't know. 我不知道。", sentences:["This is a peach. 这是一个桃子。", "I eat the peach. 我吃桃子。"]},
    {emoji:'🍉', english:'watermelon', chinese:'西瓜', phrase:"What is this? 这是什么？", sentences:["This is a watermelon. 这是一个西瓜。", "I eat the watermelon. 我吃西瓜。"]},
    {emoji:'🍓', english:'strawberry', chinese:'草莓', phrase:"Where is it? 它在哪里？", sentences:["This is a strawberry. 这是一个草莓。", "I eat the strawberry. 我吃草莓。"]},
    {emoji:'🍒', english:'cherry', chinese:'樱桃', phrase:"Here you are. 给你。", sentences:["This is a cherry. 这是一个樱桃。", "I eat the cherry. 我吃樱桃。"]},
    {emoji:'🍐', english:'pear', chinese:'梨子', phrase:"My turn! 轮到我了！", sentences:["This is a pear. 这是一个梨子。", "I eat the pear. 我吃梨子。"]},
    {emoji:'🥭', english:'mango', chinese:'芒果', phrase:"Your turn! 轮到你了！", sentences:["This is a mango. 这是一个芒果。", "I eat the mango. 我吃芒果。"]},
    {emoji:'🍋', english:'lemon', chinese:'柠檬', phrase:"Let's play! 我们一起玩！", sentences:["This is a lemon. 这是一个柠檬。", "I eat the lemon. 我吃柠檬。"]},
    {emoji:'🫐', english:'blueberry', chinese:'蓝莓', phrase:"I win! 我赢了！", sentences:["This is a blueberry. 这是一个蓝莓。", "I eat the blueberry. 我吃蓝莓。"]},
    {emoji:'🍍', english:'pineapple', chinese:'菠萝', phrase:"Let's share! 我们一起分享！", sentences:["This is a pineapple. 这是一个菠萝。", "I eat the pineapple. 我吃菠萝。"]},
    {emoji:'🥝', english:'kiwi', chinese:'猕猴桃', phrase:"It's mine! 这是我的！", sentences:["This is a kiwi. 这是一个猕猴桃。", "I eat the kiwi. 我吃猕猴桃。"]},
    {emoji:'🥥', english:'coconut', chinese:'椰子', phrase:"It's yours! 这是你的！", sentences:["This is a coconut. 这是一个椰子。", "I eat the coconut. 我吃椰子。"]},
    {emoji:'🍈', english:'melon', chinese:'哈密瓜', phrase:"Wash your hands. 洗手。", sentences:["This is a melon. 这是一个哈密瓜。", "I eat the melon. 我吃哈密瓜。"]},
    {emoji:'🟣', english:'plum', chinese:'李子', phrase:"Brush your teeth. 刷牙。", sentences:["This is a plum. 这是一个李子。", "I eat the plum. 我吃李子。"]},
    {emoji:'🟠', english:'apricot', chinese:'杏子', phrase:"Time to eat! 该吃饭了！", sentences:["This is an apricot. 这是一个杏子。", "I eat the apricot. 我吃杏子。"]},
    {emoji:'🥑', english:'avocado', chinese:'牛油果', phrase:"Time to sleep! 该睡觉了！", sentences:["This is an avocado. 这是一个牛油果。", "I eat the avocado. 我吃牛油果。"]},
    {emoji:'🌰', english:'chestnut', chinese:'栗子', phrase:"Get up! 起床！", sentences:["This is a chestnut. 这是一个栗子。", "I eat the chestnut. 我吃栗子。"]},

    // 第11-14周：颜色+数字（21个）
    {emoji:'❤️', english:'red', chinese:'红色', phrase:"Sit down! 坐下！", sentences:["It is red. 它是红色。", "I like red. 我喜欢红色。"]},
    {emoji:'💙', english:'blue', chinese:'蓝色', phrase:"Stand up! 站起来！", sentences:["It is blue. 它是蓝色。", "I like blue. 我喜欢蓝色。"]},
    {emoji:'💚', english:'green', chinese:'绿色', phrase:"Open the door. 开门。", sentences:["It is green. 它是绿色。", "I like green. 我喜欢绿色。"]},
    {emoji:'💛', english:'yellow', chinese:'黄色', phrase:"Close the door. 关门。", sentences:["It is yellow. 它是黄色。", "I like yellow. 我喜欢黄色。"]},
    {emoji:'💜', english:'purple', chinese:'紫色', phrase:"Turn on the light. 开灯。", sentences:["It is purple. 它是紫色。", "I like purple. 我喜欢紫色。"]},
    {emoji:'🌸', english:'pink', chinese:'粉色', phrase:"Turn off the light. 关灯。", sentences:["It is pink. 它是粉色。", "I like pink. 我喜欢粉色。"]},
    {emoji:'🖤', english:'black', chinese:'黑色', phrase:"Pick up your toys. 收拾玩具。", sentences:["It is black. 它是黑色。", "I like black. 我喜欢黑色。"]},
    {emoji:'🤍', english:'white', chinese:'白色', phrase:"Put on your shoes. 穿鞋子。", sentences:["It is white. 它是白色。", "I like white. 我喜欢白色。"]},
    {emoji:'🟧', english:'orange', chinese:'橙色', phrase:"Take off your coat. 脱外套。", sentences:["It is orange. 它是橙色。", "I like orange. 我喜欢橙色。"]},
    {emoji:'🤎', english:'brown', chinese:'棕色', phrase:"It's sunny. 晴天。", sentences:["It is brown. 它是棕色。", "I like brown. 我喜欢棕色。"]},
    {emoji:'🐘', english:'gray', chinese:'灰色', phrase:"It's rainy. 下雨了。", sentences:["It is gray. 它是灰色。", "I like gray. 我喜欢灰色。"]},
    {emoji:'1️⃣', english:'one', chinese:'一', phrase:"It's windy. 刮风了。", sentences:["I see one. 我看见一。", "I am one. 我一岁了。"]},
    {emoji:'2️⃣', english:'two', chinese:'二', phrase:"It's snowing. 下雪了。", sentences:["I see two. 我看见二。", "I am two. 我二岁了。"]},
    {emoji:'3️⃣', english:'three', chinese:'三', phrase:"It's hot. 很热。", sentences:["I see three. 我看见三。", "I am three. 我三岁了。"]},
    {emoji:'4️⃣', english:'four', chinese:'四', phrase:"It's cold. 很冷。", sentences:["I see four. 我看见四。", "I am four. 我四岁了。"]},
    {emoji:'5️⃣', english:'five', chinese:'五', phrase:"I like it. 我喜欢。", sentences:["I see five. 我看见五。", "I am five. 我五岁了。"]},
    {emoji:'6️⃣', english:'six', chinese:'六', phrase:"I don't like it. 我不喜欢。", sentences:["I see six. 我看见六。", "I am six. 我六岁了。"]},
    {emoji:'7️⃣', english:'seven', chinese:'七', phrase:"It's beautiful. 真漂亮。", sentences:["I see seven. 我看见七。", "I am seven. 我七岁了。"]},
    {emoji:'8️⃣', english:'eight', chinese:'八', phrase:"It's funny. 真有趣。", sentences:["I see eight. 我看见八。", "I am eight. 我八岁了。"]},
    {emoji:'9️⃣', english:'nine', chinese:'九', phrase:"So big! 好大呀！", sentences:["I see nine. 我看见九。", "I am nine. 我九岁了。"]},
    {emoji:'🔟', english:'ten', chinese:'十', phrase:"So small! 好小呀！", sentences:["I see ten. 我看见十。", "I am ten. 我十岁了。"]},

    // 第15-18周：食物（20个）
    {emoji:'🍞', english:'bread', chinese:'面包', phrase:"So cute! 好可爱！", sentences:["I eat bread. 我吃面包。", "The bread is yummy. 这个面包很好吃。"]},
    {emoji:'🎂', english:'cake', chinese:'蛋糕', phrase:"So yummy! 真好吃！", sentences:["I eat cake. 我吃蛋糕。", "The cake is yummy. 这个蛋糕很好吃。"]},
    {emoji:'🥛', english:'milk', chinese:'牛奶', phrase:"I feel sick. 我不舒服。", sentences:["I eat milk. 我吃牛奶。", "The milk is yummy. 这个牛奶很好吃。"]},
    {emoji:'🥚', english:'egg', chinese:'鸡蛋', phrase:"Call the doctor. 叫医生。", sentences:["I eat egg. 我吃鸡蛋。", "The egg is yummy. 这个鸡蛋很好吃。"]},
    {emoji:'🍚', english:'rice', chinese:'米饭', phrase:"Don't cry! 别哭！", sentences:["I eat rice. 我吃米饭。", "The rice is yummy. 这个米饭很好吃。"]},
    {emoji:'🍜', english:'noodle', chinese:'面条', phrase:"Don't be scared! 别害怕！", sentences:["I eat noodle. 我吃面条。", "The noodle is yummy. 这个面条很好吃。"]},
    {emoji:'🥩', english:'meat', chinese:'肉', phrase:"Be brave! 勇敢点！", sentences:["I eat meat. 我吃肉。", "The meat is yummy. 这个肉很好吃。"]},
    {emoji:'🍪', english:'cookie', chinese:'饼干', phrase:"Let's sing! 我们一起唱歌！", sentences:["I eat cookie. 我吃饼干。", "The cookie is yummy. 这个饼干很好吃。"]},
    {emoji:'🍬', english:'candy', chinese:'糖果', phrase:"Let's dance! 我们一起跳舞！", sentences:["I eat candy. 我吃糖果。", "The candy is yummy. 这个糖果很好吃。"]},
    {emoji:'🍫', english:'chocolate', chinese:'巧克力', phrase:"Let's run! 我们一起跑！", sentences:["I eat chocolate. 我吃巧克力。", "The chocolate is yummy. 这个巧克力很好吃。"]},
    {emoji:'🍦', english:'ice cream', chinese:'冰淇淋', phrase:"Let's swim! 我们一起游泳！", sentences:["I eat ice cream. 我吃冰淇淋。", "The ice cream is yummy. 这个冰淇淋很好吃。"]},
    {emoji:'🍔', english:'hamburger', chinese:'汉堡', phrase:"I can jump! 我会跳！", sentences:["I eat hamburger. 我吃汉堡。", "The hamburger is yummy. 这个汉堡很好吃。"]},
    {emoji:'🍕', english:'pizza', chinese:'披萨', phrase:"I can fly! 我会飞！", sentences:["I eat pizza. 我吃披萨。", "The pizza is yummy. 这个披萨很好吃。"]},
    {emoji:'🥪', english:'sandwich', chinese:'三明治', phrase:"Look at me! 看我！", sentences:["I eat sandwich. 我吃三明治。", "The sandwich is yummy. 这个三明治很好吃。"]},
    {emoji:'🥣', english:'soup', chinese:'汤', phrase:"Listen to me! 听我说！", sentences:["I eat soup. 我吃汤。", "The soup is yummy. 这个汤很好吃。"]},
    {emoji:'🧃', english:'juice', chinese:'果汁', phrase:"Follow me! 跟我来！", sentences:["I eat juice. 我吃果汁。", "The juice is yummy. 这个果汁很好吃。"]},
    {emoji:'🍵', english:'tea', chinese:'茶', phrase:"Go back! 回去！", sentences:["I eat tea. 我吃茶。", "The tea is yummy. 这个茶很好吃。"]},
    {emoji:'💧', english:'water', chinese:'水', phrase:"Stop! 停！", sentences:["I eat water. 我吃水。", "The water is yummy. 这个水很好吃。"]},
    {emoji:'🧀', english:'cheese', chinese:'奶酪', phrase:"Go! 走！", sentences:["I eat cheese. 我吃奶酪。", "The cheese is yummy. 这个奶酪很好吃。"]},
    {emoji:'🥗', english:'salad', chinese:'沙拉', phrase:"Yes! 是！", sentences:["I eat salad. 我吃沙拉。", "The salad is yummy. 这个沙拉很好吃。"]},

    // 第19-20周：食物+家庭（12个）
    {emoji:'🌭', english:'hot dog', chinese:'热狗', phrase:"No! 不！", sentences:["I eat hot dog. 我吃热狗。", "The hot dog is yummy. 这个热狗很好吃。"]},
    {emoji:'🍩', english:'donut', chinese:'甜甜圈', phrase:"Maybe. 也许吧。", sentences:["I eat donut. 我吃甜甜圈。", "The donut is yummy. 这个甜甜圈很好吃。"]},
    {emoji:'🍿', english:'popcorn', chinese:'爆米花', phrase:"I don't want to. 我不想。", sentences:["I eat popcorn. 我吃爆米花。", "The popcorn is yummy. 这个爆米花很好吃。"]},
    {emoji:'🥧', english:'pie', chinese:'派', phrase:"I want to go. 我想去。", sentences:["I eat pie. 我吃派。", "The pie is yummy. 这个派很好吃。"]},
    {emoji:'🍮', english:'pudding', chinese:'布丁', phrase:"I want to stay. 我想留下来。", sentences:["I eat pudding. 我吃布丁。", "The pudding is yummy. 这个布丁很好吃。"]},
    {emoji:'🍯', english:'honey', chinese:'蜂蜜', phrase:"Where are you? 你在哪里？", sentences:["I eat honey. 我吃蜂蜜。", "The honey is yummy. 这个蜂蜜很好吃。"]},
    {emoji:'👩', english:'mom', chinese:'妈妈', phrase:"I'm here! 我在这里！", sentences:["This is my mom. 这是我的妈妈。", "I love my mom. 我爱我的妈妈。"]},
    {emoji:'👨', english:'dad', chinese:'爸爸', phrase:"Let's read! 我们一起读书！", sentences:["This is my dad. 这是我的爸爸。", "I love my dad. 我爱我的爸爸。"]},
    {emoji:'👶', english:'baby', chinese:'宝宝', phrase:"Let's draw! 我们一起画画！", sentences:["This is my baby. 这是我的宝宝。", "I love my baby. 我爱我的宝宝。"]},
    {emoji:'👦', english:'brother', chinese:'哥哥', phrase:"What's your name? 你叫什么名字？", sentences:["This is my brother. 这是我的哥哥。", "I love my brother. 我爱我的哥哥。"]},
    {emoji:'👧', english:'sister', chinese:'姐姐', phrase:"My name is... 我的名字是...", sentences:["This is my sister. 这是我的姐姐。", "I love my sister. 我爱我的姐姐。"]},
    {emoji:'👴', english:'grandpa', chinese:'爷爷', phrase:"How old are you? 你几岁了？", sentences:["This is my grandpa. 这是我的爷爷。", "I love my grandpa. 我爱我的爷爷。"]},

    // 第21-22周：家庭+身体（13个）
    {emoji:'👵', english:'grandma', chinese:'奶奶', phrase:"I'm five years old. 我五岁了。", sentences:["This is my grandma. 这是我的奶奶。", "I love my grandma. 我爱我的奶奶。"]},
    {emoji:'🤝', english:'friend', chinese:'朋友', phrase:"Nice to meet you! 很高兴认识你！", sentences:["This is a friend. 这是一个朋友。", "I have a friend. 我有一个朋友。"]},
    {emoji:'👩‍🏫', english:'teacher', chinese:'老师', phrase:"Have a good day! 祝你今天愉快！", sentences:["This is a teacher. 这是一个老师。", "I have a teacher. 我有一个老师。"]},
    {emoji:'👨‍⚕️', english:'doctor', chinese:'医生', phrase:"Sweet dreams! 做个好梦！", sentences:["This is a doctor. 这是一个医生。", "I have a doctor. 我有一个医生。"]},
    {emoji:'👮', english:'police', chinese:'警察', phrase:"I love mommy. 我爱妈妈。", sentences:["This is a police. 这是一个警察。", "I have a police. 我有一个警察。"]},
    {emoji:'👨‍🚒', english:'fireman', chinese:'消防员', phrase:"I love daddy. 我爱爸爸。", sentences:["This is a fireman. 这是一个消防员。", "I have a fireman. 我有一个消防员。"]},
    {emoji:'👤', english:'head', chinese:'头', phrase:"Happy birthday! 生日快乐！", sentences:["This is my head. 这是我的头。", "I have a head. 我有一个头。"]},
    {emoji:'👁️', english:'eye', chinese:'眼睛', phrase:"Merry Christmas! 圣诞快乐！", sentences:["This is my eye. 这是我的眼睛。", "I have an eye. 我有一个眼睛。"]},
    {emoji:'👂', english:'ear', chinese:'耳朵', phrase:"Happy New Year! 新年快乐！", sentences:["This is my ear. 这是我的耳朵。", "I have an ear. 我有一个耳朵。"]},
    {emoji:'👃', english:'nose', chinese:'鼻子', phrase:"Trick or treat! 不给糖就捣蛋！", sentences:["This is my nose. 这是我的鼻子。", "I have a nose. 我有一个鼻子。"]},
    {emoji:'👄', english:'mouth', chinese:'嘴巴', phrase:"Let's take a photo! 我们一起拍照！", sentences:["This is my mouth. 这是我的嘴巴。", "I have a mouth. 我有一个嘴巴。"]},
    {emoji:'✋', english:'hand', chinese:'手', phrase:"Say cheese! 说茄子！", sentences:["This is my hand. 这是我的手。", "I have a hand. 我有一个手。"]},
    {emoji:'💪', english:'arm', chinese:'手臂', phrase:"Make a wish! 许个愿！", sentences:["This is my arm. 这是我的手臂。", "I have an arm. 我有一个手臂。"]},

    // 第23周：身体+动作（7个）
    {emoji:'🦵', english:'leg', chinese:'腿', phrase:"Blow the candles! 吹蜡烛！", sentences:["This is my leg. 这是我的腿。", "I have a leg. 我有一个腿。"]},
    {emoji:'🦶', english:'foot', chinese:'脚', phrase:"I can see you. 我能看见你。", sentences:["This is my foot. 这是我的脚。", "I have a foot. 我有一个脚。"]},
    {emoji:'💇', english:'hair', chinese:'头发', phrase:"I can hear you. 我能听见你。", sentences:["This is my hair. 这是我的头发。", "I have a hair. 我有一个头发。"]},
    {emoji:'😊', english:'face', chinese:'脸', phrase:"Touch your nose. 摸你的鼻子。", sentences:["This is my face. 这是我的脸。", "I have a face. 我有一个脸。"]},
    {emoji:'🦷', english:'tooth', chinese:'牙齿', phrase:"Clap your hands. 拍拍手。", sentences:["This is my tooth. 这是我的牙齿。", "I have a tooth. 我有一个牙齿。"]},
    {emoji:'🏃', english:'run', chinese:'跑', phrase:"Stamp your feet. 跺跺脚。", sentences:["I can run. 我会跑。", "I like to run. 我喜欢跑。"]},
    {emoji:'⬆️', english:'jump', chinese:'跳', phrase:"Shake your head. 摇摇头。", sentences:["I can jump. 我会跳。", "I like to jump. 我喜欢跳。"]},

    // 第24-25周：动作（10个）
    {emoji:'🚶', english:'walk', chinese:'走', phrase:"Nod your head. 点点头。", sentences:["I can walk. 我会走。", "I like to walk. 我喜欢走。"]},
    {emoji:'🍽️', english:'eat', chinese:'吃', phrase:"Close your eyes. 闭上眼睛。", sentences:["I can eat. 我会吃。", "I like to eat. 我喜欢吃。"]},
    {emoji:'🥤', english:'drink', chinese:'喝', phrase:"Open your eyes. 睁开眼睛。", sentences:["I can drink. 我会喝。", "I like to drink. 我喜欢喝。"]},
    {emoji:'😴', english:'sleep', chinese:'睡', phrase:"Wave goodbye! 挥手再见！", sentences:["I can sleep. 我会睡。", "I like to sleep. 我喜欢睡。"]},
    {emoji:'🎮', english:'play', chinese:'玩', phrase:"High five! 击掌！", sentences:["I can play. 我会玩。", "I like to play. 我喜欢玩。"]},
    {emoji:'🎤', english:'sing', chinese:'唱', phrase:"Peekaboo! 躲猫猫！", sentences:["I can sing. 我会唱。", "I like to sing. 我喜欢唱。"]},
    {emoji:'💃', english:'dance', chinese:'跳舞', phrase:"Where did it go? 它去哪了？", sentences:["I can dance. 我会跳舞。", "I like to dance. 我喜欢跳舞。"]},
    {emoji:'🎨', english:'draw', chinese:'画', phrase:"Here it is! 在这里！", sentences:["I can draw. 我会画。", "I like to draw. 我喜欢画。"]},
    {emoji:'📖', english:'read', chinese:'读', phrase:"Up and down! 上上下下！", sentences:["I can read. 我会读。", "I like to read. 我喜欢读。"]},
    {emoji:'🏊', english:'swim', chinese:'游泳', phrase:"Left and right! 左左右右！", sentences:["I can swim. 我会游泳。", "I like to swim. 我喜欢游泳。"]},

    // 第26-27周：自然（10个）
    {emoji:'☀️', english:'sun', chinese:'太阳', phrase:"Front and back! 前前后后！", sentences:["The sun is bright. 太阳很亮。", "I see the sun. 我看见太阳。"]},
    {emoji:'🌙', english:'moon', chinese:'月亮', phrase:"Round and round! 转圈圈！", sentences:["The moon is bright. 月亮很亮。", "I see the moon. 我看见月亮。"]},
    {emoji:'⭐', english:'star', chinese:'星星', phrase:"Fast and slow! 快和慢！", sentences:["It is a star. 这是一个星星。", "I draw a star. 我画一个星星。"]},
    {emoji:'🌧️', english:'rain', chinese:'雨', phrase:"Loud and quiet! 大声和安静！", sentences:["The rain is bright. 雨很亮。", "I see the rain. 我看见雨。"]},
    {emoji:'❄️', english:'snow', chinese:'雪', phrase:"Hot and cold! 热和冷！", sentences:["The snow is bright. 雪很亮。", "I see the snow. 我看见雪。"]},
    {emoji:'☁️', english:'cloud', chinese:'云', phrase:"Big and small! 大和小！", sentences:["The cloud is bright. 云很亮。", "I see the cloud. 我看见云。"]},
    {emoji:'🌸', english:'flower', chinese:'花', phrase:"Tall and short! 高和矮！", sentences:["The flower is bright. 花很亮。", "I see the flower. 我看见花。"]},
    {emoji:'🌳', english:'tree', chinese:'树', phrase:"Clean up! 收拾干净！", sentences:["The tree is bright. 树很亮。", "I see the tree. 我看见树。"]},
    {emoji:'🌱', english:'grass', chinese:'草', phrase:"Throw it away! 扔掉！", sentences:["The grass is bright. 草很亮。", "I see the grass. 我看见草。"]},
    {emoji:'⛰️', english:'mountain', chinese:'山', phrase:"Put it back! 放回去！", sentences:["The mountain is bright. 山很亮。", "I see the mountain. 我看见山。"]},

    // 第28周：自然+物品（5个）
    {emoji:'🌊', english:'river', chinese:'河', phrase:"Be quiet! 安静！", sentences:["The river is bright. 河很亮。", "I see the river. 我看见河。"]},
    {emoji:'🌊', english:'sea', chinese:'大海', phrase:"No running! 不要跑！", sentences:["The sea is bright. 大海很亮。", "I see the sea. 我看见大海。"]},
    {emoji:'⚽', english:'ball', chinese:'球', phrase:"No touching! 不要摸！", sentences:["This is a ball. 这是一个球。", "I have a ball. 我有一个球。"]},
    {emoji:'🚗', english:'car', chinese:'汽车', phrase:"Look out! 小心！", sentences:["This is a car. 这是一个汽车。", "I have a car. 我有一个汽车。"]},
    {emoji:'📚', english:'book', chinese:'书', phrase:"Watch out! 注意！", sentences:["This is a book. 这是一个书。", "I have a book. 我有一个书。"]},

    // 第29-30周：物品（10个）
    {emoji:'✏️', english:'pen', chinese:'笔', phrase:"Let's rest. 我们休息一下。", sentences:["This is a pen. 这是一个笔。", "I have a pen. 我有一个笔。"]},
    {emoji:'🧸', english:'toy', chinese:'玩具', phrase:"Are you ready? 准备好了吗？", sentences:["This is a toy. 这是一个玩具。", "I have a toy. 我有一个玩具。"]},
    {emoji:'🛏️', english:'bed', chinese:'床', phrase:"Ready, go! 预备，跑！", sentences:["This is a bed. 这是一个床。", "I have a bed. 我有一个床。"]},
    {emoji:'🪑', english:'chair', chinese:'椅子', phrase:"One, two, three! 一、二、三！", sentences:["This is a chair. 这是一个椅子。", "I have a chair. 我有一个椅子。"]},
    {emoji:'🪑', english:'table', chinese:'桌子', phrase:"Count with me! 跟我一起数！", sentences:["This is a table. 这是一个桌子。", "I have a table. 我有一个桌子。"]},
    {emoji:'🚪', english:'door', chinese:'门', phrase:"What's the color? 这是什么颜色？", sentences:["This is a door. 这是一个门。", "I have a door. 我有一个门。"]},
    {emoji:'🪟', english:'window', chinese:'窗户', phrase:"What shape is it? 它是什么形状？", sentences:["This is a window. 这是一个窗户。", "I have a window. 我有一个窗户。"]},
    {emoji:'📱', english:'phone', chinese:'电话', phrase:"How many? 有多少个？", sentences:["This is a phone. 这是一个电话。", "I have a phone. 我有一个电话。"]},
    {emoji:'⏰', english:'clock', chinese:'时钟', phrase:"I have one. 我有一个。", sentences:["This is a clock. 这是一个时钟。", "I have a clock. 我有一个时钟。"]},
    {emoji:'💡', english:'light', chinese:'灯', phrase:"I have two. 我有两个。", sentences:["This is a light. 这是一个灯。", "I have a light. 我有一个灯。"]},

    // 第31周：物品+衣服（5个）
    {emoji:'🎒', english:'bag', chinese:'书包', phrase:"Give me five! 给我五个！", sentences:["This is a bag. 这是一个书包。", "I have a bag. 我有一个书包。"]},
    {emoji:'☂️', english:'umbrella', chinese:'雨伞', phrase:"Let's build! 我们一起搭建！", sentences:["This is an umbrella. 这是一个雨伞。", "I have an umbrella. 我有一个雨伞。"]},
    {emoji:'🧢', english:'hat', chinese:'帽子', phrase:"Let's cook! 我们一起做饭！", sentences:["This is a hat. 这是一件帽子。", "I wear a hat. 我穿帽子。"]},
    {emoji:'👟', english:'shoe', chinese:'鞋子', phrase:"Let's sing a song! 我们一起唱歌！", sentences:["This is a shoe. 这是一件鞋子。", "I wear a shoe. 我穿鞋子。"]},
    {emoji:'🧦', english:'sock', chinese:'袜子', phrase:"Tell me a story. 给我讲个故事。", sentences:["This is a sock. 这是一件袜子。", "I wear a sock. 我穿袜子。"]},

    // 第32周：衣服（5个）
    {emoji:'🧥', english:'coat', chinese:'外套', phrase:"Once upon a time... 从前……", sentences:["This is a coat. 这是一件外套。", "I wear a coat. 我穿外套。"]},
    {emoji:'👖', english:'pants', chinese:'裤子', phrase:"The end. 结束了。", sentences:["This is a pants. 这是一件裤子。", "I wear a pants. 我穿裤子。"]},
    {emoji:'👗', english:'dress', chinese:'裙子', phrase:"Let's watch TV! 我们一起看电视！", sentences:["This is a dress. 这是一件裙子。", "I wear a dress. 我穿裙子。"]},
    {emoji:'👘', english:'skirt', chinese:'短裙', phrase:"Let's go outside! 我们出去吧！", sentences:["This is a skirt. 这是一件短裙。", "I wear a skirt. 我穿短裙。"]},
    {emoji:'👔', english:'shirt', chinese:'衬衫', phrase:"Let's go home! 我们回家吧！", sentences:["This is a shirt. 这是一件衬衫。", "I wear a shirt. 我穿衬衫。"]},

    // 第33周：衣服+情绪（5个）
    {emoji:'👕', english:'T-shirt', chinese:'T恤', phrase:"I want to play. 我想玩。", sentences:["This is a T-shirt. 这是一件T恤。", "I wear a T-shirt. 我穿T恤。"]},
    {emoji:'🧣', english:'scarf', chinese:'围巾', phrase:"I want to sleep. 我想睡觉。", sentences:["This is a scarf. 这是一件围巾。", "I wear a scarf. 我穿围巾。"]},
    {emoji:'😊', english:'happy', chinese:'开心', phrase:"I want mommy. 我要妈妈。", sentences:["I am happy. 我很开心。", "I feel happy. 我感到开心。"]},
    {emoji:'😢', english:'sad', chinese:'难过', phrase:"I want daddy. 我要爸爸。", sentences:["I am sad. 我很难过。", "I feel sad. 我感到难过。"]},
    {emoji:'😠', english:'angry', chinese:'生气', phrase:"Don't leave me. 不要离开我。", sentences:["I am angry. 我很生气。", "I feel angry. 我感到生气。"]},

    // 第34周：情绪（5个）
    {emoji:'😱', english:'scared', chinese:'害怕', phrase:"Stay with me. 陪着我。", sentences:["I am scared. 我很害怕。", "I feel scared. 我感到害怕。"]},
    {emoji:'😫', english:'tired', chinese:'累', phrase:"Hold my hand. 牵着我的手。", sentences:["I am tired. 我很累。", "I feel tired. 我感到累。"]},
    {emoji:'😲', english:'surprised', chinese:'惊讶', phrase:"Don't let go. 不要放手。", sentences:["I am surprised. 我很惊讶。", "I feel surprised. 我感到惊讶。"]},
    {emoji:'😭', english:'cry', chinese:'哭', phrase:"I'm coming! 我来了！", sentences:["I am cry. 我很哭。", "I feel cry. 我感到哭。"]},
    {emoji:'😆', english:'laugh', chinese:'笑', phrase:"Wait a minute! 等一下！", sentences:["I am laugh. 我很笑。", "I feel laugh. 我感到笑。"]},

    // 第35周：情绪+地点（5个）
    {emoji:'🙂', english:'smile', chinese:'微笑', phrase:"Just a moment! 稍等一下！", sentences:["I am smile. 我很微笑。", "I feel smile. 我感到微笑。"]},
    {emoji:'🤗', english:'hug', chinese:'拥抱', phrase:"Almost there! 快到了！", sentences:["I am hug. 我很拥抱。", "I feel hug. 我感到拥抱。"]},
    {emoji:'🏠', english:'home', chinese:'家', phrase:"We are here! 我们到了！", sentences:["I go to home. 我去家。", "This is home. 这是家。"]},
    {emoji:'🏫', english:'school', chinese:'学校', phrase:"Let's start! 我们开始吧！", sentences:["I go to school. 我去学校。", "This is school. 这是学校。"]},
    {emoji:'🌳', english:'park', chinese:'公园', phrase:"Let's finish! 我们完成吧！", sentences:["I go to park. 我去公园。", "This is park. 这是公园。"]},

    // 第36周：地点（5个）
    {emoji:'🏥', english:'hospital', chinese:'医院', phrase:"Good idea! 好主意！", sentences:["I go to hospital. 我去医院。", "This is hospital. 这是医院。"]},
    {emoji:'🦁', english:'zoo', chinese:'动物园', phrase:"That's right! 对了！", sentences:["I go to zoo. 我去动物园。", "This is zoo. 这是动物园。"]},
    {emoji:'🚜', english:'farm', chinese:'农场', phrase:"That's wrong! 错了！", sentences:["I go to farm. 我去农场。", "This is farm. 这是农场。"]},
    {emoji:'🏪', english:'shop', chinese:'商店', phrase:"Try again! 再试一次！", sentences:["I go to shop. 我去商店。", "This is shop. 这是商店。"]},
    {emoji:'🍽️', english:'restaurant', chinese:'餐厅', phrase:"You can do it! 你能做到！", sentences:["I go to restaurant. 我去餐厅。", "This is restaurant. 这是餐厅。"]},

    // 第37周：地点+交通工具（5个）
    {emoji:'🚽', english:'toilet', chinese:'厕所', phrase:"Never give up! 永不放弃！", sentences:["I go to toilet. 我去厕所。", "This is toilet. 这是厕所。"]},
    {emoji:'🍳', english:'kitchen', chinese:'厨房', phrase:"I'm proud of you! 我为你骄傲！", sentences:["I go to kitchen. 我去厨房。", "This is kitchen. 这是厨房。"]},
    {emoji:'🚌', english:'bus', chinese:'公交车', phrase:"I believe in you! 我相信你！", sentences:["I see a bus. 我看见一辆公交车。", "I ride a bus. 我坐公交车。"]},
    {emoji:'🚆', english:'train', chinese:'火车', phrase:"Don't worry! 别担心！", sentences:["I see a train. 我看见一辆火车。", "I ride a train. 我坐火车。"]},
    {emoji:'✈️', english:'plane', chinese:'飞机', phrase:"It's easy! 很简单！", sentences:["I see a plane. 我看见一辆飞机。", "I ride a plane. 我坐飞机。"]},

    // 第38周：交通工具（5个）
    {emoji:'🚢', english:'ship', chinese:'船', phrase:"It's difficult! 有点难！", sentences:["I see a ship. 我看见一辆船。", "I ride a ship. 我坐船。"]},
    {emoji:'🚲', english:'bike', chinese:'自行车', phrase:"Let's try! 我们试试！", sentences:["I see a bike. 我看见一辆自行车。", "I ride a bike. 我坐自行车。"]},
    {emoji:'🛵', english:'motorcycle', chinese:'摩托车', phrase:"Let's do it together! 我们一起做！", sentences:["I see a motorcycle. 我看见一辆摩托车。", "I ride a motorcycle. 我坐摩托车。"]},
    {emoji:'🚕', english:'taxi', chinese:'出租车', phrase:"Whose is this? 这是谁的？", sentences:["I see a taxi. 我看见一辆出租车。", "I ride a taxi. 我坐出租车。"]},
    {emoji:'🚚', english:'truck', chinese:'卡车', phrase:"It's my turn! 轮到我了！", sentences:["I see a truck. 我看见一辆卡车。", "I ride a truck. 我坐卡车。"]},

    // 第39周：交通工具+昆虫（5个）
    {emoji:'🚑', english:'ambulance', chinese:'救护车', phrase:"It's your turn! 轮到你了！", sentences:["I see an ambulance. 我看见一辆救护车。", "I ride an ambulance. 我坐救护车。"]},
    {emoji:'🚇', english:'subway', chinese:'地铁', phrase:"Let's take turns! 我们轮流！", sentences:["I see a subway. 我看见一辆地铁。", "I ride a subway. 我坐地铁。"]},
    {emoji:'🦋', english:'butterfly', chinese:'蝴蝶', phrase:"Don't fight! 不要打架！", sentences:["It is a butterfly. 这是一只蝴蝶。", "I see a butterfly. 我看见一只蝴蝶。"]},
    {emoji:'🐜', english:'ant', chinese:'蚂蚁', phrase:"Be nice! 友好一点！", sentences:["It is an ant. 这是一只蚂蚁。", "I see an ant. 我看见一只蚂蚁。"]},
    {emoji:'🕷️', english:'spider', chinese:'蜘蛛', phrase:"Be gentle! 温柔一点！", sentences:["It is a spider. 这是一只蜘蛛。", "I see a spider. 我看见一只蜘蛛。"]},

    // 第40周：昆虫+形状（5个）
    {emoji:'🐌', english:'snail', chinese:'蜗牛', phrase:"Say sorry! 说对不起！", sentences:["It is a snail. 这是一只蜗牛。", "I see a snail. 我看见一只蜗牛。"]},
    {emoji:'🐞', english:'ladybug', chinese:'瓢虫', phrase:"Say please! 说请！", sentences:["It is a ladybug. 这是一只瓢虫。", "I see a ladybug. 我看见一只瓢虫。"]},
    {emoji:'🦀', english:'crab', chinese:'螃蟹', phrase:"Say thank you! 说谢谢！", sentences:["It is a crab. 这是一只螃蟹。", "I see a crab. 我看见一只螃蟹。"]},
    {emoji:'🐢', english:'turtle', chinese:'乌龟', phrase:"Excuse me! 打扰一下！", sentences:["It is a turtle. 这是一只乌龟。", "I see a turtle. 我看见一只乌龟。"]},
    {emoji:'🐍', english:'snake', chinese:'蛇', phrase:"Bless you! 保佑你！", sentences:["It is a snake. 这是一只蛇。", "I see a snake. 我看见一只蛇。"]},

    // 第41周：形状（5个）
    {emoji:'⭕', english:'circle', chinese:'圆形', phrase:"What's wrong? 怎么了？", sentences:["It is a circle. 这是一个圆形。", "I draw a circle. 我画一个圆形。"]},
    {emoji:'🟥', english:'square', chinese:'正方形', phrase:"What's the matter? 出什么事了？", sentences:["It is a square. 这是一个正方形。", "I draw a square. 我画一个正方形。"]},
    {emoji:'🔺', english:'triangle', chinese:'三角形', phrase:"Are you okay? 你还好吗？", sentences:["It is a triangle. 这是一个三角形。", "I draw a triangle. 我画一个三角形。"]},
    {emoji:'⭐', english:'star', chinese:'星星', phrase:"I am okay. 我没事。", sentences:["It is a star. 这是一个星星。", "I draw a star. 我画一个星星。"]},
    {emoji:'❤️', english:'heart', chinese:'心形', phrase:"I need help. 我需要帮助。", sentences:["It is a heart. 这是一个心形。", "I draw a heart. 我画一个心形。"]},

    // 第42周：形状+玩具（5个）
    {emoji:'♦️', english:'diamond', chinese:'菱形', phrase:"Can you help me? 你能帮我吗？", sentences:["It is a diamond. 这是一个菱形。", "I draw a diamond. 我画一个菱形。"]},
    {emoji:'🟩', english:'rectangle', chinese:'长方形', phrase:"Will you play with me? 你能和我玩吗？", sentences:["It is a rectangle. 这是一个长方形。", "I draw a rectangle. 我画一个长方形。"]},
    {emoji:'🥚', english:'oval', chinese:'椭圆形', phrase:"Let's be friends! 我们做朋友吧！", sentences:["It is an oval. 这是一个椭圆形。", "I draw an oval. 我画一个椭圆形。"]},
    {emoji:'🪁', english:'kite', chinese:'风筝', phrase:"I like you! 我喜欢你！", sentences:["I play with a kite. 我玩风筝。", "This is a kite. 这是一个风筝。"]},
    {emoji:'🎈', english:'balloon', chinese:'气球', phrase:"You are my best friend! 你是我最好的朋友！", sentences:["I play with a balloon. 我玩气球。", "This is a balloon. 这是一个气球。"]},

    // 第43周：玩具+日常（5个）
    {emoji:'🛝', english:'slide', chinese:'滑梯', phrase:"Let's hug! 我们抱抱！", sentences:["I play with a slide. 我玩滑梯。", "This is a slide. 这是一个滑梯。"]},
    {emoji:'🎪', english:'swing', chinese:'秋千', phrase:"I forgive you. 我原谅你。", sentences:["I play with a swing. 我玩秋千。", "This is a swing. 这是一个秋千。"]},
    {emoji:'🧸', english:'doll', chinese:'娃娃', phrase:"Let's make up! 我们和好吧！", sentences:["I play with a doll. 我玩娃娃。", "This is a doll. 这是一个娃娃。"]},
    {emoji:'🤖', english:'robot', chinese:'机器人', phrase:"It's a secret! 这是个秘密！", sentences:["I play with a robot. 我玩机器人。", "This is a robot. 这是一个机器人。"]},
    {emoji:'🎎', english:'puppet', chinese:'木偶', phrase:"Don't tell anyone! 不要告诉任何人！", sentences:["I play with a puppet. 我玩木偶。", "This is a puppet. 这是一个木偶。"]},

    // 第44周：玩具+日常（5个）
    {emoji:'🧱', english:'blocks', chinese:'积木', phrase:"I promise. 我保证。", sentences:["I play with a blocks. 我玩积木。", "This is a blocks. 这是一个积木。"]},
    {emoji:'👋', english:'hello', chinese:'你好', phrase:"Cross my heart! 我发誓！", sentences:["Say hello! 说你好！", "hello! 你好！"]},
    {emoji:'👋', english:'bye', chinese:'再见', phrase:"Guess what? 你猜怎么着？", sentences:["Say bye! 说再见！", "bye! 再见！"]},
    {emoji:'🙏', english:'thank you', chinese:'谢谢', phrase:"Surprise! 惊喜！", sentences:["Say thank you! 说谢谢！", "thank you! 谢谢！"]},
    {emoji:'🙏', english:'please', chinese:'请', phrase:"Happy Mother's Day! 母亲节快乐！", sentences:["Say please! 说请！", "please! 请！"]},

    // 第45周：日常（5个）
    {emoji:'😔', english:'sorry', chinese:'对不起', phrase:"Happy Father's Day! 父亲节快乐！", sentences:["Say sorry! 说对不起！", "sorry! 对不起！"]},
    {emoji:'🌅', english:'good morning', chinese:'早上好', phrase:"Happy Teachers' Day! 教师节快乐！", sentences:["Say good morning! 说早上好！", "good morning! 早上好！"]},
    {emoji:'🌙', english:'good night', chinese:'晚安', phrase:"Happy Halloween! 万圣节快乐！", sentences:["Say good night! 说晚安！", "good night! 晚安！"]},
    {emoji:'✅', english:'yes', chinese:'是', phrase:"Happy Easter! 复活节快乐！", sentences:["Say yes! 说是！", "yes! 是！"]},
    {emoji:'👍', english:'good', chinese:'好的', phrase:"I want a gift! 我想要礼物！", sentences:["Say good! 说好的！", "good! 好的！"]},

    // 第46周：日常+方向（5个）
    {emoji:'❌', english:'no', chinese:'不是', phrase:"Where is my gift? 我的礼物在哪里？", sentences:["Say no! 说不是！", "no! 不是！"]},
    {emoji:'❤️', english:'love', chinese:'爱', phrase:"Open the box! 打开盒子！", sentences:["Say love! 说爱！", "love! 爱！"]},
    {emoji:'⬆️', english:'up', chinese:'上', phrase:"What's inside? 里面是什么？", sentences:["Go up! 向上走！", "Look up! 看上！"]},
    {emoji:'⬇️', english:'down', chinese:'下', phrase:"It's empty! 是空的！", sentences:["Go down! 向下走！", "Look down! 看下！"]},
    {emoji:'⬅️', english:'left', chinese:'左', phrase:"It's full! 是满的！", sentences:["Go left! 向左走！", "Look left! 看左！"]},

    // 第47周：方向+大小（5个）
    {emoji:'➡️', english:'right', chinese:'右', phrase:"So heavy! 好重啊！", sentences:["Go right! 向右走！", "Look right! 看右！"]},
    {emoji:'🐘', english:'big', chinese:'大', phrase:"So light! 好轻啊！", sentences:["Go big! 向大走！", "Look big! 看大！"]},
    {emoji:'🐭', english:'small', chinese:'小', phrase:"Push it! 推它！", sentences:["Go small! 向小走！", "Look small! 看小！"]},
    {emoji:'🔥', english:'hot', chinese:'热', phrase:"Pull it! 拉它！", sentences:["Go hot! 向热走！", "Look hot! 看热！"]},
    {emoji:'❄️', english:'cold', chinese:'冷', phrase:"Lift it up! 举起来！", sentences:["Go cold! 向冷走！", "Look cold! 看冷！"]},

    // 第48周：状态+动物（5个）
    {emoji:'✨', english:'clean', chinese:'干净', phrase:"Put it down! 放下来！", sentences:["It is clean. 它是干净的。", "I feel clean. 我感觉干净。"]},
    {emoji:'🧹', english:'dirty', chinese:'脏', phrase:"Throw it! 扔它！", sentences:["It is dirty. 它是脏的。", "I feel dirty. 我感觉脏。"]},
    {emoji:'🚀', english:'fast', chinese:'快', phrase:"Catch it! 接住它！", sentences:["It is fast. 它是快的。", "I feel fast. 我感觉快。"]},
    {emoji:'🐐', english:'goat', chinese:'山羊', phrase:"Kick it! 踢它！", sentences:["This is a goat. 这是一只山羊。", "I see a goat. 我看见一只山羊。"]},
    {emoji:'🦌', english:'deer', chinese:'鹿', phrase:"Bounce it! 拍它！", sentences:["This is a deer. 这是一只鹿。", "I see a deer. 我看见一只鹿。"]},

    // 第49周：动物+食物（5个）
    {emoji:'🐫', english:'camel', chinese:'骆驼', phrase:"Roll it! 滚它！", sentences:["This is a camel. 这是一只骆驼。", "I see a camel. 我看见一只骆驼。"]},
    {emoji:'🦚', english:'peacock', chinese:'孔雀', phrase:"Spin it! 转它！", sentences:["This is a peacock. 这是一只孔雀。", "I see a peacock. 我看见一只孔雀。"]},
    {emoji:'🥜', english:'peanut', chinese:'花生', phrase:"Stack them! 把它们叠起来！", sentences:["I eat peanut. 我吃花生。", "The peanut is yummy. 这个花生很好吃。"]},
    {emoji:'🥕', english:'carrot', chinese:'胡萝卜', phrase:"Line them up! 把它们排成一排！", sentences:["I eat carrot. 我吃胡萝卜。", "The carrot is yummy. 这个胡萝卜很好吃。"]},
    {emoji:'🍅', english:'tomato', chinese:'番茄', phrase:"Match them! 把它们配对！", sentences:["I eat tomato. 我吃番茄。", "The tomato is yummy. 这个番茄很好吃。"]},

    // 第50周：食物（5个）
    {emoji:'🥔', english:'potato', chinese:'土豆', phrase:"Sort them! 把它们分类！", sentences:["I eat potato. 我吃土豆。", "The potato is yummy. 这个土豆很好吃。"]},
    {emoji:'🌽', english:'corn', chinese:'玉米', phrase:"Find it! 找到它！", sentences:["I eat corn. 我吃玉米。", "The corn is yummy. 这个玉米很好吃。"]},
    {emoji:'🌬️', english:'wind', chinese:'风', phrase:"Hide it! 藏起来！", sentences:["The wind is bright. 风很亮。", "I see the wind. 我看见风。"]},
    {emoji:'🌫️', english:'fog', chinese:'雾', phrase:"Seek it! 寻找它！", sentences:["The fog is bright. 雾很亮。", "I see the fog. 我看见雾。"]},
    {emoji:'🌈', english:'rainbow', chinese:'彩虹', phrase:"Tag, you're it! 抓到你啦！", sentences:["The rainbow is bright. 彩虹很亮。", "I see the rainbow. 我看见彩虹。"]},

    // 第51-52周：自然+其他（5个）
    {emoji:'⚡', english:'thunder', chinese:'雷', phrase:"Freeze! 不许动！", sentences:["The thunder is bright. 雷很亮。", "I see the thunder. 我看见雷。"]},
    {emoji:'🥁', english:'drum', chinese:'鼓', phrase:"Unfreeze! 解冻！", sentences:["This is a drum. 这是一个鼓。", "I have a drum. 我有一个鼓。"]},
    {emoji:'🐱', english:'cat', chinese:'小猫', phrase:"Simon says... Simon说……", sentences:["This is a cat. 这是一只小猫。", "I see a cat. 我看见一只小猫。"]},
    {emoji:'🍎', english:'apple', chinese:'苹果', phrase:"Follow the leader! 跟着 leader！", sentences:["This is an apple. 这是一个苹果。", "I eat the apple. 我吃苹果。"]},
    {emoji:'❤️', english:'red', chinese:'红色', phrase:"Red light, stop! 红灯停！", sentences:["It is red. 它是红色。", "I like red. 我喜欢红色。"]}
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
    window.speechSynthesis.cancel();

    const utterEn = new SpeechSynthesisUtterance(q.target.english);
    utterEn.lang = 'en-US';
    utterEn.rate = 0.8;
    window.speechSynthesis.speak(utterEn);

    const utterCn = new SpeechSynthesisUtterance(q.target.chinese);
    utterCn.lang = 'zh-CN';
    utterCn.rate = 0.8;
    window.speechSynthesis.speak(utterCn);
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
function playSentence() {
    const word = getCurrentWord();
    if (!word || !word.phrase) return;
    window.speechSynthesis.cancel();

    const phrase = word.phrase;
    const match = phrase.match(/[一-龥]/);
    let enPart = phrase;
    let cnPart = '';
    if (match) {
        enPart = phrase.substring(0, match.index).trim();
        cnPart = phrase.substring(match.index).trim();
    }

    const utterEn = new SpeechSynthesisUtterance(enPart);
    utterEn.lang = 'en-US';
    utterEn.rate = 0.7;
    window.speechSynthesis.speak(utterEn);

    if (cnPart) {
        const utterCn = new SpeechSynthesisUtterance(cnPart);
        utterCn.lang = 'zh-CN';
        utterCn.rate = 0.7;
        window.speechSynthesis.speak(utterCn);
    }
}

function playWord() {
    const word = getCurrentWord();
    if (!word) return;
    window.speechSynthesis.cancel();

    const utterEn = new SpeechSynthesisUtterance(word.english);
    utterEn.lang = 'en-US';
    utterEn.rate = 0.8;
    window.speechSynthesis.speak(utterEn);

    const utterCn = new SpeechSynthesisUtterance(word.chinese);
    utterCn.lang = 'zh-CN';
    utterCn.rate = 0.8;
    window.speechSynthesis.speak(utterCn);
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

    // 渲染今日短句（独立常用句）
    const sentenceEn = document.getElementById('sentence-en');
    const sentenceCn = document.getElementById('sentence-cn');
    if (sentenceEn && sentenceCn && word.phrase) {
        const match = word.phrase.match(/[一-龥]/);
        if (match) {
            sentenceEn.textContent = word.phrase.substring(0, match.index).trim();
            sentenceCn.textContent = word.phrase.substring(match.index).trim();
        } else {
            sentenceEn.textContent = word.phrase;
            sentenceCn.textContent = '';
        }
    } else {
            sentenceEn.textContent = word.phrase;
            sentenceCn.textContent = '';
        }
    }

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
