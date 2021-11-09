<template>
    <Main/>
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
