export const Schema = z.object({
  洛洛: z.object({
    精神归属: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    肉体开发度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    对绿主感情: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    生活归属: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    当前状态: z.string().prefault('尚未开始'),
  }).prefault({}),
  绿主: z.object({
    已选定: z.boolean().prefault(false),
    名字: z.string().prefault(''),
    性别: z.string().prefault(''),
    年龄: z.coerce.number().prefault(0),
    外貌: z.string().prefault(''),
    背景故事: z.string().prefault(''),
    五维: z.object({
      性格底色: z.string().prefault(''),
      身份职业: z.string().prefault(''),
      外貌气质: z.string().prefault(''),
      调教风格: z.string().prefault(''),
      对洛洛态度: z.string().prefault(''),
    }).prefault({}),
  }).prefault({}),
  候选: z.object({
    候选1: z.object({
      名字: z.string().prefault(''),
      性别: z.string().prefault(''),
      年龄: z.coerce.number().prefault(0),
      外貌: z.string().prefault(''),
      背景: z.string().prefault(''),
    }).prefault({}),
    候选2: z.object({
      名字: z.string().prefault(''),
      性别: z.string().prefault(''),
      年龄: z.coerce.number().prefault(0),
      外貌: z.string().prefault(''),
      背景: z.string().prefault(''),
    }).prefault({}),
    候选3: z.object({
      名字: z.string().prefault(''),
      性别: z.string().prefault(''),
      年龄: z.coerce.number().prefault(0),
      外貌: z.string().prefault(''),
      背景: z.string().prefault(''),
    }).prefault({}),
    候选4: z.object({
      名字: z.string().prefault(''),
      性别: z.string().prefault(''),
      年龄: z.coerce.number().prefault(0),
      外貌: z.string().prefault(''),
      背景: z.string().prefault(''),
    }).prefault({}),
  }).prefault({}),
  剧情: z.object({
    当前阶段: z.string().prefault('选人'),
    已完成里程碑: z.array(z.string()).prefault([]),
    当前时间: z.string().prefault(''),
    当前场景: z.string().prefault(''),
  }).prefault({}),
}).prefault({});

export type SchemaType = z.infer<typeof Schema>;
