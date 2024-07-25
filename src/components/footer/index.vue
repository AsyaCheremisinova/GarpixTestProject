<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="footer_left">
        <p>лево</p>
    </div>
    <div class="footer_right">
        <p>право</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
    background-color: #ffffff;
    height: 18em;
    display: flex;
    flex-direction: row;
}

.footer_left {
    background-color: aqua;
    width: 30%;
}

.footer_right {
    background-color: aquamarine;
    width: 70%;
}
</style>
