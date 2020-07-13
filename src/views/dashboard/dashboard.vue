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
        <li>Lista de serviços</li>
      </ui-breadcrumbs>
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar :sidebar="sidebar"/>
    </template>
      <template v-slot:content>
        <uiCard v-for="card in cards"
                :key="card.id"
                :title="card.title"
                :text="card.text"
                :colorHeader="card.colorHeader"
                :id="card.id"
                class="list-item"/>
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
      cards: [
        {
          id: 1,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
        {
          id: 2,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
        {
          id: 3,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
        {
          id: 4,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
        {
          id: 5,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
        {
          id: 6,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
        {
          id: 7,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
        {
          id: 8,
          title: 'Olá',
          text: 'Olá',
          colorHeader: '#3399FF',
        },
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
