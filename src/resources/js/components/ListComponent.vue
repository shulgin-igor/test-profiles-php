<template>
    <div class="container">
        <div class="row">
            <div class="col-9"><h1>Profiles list</h1></div>
            <div class="col-3">
                <router-link to="/create" class="btn btn-success">Add profile</router-link>
            </div>
        </div>
        <div class="row justify-content-center">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">#</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="profile in list">
                    <th scope="row">{{ profile.id }}</th>
                    <td>{{ profile.name }}</td>
                    <td>
                        <img v-bind:src="profile.image.url" class="image">
                    </td>
                    <td>
                        <router-link :to="{name: 'update', params: {id: profile.id}}" class="btn btn-sm btn-info">
                            Update
                        </router-link>
                        <button type="button" class="btn btn-sm btn-danger" @click="remove(profile.id)">Remove</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListComponent',
        computed: {
            list() {
                return this.$store.state.profiles;
            },
        },
        methods: {
            remove(id) {
                if (confirm('Are you sure you want to remove this record?')) {
                    // TODO: dispatch action
                }
            }
        },
        mounted() {
            this.$store.dispatch('loadProfiles');
        }
    }
</script>

<style>
    .image {
        width: 50px;
    }
</style>
