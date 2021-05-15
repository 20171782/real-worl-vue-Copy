<template>
    <div>

        <div v-for=" me in groups">
            <router-link :to="'/singleGroup/' + me.Group_id">
                <span>{{me.groupName}}</span>
            </router-link>
        </div>

    </div>
</template>

<script>
    import db from "@/firebase/init";
    export default {
        name: "displayGroups",
        data(){
            return {
                groups:[]
            }
        },
        created(){
            db.collection("Groups")
                .onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === "added") {
                            this.groups.push(change.doc.data());
                        }
                    });
                });
        }

    }
</script>

<style scoped>

</style>
