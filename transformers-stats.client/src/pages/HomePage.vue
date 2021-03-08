<template>
  <div class="home pb-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img class="my-5" src="../assets/img/autobot.png">
    <img class="my-5" src="../assets/img/decepticon.png">
    <!-- <h1 class="my-5 bg-dark text-light p-3 d-flex align-items-center border border-danger">
      <span class="mx-2 text-warning"><img src="../assets/img/tfword.gif"></span>
    </h1> -->
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

  background-image: url(../assets/img/test2.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
