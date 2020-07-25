<template>
  <button class="ui-container" @click="openDetails()" :disabled="active">
    <div class="card-header">
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
    active: {
      require: true,
      type: Boolean,
    },
  },
  name: 'uicard',
  methods: {
    openDetails() {
      this.$router.push(`/oferta/visualizar/${this.id}`);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/cards/card/styles.scss";

</style>
