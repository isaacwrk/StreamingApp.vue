import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import PreferencesView from '@/views/preferences/PreferencesView.vue';
import PlaylistView from '@/views/playlist/PlaylistView.vue';
import FavoritesView from '@/views/favorites/FavoritesView.vue';
import MainView from '@/views/MainView.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: MainView,
        children:[
            {
                path:'',
                name:'home',
                component:HomeView
            },
            {
                path:'preferences',
                name:'preferences',
                component:PreferencesView
            },
            {
                path:'playlist',
                name:'playlist',
                component:PlaylistView
            },
            {
                path:'favorites',
                name:'favorites',
                component:FavoritesView
            },
        ]
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;