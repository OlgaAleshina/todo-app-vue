import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "about" */ './views/CardView.vue')
        },
        {
            path: '/todo-card/:id',
            name: 'todo-card',

            component: () => import(/* webpackChunkName: "about" */ './views/TodoView.vue')
        },

    ]
})