<template>
    <div class="min-h-screen">
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

        <CategoryButtons/>

        <p class="text-font-black font-bold ml-10 mt-8">Continue Watching</p>

        <div class="flex flex-wrap justify-center mt-5.5">
            <div class="relative">
                <div class="absolute bottom-0 right-2 bg-strong-purple rounded-xl w-32 h-17">
                    <p class="text-base-white text-xs p-3 opacity-80">Dark</p>
                    <div class="ml-2 h-1 relative w-24 rounded-full overflow-hidden">
                        <div class="w-full h-full bg-dark-purple absolute"></div>
                        <div class="h-full bg-buttom-pink absolute rounded" style="width:60%"></div>
                    </div>
                    <p class="ml-2 mt-1 text-base-white text-xs opacity-60">S01 E07</p>
                </div>
                <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-5 right-4 rounded-full w-10 h-10 ">
                    <i class="uil uil-play flex justify-center p-3 font-black text-base-white"></i>
                </div>
                <img src="~@/assets/darkposter.jpg"  class="w-36 h-9.5 mr-2.5 rounded-xl" alt="Dark Season Finale">
            </div>
            <div class="relative">
                <div class="absolute  bottom-0 right-0 bg-strong-purple  rounded-xl w-32 h-17">
                    <p class="text-base-white text-xs p-3 opacity-80">Captain America 2</p>
                    <div class="h-1 ml-2 relative w-24 rounded-full overflow-hidden">
                        <div class="w-full h-full bg-dark-purple absolute"></div>
                        <div class="h-full bg-buttom-pink absolute rounded" style="width:80%"></div>
                    </div>
                    <p class="ml-2 mt-1 text-base-white text-xs opacity-60">01:45:35</p>
                </div>
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
        <p class="text-font-black font-bold mt-9 ml-10">Trending Now</p>
        <div class="mt-06 whites-space nowrap overflow-x-auto">
            <TrendingNow/>
        </div>
        <NavBar/>
    </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
//components
import CategoryButtons from '@/components/CategoryButton.vue';
import TopNow from '@/components/TopNow.vue';
import TrendingNow from '@/components/TrendingNow.vue';
import NavBar from '@/components/Nav.vue';

const name = defineComponent({
    components:{
        CategoryButtons,
        TopNow,
        TrendingNow,
        NavBar
    }
});

export default name;
</script>

<style>

</style>