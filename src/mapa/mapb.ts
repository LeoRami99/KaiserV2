import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
export function mapboxV(cont:string) {
    mapboxgl.accessToken="pk.eyJ1IjoibGVvcmFtaTk5IiwiYSI6ImNrbmZhenZxYzAwaWMycHM5NDJhY2pxdXcifQ.rbyAEFrWLN6qWRTrSusZLg";
    const mapita = new mapboxgl.Map({
      container: cont,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-73.806605,5.312117],
      zoom: 15
    });
    mapita.addControl(new mapboxgl.GeolocateControl({
      positionOptions:{
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }))
}
