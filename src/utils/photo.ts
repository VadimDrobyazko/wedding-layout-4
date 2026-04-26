export function photoUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = (process.env.REACT_APP_PHOTOS_URL ?? '').replace(/\/$/, '')
  return `${base}/${path}`
}
