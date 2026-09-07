export const Schema = z.object({
  状态栏数据: z.object({
    忍耐汁量: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    解放时刻: z.string().prefault(''),
    苏暖心语: z.string().prefault(''),
    今日被规训次数: z.coerce.number().transform(v => _.clamp(v, 0, 999)).prefault(0),
  }).prefault({}),
  捂脚靴: z.object({
    汗液量: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    脚味浓度: z.string().prefault('淡'),
    捂脚持续天数: z.coerce.number().transform(v => _.clamp(v, 0, 999)).prefault(0),
  }).prefault({}),
  隐式追踪: z.object({
    当前被触发部位: z.string().prefault('无'),
  }).prefault({}),
}).prefault({});

export type Schema = z.output<typeof Schema>;
