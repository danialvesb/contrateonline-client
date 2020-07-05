<template>
  <section class="main">
    <section class="header" v-bind:class="{ 'headerLeft':  isActiveSideBar }">
      <slot name="header">
      </slot>
    </section>
    <section class="sidebar">
      <slot name="sidebar">
      </slot>
    </section>
    <section class="content" v-bind:class="{ 'contentLeft':  isActiveSideBar }">
      <slot name="content">
      </slot>
    </section>
  </section>
</template>

<script>
export default {
  name: 'index',
  computed: {
    isActiveSideBar() {
      return this.$store.getters.isActiveSideBar;
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/templates/page-dashboard/styles.scss";
</style>
