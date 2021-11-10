<template>
    <div class="absolute bottom-0 right-0 bg-strong-purple rounded-xl w-32 h-17">
        <p class="text-base-white text-xs p-3 opacity-80">{{movieName}}</p>
        <div class="ml-2 h-1 relative w-24 rounded-full overflow-hidden">
            <div class="w-full h-full bg-dark-purple absolute"></div>
            <div class="h-full bg-buttom-pink absolute rounded" style="width:60%"></div>
        </div>
        <p class="ml-2 mt-1 text-base-white text-xs opacity-60">{{ currentTime }}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const continueWatching = defineComponent({
    props:{
        movieName:{
            type:String,
            required:true
        },
        currentTime:{
            type:String,
            required:true
        }
    }
});

export default continueWatching;
</script>

<style>

</style>