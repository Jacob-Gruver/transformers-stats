<template>
  <div class="home pb-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="../assets/img/autobot.png">
    <img src="../assets/img/decepticon.png">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-warning">Transformers Tech Spec</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
  background-image: url(../assets/img/tfbackround.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
