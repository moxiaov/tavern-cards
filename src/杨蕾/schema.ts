// 杨蕾 MVU 变量结构（Zod 4）
// 运行环境已注入全局 z（zod v4）与 _（lodash），本文件禁止 import。

export const Schema = z.object({
  系统: z.object({
    日期: z.string().prefault('待初始化'),
    时间: z.string().prefault('待初始化'),
    当前场景: z.string().prefault('待初始化'),
    当前事件: z.string().prefault('待初始化'),
  }).prefault({}),

  隐奸: z.object({
    主奴关系深度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    杨蕾开发度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    杨蕾当前状态: z.enum(['空闲', '被调教中', '刚被玩弄完']).prefault('空闲'),
    隐奸事件记录: z.array(z.string()).prefault([]),
    杨蕾痕迹: z.object({
      恋足痕迹: z.string().prefault('无'),
      TK痕迹: z.string().prefault('无'),
      SM痕迹: z.string().prefault('无'),
      味道: z.string().prefault('无'),
    }).prefault({}),
    杨蕾脚状态: z.object({
      捂脚天数: z.coerce.number().prefault(0),
      袜子状态: z.string().prefault('待初始化'),
      脚味程度: z.string().prefault('待初始化'),
    }).prefault({}),
  }).prefault({}),

  杨蕾: z.object({
    对小v依赖度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  }).prefault({}),
});

export type Schema = z.output<typeof Schema>;
