<template>
  <div class="ui-container">
    <div class="card-header" v-bind:style="{ backgroundColor: colorHeader }">
      {{ title }}
    </div>
    <div class="card-body">
      {{ text }}
    </div>
    <separator width="80%" color="#dee2e6"/>
    <div class="card-footer">
    </div>
  </div>
</template>

<script>
import Separator from '@components/separator';

export default {
  components: { Separator },
  props: {
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
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/cards/card/styles.scss";

</style>
