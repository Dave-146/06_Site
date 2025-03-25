export default function imageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/06_Site' : ''
  if (src.startsWith('/')) {
    return `${baseUrl}${src}`
  }
  return src
} 