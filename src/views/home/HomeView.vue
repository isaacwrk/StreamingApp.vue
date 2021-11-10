<template>
    <div>
        <div class="absolute top-0 right-0 h-80 w-full bg-base-purple rounded-bl-4xl rounded rounded-br-xl"></div>
        <div class="relative z-10 pt-15 pb-32">
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
        </div>

    </div>
    
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import CategoryButton from '@/components/CategoryButton.vue';
import ContinueWatching from '@/components/ContinueWatching.vue';
import TopNow from '@/components/TopNow.vue';

const HomeView = defineComponent({
    CategoryButton,
    ContinueWatching,
    TopNow
});

export default HomeView;
</script>

<style>

</style>