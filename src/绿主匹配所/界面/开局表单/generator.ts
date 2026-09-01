// 绿主随机生成器

type Candidate = {
  名字: string;
  性别: string;
  年龄: number;
  外貌: string;
  背景: string;
};

const 男名 = ['沈知远', '陆衍', '顾沉', '周野', '季临', '江辞', '许言', '程野', '贺川', '林屿', '秦朗', '苏杭', '温衍', '楚越', '段霄'];
const 女名 = ['苏晚', '林澈', '沈倦', '顾曼', '江浸月', '温叙', '许栀', '秦桑', '宋窈', '陆知微', '叶绾', '楚岚', '白黎', '迟意', '纪棠'];

const 女外貌 = [
  '高冷御姐，长发冷白皮，眉眼锐利，气场强',
  '温柔人妻感，软软的长发，眉眼弯弯，带着母性',
  '金丝眼镜斯文，知性禁欲，抿唇时很勾人',
  '文艺青年，干净细腻，穿棉麻衣服，声音轻缓',
  '高挑冷艳，红唇黑发，走路带风',
  '奶狗感，圆眼软唇，笑起来很甜',
];

const 男外貌 = [
  '狼系少年，寸头眉眼锋锐，侵略感强',
  '奶狗系，圆眼软软，看着无害却藏着劲',
  '金丝眼镜斯文，禁欲知性，袖口永远干净',
  '猛男肌肉，高大挺拔，阳刚性感',
  '文艺青年，干净清瘦，锁骨好看',
  '浪子，长发微卷，痞笑勾人',
];

const 性格底色 = ['温柔系', '霸道系', '高冷系', '儒雅系', '浪子系'];
const 身份职业 = ['学长学姐', '老师助教', '社团学生会', '专业教练', '朋友介绍', '以前认识的好友', '论坛同好', '街上搭讪的黄毛'];
const 调教风格 = ['温柔引导', '霸道支配', '心理攻陷', '技术流', '玩咖'];
const 对洛洛态度 = ['宠', '调', '虐', '疼', '占有', '玩味'];

const 背景模板 = [
  '和洛洛在同一个社团，早就注意到这个跳舞的姑娘',
  '洛洛兼职时的常客，温柔又懂分寸',
  '网上聊了很久的网友，今天才第一次看到照片',
  '洛洛学姐介绍的朋友，成熟稳重',
  '图书馆里总坐在洛洛对面的那个人',
  '以前的高中同学，重逢后才发现彼此的变化',
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateCandidate(existingNames: Set<string>): Candidate {
  const 性别 = Math.random() < 0.5 ? '男' : '女';
  let 名字 = 性别 === '男' ? pick(男名) : pick(女名);
  let guard = 0;
  while (existingNames.has(名字) && guard < 50) {
    名字 = 性别 === '男' ? pick(男名) : pick(女名);
    guard++;
  }
  existingNames.add(名字);
  return {
    名字,
    性别,
    年龄: randInt(22, 32),
    外貌: 性别 === '男' ? pick(男外貌) : pick(女外貌),
    背景: pick(背景模板),
  };
}

export function generateBatch(): Candidate[] {
  const names = new Set<string>();
  const batch: Candidate[] = [];
  const 性别1 = Math.random() < 0.5 ? '男' : '女';
  const 性别2 = 性别1 === '男' ? '女' : '男';
  // 保证至少1男1女
  batch.push(forceGender(性别1, names));
  batch.push(forceGender(性别2, names));
  batch.push(generateCandidate(names));
  batch.push(generateCandidate(names));
  return batch;
}

function forceGender(性别: string, names: Set<string>): Candidate {
  const c = generateCandidate(names);
  // 重新生成直到性别匹配（避免死循环用简单重试）
  if (c.性别 !== 性别) {
    return { ...c, 性别, 名字: 性别 === '男' ? pick(男名) : pick(女名) };
  }
  return c;
}
