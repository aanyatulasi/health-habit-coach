export function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function load(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

export function clear(key) {
  localStorage.removeItem(key);
}
