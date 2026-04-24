
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { cn } from '../../utils/cn';

// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationMapProps {
  location: string;
  className?: string;
}

const locationCoords: Record<string, [number, number]> = {
  'القاهرة': [30.0444, 31.2357],
  'الجيزة': [30.0131, 31.2089],
  'الإسكندرية': [31.2001, 29.9187],
};

export const LocationMap: React.FC<LocationMapProps> = ({ location, className }) => {
  const position = locationCoords[location] || [30.0444, 31.2357];

  return (
    <div className={cn("relative rounded-[32px] overflow-hidden border-2 border-primary/20 shadow-2xl shadow-black/50 group h-75", className)}>
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          
          <Popup>
            <div className="text-right p-1 font-sans">
              <div className="font-bold text-black">موقع الاستلام</div>
              <div className="text-xs text-gray-600">{location}</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Decorative overlay to reinforce dark theme if filter fail or just to blend edges */}
      <div className="absolute inset-0 pointer-events-none border-12 border-bg-dark/50 rounded-[30px] z-10" />
      
      <div className="absolute top-4 right-4 z-20 bg-primary text-black text-[10px] font-black uppercase tracking-tight px-3 py-1 rounded-full shadow-lg">
        موقع حي
      </div>
    </div>
  );
};
