<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header v-on:checkboxToggleHeader="toogleSideBar($event)"/>
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar :sidebar="sidebar"/>
    </template>
    <template v-slot:content>
      <uiCard />
      <uiCard />
      <uiCard />
      <uiCard />
      <uiCard />
      <uiCard />
      <uiCard />
      <uiCard />
      <uiCard />
      <uiCard />
    </template>

    </dashboard-template>
</template>

<script>
import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';
import { uiCard } from '@/components/cards/index';

export default {
  name: 'Dashboard',
  components: {
    dashboardTemplate,
    uiMenuSideBar,
    uiHeader,
    uiCard,
  },
  data() {
    return {
      sidebar: false,
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
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
</style>
