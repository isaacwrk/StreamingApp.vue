<template>
    <div class="bg-base-purple min-h-full h-72 rounded-bl-3xl">
        <div class="flex flex-wrap p-10">
            <img src="~@/assets/profilepic.jpg" class="h-20 rounded border-solid border-2 border-white" alt="Cyclops profile picture">
            <h2 class="ml-4 mt-2 font-medium text-font-black text-xl">Mr. Smith</h2>
            <a href="#" class="absolute right-10 mt-4 bg-bottom-purple text-text-purple p-1 text-lg rounded">Upgrade</a>
            <p class="absolute left-20 ml-14 mt-10 text-sub-gray">Basic Subscription</p>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const name = defineComponent({
});

export default name;
</script>

<style>

</style>