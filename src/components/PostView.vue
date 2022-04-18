<template>
    <div class="posts">
        <div class="card">
            <div class="card-header">
                Id of this card: {{this.post.id}}
            </div>
            <div class="card-body">
                <h5 class="card-title">{{this.post.title}}</h5>
                <p class="card-text">{{this.post.body}} </p>
                <a @click="$router.push({name:'posts'})" class="btn btn-primary">Go Back</a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
    export default {
    name: 'PostView',
    data(){
        return {
            post:{},
        }
    },
    methods:{
        ...mapActions(['getPost']),
    },
    camputed:{
    },
    async mounted()
    {
        const res=await this.getPost(this.$route.params.id);
        this.post=res[0];
    }
}
</script>
<style>
  .post
  {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;    
    align-items: center;
  }
  .card
  {
    width:80%;
    margin:10px;
  }
</style>