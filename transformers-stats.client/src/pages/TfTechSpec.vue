<template>
  <div class="TfTechSpec container-fluid">
    <div class="bground1" style="backround-image: url('bg_grid2.jpg')">
      <div class="row">
        <div class="col">
          <h1>
            <span>{{ state.transformer.name }}</span>
          </h1>
          <span>{{ state.transformer.function }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { robotService } from '../services/RobotService'
import { logger } from '../utils/Logger'
export default {
  name: 'TfTechSpec',
  setup() {
    const route = useRoute()
    const state = reactive({
      transformer: computed(() => AppState.transformer)
    })
    onMounted(() => {
      try {
        const res = robotService.getOne(route.params.id)
        logger.log(res)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.bground1{

  background-image: url(../assets/img/bg_grid2.jpg);
  background-position: center;
  background-size: cover;

}
/* img {
  max-width: 100px;
} */

</style>
