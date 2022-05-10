<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Reporte | Kaiser</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Enviar Reporte</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label>Tipo de accidente</ion-label>
          <ion-select v-model="taccidente" interface="action-sheet">
            <ion-select-option value="Choque">Choque</ion-select-option>
            <ion-select-option value="Atropellamiento"
              >Atropellamiento</ion-select-option
            >
            <ion-select-option value="Volcamiento"
              >Volcamiento</ion-select-option
            >
            <ion-select-option value="Caída de ocupante"
              >Caída de ocupante</ion-select-option
            >
            <ion-select-option value="Incendio">Incendio</ion-select-option>
            <ion-select-option value="Otro">Otro</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Escala de gravedad</ion-label>
          <ion-select v-model="egravedad" interface="action-sheet">
            <ion-select-option value="Solo daños">Solo daños</ion-select-option>
            <ion-select-option value="Con heridos"
              >Con heridos</ion-select-option
            >
            <ion-select-option value="Con muertos"
              >Con muertos</ion-select-option
            >
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-button @click="closeModal">Cancelar</ion-button>
          <!-- <ion-button @click="">Enviar</ion-button> -->
        </ion-item>
      </ion-card-content>
    </ion-card>
    <p>Usted ha seleccionado: {{ taccidente }}</p>
    <p>Usted ha seleccionado: {{ egravedad }}</p>
    <p>{{ latitud }}</p>
    <p>{{ longitud }}</p>
    <!-- <ion-button @click="closeModal">Close Modal</ion-button> -->
  </ion-content>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  modalController,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { defineComponent } from "vue";
import app from "../dbfirebase/dbfb";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  QuerySnapshot,
} from "firebase/firestore/lite";

export default defineComponent({
  name: "ModalReporte",
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    return { closeModal };
  },
  data() {
    return {
      taccidente: "",
      egravedad: "",
      latitud: "",
      longitud: "",
    };
  },
  methods: {
    obtenerUBicacion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          //imprimir hasta que se obtenga la ubicación de lo contrario
          const la = position.coords.latitude;
          const lo = position.coords.longitude;
          this.latitud = la.toString();
          this.longitud = lo.toString();
        });
      } else {
        alert("No se obtuvo la ubicación");
      }
    },
  },
  mounted() {
    //Se obtiene la ubicación del usuario
    this.obtenerUBicacion();
  },
});
</script>