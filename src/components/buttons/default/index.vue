<template>
  <button
    :class="[
      { 'loading': loading},
      `color-${color}`,
      {'disabled': disabled},
    ]"
    :style="[{fontSize: `${fontSize}rem`,
    height: height,
    width: width,
    margin: margin,
    textAlign: align}]"
    @click="onClick($event)"
    :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'uibutton',
  props: {
    color: {
      required: false,
      type: String,
    },
    fontSize: {
      required: false,
      type: String,
    },
    width: {
      required: false,
      type: String,
    },
    height: {
      required: false,
      type: String,
    },
    disabled: {
      required: false,
      type: Boolean,
    },
    loading: {
      required: false,
      type: Boolean,
    },
    align: {
      required: false,
      type: String,
    },
    margin: {
      required: false,
      type: String,
    },
  },
  methods: {
    onClick(event) {
      event.preventDefault();
      this.$emit('click', () => event);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/buttons/default/styles.scss";
</style>
