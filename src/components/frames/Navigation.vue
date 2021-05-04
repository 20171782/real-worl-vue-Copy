<template>
    <div class="wrapper-left">
        <div class="sidebar-left">
            <div class="grid-sidebar" style="margin-top: 12px">

            </div>
            <div class="grid-sidebar" style="margin-top: 12px">

                <div>
                    <p style="margin-top: 4px"></p>
                </div>
            </div>

            <div class="grid-sidebar">
                <div class="icon-sidebar-align" @click="press">
                    <img src="@/assets/list.png" alt="" height="26.25px" width="26.25px" />
                </div>

                <div>
                    <p style="margin-top: 4px">
                        <select class=" "  v-model="cat" >
                            <option  v-for="(cat, index) in Cats" :key="index" >{{cat.name}}</option>
                        </select>
                    </p>
                    <!--                        <strong style="margin: 20px 0px 0px 10px">Most Recent</strong></p>-->
                </div>
            </div>


            <div class="grid-sidebar">
                <div class="icon-sidebar-align" @click="Likes">
                    <img src="@/assets/like.png" alt="" height="26.25px" width="26.25px" />
                </div>

                <div>
                    <p style=""><input class="uk-radio" name="group1" type="radio" value="mostLikes" v-model="mostLikes"/>
                        <strong style="margin: 20px 0px 0px 10px">Most Liked</strong> </p>

                </div>

            </div>

            <div class="grid-sidebar">
                <div class="icon-sidebar-align" @click="Comments">
                    <img src="https://i.ibb.co/gS5z544/opciones.png" alt="" height="26.25px" width="26.25px" />
                </div>

                <div>
                    <p style="margin-top: 4px" >
                        <input class="uk-radio" name="group1" type="radio" value="mostComments" v-model="mostComments"/>
                        <strong style="margin: 20px 0px 0px 10px">Most Commented</strong></p>
                </div>
            </div>

            <div class="grid-sidebar">
                    <div class="icon-sidebar-align"  @click="myMemes">
                    <img src="@/assets/picture.png" alt="" height="26.25px" width="26.25px" />
                </div>

                <div>
                    <p style="margin-top: 4px"> <input class="uk-radio" name="group1" type="radio" value="myMemes" v-model="mine"/>
                        <strong style="margin: 20px 0px 0px 10px">My Post</strong></p>
                </div>
            </div>

            <div class="grid-sidebar">
                <div class="icon-sidebar-align" @click="mostRecent">
                    <img src="@/assets/clock.png" alt="" height="26.25px" width="26.25px" />
                </div>

                <div>
                    <p style="margin-top: 4px"> <input class="uk-radio" name="group1" type="radio" value="Recent" v-model="recent"/>
                        <strong style="margin: 20px 0px 0px 10px">Most Recent</strong></p>
                </div>
            </div>









            <button  style="background: #800080 !important;" class="button-twittear">
                <strong>Twittear</strong>
            </button>

            <div class="box-user">
                <div class="grid-user">
                    <pro></pro>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "Navigation",
        data() {
            return {
                cat: "",
                recent:"",
                chosen: "",
                mostComments:"",
                mostLikes:"",
                user: firebase.auth().currentUser.uid,
                mine:null
            };
        },
        computed: {
            Cats() {
                return this.$store.state.categories;
            }
        },
        methods: {
            press() {
                if (this.cat) {
                    db.collection("category").doc(this.user).delete()
                    db.collection("category").doc(this.user)
                        .set({
                            category: this.cat
                        }).then(() => {
                        db.collection("category").doc(this.user)
                        this.$router.push({name: "GMap", params: {id: this.chosen}});
                        window.location.reload()
                    })
                }
            },

            mostRecent() {
                if (this.recent) {
                    this.$router.push({name: "GMap", params: {id: this.recent}})
                    window.location.reload()
                }
            },
            myMemes() {
                if (this.mine) {
                    this.$router.push({name: "GMap", params: {id: this.mine}})
                    window.location.reload()
                }
            },
            Comments() {
                if (this.mostComments) {
                    this.$router.push({name: "GMap", params: {id: this.mostComments}})
                    window.location.reload()
                }
            },
            Likes() {
                if (this.mostLikes) {
                    this.$router.push({name: "GMap", params: {id: this.mostLikes}})
                    window.location.reload()
                }
            },

        },
        created() {
            db.collection("category").onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        this.chosen = change.doc.data().category;
                    }
                });
            });
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


    /* SIDEBAR */
    .wrapper-left {
        display: flex;
        position: relative;
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
    .grid-sidebar {
        display: grid;
        grid-template-columns: 20% 80%;
        margin-bottom: 20px;
    }
    .grid-sidebar:hover {
        color: #1da1f2;
        cursor: pointer;
    }
    .icon-sidebar-align {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg-active {
        color: #1da1f2;
        font-weight: bold;
    }

    /* BUTTON TWITTEAR */
    .button-twittear {
        display: inline-block;
        color: #ffffff;
        height: 49px;
        width: 230px;
        text-align: center;
        vertical-align: middle;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 15px;
        line-height: 1.5;
        border-radius: 28px 28px 28px 28px;
        -moz-border-radius: 28px 28px 28px 28px;
        -webkit-border-radius: 28px 28px 28px 28px;
        border: 0px solid #000000;
        cursor: pointer;
        margin-left: 5px;
        background: #1da1f2;
        font-weight: 900;
        transition: 0.3s;
    }
    .button-twittear:hover {
        transition: 0.3s;
        background-color: #2290d4;
    }

    .box-user {
        position: fixed;
        right: 0;
        bottom: 10px;
        left: 60px;
    }
    .grid-user {
        display: grid;
        grid-template-columns: 4% 12.5% 2%;
    }

    .img-user {
        height: 39px;
        width: 39px;
        border-radius: 50px;
    }
    .name {
        font-size: 15px;
    }
    .username {
        margin-top: 3px;
        font-size: 15px;
        color: #8c9aa5;
    }
    .mt-arrow {
        margin-top: 5px;
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




</style>
