<template>
  <div class="home pb-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img type="button" @click="changeAffSym" class="pt-3" src="../assets/img/autobot.png">
    <img type="button" class="pt-3" src="../assets/img/decepticon.png">
    <h1 class="my-3 text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-warning"><img src="../assets/img/tfword.gif"></span>
    </h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  affSym: true,
  setup() {
    return {
      changeAffSym() {
      }

    }
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
