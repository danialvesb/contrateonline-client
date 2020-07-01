<template>
  <div class="header">
    <ui-toggle-side-bar v-on:checkboxToggle="checked($event)"/>
  </div>
</template>

<script>
import { uiToggleSideBar } from '@/components/buttons/index';

export default {
  name: 'index',
  components: {
    uiToggleSideBar,
  },
  methods: {
    checked(event) {
      this.$emit('checkboxToggleHeader', event());
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/components/header/default/styles.scss";
</style>
