<template>
  <div class="container-sidebar">
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

export default {
  name: 'index',
  props: {
    sidebar: {
      type: Boolean,
      require: true,
    },
  },
  components: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/style.scss";
  @import "~@/components/menu/default/styles.scss";
</style>
