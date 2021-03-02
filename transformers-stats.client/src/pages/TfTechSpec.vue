<template>
  <div class="TfTechSpec">
    <div class="row">
      <div class="col">
        <h1>
          <span>{{ state.name }}</span>
        </h1>
        <span>{{ state.function }}</span>
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
        robotService.getOne(route.params.id)
        logger.log(AppState.transformer)
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
