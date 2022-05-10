<template>
  <ion-page>
    <ion-header>
      <ion-toolbar id="registro_toolbar">
        <ion-title>Registro | Kaiser</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="bo">
      <ion-card id="registro-card">
        <ion-card-header>
          <ion-img :src="imgLogo" id="img_logo"></ion-img>
          <ion-card-title id="titulo-card">Registro</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item id="item-card">
            <ion-label position="floating">Usuario</ion-label>
            <ion-input type="text" v-model="usuario"></ion-input>
          </ion-item>
          <ion-item id="item-card">
            <ion-label position="floating">Correo</ion-label>
            <ion-input type="email" v-model="correo"></ion-input>
          </ion-item>
          <ion-item id="item-card">
            <ion-label position="floating">Contraseña</ion-label>
            <ion-input type="password" v-model="contraseña"></ion-input>
          </ion-item>
          <ion-button expand="block" @click="registro" id="boton-env"><ion-icon name="return-down-forward-outline"></ion-icon>registro</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
    <ion-footer>
      <ion-toolbar id="registro_footer">
        <ion-title>Kaiser©</ion-title>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonLabel,
  IonCardTitle,
  IonInput,
  IonButton,
  IonItem,
  IonImg,
  IonFooter,
  IonIcon
} from "@ionic/vue";
export default defineComponent({
    name: "RegisKaiser",
    components: {
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonPage,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonLabel,
    IonCardTitle,
    IonInput,
    IonButton,
    IonItem,
    IonImg,
    IonFooter,
    IonIcon
  },
  data() {
    return {
      imgLogo:"https://github.com/LeoRami99/Kaiser/blob/master/icon.png?raw=true",
      usuario: "",
      email: "",
      contraseña: ""
    }; 
  },
})
</script>

<style>
#bo{
  --background: url('https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014616_960_720.jpg') no-repeat center center / cover;
}
#registro_toolbar {
  --background: #f78472;
  --color: #fff;
  text-align: center;
  border-radius: 5px;
  /* border: 1px solid #000; */
  box-shadow: 1px 0px 10px #000;
}
#registro-card{
  /* centrar la card en la pantalla */
  margin: 0 auto;
  /* border: 1px solid #000; */
  border-radius: 5px;
  box-shadow: 1px 0px 10px #000;
  padding: 20px;
  width: 90%;
 
  top: 10%;
  /* fondo transparente con efecto blur*/
  background-color: rgba(0, 0, 0, 0.5);
  border:3px solid #fff;
  /* border: 1px solid #000; */

  
}
#img_logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: block;
}
#registro_footer {
  --background: #f78472;
  --color: #fff;
  text-align: center;
  border-radius: 5px;
  /* border: 1px solid #000; */
}
#titulo-card {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
#item-card {
  --color-activated: #fff;
  --background: rgba(0, 0, 0, 0.5);
  --color: #fff;
  border:1px #f78472;
  border-radius: 10px;
  /* border: 1px solid #000; */
  /* fondo transparente con efecto blur*/
  background-color: rgba(0, 0, 0, 0.5);
  /* dejar espacio entre cada item */
  margin-bottom: 10px;
  border:1px solid #fff;
}
#boton-env {
  --background: #f78472;
  background-color: #f78472;
  --color: #fff;
  border-radius: 5px;


}

</style>