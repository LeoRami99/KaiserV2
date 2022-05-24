<template>
  <ion-header>
    <ion-toolbar id="modal_toolbar">
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
      
          <ion-button id="boton-env" expand="block" @click="closeModal">Cancelar</ion-button>
          <ion-button id="boton-env" expand="block" @click="enviarReporte">Enviar</ion-button>
    
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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonLabel,
  IonCardTitle,
  // IonInput,
  IonItem,
  toastController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import app from "../dbfirebase/dbfb";
import { mapboxV } from "../mapa/mapb";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore/lite";
import router from "@/router";

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
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonLabel,
    IonCardTitle,
    // IonInput,
    IonItem,
  },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
      mapboxV("mapa");
      // router.push("/inicio");
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
    async enviarReporte(){
      const db = getFirestore(app);

       const datos={
          tipo_accidente: this.taccidente,
          escala_gravedad: this.egravedad,
          //convertir a numero
          latitud: parseFloat(this.latitud),
          longitud: parseFloat(this.longitud),
          activo: true,
       }
        const resultado = await addDoc(collection(db, "reportes"), datos);
        if (resultado) {
          this.openToast("Sen envio registro con éxito");
          this.closeModal();
          // router.push("/inicio");
        } else {
          this.openToast("Fallo al enviar el reporte");
        }
       
    },
    obtenerUBicacion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          //imprimir hasta que se obtenga la ubicación de lo contrario
          const la = position.coords.latitude;
          const lo = position.coords.longitude;
          this.latitud = la.toString();
          this.longitud = lo.toString();
          this.openToast("Tú ubicación es:"+ this.latitud + ", " + this.longitud);
        });
      } else {
        this.openToast("No se obtuvo la ubicación");
      }
    },
    async openToast(msg:string) {
      const toast = await toastController.create({
        message: msg,
        duration: 2000,
      });
      toast.present();
    },
  },
  mounted() {
    //Se obtiene la ubicación del usuario
    this.obtenerUBicacion();
    //actualizar la app cuanto se obtengo la ubicación
    setInterval(() => {
      this.obtenerUBicacion();
    }, 5000);
  },
});
</script>
<style>
  #modal_toolbar {
  --background: #f78472;
  --color: #fff;
  text-align: center;
  border-radius: 5px;
  /* border: 1px solid #000; */
  box-shadow: 1px 0px 10px #000;
}
#boton-env {
  --background: #f78472;
  background-color: #f78472;
  --color: #fff;
  border-radius: 5px;
}
</style>