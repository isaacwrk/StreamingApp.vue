<template>
    <div class="flex flex-1 justify-center mt-20">
        <i :class="icon" class="text-strong-purple text-3xl"></i>
    </div>
    <p class="text-center mt-2 text-xl text-font-black font-semibold">{{textInfo}}</p>
    <div class="flex justify-center items-center">
        <div class="mt-10 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const BuildingPage = defineComponent({
    props:{
        textInfo:{
            type:String,
            required:true
        },
        icon:{
            type:String,
            required:true
        }
    }
});

export default BuildingPage;
</script>

<style>
.loader {
    border-top-color: #f974ca;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>