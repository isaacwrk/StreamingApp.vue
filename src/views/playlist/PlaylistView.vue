<template>
    <div class="pb-28">
        <header class="relative bg-cover h-80 w-full bg-dark-poster rounded-bl-4xl rounded rounded-br-xl">
            <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-8 right-8 rounded-full w-14 h-14 ">
                <i class="uil uil-play flex justify-center text-2xl p-4 font-black text-base-white"></i>
            </div>
        </header>
        <!--Title-->
        <div class="flex flex-wrap">
            <p class="uppercase font-medium text-font-black text-sm ml-10 mt-9">Dark (2017)</p>
        </div>
        <div class="flex flex-1 text-sub-gray text-xs ml-10 mt-1">
            <p class="mr-2">Adventure</p>
            <p class="mr-2">Mistery</p>
            <p class="mr-2">Thriller</p>
            <p>Sci Fi</p>
        </div>
        <!--Star rate-->
        <div class="flex flex-1 ml-10 mt-1 text-base">
            <i class="fas fa-star mr-2 text-yellow-star"></i>
            <i class="fas fa-star  mr-2 text-yellow-star"></i>
            <i class="fas fa-star mr-2 text-yellow-star"></i>
            <i class="fas fa-star  mr-2 text-yellow-star"></i>
            <i class="fas fa-star text-yellow-star opacity-50"></i>
        </div>
        <!-- sections -->
        <div class="flex flex-1 ml-10 mt-6 text-sm font-semibold text-font-black">
            <p class="">Episodes</p>
            <p class="text-gray-400 ml-5">Trailers</p>
            <p class="text-gray-400 ml-5">Cast</p>
        </div>
        <!--Episodes-->
        <div class="relative mt-6 ml-10">
            <div class="mb-7 relative">
                <Episodes  title="01. Secrets" duration="45 Minutes"/>
                <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-2 right-56 rounded-full w-10 h-10">
                    <i class="uil uil-play flex justify-center text-lg p-3 font-black text-base-white"></i>
                </div>
            </div>

            <div class="mb-7 relative">
                <Episodes  title="02. Lies" duration="45 Minutes"/>
                <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-2 right-56 rounded-full w-10 h-10">
                    <i class="uil uil-play flex justify-center text-lg p-3 font-black text-base-white"></i>
                </div>
            </div>

            <div class="mb-7 relative">
                <Episodes  title="03. Past " duration="45 Minutes"/>
                <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-2 right-56 rounded-full w-10 h-10">
                    <i class="uil uil-play flex justify-center text-lg p-3 font-black text-base-white"></i>
                </div>
            </div>

            <div class="mb-7 relative">
                <Episodes  title="04. Lives" duration="45 Minutes"/>
                <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-2 right-56 rounded-full w-10 h-10">
                    <i class="uil uil-play flex justify-center text-lg p-3 font-black text-base-white"></i>
                </div>
            </div>

            <div class="mb-7 relative">
                <Episodes  title="04. Double" duration="45 Minutes"/>
                <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-2 right-56 rounded-full w-10 h-10">
                    <i class="uil uil-play flex justify-center text-lg p-3 font-black text-base-white"></i>
                </div>
            </div>

        </div>
    </div>
  
    
   
    
        
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Episodes from '@/components/Episodes.vue';

const PlaylistView = defineComponent({
    components:{
        Episodes
    }
});

export default PlaylistView;
</script>

<style>
.bg-dark-poster{
    background-image: url('~@/assets/darkposter.jpg');
}
</style>