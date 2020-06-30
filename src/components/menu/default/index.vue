<template>
  <div>
       <ui-toggle-side-bar v-on:checkboxToggle="checked($event)"/>
    <div id="sidebarMenu" v-bind:class="[sidebar ? 'sidebarOpen' : '']">
      <ul class="sidebarMenuInner">
        <li>
           Daniel Alves <span>Cliente</span>
        </li>
        <li>
          <a target="_blank">Lista de serviços</a>
        </li>
        <li>
          <a target="_blank">Minhas solicitações</a>
        </li>
        <li>
          <a target="_blank">Conversas</a>
        </li>
        <li>
          <a target="_blank">Ofertar seviço</a>
        </li>
        <li>
          <a target="_blank">Chamados</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { uiToggleSideBar } from '@/components/buttons/index';

export default {
  name: 'index',
  data() {
    return {
      sidebar: null,
    };
  },
  components: {
    uiToggleSideBar,
  },
  methods: {
    checked(event) {
      this.sidebar = event();
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/components/menu/default/styles.scss";
</style>
