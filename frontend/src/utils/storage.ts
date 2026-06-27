export function generateSessionId(): string {
  return 'sess_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
}

export function setLocal<T>(key: string, value: T): void {
  try {
    uni.setStorageSync(key, JSON.stringify(value));
  } catch (e) {
    console.warn('setLocal failed', key, e);
  }
}

export function getLocal<T>(key: string): T | null {
  try {
    const raw = uni.getStorageSync(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch (e) {
    console.warn('getLocal failed', key, e);
    return null;
  }
}

export function clearLocal(key: string): void {
  try {
    uni.removeStorageSync(key);
  } catch (e) {
    console.warn('clearLocal failed', key, e);
  }
}
