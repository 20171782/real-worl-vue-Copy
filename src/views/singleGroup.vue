<template>
    <div>
        <div class="uk-container uk-section uk-section-muted" style="margin-top: 0px" >
            <div uk-slider="center: true">
                <h3>People you may know</h3>
                <div  class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1" >
                    <div class=" uk-slider-items uk-child-width-1-1@s uk-child-width-1-3@m" >
                        <div class="card" v-for="use in users">
                            <canvas class="header-bg" width="20" height="70" id="header-blur"></canvas>
                            <div class="avatar">
                                <img :src="use.image" alt="" />
                            </div>
                            <div class="content">
                                <p>{{use.name}} <br>
                                    More description here</p>
                                <div class="">

                                    <button  v-if="!test(use.id)" class="btn btn-light" type="button"

                                            @click="addToGroup(use.id, use.image, use.name, use.alias)"
                                    >
                                        <i class="fa fa-user-plus">add to group</i>
                                    </button>

                                    <div style="margin-bottom: auto;" v-else class="uk-alert-primary" uk-alert>
                                        <a class="uk-alert-close" uk-close ></a>
                                        <p>
                                           <span>user added</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a style="color: #009b3a" class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a style="color: #009b3a" class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

                </div>

                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>
        </div>
    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    import {fb} from "@/firebase/init";
    export default {
        name: "singleGroup",
        data(){
            return{
                users:[],
                GroupUsers:[]
            }
        },
        methods:{
            addToGroup(id,image,name,alias) {
                db.collection("GroupUsers")
                        .add({
                            Group_id:this.$route.params.id,
                            user_id:id,
                            UserImage:image,
                            UserName:name,
                            UserAlias:alias
                        }).then(()=>{
                            alert("User added")
                })

            },
            test(id) {
                return this.GroupUsers.find(map => {

                    return map.user_id == id && map.Group_id == this.$route.params.id
                });

            },
        },
        firestore() {
            return {
                GroupUsers: fb.collection('GroupUsers')
            }
        },

        created() {
            this.$store.dispatch("Users", this.users);
        }
    }
</script>

<style scoped>
    .card {
        overflow: hidden;
        position: relative;
        border: 1px solid #CCC;
        border-radius: 8px;
        text-align: center;
        padding: 0;
        margin:10px;
        /*background-color: black;*/
        /*color: rgb(136, 172, 217);*/
        color: black;
    }

    .card .header-bg {
        /* This stretches the canvas across the entire hero unit */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        /*border-bottom: 1px rgba(0, 155, 58, 0.9) solid;*/
        border-bottom: 1px #e9ebee solid;
        /* This positions the canvas under the text */
        z-index: 1;
    }
    .card .avatar {
        position: relative;
        margin-top: 15px;
        z-index: 100;
    }

    .card .avatar img {
        width: 100px;
        height: 100px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid  rgba(0, 155, 58, 0.9);
        /*border: 5px solid #e9ebee;*/
    }
    button{

        /*background-image: linear-gradient(to bottom, #fed100, #5F206E  84%);*/
        /*-pie-background: linear-gradient(to bottom, #fed100, #5F206E  84%);*/
        background-color: #5F206E;
        border-bottom: 1px solid #29487d;
        opacity: 0.9;
        color:white
    }
</style>
