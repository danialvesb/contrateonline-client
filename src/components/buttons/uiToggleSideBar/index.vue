<template>
  <section>
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"
           v-on:change="checked($event)"/>
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
  </section>
</template>

<script>
export default {
  name: 'uiToggleSideBar',
  methods: {
    checked(event) {
      this.$emit('checkboxToggle', () => event.target.checked);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/buttons/uiToggleSideBar/styles.scss";
</style>
