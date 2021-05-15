<template>
    <div class="">
        <h1>Video Upload</h1>
        <div class="">
            <img v-if="imageUrl"   :src="imageUrl" alt="" width="200px" height="200px">
            <img v-if="SecondImageUrl" :src="SecondImageUrl" alt="" width="200px" height="200px">
            <img v-if="thumb" :src="thumb" alt="" width="300px" height="300px">
            <form @submit.prevent="sendMessage" >
                <div class="top">
                    <input type="text" class="uk-input"  placeholder="Question..." v-model="title" />
                </div>
                <br>
                <div class="top">
                    <input type="text" class="uk-input"  placeholder="descriptiion..." v-model="description" />
                </div>


                <div class="top">
                    <input type="text" class="uk-input"  placeholder="TitleOne..." v-model="TitleOne" />
                </div>
                <div class="top">
                    <input type="text" class="uk-input"  placeholder="TitleTwo..." v-model="TitleTwo" />
                </div>
                <div class="top">
                    <input type="text" class="uk-input"  placeholder="TitleThree..." v-model="TitleThree" />
                </div>
                <div class="top">
                    <input type="text" class="uk-input"  placeholder="TitleFour..." v-model="TitleFour" />
                </div>

                <div class="top">
                    <label for="">What is your prediction?{{prediction}}</label>
                    <p style="color: green" @click="predictionOne">{{TitleOne}}</p>
                    <p style="color: green" @click="predictionTwo">{{TitleTwo}}</p>
                    <p style="color: green" @click="predictionThree">{{TitleThree}}</p>
                    <p style="color: green" @click="predictionFour">{{TitleFour}}</p>
                </div>

                <!--          <label>Browser Select</label>-->
                <br>
                <label for="">Categories</label>
                <select class="uk-select" v-model="cat" >
                    <option v-for="sta in Cats">{{ sta.name }}</option>
                </select>
                <br>
                <label for="">Acount Pivacy</label>
                <select class="uk-select" v-model="choose" >
                    <option v-for="cho in Options">{{ cho }}</option>
                </select>
                <p v-if="errors">{{ errors }}</p>

            </form>



            <div >
                <div class="uk-margin ">
                    <input class="uk-input" type="url" required placeholder="First Video" v-model="FirstVideoUrl">
                </div>
                <div class="uk-margin">
                    <input class="uk-input" type="url" required placeholder="Second Video" v-model="SecondVideoUrl">
                </div>
                <div class="uk-margin">
                    <input class="uk-input" type="url" required placeholder="Second Video" v-model="ThirdVideoUrl">
                </div>
                <div class="uk-margin">
                    <input class="uk-input" type="url" required placeholder="Second Video" v-model="FourthVideoUrl">
                </div>
                <div class="js-upload" uk-form-custom>
                    <input type="file" multiple @change="thumbnail">
                    <button class="uk-button uk-button-default" type="button" tabindex="-1">thumbnail</button>
                </div>

                <button  @click="getFirstID" class="uk-button " style="color: white !important;background-color: green">Get ID</button>

            </div>

            <div>
                <p>{{VideoIdOne}}</p>
                <p>{{VideoIdTwo}}</p>
                <p>{{VideoIdThree}}</p>
                <p>{{VideoIdFour}}</p>
            </div>

            <button
                    @click="sendMessage"
                    class="uk-button uk-button-secondary uk-button-small"
            >Send
            </button>
        </div>
    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from 'firebase'

    export default {
        name: "URL",
        props: ["name"],
        data() {
            return {

                errors: "",
                image:null,
                imageUrl:"",
                cat:null,
                crabs:[],
                description:null,
                title:null,
                choose:null,
                id:firebase.auth().currentUser.uid,
                Names:null,
                Pic:null,
                alias:null,
                images:'upload.svg',
                SecondImageUrl:'',
                show:true,
                FirstVideoUrl:'',
                SecondVideoUrl:'',
                ThirdVideoUrl:'',
              FourthVideoUrl:'',
                VideoIdOne:'',
                VideoIdTwo:'',
                VideoIdThree:'',
                VideoIdFour:'',
                prediction:'',
                TitleOne:'',
                TitleTwo:'',
                TitleThree:'',
                TitleFour:'',
                thumb:''



            };
        },
        methods: {

            predictionOne(){
                this.prediction = this.TitleOne
            },
            predictionTwo(){
                this.prediction = this.TitleTwo
            },
            predictionThree(){
                this.prediction = this.TitleThree
            },
            predictionFour(){
                this.prediction = this.TitleFour
            },
            sendMessage() {
                if (this.title) {
                    var user = firebase.auth().currentUser;
                    db.collection("Memes")
                        .add({
                            image:this.imageUrl,
                            secondImage:this.SecondImageUrl,
                            title: this.title,
                            description: this.description,
                            user_id:user.uid,
                            category:this.cat,
                            privacy:this.choose,
                            name:this.Names,
                            Photo:this.Pic,
                            alias:this.alias,
                            timestamp:Date.now(),
                            counter:0,
                            VideoIdOne:this.VideoIdOne,
                            VideoIdTwo:this.VideoIdTwo,
                            VideoIdThree:this.VideoIdThree,
                            VideoIdFour:this.VideoIdFour,
                            prediction:this.prediction,
                            TitleOne:this.TitleOne,
                            TitleTwo:this.TitleTwo,
                            TitleThree:this.TitleThree,
                            TitleFour:this.TitleFour,
                            thumb:this.thumb

                        }).then((data)=>{
                        const key=data.key

                        db.collection("Memes").doc(data.id).update({
                            Meme_id:data.id
                        }).then(()=>{
                            return key
                        })

                    }).then(key=>{
                        const filename=this.image.name
                        const ext=filename.slice(filename.lastIndexOf('.'))
                        return  firebase.storage().ref('Memes/'+key+'.'+ext).put(this.image)
                    }).catch(err => {
                        console.log(err);
                    })
                    this.message = null;
                    this.errors = null;
                    this.imageUrl=null,
                        this.SecondImageUrl=null,
                        this.thumb
                        this.description=null
                    this.title=null
                    this.choose=null
                    this.cat=null


                } else {
                    this.errors = "You need to enter a message";
                }
            },


            Reload(){
                window.location.reload()
            },


            getFirstID(){
                this.VideoIdOne = this.FirstVideoUrl.split("v=")[1].substring(0, 11);
                this.VideoIdTwo = this.SecondVideoUrl.split("v=")[1].substring(0, 11);
                this.VideoIdThree = this.ThirdVideoUrl.split("v=")[1].substring(0, 11);
                this.VideoIdFour = this.FourthVideoUrl.split("v=")[1].substring(0, 11);
            } ,
            thumbnail(e) {
                let file = e.target.files[0]
                console.log(file)
                var storageRef = firebase.storage().ref('thumbnail/' + file.name);
                let uploadTask = storageRef.put(file)

                uploadTask.on('state_changed',
                    (snapshot) => {


                    },
                    (error) => {
                        // Handle unsuccessful uploads
                    },
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            this.thumb = downloadURL;
                            console.log('File available at', downloadURL);
                        });
                    }
                );

            },
        },
        computed:{

            Cats() {
                return this.$store.state.categories
            },
            Options() {
                return this.$store.state.Options;
            }
        },
        created() {
            db.collection('Profile').where('id', '==', this.id)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.Names=change.doc.data().name
                            this.Pic=change.doc.data().image
                            this.alias=change.doc.data().alias
                        }

                    });
                });


        }
    };
</script>

<style scoped>
    img{
        width:30px;
        height: 30px;
    }
    button {
        margin-top: 20px;
    }
    select{
        margin-top: 20px;
    }
    .messages {
        /*;position: absolute*/
        margin-left: 2%;
        /*bottom: 0;*/
        width: 30%;
        /*z-index: 100;*/
        color: white;
        text-align: center;
        /*margin-bottom: 0px;*/

    }
    p {
        color: red;
    }


    a i {
        color: black;
    }
    .pointer{
        cursor: pointer;
    }
    .top{
        margin-top: 10px !important;
    }
</style>
