<template>
  <div class="card">
    <header class="header">
      <div class="title-wrap">
        <span class="title">许夏</span>
        <span class="subtitle">星港市 · {{ store.data.世界.星期 }} · {{ store.data.世界.时间段 }}</span>
      </div>
      <span class="status">{{ store.data.许夏.当前心情状态 }}</span>
    </header>

    <div class="body">
      <div class="stage-chip">{{ arcStage }}</div>

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

      <section class="trace-block">
        <div class="trace-head">身体痕迹</div>
        <div class="trace-item">做爱：{{ store.data.许夏.身体痕迹.做爱 || '无' }}</div>
        <div class="trace-item">TK：{{ store.data.许夏.身体痕迹.TK || '无' }}</div>
        <div class="trace-item">SM：{{ store.data.许夏.身体痕迹.SM || '无' }}</div>
        <div class="trace-item">恋足：{{ store.data.许夏.身体痕迹.恋足 || '无' }}</div>
      </section>

      <section class="trace-block">
        <div class="trace-head">脚状态</div>
        <div class="trace-item">闷脚 {{ store.data.前男友.江野.脚状态.闷脚天数 }} 天 · {{ store.data.前男友.江野.脚状态.脚味状态 }}</div>
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
  return '心理弧线 · ' + (names[v] || names[0]);
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
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  overflow: hidden;
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 12px;
  box-shadow: 0 4px 16px rgba(184, 128, 92, 0.10);
}

.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 14px 16px;
  background: linear-gradient(135deg, #fdf6ee, #f9ecdf);
  border-bottom: 1px solid var(--c-border);
}

.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.title {
  font-size: 17px;
  font-weight: 700;
  color: var(--c-primary-deep);
  letter-spacing: 4px;
}

.subtitle {
  font-size: 10px;
  color: var(--c-text-muted);
  letter-spacing: 1px;
}

.status {
  font-size: 11px;
  color: var(--c-primary-deep);
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 999px;
  padding: 3px 10px;
}

.body {
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stage-chip {
  align-self: flex-start;
  font-size: 11px;
  color: var(--c-primary-deep);
  background: #fdf3ea;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  padding: 3px 8px;
}

.bar-block {
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  height: 12px;
  border-radius: 999px;
  background: #f2e9df;
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.fill-primary {
  background: linear-gradient(90deg, #f0c9a0, var(--c-primary));
}

.fill-danger {
  background: linear-gradient(90deg, #eec3b8, var(--c-danger));
}

.fill-accent {
  background: linear-gradient(90deg, #e3cfae, var(--c-accent));
}

.bar-note {
  font-size: 11px;
  color: var(--c-text-muted);
}

.trace-block {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 4px;
  border-top: 1px dashed var(--c-border);
}

.trace-head {
  font-size: 11px;
  font-weight: 600;
  color: var(--c-primary-deep);
  letter-spacing: 1px;
}

.trace-item {
  font-size: 11px;
  color: var(--c-text-muted);
}
</style>
