<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12"><h1>Edit profile</h1></div>
        </div>
        <div class="row">
            <profile-form-component v-bind:profile="profile" v-bind:mode="'update'"></profile-form-component>
        </div>
    </div>
</template>

<script>
    import ProfileFormComponent from './ProfileFormComponent';

    export default {
        name: 'UpdateComponent',
        components: {
            ProfileFormComponent,
        },
        props: ['id'],
        computed: {
            profile() {
                return this.$store.state.selectedProfile;
            }
        },
        mounted() {
            this.$store.dispatch('selectProfile', this.id);
        }
    }
</script>
