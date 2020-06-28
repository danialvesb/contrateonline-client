<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header />
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar />
    </template>

    </dashboard-template>
</template>

<script>
import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';

export default {
  name: 'Dashboard',
  components: {
    dashboardTemplate,
    uiMenuSideBar,
    uiHeader,
  },
  data() {
    return {
    };
  },
  methods: {
    onClick(event) {
      event();
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/style.scss";
</style>
