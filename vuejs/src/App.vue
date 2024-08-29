<template>
    <!-- <router-view></router-view> -->
      <Header />
      <SileProduct/>
      <LatestProducts/>
      <NewProduct/>
      <router-view />
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import SileProduct from './components/SileProduct.vue';
  import LatestProducts from './page/view/LatestProducts.vue';
import NewProduct from './page/view/NewProduct.vue';

  export default {
    name: 'App',
    components: {
      Header,
      SileProduct,
      LatestProducts,
      NewProduct,
    
    }
  }
  </script>

<style scoped>

</style>