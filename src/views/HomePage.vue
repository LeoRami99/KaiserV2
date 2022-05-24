<template>
  <ion-page>
   <ion-content> 
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <div class="slide">
        <img
          src="../images/iconKaiser.png"
        />
        <h2>Bienvenido a Kaiser</h2>
        <p>
          La aplicación <b>Kaiser</b> es una herramienta para la visualización
          de accidentes en el transcurso de tu viaje.
        </p>
      </div>
    </ion-slide>
    <ion-slide>
      <div class="slide">
        <img
          src="../images/pointerIcon.gif"
        />
        <h2>Aporta con tu reporte</h2>
        <p>
          En <b>Kaiser</b> también puedes aportar con tu reporte de accidente.
        </p>
      </div>
    </ion-slide>
    <ion-slide>
      <div class="slide">
        <img
          src="../images/Q7Ta.gif"
        />
        <h2>Empecemos</h2>
        <p>
          Bienvenido a <b>Kaiser</b> y empecemos a reportar accidentes.
        </p>

        <ion-button expand="block" @click="goToLogin">
          Iniciar sesión
        </ion-button>

      </div>
    </ion-slide>
  </ion-slides>
   </ion-content>
  </ion-page>

</template>


<script lang="ts">
import router from "../router/index";
import { IonSlides, IonSlide, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: { IonSlides, IonSlide, IonButton },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
    return { slideOpts };
  },
  methods: {
    goToLogin() {
      //clear de screen previous whit router.push

      router.push("/login");

    },
  },
});
</script>
<style>
.slide {

  height: 90vh;
}

.slide h2 {
  margin-top: 2.8rem;
}

.slide img {
  max-height: 50%;
  max-width: 80%;
  margin: 60px 0 40px;
  pointer-events: none;
}
</style>