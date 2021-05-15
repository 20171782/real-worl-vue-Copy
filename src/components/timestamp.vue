<template>
    <div class="uk-margin-top">
        <div class="box-share" >
            <p class="txt-share"><strong>People You May Know</strong></p>
            <div v-for="use in users" class="grid-share">
                <div>
                    <img :src="use.image" alt="" class="img-share"/>
                </div>
                <div>
                    <router-link :to="'/profile/' + use.alias  "> <p>
                        <strong style="color: #800080 !important;">{{ use.alias}}</strong></p>
                        <p style="color: #800080 !important;" class="username">@julian_duque</p>
                    </router-link>
                </div>
                <div>
                    <button    v-if="!test(use.id) && !confirm(use.id)"  @click="addfren(use.id, use.image, use.name, use.alias)"
                             class="button-signup fondo-color-signup">
                        <strong>Seguir</strong>
                    </button>
                    <div style="margin-bottom: auto;" v-else class="uk-alert-primary" uk-alert>
                        <a class="uk-alert-close" uk-close ></a>
                        <p>
                           <span>{{ use.alias }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    import {fb} from "@/firebase/init";

    export default {
        name: "sidebar",

        data() {
            return {
                users: [],
                gallery: [],
                id: firebase.auth().currentUser.uid,
                msg: "",
                name: null,
                image: null,
                myAlias: null,
                testing: [],
                requester: null,
                search: "",
                Show: true
            };
        },

        methods: {
            addfren(id, image, name, alias) {
                db.collection("friendships")
                    .add({
                        requester: this.id,
                        user_requested: id,
                        user_requestedImage: image,
                        status: null,
                        name: this.name,
                        user_requestedName: name,
                        requesterImage: this.image,
                        userRequestedAlias: alias,
                        myAlias: this.myAlias
                    })
                    .then(ref => {
                        db.collection("friendships")
                            .doc(ref.id)
                            .update({
                                request_id: ref.id
                            });
                    });
            },
            test(id) {
                return this.testing.find(map => {

                    return map.user_requested == id && map.requester == this.id;
                });

            },
            confirm(id) {
                return this.testing.find(map => {

                    return map.user_requested == this.id && map.requester == id;
                });
            },
            change() {
                if (!this.Show) {
                    this.Show = true;
                } else {
                    this.Show = false;
                }
            }
        },
        firestore() {
            return {
                testing: fb.collection('friendships')
            }
        },
        computed: {
            filteredList() {
                return this.users.filter(post => {
                    return post.name.toLowerCase().includes(this.search.toLowerCase());
                });
            },
            sliceList() {
                return this.filteredList.slice(0, 4);
            }
        },

        created() {
            db.collection("Profile")
                .where("id", "==", this.id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.name = doc.data().name;
                        this.image = doc.data().image;
                        this.myAlias = doc.data().alias;
                    });
                })
                .catch(error => {
                    console.log("Error getting documents: ", error);
                });
            this.$store.dispatch("Users", this.users);


        }
    };
</script>

<style scoped>



    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    .wrapper-left .sidebar-left {
        position: fixed;
        width: 276px;
        height: 100%;
        background-color: #ffffff;
        font-size: 19px;
        border-right: 0.5px solid #e6ecf0;
        margin-left: 40px;
    }


    .input-group-login > .custom-select:not(:first-child),
    .input-group-login > .form-control-login:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .input-group-login > .custom-file,
    .input-group > .custom-select,
    .input-group-login > .form-control-login {
        position: relative;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 1%;
        min-width: 0;
        margin-bottom: 0;
    }

    button,
    input {
        overflow: visible;
    }


    /* BOX-SHARE */
    .box-share{
        margin: 20px;
        margin-right: 60px;
        border-radius: 10px;
        background-color: #F5F8FA;
    }

    .grid-share{
        padding: 10px;
        margin-top: 10px;
        display: grid;
        grid-template-columns: 18% 60% auto;
        transition: 0.5s;
    }

    .grid-share:hover{
        transition: 0.5s;
        background-color: #E6ECF0;
    }

    .txt-share{
        font-size: 18.5px;
        padding: 10px;
    }
    .img-share{
        height: 49px;
        width: 49px;
        border-radius: 50px;
    }

    /* BUTTON SIGNUP */
    .button-signup {
        display: inline-block;
        font-weight: 400;
        color: #800080;
        height: auto;
        width: 78px;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        /* BORDER RADIUS */
        border-radius: 28px 28px 28px 28px;
        -moz-border-radius: 28px 28px 28px 28px;
        -webkit-border-radius: 28px 28px 28px 28px;
        border: 1px solid #800080;
        cursor: pointer;
        background-color: transparent;
    }
</style>
