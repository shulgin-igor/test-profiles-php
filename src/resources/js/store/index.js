import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profiles: [
            {id: 123, name: 'Test 1'},
            {id: 234, name: 'Test 2'},
            {id: 456, name: 'Test 3'},
        ],
        selectedProfile: null,
    },
})
