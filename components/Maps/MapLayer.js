import React, { useEffect } from "react";

const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [87.4051002207973, -24.411065809129276],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [9.19488707733323, 3.740766822101298],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-91.6990940709389, -43.01029499812096],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-139.92267423462073, -87.86939551074374],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-4.517037845160701, 88.65794078114682],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-6.429234607124279, -37.37823891394725],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [59.07505738570934, -54.31304124395047],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [133.74830020301087, 88.79000351221866],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [173.5036834337654, -0.8307233852775608],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-83.92997829367403, -27.333868735965172],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-0.22091165437575278, -47.076070347266665],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [75.12914518709812, -55.94178802724255],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-98.801562159063, -45.428183265391226],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [18.154672900855182, 56.99031940236169],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-149.04300370968215, -80.29397103389357],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-36.65993653396721, 10.98023211298942],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [135.48490217955728, -80.31929863581428],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [158.56091514776867, 0.9013828517468125],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-135.0763707918973, -27.503311698341058],
      },
      properties: {},
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-15.468269538534427, -3.9473674863499886],
      },
      properties: {},
    },
  ],
};

function MapLayer({ map }) {
  useEffect(() => {
    if (!map.getSource("layer1")) {
      map.addSource("layer1", {
        type: "geojson",
        data: data,
      });

      map.addLayer({
        id: "laye2",
        type: "circle",
        source: "layer1",
        layout: {},
      });
    }
  }, [map]);
  return <div></div>;
}

export default MapLayer;
