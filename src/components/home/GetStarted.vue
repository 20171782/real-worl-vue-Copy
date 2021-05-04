<template>
  <div>
    <div>
      <navbar></navbar>
    </div>
    <body>
    <section id="blog-section " style="margin-top: 90px">
      <div class="container">
        <div class="row">

          <h1 class="uk-text-center inner-shadow uk-text-capitalize">{{ gallery[0].title }}</h1>
          <div class="col-lg-8" v-for="gal in gallery">
            <div class="row" v-if="gallery[0].VideoIdOne  && gallery[0].VideoIdTwo " >

              <div class="col-lg-6 col-md-6">
                <aside>
                  <iframe :src="'https://www.youtube-nocookie.com/embed/' + gallery[0].VideoIdOne + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="1920" height="1080" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>

                  <div class="content-footer">
                    <img class="user-small-img" src="https://lh3.googleusercontent.com/-uwagl9sPHag/WM7WQa00ynI/AAAAAAAADtA/hio87ZnTpakcchDXNrKc_wlkHEcpH6vMwCJoC/w140-h148-p-rw/profile-pic.jpg">
                    <span style="font-size: 16px;color: #fff;">{{gal.TitleOne}}</span>
                    <span class="pull-right">

				<a v-if="ID" @click="pickfirst(gal.VideoIdOne,gal.Meme_id)" href="#" data-toggle="tooltip" data-placement="right" title="Loved">
                  {{ PickedNum }} <i style="color: yellow"  class="fa fa-heart"></i>
                  <span  v-if="PickedNum"> You chose {{gallery[0].TitleOne}}</span>
                </a>
                      <a v-else @click="pickfirst(gal.VideoIdOne,gal.Meme_id)" href="#" data-toggle="tooltip" data-placement="right" title="Loved">
                        <i  class="fa fa-heart"></i>
                        <span v-if="PickedNum">{{ PickedNum }}</span>
                      </a>
				</span>

                  </div>
                </aside>
              </div>

              <div class="col-lg-6 col-md-6">
                <aside>
                  <iframe :src="'https://www.youtube-nocookie.com/embed/' + gallery[0].VideoIdTwo + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="1920" height="1080" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>

                  <div class="content-footer">
                    <img class="user-small-img" src="https://lh3.googleusercontent.com/-uwagl9sPHag/WM7WQa00ynI/AAAAAAAADtA/hio87ZnTpakcchDXNrKc_wlkHEcpH6vMwCJoC/w140-h148-p-rw/profile-pic.jpg">
                    <span style="font-size: 16px;color: #fff;">{{gal.TitleTwo}}</span>
                    <span class="pull-right">

				       <a  v-if="UID"  @click="pick2(gal.VideoIdTwo,gal.Meme_id)" href="#" data-toggle="tooltip" data-placement="right" title="Loved">
                  {{ Picked2likenum }} <i style="color: yellow"  class="fa fa-heart"></i>
                  <span  v-if="Picked2likenum"> You chose {{gallery[0].TitleTwo}}</span>
                </a>
                      <a v-else @click="pick2(gal.VideoIdTwo,gal.Meme_id)" href="#" data-toggle="tooltip" data-placement="right" title="Loved">
                        <i  class="fa fa-heart"></i>
                        <span v-if="Picked2likenum">{{ Picked2likenum }}</span>
                      </a>
				</span>

                  </div>
                </aside>
              </div>
            </div>


            <!-- Like Button -->
            <div style="float: right;padding-right: 15px" class="uk-margin-medium-top">
              <likes :ids="ids"></likes>
            </div>

           <!-- User Who Posted   -->
            <hr />
            <div class="">
              <div class="uk-width-auto d-flex">
                <img
                        class="uk-border-circle"
                        width="40"
                        height="40"
                        :src="gal.Photo"
                />
                <div class="uk-width-expand ml-3">
                  <b
                  ><p class=" uk-margin-remove-bottom">{{ gal.name}}</p></b
                  >
                  <p
                          style="font-size: 0.7em"
                          class="uk-text-meta uk-margin-remove-top"
                  >
                    Published on
                    <time>{{gal.timestamp|formatDate}}</time>
                  </p>
                </div>
              </div>
            </div>

            <ul uk-accordion>
              <li >
                <a class="uk-accordion-title" href="#">Description</a>
                <div class="uk-accordion-content">
                  <p class=""> {{gal.description}}</p>
                </div>
              </li>

            </ul>


            <p class="uk-text-bold">My prediction was {{gal.prediction}}</p>

              <!--  Comment Length  -->
            <p v-if="comment">
              {{ comments.length }} <span style="font-size: 20px">Comment</span>
            </p>
            <p v-else style="font-size: 20px">
              {{ comments.length }}
              <span style="font-size: 20px;color: blue">Comments</span>
            </p>
            <chat :ids="ids" :Counter="Counter"></chat>
          </div>

              <!--  Side Videos -->
          <div class="col-md-4">
            <sidegal :ids="ids"></sidegal>
          </div>
          <!--           // RECENT POST===========-->



        </div>
      </div>

    </section>



    </body>
  </div>
</template>

<<script>
  import chat from "@/components/Chat";
  import { mapGetters } from "vuex";
  import db from "@/firebase/init";
  import firebase from "firebase";
  import {fb} from "@/firebase/init";
  export default {
    name: "GetStarted",
    components: {
      chat,


    },

    data() {
      return {
        id: firebase.auth().currentUser.uid,
        gallery: [],
        ids: this.$route.params.id,
        comments: [],
        Picked:[],
        Picked2:[],
        meme_id: null
      };
    },
    methods: {
      pickfirst(link, memeID) {
        var user = firebase.auth().currentUser;
        if(this.ID){
          db.collection('Picked').doc(this.ids + this.id).delete()
        }else{
          db.collection("Picked")
                  .doc(this.ids + this.id )
                  .set({
                    time: Date.now(),
                    user_id: user.uid,
                    Meme_id: this.ids,
                    Video:link,
                    image:link
                  });
          db.collection('Picked2').doc(this.ids + this.id).delete()

        }

      },
      pick2() {
        var user = firebase.auth().currentUser;
        if(this.UID){
          db.collection('Picked2').doc(this.ids + this.id).delete()
        }else{
          db.collection("Picked2")
                  .doc(this.ids + this.id)
                  .set({
                    time: Date.now(),
                    user_id: user.uid,
                    Meme_id: this.ids,
                  });
          db.collection('Picked').doc(this.ids + this.id).delete()
        }


      }

    },
    firestore(){
      return {
        Picked: db.collection('Picked'),
        Picked2: db.collection('Picked2'),

      }
    },
    computed: {
      ...mapGetters(["loading"]),
      PickedNum() {
        return this.Picked.length;
      },
      Picked2likenum() {
        return this.Picked2.length;
      },
      UID() {
        return this.Picked2.find(map => map.user_id === this.id);
      },
      comment() {
        return this.comments.length == 1;
      },
      ID() {

        return this.Picked.find(map => map.user_id === this.id);
      },
      Counter(){
        return this.comments.length
      }
    },
    created() {
      this.$store.dispatch('SingleMemes',this.gallery)
      this.$store.dispatch('readMessages',this.comments)
    },
    mounted() {
      this.$binding("Picked", fb.collection("Picked").where('Meme_id', '==', this.ids))
              .then((ford) => {
                this.Picked === ford // => __ob__: Observer
              }).catch(err => {
        console.error(err)
      })
      this.$binding("Picked2", fb.collection("Picked2").where('Meme_id', '==', this.ids))
              .then((ford) => {
                this.Picked2 === ford // => __ob__: Observer
              }).catch(err => {
        console.error(err)
      })

    }
  };
</script>

<style scoped>

  h1 {
    font-size: 36px;
    margin: 16px 0;
    font-family: $font-serif;
    font-weight: 900;
  }
  body{background-color:#ECF0F1;}


  .navbar-brand>img{ width:80%;}

  .navbar-inverse .navbar-nav > li > a {
    color: #800080;
  }
  .navbar-inverse .navbar-nav > li > a:hover {
    background-color: #800080;
  }



  #blog-section{margin-top:40px;margin-bottom:80px;}
  .content-title{padding:5px;background-color:#fff;}
  .content-title h3 a{color:#34495E;text-decoration:none; transition: 0.5s;}
  .content-title h3 a:hover{color:#F39C12; }
  .content-footer{background-color:#800080;padding:10px;position: relative;}
  .content-footer span a {
    color: #fff;
    display: inline-block;
    padding: 6px 5px;
    text-decoration: none;
    transition: 0.5s;
  }
  .content-footer span a:hover{
    color:#F39C12;
  }
  aside{
    margin-top: 30px;
    -webkit-box-shadow: 1px 4px 16px 3px rgba(199,197,199,1);
    -moz-box-shadow: 1px 4px 16px 3px rgba(199,197,199,1);
    box-shadow: 1px 4px 16px 3px rgba(199,197,199,1);}
  aside .content-footer>img {
    width: 33px;
    height: 33px;
    border-radius: 100%;
    margin-right: 10px;
    border: 2px solid #fff;
  }

  .user-ditels {
    width: 300px;
    top: -100px;
    height: 100px;
    padding-bottom: 99px;
    position: absolute;
    border: solid 2px #fff;
    background-color: #34495E;
    right: 25px;
    display: none;
    z-index: 1;
  }

  @media (max-width:768px){
    .user-ditels {
      right: 5px;
    }

  }
  .user-small-img{cursor: pointer;}

  .content-footer:hover .user-ditels  {
    display: block;
  }


  .content-footer .user-ditels .user-img{width: 100px;height:100px;float: left;}
  .user-full-ditels h3 {
    color: #fff;
    display: block;
    margin: 0px;
    padding-top: 10px;
    padding-right: 28px;
    text-align: right;
  }
  .user-full-ditels p{
    color: #fff;
    display: block;
    margin: 0px;
    padding-right: 20px;
    padding-top: 5px;
    text-align: right;}
  .social-icon {
    background-color: #fff;
    margin-top: 10px;
    padding-right: 20px;
    text-align: right;
  }
  .social-icon>a{font-size:20px;text-decoration:none;padding: 5px;}
  .social-icon a:nth-of-type(1){color:#4E71A8;}
  .social-icon a:nth-of-type(2){color:#3FA1DA;}
  .social-icon a:nth-of-type(3){color:#E3411F;}
  .social-icon a:nth-of-type(4){color:#CA3737;}
  .social-icon a:nth-of-type(5){color:#3A3A3A;}


  /*recent-post-col////////////////////*/
  .widget-sidebar {
    background-color: #fff;
    padding: 20px;
    margin-top: 30px;
  }

  .title-widget-sidebar {
    font-size: 14pt;
    border-bottom: 2px solid #e5ebef;
    margin-bottom: 15px;
    padding-bottom: 10px;
    margin-top: 0px;
  }

  .title-widget-sidebar:after {
    border-bottom: 2px solid #f1c40f;
    width: 150px;
    display: block;
    position: absolute;
    content: '';
    padding-bottom: 10px;
  }

  .recent-post{width: 100%;height: 80px;list-style-type: none;}
  .post-img img {
    width: 100px;
    height: 70px;
    float: left;
    margin-right: 15px;
    border: 5px solid #800080;
    transition: 0.5s;
  }

  .recent-post a {text-decoration: none;color:#34495E;transition: 0.5s;}
  .post-img, .recent-post a:hover{color:#F39C12;}
  .post-img img:hover{border: 5px solid #F39C12;}

  /*===============ARCHIVES////////////////////////////*/



  button.accordion {
    background-color: #800080;
    color: #fff;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }

  button.accordion.active, button.accordion:hover {
    background-color: #F39C12;color: #fff;
  }

  button.accordion:after {
    content: '\002B';
    color: #fff;
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }

  button.accordion.active:after {
    content: "\2212";
  }

  .panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }


  /*categories//////////////////////*/

  .categories-btn{
    background-color: #F39C12;
    margin-top:30px;
    color: #fff;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;

  }
  .categories-btn:after {
    content: '\25BA';
    color: #fff;
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }
  .categories-btn:hover {
    background-color: #16A085;color: #fff;
  }

  .form-control{border-radius: 0px;}

  .btn-warning {
    border-radius: 0px;
    background-color: #F39C12;
    margin-top: 15px;
  }
  .input-group-addon{border-radius: 0px;}



</style>
