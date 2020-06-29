<template>
  <section class="main">
    <section>
      <slot name="header">
      </slot>
    </section>
    <section>
      <slot name="sidebar">
      </slot>
    </section>
    <section>
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
