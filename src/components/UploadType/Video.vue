<template>
    <div class="">
        <h1>Upload Image</h1>
        <div class="">
            <video v-if="VideoOne" width="400" controls>
                <source :src="VideoOne" type="video/mp4">

            </video>
            <video v-if="VideoTwo" controls>
                <source :src="VideoTwo" type="video/mp4">
            </video>




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
                    <input type="text" class="uk-input"  placeholder="prediction..." v-model="prediction" />
                </div>

                <div class="top">
                    <input type="text" class="uk-input"  placeholder="TitleOne..." v-model="TitleOne" />
                </div>
                <div class="top">
                    <input type="text" class="uk-input"  placeholder="TitleTwo..." v-model="TitleTwo" />
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

            <p uk-margin>


                <!--                <button class="uk-button uk-button-primary uk-margin-left" @click="VideoUrl">Video Url</button>-->
            </p>


            <div >
                <div class="js-upload" uk-form-custom>
                    <input type="file" multiple @change="thumbnail">
                    <button class="uk-button uk-button-default" type="button" tabindex="-1">{{ThumbProgress}}thumbnail</button>
                </div>

                <div class="js-upload" uk-form-custom>
                    <input type="file" multiple @change="uploadImageOne">
                    <button class="uk-button uk-button-default" type="button" tabindex="-1">{{progressOne}}Video One</button>
                </div>

                <div class="js-upload" uk-form-custom>
                    <input type="file" multiple @change="uploadImageTwo">
                    <button class="uk-button uk-button-default" type="button" tabindex="-1">{{progressTwo}}Video Two</button>
                </div>





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
        name: "Video",
        props: ["name"],
        data() {
            return {

                errors: "",
                VideoOne:null,
                VideoTwo:"",
                cat:null,
                crabs:[],
                description:null,
                title:null,
                choose:null,
                id:firebase.auth().currentUser.uid,
                Names:null,
                Pic:null,
                alias:null,
                show:true,
                prediction:'',
                TitleOne:'',
                TitleTwo:'',
                thumb:'',
                progressOne:'',
                progressTwo:'',
                ThumbProgress:''


            };
        },
        methods: {
            sendMessage() {
                if (this.title) {
                    var user = firebase.auth().currentUser;
                    db.collection("Memes")
                        .add({
                            VideoOne:this.VideoOne,
                            VideoTwo:this.VideoTwo,
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
                            thumb:this.thumb,
                            prediction:this.prediction,
                            TitleOne:this.TitleOne,
                            TitleTwo:this.TitleTwo,


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
                        return  firebase.storage().ref('test/'+key+'.'+ext).put(this.VideoOne)
                    }).catch(err => {
                        console.log(err);
                    })
                    this.message = null;
                    this.errors = null;
                    this.VideoOne=null,
                        this.VideoTwo=null,

                        this.description=null
                    this.title=null
                    this.choose=null
                    this.cat=null
                    this.thumb=null

                } else {
                    this.errors = "You need to enter a message";
                }
            },


            Reload(){
                window.location.reload()
            },


            uploadImageOne(e) {
                let file = e.target.files[0]
                console.log(file)
                var storageRef = firebase.storage().ref('test/' + file.name);
                let uploadTask = storageRef.put(file)

                uploadTask.on('state_changed',
                    (snapshot) => {
                        this.progressOne = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                    },
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            this.VideoOne = downloadURL;
                            console.log('File available at', downloadURL);
                        });
                    }
                );

            },
            uploadImageTwo(e) {
                let file = e.target.files[0]
                console.log(file)
                var storageRef = firebase.storage().ref('test/' + file.name);
                let uploadTask = storageRef.put(file)

                uploadTask.on('state_changed',
                    (snapshot) => {
                        this.progressTwo = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    },
                    (error) => {
                        // Handle unsuccessful uploads
                    },
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            this.VideoTwo = downloadURL;
                            console.log('File available at', downloadURL);
                        });
                    }
                );

            },

            thumbnail(e) {
                let file = e.target.files[0]
                console.log(file)
                var storageRef = firebase.storage().ref('thumbnail/' + file.name);
                let uploadTask = storageRef.put(file)

                uploadTask.on('state_changed',
                    (snapshot) => {
                       this.ThumbProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

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
