<template>
  <div class="side-conteiner">
       <ui-toggle-side-bar v-on:checkboxToggle="checked($event)"/>
    <div id="sidebarMenu" v-bind:class="[sidebar ? 'sidebarOpen' : '']">
      <ul class="sidebarMenuInner">
        <li>
          Jelena Jovanovic <span>Web Developer</span>
        </li>
        <li>
          <a href="https://vanila.io" target="_blank">Company</a>
        </li>
        <li>
          <a href="https://instagram.com/plavookac" target="_blank">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/plavookac" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a>
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
