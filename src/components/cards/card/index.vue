<template>
  <button :class="[{'button-inactive': active}, 'ui-container']"
          @click="onClick" :disabled="active">
    <div :class="['card-header']">
      <p>{{ data.title }}</p>
    </div>
    <div class="card-body">
      <p>{{ data.subtitle }}</p>
      <p>{{ data.amount }}</p>
    </div>
    <div class="card-footer">
      <p>{{ data.district }}</p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    data: {
      require: true,
      type: Object,
    },
    onClick: {
      require: true,
      type: Function,
    },
    active: {
      require: true,
      type: Boolean,
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
