$(async () => {
  await waitGlobalInitialized('Mvu');

  eventOn(Mvu.events.VARIABLE_UPDATE_ENDED, variables => {
    const raw = _.get(variables, 'stat_data.状态栏数据.解放时刻');
    if (typeof raw !== 'string' || raw.trim() === '') return;
    const ms = parseDuration(raw);
    if (ms === null) return;
    _.set(variables, 'stat_data.状态栏数据.解放时刻', new Date(Date.now() + ms).toISOString());
  });
});

function parseDuration(text: string): number | null {
  const s = text.trim();
  if (s === '') return null;
  const re = /(\d+(?:\.\d+)?)\s*(天|日|小时|时|分钟|分|秒)/g;
  const units: Record<string, number> = {
    天: 86400000,
    日: 86400000,
    小时: 3600000,
    时: 3600000,
    分钟: 60000,
    分: 60000,
    秒: 1000,
  };
  let total = 0;
  let matched = false;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s)) !== null) {
    const num = parseFloat(m[1]);
    const unit = m[2];
    total += num * units[unit];
    matched = true;
  }
  if (!matched || total <= 0) return null;
  return total;
}
