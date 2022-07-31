<template>
<div class="pad">
    <p>Preview</p>
        <div v-for="(ques, index) in questions" :key="'ques-'+ index">
            <p>Question {{index + 1 }}</p>
        <textarea readonly class="form-control" name="" id="" cols="30" rows="10" v-model="ques.question">

        </textarea>
        <div class="put-left mt-2">
            <p>Answers</p>
        </div>
        <div class="mt-1">
            <p v-for="(item, index) in ques.answers" :key="index+'textx'"> <span class="badge badge-info"> {{index + 1 }} </span> {{ item }}  </p>
        </div>
        </div>
    </div>
</template>


<script>
import {
    mapGetters
} from "vuex";
export default {
    name: "PreviewQuestion",

     data() {
        return {
            question: '',
            multi_options: [
                
            ]
        }
    },
    methods: {
        onAddAnswer() {
            this.multi_options.push(' ')
            console.log(this.multi_options)
        }
    },
    computed: {
        ...mapGetters(["questions"]),
    }
}
</script>

<style scoped>
.put-left{
    display: flex;
    justify-content: flex-start;
}
.pad{
    padding: 10px;
}
</style>