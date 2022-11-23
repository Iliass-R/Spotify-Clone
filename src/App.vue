<template>
  <router-view v-slot="{ Component }" id="app">
    <component :is="Component" />
  </router-view>
</template>



<script>
</script>
  
<style>
@import url('http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext');

#app {
  font-family: 'Lato', sans-serif;
  height: 844px;
  width: 390px;
}
</style>
