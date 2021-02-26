<template>
  <div class="Transformers pb-3 bg-dark flex-grow-1 d-flex flex-column align-items-center rounded justify-content-center">
    <img class="mt-3" src="../assets/img/autobot.png">
    <div class="row">
      <router-link :to="{ name: 'TfTechSpec', params: { id: tfProp.id } }">
        <h3 class="my-2 text-light p-3 rounded d-flex align-items-center">
          <span class="mx-2 text-warning">{{ tfProp.description }}</span>
        </h3>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { logger } from '../utils/Logger'
// import { onMounted } from 'vue'

export default {
  name: 'Transformers',
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
.Transformers{
  text-align: center;
  user-select: none;
  > img{
    height: 80px;
    width: 80px;
    transform: rotateY(360deg);
  }
}

</style>
