<script setup lang="ts">
import LeftContainer from './LeftContainer.vue';
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
    display: grid;
    grid-template-columns: 30% 70%;
    height: 100%;
    padding-bottom: 2em;
}

@media (max-width: 770px) {
    .footer {
        height: auto;
        grid-template-columns: 1fr;
    }
}

</style>