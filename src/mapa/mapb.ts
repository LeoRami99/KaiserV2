import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
export function mapboxV(cont: string) {
  // console.log("")
  mapboxgl.accessToken = "pk.eyJ1IjoibGVvcmFtaTk5IiwiYSI6ImNrbmZhenZxYzAwaWMycHM5NDJhY2pxdXcifQ.rbyAEFrWLN6qWRTrSusZLg";
  const mapita = new mapboxgl.Map({
    container: cont,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-73.806605, 5.312117],
    zoom: 15
  });
  mapita.addControl(new mapboxgl.GeolocateControl({
    
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
  }))
  mapita.resize();
  //añadir varios puntos desde una api
  axios.get('https://firestore.googleapis.com/v1/projects/kaiser-485e8/databases/(default)/documents/reportes/')
    .then(function (response) {

      //añadir puntos con popup con un marker personalozido
      // console.log(response.data.documents)
      // el.style.backgroundImage = 'url(https://raw.githubusercontent.com/https-github-com-Kbra/Kaiser/master/images/iconpunto.png)';
      //   response.data.documents.forEach((element: { fields: { longitud: any; latitud: any; tipo_accidente: any; escala_gravedad: any; }; }) => {
        //     const latitud = parseFloat(element.fields.longitud.doubleValue);
      //     const longitud = parseFloat(element.fields.latitud.doubleValue);
      //     const marker = new mapboxgl.Marker(el)
      //     .setLngLat([latitud,longitud])
      //     .setPopup(new mapboxgl.Popup({offset: 25})
      //     .setHTML(`<h3>${element.fields.tipo_accidente.stringValue}</h3><p>${element.fields.escala_gravedad.stringValue}</p>`))
      //     .addTo(mapita);
      //   });
      // })
      response.data.documents.forEach((element: { fields: { longitud: { doubleValue: number }; latitud: { doubleValue: number }; tipo_accidente: any; escala_gravedad: any; activo: { booleanValue: boolean }; }; }) => {
        const el = document.createElement('div');
        el.className = 'marker';
        const active = element.fields.activo.booleanValue;
        const marker = new mapboxgl.Marker(el)
        if (active == true) {
            // añaidr el marker personalizado
            marker.setLngLat([element.fields.longitud.doubleValue, element.fields.latitud.doubleValue])
            marker.setPopup(new mapboxgl.Popup({ offset: 25 }).on('open', function () {
              mapita.flyTo({ center: [element.fields.longitud.doubleValue, element.fields.latitud.doubleValue], pitch: 60, bearing: -60, zoom: 16 })
            }).on('close', function () {
              mapita.flyTo({ center: [element.fields.longitud.doubleValue, element.fields.latitud.doubleValue], pitch: 0, bearing: 0, zoom: 15 })
            }).setHTML(`<h3>Kaiser | Reporte</h3><p>${element.fields.escala_gravedad.stringValue}, ${element.fields.tipo_accidente.stringValue}</p>`))
            .addTo(mapita);
        }
      })
    })



}

