<template>
    <div>
        <div class="uk-container">
            <div class="content"> <!-- Card Grids Conteiner -->
                <!-- Card Grid -->
                <div class="card-panel" >

                    <div class="card-panel-content row no-gutters">
                        <!-- Card Container -->
                        <div class="col-md-4 card-container padding-right-10 " v-for="image in images">
                            <!-- Card -->
                            <router-link :to="'/start/' + image.Meme_id"
                            ><div class="card">
                                <img :src="image.thumb" alt="">
                                <div class="card-subheading">
                                    Based on your interests
                                </div>
                                <div class="heading">
                                    {{ image.title }}
                                </div>
                                <div class="article-info">
                                    <div class="article-info-left">
                                        <div class="">
                                            <a class="profile-avatar">
                                                <img :src="image.Photo" class="avatar-image" alt="Go to the profile of Jeff Goins">
                                            </a>
                                        </div>
                                        <div class="article-info-center">
                                            <div class="username">{{image.alias}}</div>
                                            <div><span class="date">{{image.timestamp|formatDate}}</span></div>
                                        </div>
                                    </div>

                                    <div class="article-info-right">
                                        <i class="fa fa-bookmark-o bookmark-link" aria-hidden="true"></i><i class="fa fa-angle-down more-options-link" aria-hidden="true"></i>

                                    </div>
                                </div></div></router-link>
                            </div><!-- END Card -->
                        </div><!-- END Card Container -->
                        <!-- Card Container -->
                    </div>
                </div>
            </div>


        </div>



</template>

<script>
    import { mapGetters } from "vuex";
    import db from "@/firebase/init";
    import firebase from 'firebase'

    export default {
        name: "userMemes",
        props: ["ids"],
        data() {
            return {
                images:[],
                id:this.$route.params.id
            };
        },
        methods: {
            Goto(id) {
                this.$router.push({ name: "GetStarted", params: { id: id } });
                window.location.reload();
            }
        },
        computed: {
            ...mapGetters(["loading"]),

        },
        created() {
            // this.$store.dispatch("ViewImages");
            db.collection('Memes').where('alias','==',this.id)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.images.push(change.doc.data());
                        }

                    });
                });
        }
    };
</script>

<style scoped>
    /* NAVBAR */

    /* CONTENT */
    .content {
        padding: 0px 0 0 0;
    }

    .card-panel {
        display: inline-block;
        margin: 30px 0 40px 0;
        width: 100%;
    }

    .padding-right-10 {
        padding-right:10px!important;
    }


    .card-container {
        margin-bottom: 20px;
    }

    .card {
        display: inline-block;
        padding:20px;
    }

    .img{
        display: block;
        margin: -20px -20px 0 -20px;
        /*background-image: url(https://cdn-images-1.medium.com/max/400/1*rJo10rUQ8WCmCsgTJP5uPg.jpeg);*/
        background-position: 50% 50%;
        background-size: cover;
        height: 100px;
    }


    .card-subheading {
        color: rgba(0,0,0,.44);
        font-size: 12px!important;
        padding-top: 15px;
        padding-bottom: 5px;
    }

    .heading {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.2 !important;
        max-height: 2.4em !important;
        min-height: 70px;
    }

    .article-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-basis: auto;
    }

    .article-info-left {
        display: flex;
    }

    .profile-avatar {
        display: block;
        padding-right: 10px;
    }

    .avatar-image {
        width: 40px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
        border-radius: 100%;
    }

    .username {
        color: rgba(0,0,0,.8);
        font-size: 12px;
    }

    .date, .read-time {
        color: rgba(0,0,0,.44)!important;
        font-size: 12px;
    }

    .bookmark-link {
        color: rgba(0,0,0,.44);
        display: inline-block;
        font-size: 19px;
        height: 24px;
        vertical-align: sub;
    }

    .more-options-link {
        color: rgba(0,0,0,.44);
        display: inline-block;
        font-size: 19px;
        height: 24px;
        margin-left: 6px;
        vertical-align: middle;
    }
    /* END: CONTENT */





</style>
