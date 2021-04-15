<template>
  <div>
    <navbar></navbar>
     <div v-if="loading"> <loader></loader></div>
    <div class="test uk-section uk-section-muted" >


      <h1 class="uk-text-center inner-shadow uk-text-capitalize">{{ gallery[0].title }}</h1>
      <div class="row p-5" v-for="gal in gallery">
        <div class="col">
          <div  class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div>
              <p class="uk-text-center " style=" font-family: font-serif; font-weight: 200;font-size: 20px;"> {{gal.TitleOne}}</p>
              <iframe width="642" height="361" :src="'https://www.youtube.com/embed/' +  gallery[0].VideoIdOne"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

            </div>
            <div>
              <p class="uk-text-center " style=" font-family: font-serif; font-weight: 200;font-size: 20px;"> {{gal.TitleTwo}}</p>
              <iframe width="642" height="361" :src="'https://www.youtube.com/embed/' +  gallery[0].VideoIdTwo"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

            </div>
          </div>

          <!--  Display like button-->
          <div style="float: right;padding-right: 15px" class="uk-margin-medium-top">
            <likes :ids="ids"></likes>
          </div>
          <p uk-margin>
            <button class="uk-button header-holder tt-logo-center"style="background-color: #5F206E;color: white;border-radius:5px"> Connect </button>
          </p>


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
                <p class=""> {{gal.description}}. Web designing full course in urdu step by step ! Lec 85 Html input type url ! Display a url input field</p>
              </div>
            </li>

          </ul>


          <p class="uk-text-bold">My prediction was {{gal.prediction}}</p>
          <hr />
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
export default {
  name: "GetStarted",
  components: {
    chat,


  },

  data() {
    return {
      gallery: [],
      ids: this.$route.params.id,
      comments: [],
      test:'BVuUIdeba_k',

      meme_id: null
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["loading"]),
    comment() {
      return this.comments.length == 1;
    },
    Counter(){
      return this.comments.length
    }
  },
  created() {
    this.$store.dispatch('SingleMemes',this.gallery)
    this.$store.dispatch('readMessages',this.comments)
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
</style>
