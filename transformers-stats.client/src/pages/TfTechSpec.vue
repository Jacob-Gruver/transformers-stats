<template>
  <div class="TfTechSpec">
    <div class="row">
      <div class="col">
        <h1 class="text-dark">
          <span>{{ state.name }}</span>
        </h1>
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
        debugger
        const res = robotService.getOne(route.params.id)
        logger.log(AppState.transformer, res)
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
img {
  max-width: 100px;
}
</style>
