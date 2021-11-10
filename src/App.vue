<template>
    <div class="min-h-screen">
        <router-view/>
    </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//Components
import MainView from "@/views/MainView.vue";

@Options({
    components: {
        MainView
    },
})
export default class App extends Vue {}
</script>

<style>
</style>
