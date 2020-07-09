<template>
  <div>
    <ul>
      <li class="open">
        <a>Notification</a>
      </li>
      <li>
        <a>Notification</a>
      </li>
      <li>
        <a>Notification</a>
      </li>
      <li>
        <a>Notification</a>
      </li>
      <li>
        <a>Notification</a>
      </li>
    </ul>
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
};
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/style.scss";
  @import "~@/components/dropdown/default/styles.scss";
</style>
