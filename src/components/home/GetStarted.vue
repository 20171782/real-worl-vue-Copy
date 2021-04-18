<template>
  <div>
    <navbar></navbar>
     <div v-if="loading"> <loader></loader></div>
    <div class="test uk-section uk-section-muted" >


      <h1 class="uk-text-center inner-shadow uk-text-capitalize">{{ gallery[0].title }}</h1>
      <div class="row p-5" v-for="gal in gallery">
        <div class="col" >

          <!-- Video URl  -->
          <div  v-if="gallery[0].VideoIdOne  && gallery[0].VideoIdTwo " class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div  >
              <p class="uk-text-center " style=" font-family: font-serif; font-weight: 200;font-size: 20px;"> {{gal.TitleOne}}</p>
              <iframe :src="'https://www.youtube-nocookie.com/embed/' + gallery[0].VideoIdOne + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="1920" height="1080" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
              <span class="uk-badge" href="#" v-if="ID" style="color: white;background: #5F206E" @click="pickfirst(gal.VideoIdOne,gal.Meme_id)">
                <i class="fa fa-check" style="font-size:24px"></i>
                <span v-if="PickedNum">{{ PickedNum }} You chose {{gal.TitleOne}}</span></span>
              <span class="uk-badge" v-else @click="pickfirst(gal.VideoIdOne,gal.Meme_id)"><i class="fa fa-check" style="font-size:24px"></i>
                <span v-if="PickedNum">{{ PickedNum }}</span></span>
            </div>
            <div>
              <p class="uk-text-center " style=" font-family: font-serif; font-weight: 200;font-size: 20px;"> {{gal.TitleTwo}}</p>
              <iframe :src="'https://www.youtube-nocookie.com/embed/' + gallery[0].VideoIdTwo + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1'" width="1920" height="1080" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true"></iframe>
              <span class="uk-badge" href="#" v-if="UID" style="color: white;background: #5F206E" @click="pick2(gal.VideoIdTwo,gal.Meme_id)"
              ><i class="fa fa-check" style="font-size:24px"></i
              ><span v-if="Picked2likenum">{{ Picked2likenum }} You chose {{gal.TitleTwo}}</span></span
              >
              <span class="uk-badge" v-else @click="pick2(gal.VideoIdTwo,gal.Meme_id)"
              ><i class="fa fa-check" style="font-size:24px"></i
              ><span v-if="Picked2likenum">{{ Picked2likenum }}</span></span
              >
            </div>
          </div>


        <!-- Local Image -->
          <div  v-if="gallery[0].image  && gallery[0].secondImage "  class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div  >
              <p class="uk-text-center " style=" font-family: font-serif; font-weight: 200;font-size: 20px;"> {{gal.TitleOne}}</p>
              <img :src="gallery[0].image" alt="">
              <span class="uk-badge" href="#" v-if="ID" style="color: white;background: #5F206E" @click="pickfirst">
                <i class="fa fa-check" style="font-size:24px"></i>
                <span v-if="PickedNum">{{ PickedNum }} You chose {{gal.TitleOne}}</span></span>
              <span class="uk-badge" v-else @click="pickfirst(gal.image,gal.Meme_id)"><i class="fa fa-check" style="font-size:24px"></i>
                <span v-if="PickedNum">{{ PickedNum }}</span></span>
            </div>
            <div>
              <p class="uk-text-center " style=" font-family: font-serif; font-weight: 200;font-size: 20px;"> {{gal.TitleTwo}}</p>
              <img :src="gallery[0].secondImage" alt="">
              <span class="uk-badge" href="#" v-if="UID" style="color: white;background: #5F206E" @click="pick2"
              ><i class="fa fa-check" style="font-size:24px"></i
              ><span v-if="Picked2likenum">{{ Picked2likenum }} You chose {{gal.TitleTwo}}</span></span
              >
              <span class="uk-badge" v-else @click="pick2"
              ><i class="fa fa-check" style="font-size:24px"></i
              ><span v-if="Picked2likenum">{{ Picked2likenum }}</span></span
              >
            </div>
          </div>


          <!--  Text    -->
          <div  v-if="gallery[0].ItemOne  && gallery[0].ItemTwo "  class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div  >
              <div class="container">

                <div class="panel panel-default">
                  <div class="panel-body"> <p class="uk-text-center para" style=" font-size: 36px !important; margin: 16px 0;font-family: $font-serif;font-weight: 900;"> {{gal.ItemOne}}</p></div>
                </div>
              </div>



              <img :src="gallery[0].ItemOne" alt="">
              <span class="uk-badge" href="#" v-if="ID" style="color: white;background: #5F206E" @click="pickfirst(gal.ItemOne,gal.Meme_id)">
                <i class="fa fa-check" style="font-size:24px"></i>
                <span v-if="PickedNum">{{ PickedNum }} You chose {{gal.ItemOne}}</span></span>
              <span class="uk-badge" v-else @click="pickfirst(gal.ItemOne,gal.Meme_id)"><i class="fa fa-check" style="font-size:24px"></i>
                <span v-if="PickedNum">{{ PickedNum }}</span></span>
            </div>
            <div>
              <div class="container">
                <div class="panel panel-default">
                  <div class="panel-body"> <p class="uk-text-center para" style=" font-size: 36px !important; margin: 16px 0;font-family: $font-serif;font-weight: 900;"> {{gal.ItemTwo}}</p></div>
                </div>
              </div>



              <img :src="gallery[0].ItemTwo" alt="">
              <span class="uk-badge" href="#" v-if="UID" style="color: white;background: #5F206E" @click="pick2"
              ><i class="fa fa-check" style="font-size:24px"></i
              ><span v-if="Picked2likenum">{{ Picked2likenum }} You chose {{gal.ItemTwo}}</span></span
              >
              <span class="uk-badge" v-else @click="pick2"
              ><i class="fa fa-check" style="font-size:24px"></i
              ><span v-if="Picked2likenum">{{ Picked2likenum }}</span></span
              >
            </div>
          </div>





          <!--  Display like button-->
          <div style="float: right;padding-right: 15px" class="uk-margin-medium-top">
            <likes :ids="ids"></likes>
          </div>

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
          <Connect></Connect>
          <p v-if="comment">
            {{ comments.length }} <span style="font-size: 20px">Comment</span>
          </p>
          <p v-else style="font-size: 20px">
            {{ comments.length }}
            <span style="font-size: 20px;color: blue">Comments</span>
          </p>
          <chat :ids="ids" :Counter="Counter"></chat>
        </div>


        <div class="col-md-4">
          <sidegal :ids="ids"></sidegal>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
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
.me img {
  padding-top: 27px;

  max-height: 100%;
  max-width: 100%;
  height: 500px;
  width: 1500px !important;
}
.test {

}
.uk-width-auto img {
  width: 50px;
  height: 50px;
}

.inner-shadow {
@include text-shadow(
1px 2px 4px lighten(, 45%),
0px 0px 0px darken( 100%),
0px 0px 2px lighten( 80%)
);
}
h1 {
  font-size: 36px;
  margin: 16px 0;
  font-family: $font-serif;
  font-weight: 900;
}

.header-holder.tt-logo-center {
  background-image: linear-gradient(to bottom, #fed100, #5F206E  84%);
  -pie-background: linear-gradient(to bottom, #fed100, #5F206E  84%);
  /*background-color: #5F206E;*/
  border-bottom: 1px solid #29487d;
  opacity: 0.9;
}

.panel{
  height:250px
}
</style>
