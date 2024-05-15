<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon} from '@ionic/vue';
  import { useDatabaseObject } from 'vuefire'
    import { ref as dbRef } from 'firebase/database'
    import { db } from '../database/firebase'

    import {alertCircle, leaf } from "ionicons/icons";

    const solarData = useDatabaseObject<any>(dbRef(db, "solar-tracker-system/solar-condition"))

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Solar Panel Tracker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-if="solarData" class="example-content">
        <template v-if="solarData.status == 'good'">
          <div class="image-container">
            <img src="../assets/solar.webp" alt="">
            <ion-icon :icon="leaf" class="overlay-good-icon"></ion-icon>
          </div>
        </template>
        <template v-else>
          <div class="image-container">
            <img src="../assets/solar.webp" alt="">
            <ion-icon :icon="alertCircle" class="overlay-icon"></ion-icon>
          </div>
        </template>
        <h3>{{ solarData.message }}</h3>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.example-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}

@keyframes zoom {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.overlay-icon {
  position: absolute;
  bottom: 60px; /* Adjust as needed */
  right: 5px; /* Adjust as needed */
  font-size: 6rem; /* initial size */
  color: red; /* initial color */
  animation: zoom 2s infinite; /* zoom in and out animation */
}

.image-container:hover .overlay-icon {
  font-size: 3.5rem; /* increased size on hover */
  color: red; /* red color on hover */
  animation: none; /* stop animation on hover */
}
.overlay-good-icon {
  position: absolute;
  bottom: 60px; /* Adjust as needed */
  right: 5px; /* Adjust as needed */
  font-size: 6rem; /* initial size */
  color: greenyellow; /* initial color */
  animation: zoom 2s infinite; /* zoom in and out animation */
}

.image-container:hover .overlay-good-icon {
  font-size: 3.5rem; /* increased size on hover */
  color: greenyellow; /* red color on hover */
  animation: none; /* stop animation on hover */
}
</style>
