<template>
  <div class="breadcrumbs">
    <slot/>
  </div>
</template>

<script>

export default {
  props: {
  },
  name: 'breadcrumb',
  methods: {
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/breadcrumbs/default/styles.scss";
</style>
