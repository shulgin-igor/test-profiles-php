import Vue from 'vue';
import Vuex from 'vuex';
import ProfilesService from '../services/ProfilesService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profiles: [],
        selectedProfile: null,
    },
    actions: {
        async loadProfiles(context) {
            try {
                const {data} = await ProfilesService.fetch();
                context.commit('profilesListLoaded', data.data);
            } catch (e) {
                alert('Can\'t retrieve profiles list')
            }
        },
        async selectProfile(context, id) {
            try {
                let profile;
                if (id) {
                    const {data} = await ProfilesService.one(id);
                    profile = data.data;
                } else {
                    profile = {
                        name: '',
                        images: [],
                    };
                }
                context.commit('profileSelected', profile);
            } catch (e) {
                // TODO: check error code
            }
        },
        async createProfile(context, data) {
            let result;
            if (!data.id) {
                const response = await ProfilesService.create(data);
                result = response.data.data;
            } else {
                const response = await ProfilesService.update(data.id, data);
                result = response.data.data;
            }

            context.commit('profileSaved', result);
        },
        async removeProfile(context, id) {
            try {
                await ProfilesService.delete(id);
                context.commit('profileRemoved', id);
            } catch (e) {
                // TODO: check error code
            }
        },
        async uploadImages(context, images) {
            try {
                let result = [];
                if (images.get('images[]')) {
                    const {data} = await ProfilesService.uploadImages(context.state.selectedProfile.id, images);
                    result = data.data;
                }
                context.commit('imagesUploaded', result);
            } catch (e) {
                // TODO: check error code
            }
        }
    },
    mutations: {
        profilesListLoaded(state, list) {
            state.profiles = list;
        },
        profileSelected(state, profile) {
            state.selectedProfile = profile;
        },
        profileSaved(state, profile) {
            state.selectedProfile = profile;
        },
        profileRemoved(state, id) {
            const index = state.profiles.findIndex(profile => profile.id === id);
            state.profiles.splice(index, 1);
        },
        imagesUploaded(state, images) {
            state.selectedProfile.images = images.concat(state.selectedProfile.images);
        }
    }
})
