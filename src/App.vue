<template>
  <div id="app">
    <div class="container wrapper">
      <div class="row justify-content-center">
        <div class="col-md-11 col-8">
           <input ref="textfield" @keypress.enter="getCityWeather" v-model="value" type="text" class="form-control form-control-lg" placeholder="City name">
        </div>
        <div class="col-md-1 col-4 text-center">
           <button @click="getCityWeather" type="button" class="btn btn-light btn-lg">Search</button>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    getCityWeather() {
      this.$store.dispatch('cityWeather', {
        city: this.value,
        textfield: this.$refs.textfield
      });
      this.value = ''
    }
  },
  created() {
    this.$store.dispatch('fetchWeather')
  }
};
</script>

<style lang="scss">
#app {
  background: linear-gradient(to bottom, #1867c0, #5cbbf6);
  padding-top: 10px;
  height: 100vh;
}

.wrapper {
  margin-bottom: 110px;
}

.error {
  border: 3px solid red;
  &:focus {
    border: 3px solid red;
  }
}

@media screen and (max-width: 320px) {
  .row {
    margin-right: 0;
    margin-left: 0;
  }

  [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
