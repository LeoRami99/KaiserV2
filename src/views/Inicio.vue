<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio | Kaiser</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card id="cardsito">
        <!-- <ion-card-header>
          <ion-card-title>Inicio</ion-card-title>
        </ion-card-header> -->
        <!-- <ion-card-content> -->
          <div id="mapa">
                        
          </div>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Enviar Reporte</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
              <ion-button>
                  Enviar
              </ion-button>
          </ion-item>
        </ion-card-content> 
          
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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
  IonButton
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
    IonButton
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