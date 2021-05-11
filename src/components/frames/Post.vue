<template>
    <div class="border-right ">
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

       <div  v-for="image in images" :key="image.timestamp" class=" uk-card-default " v-if="image.privacy == 'Public'">
           <div >
              <h1 class="uk-text-center inner-shadow uk-text-capitalize" style="padding-top: 10px"></h1>
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
                          <h1>
                              {{ image.title }}
                          </h1>
                          <!-- Video URL-->
                          <router-link :to="'/start/' + image.Meme_id">
                               <div class="row mt-post-tweet" v-if="image.VideoIdOne  && image.VideoIdTwo ">
                                  <div class="col-sm-3 nopadding">
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <iframe style="border-radius: 10px" :src="'https://www.youtube-nocookie.com/embed/' + image.VideoIdOne + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="880" height="515" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>

                                      </div>
                                  </div>
                                  <div class="col-sm-3 nopadding">
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <iframe  style="border-radius: 10px;padding-left: 3px" :src="'https://www.youtube-nocookie.com/embed/' + image.VideoIdTwo + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="880" height="515" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
                                      </div>
                                  </div>
                              </div></router-link>

                           <!--                                 Local Video-->
                          <router-link :to="'/start/' + image.Meme_id" >
                              <div class="row mt-post-tweet"  v-if="image.VideoOne  && image.VideoTwo " >
                              <div class="column nopadding">
                                      <video   :src="image.VideoOne" loop muted playsinline  controls  uk-video="autoplay: inview"></video>

                              </div>
                              <div class="column nopadding">
                                  <video  :src="image.VideoTwo"  loop muted playsinline  controls  uk-video="autoplay: inview"></video>
                              </div>
                          </div></router-link>

                          <!--  Local Image        -->
                         <div>
                            <span>{{image.TitleOne}}</span>/
                            <span> {{image.TitleTwo}} </span>/
                            <span> {{image.TitleThree}} </span>/
                            <span> {{image.TitleFour}} </span>
                             <router-link :to="'/start/' + image.Meme_id" >
                                 <div class="row mt-post-tweet"  >
                                     <div class="column nopadding" v-if="image.image">
                                         <img   :src="image.image" alt="">
                                     </div>

                                     <div class="column nopadding" v-if="image.secondImage">
                                             <img  :src="image.secondImage" alt="">
                                     </div>
                                     <div class="column nopadding" v-if="image.ImageThree">
                                         <img  :src="image.ImageThree" alt="">
                                     </div>

                                     <div class="column nopadding"  v-if="image.ImageFour">
                                         <img  :src="image.ImageFour" alt="">
                                     </div>
                                 </div></router-link>

                         </div>


                          <div class="grid-reactions">
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-comment">

                                      <i class="fa fa-thumbs-up" style="color:deepskyblue"></i>
                                  </div>
                                  <div class="mt-counter">
                                      <p @click="like()">{{image.likes}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-retweet">
                                      <i class="fa fa-thumbs-down" style="color:red"></i>
                                  </div>
                                  <div class="mt-counter">
                                      <p @click="dislike">{{image.dislikes}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-like">
                                      <i class="fa fa-comments" style="color:forestgreen"></i>
                                  </div>

                                  <div class="mt-counter">
                                      <p>{{image.counter}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-comment">

                                      <i class="fa fa-share" style="color:brown" ></i>
                                  </div>
                                  <div class="mt-counter">
<!--                                      <p>5</p>-->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
       </div>

        <!--Private -->
        <div v-for="image in images" :key="image.timestamp" class="uk-section-muted " v-if="image.privacy == 'Only Me' && image.user_id == id">
           <div >
              <h1 class="uk-text-center inner-shadow uk-text-capitalize" style="padding-top: 10px"></h1>
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
                          <h1>
                              {{ image.title }}
                          </h1>
                          <!-- Video URL-->
                          <router-link :to="'/start/' + image.Meme_id">
                               <div class="row mt-post-tweet" v-if="image.VideoIdOne  && image.VideoIdTwo ">
                                  <div class="col-sm-3 nopadding">
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <iframe :src="'https://www.youtube-nocookie.com/embed/' + image.VideoIdOne + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="880" height="515" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>

                                      </div>
                                  </div>
                                  <div class="col-sm-3 nopadding">
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <iframe :src="'https://www.youtube-nocookie.com/embed/' + image.VideoIdTwo + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="880" height="515" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
                                      </div>
                                  </div>
                              </div></router-link>

<!--                                 Local Video-->
                          <router-link :to="'/start/' + image.Meme_id" >
                              <div class="row mt-post-tweet"  v-if="image.VideoOne  && image.VideoTwo " >
                              <div class="col-sm-3 nopadding">
                                  <div class="video-responsive video-responsive-16by9">
                                      <video s width="880" height="515" :src="image.VideoOne" loop muted playsinline  controls  uk-video="autoplay: inview"></video>


                                  </div>
                              </div>
                              <div class="col-sm-3 nopadding">
                                  <div class="video-responsive video-responsive-16by9">
                                      <video width="880" height="515" :src="image.VideoTwo"  loop muted playsinline  controls  uk-video="autoplay: inview"></video>

                                  </div>
                              </div>
                          </div></router-link>

                          <!--  Local Image        -->
                          <router-link :to="'/start/' + image.Meme_id">
                              <div class="row mt-post-tweet"  v-if="image.image  &&  image.secondImage " >
                              <div class="col-sm-3 nopadding">
                                  <div class="image-responsive image-responsive-16by9">
                                      <img   :src="image.image" alt="">

                                  </div>
                              </div>
                              <div class="col-sm-3 nopadding">
                                  <div class="image-responsive image-responsive-16by9">
                                      <img   :src="image.secondImage" alt="">

                                  </div>
                              </div>
                          </div></router-link>


                          <div class="grid-reactions">
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-comment">

                                      <i class="fa fa-thumbs-up" style="color:deepskyblue"></i>
                                  </div>
                                  <div class="mt-counter">
                                      <p>{{image.likes}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-retweet">
                                      <i class="fa fa-thumbs-down" style="color:red"></i>
                                  </div>
                                  <div class="mt-counter">
                                      <p>{{image.dislikes}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-like">
                                      <i class="fa fa-comments" style="color:forestgreen"></i>
                                  </div>

                                  <div class="mt-counter">
                                      <p>{{image.counter}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-comment">

                                      <i class="fa fa-share" style="color:brown" ></i>
                                  </div>
                                  <div class="mt-counter">
<!--                                      <p>5</p>-->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
       </div>

           <!-- Frens  -->
        <div v-for="image in images" :key="image.timestamp" class="uk-section-muted " v-if="image.privacy == 'Frens' ">
           <div >
              <h1 class="uk-text-center inner-shadow uk-text-capitalize" style="padding-top: 10px"></h1>
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
                          <h1>
                              {{ image.title }}
                          </h1>
                          <!-- Video URL-->
                          <router-link :to="'/start/' + image.Meme_id">
                               <div class="row mt-post-tweet" v-if="image.VideoIdOne  && image.VideoIdTwo ">
                                  <div class="col-sm-3 nopadding">
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <iframe :src="'https://www.youtube-nocookie.com/embed/' + image.VideoIdOne + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="880" height="515" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>

                                      </div>
                                  </div>
                                  <div class="col-sm-3 nopadding">
                                      <div class="embed-responsive embed-responsive-16by9">
                                          <iframe :src="'https://www.youtube-nocookie.com/embed/' + image.VideoIdTwo + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="880" height="515" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
                                      </div>
                                  </div>
                              </div></router-link>

<!--                                 Local Video-->
                          <router-link :to="'/start/' + image.Meme_id" >
                              <div class="row mt-post-tweet"  v-if="image.VideoOne  && image.VideoTwo " >
                              <div class="col-sm-3 nopadding">
                                  <div class="video-responsive video-responsive-16by9">
                                      <video s width="880" height="515" :src="image.VideoOne" loop muted playsinline  controls  uk-video="autoplay: inview"></video>


                                  </div>
                              </div>
                              <div class="col-sm-3 nopadding">
                                  <div class="video-responsive video-responsive-16by9">
                                      <video width="880" height="515" :src="image.VideoTwo"  loop muted playsinline  controls  uk-video="autoplay: inview"></video>

                                  </div>
                              </div>
                          </div></router-link>

                          <!--  Local Image        -->
                          <router-link :to="'/start/' + image.Meme_id">
                              <div class="row mt-post-tweet"  v-if="image.image  &&  image.secondImage " >
                              <div class="col-sm-3 nopadding">
                                  <div class="image-responsive image-responsive-16by9">
                                      <img   :src="image.image" alt="">

                                  </div>
                              </div>
                              <div class="col-sm-3 nopadding">
                                  <div class="image-responsive image-responsive-16by9">
                                      <img   :src="image.secondImage" alt="">

                                  </div>
                              </div>
                          </div></router-link>


                          <div class="grid-reactions">
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-comment">

                                      <i class="fa fa-thumbs-up" style="color:deepskyblue"></i>
                                  </div>
                                  <div class="mt-counter">
                                      <p>{{image.likes}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-retweet">
                                      <i class="fa fa-thumbs-down" style="color:red"></i>
                                  </div>
                                  <div class="mt-counter">
                                      <p>{{image.dislikes}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-like">
                                      <i class="fa fa-comments" style="color:forestgreen"></i>
                                  </div>

                                  <div class="mt-counter">
                                      <p>{{image.counter}}</p>
                                  </div>
                              </div>
                              <div class="grid-box-reaction">
                                  <div class="hover-reaction hover-reaction-comment">

                                      <i class="fa fa-share" style="color:brown" ></i>
                                  </div>
                                  <div class="mt-counter">
<!--                                      <p>5</p>-->
                                  </div>
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
    import {fb} from "@/firebase/init";

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
                frens:[],
                Friends:[],
            };
        },

        like(MemeID,likecount) {
            var user = firebase.auth().currentUser;
            if(this.ID){
                db.collection('likes').doc(this.ids + this.id).delete().then(()=>{
                    db.collection('Memes').doc(this.ids).update({
                        likes:this.likenum,
                        dislikes:this.dislikenum
                    })
                })
            }else{
                db.collection("likes")
                    .doc(this.ids + this.id )
                    .set({
                        time: Date.now(),
                        user_id: user.uid,
                        Meme_id: this.ids
                    });
                db.collection('dislikes').doc(this.ids + this.id).delete().then(()=>{
                    db.collection('Memes').doc(this.ids).update({
                        likes:this.likenum,
                        dislikes:this.dislikenum
                    })
                })
            }

        },
        dislike(MemeID,dislikecount) {
            var user = firebase.auth().currentUser;
            if(this.UID){
                db.collection('dislikes').doc(this.ids + this.id).delete().then(()=>{
                    db.collection('Memes').doc(this.ids).update({
                        dislikes:this.dislikenum,
                        likes:this.likenum,
                    })
                })
            }else{
                db.collection("dislikes")
                    .doc(this.ids + this.id)
                    .set({
                        time: Date.now(),
                        user_id: user.uid,
                        Meme_id: this.ids
                    });
                db.collection('likes').doc(this.ids + this.id).delete().then(()=>{
                    db.collection('Memes').doc(this.ids).update({
                        dislikes:this.dislikenum,
                        likes:this.likenum,
                    })
                })
            }
        },


        firestore() {
            return {
                frens: fb.collection('friendships'),
                Friends: fb.collection('friendships')
            }
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



            this.messages()
        }
    };
</script>

<style scoped>
    .mt-post-tweet img{
        border-radius: 10px;
        /*height: 100px !important;*/
    }.mt-post-tweet video{
        border-radius: 10px;
        height: 100px !important;
    }
    * {
        box-sizing: border-box;
    }

    .column {
        float: left;
        width: 24%;
        padding: 3px;
    }

    /* Clearfix (clear floats) */
    .row::after {
        content: "";
        clear: both;
        display: table;
    }








 i{
     margin-top: 8px;
 }
    /*.nopadding {*/
    /*    padding: 2px !important;*/
    /*    margin: 0 !important;*/
    /*    outline: 2px solid #333;*/
    /*    background: #333;*/
    /*    border-radius: 10px;*/
    /*}*/
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
        /*background-color: #f8f8f8;*/
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


    .mt-counter{
        margin-top: 5px;
    }

    h1 {
        font-size: 20px;
        font-family: $font-serif;
        font-weight: 900;
    }



</style>

