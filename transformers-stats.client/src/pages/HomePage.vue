<template>
  <div class="home pb-5 pt-5 mt-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img class="my-5" src="../assets/img/autobot.png">
    <img class="my-5" src="../assets/img/decepticon.png">
  </div>
</template>

<script>

export default {
  name: 'Home',
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
  }
  > img:hover{
    transition: transform 2s;
    transform: rotateY(180deg);
  }

  background-image: url(../assets/img/homebg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
