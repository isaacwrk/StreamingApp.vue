<template>
    <nav class="fixed bottom-0 h-14 bg-gray-100 flex w-full left-0 rounded-tr-xl">
        <slot/>
    </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Nav  = defineComponent({
});

export default Nav;
</script>

<style>

</style>