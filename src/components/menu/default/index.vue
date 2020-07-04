<template>
  <div id="sidebarMenu" v-bind:class="{ 'sidebarOpen' :  isActiveSideBar }">
    <ul class="sidebarMenuInner">
      <li>
        Daniel Alves <span>Cliente</span>
      </li>
      <li class="separator"/>
      <li>
        <uiButton align="left" width="100%" color="success">Lista de serviços</uiButton>
      </li>
      <li>
        <uiButton align="left">Minhas solicitações</uiButton>
      </li>
      <li>
        <uiButton align="left">Conversas</uiButton>
      </li>
      <li>
        <uiButton align="left">Ofertar seviço</uiButton>
      </li>
      <li>
        <uiButton align="left">Chamados</uiButton>
      </li>
    </ul>
  </div>
</template>

<script>
import { uiButton } from '@/components/buttons/index';

export default {
  name: 'index',
  components: {
    uiButton,
  },
  methods: {
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
  @import "~@/components/menu/default/styles.scss";
</style>
