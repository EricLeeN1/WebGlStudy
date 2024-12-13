import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '登录',
            keepAlive: false,
            requireAuth: false,
        },
        component: () => import('../views/Home/index.vue'),
    },
    {
        path: '/examples',
        name: 'Examples',
        meta: {
            title: '案例',
            keepAlive: false,
            requireAuth: false,
        },
        component: () => import('../views/Examples/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: false,
            requireAuth: false,
        },
        component: () => import('../views/Login/index.vue'),
    },
];

console.log(import.meta.env, 'import.meta.env');
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
