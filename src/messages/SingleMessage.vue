<template>
<!--  <div class=" test">-->

<!--      <div-->
<!--      v-for="message in messages"-->
<!--      :key="message.message_id"-->
<!--      class=" uk-card  uk-width-1-1@m"-->
<!--    >-->

<!--      <article class="uk-comment" @submit.prevent="deletes">-->
<!--        <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>-->
<!--          <div class="uk-width-auto ">-->
<!--            <img class="uk-border-circle" :src="message.pic"  alt="">-->
<!--          </div>-->
<!--          <div class="uk-width-expand">-->
<!--            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{message.name}}</a></h4>-->
<!--            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">-->
<!--              <li><a href="#">{{time}}</a></li>-->
<!--&lt;!&ndash;              <a href="#" @click="deletes(message.id)" class="uk-icon-link" uk-icon="trash"></a>&ndash;&gt;-->

<!--            </ul>-->
<!--          </div>-->
<!--        </header>-->
<!--        <div class="uk-comment-body">-->
<!--          <p><i style="" class="fas fa-comment-dots"></i>{{message.message}}</p><p style="margin-left: 4px" v-for="emoji in message.emoji">{{emoji}}</p>-->

<!--&lt;!&ndash;          REPLY&ndash;&gt;-->
<!--&lt;!&ndash;<reply :Id="messageId" ></reply>&ndash;&gt;-->

<!--        </div>-->
<!--        <div class="first me">-->
<!--          <img :src="message.image" alt="" height="100px" width="100px">-->
<!--        </div>-->
<!--      </article>-->
<!--      <hr>-->
<!--    </div>-->
<!--  </div>-->



 <div class="container">
     <div  v-if="messages.length !=0">
         <div class="row">
             <div class="panel panel-default widget">
                 <div class="panel-heading">
                     <span class="glyphicon glyphicon-comment"></span>
                     <h3 class="panel-title">Comments</h3>
<!--                     <span class="label label-info">-->
<!--                    78</span>-->
                 </div>
                 <div class="panel-body">
                     <ul class="list-group">
                         <li class="list-group-item" v-for="message in messages" :key="message.message.id" style="margin-top: 10px">
                             <div class="row">
                                 <div class="col-xs-2 col-md-1">
                                     <img :src="message.pic" class="img-circle img-responsive" alt="" /></div>
                                 <div class="col-xs-10 col-md-11">
                                     <div>
                                         <!--                    <a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">-->
                                         <!--                      Google Style Login Page Design Using Bootstrap</a>-->
                                         <div class="mic-info uk-text-small">
                                             By: <a href="#">{{message.name}}</a> on {{message.time |formatDate}}
                                         </div>
                                     </div>
                                     <div class="comment-text">
                                         <div class="uk-comment-body">
                                             <p><i style="" class="fas fa-comment-dots"></i>{{message.message}}</p><p style="margin-left: 4px" v-for="emoji in message.emoji">{{emoji}}</p>
                                         </div>
                                     </div>


                                     <!--                  <div class="action">-->
                                     <!--                    <button type="button" class="btn btn-primary btn-xs" title="Edit">-->
                                     <!--                      <span class="glyphicon glyphicon-pencil"></span>-->
                                     <!--                    </button>-->
                                     <!--                    <button type="button" class="btn btn-success btn-xs" title="Approved">-->
                                     <!--                      <span class="glyphicon glyphicon-ok"></span>-->
                                     <!--                    </button>-->
                                     <!--                    <button type="button" class="btn btn-danger btn-xs" title="Delete">-->
                                     <!--                      <span class="glyphicon glyphicon-trash"></span>-->
                                     <!--                    </button>-->
                                     <!--                  </div>-->
                                 </div>
                             </div>
                         </li>


                     </ul>

                 </div>
             </div>
         </div>
     </div>

 </div>






</template>

<script>
import db from "@/firebase/init";
import moments from 'moment'
import reply from '@/components/frames/reply'
export default {
  name: "SingleMessage",
  props:['ids'],
  data() {
    return {
      messages: [],
      crabs:[],
        time:null,
        messageId:null

    };
  },
  components:{reply},
  computed:{
    // image(){
    //   return this.$store.state.image
    // },

  },

  methods: {
    deletes(doc){
      if(confirm("Do you want to delete this message")){
        db.collection("message").doc(doc).delete()
        window.location.reload()
      }else {
        alert("message was not removed")
      }



    }
},
  created() {
    this.$store.dispatch('readMessages',this.messages)







  }
};
</script>

<style scoped>
.test {
  /*margin-left: 330px;*/
    max-height: 400px;padding-bottom: 100px;

}
.test::-webkit-scrollbar-track{
    background-color: white;

}

.rcorners {
  border-radius: 25px;
  background: #73ad21;
  padding: 20px;
  width: 400px;
  height: 115px;
  color: black;
}
    .tests{color:blue;
    font-size: 0.7em}
    .col{color: white}

  .first{
    margin-left: 6%;
  }
  .me{
    margin-left: 76%;
  }
i{margin-right: 15px;
  font-size: 1.1em;
  margin-top: 5px;
  color: palevioletred;
}

  a{font-size: 1.1em}
  .fa fa-thumbs-up{
    color:blue;
  }
   .uk-width-auto img{
        width: 45px;
       max-height: 45px;
    }
    p{display: inline-block;
    }

</style>
