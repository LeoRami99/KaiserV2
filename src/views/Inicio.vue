<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio | Kaiser</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card id="cardsito">
          <div id="mapa"></div>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Enviar Reporte</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
              <ion-button @click="openModal">Open Modal</ion-button>
          </ion-item>
        </ion-card-content> 
      </ion-card>
      <!-- Modal -->
       
          
      <!-- Fin del modal -->
    </ion-content>
    <!-- <ion-footer>
      <ion-toolbar>
        <ion-title>Kaiser©</ion-title>
      </ion-toolbar>
    </ion-footer> -->
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
  IonItem
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
    IonItem
    // IonModal,
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
    mapboxV("mapa");
  }
});
</script>
<style>
#mapa, #cardsito{
  /* position:absolute; */
  width: auto;
  height: 500px;
  /* top:0;
  bottom:0; */

}

</style>