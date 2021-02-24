<template>
  <div class="about pb-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col">
        <form>
          <div class="row p-2">
            <div class="col-xs-2">
              <input type="text"
                     name="name"
                     title="name"
                     class="form-control"
                     placeholder="Add name"
                     data-maxlength="16"
                     v-model="state.newTransformer.name"
              >
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input type="text"
                     name="description"
                     title="description"
                     class="form-control"
                     placeholder="Add description"
                     data-maxlength="150"
                     v-model="state.newTransformer.description"
              >
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input type="text"
                     name="form"
                     title="form"
                     class="form-control"
                     placeholder="Add form"
                     data-maxlength="150"
                     v-model="state.newTransformer.form"
              >
            </div>
          </div>
          <input type="checkbox" id="checkBox" name="allegiance"> <p>Autobot or Decepticon?</p>
          <button type="button" @click="addNewBug" class="btn btn-primary pt-2">
            Create
          </button>
        </form>
      </div>
    </div>
    <Transformers v-for="transformer in state.transformers " :key="transformer.id" :tf-prop="transformer" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { logger } from '../utils/Logger'
import { robotService } from '../services/RobotService'
// import { useRouter } from 'vue-router'
import { AppState } from '../AppState'

export default {
  name: 'AboutPage',
  setup() {
    // const router = useRouter()
    const state = reactive({
      transformers: computed(() => AppState.transformers),
      newTransformer: {}
    })
    onMounted(() => {
      try {
        robotService.getRobots()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      async addArobot() {
        try {
          await robotService.addArobot(state.newTransformer)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>
