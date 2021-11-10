<template>
    <div class="min-h-screen">
        <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"></component>
            </transition>   
        </RouterView>
        
        <NavigationBar>
            <NavigationBarItem icon="uil uil-home" 
                               :selected="$route.name == 'home'"
                               @click="$router.replace({name:'home'})"/>
            <NavigationBarItem icon="uil uil-play" 
                               :selected="$route.name == 'playlist'"
                               @click="$router.replace({name:'playlist'})"/>
            <NavigationBarItem icon="uil uil-bookmark" 
                               :selected="$route.name == 'favorites'"
                               @click="$router.replace({name:'favorites'})"/>
            <NavigationBarItem icon="uil uil-setting" 
                               :selected="$route.name == 'preferences'"
                               @click="$router.replace({name:'preferences'})"/>
        </NavigationBar>
    </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
//components
import CategoryButtons from '@/components/CategoryButton.vue';
import ContinueWatching from '@/components/ContinueWatching.vue';
import TopNow from '@/components/TopNow.vue';
import TrendingNow from '@/components/TrendingNow.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationBarItem from '@/components/NavigationBarItem.vue';


const MainView = defineComponent({
    components:{
        CategoryButtons,
        ContinueWatching,
        TopNow,
        TrendingNow,
        NavigationBar,
        NavigationBarItem
    }
});

export default MainView;
</script>

<style>
</style>