import {createRouter,createWebHistory} from 'vue-router'
import AllPosts from '../components/AllPosts'
import PostView from '../components/PostView'
import NotFound from '../components/404'
export default createRouter({  
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'posts',
            component: AllPosts          
        },
        {
            path:'/post/:id',
            name:'post',
            component: PostView          
        },
        {
            path:'*',
            name:'not_found',
            component: NotFound          
        }
    ]   
}) 