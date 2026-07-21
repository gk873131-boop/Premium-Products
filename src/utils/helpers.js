import { metaConfig } from '../config/siteConfig.js';

export function getImage(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  try {
    const clean = path.replace(/^\/+/, '');
    const base = clean.replace(/^uploaded_files\//, 'uploaded/');
    return new URL(`/src/assets/images/${base}`, import.meta.url).href;
  } catch {
    return path;
  }
}

export function getMeta(slug) {
  return metaConfig[slug] || metaConfig.default;
}

export function truncate(text, length = 120) {
  if (!text) return '';
  return text.length > length ? text.slice(0, length).trim() + '...' : text;
}

export function formatBreadcrumb(items) {
  return items.map((item, idx) => ({
    ...item,
    active: idx === items.length - 1,
  }));
}
