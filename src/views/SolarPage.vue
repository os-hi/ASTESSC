<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import { useDatabaseObject } from 'vuefire'
    import { ref as dbRef } from 'firebase/database'
    import { db } from '../database/firebase'


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
      <div class="example-content" v-for="(item, itemKey) in solarData" :key="itemKey">
        <template v-for="(value, key) in item" :key="key">
          {{ value }}
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>