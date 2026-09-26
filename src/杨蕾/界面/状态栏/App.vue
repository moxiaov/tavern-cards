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
      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">主奴关系</span>
          <span class="bar-pct">{{ store.data.隐奸.主奴关系深度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.隐奸.主奴关系深度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ relationNote }}</div>
      </section>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">开发度</span>
          <span class="bar-pct">{{ store.data.隐奸.杨蕾开发度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.隐奸.杨蕾开发度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ devNote }}</div>
      </section>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">服从度</span>
          <span class="bar-pct">{{ store.data.隐奸.服从度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-danger" :style="{ width: store.data.隐奸.服从度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ obeyNote }}</div>
      </section>

      <section class="bar-block">
        <div class="bar-head">
          <span class="bar-name">对你的依赖</span>
          <span class="bar-pct">{{ store.data.杨蕾.对小v依赖度 }}</span>
        </div>
        <div class="track">
          <div class="fill fill-accent" :style="{ width: store.data.杨蕾.对小v依赖度 + '%' }"></div>
        </div>
        <div class="bar-note">{{ depNote }}</div>
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

const relationNote = computed(() => {
  const v = store.data.隐奸.主奴关系深度;
  if (v >= 91) return '离了主人活不下去';
  if (v >= 76) return '主人的规矩看得比命重';
  if (v >= 61) return '主人几天不理就失眠';
  if (v >= 46) return '背得出整本家规';
  if (v >= 31) return '会自己跪下来了';
  if (v >= 16) return '学会叫主人了';
  return '刚被网圈骗到线下';
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

const obeyNote = computed(() => {
  const v = store.data.隐奸.服从度;
  if (v >= 91) return '主人的话就是圣旨';
  if (v >= 76) return '不等命令就自己跪好';
  if (v >= 61) return '主人说什么是什么';
  if (v >= 46) return '让几天不洗脚也照做';
  if (v >= 31) return '命令还没说完就点头';
  if (v >= 16) return '嘴上说不，身体先动';
  return '要犹豫一下才照做';
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
  max-width: 480px;
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
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
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

.fill-danger {
  background: linear-gradient(90deg, #eec3c3, var(--c-danger));
}

.fill-accent {
  background: linear-gradient(90deg, #c4ddd0, var(--c-accent));
}

.bar-note {
  font-size: 11px;
  color: var(--c-text-muted);
}
</style>
