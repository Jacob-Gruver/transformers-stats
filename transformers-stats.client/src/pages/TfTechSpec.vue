<template>
  <div class="TfTechSpec bground1 container-fluid" v-if="state.transformer.affiliation === true">
    <div class="row bg-warning border border-danger m-3">
      <div class="col p-3 mx-3">
        <h1>
          <span>{{ state.transformer.name }}</span>
        </h1>
        <p>{{ state.transformer.form }}</p>
        <span>{{ state.transformer.function }}</span>
        <p>{{ state.transformer.description }}</p>
      </div>
      <div class="col p-3 mx-3">
        <p> {{ state.transformer.name }}'s Tech Specs </p>
        <p> Strength: {{ state.transformer.specs.strength }}</p>
        <p> Intelligence: {{ state.transformer.specs.intelligence }}</p>
        <p> Speed: {{ state.transformer.specs.speed }}</p>
        <p> Endurance: {{ state.transformer.specs.endurance }}</p>
        <p> Rank: {{ state.transformer.specs.rank }}</p>
        <p> Courage: {{ state.transformer.specs.courage }}</p>
        <p> Firepower: {{ state.transformer.specs.firepower }}</p>
        <p> Skill: {{ state.transformer.specs.skill }}</p>
      </div>
      <img class="aff m-3" src="../assets/img/autobot.png">
    </div>
  </div>
  <div class=" TfTechSpec bground2 container-fluid" v-else>
    <div class="row text-primary bg-secondary border m-3">
      <div class="col p-3 mx-3">
        <h1>
          <span>{{ state.transformer.name }}</span>
        </h1>
        <p>{{ state.transformer.form }}</p>
        <span>{{ state.transformer.function }}</span>
        <p>{{ state.transformer.description }}</p>
      </div>
      <div class="col p-3 mx-3">
        <p> {{ state.transformer.name }}'s Tech Specs </p>
        <p> Strength: {{ state.transformer.specs.strength }}</p>
        <p> Intelligence: {{ state.transformer.specs.intelligence }}</p>
        <p> Speed: {{ state.transformer.specs.speed }}</p>
        <p> Endurance: {{ state.transformer.specs.endurance }}</p>
        <p> Rank: {{ state.transformer.specs.rank }}</p>
        <p> Courage: {{ state.transformer.specs.courage }}</p>
        <p> Firepower: {{ state.transformer.specs.firepower }}</p>
        <p> Skill: {{ state.transformer.specs.skill }}</p>
      </div>
      <img class="aff m-3" src="../assets/img/decepticon.png">
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
  background-image: url(../assets/img/bg_grid.jpg);
  background-position: center;
  background-size: cover;
}
 img.aff{
    height: 120px;
    width: 120px;
  }
  img.aff:hover{
    transition: transform 2s;
    transform: rotateY(180deg);
  }
  img{
    height: 200px;
    width: 200px;
  }

.bground2{
  background-image: url(../assets/img/bg_grid2.jpg);
  background-position: center;
  background-size: cover;
}

</style>
