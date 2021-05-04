<template>
  <div class=" " style="">


    <nav class="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
     <img class="navbar-brand" src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png" id="logo_custom" width="10%"  alt="logo">
      <button class="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse " id="collapsibleNavbar">
        <ul class="navbar-nav m-auto " >

          <li class="nav-item">
            <a class="nav-link" href="#"><notification></notification> </a>
          </li>


            <li class="nav-item">
            <a class="nav-link" href="#"><requests></requests></a>
          </li>


            <li class="nav-item">
            <a class="nav-link" href="#">
                <img src="@/assets/friend.png" alt="" height="26.25px" width="26.25px" />
            </a>
          </li>
 <li class="nav-item" style="margin-left: 70px">
            <a class="nav-link" href="#">
                <img  src="https://i.ibb.co/b2zRPbZ/email.png" alt="" height="26.25px" width="26.25px" />
            </a>
          </li>

            <li class="nav-item" style="margin-left: 70px">
            <a class="nav-link" href="#">
                <img  src="https://i.ibb.co/znTXjv6/perfil.png" alt="" height="26.25px" width="26.25px" />
            </a>
          </li>






<!--          <li v-if="user" class="nav-item">-->
<!--            <a   @click="logout" class="nav-link" href="#"><b class="glyphicon glyphicon-log-out"></b> Logout </a>-->
<!--          </li>-->

<!--          <li v-if="!user" class="nav-item">-->
<!--            <router-link :to="{ name: 'login' }"  class="nav-link" href="#"><b class="glyphicon glyphicon-log-in"></b> login </router-link>-->
<!--          </li>-->

<!--          <li v-if="!user" class="nav-item">-->
<!--            <router-link to="/signup"  class="nav-link" href="#"><b class="glyphicon glyphicon-log-in"></b> Signup </router-link>-->
<!--          </li>-->



        </ul>
        <form class="form-inline ml-auto">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn  my-2 my-sm-0" style="border: 1px solid #800080;color:#800080" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";

export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      user: null,
      password: "",
      alias: null
    };
  },
  computed: {},
  methods: {
    logout() {
      this.$router.push({name:'login'});
      firebase
        .auth()
        .signOut()

    },
    home(){
      this.$router.push({name:'GMap',params:{id:'Animated'}})
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = user;
      }
    });
    if (this.user) {
      db.collection("Profile")
        .where("id", "==", this.user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.alias = doc.data().alias;
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>

<style scoped>
    nav{
        border-bottom:  0.5px solid #e6ecf0;
    }
  .custom-navbar{background-color: #fff;}
  .nav-link{color: darkgray!important;}
  .custom-toggler.navbar-toggler {border-color: rgb(247,32,78);}
  .custom-toggler .navbar-toggler-icon {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(247,32,78, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");}
  .custom-toggler .navbar-toggler-icon{width: 18px!important;}
  .custom-toggler:hover{border-color: rgb(255,255,255);}
  .navbar-toggler-icon:hover{background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");}#logo_custom{margin-top: -6px;}
  @media only screen and (max-width: 760px) { #logo_custom{width: 40%;}}













  /*    .header-holder.tt-logo-center {*/
/*        background-image: linear-gradient(to bottom, #fed100, #5F206E  84%);*/
/*        -pie-background: linear-gradient(to bottom, #fed100, #5F206E  84%);*/
/*      !*background-color: #5F206E;*!*/
/*      border-bottom: 1px solid #29487d;*/
/*      opacity: 0.9;*/
/*    }*/
/*.test {*/
/*  margin-top: 0px;*/
/*  background-color: #0a2b4e;*/
/*  border-bottom: 1px solid orangered;*/
/*}*/
/*.me {*/
/*  background: #0a2b4e;*/
/*}*/
/*h3 {*/
/*  padding-left: 500px;*/
/*  color: white;*/
/*}*/
/*i {*/
/*  !*margin-right: 15px;*!*/
/*  font-size: 1.2em;*/
/*  color: white;*/
/*}*/
/*.right {*/
/*  padding-right: 0px;*/
/*}*/
/*nav {*/
/*  width: 100%;*/
/*}*/
/*  h1{font-size:2.2em}*/
/*  .small i{*/
/*    color:green;*/
/*  }*/
/*    .small span{*/
/*    padding-left: 10px;*/
/*  }*/
</style>
