<template>
  <div class="home pb-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="../assets/img/autobot.png">
    <img src="../assets/img/decepticon.png">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-warning"><img src="../assets/img/tfword.gif"></span>
    </h1>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { logger } from '../utils/Logger'
import { robotService } from '../services/RobotService'

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      try {
        robotService.getRobots()
      } catch (error) {
        logger.error(error)
      }
    })
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
    transform: rotateY(360deg);
  }
  background-image: url(../assets/img/tfbackround.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
