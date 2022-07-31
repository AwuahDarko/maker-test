/* eslint-disable */
<template>
<section>
    <div class="row">
        <div class="col-md-6">
            <add-question></add-question>
        </div>
        <div class="col-md-6">
            <preview-question></preview-question>
        </div>
        
    
    </div>
</section>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";


import AddQuestion from "../components/AddQuestion.vue";
import PreviewQuestion from "../components/PreviewQuestions.vue";
import Snackbar from "vuejs-snackbar";
import {
    mapActions
} from "vuex";

// setTitleMethod('title')
//  vue.$refs.snackbar.error('Error function triggered')
// vue.$refs.snackbar.warn('Warn function triggered')
// vue.$refs.snackbar.info('Info function triggered')
// vue.$refs.snackbar.open('Open function triggered')
/* eslint-disable */ 
export default {
    name: "Home",
    title: "Welcome",
    components: {
PreviewQuestion,
        AddQuestion,
        snackbar: Snackbar,
    },
    data() {
        return {
            
        };
    },

    methods: {
        ...mapActions(["setUserData"]),

        showSnackbar(message) {
            this.$refs.snackbar.info(message);
        },

        
    },
    created() {},
    mounted() {
        
    },
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");


@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

/* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'); */

@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

/* @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"); */

mrow{
    display: flex;
    justify-content: space-evenly;
}

section{
    width: 70%;
    margin: auto
}
</style>
