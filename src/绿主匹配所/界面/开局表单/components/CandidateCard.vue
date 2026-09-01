<template>
  <div class="candidate" :class="{ empty: !candidate.名字 }">
    <div class="c-head">
      <span class="c-name">{{ candidate.名字 || '待生成' }}</span>
      <span class="c-meta">{{ candidate.性别 }}{{ candidate.年龄 ? ' · ' + candidate.年龄 + '岁' : '' }}</span>
    </div>
    <div class="c-body">
      <p class="c-look">{{ candidate.外貌 || '——' }}</p>
      <p class="c-bg">{{ candidate.背景 || '' }}</p>
    </div>
    <button v-if="candidate.名字" class="c-select" type="button" @click="$emit('select')">
      选定
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  candidate: { 名字: string; 性别: string; 年龄: number; 外貌: string; 背景: string };
}>();

defineEmits<{ (e: 'select'): void }>();
</script>

<style lang="scss" scoped>
.candidate {
  border: 1px solid var(--c-border);
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 120px;
}

.candidate.empty {
  opacity: 0.5;
}

.c-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.c-name {
  font-weight: 700;
  font-size: 14px;
  color: var(--c-text);
}

.c-meta {
  font-size: 11px;
  color: var(--c-text-muted);
}

.c-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.c-look {
  font-size: 12px;
  color: var(--c-text);
  line-height: 1.4;
}

.c-bg {
  font-size: 11px;
  color: var(--c-text-muted);
  line-height: 1.35;
}

.c-select {
  align-self: flex-end;
  padding: 4px 14px;
  border: none;
  border-radius: 12px;
  background: var(--c-primary);
  color: #fff;
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.c-select:hover {
  background: var(--c-primary-deep);
}
</style>
