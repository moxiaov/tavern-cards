<template>
  <div class="card">
    <div class="header">
      <span class="title">杨蕾</span>
      <span class="subtitle">{{ statusText }}</span>
    </div>

    <div class="body">
      <div class="section">
        <div class="section-title">隐奸暗涌</div>
        <div class="track">
          <div class="fill fill-dark" :style="{ width: store.data.隐奸.主奴关系深度 + '%' }"></div>
          <span class="pct">{{ store.data.隐奸.主奴关系深度 }}%</span>
        </div>
        <div class="note">主奴关系深度</div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.隐奸.杨蕾开发度 + '%' }"></div>
          <span class="pct">{{ store.data.隐奸.杨蕾开发度 }}%</span>
        </div>
        <div class="note">开发度 · {{ devNote }}</div>
      </div>

      <div class="section">
        <div class="section-title">她的脚</div>
        <div class="row">
          <div class="mini">
            <span class="mini-label">捂脚</span>
            <span class="mini-value">{{ store.data.隐奸.杨蕾脚状态.捂脚天数 }} 天</span>
          </div>
          <div class="mini">
            <span class="mini-label">袜子</span>
            <span class="mini-value">{{ store.data.隐奸.杨蕾脚状态.袜子状态 }}</span>
          </div>
          <div class="mini">
            <span class="mini-label">脚味</span>
            <span class="mini-value">{{ store.data.隐奸.杨蕾脚状态.脚味程度 }}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">身上痕迹</div>
        <div class="marks">
          <span v-if="store.data.隐奸.杨蕾痕迹.恋足痕迹" class="mark">恋足 · {{ store.data.隐奸.杨蕾痕迹.恋足痕迹 }}</span>
          <span v-if="store.data.隐奸.杨蕾痕迹.TK痕迹" class="mark">TK · {{ store.data.隐奸.杨蕾痕迹.TK痕迹 }}</span>
          <span v-if="store.data.隐奸.杨蕾痕迹.SM痕迹" class="mark">SM · {{ store.data.隐奸.杨蕾痕迹.SM痕迹 }}</span>
          <span v-if="store.data.隐奸.杨蕾痕迹.味道" class="mark">味道 · {{ store.data.隐奸.杨蕾痕迹.味道 }}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">你不在的时候</div>
        <div class="events">
          <div v-for="(e, i) in store.data.隐奸.隐奸事件记录" :key="i" class="event">{{ e }}</div>
          <div v-if="!store.data.隐奸.隐奸事件记录.length" class="event empty">还没发现什么</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">她对你</div>
        <div class="track">
          <div class="fill fill-accent" :style="{ width: store.data.杨蕾.对小v依赖度 + '%' }"></div>
          <span class="pct">{{ store.data.杨蕾.对小v依赖度 }}%</span>
        </div>
        <div class="note">{{ depNote }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';

const store = useDataStore();

const statusText = computed(() => {
  const s = store.data.隐奸.杨蕾当前状态;
  if (s === '被调教中') return '被调教中';
  if (s === '刚被玩弄完') return '刚被玩弄完';
  return '安静自习';
});

const devNote = computed(() => {
  const v = store.data.隐奸.杨蕾开发度;
  if (v >= 91) return '偏爱沉沦';
  if (v >= 76) return '彻底沉沦';
  if (v >= 61) return '主动享受';
  if (v >= 46) return '逐渐适应';
  if (v >= 31) return '半推半就';
  if (v >= 16) return '挣扎求饶';
  return '害羞抗拒';
});

const depNote = computed(() => {
  const v = store.data.杨蕾.对小v依赖度;
  if (v >= 70) return '把你当弟弟';
  if (v >= 45) return '愿意亲近';
  if (v >= 20) return '渐渐熟悉';
  return '温和疏离';
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: var(--c-surface);
  border: 2px solid var(--c-primary);
  border-radius: 12px;
  overflow: hidden;
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 12px;
  box-shadow: 0 3px 12px rgba(58, 47, 58, 0.12);
}

.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px 14px;
  background: linear-gradient(135deg, var(--c-primary-deep), var(--c-primary));
}

.title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 3px;
}

.subtitle {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.85);
}

.body {
  padding: 10px 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.section-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--c-primary-deep);
  letter-spacing: 1px;
}

.track {
  position: relative;
  height: 18px;
  border-radius: 9px;
  background: #fff;
  border: 1px solid var(--c-border);
  overflow: hidden;
}

.fill {
  height: 100%;
  transition: width 0.5s ease;
}

.fill-dark {
  background: linear-gradient(90deg, var(--c-primary), var(--c-surface-deep));
}

.fill-danger {
  background: linear-gradient(90deg, var(--c-accent), var(--c-danger));
}

.fill-accent {
  background: linear-gradient(90deg, var(--c-accent), #f0c8cf);
}

.pct {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 700;
  color: var(--c-text);
}

.note {
  font-size: 11px;
  color: var(--c-text-muted);
}

.row {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.mini {
  flex: 1;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mini-label {
  font-size: 10px;
  color: var(--c-text-muted);
}

.mini-value {
  font-size: 12px;
  font-weight: 700;
  color: var(--c-text);
}

.marks {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mark {
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 11px;
  color: var(--c-text);
}

.events {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.event {
  font-size: 11px;
  color: var(--c-text);
  line-height: 1.5;
}

.event.empty {
  color: var(--c-text-muted);
}
</style>
