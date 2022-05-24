<template>
  <ion-page>
    <ion-header>
      <ion-toolbar id="inicio_toolbar">
        <ion-title>Inicio | Kaiser</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card id="cardsito">
          <div id="mapa"></div>
      </ion-card>
      <ion-card id="card-reporte">
        <ion-card-header>
          <ion-card-title id="titulo-card">⛔ Enviar Reporte ⛔</ion-card-title>
        </ion-card-header>
        <ion-card-content>
     
              <ion-button expand="block" @click="openModal" id="boton-env-inicio">Reporte</ion-button>
              
     
        </ion-card-content> 
      </ion-card>

      <!-- Modal -->
       
          
      <!-- Fin del modal -->
    </ion-content>
    <ion-footer>
      <ion-toolbar id="inicio_footer">
        <ion-title>Kaiser©</ion-title>
      </ion-toolbar>
    </ion-footer> 
  </ion-page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from './Modal.vue'
import {mapboxV} from "../mapa/mapb";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonTitle,
  IonButton,
  // IonModal,
  modalController,
  //IonItem
} from "@ionic/vue";
export default defineComponent({
  name: "InicioKaiser",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonTitle,
    IonButton,
    //IonItem
    // IonModal,
  },
  data() {
    return {
      imagenEnviar: "https://cdn-icons-png.flaticon.com/512/4689/4689445.png"
    }
  },
  setup() {
    const openModal = async () => {
      const modal = await modalController.create({
        component: Modal, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    return { openModal };
  },
  mounted() {
    mapboxV("mapa")
  }
});
</script>
<style>
#mapa, #cardsito{
  /* display: block; */
  /* position:absolute; */
  width: auto;
  height: 500px;
  /* top:0;
  bottom:0; */

  transition: box-shadow 1.5s, border 1.5s;


}
#cardsito:hover{
    border: solid 1px #000; 
    box-shadow: 5px 5px 0px #f78472;
}
.marker{
 background-image: url('https://thumbs.gfycat.com/InexperiencedGlossyAsiaticgreaterfreshwaterclam-max-1mb.gif');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
#inicio_toolbar {
  --background: #f78472;
  --color: #fff;
  text-align: center;
  border-radius: 5px;
  /* border: 1px solid #000; */
  box-shadow: 1px 0px 10px #000;

}
#boton-env-inicio{
  --background: #f78472;
  background-color: #f78472;
  --color: #fff;
  border-radius: 5px;
  width: 100%;
  height: 30px;
}


#inicio_footer {
  --background: #f78472;
  --color: #fff;
  text-align: center;
  border-radius: 5px;
  /* border: 1px solid #000; */
}
#titulo-card{
  text-align: center;
  color: #000;
}
#card-reporte{
  transition: border 1.5s, box-shadow 1.5s, infinity;
}
#card-reporte:hover{
  border: solid 1px #000; 
  box-shadow: 5px 5px 0px #f78472;
}


</style>