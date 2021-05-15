<template>
    <div>
        createGroups


        <form @submit.prevent="">
            <input type="text" v-model="name"><br>
            <button class="uk-margin-top" @click="addGroup">create group</button>
        </form>






    </div>
</template>

<script>
    import firebase from "firebase";
    import db from "@/firebase/init";

    export default {
        name: "createGroups",
        data(){
            return {
                name:'',
                groupID:''

            }
        },
        methods:{
            addGroup()  {

                var user = firebase.auth().currentUser;
                db.collection("Groups")
                    .add({
                        groupName:this.name,
                    }).then((data)=>{
                    this.groupID = data.id;
                    db.collection("Groups").doc(data.id).update({
                        Group_id:data.id
                    }).then(()=>{
                        db.collection("GroupUsers")
                            .add({
                                Group_id:this.groupID,
                                user_id:user.uid
                            }).then((data)=>{
                            db.collection("GroupUsers").doc(data.id).update({
                                GroupUser_id:data.id,
                            })
                        })
                    })
                })
                    .then((data)=>{
                        alert('successfully added')
                    })

            }


        }
    }
</script>

<style scoped>

</style>
