<template>
    <div class="grid-sidebar">
        <div class="icon-sidebar-align">
            <img
                    src="@/assets/globe.png"
                    alt=""
                    height="96.25px"
                    width="96.25px"
            /><span style="position:relative;top:-15px;left:-10px;margin-top: 5px;background-color: #800080" class="uk-badge">{{Friends.length}}</span>
        </div>



        <div uk-dropdown="mode: click" v-if="Friends.length != 0" style="width: 400px;border-radius: 20px">


            <div v-for="requests in Friends" class="grid-share">
                <div>
                    <img   :src="requests.user_requestedImage" alt="" class="img-share"/>
                </div>
                <div>
                    <router-link :to="'/profile/' + requests.myAlias  "> <p><strong>{{ requests.myAlias}}</strong></p>
                        <p class="username">{{msg}}</p></router-link>
                </div>
                <div>
                    <button  @click="checked(requests.request_id)" class="button-signup fondo-color-signup">
                        <strong>accept</strong>
                    </button>
                </div>
            </div>
        </div>

    </div>






</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "notification",
  data() {
    return {
      msg:'accepted you fren request',
      Friends: [],
      id: firebase.auth().currentUser.uid,
        images:'worlds.svg'
    };
  },
    firestore() {
        return {
            Friends: db.collection('friendships')
        }
    },
  methods: {
      checked(id) {
          db.collection("friendships")
              .doc(id)
              .update({
                  check:1

              })

    }
  },
  created() {
      this.$binding("Friends",  db.collection("friendships")
          .where("requester", "==", this.id)
          .where("status", "==", 1).where("check", "==", null))
          .then((ford) => {
              this.Friends === ford // => __ob__: Observer
          }).catch(err => {
          console.error(err)
      })


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

    .username {
        margin-top: 3px;
        font-size: 15px;
        color: #8c9aa5;
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


    .img-share{
        height: 49px;
        width: 49px;
        border-radius: 50px;
    }

    /* BUTTON SIGNUP */
    .button-signup {
        display: inline-block;
        font-weight: 400;
        color: #1DA1F2;
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
        border: 1px solid #1DA1F2;
        cursor: pointer;
        background-color: transparent;
    }
</style>
