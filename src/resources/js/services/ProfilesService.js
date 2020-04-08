import Vue from 'vue';

export default class ProfilesService {
    static fetch() {
        return Vue.axios.get('/profiles');
    }

    static one(id) {
        return Vue.axios.get(`/profiles/${id}`);
    }


    static create(data) {
        return Vue.axios.post('/profiles', data);
    }

    static update(id, data) {
        return Vue.axios.put(`/profiles/${id}`, data);
    }

    static delete(id) {
        return Vue.axios.delete(`/profiles/${id}`);
    }

    static uploadImages(id, images) {
        return Vue.axios.post(`/profiles/${id}/images`, images);
    }

    static validateName(name) {
        return /^\w+$/ig.test(name);
    }

    static validateImage(file) {
        if (['image/png', 'image/jpeg'].indexOf(file.type) === -1) {
            return {valid: false, message: 'Invalid file extension'};
        }
        if (file.size > 3 * 1024 * 1024) {
            return {valid: false, message: 'Max file size is 3mb'};
        }
        return {valid: true};
    }
}
