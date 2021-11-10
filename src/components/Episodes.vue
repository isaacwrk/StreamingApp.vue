<template>
    <div class="whitespace-nowrap overflow-y-auto">
        <div class="flex">
            <div class="w-28.5 h-20.5 rounded-xl text-center inline-block bg-dark-poster bg-cover bg-center bg-no-repeat"></div>
            <div class="font-medium p-4">
                <p class="text-font-black text-sm">{{ title }}</p>
                <p class="text-gray-400 text-xs">{{ duration }}</p>
            </div>
            <div class="absolute right-6 top-4">
                <i class="uil uil-import text-gray-400 font-medium text-2xl"></i>
            </div>
            
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Episodes = defineComponent({
    props:{
        title:{
            type:String,
            required:true
        },
        duration:{
            type:String,
            required:true
        }
    }
});

export default Episodes;
</script>

<style>

</style>