export const site = {
  name: 'AniScroll',
  tagline: 'Every story. One scroll.',
  description:
    'AniScroll brings manga, anime, novels, online dictionaries, OCR, and Anki mining together in one immersive Android app.',
  repo: 'https://github.com/aryannayak-real/AniScroll',
  releases: 'https://github.com/aryannayak-real/AniScroll/releases',
  latestRelease: 'https://github.com/aryannayak-real/AniScroll/releases/latest',
  issues: 'https://github.com/aryannayak-real/AniScroll/issues',
  discord: 'https://discord.gg/qRVrH2BW3V',
  license: 'https://github.com/aryannayak-real/AniScroll/blob/main/LICENSE',
  fallbackVersion: 'v1.1.8',
} as const;

const rawBase = import.meta.env.BASE_URL;

/** Base path with a guaranteed trailing slash. */
export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Build an absolute, base-aware site URL. */
export function url(path = ''): string {
  return `${base}${path.replace(/^\//, '')}`;
}
