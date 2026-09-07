import { waitUntil } from 'async-wait-until';

const PARTS = ['腋窝', '乳头胸', '私处', '大腿内侧', '脚底', '腰侧'];
const TRIGGERS = ['静态抵着', '自蹭', '突然偷袭', '连续挠'];
const LEVELS = ['若有似无', '中等', '强烈'];
const SCENES = ['花店', '家里', '齿轮集市', '雾码头', '机械缆车', '钟楼广场', '蒸汽浴场'];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

let lastKey = '';

function drawLot() {
  for (let i = 0; i < 20; i++) {
    const part = pick(PARTS);
    const trigger = pick(TRIGGERS);
    const level = pick(LEVELS);
    const scene = pick(SCENES);
    const key = `${part}|${trigger}|${level}|${scene}`;
    if (key !== lastKey) {
      lastKey = key;
      return { part, trigger, level, scene };
    }
  }
  const part = pick(PARTS);
  const trigger = pick(TRIGGERS);
  const level = pick(LEVELS);
  const scene = pick(SCENES);
  return { part, trigger, level, scene };
}

function drawMode() {
  const r = Math.random();
  if (r < 0.45) return 'none';
  if (r < 0.75) return 'static';
  return 'active';
}

$(async () => {
  await waitUntil(() => typeof eventOn === 'function');
  eventOn(tavern_events.GENERATION_AFTER_COMMANDS, () => {
    const mode = drawMode();
    let prompt = '';

    if (mode === 'none') {
      prompt = [
        '【本轮签·风平浪静】',
        '本轮苏暖身上的设备安静，不触发任何挠痒，只写温馨日常与生活气。',
        '可以写她做家务、招呼你、闲聊，让玩家在平淡里喘口气，也为下一次突袭蓄力。',
        '安全第一，绝不因为想推进剧情而强行触发。',
      ].join('\n');
    } else if (mode === 'static') {
      const lot = drawLot();
      prompt = [
        `【本轮签·静态威慑】部位：${lot.part}｜场景：${lot.scene}`,
        '设备只是抵着、蓄势、自蹭，不真正启动挠痒。',
        '多写"它抵在软肉上、随时会动"的紧张感，苏暖忍着不让自己动，避免真挠。',
      ].join('\n');
    } else {
      const lot = drawLot();
      prompt = [
        `【本轮签·设备触发】部位：${lot.part}｜触发方式：${lot.trigger}｜强度：${lot.level}｜场景：${lot.scene}`,
        '本轮让苏暖身上的设备按签自然触发，优先静态威慑与自蹭再过渡到真挠。',
        '若场景有危险（切菜用刀、火源、下楼、提重物、洗澡防滑、开车）则跳过触发、保持安全。',
        '保持苏暖平然忍痒，身体诚实发抖发红漏声，表情平静，日常死忍，色色时才出声。',
      ].join('\n');
    }

    injectPrompts(
      [
        {
          id: 'tk设备随机签',
          position: 'in_chat',
          depth: 0,
          role: 'system',
          content: prompt,
          should_scan: false,
        },
      ],
      { once: true },
    );
  });
});
