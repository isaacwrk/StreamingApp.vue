<template>
    <div >
        <PlaylistPoster/>
        <div class="relative z-10 pt-15 pb-32">
            <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-56 right-8 rounded-full w-14 h-14 ">
                <i class="uil uil-play flex justify-center text-xl p-5 font-black text-base-white"></i>
            </div>
        </div>
    </div>
    
        
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import PlaylistPoster from '@/components/PlaylistPoster.vue';

const PlaylistView = defineComponent({
    components:{
        PlaylistPoster
    }
});

export default PlaylistView;
</script>

<style>

</style>