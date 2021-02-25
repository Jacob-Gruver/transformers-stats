<template>
  <div class="Transformer pb-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <router-link :to="{ name: 'TfTechSpec', params: { id: tfProp.id } }">
      <h3 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
        <span class="mx-2 text-warning">{{ tfProp.name }}</span>
      </h3>
    </router-link>
  </div>
</template>

<script>
// import { logger } from '../utils/Logger'
// import { onMounted } from 'vue'

export default {
  name: 'Transformer',
  props: {
    tfProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    // onMounted(() => {
    //   logger.log(tfProp)
    // })
    return {
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
