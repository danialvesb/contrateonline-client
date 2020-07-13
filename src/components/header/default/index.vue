<template>
  <div class="header">
    <ui-toggle-side-bar v-on:checkboxToggle="checked($event)" class="toogleSideBar"/>
    <div class="options">
      <button v-for="option in options" :key="option.id"
              @click="pushRouter(option.path)">
        {{ option.value }}</button>
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
          icon: '',
          path: '/inicio',
        },
        {
          id: 2,
          value: 'Minhas solicitações',
          active: false,
          icon: '',
          path: '/solicitacoes',
        },
        {
          id: 3,
          value: 'Conversas',
          active: false,
          icon: '',
          path: '/conversas',
        },
        {
          id: 4,
          value: 'Ofertar seviço',
          active: false,
          icon: '',
          path: '/servico/ofertar',
        },
        {
          id: 5,
          value: 'Chamados',
          active: false,
          icon: '',
          path: '/chamados',
        },
      ],
    };
  },
  methods: {
    checked(event) {
      this.$emit('checkboxToggleHeader', event());
    },
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
