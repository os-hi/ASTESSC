<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
} from "@ionic/vue";

import { sunny, batteryCharging } from "ionicons/icons";
import router from "../router";


</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="text" href="/solar">
          <ion-icon :icon="sunny" />
          <ion-label>Solar</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="emoji" href="/battery">
          <ion-icon :icon="batteryCharging" />
          <ion-label>Battery</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<style scoped>

.menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
}
</style>
