import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'
import home from '@/views/layouts/foot'
import VueChatScroll from 'vue-chat-scroll'
import profiles from '@/components/User/viewProfile'
import navbar from '@/views/layouts/NavBar'
import foot from '@/views/layouts/foot'
import photo from '@/components/frames/Photo'
import loader from '@/components/frames/loader'
import sidebar from '@/components/frames/sidebar'
import sidegal from '@/components/frames/sidegallery'
import bars from '@/components/frames/pushbar'
import banner from '@/views/layouts/banner'
import upload from '@/views/UploadImages'
import imageInfo from '@/components/frames/imageInfo'
import profileComment from '@/components/frames/profileComment'
import pro from '@/components/frames/pro'
import topMemes from '@/components/topMemes/topMemes'
import news from '@/components/new'
import request from '@/components/requests'
import frens from '@/components/frens'
import memeGenerator from '@/components/testing'
import Gif from '@/components/Gif'
import notification from '@/components/notification'
import userMemes from '@/views/userMemes'
import likes from "@/components/frames/likes";
import timestamp from "./components/timestamp";
import update from '@/components/User/UpdateProfile'
import TermsCondition from '@/components/auth/TermsCondition'
import  navi from '@/components/MemeGenerator/Navi.vue'
import  LocalImage from '@/components/UploadType/Image.vue'
import  URL from '@/components/UploadType/URL.vue'
import  Video from '@/components/UploadType/Video.vue'

import  Connect from '@/components/Connect.vue'
import  Testing from '@/components//UploadType/Testing.vue'


import  Navigation from '@/components/frames/Navigation.vue'
import  Post from '@/components/frames/Post.vue'
import  Connections from '@/components/frames/Connections.vue'
import  smallProfile from '@/components/frames/smallProfile.vue'

import VueFirestore from 'vue-firestore'


Vue.use(VueFirestore)


Vue.filter('convert',(value)=>{
  return value.toUpperCase()
})

Vue.filter('smallOne',(value)=>{
  return value.slice(0,13)
})

import moments from "moment";

Vue.filter('formatDate', function(value) {
  if (value) {
    return moments((value)).format('lll')
  }
})

Vue.use(VueChatScroll)


Vue.component('home',home)
Vue.component('profiles',profiles)
Vue.component('navbar',navbar)
Vue.component('foot',foot)
Vue.component('photo',photo)
Vue.component('sidebar',sidebar)
Vue.component('sidegal',sidegal)
Vue.component('pushbar',bars )
Vue.component('banner',banner)
Vue.component('upload',upload)
Vue.component('imageInfo',imageInfo)
Vue.component('pro',pro)
Vue.component('topMemes',topMemes)
Vue.component('new',news)
Vue.component('loader',loader)
Vue.component('requests',request)
Vue.component('frens',frens)
Vue.component('notification',notification)
Vue.component('userMemes',userMemes)
Vue.component('likes',likes)
Vue.component('profileComment',profileComment)
Vue.component('memeGenerator',memeGenerator)
Vue.component('Gif',Gif)
Vue.component('timestamp',timestamp)
Vue.component('Grid',Grid)
Vue.component('update',update)
Vue.component('TermsCondition',TermsCondition)
Vue.component('top', navi)
Vue.component('LocalImage', LocalImage)
Vue.component('URL', URL)
Vue.component('Connect', Connect)
Vue.component('Video', Video)
Vue.component('Testing', Testing)
Vue.component('Navigation', Navigation)
Vue.component('Post', Post)
Vue.component('Connections', Connections)
Vue.component('smallProfile', smallProfile)

import Grid from "./components/Grid";



import VueParticles from 'vue-particles'
Vue.use(VueParticles)


import { sync } from 'vuex-router-sync'
sync(store, router, { moduleName: 'RouteModule' } )
let app = null
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    new Vue({
      router,
      store,
      render: function(h) {
        return h(App);
      }
    }).$mount("#app");

  }
})



