<template>
  <section class="main">
    <section class="header" v-bind:class="{ 'headerLeft':  isActiveSideBar }">
      <slot name="header"/>
    </section>
    <section class="breadcrumbs" v-bind:class="{ 'headerLeft':  isActiveSideBar }">
      <slot name="breadcrumbs"/>
    </section>
    <section class="sidebar">
      <slot name="sidebar"/>
    </section>
    <section class="content" v-bind:class="{ 'contentLeft':  isActiveSideBar }"
      @click="eventCloseSideBar">
      <slot name="content"/>
    </section>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'index',
  computed: {
    isActiveSideBar() {
      return this.$store.getters.isActiveSideBar;
    },
  },
  methods: {
    ...mapActions(['toggleSideBar']),
    eventCloseSideBar() {
      if (this.isActiveSideBar) {
        this.toggleSideBar();
      }
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/templates/page-dashboard/styles.scss";
</style>
