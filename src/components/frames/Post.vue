<template>
    <div class="border-right ">
       <div v-for="image in images" :key="image.timestamp">
           <div class="grid-toolbar-center uk-margin-top">
               <div class="center-input-search ">
                   <div class="input-group-login" id="shadow">
                       <div class="input-group-prepend-login">
                <span class="input-group-text fondo-icon" id="icon-search">
                  <img src="https://i.ibb.co/dmGyr55/search.png" alt="" height="19px" width="19px" />
                </span>
                       </div>
                       <input
                               type="text"
                               class="border-0-login form-control-login input-border-none"
                               placeholder="Buscar en Twitter"
                               id="search"
                               autocomplete="off"
                       />
                   </div>
               </div>
               <div class="mt-icon-settings">
                   <img src="https://i.ibb.co/W5T9ycN/settings.png" alt="" />
               </div>

           </div>
           <h1 class="uk-text-center inner-shadow uk-text-capitalize">{{ images[0].title }}</h1>

           <div class="box-tweet">
               <div class="grid-tweet">
                   <div>
                       <img
                               :src="image.Photo"
                               alt=""
                               class="img-user-tweet"
                       />
                   </div>

                   <div>
                       <p>
                           <strong>{{image.alias}}</strong>
                           <span class="username-twitter">@</span>
                           <span class="username-twitter">{{ image.timestamp|formatDate }}</span>
                       </p>
                       <p>
                         {{image.description}}
                       </p>

                       <p class="mt-post-tweet">
                           <router-link :to="'/start/' + image.Meme_id"
                           ><img
                                   :src="image.thumb"
                                   alt=""
                                   class="img-post-tweet"
                           /></router-link>
                       </p>

                       <div class="grid-reactions">
                           <div class="grid-box-reaction">
                               <div class="hover-reaction hover-reaction-comment">
                                   <svg
                                           width="18.75px"
                                           height="18.75px"
                                           viewBox="0 0 24 24"
                                           class="mt-icon-reaction"
                                   >
                                       <g>
                                           <path
                                                   d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                           ></path>
                                       </g>
                                   </svg>
                               </div>
                               <div class="mt-counter">
                                   <p>1</p>
                               </div>
                           </div>
                           <div class="grid-box-reaction">
                               <div class="hover-reaction hover-reaction-retweet">
                                   <svg
                                           width="18.75px"
                                           height="18.75px"
                                           viewBox="0 0 24 24"
                                           class="mt-icon-reaction"
                                   >
                                       <g>
                                           <path
                                                   d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                           ></path>
                                       </g>
                                   </svg>
                               </div>
                               <div class="mt-counter">
                                   <p>10</p>
                               </div>
                           </div>
                           <div class="grid-box-reaction">
                               <div class="hover-reaction hover-reaction-like">
                                   <svg
                                           width="18.75px"
                                           height="18.75px"
                                           viewBox="0 0 24 24"
                                           class="mt-icon-reaction"
                                   >
                                       <g>
                                           <path
                                                   d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                                           ></path>
                                       </g>
                                   </svg>
                               </div>
                               <div class="mt-counter">
                                   <p>300</p>
                               </div>
                           </div>
                           <div class="grid-box-reaction">
                               <div class="hover-reaction hover-reaction-comment">
                                   <svg
                                           width="18.75px"
                                           height="18.75px"
                                           viewBox="0 0 24 24"
                                           class="mt-icon-reaction"
                                   >
                                       <g>
                                           <path
                                                   d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                                           ></path>
                                           <path
                                                   d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                                           ></path>
                                       </g>
                                   </svg>
                               </div>
                               <div class="mt-counter">
                                   <p>5</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";
    import db from "@/firebase/init";

    export default {
        name: "Post",
        data() {
            return {
                images: [],
                cat: "",
                user: firebase.auth().currentUser.uid,
                chosen: this.$route.params.id,
                comments: [],
                likes:[],
                dislikes: [],
                id: firebase.auth().currentUser.uid,
            };
        },
        computed: {
            ...mapGetters(["loading"]),
            categories() {
                return this.$store.getters. loadedCategory;
            },
            // testing(){
            //   return this.images.slice().sort(function(a, b) {
            //     return b.timestamp - a.timestamp;
            //   });
            // }

        },

        methods: {
            messages(id) {
                this.comments = [];
                this.likes=[],
                    this.dislikes=[]
                db.collection("message")
                    .where("Meme_id", "==", id)
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.comments.push(change.doc.data());
                            }
                        });
                    });db.collection("likes")
                    .where("Meme_id", "==", id)
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.likes.push(change.doc.data());
                            }
                        });
                    });db.collection("dislikes")
                    .where("Meme_id", "==", id)
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.dislikes.push(change.doc.data());
                            }
                        });
                    });
            }
        },

        created() {

            let me =this.$route.params.id;
            var id = firebase.auth().currentUser.uid;
            if(me=='Recent'){
                db.collection("Memes").orderBy('timestamp','desc').limit(10)
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {

                                this.images.push(change.doc.data());
                            }
                        });

                    });
            } else if(me=='myMemes'){
                db.collection("Memes").where('user_id','==',id)
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.images.push(change.doc.data());
                            }
                        });

                    });
            } else if(me=='mostComments'){
                const TwoMonths = 1000 * 60 * 60 * 24 * 60
                var startTime= Date.now() - TwoMonths;
                const endTime = Date.now()
                db.collection('Memes').orderBy('counter','desc').startAt(startTime).limit(10)
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.images.push(change.doc.data());
                            }
                        });

                    });
            } else if(me=='mostLikes'){
                const TwoMonths = 1000 * 60 * 60 * 24 * 60
                var startTime= Date.now() - TwoMonths;
                const endTime = Date.now()
                db.collection('Memes').orderBy('likes','desc').startAt(startTime).limit(10)
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.images.push(change.doc.data());
                            }
                        });

                    });
            } else {
                db.collection("Memes").where('category', '==', me).orderBy('timestamp', 'desc')
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {

                                this.images.push(change.doc.data());
                            }
                        });

                    });
            }



            this.messages;
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


    .border-right {
        border-right: 0.5px solid #e6ecf0;
    }
    .center-input-search {
        margin-left: 32%;
        margin-top: 10px;
    }

    .input-group-login {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: stretch;
        align-items: stretch;
        width: 95%;
    }
    .input-group-prepend-login {
        margin-right: -1px;
    }
    .input-group-prepend-login {
        display: -ms-flexbox;
        display: flex;
    }

    .input-group-login > .custom-select:not(:first-child),
    .input-group-login > .form-control-login:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .input-group-login >     .custom-file,
    .input-group > .custom-select,
    .input-group-login > .form-control-login {
        position: relative;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 1%;
        min-width: 0;
        margin-bottom: 0;
    }

    .border-0-login {
        border: 0 !important;
    }
    .form-control-login {
        display: block;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #e6ecf0;
        border-radius: 10px;
        border: 0px solid #000000;
        height: 37px;
    }
    button,
    input {
        overflow: visible;
    }
    .input-group-text {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding: 0.375rem 0.75rem;
        height: 37px;
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #e6ecf0;
        border-radius: 10px 0px 0px 10px;
        -moz-border-radius: 10px 0px 0px 10px;
        -webkit-border-radius: 10px 0px 0px 10px;
    }

    .input-border-none {
        /* eliminates the border when the input is active */
        outline: none;
    }

    .fondo-icon {
        background: #e6ecf0;
    }



    .grid-toolbar-center {
        display: grid;
        grid-template-columns: 95% 10%;
    }

    .mt-icon-settings {
        margin-top: 15px;
    }

    /* POSTS OF TWITTER */

    .box-tweet {
        margin-top: 30px;
        margin-left: 27%;
        transition: 0.5s;
        cursor: pointer;
    }
    .box-tweet:hover {
        transition: 0.5s;
        background-color: #f8f8f8;
    }
    .img-user-tweet {
        height: 49px;
        width: 49px;
        border-radius: 50px;
    }

    .grid-tweet {
        display: grid;
        grid-template-columns: 10% 90%;
        margin-left: 15px;
        margin-right: 2px;
    }
    .username-twitter {
        color: #6a7b8a;
        font-size: 15px;
    }

    .img-post-tweet {
        height: 285.19px;
        width: 507px;
        border-radius: 10px;
    }

    .mt-post-tweet {
        margin-top: 10px;
    }

    /* TOOLBAR REACTIONS */
    .grid-reactions {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
    }
    .grid-box-reaction{
        display: grid;
        grid-template-columns: 30% 10%;
    }
    .hover-reaction{
        width: 35px;
        height: 35px;
        border-radius: 50px;
        text-align: center;
    }
    .hover-reaction-comment:hover {
        background-color: #bee4fb;
        fill: #1DA1F2;
    }
    .hover-reaction-retweet:hover {
        background-color: #fafbed;
        fill: green;
    }
    .hover-reaction-like:hover {
        background-color: rgb(255, 228, 228);
        fill: red;
    }

    .mt-icon-reaction{
        margin-top: 5px;
    }
    .mt-counter{
        margin-top: 5px;
    }

    h1 {
        font-size: 25px;
        margin: 26px 0px 0px 100px;
        font-family: $font-serif;
        font-weight: 900;
    }



</style>
