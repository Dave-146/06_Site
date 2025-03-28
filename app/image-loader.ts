import type { ImageLoader } from 'next/image'

const imageLoader: ImageLoader = ({ src, width, quality }: {
  src: string;
  width?: number;
  quality?: number;
}): string => {
  // Handle external URLs
  if (src.startsWith('http')) {
    return src
  }

  // For GitHub Pages deployment
  const baseUrl = process.env.NODE_ENV === 'production' ? '/06_Site' : ''
  
  // Ensure the path starts with a forward slash and doesn't have double slashes
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`
  const path = `${baseUrl}${normalizedSrc}`.replace(/\/+/g, '/')
  
  return path
}

export default imageLoader 