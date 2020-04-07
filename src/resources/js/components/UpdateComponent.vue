<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12"><h1>Edit profile</h1></div>
        </div>
        <div class="row">
            <profile-form-component></profile-form-component>
        </div>
    </div>
</template>

<script>
    import ProfileFormComponent from './ProfileFormComponent';

    export default {
        name: 'UpdateComponent',
        components: {
            ProfileFormComponent,
        }
    }
</script>
