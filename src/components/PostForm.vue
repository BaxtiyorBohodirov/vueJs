<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="title..." v-model="title">
        <input type="text" placeholder="body..." v-model="body">
        <input type="submit" value="submit">
        <hr>
    </form>
</template>
<script>
import {mapMutations} from 'vuex' 
export default {
    data(){
        return {
            title:'',
            body:''
        };
    },
    methods:{
        ...mapMutations(["createPost"]),
        submit()
        {   
            if(this.title!==""&&this.body!=="")
            this.createPost(
                {
                    title:this.title,
                    body:this.body,
                    id:Date.now()
                }
            );
            this.title=this.body="";
        }
    }
}
</script>
<style>
    form{
        text-align: center;
        padding-top: 50px;
    }
    input
    {
        margin: 10px;
        width: 50%;
        font-size: 20px;
        font-weight: bold;
    }
</style>