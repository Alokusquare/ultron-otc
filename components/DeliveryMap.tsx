import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useDeliveryLocation } from '@/hooks/useDeliveryLocation';
interface DeliveryMapProps {
  orderId: string;
}

const defaultCenter = {
  lat: 25.2048,
  lng: 55.2708
};

export function DeliveryMap({ orderId }: DeliveryMapProps) {
  const { location, isLoading, error } = useDeliveryLocation(orderId);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800">
        <p className="text-red-500">Error loading map: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800">
        <p className="text-white">Loading map...</p>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%'
        }}
        center={location || defaultCenter}
        zoom={15}
        options={{
          styles: [{ elementType: "geometry", stylers: [{ color: "#242f3e" }] }], // Dark theme
          disableDefaultUI: true,
        }}
      >
        <Marker
          position={location || defaultCenter}
          icon={{
            url: '/delivery-marker.svg',
            scaledSize: new google.maps.Size(40, 40)
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}