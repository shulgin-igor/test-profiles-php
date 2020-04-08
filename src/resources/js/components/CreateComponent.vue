<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12"><h1>Create profile</h1></div>
        </div>
        <div class="row">
            <profile-form-component v-bind:profile="profile" v-bind:mode="'create'"></profile-form-component>
        </div>
    </div>
</template>

<script>
    import ProfileFormComponent from './ProfileFormComponent';

    export default {
        name: 'CreateComponent',
        computed: {
            profile() {
                return this.$store.state.selectedProfile;
            }
        },
        components: {
            ProfileFormComponent,
        },
        mounted() {
            this.$store.dispatch('selectProfile', null);
        }
    }
</script>
