/**
 * Created by A11150421050193k on 2017/5/18.
 */
const router=new VueRouter({
    routes:[
        // {path:'/',component:require('../com/com')}
        {path:'/',component(resolve){
            require(['../com/com'],resolve)
        }}
    ]
});


const app = new Vue({
    router
}).$mount('#app');