<template>
  <transition-group name="fade" tag="div" class="cards">
    <uiCard
      v-for="card in getOffersLocal"
      :key="card.id"
      :data="card"
      class="list-item"
      :active="isActiveSideBar"/>
  </transition-group>
</template>

<script>
import uiCard from '@/components/cards/card/index.vue';
import Vue from 'vue';
import { mapActions } from 'vuex';

export default {
  name: 'uicards',
  components: {
    uiCard,
  },
  methods: {
    ...mapActions(['loadOffers']),
    async getDataCard() {
      await Vue.prototype.$http.get('services/offers').then((resp) => {
        const offersList = resp.data.map((item) => ({
          id: item.id,
          title: item.description,
          subtitle: item.service_title,
          district: `${item.district} / ${item.city}/ ${item.uf}`,
          text: item.description,
          rating: item.rating,
          amount: item.amount,
        }));
        this.loadOffers(offersList);
      }).catch((err) => {
        alert(err);
      });
    },
  },
  computed: {
    isActiveSideBar() {
      return this.$store.getters.isActiveSideBar;
    },
    getOffersLocal() {
      return this.$store.getters.getOffers;
    },
  },
  beforeMount() {
    this.getDataCard();
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/cards/cards/styles.scss";
</style>
