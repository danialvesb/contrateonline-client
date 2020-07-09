<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header v-on:checkboxToggleHeader="toogleSideBar($event)">
        <template v-slot:breadcrumbs>
          <b style="color: #495057">Ofertas de serviços</b>
          <ui-input/>
        </template>
        <template v-slot:navbar-right>
          <dropdown title="" icon=""
          :options="optionsDropdown"/>
        </template>
      </ui-header>
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar :sidebar="sidebar"/>
    </template>
    <template v-slot:content>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
      <uiCard title="Olá" text="Olá" colorHeader="#3399FF"/>
    </template>
    </dashboard-template>
</template>

<script>
import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';
import { uiCard } from '@/components/cards/index';
import { uiInput } from '@/components/inputs/index';
import { dropdown } from '@components/dropdown/index';

export default {
  name: 'dashboard',
  components: {
    dropdown,
    dashboardTemplate,
    uiMenuSideBar,
    uiHeader,
    uiCard,
    uiInput,
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
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/views/dashboard/styles.scss";
</style>
