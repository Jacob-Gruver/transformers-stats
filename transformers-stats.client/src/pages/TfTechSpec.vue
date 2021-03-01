<template>
  <div class="TfTechSpec">
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
        logger.log('logging from the tftechspec page', res.data)
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
