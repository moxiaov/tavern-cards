<template>
  <div class="card">
    <div class="header">
      <span class="title">苏暖</span>
      <span class="subtitle">花店·规训中</span>
    </div>

    <div class="body">
      <div class="heart">{{ store.data.状态栏数据.苏暖心语 || '……' }}</div>

      <div class="section">
        <div class="section-title">忍耐汁收集管</div>
        <div class="track">
          <div class="fill" :style="{ width: store.data.状态栏数据.忍耐汁量 + '%' }"></div>
          <span class="pct">{{ store.data.状态栏数据.忍耐汁量 }}%</span>
        </div>
        <div class="note">{{ juiceNote }}</div>
      </div>

      <div class="section">
        <div class="section-title">解放倒计时</div>
        <div class="countdown">{{ countdownText }}</div>
        <div class="note">{{ releaseNote }}</div>
      </div>

      <div class="section">
        <div class="section-title">透明高筒靴</div>
        <div class="track boot">
          <div class="fill boot-fill" :style="{ width: store.data.捂脚靴.汗液量 + '%' }"></div>
          <span class="pct">{{ store.data.捂脚靴.汗液量 }}%</span>
        </div>
        <div class="note">{{ bootNote }}</div>
      </div>

      <div class="section row">
        <div class="mini">
          <span class="mini-label">此刻被挠</span>
          <span class="mini-value">{{ store.data.隐式追踪.当前被触发部位 }}</span>
        </div>
        <div class="mini">
          <span class="mini-label">今日被规训</span>
          <span class="mini-value">{{ store.data.状态栏数据.今日被规训次数 }} 次</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useDataStore } from './store';

const store = useDataStore();

const now = ref(Date.now());
let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

const countdownText = computed(() => {
  const target = store.data.状态栏数据.解放时刻;
  if (!target) return '未设定';
  const t = new Date(target).getTime();
  if (isNaN(t)) return target;
  const diff = t - now.value;
  if (diff <= 0) return '可以射了';
  const totalSec = Math.floor(diff / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  if (d > 0) return `${d}天 ${h}小时 ${m}分`;
  if (h > 0) return `${h}小时 ${m}分 ${s}秒`;
  if (m > 0) return `${m}分 ${s}秒`;
  return `${s}秒`;
});

const juiceNote = computed(() => {
  const v = store.data.状态栏数据.忍耐汁量;
  if (v >= 100) return '满溢，顺着大腿根流下';
  if (v >= 80) return '玻璃管快装不下了';
  if (v >= 50) return '黏腻的汁液在管里晃';
  if (v > 0) return '渗出一点点，挂在管壁';
  return '空的，还没被撩起来';
});

const releaseNote = computed(() => {
  const target = store.data.状态栏数据.解放时刻;
  if (!target) return '她还没给你定规矩';
  const t = new Date(target).getTime();
  if (isNaN(t)) return '';
  if (t - now.value <= 0) return '她笑吟吟地等着看你憋不住';
  return '忍着，越久射出来越舒服';
});

const bootNote = computed(() => {
  const v = store.data.捂脚靴.汗液量;
  const smell = store.data.捂脚靴.脚味浓度;
  const days = store.data.捂脚靴.捂脚持续天数;
  if (v >= 100) return `捂到小腿深，浓汗泛油光 · 已捂 ${days} 天`;
  if (v >= 50) return `汗液在靴里逛荡 · ${smell} · 已捂 ${days} 天`;
  if (v > 0) return `薄薄一层汗 · ${smell} · 已捂 ${days} 天`;
  return `没在捂脚 · ${smell}`;
});
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: var(--c-surface);
  border: 2px solid var(--c-brass);
  border-radius: 12px;
  overflow: hidden;
  font-family: var(--font-main);
  color: var(--c-text);
  font-size: 12px;
  box-shadow: 0 3px 12px rgba(60, 45, 30, 0.12);
}

.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px 14px;
  background: linear-gradient(135deg, var(--c-brass-deep), var(--c-copper));
}

.title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
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

.heart {
  padding: 8px 12px;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--c-text);
  font-style: italic;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.section-title {
  font-size: 11px;
  font-weight: 700;
  color: var(--c-brass-deep);
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
  background: linear-gradient(90deg, var(--c-lust), var(--c-lust-deep));
  transition: width 0.5s ease;
}

.boot-fill {
  background: linear-gradient(90deg, var(--c-glass), #e7cf9a);
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

.countdown {
  font-size: 20px;
  font-weight: 700;
  color: var(--c-brass-deep);
  letter-spacing: 1px;
  font-variant-numeric: tabular-nums;
}

.row {
  flex-direction: row;
  gap: 12px;
}

.mini {
  flex: 1;
  background: #fff;
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 6px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mini-label {
  font-size: 10px;
  color: var(--c-text-muted);
}

.mini-value {
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text);
}
</style>
