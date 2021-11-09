<template>
    <div class="flex flex-nowrap ml-10 mr-10 justify-center">
        <div class="bg-bottom-purple w-28 h-24 p-5 rounded text-center hover:text-white hover:bg-strong-purple text-strong-purple text-xl">
            <i class="uil uil-search"></i>
            <p>Search</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-28 h-24 p-5 rounded text-center hover:text-white hover:bg-strong-purple text-strong-purple text-xl">
            <i class="uil uil-desktop"></i>
            <p class="pb-1">TV Shows</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-28 h-24 p-5 rounded text-center hover:text-white hover:bg-strong-purple text-strong-purple text-xl">
            <i class="uil uil-film"></i>
            <p>Movies</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-28 h-24 p-5 rounded text-center hover:text-white hover:bg-strong-purple text-strong-purple text-xl">
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