import Head from "next/head";
import maplibregl from "maplibre-gl";
import { useRef, useEffect, useState } from "react";
import MapLayer from "../components/Maps/MapLayer";

export default function Home() {
  const mapElement = useRef();
  const mapRef = useRef();
  const [mapload, setMapload] = useState(false);

  useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: mapElement.current,
      style:
        "https://api.maptiler.com/maps/8013e4f6-1a15-4d6f-b053-ba5ed210b5c9/style.json?key=5yAQnmNnTQ3DEg1ExjG5", // stylesheet location
      center: [-122.486052, 37.830348],
      zoom: 9,
    });

    mapRef.current.on("load", () => {
      setMapload(true);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css'
          rel='stylesheet'
        />
      </Head>
      <div ref={mapElement} className='w-screen h-screen relative' />
      {mapload && <MapLayer map={mapRef.current} />}
    </div>
  );
}
