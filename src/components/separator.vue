<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <div
      v-bind:style="{width: width, borderBottom: `solid 1px rgba(255,255,255,${opacity})`}"/>
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
    opacity: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
