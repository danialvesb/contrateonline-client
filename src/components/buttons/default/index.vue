<template>
  <button
    v-bind:class="{ 'color': color, 'loading': loadingData }"
    v-bind:style="{ 'fontSize': `${fontSize}px`, 'width': `${width}px` }"
    v-on:click="onClick($event)"
    :disabled="loading">{{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    color: {
      required: true,
      type: String,
    },
    fontSize: {
      required: true,
      type: String,
    },
    width: {
      required: true,
      type: String,
    },
    loading: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      loadingData: this.loading ? this.loading : ' ',
    };
  },
  name: 'uibutton',
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
