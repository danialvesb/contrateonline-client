<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header v-on:checkboxToggleHeader="toogleSideBar($event)">
        <template v-slot:navbar-right>
          <dropdown title="" icon=""
          :options="optionsDropdown"/>
        </template>
      </ui-header>
    </template>
    <template v-slot:breadcrumbs>
      <ui-breadcrumbs>
        <li>Lista de ofertas</li>
      </ui-breadcrumbs>
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar :sidebar="sidebar"/>
    </template>
    <template v-slot:content v-if="getOffersLocal">
      <uiCard
        v-for="card in getOffersLocal"
        :key="card.id"
        :title="card.title"
        :text="card.text"
        :colorHeader="card.colorHeader"
        :id="card.id"
        class="list-item"
        :active="isActiveSideBar"/>
      <div class="spin" v-if="getOffersLocal.length < 1">
        <font-awesome-icon
          icon="spinner"
          spin
          style="margin-left: 3px; filter: invert(80%) sepia(100%) saturate(0%)"
          size="3x"
        />
      </div>
    </template>

  </dashboard-template>
</template>
<script>
import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';
import { uiCard } from '@/components/cards/index';
import { dropdown } from '@components/dropdown/index';
import { uiBreadcrumbs } from '@components/breadcrumbs/index';
import Vue from 'vue';
import { mapActions } from 'vuex';

export default {
  name: 'dashboard',
  components: {
    dropdown,
    dashboardTemplate,
    uiMenuSideBar,
    uiHeader,
    uiCard,
    uiBreadcrumbs,
  },
  data() {
    return {
      sidebar: false,
      optionsDropdown: [
        'Option 01',
        'Option 02',
        'Option 03',
        'Option 04',
      ],
    };
  },
  methods: {
    ...mapActions(['loadOffers']),
    onClick(event) {
      event();
    },
    toogleSideBar(event) {
      this.sidebar = event;
    },
    async getDataCard() {
      await Vue.prototype.$http.get('services/offers').then((resp) => {
        const offersList = resp.data.map((item) => ({
          id: item.id,
          title: item.description,
          subtitle: item.service_title,
          district: `${item.district} / ${item.city}/ ${item.uf}`,
          text: item.description,
          rating: item.rating,
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
  mounted() {
    this.getDataCard();
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/views/dashboard/styles.scss";
</style>
