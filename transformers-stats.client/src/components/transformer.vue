<template>
  <div class="Transformers hover1 pb-3 mt-3 bg-dark flex-grow-1 d-flex border">
    <img class="m-3" v-if="tfProp.affiliation === true" src="../assets/img/autobot.png">
    <img class="m-3" v-else src="../assets/img/decepticon.png">

    <div class="row jusify-content-center">
      <router-link :to="{ name: 'TfTechSpec', params: { id: tfProp.id } }">
        <div class="col">
          <h3 class="my-2 text-light p-3 rounded d-flex align-items-center">
            <span v-if="tfProp.affiliation === true" class="mx-2 text-warning"><h2>{{ tfProp.name }}</h2></span>
            <span v-else class="mx-2 text-secondary"><h2>{{ tfProp.name }}</h2></span>
          </h3>
          <span v-if="tfProp.affiliation === true" class="mx-2 text-warning">{{ tfProp.function }}</span>
          <span v-else class="mx-2 text-secondary">{{ tfProp.function }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Transformers',
  props: {
    tfProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.Transformers{
  text-align: center;
  user-select: none;
  > img{
    height: 80px;
    width: 80px;
  }
}
.Transformers:hover{
  transition: transform 2s;
  transform: scale(1.1);
  > img{
    transition: transform 2s;
    transform: rotateY(180deg);
  }
}

</style>
