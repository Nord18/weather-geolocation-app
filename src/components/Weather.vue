<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 card bg-light">
          <div class="card-header">Temperature: {{getWeather.main.temp}}</div>
          <div class="card-body">
            <h5 class="card-title">City: {{getWeather.name}}</h5>
            <div class="inner" v-for="(weather, index) in getWeather.weather" :key="index">
              <p class="card-text">Weather: {{weather.description}}</p>
              <img :src="`http://openweathermap.org/img/wn/${weather.icon}.png`" alt="icon">
            </div>
            <p class="card-text">Country: {{getWeather.sys.country}}</p>
            <p class="card-text">Wind speed: {{getWeather.wind.speed}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getWeather() {
      return this.$store.state.weatherInfo;
    }
  }
}
</script>

<style scoped lang="scss">
.inner {
  display: flex;
  align-items: flex-end;
}
</style>
