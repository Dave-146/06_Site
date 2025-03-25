import type { ImageLoader } from 'next/image'

export default function imageLoader({ src, width, quality }: {
  src: string;
  width?: number;
  quality?: number;
}): string {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/06_Site' : ''
  if (src.startsWith('/')) {
    return `${baseUrl}${src}`
  }
  return src
} 