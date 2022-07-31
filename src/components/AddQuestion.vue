<template>
    <div class="pad">
        <h2>Add new question</h2>
        <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="question">

        </textarea>
        <div class="put-right mt-2">
            <button class="btn btn-primary" @click="onAddAnswer"><i class="fa fa-plus"></i> answer</button>
        </div>
        <div class="mt-1">
            <input v-for="(item, index) in multi_options" :key="index+'textx'" class="form-control mb-1" type="text" v-model="multi_options[index]">
        </div>
        <div class="mid">
            <button class="btn btn-success" @click="onSave"><i class="fa fa-save"></i> Save</button>
        </div>
    </div>
</template>

<script>
import {
    mapActions
} from "vuex";

export default {
    
    name: "AddQuestion",
    components: {

    },
    data() {
        return {
            question: '',
            multi_options: [
                
            ]
        }
    },
    methods: {
        ...mapActions(["addQuestion"]),
        onAddAnswer() {
            this.multi_options.push('')
            
        },

        onSave() {
           const data = {
                question: this.question,
                answers: this.multi_options
           }
            console.log(data)
            this.addQuestion(data) 
        }
    }
}
</script>


<style scoped>
.put-right{
    display: flex;
    justify-content: flex-start;
}
.pad{
    padding: 10px;
}

.mid{
    display: flex;
    justify-content: flex-end;

}
</style>