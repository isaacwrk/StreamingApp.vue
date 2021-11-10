<template>
    <div class="min-h-screen">
        <!-- Background -->
        <div class="absolute top-0 right-0 h-80 w-full bg-base-purple rounded-bl-4xl rounded rounded-br-xl"></div>
        <Main class="relative z-10 pt-15 pb-32"/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//Components
import Main from '@/views/Main.vue';



@Options({
    components: {
        Main
    },
})
export default class App extends Vue {}
</script>

<style>
</style>
