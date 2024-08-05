<script setup lang="ts">
import Categories from './Categories.vue';
import Switch from './Switch.vue';
import Partners from './Partners.vue';
</script>

<template>
    <div class="content">
        <h1 class="content__h1">Партнеры и предложения</h1>
        <Categories />
        <Switch />
        <Partners />
    </div>  
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content__h1 {
    margin-top: 1.5em;
    font-size: 3em;
}
</style>
