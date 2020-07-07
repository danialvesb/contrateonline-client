<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <div
      v-bind:style="{width: width, borderBottom: `solid 1px ${color}` }"/>
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
    color: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
