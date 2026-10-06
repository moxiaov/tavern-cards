<template>
  <div class="card">
    <header class="header">
      <div class="title-wrap">
        <span class="title">许夏</span>
        <span class="subtitle">{{ store.data.世界.星期 }} · {{ store.data.世界.时间段 }}</span>
      </div>
      <span class="mood">{{ store.data.许夏.当前心情状态 }}</span>
    </header>

    <div class="body">
      <div class="arc">
        <span class="arc-label">{{ arcStage }}</span>
        <span class="arc-hint">{{ arcHint }}</span>
      </div>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">开发度</span>
          <span class="bar-pct">{{ store.data.许夏.开发度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-primary" :style="{ width: (store.data.许夏.开发度 / 2) + '%' }"></div>
        </div>
        <div class="bar-note">{{ devNote }}</div>
      </section>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">心里出轨</span>
          <span class="bar-pct">{{ store.data.许夏.心里出轨度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.许夏.心里出轨度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ betrayNote }}</div>
      </section>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">对你的感情</span>
          <span class="bar-pct">{{ store.data.许夏.对男主感情 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-accent" :style="{ width: store.data.许夏.对男主感情 + '%' }"></div>
        </div>
        <div class="bar-note">{{ loveNote }}</div>
      </section>

      <div class="divider"></div>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">陆阳</span>
          <span class="bar-pct">沉沦 {{ store.data.前男友.陆阳.沉沦度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.前男友.陆阳.沉沦度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ luNote }} · 做爱{{ store.data.前男友.陆阳.次数.做爱 }} 口交{{ store.data.前男友.陆阳.次数.口交 }} TK{{ store.data.前男友.陆阳.次数.TK }} 调教{{ store.data.前男友.陆阳.次数.调教 }}</div>
      </section>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">程屿</span>
          <span class="bar-pct">沉沦 {{ store.data.前男友.程屿.沉沦度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.前男友.程屿.沉沦度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ chengNote }} · 做爱{{ store.data.前男友.程屿.次数.做爱 }} 口交{{ store.data.前男友.程屿.次数.口交 }} TK{{ store.data.前男友.程屿.次数.TK }} 调教{{ store.data.前男友.程屿.次数.调教 }}</div>
      </section>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">江野</span>
          <span class="bar-pct">沉沦 {{ store.data.前男友.江野.沉沦度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.前男友.江野.沉沦度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ jiangNote }} · 做爱{{ store.data.前男友.江野.次数.做爱 }} 口交{{ store.data.前男友.江野.次数.口交 }} TK{{ store.data.前男友.江野.次数.TK }} 调教{{ store.data.前男友.江野.次数.调教 }}</div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';

const store = useDataStore();

const arcStage = computed(() => {
  const v = store.data.许夏.心理弧线阶段;
  const names = ['起点', '意外试探', '理解NTR', '理解TK', '融合', '接纳', '一起玩'];
  return names[v] || names[0];
});

const arcHint = computed(() => {
  const v = store.data.许夏.心理弧线阶段;
  const hints = [
    '她还没对你松口',
    '她在试探你',
    '她开始懂你的癖好了',
    '她把过去讲给你听',
    '她看懂了你最想要的',
    '她愿意陪你玩了',
    '她主动跨出那一步了'
  ];
  return hints[v] || hints[0];
});

const devNote = computed(() => {
  const v = store.data.许夏.开发度;
  if (v >= 186) return '偏爱沉沦';
  if (v >= 161) return '极致沉沦';
  if (v >= 136) return '深度沉沦';
  if (v >= 111) return '彻底沉沦';
  if (v >= 86) return '欲罢不能';
  if (v >= 60) return '主动享受';
  return '逐渐适应';
});

const betrayNote = computed(() => {
  const v = store.data.许夏.心里出轨度;
  if (v >= 81) return '几乎被占据';
  if (v >= 61) return '明显偏向';
  if (v >= 41) return '半出轨';
  if (v >= 21) return '轻微动摇';
  return '精神忠诚';
});

const loveNote = computed(() => {
  const v = store.data.许夏.对男主感情;
  if (v >= 91) return '正缘笃定';
  if (v >= 71) return '深爱';
  if (v >= 41) return '亲近依赖';
  return '平淡';
});

const luNote = computed(() => {
  const v = store.data.前男友.陆阳.沉沦度;
  if (v >= 81) return '彻底沉迷';
  if (v >= 61) return '上瘾依赖';
  if (v >= 41) return '主动想要';
  if (v >= 21) return '有点上头';
  return '可有可无';
});

const chengNote = computed(() => {
  const v = store.data.前男友.程屿.沉沦度;
  if (v >= 81) return '彻底沉迷';
  if (v >= 61) return '上瘾依赖';
  if (v >= 41) return '主动想要';
  if (v >= 21) return '有点上头';
  return '可有可无';
});

const jiangNote = computed(() => {
  const v = store.data.前男友.江野.沉沦度;
  if (v >= 81) return '彻底沉迷';
  if (v >= 61) return '上瘾依赖';
  if (v >= 41) return '主动想要';
  if (v >= 21) return '有点上头';
  return '可有可无';
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: linear-gradient(180deg, var(--c-surface), var(--c-surface-2));
  border: 1px solid var(--c-border);
  border-radius: 16px;
  overflow: hidden;
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 12px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
}

.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 16px 18px 14px;
  border-bottom: 1px solid var(--c-border);
}

.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: var(--c-accent);
  letter-spacing: 6px;
}

.subtitle {
  font-size: 11px;
  color: var(--c-text-muted);
  letter-spacing: 1px;
}

.mood {
  font-size: 12px;
  color: var(--c-accent);
  background: rgba(212, 93, 121, 0.16);
  border: 1px solid var(--c-border);
  border-radius: 999px;
  padding: 5px 14px;
}

.body {
  padding: 14px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.arc {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background: rgba(255, 158, 181, 0.08);
  border: 1px solid rgba(212, 93, 121, 0.35);
  border-radius: 10px;
  padding: 10px 14px;
}

.arc-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-primary);
  letter-spacing: 1px;
}

.arc-hint {
  font-size: 11px;
  color: var(--c-text-muted);
}

.divider {
  height: 1px;
  background: var(--c-border);
  opacity: 0.5;
}

.bar-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bar-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.bar-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--c-text);
  letter-spacing: 1px;
}

.bar-pct {
  font-size: 11px;
  font-weight: 700;
  color: var(--c-text-muted);
}

.track {
  height: 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.fill-primary {
  background: linear-gradient(90deg, #7c2d3e, var(--c-primary));
}

.fill-danger {
  background: linear-gradient(90deg, #8c2a3e, var(--c-danger));
}

.fill-accent {
  background: linear-gradient(90deg, #8c4760, var(--c-accent));
}

.bar-note {
  font-size: 11px;
  color: var(--c-text-muted);
}
</style>
