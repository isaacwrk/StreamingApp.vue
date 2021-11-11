<template>
    <div>
        <BuildingPage icon="uil uil-setting" textInfo="Settings Page in progress" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BuildingPage from '@/components/BuildingPage.vue';

const PreferencesView = defineComponent({
    components:{
        BuildingPage
    }
});

export default PreferencesView;
</script>

<style>
    
</style>