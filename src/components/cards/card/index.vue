<template>
  <button class="ui-container" v-on:click="openDetails()">
    <div class="card-header" v-bind:style="{ backgroundColor: colorHeader }">
      {{ title }}
    </div>
    <div class="card-body">
      {{ text }}
    </div>
    <separator width="80%" color="#dee2e6"/>
    <div class="card-footer">
    </div>
  </button>
</template>

<script>
import Separator from '@components/separator';

export default {
  components: { Separator },
  props: {
    id: {
      require: true,
      type: Number,
    },
    title: {
      require: true,
      type: String,
    },
    text: {
      require: true,
      type: String,
    },
    colorHeader: {
      require: true,
      type: String,
    },
  },
  name: 'uicard',
  methods: {
    openDetails() {
      this.$router.push(`/oferta/detalhes/${this.id}`);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/cards/card/styles.scss";

</style>
