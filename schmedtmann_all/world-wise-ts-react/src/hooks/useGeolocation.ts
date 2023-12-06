
import { useState } from "react";

interface Position {
  lat: number;
  lng: number;
}

export function useGeolocation() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ lat: 0, lng: 0 });
  const [error, setError] = useState<string | null>(null);


  const getPosition = () => {

    if (!navigator.geolocation) {
      return setError("Your browser does not support geolocation");
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
  };

  return {isLoading, position, error, getPosition};

}