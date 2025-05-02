import { useState, useEffect } from 'react';

interface Location {
  lat: number;
  lng: number;
}

export function useDeliveryLocation(orderId: string) {
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchLocation = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch(`/api/delivery/location/${orderId}`);
        if (!response.ok) throw new Error('Failed to fetch location');
        const data = await response.json();
        setLocation(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchLocation();

    // Poll for updates
    intervalId = setInterval(fetchLocation, 10000);

    return () => clearInterval(intervalId);
  }, [orderId]);

  return { location, isLoading, error };
}