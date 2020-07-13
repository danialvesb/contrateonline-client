<template>
  <div id="sidebarMenu" v-bind:class="{ 'sidebarOpen' :  isActiveSideBar }">
    <ul class="sidebarMenuInner">
      <li>
        Daniel Alves <span>Cliente</span>
      </li>
      <separator width="80%" color="rgba(250,250,250, .5)"/>
      <li v-for="( item, index ) in sidebar" :key="index">
        <uiButton
          fontSize="1.1"
          align="left"
          width="100%"
          v-on:evtButton="onClick(index, item)"
          :color="item.active ? 'success': 'default'">{{ item.value }}
        </uiButton>
      </li>
    </ul>
  </div>
</template>

<script>
import { uiButton } from '@/components/buttons/index';
import separator from '@/components/separator.vue';

export default {
  name: 'index',
  components: {
    uiButton,
    separator,
  },
  data() {
    return {
      sidebar: [
        {
          value: 'Início',
          active: true,
          icon: '',
          path: '/inicio',
        },
        {
          value: 'Minhas solicitações',
          active: false,
          icon: '',
          path: '/solicitacoes',
        },
        {
          value: 'Conversas',
          active: false,
          icon: '',
          path: '/conversas',
        },
        {
          value: 'Ofertar seviço',
          active: false,
          icon: '',
          path: '/servico/ofertar',
        },
        {
          value: 'Chamados',
          active: false,
          icon: '',
          path: '/chamados',
        },
      ],
    };
  },
  methods: {
    onClick(indexPara, { path }) {
      if (this.$route.path !== path) {
        this.alterOptionSideBar(indexPara);
        this.$router.push(path);
      }
    },
    alterOptionSideBar(indexPara = null, path = null) {
      const indexPath = this.sidebar.findIndex((element) => element.path === path);

      if (indexPara) {
        this.sidebar.map((item, index) => ({
          value: item.value,
          active: indexPara === index,
          icon: item.icon,
          path: item.path,
        }));
      }
      if (indexPath) {
        this.sidebar = this.sidebar.map((item, index) => ({
          value: item.value,
          active: indexPath === index,
          icon: item.icon,
          path: item.path,
        }));
      }
    },
  },
  computed: {
    isActiveSideBar() {
      return this.$store.getters.isActiveSideBar;
    },
  },
  mounted() {
    this.alterOptionSideBar(null, this.$route.path);
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/components/menu/default/styles.scss";
</style>
