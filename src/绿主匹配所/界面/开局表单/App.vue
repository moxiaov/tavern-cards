<template>
  <div class="form-card">
    <div class="form-header">
      <span class="form-title">绿主匹配所</span>
      <span class="form-sub">请从四位候选中选一位</span>
    </div>

    <div class="candidates">
      <CandidateCard
        v-for="(c, i) in candidates"
        :key="i"
        :candidate="c"
        @select="onSelect(c)"
      />
    </div>

    <div class="form-actions">
      <button class="btn-reroll" type="button" @click="onReroll">
        <i class="fa fa-refresh" /> 换一批
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';
import CandidateCard from './components/CandidateCard.vue';
import { generateBatch } from './generator';

const store = useDataStore();

const candidates = computed(() => [
  store.data.候选.候选1,
  store.data.候选.候选2,
  store.data.候选.候选3,
  store.data.候选.候选4,
]);

function writeBatch() {
  const batch = generateBatch();
  store.data.候选.候选1 = batch[0];
  store.data.候选.候选2 = batch[1];
  store.data.候选.候选3 = batch[2];
  store.data.候选.候选4 = batch[3];
}

function isEmpty() {
  return !store.data.候选.候选1.名字 && !store.data.候选.候选2.名字 && !store.data.候选.候选3.名字 && !store.data.候选.候选4.名字;
}

// 首次加载时，如果候选为空，自动生成一批
if (isEmpty()) {
  writeBatch();
}

function onSelect(c: { 名字: string; 性别: string; 年龄: number; 外貌: string; 背景: string }) {
  if (!c.名字) return;
  store.data.绿主.名字 = c.名字;
  store.data.绿主.性别 = c.性别;
  store.data.绿主.年龄 = c.年龄;
  store.data.绿主.外貌 = c.外貌;
  store.data.绿主.背景故事 = c.背景;
  store.data.绿主.已选定 = true;
  store.data.剧情.当前阶段 = '线上';
  createChatMessages([
    {
      role: 'user',
      name: '你',
      message:
        '我选了' + c.名字 + '（' + c.性别 + '，' + c.年龄 + '岁）。请根据他的外貌和背景，确定他的性格底色、身份职业、外貌气质、调教风格、对洛洛态度这五维，然后开始洛洛与他的线上聊天。',
    },
  ]).then(() => {
    triggerSlash('/trigger');
  });
}

function onReroll() {
  writeBatch();
}
</script>

<style lang="scss" scoped>
.form-card {
  width: 100%;
  max-width: 680px;
  background-color: var(--c-surface-warm);
  border: 2px solid var(--c-border);
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(90, 74, 66, 0.10);
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 13px;
  margin: 0 auto;
  overflow: hidden;
}

.form-header {
  padding: 12px 14px;
  background: linear-gradient(135deg, var(--c-primary), var(--c-accent));
}

.form-title {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

.form-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.85);
}

.candidates {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 12px 14px;
}

.form-actions {
  display: flex;
  justify-content: center;
  padding: 0 14px 14px;
}

.btn-reroll {
  padding: 6px 18px;
  border: 1px solid var(--c-primary-deep);
  border-radius: 16px;
  background: #fff;
  color: var(--c-primary-deep);
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.btn-reroll:hover {
  background: var(--c-primary-deep);
  color: #fff;
}
</style>
