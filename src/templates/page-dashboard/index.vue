<template>
  <section class="main">
    <section class="header">
      <slot name="header">
      </slot>
    </section>
    <section class="content">
      <slot name="sidebar">
      </slot>
      <slot name="content">
      </slot>
    </section>
  </section>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/templates/page-dashboard/styles.scss";
</style>
