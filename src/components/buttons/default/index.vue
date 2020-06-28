<template>
  <button
    v-bind:class="['color-'+color]+[' ']+[loading ? 'loading': '']"
    v-bind:style="'font-size:'+fontSize+'px;'+
      'width:'+width+'px'"
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
  name: 'uibutton',
  methods: {
    onClick(event) {
      event.preventDefault();
      this.$emit('evt-button', () => {
        alert('olá');
      });
    },
  },
};
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/_variables.scss";
  @import "~@/components/buttons/default/styles.scss";
</style>
