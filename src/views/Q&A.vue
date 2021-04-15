<template>
    <div>

    <div id="wrap">

        <div id="header">
            <h1><a href="#">Website Title</a></h1>
            <h2>Subheader, website description H2</h2>
        </div>


        <div id="contentbar">

            <div class="contentbarleft">
                Navigation :
            </div>

            <div class="contentbarright">
                Articles :
            </div>

        </div>

        <div id="content">

            <div class="right">

                <h2><a href="#">License and terms of use</a></h2>
                Dark is a CSS template that is free and fully standards compliant. <a href="http://www.free-css-templates.com/">Free CSS templates</a> designed this template.
                This template is allowed for all uses, including commercial use, as it is released under the <strong>Creative Commons Attributions 2.5</strong> license. The only stipulation to the use of this free template is that the links appearing in the footer remain intact. Beyond that, simply enjoy and have fun with it!
                <br /><br />
                <img src="https://cdn.pixabay.com/photo/2021/01/15/17/01/green-5919790__340.jpg" alt="Example pic" style="border: 3px solid #ccc;" />
                <br /><br />
                Donec nulla. Aenean eu augue ac nisl tincidunt rutrum. Proin erat justo, pharetra eget, posuere at, malesuada
                et, nulla. Donec pretium nibh sed est faucibus suscipit. Nunc nisi. Nullam vehicula. In ipsum lorem, bibendum sed,
                consectetuer et, gravida id, erat. Ut imperdiet, leo vel condimentum faucibus, risus justo feugiat purus, vitae
                congue nulla diam non urna.

                <h2><a href="#">Title with a link - Example of heading 2</a></h2>
                Donec nulla. Aenean eu augue ac nisl tincidunt rutrum. Proin erat justo, pharetra eget, posuere at, malesuada
                et, nulla. Donec pretium nibh sed est faucibus suscipit. Nunc nisi. Nullam vehicula. In ipsum lorem, bibendum sed,
                consectetuer et, gravida id, erat. Ut imperdiet, leo vel condimentum faucibus, risus justo feugiat purus, vitae
                congue nulla diam non urna.

            </div>

            <div class="left">

                <h2>Categories :</h2>
                <ul>
                    <li><a href="#">World Politics</a></li>
                    <li><a href="#">Europe Sport</a></li>
                    <li><a href="#">Networking</a></li>
                    <li><a href="#">Nature - Africa</a></li>
                    <li><a href="#">SuperCool</a></li>
                    <li><a href="#">Last Category</a></li>
                </ul>

                <h2>Archives</h2>
                <ul>
                    <li><a href="#">January 2007</a></li>
                    <li><a href="#">February 2007</a></li>
                    <li><a href="#">March 2007</a></li>
                    <li><a href="#">April 2007</a></li>
                    <li><a href="#">May 2007</a></li>
                    <li><a href="#">June 2007</a></li>
                    <li><a href="#">July 2007</a></li>
                    <li><a href="#">August 2007</a></li>
                    <li><a href="#">September 2007</a></li>
                    <li><a href="#">October 2007</a></li>
                    <li><a href="#">November 2007</a></li>
                    <li><a href="#">December 2007</a></li>
                </ul>

            </div>


            <div style="clear: both;"> </div>

        </div>

        <div id="footer">
            Designed by <a href="http://www.free-css-templates.com/">Free CSS Templates</a>, Thanks to <a href="http://www.openwebdesign.org/">Web Design Dubai</a>
        </div>

    </div>

    </div>

</template>

<script>
    import db from "@/firebase/init";
    import firebase from 'firebase'

    export default {
        name: "upload",
        data(){
            return{

                images:[]
            }
        },
        created(){
            db.collection("Memes")
                .onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === "added") {
                              this.images.push(change.doc.data());
                        }

                    });
                });
        }

    };
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: #2a3742 url(https://cdn.pixabay.com/photo/2020/07/03/14/28/water-5366496__340.jpg) repeat-x top center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        line-height: 20px;
        color: #eee;
    }

    a {
        text-decoration: none;
        color: #7CBF0F;
    }
    a:hover {
        text-decoration: underline;
        color: #A3D74F;
    }

    #wrap {
        margin: 0 auto;
        width: 800px;
    }

    #header {
        height: 120px;
        background: #2a3742 url(https://cdn.pixabay.com/photo/2020/08/10/11/22/mountains-5477557__340.jpg) no-repeat;

    }
    #header h1 {
        font-size: 28px;
        letter-spacing: -1px;
        padding: 35px 0 0 20px;
        color: #fff;
    }
    #header h1 a {
        color: #fff;
        text-decoration: none;
        font-weight: 100;
        letter-spacing: -2px;
    }
    #header h1 a:hover {
        color: #A3D74F;
    }
    #header h2 {
        font-size: 19px;
        color: #e1c70e;
        padding: 5px 0 0 20px;
        letter-spacing: -1px;
        font-weight: 100;
    }

    #contentbar {
        background: #e1f2d0 url(https://cdn.pixabay.com/photo/2021/04/07/05/56/woman-6158131__340.jpg) no-repeat top;
        height: 50px;
        line-height: 50px;
        margin-top: 10px;
    }
    .contentbarleft {
        float: left;
        padding-left: 20px;
        font-weight: 600;
        font-size: 15px;
        width: 220px;
    }
    .contentbarright {
        float: right;
        padding-left: 20px;
        font-weight: 600;
        font-size: 15px;
        text-align: left;
        width: 530px;
    }

    #content {
        padding: 0 10px;
    }

    .right {
        float: right;
        width: 530px;
        text-align: justify;
        padding-top: 20px;
        font-size: 14px;
    }
    .right h2 {
        font-size: 18px;
        font-weight: 100;
        height: 30px;
        line-height: 30px;
    }
    .right h2 a {
        text-decoration: none;
        color: #A3D74F;
    }
    .right h2 a:hover {
        color: #fff;
    }

    .left {
        float: left;
        width: 220px;
        padding-top: 10px;
    }
    .left h2 {
        margin: 10px 0 0 0;
        padding-left: 10px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 13px;
    }
    .left ul {
        padding: 10px 0 15px 20px;
        list-style-type: none;
    }
    .left ul li a {
        text-decoration: none;
        font-weight: 600;
        font-size: 13px;
    }
    .left ul li a:hover {

    }

    #footer {
        text-align: center;
        font-size: 11px;
        color: #eee;
        margin-top: 40px;
        border-top: 1px dotted #A2D84C;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    #footer a { color: #eee; }
    #footer a:hover { color: #aaa; }

</style>
