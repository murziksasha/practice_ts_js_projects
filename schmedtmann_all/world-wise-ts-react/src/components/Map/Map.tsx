import { useNavigate, useSearchParams } from 'react-router-dom';
//@ts-ignore
import { MouseEvent as LeafletMouseEvent } from 'leaflet';
import styles from './Map.module.scss';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useCities } from '../../utils/context';
import { useGeolocation } from '../../hooks/useGeolocation';
import Button from '../Button/Button';
import { useUrlPosition } from '../../hooks/useUrlPosition';

export default function Map() {
  const {dataCities} = useCities();
  const [mapPosition, setMapPosition] = useState<[number, number]>([40, 0]);
  const {isLoading: isLoadingPosition, position: geolocationPostion, getPosition} = useGeolocation();
  const  [mapLat, mapLng] = useUrlPosition();





  useEffect(() => {
    if(mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if(geolocationPostion) setMapPosition([geolocationPostion.lat, geolocationPostion.lng])
  }, [geolocationPostion])

  return (
    <div
      className={styles.mapContainer}
    >

      
    {!geolocationPostion && (<Button type='position' onClick={getPosition}>
        {isLoadingPosition ? 'Loading...' : 'Use your position'}
      </Button>)}


      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
      { dataCities.map((city) => (<Marker position={[
        city.position.lat, city.position.lng
      ]} key={city.id}>
          <Popup>
            <span>{city.emoji}</span> <span>{city.cityName}</span>
          </Popup>
        </Marker>
        ))};
        <ChangeCenter position={mapPosition}/>
        <DetectClick/>
      </MapContainer>
    </div>
  );
}

interface IPropsChangeCenter {
  position: [number, number];
}

function ChangeCenter({position}: IPropsChangeCenter) {
  const map = useMap();
  map.setView(position);
  return null;
}



function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  // Return null or another suitable JSX element
  return null;
}

// interface CustomLeafletMouseEvent extends LeafletMouseEvent {
//   latlng: {
//     lat: number;
//     lng: number;
//   };
// }

// function DetectClick() {
//   const navigate = useNavigate();
//   const map = useMap();

//   useEffect(() => {
//     const handleClick = (e: CustomLeafletMouseEvent) => {
//       navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
//     };

//     map.on('click', handleClick);

//     // Cleanup the event listener when the component is unmounted
//     return () => {
//       map.off('click', handleClick);
//     };
//   }, [map, navigate]);

//   // Return null or another suitable JSX element
//   return null;
// }

