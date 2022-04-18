<template>
    <div class="posts">
        <post-form/>
        <h1>{{postCount}}</h1>
        <div class="card" v-for="post in allPosts" :key="post.id">
            <div class="card-header">
                Id of this card: {{post.id}}
            </div>
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.body}}</p>
                <a @click="$router.push({name:'post',params:{id:post.id}})" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import PostForm from './PostForm.vue'
export default {
    components:{
        PostForm,
    },
    methods:{
        ...mapActions(['fethchPosts'])
    },
    computed:{
        ...mapGetters(['allPosts','postCount']),
    },
    async mouted(){
        this.fethchPosts(5);
    }
}
</script>