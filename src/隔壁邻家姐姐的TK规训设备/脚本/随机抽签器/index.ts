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

$(() => {
  eventOn(tavern_events.GENERATION_AFTER_COMMANDS, () => {
    const lot = drawLot();
    const prompt = [
      '【本次随机签·设备触发】',
      `部位：${lot.part}`,
      `触发方式：${lot.trigger}`,
      `强度：${lot.level}`,
      `场景：${lot.scene}`,
      '',
      '请在本次回复里，让苏暖身上的设备按上面的签自然触发：优先写静态威慑与自蹭，',
      '触发时随机且不可预测；若场景有危险（切菜用刀、火源、下楼、提重物、洗澡防滑、开车）则跳过触发、保持安全。',
      '保持苏暖平然忍痒，身体诚实发抖发红漏声，表情平静，日常死忍，色色时才出声。',
    ].join('\n');

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
