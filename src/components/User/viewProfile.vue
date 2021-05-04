<template>
    <div class="container "  style="margin-top: 50px">

        <main>
            <section class="bio" v-for="test in crabs">
                <div class="bio__img-block" v-if="test.image">
                    <a href=""
                    ><img
                            class="bio__img"
                            :src="test.image"
                            alt="profile picture"
                    /></a>
                </div>
                <div v-else>
                    <photo></photo>
                </div>
                <div class="bio__header">
                    <h1 class="bio__account">{{test.name}}</h1>
                    <span class="bio__verified"
                    ><i class="fa fa-check" aria-hidden="true"></i
                    ></span>
                    <button class="bio__follow">Follow</button>
                </div>
                <div class="bio__stats">
                    <span class="bio__posts stats"><strong>5,097</strong> posts</span>
                    <span class="bio_followers stats"
                    ><strong>165m</strong> followers</span
                    >
                    <span class="bio__following stats"
                    ><strong>37</strong> following</span
                    >
                </div>
                <div class="bio_blurb">
                    <h2 class="bio__name">General Information West</h2>
                    <p v-if="test.gender[0]=='male'"><i class="fa fa-male"></i> {{test.gender[0]}}</p>
                    <p v-if="test.gender[0]=='female'"><i class="fa fa-female"></i> {{test.gender[0]}}</p>
                    <p><i class="fa fa-user"></i>  {{test.name}}</p>
                    <p><i class="fa fa-hourglass-2"></i>  {{test.age}} years old</p>
                    <p><i class="fa fa-users"></i> {{test.stat}}</p>
                    <p><i class="fa fa-briefcase"></i> {{test.job}}</p>
                    <p><i class="fa fa-map"></i>{{test.address}}</p>
                </div>
            </section>
            <nav>
                <ul class="story">
                    <li>
                        <a href="">
                            <img
                                    src="https://www.fillmurray.com/77/77"
                                    alt="story with bill murray"
                            />
                            <h2>KKW FRAGRANCE</h2>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                    src="https://baconmockup.com/77/77"
                                    alt="story with slab of bacon"
                            />
                            <h2>SKIMS</h2>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img
                                    src="https://www.fillmurray.com/150/150"
                                    alt="story with random photo"
                            />
                            <h2>KKW BEAUTY</h2>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul class="mobile-stats">
                    <li class="mobile-stats__posts stats">
                        <a href=""><strong>5,097</strong><br />posts</a>
                    </li>
                    <li class="mobile-stats_followers stats">
                        <a href=""><strong>165M</strong><br />followers</a>
                    </li>
                    <li class="mobile-stats__following stats">
                        <a href=""><strong>37</strong><br />following</a>
                    </li>
                </ul>
            </nav>
            <section class="tabbed-pane">
                <nav>
                    <ul class="tabbed-pane__header uk-subnav" uk-switcher>
                        <li>
                            <a href="" class="tab-link selected"
                            ><i class="fa fa-table" aria-hidden="true"></i
                            ><span class="tab-link-text"> Posts</span></a
                            >
                        </li>
                        <li>
                            <a href="" class="tab-link"
                            ><i class="fa fa-television" aria-hidden="true"></i
                            ><span class="tab-link-text"> IGTV</span></a
                            >
                        </li>
                        <li>
                            <a href="" class="tab-link"
                            ><i class="fa fa-user" aria-hidden="true"></i
                            ><span class="tab-link-text"> Tagged</span></a
                            >
                        </li>
                    </ul>


                    <ul class="uk-switcher uk-margin">
                        <li><userMemes></userMemes></li>
                        <li><profileComment></profileComment></li>
                        <li>Bazinga!</li>
                    </ul>











                </nav>

            </section>
        </main>

    </div>








</template>

<script>
import update from '@/components/User/UpdateProfile'
import firebase from "firebase";
export default {
  name: "Profile",
    components:{
        update
    },
  data() {
    return {

        crabs:[]
    };
  },


computed:{

},

  methods: {

  },
  created() {
     this.$store.dispatch('ViewProfiles',this.crabs)
    this.email =firebase .auth().currentUser.email



  }
};
</script>

<style scoped>



  :root {
      --header-height: 54px;
      --page-margin-side: 5px;
      --blue: #0095f6;
      --link-blue: #00376b;
      --dull-grey: #8e8e8e;
      --bg-grey: rgb(250, 250, 250);
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font: inherit;
      vertical-align: baseline;
  }

  h1 {
      font-size: 28px;
      font-weight: 300;
  }

  body,
  button,
  input,
  textarea,
  h2 {
      color: #262626;
      color: rgba(38, 38, 38, 1);
      font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 14px;
  }

  body {
      background: var(--bg-grey);
      overflow-y: auto;
  }

  a,
  a:visited {
      color: inherit;
      text-decoration: none;
  }

  nav ul {
      list-style-type: none;
  }

  nav ul li {
      display: inline-block;
      margin-right: 12px;
  }

  header {
      position: fixed;
      background-color: white;
      height: var(--header-height);
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-items: center;
      width: 100%;
      grid-gap: 0 5px;
      border-bottom: 1px solid rgba(219, 219, 219, 1);
      padding: 0 var(--page-margin-side);
      z-index: 50;
  }



  main {
      display: grid;
      grid-gap: 20px;
      margin: 0 var(--page-margin-side);
      padding: 20px 0;
  }

  button {
      border: 1px solid transparent;
      background-color: var(--blue);
      color: white;
      cursor: pointer;
      display: block;
      font-weight: 600;
      padding: 5px 9px;
      text-align: center;
      text-transform: inherit;
      text-overflow: ellipsis;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-radius: 4px;
  }

  /*bio*/

  .bio {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 20px 0;
      padding-top: var(--header-height);
      align-items: start;
      grid-gap: 20px;
      margin-left: 10px;
  }

  .bio__img-block {
      position: relative;
      grid-row: 1 / -1;
      align-self: start;
      justify-self: center;
  }

  .bio__img {
      border-radius: 50%;
      width: 77px;
      height: 77px;
  }

  .bio__img-block:before {
      display: block;
      position: absolute;
      content: "";
      width: 85px;
      height: 85px;
      border-radius: 50%;
      background: var(--bg-grey);
      z-index: -1;
      top: -4px;
      left: -4px;
  }

  .bio__img-block:after {
      display: block;
      position: absolute;
      content: "";
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: linear-gradient(45deg, #833ab4, #c13584, #e1306c, #fd1d1d);
      z-index: -2;
      top: -6px;
      left: -7px;
  }

  .bio__header {
         grid-column: 2 / span 3;
         grid-row: 1;
     }

  .bio__verified {
      border-radius: 50%;
      height: 18px;
      width: 18px;
      background-color: var(--blue);
      position: relative;
      display: inline-block;
      z-index: -1;
      color: white;
  }

  .bio__verified i {
      position: absolute;
      left: 2px;
      top: 2px;
  }

  .bio__follow {
      padding: 5px 9px;
      margin-left: 0;
  }

  .bio__stats {
      grid-column: 2 / span 3;
      font-size: 16px;
  }

  .bio__account,
  .bio__description {
      display: inline;
  }

  .bio_blurb {
      grid-column: span 3;
  }

  .bio__name,
  .bio__description {
      grid-column: span 3;
      font-size: inherit;
  }

  .bio__name {
      font-weight: 600;
  }

  .bio__stats {
      display: none;
  }

  .stats {
      margin-right: 40px;
  }

  strong {
      font-weight: bold;
  }

  /*story nav */
  .story {
      display: grid;
      grid-template-columns: repeat(auto-fill, 65px);
      grid-auto-flow: column;
      grid-gap: 10px;
      margin-left: 0;
      overflow-x: auto;
  }

  .story img {
      border-radius: 50%;
      width: 56px;
      height: 56px;
  }

  .story h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  /* mobile stats */
  .mobile-stats {
      border-top: 1px solid lightgrey;
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-items: center;
      align-items: center;
  }

  .mobile-stats li {
      text-align: center;
      margin-left: 20px;
      margin: 0 10px;
      padding-top: 10px;
  }

  /*tabbed pane*/
  .tabbed-pane__header {
      border-top: 1px solid lightgrey;
  }

  .tabbed-pane__header {
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-items: center;
  }

  .tabbed-pane__header li {
      text-transform: uppercase;
      padding: 10px 0;
  }

  a.tab-link {
      color: #8e8e8e;
      border-top: none;
      padding: 18px;
  }

  a.tab-link i {
      font-size: 2em;
  }

  .tab-link-text {
      display: none;
  }

  a.selected {
      border-top: 1px solid black;
      color: rgba(38, 38, 38, 1);
  }

  .tabbed-pane__posts {
      display: grid;
      grid-template-columns: repeat(3, minmax(50px, 1fr));
      grid-gap: 3px;
  }

  .tabbed-pane__posts img {
      width: 100%;
      height: 100%;
  }

  /*footer*/
  .site-footer {
      display: grid;
      margin-top: 50px;
      grid-gap: 20px;
      margin: 0 var(--page-margin-side);
      margin-bottom: 20px;
      font-size: 12px;
  }

  footer nav ul {
      text-transform: uppercase;
  }

  .copyright {
      color: var(--dull-grey);
      text-transform: uppercase;
  }

  .site-footer__language {
      color: var(--link-blue);
      cursor: pointer;
      display: inline-block;
      position: relative;
      text-transform: uppercase;
      vertical-align: top;
  }

  .site-footer__language select {
      display: none;
  }

  .site-footer a,
  .site-footer a:visited {
      color: var(--link-blue);
      text-decoration: none;
  }

  @media screen and (min-width: 500px) {
      /*header: search is shown and header gains another column to accomodate it*/
      .search-outline {
          display: block;
      }

      header {
          grid-template-columns: auto 1fr auto auto;
      }
  }

  @media screen and (min-width: 700px) {
      /*tabbed pane change*/
      .tabbed-pane__header ul {
          grid-template-columns: 1fr repeat(3, auto) 1fr;
          justify-items: center;
      }

      .tabbed-pane__header ul li:nth-child(1) {
          grid-column: 2;
      }

      .tabbed-pane__header ul li:nth-child(2) {
          grid-column: 3;
      }

      .tabbed-pane__header ul li:nth-child(3) {
          grid-column: 4;
      }

      .tab-link-text {
          display: inline;
      }

      .tabbed-pane__header li {
          padding: 20px 0;
      }

      a.tab-link i {
          font-size: 1em;
      }

      a.tab-link {
          padding: 20px;
      }

      /*bio change */
      .bio {
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, auto);
          align-items: center;
      }

      .bio__img {
          width: 150px;
          height: 150px;
      }

      .bio__name,
      .bio__description {
          font-size: 16px;
      }

      .bio__follow {
          display: inline;
          margin-left: 10px;
      }

      .bio__img-block {
          align-self: center;
      }

      .bio__img-block:before {
          display: block;
          position: absolute;
          content: "";
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: var(--bg-grey);
          z-index: -1;
          top: -5px;
          left: -5px;
      }

      .bio__img-block:after {
          display: block;
          position: absolute;
          content: "";
          width: 166px;
          height: 166px;
          border-radius: 50%;
          background: linear-gradient(45deg, #833ab4, #c13584, #e1306c, #fd1d1d);
          z-index: -2;
          top: -8px;
          left: -8px;
      }

      /*swap stats display */
      .bio__stats {
          display: inline;
      }

      .mobile-stats {
          display: none;
      }

      /* resize story elements */
      .story ul {
          grid-template-columns: repeat(auto-fill, 115px);
      }

      .story {
          grid-gap: 40px;
          margin-left: 70px;
      }

      .story img {
          width: 77px;
          height: 77px;
      }

      /* posts */
      .tabbed-pane__posts {
          grid-gap: 25px;
      }
  }

  @media screen and (min-width: 1000px) {
      /* resize margins for entire page */
      :root {
          --page-margin-side: 15%;
      }

      main {
          grid-gap: 50px;
      }
  }

</style>
