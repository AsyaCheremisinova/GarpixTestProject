<script setup lang="ts">
import LeftContainer from './LeftContainer.vue'
import RightContainer from './RightContainer.vue';
</script>

<template>
  <footer class="footer">
    <LeftContainer />
    <RightContainer />
  </footer>
</template>

<style scoped>
.footer {
    background-color: var(--white);
    height: 18em;
    display: grid;
    grid-template-columns: 30% 70%;
}
</style>
