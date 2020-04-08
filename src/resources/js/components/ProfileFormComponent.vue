<template>
    <form v-if="profile !== null" class="container" @submit="save">
        <div class="form-group">
            <label class="control-label" for="name">Name</label>
            <input type="text" name="name" id="name" class="form-control" v-model="profile.name">
        </div>
        <h2>Images
            <button type="button" class="btn btn-outline-primary" @click="openFileBrowser">Add</button>
        </h2>
        <div class="row">
            <div class="image col-2" v-for="image in profile.images">
                <img v-bind:src="image.url"/>
                <button class="btn btn-sm btn-danger" type="button" @click="removeImage(image)">x</button>
            </div>
            <div class="col-12" v-if="profile.images.length === 0">No images have been added yet</div>
        </div>
        <hr>
        <div class="form-group d-flex justify-content-end">
            <router-link to="/" class="btn btn-secondary">Back to the list</router-link>
            <button type="submit" class="btn btn-success">Save</button>
        </div>
        <input type="file" @change="selectFile" ref="image">
    </form>
</template>

<script>
    import ProfilesService from "../services/ProfilesService";

    export default {
        name: 'ProfileFormComponent',
        props: ['profile', 'mode'],
        data() {
            return {
                images: new FormData(),
                removedImages: [],
            };
        },
        created() {
            this.unsubscribe = this.$store.subscribe((mutation, state) => {
                if (mutation.type === 'profileSaved') {
                    this.$store.dispatch('uploadImages', this.images);
                }
                if (mutation.type === 'imagesUploaded') {
                    if (this.mode === 'create') {
                        this.$router.push({name: 'update', params: {id: state.selectedProfile.id}});
                    } else {
                        alert('Changes saved');
                    }
                    this.images = new FormData();
                }
            });
        },
        destroyed() {
            this.unsubscribe();
        },
        methods: {
            openFileBrowser() {
                this.$refs.image.click();
            },
            removeImage(image) {
                if (image.id) {
                    this.removedImages.push(image.id);
                }
                const index = this.profile.images.findIndex(i => i.id === image.id);
                this.profile.images.splice(index, 1);
            },
            selectFile() {
                const file = this.$refs.image.files[0];
                const reader = new FileReader();

                const {valid, message} = ProfilesService.validateImage(file);

                if (valid) {
                    reader.onload = (e) => {
                        this.$store.dispatch('selectImage', {url: e.target.result});
                    };

                    reader.readAsDataURL(file);
                    this.images.append('images[]', file, 'image.png');
                } else {
                    alert(message);
                }
            },
            save(e) {
                e.preventDefault();

                if (ProfilesService.validateName(this.profile.name)) {
                    this.$store.dispatch('createProfile', {...this.profile, removedImages: this.removedImages});
                } else {
                    alert('Invalid name');
                }
            },
        }
    }
</script>

<style lang="scss">
    .image {
        overflow: hidden;

        .btn {
            display: none;
            position: absolute;
            bottom: 20px;
            right: 20px;
        }

        &:hover {
            .btn {
                display: block;
            }
        }

        img {
            position: absolute;
            width: 100%;
        }

        &:after {
            border: 1px solid #ccc;
            content: "";
            display: block;
            padding: 15px 0 calc(100% - 15px);
        }
    }

    [type="file"] {
        display: none;
    }

    .btn-secondary {
        margin-right: 10px;
    }
</style>
