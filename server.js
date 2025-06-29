// 简化版服务器，专注于接收前端数据
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();

// 创建logs目录（如果不存在）
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// 日志文件路径
const logFile = path.join(logsDir, `server-${new Date().toISOString().split('T')[0]}.log`);

// 日志写入函数
function writeLog(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
    console.log(logMessage.trim());
}

// 清理剧本内容，移除AI的思考过程
function cleanScriptContent(content) {
    if (!content) return content;
    
    // 移除常见的AI回复开头
    const aiPrefixes = [
        /^好的[，,]\s*我将按照您的要求[\s\S]*?以下内容是否符合您的预期[。\.][\s\S]*?(?=###|第一幕|\*\*|##)/,
        /^好的[，,]\s*我将[\s\S]*?(?=###|第一幕|\*\*|##)/,
        /^根据您提供的信息[\s\S]*?(?=###|第一幕|\*\*|##)/,
        /^我将为您创作[\s\S]*?(?=###|第一幕|\*\*|##)/,
        /^以下是[\s\S]*?(?=###|第一幕|\*\*|##)/,
        /^让我[\s\S]*?(?=###|第一幕|\*\*|##)/
    ];
    
    let cleanedContent = content;
    
    // 逐个移除AI回复前缀
    for (const prefix of aiPrefixes) {
        cleanedContent = cleanedContent.replace(prefix, '');
    }
    
    // 移除开头的空白行
    cleanedContent = cleanedContent.replace(/^\s+/, '');
    
    // 移除结尾的AI总结
    cleanedContent = cleanedContent.replace(/\n\n如果您有其他想法[\s\S]*$/, '');
    cleanedContent = cleanedContent.replace(/\n\n请您看看以下内容[\s\S]*$/, '');
    
    return cleanedContent.trim();
}

// CORS配置 - 允许所有跨域请求
app.use(cors());

// 解析JSON请求体
app.use(express.json());

// 记录所有请求
app.use((req, res, next) => {
    writeLog(`${req.method} ${req.url}`);
    next();
});

// 测试接口
app.get('/api/test', (req, res) => {
    writeLog('测试接口被访问');
    res.json({ message: '服务器正常运行' });
});

// 简单的健康检查接口（用于监控）
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// 模拟响应数据（用于API不可用时）- 直接存储剧本内容，不再嵌套JSON
const sampleScriptContent = `

第一幕（22岁）

呼和浩特的九月，云在湛蓝的天幕下奔跑，牵引着弯月的影子划过橘猫宿舍窗台。窗台上的多肉植物玲珑剔透，仿佛能映照出他眉头的褶皱。笔记本电脑的荧光照亮他的脸，未完成的销售策划案在屏幕上闪烁。他叹息着关闭文档，打开一封已读无数遍的邮件——那是大二时错过的校企合作项目录取通知，主题依然刺眼：销售精英培训计划（已截止）。

手机震动，是初恋贰玖的朋友圈更新提醒。他点开又立刻退出，指腹却记得那张照片里陌生男孩搂着她肩膀的温度。宿舍楼下传来篮球撞击地面的闷响，空气中弥漫着槐花香和青春的荷尔蒙。他拿起床头那本《理想国》，书签停在苏格拉底谈论爱情的章节，角落里歪歪扭扭写着一行字：爱是了解一个人后仍然喜欢。

"橘猫，吃饭去不？"室友的声音从门外传来。他应了一声，将日记本塞进抽屉深处。日记本扉页写着"世界不死，理想不灭"，纸缝间躺着一张褪色的照片：六岁的他蹲在黄土地上，笑容灿烂如身后的向日葵田，姥姥布满皱纹的手里捧着刚挖出的土豆，两人脸上都沾着细碎的泥土。

天秤座的橘猫总是徘徊在决定的边缘，INFJ的性格让他在奔波的人群中静默观察。二十二岁，他像所有这个年纪的男孩一样迷茫，却又倔强地相信某种命定的轨迹。

第二幕（32岁）

云南香格里拉，海拔四千米的村庄边缘，橘猫架好三脚架，镜头对准雪山与星空交界处的第一缕晨光。他拂去相机上的霜，呼出的白气在冷空气中凝结成冰晶。十年前那个不敢举手发言的呼和浩特男孩，如今已成为国家地理频道特约摄影师，足迹遍布四十多个国家。

帐篷里，笔记本电脑闪烁着刚编辑完的图集《遗失的角落》，那是他耗时三年走访世界各地被遗忘的美丽之处。屏幕一角跳出视频通话请求，是他的编辑。"橘猫，你那组照片太棒了！《国家地理》主刊决定用它做下月封面！"他笑了，想起六年前初入行时被退稿时写下的誓言："用镜头证明世界的辽阔足以治愈一切伤痛。"

手机相册里，有张珍藏已久的截图——贰玖当年微博的最后一条：祝你找到让你甘愿走遍千山万水的理由。那时他刚从销售策划转行摄影，名字还未被人知晓。现在想来，或许正是那句话，成了他背着器材跋涉的勇气源泉。

帐篷外，向导老仁正用燃木煮着酥油茶。四十多岁的藏族汉子有着饱经风霜的脸庞，却讲着纯真如少年的故事。"橘猫，你为什么总是拍些无人关注的地方？"老仁递给他一碗热气腾腾的茶。他接过，目光落在远处山脊线上，"因为被忽视的风景更需要被看见，就像被忽略的故事更值得被讲述。"

第三幕（42岁）

纽约现代艺术博物馆，橘猫的个人摄影展《世界尽头的日常》正在举行开幕式。五百多幅照片记录了二十年来他走过的地方与遇见的人。人群中，一位亚洲面孔的中年女性站在一张呼和浩特郊外土豆田的照片前久久不愿离去。那是他四十岁回到故乡，用姥姥留下的老相机拍摄的。

"这片田地让我想起了我奶奶。"女人开口，声音有种熟悉的频率。橘猫转身，隔着二十年的光阴与初恋贰玖四目相对。她的眼角有了细纹，笑起来却依然像那个在文学课上朗读泰戈尔的女孩。"我在《国家地理》看到你的作品，就知道一定是你。"她指着那片土豆田，"你总跟我说要带我去看你姥姥家的土豆花开。"

曼哈顿公寓的落地窗前，两个中年人各自握着红酒杯，聊着错过的二十年。贰玖成了知名的翻译家，将拉美文学带进中文世界；而他则用镜头讲述那些被忽略的美丽故事。"你知道吗，我曾在巴塔哥尼亚遇到一对老夫妻，他们相识于六十年前的一场误会，分离了五十九年后又在世界尽头重逢。"橘猫说着，打开手机里的照片。

贰玖微笑："所以你相信命中注定的重逢？"

橘猫倚在窗边："我相信生命中有些风景，会让你甘愿走遍千山万水。"

尾声（52岁）

呼和浩特郊外的土豆田，五十二岁的橘猫蹲下身，将一台老相机交给一个十岁的女孩。"丫头，按这里，对准那片向日葵。"女孩歪着头按下快门，兴奋地跳起来："爸爸，我拍到了！"

不远处，贰玖站在田埂上，挽着白发苍苍的老人——那是橘猫的父亲，正给几个乡村孩子讲述星座的故事。二十年前回到故乡的简单旅行，意外变成了橘猫人生最重要的转折。他创办了"世界不死"乡村影像教育基金，带着摄影器材走进中国最偏远的乡村，教孩子们用镜头记录自己的世界。

书房里，墙上挂满了世界各地的照片，角落里有张特别的合影：四十二岁的他与贰玖在纽约现代艺术博物馆前相视而笑。书桌上摊开的笔记本写着新书《理想不灭：52个改变世界的平凡故事》的大纲，那是他与贰玖共同创作的项目，将摄影与文字结合，讲述他们这些年遇到的平凡却闪光的生命。

阳光透过窗户在地板上投下斑驳的光影，犹如时光在岁月河床上留下的痕迹。五十二岁的橘猫望着远处地平线，想起二十二岁时写在日记本上的那句话：世界不死，理想不灭。如今，他终于明白，所谓理想，不过是找到那个让你甘愿驻足的风景，然后有足够的勇气，走完剩下的路。

那些曾经的遗憾——错过的销售机会、失去的初恋、未能陪伴姥姥的最后时光——都成了他生命中不可或缺的伏笔，引领他找到了真正想要的人生。

（完）`;

// 接收前端表单数据的接口
app.post('/api/generate', async (req, res) => {
    try {
        writeLog('\n------- 收到前端请求 -------');
        writeLog(`请求体完整数据: ${JSON.stringify(req.body, null, 2)}`);
        
        // 详细记录所有接收到的表单数据
        const fields = [
            'name', 'age', 'gender', 'currentLocation', 'zodiac', 'mbti',
            'regret', 'loss', 'memory', 'trouble', 'cried', 'change',
            'futureSelf', 'belief'
        ];
        
        writeLog('\n接收到的表单字段详情:');
        fields.forEach(field => {
            const value = req.body[field];
            const received = value !== undefined && value !== null && value !== '';
            writeLog(`${field}: ${received ? '✓ 已接收' : '✗ 未接收'} ${received ? `(值: ${value})` : ''}`);
        });
        
        writeLog('\n表单字段统计:');
        const receivedCount = fields.filter(field => 
            req.body[field] !== undefined && req.body[field] !== null && req.body[field] !== ''
        ).length;
        writeLog(`总字段数: ${fields.length}`);
        writeLog(`已接收字段数: ${receivedCount}`);
        writeLog(`接收率: ${Math.round((receivedCount / fields.length) * 100)}%`);
        
        // 如果数据接收不完整（小于50%），返回错误
        if ((receivedCount / fields.length) < 0.5) {
            writeLog('错误: 表单数据不完整，接收率低于50%');
            return res.status(400).json({
                success: false,
                error: '请至少填写一半以上的表单字段'
            });
        }
        
        // 准备调用Coze API的数据
        const cozeData = {
            parameters: {
                name: req.body.name || '',
                age: parseInt(req.body.age) || 0,
                gender: req.body.gender || '',
                location: req.body.currentLocation || '',
                zodiac_sign: req.body.zodiac || '',
                mbti: req.body.mbti || '',
                regret: req.body.regret || '',
                missed_opportunity: req.body.loss || '',
                memorable_memory: req.body.memory || '',
                current_problem: req.body.trouble || '',
                cried_recently: req.body.cried === '是' ? true : false,
                want_to_change: req.body.change || '',
                future_self: req.body.futureSelf || '',
                belief: req.body.belief || ''
            },
            workflow_id: "7488333345983643658"
        };
        
        writeLog('\n准备发送至Coze API的数据:' + JSON.stringify(cozeData, null, 2));
        
        try {
            writeLog('开始请求Coze API (200秒超时)...');
            
            const cozeResponse = await axios({
                method: 'post',
                url: 'https://api.coze.cn/v1/workflow/run',
                headers: {
                    'Authorization': 'Bearer pat_NDQ1a4nxLXf2ziTYxqSB1rjfjKNNMq5ndW9ml3psLV6jcE6eEKX2uOHL39dWxaY9',
                    'Content-Type': 'application/json'
                },
                data: cozeData,
                timeout: 200000
            });
            
            writeLog(`Coze API响应状态码: ${cozeResponse.status}`);
            writeLog(`Coze API响应数据: ${JSON.stringify(cozeResponse.data, null, 2)}`);
            
            if (cozeResponse.status !== 200) {
                throw new Error(`API响应状态码异常: ${cozeResponse.status}`);
            }
            
            if (!cozeResponse.data) {
                throw new Error('API返回空数据');
            }
            
            if (cozeResponse.data.code !== 0) {
                writeLog(`Coze API错误: ${JSON.stringify(cozeResponse.data)}`);
                throw new Error(`Coze API返回错误: ${cozeResponse.data.msg || '未知错误'}`);
            }
            
            let scriptContent;
            try {
                const dataContent = typeof cozeResponse.data.data === 'string' 
                    ? JSON.parse(cozeResponse.data.data) 
                    : cozeResponse.data.data;
                    
                let rawContent = dataContent.output;
                
                // 清理AI的思考过程和回复语句
                scriptContent = cleanScriptContent(rawContent);
                
                writeLog('成功解析剧本内容');
            } catch (parseError) {
                writeLog(`解析剧本内容失败: ${parseError.message}`);
                throw new Error('无法解析API返回的剧本内容');
            }
            
            if (!scriptContent) {
                throw new Error('解析后的剧本内容为空');
            }
            
            writeLog('成功生成剧本，准备返回给前端');
            return res.json({
                success: true,
                content: scriptContent
            });
            
        } catch (error) {
            writeLog(`Coze API请求或处理失败: ${error.message}`);
            
            if (error.message.includes('Insufficient coze credits')) {
                writeLog('Coze API额度不足，返回备用示例数据...');
                return res.json({
                    success: true,
                    content: sampleScriptContent
                });
            }
            
            throw error; // 重新抛出错误，让外层错误处理来处理
        }
        
    } catch (error) {
        writeLog(`服务器错误: ${error.message}`);
        writeLog(`错误堆栈: ${error.stack}`);
        
        return res.status(500).json({
            success: false,
            error: `服务器处理请求时发生错误: ${error.message}`
        });
    }
});

// 错误处理中间件
app.use((err, req, res, next) => {
    writeLog(`未捕获的错误: ${err.message}`);
    writeLog(`错误堆栈: ${err.stack}`);
    
    res.status(500).json({
        success: false,
        error: '服务器内部错误'
    });
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    writeLog(`服务器启动成功，监听端口 ${PORT}`);
    writeLog(`日志文件路径: ${logFile}`);
    console.log('可用的接口:');
    console.log('- GET /api/test - 测试服务器连接');
    console.log('- GET /api/health - 健康检查（用于监控）');
    console.log('- POST /api/generate - 接收表单数据并调用Coze API');
});
