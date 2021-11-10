<template>
    <div>
        <div class="absolute top-0 right-0 h-80 w-full bg-base-purple rounded-bl-4xl rounded rounded-br-xl"></div>
        <div class="relative z-10 pt-15 pb-24">

            <div class="flex flex-wrap px-9 mt-10 items-center mb-9">
                <img src="~@/assets/profilepic.jpg" class="w-10 h-10 rounded border-solid border-2 border-white" alt="Cyclops profile picture">
                <div class="flex-1 px-4">
                    <p class="text-font-black font-medium">Mr. Cyclops</p>
                    <p class="text-sub-gray text-xs">Basic Subscription</p>
                </div>
                <button class="h-7 w-20 rounded-md bg-bottom-purple hover:bg-text-purple text-xs font-medium">
                    <div class="text-text-purple hover:text-base-white">Upgrade<sup>+</sup></div>
                </button>
            </div>

            <CategoryButton/>

            <p class="text-font-black font-bold ml-10 mt-8">Continue Watching</p>
            <div class="flex flex-wrap justify-center mt-5.5">
                <div class="relative">

                    <ContinueWatching movieName="Dark" currentTime="S01 E07" class="right-2"/>
                    <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-5 right-4 rounded-full w-10 h-10 ">
                        <i class="uil uil-play flex justify-center p-3 font-black text-base-white"></i>
                    </div>
                    <img src="~@/assets/darkposter.jpg"  class="w-36 h-9.5 mr-2.5 rounded-xl" alt="Dark Season Finale">

                </div>
                <div class="relative">

                    <ContinueWatching movieName="Captain America 2" currentTime="01:45:37"/>
                    <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-5 right-4 rounded-full w-10 h-10 ">
                        <i class="uil uil-play flex justify-center p-3 font-black text-base-white"></i>
                    </div>
                    <img src="~@/assets/theofficeposter.jpg"  class="w-36 h-9.5 rounded-xl" alt="Capitain América 2: The winter Soldier">
                    
                </div>
            </div>

            <!-- Top Now Carrousel-->
            <p class="text-font-black font-bold mt-8 ml-10">Top now</p>
            <div class="mt-6 whitespace-nowrap overflow-x-auto">
                <TopNow/>
            </div>
        
            <!-- Trending Carrousel-->
            <p class="text-font-black font-bold mt-3 ml-10">Trending Now</p>
            <div class="mt-6 whites-space nowrap overflow-x-auto">
                <TrendingNow/>
            </div>

        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import CategoryButton from '@/components/CategoryButton.vue';
import ContinueWatching from '@/components/ContinueWatching.vue';
import TopNow from '@/components/TopNow.vue';
import TrendingNow from '@/components/TrendingNow.vue';

const HomeView = defineComponent({
    components:{
        CategoryButton,
        ContinueWatching,
        TopNow,
        TrendingNow
    }
});

export default HomeView;
</script>

<style>

</style>