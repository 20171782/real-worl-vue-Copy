<template>
    <div>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <div class="mainDiv">
            <!--title-->
            <div class="title">

                <a href="#">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    Create a Post</a>

                <a href="#">
                    <i class="fa fa-file-image-o" aria-hidden="true"></i>
                    Photo/Video Album</a>
                <p><i class="fa fa-times" aria-hidden="true"></i>
                </p>
            </div>


            <div id="body">
                <!--img and textarea-->
                <div class="imtcontainer">
                    <div class="img">
                        <pro></pro>
                    </div>
                    <div class="textarea">
                        <textarea onkeyup="InputAdjust(this)" placeholder="what's on you mind?"></textarea>
                    </div>

                </div>

                <!--icons-->
                <div class="icons">
                    <div class="photos">

                        <a href="#">
                            <i class="fa fa-picture-o" aria-hidden="true"></i>
                            Photo/Video</a>
                    </div>

                    <div class="feeling">
                        <a href='#'>
                            <i class="fa fa-smile-o" aria-hidden="true"></i>
                            Felling/Activity</a>
                    </div>



                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "createPost"
    }
</script>

<style scoped>


    body{
        background-color: #333;

    }

    .mainDiv{
        width:500px;
        background-color: #fff;
        margin: 50px 1px 1px 280px ;
        border-radius: 3px;
        position: relative;

    }

    .title{
        width: 100%;
        height: 33px;
        background-color: #f6f7f9;
        border-bottom: 1px solid #dddfe2;
        border-radius: 2px 2px 0 0;
        font-size: 13.5px;


    }
    .title p{
        margin-right: 5px;
        margin-top: 3px;
        float: right;
        padding: 3px 7px;
        border-radius: 50%;
    }
    .title p:hover{
        background-color: #ddd;
    }
    .title a{
        line-height: 33px;
        font-weight: bold;
        color: #365899;
        font-size: 13px;
        padding:0 3px 0 3px;
    }


    .title a:first-of-type{
        height: 14px;
        padding:4px 6px 4px 4px;
        color: #4b4f56;
    }
    .title a:nth-of-type(2) i{
        height: 14px;
        padding:4px 2px 4px 4px;
        color: #4b4f56;
    }
    .title a i{
        padding: 3px;
    }



    /*image and text container*/

    #body{
        border-radius: 3px;
    }
    .imtcontainer{
        width: 100%;
        /*min-height: 71px;*/
        border: 1px solid transparent;
        border-radius: 3px;
        background-color: #fff;

    }

    .imtcontainer >.img{
        float: left;
        width: 40px;
        height: 40px;
        background-color: #eee;
        margin: 8px 1px 0 8px;
        display: inline-block;
        border: 1px solid transparent;
    }
    .imtcontainer >.img img{
        width: 100%;
        height: 100%;
    }

    .imtcontainer >.textarea{
        display: inline-block;
        background-color: #fff;
        width: 90%;
    }
    .imtcontainer >.textarea textarea{


        display: flex;
        margin-top: 8px;
        width: 100%;
        /*min-height: 90%;*/
        text-align: left;
        padding: 10px;
        border: none;
        resize:none;
        font-size: 16px;
    }
    .imtcontainer >.textarea textarea:focus{
        border:none ;
        outline: none;
    }


    .line{
        position: relative;
        margin: 1px auto;
        width:100%;
        border-top: 1px solid #e9ebee;
        text-align: left;
        padding-top: 1px;
        background-color:#fff;
    }
    .line span{
        border-radius: 50px;
        padding: 11px;
        margin-bottom: 5px;
        margin-left: 5px;
        display: none;
        z-index: 10;
        border: 1px solid #fff;
    }
    .line span:active{
        outline:5px #333;
    }
    .line i{
        position: absolute;
        top: -18px;
        right: 5px;
        color: #4b4f56;
    }
    .line .colors{
        display: inline-block;
        visibility: hidden;
    }
    /*icons*/

    .icons{
        width: 100%;
        padding-left: 10px;
        border:1px solid transparent;
        background-color: #fff;
    }

    .photos , .feeling , .more , .checkin, .tagfriend, .back, .live{
        text-indent: 5px;
        margin-top: 6px;
        line-height: 32px;
        display: inline-block;
        height: 32px;
        border-radius: 50px;
        background-color: #f6f7f9;
        padding: 0px 6px 0px 3px;
        transition: all .0s ease-in-out;
    }
    .photos a , .feeling a , .checkin a , .tagfriend a, .back a, .live a {
        color: #333;
        font-weight: bold;
        font-size: 13.8px;
    }
    .photos i{
        color: #8bbf50;
    }

    .feeling i{
        color: #f6d16f
    }
    .more{
        padding: 0px 10px 0px 10px;
        text-indent: 0;
        line-height: 30px;
    }
    .more span{
        border-radius: 50px;
        display: inline-block;
        padding: 2.5px;
        background-color: #a7aab1
    }

    .photos:hover , .feeling:hover , .more:hover, .checkin:hover, .tagfriend:hover, .back:hover, .live:hover{
        background-color:#dddfe2;
    }

    /*footer*/

    .footer{
        width: 100%;
        background-color: #fff;
        text-align: right;
        padding-bottom: 5px;
        padding-top: 15px;
    }

    .footer a:first-of-type{
        font-size: 13px;
        display: inline-block;
        color: #333;
        line-height: 21px;
        padding: 1px 2px 1px 2px;
        width: 147px;
        height: 24px;
        text-align: center;
        border:1px solid #ced0d4;
    }
    .footer a:nth-of-type(2){
        color: #fff;
        display: inline-block;
        padding: 1px 2px 1px;
        width: 61px;
        height: 24px;
        line-height: 21px;
        text-align: center;
        background-color: #4267b2;
    }
    .footer a{

    }





    .clicked{
        height: 290px;
        background-color: #fff
    }

    .area{
        min-height: 117px;
    }

    .opwidth{
        width: 49%;
        margin-left: 5px;
    }

    .inline{
        display: inline-block!important;
    }
    .visible{
        visibility: visible!important;
    }











</style>
