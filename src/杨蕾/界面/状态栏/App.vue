<template>
  <div class="card">
    <header class="header">
      <div class="title-wrap">
        <span class="title">杨蕾</span>
        <span class="subtitle">凛城大学 · 经管系</span>
      </div>
      <span class="status">{{ statusText }}</span>
    </header>

    <div class="body">
      <section class="block">
        <h3 class="block-title"><i class="fa-regular fa-moon"></i> 你看不见的时候</h3>
        <div class="bar-row">
          <span class="bar-label">关系</span>
          <div class="track">
            <div class="fill fill-danger" :style="{ width: store.data.隐奸.主奴关系深度 + '%' }"></div>
          </div>
          <span class="bar-pct">{{ store.data.隐奸.主奴关系深度 }}</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">开发</span>
          <div class="track">
            <div class="fill fill-danger" :style="{ width: store.data.隐奸.杨蕾开发度 + '%' }"></div>
          </div>
          <span class="bar-pct">{{ store.data.隐奸.杨蕾开发度 }}</span>
        </div>
        <div class="note">{{ devNote }}</div>
      </section>

      <section class="block">
        <h3 class="block-title"><i class="fa-regular fa-shoe-prints"></i> 她的脚</h3>
        <div class="chips">
          <span class="chip">捂脚 {{ store.data.隐奸.杨蕾脚状态.捂脚天数 }} 天</span>
          <span class="chip">{{ store.data.隐奸.杨蕾脚状态.袜子状态 }}</span>
          <span class="chip">{{ store.data.隐奸.杨蕾脚状态.脚味程度 }}</span>
        </div>
      </section>

      <section class="block">
        <h3 class="block-title"><i class="fa-regular fa-feather"></i> 痕迹</h3>
        <div class="marks">
          <span v-if="store.data.隐奸.杨蕾痕迹.恋足痕迹 && store.data.隐奸.杨蕾痕迹.恋足痕迹 !== '无'" class="mark">恋足 · {{ store.data.隐奸.杨蕾痕迹.恋足痕迹 }}</span>
          <span v-if="store.data.隐奸.杨蕾痕迹.TK痕迹 && store.data.隐奸.杨蕾痕迹.TK痕迹 !== '无'" class="mark">TK · {{ store.data.隐奸.杨蕾痕迹.TK痕迹 }}</span>
          <span v-if="store.data.隐奸.杨蕾痕迹.SM痕迹 && store.data.隐奸.杨蕾痕迹.SM痕迹 !== '无'" class="mark">SM · {{ store.data.隐奸.杨蕾痕迹.SM痕迹 }}</span>
          <span v-if="store.data.隐奸.杨蕾痕迹.味道 && store.data.隐奸.杨蕾痕迹.味道 !== '无'" class="mark">味道 · {{ store.data.隐奸.杨蕾痕迹.味道 }}</span>
          <span v-if="!hasMark" class="mark empty">干干净净</span>
        </div>
      </section>

      <section class="block">
        <h3 class="block-title"><i class="fa-regular fa-book"></i> 发生的事</h3>
        <div class="events">
          <div v-for="(e, i) in store.data.隐奸.隐奸事件记录" :key="i" class="event">{{ e }}</div>
          <div v-if="!store.data.隐奸.隐奸事件记录.length" class="event empty">什么也没发生</div>
        </div>
      </section>

      <section class="block">
        <h3 class="block-title"><i class="fa-regular fa-heart"></i> 她心里，你</h3>
        <div class="bar-row">
          <span class="bar-label">依赖</span>
          <div class="track">
            <div class="fill fill-accent" :style="{ width: store.data.杨蕾.对小v依赖度 + '%' }"></div>
          </div>
          <span class="bar-pct">{{ store.data.杨蕾.对小v依赖度 }}</span>
        </div>
        <div class="note">{{ depNote }}</div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';

const store = useDataStore();

const statusText = computed(() => {
  const s = store.data.隐奸.杨蕾当前状态;
  if (s === '被调教中') return '还没回来';
  if (s === '刚被玩弄完') return '刚回来';
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

const hasMark = computed(() => {
  const m = store.data.隐奸.杨蕾痕迹;
  return [m.恋足痕迹, m.TK痕迹, m.SM痕迹, m.味道].some(v => v && v !== '无');
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  overflow: hidden;
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 12px;
  box-shadow: 0 4px 16px rgba(169, 124, 134, 0.10);
}

.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 14px 16px;
  background: linear-gradient(135deg, #fdf3f4, #f7e4e7);
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
  padding: 12px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.block-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  color: var(--c-primary-deep);
  letter-spacing: 1px;
}

.block-title i {
  color: var(--c-primary);
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bar-label {
  width: 28px;
  font-size: 10px;
  color: var(--c-text-muted);
  flex-shrink: 0;
}

.track {
  flex: 1;
  height: 10px;
  border-radius: 999px;
  background: #f2e9df;
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.fill-danger {
  background: linear-gradient(90deg, #eec3c3, var(--c-danger));
}

.fill-accent {
  background: linear-gradient(90deg, #c4ddd0, var(--c-accent));
}

.bar-pct {
  width: 28px;
  text-align: right;
  font-size: 10px;
  font-weight: 600;
  color: var(--c-text-muted);
  flex-shrink: 0;
}

.note {
  font-size: 10px;
  color: var(--c-text-muted);
  padding-left: 36px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  background: #fbf4ec;
  border: 1px solid var(--c-border);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  color: var(--c-text);
}

.marks {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mark {
  background: #fdf5f5;
  border: 1px solid #f0d8d8;
  border-radius: 8px;
  padding: 4px 9px;
  font-size: 11px;
  color: #a06a6a;
}

.mark.empty {
  background: #f7f7f7;
  border-color: var(--c-border);
  color: var(--c-text-muted);
}

.events {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.event {
  font-size: 11px;
  color: var(--c-text);
  line-height: 1.6;
  padding-left: 8px;
  border-left: 2px solid var(--c-border);
}

.event.empty {
  color: var(--c-text-muted);
  border-left-color: #eee;
}
</style>
