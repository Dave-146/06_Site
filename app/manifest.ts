import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Corlican Pet Motel',
    short_name: 'Corlican',
    description: 'Premium pet boarding services in Wexford',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D60D0D',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
} 