<template>
    <v-app id="inspire">
    <v-toolbar color="purple" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/info"> About me </router-link>
    </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>
