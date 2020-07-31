<template>
  <div class="card-container">
    <div class="card-header">
      <span class="title-card">
        <h3>Detalhes da oferta</h3>
      </span>
    </div>
    <div class="card-body">
      <div class="title item-card-body">
        <strong>Conserto de computadores</strong>5
      </div>
      <div class="rating item-card-body">
        <strong>Nota geral: </strong>5
      </div>
      <div class="price item-card-body">
        <strong>Valor cobrado: </strong>R$ 200,00
      </div>
      <div class="description item-card-body">
        Descrição da oferta descriçãoDescrição da oferta descrição Descrição da oferta descrição
        Descrição da oferta descriçãoDescrição da oferta descrição Descrição da oferta descrição
        Descrição da oferta descriçãoDescrição da oferta descrição Descrição da oferta descrição
      </div>
      <div class="location item-card-body">
        Goiânia/GO parque tremendão
      </div>
      <div class="carousel item-card-body">
        Carousel
      </div>
    </div>
    <div class="card-footer">
      <div class="button-group">
        <ui-button
          height="80%"
          color="success"
          :disabled="false">
          Solicitar
        </ui-button>
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
  @import "~@/components/cards/offerCardDetails/styles.scss";
</style>
