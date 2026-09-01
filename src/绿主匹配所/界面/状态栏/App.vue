<template>
  <div class="card">
    <div class="header">
      <span class="title">洛洛</span>
      <span class="phase-tag">{{ phaseLabel }}</span>
    </div>

    <div class="progress-list">
      <ProgressRow
        label="精神归属"
        :value="store.data.洛洛.精神归属"
        :stage="stageOfSpirit"
        :note="spiritNote"
      />
      <ProgressRow
        label="肉体开发"
        :value="store.data.洛洛.肉体开发度"
        :stage="stageOfBody"
        :note="bodyNote"
      />
      <ProgressRow
        label="对绿主感情"
        :value="store.data.洛洛.对绿主感情"
        :stage="stageOfLove"
        :note="loveNote"
      />
      <ProgressRow
        label="生活归属"
        :value="store.data.洛洛.生活归属"
        :stage="stageOfLife"
        :note="lifeNote"
      />
    </div>

    <div class="status-line">
      <span class="status-label">此刻</span>
      <span class="status-text">{{ store.data.洛洛.当前状态 || '尚未开始' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';
import ProgressRow from './components/ProgressRow.vue';

const store = useDataStore();

const stageNames8 = ['心在你这', '好奇松动', '身体先背叛', '左右为难', '天平倾斜', '已属他她', '全盘换主', '亲密知己'];
const stageNames10 = ['只认你', '被越界的刺激', '敏感带失控', '初次口交', '首次交合', '被夺走的节奏', '调教手段介入', '身体沉迷', '彻底开发', '成他的形状'];
const stageNames12 = ['只有你', '第一次晚归', '第一次不归', '习惯松动', '物品入侵', '重心倾斜', '身份松动', '半公开', '主线转移', '实质同居', '成为他的妻', '绿主家的中心'];

function stageIndex(value: number, total: number): number {
  const idx = Math.floor(value / 100 * total);
  return Math.min(idx, total - 1);
}

const stageOfSpirit = computed(() => stageNames8[stageIndex(store.data.洛洛.精神归属, 8)]);
const stageOfBody = computed(() => stageNames10[stageIndex(store.data.洛洛.肉体开发度, 10)]);
const stageOfLove = computed(() => stageNames8[stageIndex(store.data.洛洛.对绿主感情, 8)]);
const stageOfLife = computed(() => stageNames12[stageIndex(store.data.洛洛.生活归属, 12)]);

const spiritNote = computed(() => store.data.洛洛.精神归属 <= 0 ? '心在你这里' : '');
const bodyNote = computed(() => store.data.洛洛.肉体开发度 <= 0 ? '从未真正舒服过' : '');
const loveNote = computed(() => store.data.洛洛.对绿主感情 <= 0 ? '只是任务对象' : '');
const lifeNote = computed(() => store.data.洛洛.生活归属 <= 0 ? '天天回家' : '');

const phaseLabel = computed(() => {
  const p = store.data.剧情.当前阶段;
  if (p === '选人') return '挑选绿主';
  if (p === '线上') return '线上升温';
  return '线下推进';
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 680px;
  background-color: var(--c-surface-warm);
  border: 2px solid var(--c-border);
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(90, 74, 66, 0.10);
  display: flex;
  flex-direction: column;
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 13px;
  line-height: 1.4;
  margin: 0 auto;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: linear-gradient(135deg, var(--c-primary), var(--c-accent));
}

.title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

.phase-tag {
  font-size: 11px;
  color: #fff;
  background: rgba(255, 255, 255, 0.25);
  padding: 2px 10px;
  border-radius: 10px;
}

.progress-list {
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.status-line {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 10px 14px;
  border-top: 1px dashed var(--c-border);
  background: #fff;
}

.status-label {
  font-size: 11px;
  color: var(--c-primary-deep);
  font-weight: 700;
  flex-shrink: 0;
}

.status-text {
  color: var(--c-text);
  font-size: 12px;
}
</style>
