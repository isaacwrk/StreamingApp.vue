<template>
    <div class="ml-9 whitespace-nowrap overflow-x-auto">
        <div class="bg-bottom-purple w-20 h-19 p-3 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-sm">
            <i class="uil uil-search text-xl"></i>
            <p>Search</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-20 h-19 p-3 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-sm">
            <i class="uil uil-desktop text-xl"></i>
            <p class="text-sm">TV Shows</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-20 h-19 p-3 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-sm">
            <i class="uil uil-film text-xl"></i>
            <p>Movies</p>
        </div>
        <div class="bg-bottom-purple ml-2 w-20 h-19 p-3 rounded text-center inline-block  hover:text-white hover:bg-strong-purple text-strong-purple text-sm">
            <i class="uil uil-basketball text-xl"></i>
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