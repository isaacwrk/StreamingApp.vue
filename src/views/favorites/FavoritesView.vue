<template>
    <div>
        <BuildingPage icon="uil uil-star" textInfo="Favorite Page in Progress"/>
    </div>
    
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import BuildingPage from '@/components/BuildingPage.vue';

const FavoritesView = defineComponent({
    components:{
        BuildingPage
    }
});

export default FavoritesView;
</script>

<style>

</style>