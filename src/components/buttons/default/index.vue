<template>
  <button
    v-bind:class="[{ 'loading': loadingData}, `color-${color}`]"
    v-bind:style="{fontSize: fontSize, width: width,
    textAlign: align}"
    v-on:click="onClick($event)"
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
  },
  data() {
    return {
      loadingData: this.loading ? this.loading : false,
    };
  },
  methods: {
    onClick(event) {
      event.preventDefault();
      this.$emit('evt-button', () => event);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/buttons/default/styles.scss";
</style>
