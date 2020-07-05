<template>
  <div class="ui-container">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      {{ text }}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      require: true,
      type: String,
    },
    text: {
      require: true,
      type: String,
    },
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
