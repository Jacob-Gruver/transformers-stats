<template>
  <div class="Transformer">
    <h3 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-warning"><img src="../assets/img/tfword.gif"></span>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Transformer',
  props: {
    tfProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
