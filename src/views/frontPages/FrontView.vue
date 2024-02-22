<template>
  <NavbarComponent></NavbarComponent>
  <RouterView></RouterView>
  <div class="container">
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavbarComponent from '../../components/NavbarComponent.vue';
import FooterComponent from '../../components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
.navText {
  font-weight: bold !important;
  color: #0e3 !important;
  transition: .3s ease;
}
</style>
