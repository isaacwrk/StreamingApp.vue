<template>
    <div class="absolute top-0 bg-cover right-0 h-80 w-full bg-dark-poster rounded-bl-4xl rounded rounded-br-xl"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const PlaylistPoster = defineComponent({
});

export default PlaylistPoster;
</script>

<style>
.bg-dark-poster{
    background-image: url('~@/assets/darkposter.jpg');
}
</style>