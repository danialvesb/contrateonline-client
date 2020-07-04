<template>
  <section>
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"
           v-on:change="toggleSideBar()"/>
    <label for="openSidebarMenu" class="sidebarIconToggle" >
      <div class="spinner diagonal part-1"/>
      <div class="spinner horizontal"/>
      <div class="spinner diagonal part-2"/>
    </label>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'uiToggleSideBar',
  methods: {
    ...mapActions(['toggleSideBar']),
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/buttons/uiToggleSideBar/styles.scss";
</style>
