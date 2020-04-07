<template>
    <div class="container">
        <div class="row">
            <div class="col-9"><h1>Profiles list</h1></div>
            <div class="col-3">
                <router-link to="/create">Add profile</router-link>
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
                    <td></td>
                    <td></td>
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
    }
</script>
