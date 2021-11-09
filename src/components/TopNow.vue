<template>
    <div>
        <div class="ml-9 whitespace-nowrap overflow-x-auto">
            <div class="w-28.5 h-20.5 rounded-xl text-center inline-block bg-irish bg-cover bg-center bg-no-repeat"></div>
            <div class="ml-2 w-28.5 h-20.5  rounded-xl text-center inline-block bg-strange bg-cover bg-center bg-no-repeat"></div>
            <div class="ml-2 w-28.5 h-20.5 rounded-xl text-center inline-block bg-yumi bg-cover bg-center bg-no-repeat"></div>
            <div class="ml-2 w-28.5 h-20.5 rounded-xl text-center inline-block bg-punisher bg-cover bg-center bg-no-repeat"></div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const TopNow = defineComponent({
  
});

export default TopNow;
</script>

<style>
.bg-irish{
    background-image: url('~@/assets/irish.jpg');
}
.bg-strange{
    background-image: url('~@/assets/strangethings.jpg');
}
.bg-yumi{
    background-image: url('~@/assets/yumi.jpeg');
}
.bg-punisher{
    background-image: url('~@/assets/justiceiro.jpg');
}
</style>