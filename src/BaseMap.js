import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./BaseMap.css";
// import ReactMapboxGl from "react-mapbox-gl";
// import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
const BaseMap = () => {
  // ReactMapboxGl.workerClass = MapboxWorker.default;
  mapboxgl.accessToken =
    "pk.eyJ1IjoicGFibG81OTYiLCJhIjoiY2tsaXBlYjdrMnBhMjJuczZoYWh4eTB1OCJ9.rtEGPWKEf1j8wAvYbsbURA";
  // "pk.eyJ1IjoicGFibG81OTYiLCJhIjoiY2p3dXZ5ZjZtMGp0cDQ5cGUwM2pyZGU5ZiJ9.1l9HEtbfNrsLYoUd0KJ7nA";
  useEffect(() => {
    const latLng = {
      lng: -90.545418,
      lat: 14.514004,
    };
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [latLng.lng, latLng.lat],
      zoom: 14,
      attributionControl: false,
    });
    let size = 100;
    const pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd: function () {
        const canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext("2d");
      },

      // called once before every frame where the icon will be used
      render: function () {
        let duration = 1000;
        let t = (performance.now() % duration) / duration;

        let radius = (size / 2) * 0.3;
        let outerRadius = (size / 2) * 0.7 * t + radius;
        let context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = "rgba(9, 53, 108," + (1 - t) + ")";
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(9, 53, 108, 1)";
        context.strokeStyle = "white";
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(0, 0, this.width, this.height).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      },
    };

    // create the marker

    map.on("load", function () {
      map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

      map.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [latLng.lng, latLng.lat],
              },
            },
          ],
        },
      });
      map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": "pulsing-dot",
        },
      });

      var popup = new mapboxgl.Popup({ offset: 25 }).setText(
        "11 av. 2-78 Residenciales Ribera del Río, Zona 13 San Miguel Petapa"
      );
      // create DOM element for the marker
      var el = document.createElement("div");
      el.id = "marker";
      // new mapboxgl.Marker(el)
      //   .setLngLat([latLng.lng, latLng.lat])
      //   .setPopup(popup) // sets a popup on this marker
      //   .addTo(map);

      new mapboxgl.Popup({ offset: 15 })
        .setLngLat([latLng.lng, latLng.lat])
        .setHTML(
          "4a calle, Cdad. de Guatemala, Guatemala<br><br><a target='_blank' id='direcciones__button' href='https://goo.gl/maps/J2GYZrGMxQgpSX7e8' class='direcciones__button'>Direcciones</a>"
        )
        .addTo(map);
      console.log(document.getElementById("direcciones__button"));
      document.getElementById("direcciones__button").blur();
      window.scrollTo(0, 0);
    });
  }, []);

  return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;
