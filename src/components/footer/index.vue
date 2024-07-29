<script setup lang="ts">
import LeftContainer from './LeftContainer.vue'
</script>

<template>
  <footer class="footer">
    <LeftContainer />
    <div class="footer_right">
        <p>право</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
    background-color: #ffffff;
    height: 18em;
    display: grid;
    grid-template-columns: 30% 70%;
}

.footer_left {
    background-color: aqua;
}

.footer_right {
    background-color: aquamarine;
}
</style>
