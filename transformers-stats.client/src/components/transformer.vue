<template>
  <div class="Transformers pb-3 bg-dark flex-grow-1 d-flex flex-column align-items-center rounded justify-content-center">
    <img class="mt-3" v-if="tfProp.affiliation === true" src="'../assets/img/autobot.png'">
    <img class="mt-3" v-else src="'../assets/img/decepticon.png'">

    <div class="row">
      <!-- <router-link :to="{ name: 'TfTechSpec', params: { id: tfProp.id } }"> -->
      <h3 class="my-2 text-light p-3 rounded d-flex align-items-center">
        <span class="mx-2 text-warning"><h3>{{ tfProp.name }}</h3></span>
        <span class="mx-2 text-warning">{{ tfProp.description }}</span>
      </h3>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import { logger } from '../utils/Logger'
// import { logger } from '../utils/Logger'
// import { onMounted } from 'vue'
// import { robotService } from '../services/RobotService'

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
    //   })
    return {
      renderAff(aff) {
        if (aff === true) {
          logger.log(aff)
          return '../assets/img/autobot.png'
        } else if (aff === false) {
          logger.log(aff)
          return '../assets/img/decepticon.png'
        } else {
          logger.error('no aff given', aff)
        }
      }
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
