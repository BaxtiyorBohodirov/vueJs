export default{
    actions:{
        async fethchPosts(ctx,limit=5)
        {
            const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+limit);
            const posts=await res.json();
            ctx.commit('updatePosts',posts);
        },
       async getPost({state},id)
        {
            const res =await  state.posts.filter(x=>x.id==id);
            const post =await res;
            return post;
        }
    },
    mutations:{
        updatePosts(state,posts){
            state.posts=posts;
        },
        createPost(state,newPost)
        {
            state.posts.unshift(newPost);            
        },
    },
    state:{
        posts:[],
        post:{}
    },
    getters:{
        allPosts(state){
            return state.posts;            
        },
        postCount(state){
            return state.posts.length
        },
            
    }
}