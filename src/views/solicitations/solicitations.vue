<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header v-on:checkboxToggleHeader="toogleSideBar($event)"/>
    </template>
    <template v-slot:breadcrumbs>
      <ui-breadcrumbs>
        <li>Minhas solicitações</li>
      </ui-breadcrumbs>
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar :sidebar="sidebar"/>
    </template>
    <template v-slot:content>
      <div class="content">
        <ui-card :onClick="openDetailsSolicitation"
                 :active="isActiveSideBar" :data="test"></ui-card>
      </div>
    </template>
  </dashboard-template>
</template>

<script>
import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';
import { uiBreadcrumbs } from '@components/breadcrumbs/index';
import { uiCard } from '@components/cards/index';

export default {
  name: 'solicitations',
  components: {
    uiCard,
    dashboardTemplate,
    uiMenuSideBar,
    uiHeader,
    uiBreadcrumbs,
  },
  data() {
    return {
      sidebar: false,
      test: {
        title: 'Card teste',
      },
    };
  },
  methods: {
    openDetailsSolicitation() {
      this.$router.push('/solicitacao/visualizar/1');
    },
    toogleSideBar(event) {
      this.sidebar = event;
    },
  },
  computed: {
    isActiveSideBar() {
      return this.$store.getters.isActiveSideBar;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/style.scss";
@import "~@/views/solicitations/styles.scss";
</style>
