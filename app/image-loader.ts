import type { ImageLoader } from 'next/image'

const imageLoader: ImageLoader = ({ src, width, quality }: {
  src: string;
  width?: number;
  quality?: number;
}): string => {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/06_Site' : ''
  // Handle both absolute and relative paths
  const imagePath = src.startsWith('http') ? src : `${baseUrl}${src.startsWith('/') ? src : `/${src}`}`
  return imagePath
}

export default imageLoader 