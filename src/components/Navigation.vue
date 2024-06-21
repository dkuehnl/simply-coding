<script>
 export default {
    data () {
      return {
        tab: 'Appetizers',
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>

<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">
        simply coding
      </h1>
    </v-card-title>
    <v-tabs
      v-model="tab"
      align-tabs="center"
      stacked>
        <v-tab value="tab-1">
          <router-link to="/">Home</router-link>
        </v-tab>
        <v-tab value="tab-2">
          
          <router-link to="/">Leistungen</router-link>
        </v-tab>
        <v-tab value="tab-2">
          <router-link to="/">Referenzen</router-link>
        </v-tab>
        <v-tab value="tab-3">
          <v-icon icon="mdi-email-fast"></v-icon>
          <router-link to="/">Kontakt</router-link>
        </v-tab>
      </v-tabs>
  </v-card>
</template>

<style>
.bg-basil {
  background-color: #FFFBE6 !important;
}
.text-basil {
  color: #356859 !important;
}
</style>
