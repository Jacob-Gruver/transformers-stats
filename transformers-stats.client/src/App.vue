<template>
  <div class="app">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer>
      <div class="bg-dark text-warning text-center p-4">
        <span class="mx-2 text-warning"><img src="./assets/img/tfword.gif"></span>
        <span>
          <h4>
            Robots in Disguise
          </h4>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.app{
  animation:  fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  // background-color: #313130;
  // background-position: center;
  // background-size: cover;
  // background-repeat: no-repeat;
}

</style>
