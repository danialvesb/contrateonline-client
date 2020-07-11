<template>
  <div class="dropdown">
    <button class="dropbtn" v-on:click=toggleDropdown()>
      <font-awesome-icon  icon="bell" size="2x" style="filter: invert(80%)
      sepia(100%) saturate(0%)" />
    </button>
    <div class="dropdown-content" v-bind:class="{'dropdown-active': dropdownActive}">
      <div class="border-style"/>
      <a href="#">Notification 1</a>
      <a href="#">Notification 2</a>
      <a href="#">Notification 3</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dropdown',
  props: {
    title: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      dropdownActive: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownActive = !this.dropdownActive;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/style.scss";
  @import "~@/components/dropdown/default/styles.scss";
</style>
