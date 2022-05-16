import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
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
    //añadir varios puntos desde una api
    axios.get('https://apikaiser.herokuapp.com/')
    .then(function(response){
      //añadir puntos con popup con un marker personalozido
      const el = document.createElement('div');
      el.className = 'marker';
      // el.style.backgroundImage = 'url(https://raw.githubusercontent.com/https-github-com-Kbra/Kaiser/master/images/iconpunto.png)';

      response.data.datos.forEach((element: {id:any; longitud: number; latitud: number; escala_gravedad: any; tipo_accidente: any; }) => {
        new mapboxgl.Marker(el)
        //si se repite un dato en la api se puede usar el id para que no se repita

        .setLngLat([element.longitud,element.latitud])
        .addTo(mapita)
        .setPopup(new mapboxgl.Popup({offset: 25}).on('open', function(){
          mapita.flyTo({center: [element.longitud,element.latitud],pitch:60, bearing:-60, zoom: 16})
        }).on('close', function(){
          mapita.flyTo({center: [element.longitud,element.latitud],pitch:0, bearing:0, zoom: 15})
        }).setHTML(`<h3>Kaiser | Reporte</h3><p>${element.escala_gravedad}, ${element.tipo_accidente}</p>`))
      })
    })

}
// function colocarpuntos(){
// }
// axios.get('http://192.168.0.5:8080/').then(res=>{
//             res.data;
//             // mapita.addSource('points', res.data);
//           })
