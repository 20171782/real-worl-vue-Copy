<template>
    <div style="" class="">
        <span style="color: black" class="pointer" href="#modal-full" uk-toggle><img :src=" '/' + images " alt=""><span class="uk-text-bold" style="margin-left: 17px">upload</span></span>

<!--        <a class="uk-button uk-button-default" href="#modal-full" uk-toggle>Open</a>-->

        <div id="modal-full" class="uk-modal-full" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                <div class="uk-grid-collapse uk-child-width-1-2@s " uk-grid>
                    <div class="uk-background-cover" style="background-image: url('https://cdn.pixabay.com/photo/2018/03/09/10/41/paper-3211179__340.jpg');" uk-height-viewport></div>
                    <div class="uk-padding-large uk-margin-large-top">
                        <ul class="uk-subnav uk-subnav-pill" uk-switcher>
                            <li><a href="#">Image</a></li>
                            <li><a href="#">URL</a></li>
                            <li><a href="#">Text</a></li>
                            <li><a href="#">Video</a></li>
                        </ul>

                        <ul class="uk-switcher uk-margin">
                            <li><LocalImage/></li>
                            <li><URL></URL></li>
                            <li><Testing></Testing></li>
                            <li><Video></Video></li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>





        <!--        <div id="modal-full" class="uk-modal-full" uk-modal>-->
<!--            <div class="uk-modal-dialog">-->
<!--                <button @click="Reload" class="uk-modal-close-full uk-close-large" type="button" uk-close></button>-->
<!--                <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>-->
<!--                    <div class="uk-background-cover" style="background-image: url('https://cdn.pixabay.com/photo/2018/03/09/10/41/paper-3211179__340.jpg');" uk-height-viewport></div>-->


<!--                    <ul class="uk-subnav uk-subnav-pill" uk-switcher>-->
<!--                        <li><a href="#">Item</a></li>-->
<!--                        <li><a href="#">Item</a></li>-->
<!--                        <li><a href="#">Item</a></li>-->
<!--                    </ul>-->
<!--                    <ul class="uk-switcher uk-margin">-->
<!--                        <li>Hello! <a href="#" uk-switcher-item="2">Switch to item 3</a></li>-->
<!--                        <li>Hello again! <a href="#" uk-switcher-item="next">Next item</a></li>-->
<!--                        <li>Bazinga! <a href="#" uk-switcher-item="previous">Previous item</a></li>-->
<!--                    </ul>-->



                    <!--                    <div class="uk-padding-large">-->
<!--                        <h1>CLICK</h1>-->
<!--                        <div class="">-->
<!--                            <img v-if="imageUrl"   :src="imageUrl" alt="" width="200px" height="200px">-->
<!--                            <img v-if="SecondImageUrl" :src="SecondImageUrl" alt="" width="200px" height="200px">-->
<!--                            <form @submit.prevent="sendMessage" >-->
<!--                                <div class="top">-->
<!--                                    <input type="text" class="uk-input"  placeholder="Question..." v-model="title" />-->
<!--                                </div>-->
<!--                                <br>-->
<!--                                <div class="top">-->
<!--                                    <input type="text" class="uk-input"  placeholder="descriptiion..." v-model="description" />-->
<!--                                </div>-->
<!--                                <div class="top">-->
<!--                                    <input type="text" class="uk-input"  placeholder="prediction..." v-model="prediction" />-->
<!--                                </div>-->

<!--                                <div class="top">-->
<!--                                    <input type="text" class="uk-input"  placeholder="TitleOne..." v-model="TitleOne" />-->
<!--                                </div>-->
<!--                                <div class="top">-->
<!--                                    <input type="text" class="uk-input"  placeholder="TitleTwo..." v-model="TitleTwo" />-->
<!--                                </div>-->
<!--                                &lt;!&ndash;          <label>Browser Select</label>&ndash;&gt;-->
<!--                                <br>-->
<!--                                <label for="">Categories</label>-->
<!--                                <select class="uk-select" v-model="cat" >-->
<!--                                    <option v-for="sta in Cats">{{ sta.name }}</option>-->
<!--                                </select>-->
<!--                                <br>-->
<!--                                <label for="">Acount Pivacy</label>-->
<!--                                <select class="uk-select" v-model="choose" >-->
<!--                                    <option v-for="cho in Options">{{ cho }}</option>-->
<!--                                </select>-->
<!--                                <p v-if="errors">{{ errors }}</p>-->

<!--                            </form>-->

<!--                            <p uk-margin>-->

<!--                                <button class="uk-button uk-button-danger" @click="Localimage">Local Image</button>-->
<!--                                <button class="uk-button uk-button-primary uk-margin-left" @click="VideoUrl">Video Url</button>-->
<!--                            </p>-->


<!--                          <div v-if="show">-->
<!--                              <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="uploadFile"/>-->
<!--                              <input type="file"   @change="uploadImage"/>-->
<!--                              <button-->
<!--                                      raised-->
<!--                                      style="background: #F44336;"-->
<!--                                      class="uk-button uk-button-primary uk-button-small"-->
<!--                                      @click="upload"-->
<!--                              >upload-->
<!--                              </button>-->
<!--                          </div>-->

<!--                            <div v-if="!show">-->
<!--                                <div class="uk-margin ">-->
<!--                                    <input class="uk-input" type="url" required placeholder="First Video" v-model="FirstVideoUrl">-->
<!--                                </div>-->
<!--                                <div class="uk-margin">-->
<!--                                    <input class="uk-input" type="url" required placeholder="Second Video" v-model="SecondVideoUrl">-->
<!--                                </div>-->
<!--                                <p>-->
<!--                                    {{VideoIdOne}}-->
<!--                                </p>-->
<!--                                <p>-->
<!--                                    {{VideoIdTwo}}-->
<!--                                </p>-->
<!--                                <button  @click="getFirstID" class="uk-button " style="color: white !important;background-color: green">Get ID</button>-->

<!--                          </div>-->



<!--                            <button-->
<!--                                    @click="sendMessage"-->
<!--                                    class="uk-button uk-button-secondary uk-button-small"-->
<!--                            >Send-->
<!--                            </button>-->
<!--                        </div>-->
<!--                    </div>-->






<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from 'firebase'

    export default {
        name: "upload",
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
                VideoIdOne:'',
                VideoIdTwo:'',
                prediction:'',
                TitleOne:'',
                TitleTwo:''



            };
        },
        methods: {
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
                            prediction:this.prediction,
                            TitleOne:this.TitleOne,
                            TitleTwo:this.TitleTwo

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

                        this.description=null
                    this.title=null
                    this.choose=null
                    this.cat=null


                } else {
                    this.errors = "You need to enter a message";
                }
            },

            upload() {
                this.$refs.fileInput.click()
            },
            uploadFile(event) {
                const files = event.target.files
                let filename = files[0].name
                if (filename.lastIndexOf('.') <= 0) {
                    return alert('Please enter a valid file')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
                console.log(this.image)


            },
            Reload(){
                window.location.reload()
            },
           Localimage(){
                this.show = true
           },
            VideoUrl(){
                this.show = false
            },
            uploadImage(e) {
                let file = e.target.files[0]
                console.log(file)
                var storageRef = firebase.storage().ref('test/' + file.name);
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
                            this.SecondImageUrl = downloadURL;
                            console.log('File available at', downloadURL);
                        });
                    }
                );

            },
            getFirstID(){
                this.VideoIdOne = this.FirstVideoUrl.split("v=")[1].substring(0, 11);
                this.VideoIdTwo = this.SecondVideoUrl.split("v=")[1].substring(0, 11);
            } ,
            // getSecondID(){
            //
            // }
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
