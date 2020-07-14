<template>
  <div class="card-container">
    <div class="card-header">
      <span class="title-card">
        <h3>Faça um chamado e espere ser atendidido</h3>
        <small>Verifique as informações de solicite já</small>
      </span>
    </div>
    <div class="card-body">
    </div>
    <div class="card-footer">
      <div class="button-group">
        <ui-button>Solicitar</ui-button>
      </div>
    </div>
  </div>
</template>

<script>

import { uiButton } from '@components/buttons/index';

export default {
  components: {
    uiButton,
  },
  props: {
  },
  name: 'uiOfferCard',
  methods: {
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/cards/offerCard/styles.scss";

</style>
