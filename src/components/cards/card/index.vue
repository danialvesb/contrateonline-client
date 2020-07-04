<template>
  <div class="ui-container">
    <div class="card-header">
      <slot name="header">
      </slot>
    </div>
    <div class="card-body">
      <slot name="body">
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
  },
  name: 'uicard',
  methods: {
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/cards/card/styles.scss";
</style>
