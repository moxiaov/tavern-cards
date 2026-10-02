// 许夏 MVU 变量结构（Zod 4）
// 运行环境已注入全局 z（zod v4）与 _（lodash），本文件禁止 import。

export const Schema = z.object({
  许夏: z.object({
    开发度: z.coerce.number().transform(v => _.clamp(v, 0, 200)),
    对男主感情: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    羞耻度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    心里出轨度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    当前心情状态: z.string(),
    心理弧线阶段: z.coerce.number().transform(v => _.clamp(v, 0, 6)),
    身体痕迹: z.object({
      做爱: z.string(),
      TK: z.string(),
      SM: z.string(),
      恋足: z.string(),
    }),
  }),

  前男友: z.object({
    陆阳: z.object({
      沉沦度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      次数: z.object({
        做爱: z.coerce.number(),
        口交: z.coerce.number(),
        TK: z.coerce.number(),
        调教: z.coerce.number(),
      }),
    }),
    程屿: z.object({
      沉沦度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      次数: z.object({
        做爱: z.coerce.number(),
        口交: z.coerce.number(),
        TK: z.coerce.number(),
        调教: z.coerce.number(),
      }),
    }),
    江野: z.object({
      沉沦度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
      次数: z.object({
        做爱: z.coerce.number(),
        口交: z.coerce.number(),
        TK: z.coerce.number(),
        调教: z.coerce.number(),
      }),
      脚状态: z.object({
        闷脚天数: z.coerce.number(),
        脚味状态: z.string(),
      }),
    }),
  }),

  世界: z.object({
    当前状态: z.enum(['空闲', '约炮中', '刚回来']),
    当前约炮对象: z.string(),
  }),
});

export type Schema = z.output<typeof Schema>;
