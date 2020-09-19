<template>
  <div class="input-group" :style="{width: width}">
    <font-awesome-icon icon="search"/>
    <input type="text" class="form-control" :placeholder="placeholder"/>
  </div>
</template>

<script>

export default {
  name: 'uiInput',
  props: {
    width: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/style.scss";
  @import "~@/components/inputs/default/styles.scss";
</style>
