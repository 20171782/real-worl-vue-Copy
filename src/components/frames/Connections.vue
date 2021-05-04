<template>
    <div class="uk-margin-top">


        <div class="box-share" v-if="frens.length !=0 || Friends.length !=0">

            <p class="txt-share"><strong>Your Connections</strong></p>


            <div v-for="requests in frens" class="grid-share">
                <div>
                    <img :src="requests.requesterImage" alt="" class="img-share"/>
                </div>
                <div>
                    <router-link :to="'/profile/' + requests.myAlias  "> <p><strong style="color: #800080 !important;">{{ requests.myAlias}}</strong></p>
                    <p style="color: #800080 !important;" class="username">@julian_duque</p></router-link>
                </div>
                <div>
                    <button @click="remove(requests.request_id)" class="button-signup fondo-color-signup">
                        <strong>Seguir</strong>
                    </button>
                </div>
            </div>



            <div v-for="requests in Friends" class="grid-share">
                <div>
                    <img
                            :src="requests.user_requestedImage"
                            alt=""
                            class="img-share"
                    />
                </div>
                <div>
                    <router-link :to="'/profile/' + requests.userRequestedAlias " ><p><strong style="color: #800080 !important;">{{ requests.userRequestedAlias}}</strong></p>
                    <p style="color: #800080 !important;" class="username">@julian_duque</p></router-link>
                </div>
                <div>
                    <button @click="remove(requests.request_id)" class="button-signup fondo-color-signup">
                        <strong>Seguir</strong>
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="txt-share"><strong>No Connections</strong></p>
            <hr>

            <span style='font-size:200px;'>&#128577;</span>
        </div>

    </div>
</template>

<script>
    import UIkit from "uikit";
    import db from "@/firebase/init";
    import firebase from "firebase";
    import {fb} from "@/firebase/init";
    export default {
        name: "Connections",
        data(){
            return{
                frens:[],
                Friends:[],
                id: firebase.auth().currentUser.uid,
                images:'signup.svg'


            }
        },
        methods:{
            remove(id){
                db.collection("friendships").doc(id).delete().then(()=>{

                })
            }
        },
        firestore() {
            return {
                frens: fb.collection('friendships'),
                Friends: fb.collection('friendships')
            }
        },
        created() {
            this.$binding("frens", fb.collection("friendships").where('user_requested', '==', this.id).where('status','==',1))
                .then((ford) => {
                    this.frens === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })
            this.$binding("Friends", fb.collection("friendships").where('requester', '==', this.id).where('status','==',1).where('check','==',1))
                .then((ford) => {
                    this.Friends === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })
        },

    }
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
