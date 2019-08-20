import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export let pos = null;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        let yourLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        pos = yourLocation;
        new Vue({
            router,
            store,
            render: function (h) { return h(App) }
        }).$mount('#app')
    })
} else {
    console.log(`Browser doesn't support Geolocation`)
}