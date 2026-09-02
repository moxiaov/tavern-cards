<template>
  <div class="candidate" :class="{ empty: !candidate.名字 }">
    <span class="c-name">{{ candidate.名字 || '待生成' }}</span>
    <span class="c-meta">{{ candidate.性别 }}{{ candidate.年龄 ? ' · ' + candidate.年龄 + '岁' : '' }}</span>
    <span class="c-look">{{ candidate.外貌 || '' }}</span>
    <span class="c-bg">{{ candidate.背景 || '' }}</span>
    <button v-if="candidate.名字" class="c-select" type="button" @click="$emit('select')">选定</button>
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
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px 10px;
  border-bottom: 1px dashed var(--c-border);
  font-size: 12px;
  line-height: 1.5;
}

.candidate:last-child {
  border-bottom: none;
}

.candidate.empty {
  opacity: 0.5;
}

.c-name {
  font-weight: 700;
  font-size: 13px;
  color: var(--c-text);
}

.c-meta {
  font-size: 11px;
  color: var(--c-text-muted);
}

.c-look {
  color: var(--c-text);
}

.c-bg {
  color: var(--c-text-muted);
}

.c-select {
  margin-left: auto;
  padding: 2px 12px;
  border: 1px solid var(--c-primary-deep);
  border-radius: 10px;
  background: #fff;
  color: var(--c-primary-deep);
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.c-select:hover {
  background: var(--c-primary-deep);
  color: #fff;
}
</style>
