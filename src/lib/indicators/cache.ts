/**
 * cache.ts — Cache en memoria para indicadores financieros.
 *
 * Almacena respuestas de APIs externas durante un período TTL para:
 *   - evitar llamadas repetidas a FRED (límite de rate)
 *   - mantener el último dato disponible si una fuente falla
 *   - acelerar el tiempo de respuesta
 *
 * El cache es por proceso (module-level). En entornos serverless
 * puede resetear entre invocaciones; en ese caso el TTL de
 * Next.js `next: { revalidate }` es el mecanismo principal.
 *
 * TTLs recomendados:
 *   FRED   → 24 horas  (datos diarios/mensuales)
 *   BCU    → 24 horas
 *   AFAPs  → 30 días   (datos trimestrales)
 *   BPS    → 30 días
 *   BANKS  → 7 días
 */

// ── TTL constants ─────────────────────────────────────────────────────────────

export const TTL = {
  FRED:  24 * 60 * 60 * 1_000,
  BCU:   24 * 60 * 60 * 1_000,
  AFAPS: 30 * 24 * 60 * 60 * 1_000,
  BPS:   30 * 24 * 60 * 60 * 1_000,
  BANKS:  7 * 24 * 60 * 60 * 1_000,
} as const;

// ── Cache store ───────────────────────────────────────────────────────────────

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

const store = new Map<string, CacheEntry<unknown>>();

// ── Public API ────────────────────────────────────────────────────────────────

/** Lee del cache. Devuelve null si no existe o si expiró. */
export function get<T>(key: string): T | null {
  const entry = store.get(key) as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (Date.now() - entry.timestamp > entry.ttl) {
    store.delete(key);
    return null;
  }
  return entry.data;
}

/** Escribe en el cache con TTL en milisegundos. */
export function set<T>(key: string, data: T, ttlMs: number): void {
  store.set(key, { data, timestamp: Date.now(), ttl: ttlMs });
}

/** Borra una clave específica o todo el cache. */
export function clear(key?: string): void {
  if (key) {
    store.delete(key);
  } else {
    store.clear();
  }
}

/** Devuelve cuándo se guardó un dato (timestamp ISO) o null si no está cacheado. */
export function lastUpdated(key: string): string | null {
  const entry = store.get(key);
  if (!entry) return null;
  return new Date(entry.timestamp).toISOString();
}
