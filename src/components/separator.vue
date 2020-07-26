<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <div :style="{width: width, borderBottom: 'solid 1px gray' }"/>
  </div>
</template>

<script>
export default {
  name: 'separator',
  props: {
    width: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/cards/offerCardDetails/styles.scss";

</style>
