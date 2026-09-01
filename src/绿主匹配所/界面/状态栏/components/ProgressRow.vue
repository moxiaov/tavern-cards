<template>
  <div class="row">
    <div class="row-top">
      <span class="label">{{ label }}</span>
      <span class="stage">{{ note || stage }}</span>
    </div>
    <div class="track">
      <div class="fill" :style="{ width: value + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: number;
  stage: string;
  note: string;
}>();
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.row-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.label {
  font-weight: 700;
  font-size: 12px;
  color: var(--c-text);
}

.stage {
  font-size: 11px;
  color: var(--c-text-muted);
}

.track {
  height: 8px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid var(--c-border);
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--c-accent), var(--c-primary));
  transition: width 0.4s ease;
}
</style>
