'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { FaMapMarkerAlt } from 'react-icons/fa'

interface MapProps {
  apiKey?: string;
}

export default function Map({ apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!apiKey) {
      setError('Map preview unavailable')
      return
    }

    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey,
          version: 'weekly',
        })

        const google = await loader.load()
        
        if (!mapRef.current) return

        const location = { lat: 53.3498, lng: -6.2603 } // Dublin coordinates
        
        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        })

        new google.maps.Marker({
          position: location,
          map,
          title: 'Corlican Pet Motel',
        })
      } catch (err) {
        setError('Map preview unavailable')
        console.error('Error loading Google Maps:', err)
      }
    }

    initMap()
  }, [apiKey])

  if (error) {
    return (
      <div className="h-full bg-[#C0D9DA]/10 rounded-lg flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#C0D9DA]">
        <FaMapMarkerAlt className="w-12 h-12 text-[#D60D0D] mb-4" />
        <p className="text-gray-700 text-center font-medium">Map Preview</p>
        <p className="text-gray-500 text-sm text-center mt-2">123 Pet Haven Road, County Dublin</p>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      className="h-full w-full rounded-lg shadow-lg"
      style={{ minHeight: '400px' }}
    />
  )
} 