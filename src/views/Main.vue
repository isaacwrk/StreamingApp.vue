<template>
    <div class="">
        <div class="flex flex-wrap px-9 mt-10 items-center mb-9">
            <img src="~@/assets/profilepic.jpg" class="w-10 h-10 rounded border-solid border-2 border-white" alt="Cyclops profile picture">
            <div class="flex-1 px-4">
                <p class="text-font-black font-medium">Mr. Cyclop</p>
                <p class="text-sub-gray text-xs">Basic Subscription</p>
            </div>
            <button class="h-7 w-20 rounded-md bg-bottom-purple text-xs font-medium">
                <div class="text-text-purple">Upgrade<sup>+</sup></div>
            </button>
        </div>
        <CategoryButtons/>
        <p class="text-font-black font-bold ml-10 mt-8">Continue Watching</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
//components
import CategoryButtons from '@/components/CategoryButton.vue';

const name = defineComponent({
    components:{
        CategoryButtons
    }
});

export default name;
</script>

<style>

</style>