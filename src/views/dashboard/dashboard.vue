<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header>
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
    <div class="content">
      <div class="content-header">
        <div class="title-section">
          <h3>Enconte seu o profissional por categoria Cidade/Estado
            ou apenas pesquise a profissão de interesse</h3>
        </div>
        <div class="input-search">
          <ui-input width="30%" placeholder="Profissão"></ui-input>
          <ui-input width="30%" placeholder="Cidade/Estado"></ui-input>
        </div>
      </div>
      <div class="content-cards">
        <ui-cards/>
        <div class="spin" v-if="getOffersLocal.length < 1">
          <font-awesome-icon
            icon="spinner"
            spin
            style="margin-left: 3px; filter: invert(80%) sepia(100%) saturate(0%)"
            size="3x"
          />
        </div>
      </div>

    </div>
    </template>
  </dashboard-template>
</template>
<script>
import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';
import { dropdown } from '@components/dropdown/index';
import { uiBreadcrumbs } from '@components/breadcrumbs/index';
import { uiCards } from '@/components/cards/index';
import { uiInput } from '@components/inputs/index';

export default {
  name: 'dashboard',
  components: {
    uiInput,
    dropdown,
    dashboardTemplate,
    uiMenuSideBar,
    uiHeader,
    uiBreadcrumbs,
    uiCards,
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
    onClick(event) {
      event();
    },
    toogleSideBar(event) {
      this.sidebar = event;
    },
  },
  computed: {
    getOffersLocal() {
      return this.$store.getters.getOffers;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/style.scss";
@import "~@/views/dashboard/styles.scss";
</style>
