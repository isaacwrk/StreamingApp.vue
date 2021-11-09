<template>
    <div>
        <div class="ml-9 whitespace-nowrap overflow-x-auto">
            <div class="w-28.5 h-20.5 rounded-xl text-center inline-block bg-irish bg-office bg-cover bg-center bg-no-repeat"></div>
            <div class="ml-2 w-28.5 h-20.5  rounded-xl text-center inline-block bg-roundsix  bg-cover bg-center bg-no-repeat"></div>
            <div class="ml-2 w-28.5 h-20.5 rounded-xl text-center inline-block bg-onepiece bg-cover bg-center bg-no-repeat"></div>
            <div class="ml-2 w-28.5 h-20.5 rounded-xl text-center inline-block bg-sp bg-cover bg-center bg-no-repeat"></div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const name = defineComponent({
});

export default name;
</script>

<style>
.bg-office{
    background-image: url('~@/assets/theoffice.jpg');
}
.bg-roundsix{
    background-image: url('~@/assets/roundsix.jpg');
}
.bg-onepiece{
    background-image: url('~@/assets/onepiece.jpg');
}
.bg-sp{
    background-image: url('~@/assets/sp2.jpg');
}
</style>