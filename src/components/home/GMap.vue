<template>
  <div >
    <div>
      <navbar></navbar>
    </div>

    <div>
      <div class="uk-margin-large-top ">
        <div class=" ">
          <Navigation></Navigation>
          <div class="grid-posts">
            <Post></Post>
<!--            <cor></cor>-->
            <Connections></Connections>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import cor from "@/components/frames/corousel";
import but from "@/components/frames/buttons";
import about from "@/components/pages/about";

export default {
  name: "GMap",
  props: ["alias"],
  components: {
    cor,
    but,
    about
  },
  mounted() {
    // UIkit.offcanvas('#offcanvas-usage').show()
    // window.location.reload()
  },
  data() {
    return {
      image:'user.svg'
    };
  },
  created() {
    this.$store.dispatch("IDs");
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
  .body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
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

  /* INPUT SEARCH*/

  .grid-posts {
    display: grid;
    grid-template-columns: 64.8% auto;
    background-color: rgb(255, 255, 255);
    margin-left: 7%;
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
  .mt-login {
    margin-top: 0.25rem !important;
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

  .box-search {
    width: 100%;
    background-color: white;
  }

  /* BOX OF INPUT */

  .box-fixed {
    position: fixed;
    width: 33%;
    left: 25.4%;
    top: 40px;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
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
