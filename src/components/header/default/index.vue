<template>
  <div class="header">
    <ui-toggle-side-bar class="toogleSideBar"/>
    <div class="animbrand">
      <img width="150" height="100" :src="require('@/assets/animbrand/default-monochrome.svg')">
    </div>
    <div class="navbar-left options">
      <button v-for="option in options" :key="option.id"
        @click="pushRouter(option.path)" >
        {{ option.value }}
      <font-awesome-icon :icon="option.icon" style="margin-left: 3px; filter: invert(80%)
      sepia(100%) saturate(0%)"/>
      </button>
    </div>
  </div>
</template>

<script>
import { uiToggleSideBar } from '@/components/buttons/index';

export default {
  name: 'index',
  components: {
    uiToggleSideBar,
  },
  data() {
    return {
      sidebar: false,
      options: [
        {
          id: 1,
          value: 'Início',
          active: true,
          icon: 'home',
          path: '/inicio',
        },
        {
          id: 2,
          value: 'Minhas solicitações',
          active: false,
          icon: 'star',
          path: '/solicitacoes',
        },
        {
          id: 3,
          value: 'Conversas',
          active: false,
          icon: 'users',
          path: '/conversas',
        },
        {
          id: 4,
          value: 'Ofertar seviço',
          active: false,
          icon: 'rocket',
          path: '/servico/ofertar',
        },
        {
          id: 5,
          value: 'Chamados',
          active: false,
          icon: 'business-time',
          path: '/chamados',
        },
      ],
      authOptions: [
        {
          id: 1,
          value: 'Login',
          active: false,
          icon: 'sign',
          path: '/chamados',
        },
        {
          id: 2,
          value: 'Sair',
          active: false,
          icon: 'sign-out-alt',
          path: '/chamados',
        },
      ],
    };
  },
  methods: {
    pushRouter(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/components/header/default/styles.scss";
</style>
