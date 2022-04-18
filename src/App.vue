<template>
  <div id="app">
    <router-view></router-view>    
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
  name: 'App',
  data(){
    return {
      toPost:0
    }
  },
  computed:mapGetters(["allPosts","postCount"]),
  methods:{
    ...mapActions(['fethchPosts']),
    postId(id)
    {
      this.toPost=id
    },
    },
  async mounted()
  {
    this.fethchPosts(5);
  },
}
</script>
<style>
  #app .posts, .post
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