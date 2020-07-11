<template>
  <div class="dropdown">
    <button class="dropbtn">
      <font-awesome-icon icon="bell" :style="{ color: '#495057'}"/>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
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
  components: {
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/style.scss";
  @import "~@/components/dropdown/default/styles.scss";
</style>
