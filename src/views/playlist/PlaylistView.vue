<template>
    <div>
        <header class="relative bg-cover h-80 w-full bg-dark-poster rounded-bl-4xl rounded rounded-br-xl">
            <div class="absolute bg-buttom-pink hover:bg-pink-500 -bottom-8 right-8 rounded-full w-14 h-14 ">
                <i class="uil uil-play flex justify-center text-2xl p-4 font-black text-base-white"></i>
            </div>
        </header>
        <div class="flex flex-wrap">
            <p class="uppercase font-medium text-font-black text-sm ml-10 mt-6">Dark(2017)</p>
        </div>
        <div class="flex flex-1 text-sub-gray text-xs ml-10 mt-1">
            <p class="mr-2">Adventure</p>
            <p class="mr-2">Mistery</p>
            <p class="mr-2">Thriller</p>
            <p>Sci Fi</p>
        </div>
        <div class="flex flex-1 ml-10 mt-1 text-base">
            <i class="fas fa-star mr-2 text-yellow-star"></i>
            <i class="fas fa-star  mr-2 text-yellow-star"></i>
            <i class="fas fa-star mr-2 text-yellow-star"></i>
            <i class="fas fa-star  mr-2 text-yellow-star"></i>
            <i class="fas fa-star text-yellow-star opacity-50"></i>
        </div>
    </div>
  
    
   
    
        
</template>

<script lang='ts'>
import { defineComponent } from 'vue';


const PlaylistView = defineComponent({
    components:{
        
    }
});

export default PlaylistView;
</script>

<style>
.bg-dark-poster{
    background-image: url('~@/assets/darkposter.jpg');
}
</style>