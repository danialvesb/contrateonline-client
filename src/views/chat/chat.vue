<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header v-on:checkboxToggleHeader="toogleSideBar($event)"/>
    </template>
    <template v-slot:breadcrumbs>
      <ui-breadcrumbs>
        <li>Conversas</li>
      </ui-breadcrumbs>
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar :sidebar="sidebar"/>
    </template>
    <template v-slot:content>
    </template>
  </dashboard-template>
</template>

<script>
import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';
import { uiBreadcrumbs } from '@components/breadcrumbs/index';

export default {
  name: 'chat',
  components: {
    dashboardTemplate,
    uiMenuSideBar,
    uiHeader,
    uiBreadcrumbs,
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
