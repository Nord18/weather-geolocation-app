import Vue from 'vue'
import Vuex from 'vuex'
import { pos } from './main'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        weatherInfo: {
            main: '',
            sys: '',
            wind: ''
        }
    },
    mutations: {
        weatherLoad(state, data) {
            state.weatherInfo = data
        },
        cityWeatherLoad(state, data) {
            state.weatherInfo = data
        }
    },
    actions: {
        fetchWeather({ commit }) {
            fetch(`https://api.openweathermap.org/data/2.5/find?lat=${pos.lat}&lon=${pos.lng}&cnt=1&units=metric&appid=b8a6a5521f060271213c6740a8ed813a`)
                .then(response => response.json())
                .then(data => {
                    data.list.forEach(city => {
                        commit('weatherLoad', city)
                    })
                })
                .catch(e => {
                    console.log(e)
                })
        },
        cityWeather({ commit }, { city, textfield }) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b8a6a5521f060271213c6740a8ed813a`)
                .then(response => {
                    if (response.status === 404 || response.status === 400) {
                        textfield.classList.add('error')
                    } else {
                        textfield.classList.remove('error')
                        return response.json()
                    }
                })
                .then(data => {
                    commit('cityWeatherLoad', data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
})