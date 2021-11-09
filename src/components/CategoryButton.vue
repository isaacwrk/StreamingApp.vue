<template>
    <div class="ml-9 whitespace-nowrap overflow-x-auto">
        <div class="bg-bottom-purple w-20 h-19 p-5 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-xs">
            <i class="uil uil-search"></i>
            <p>Search</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-20 h-19 p-5 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-xs">
            <i class="uil uil-desktop"></i>
            <p class="text-right">TV Shows</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-20 h-19 p-5 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-xs">
            <i class="uil uil-film"></i>
            <p>Movies</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-20 h-19 p-5 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-xs">
            <i class="uil uil-basketball"></i>
            <p>Sports</p>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const categoryButton = defineComponent({
});

export default categoryButton;
</script>

<style>

</style>