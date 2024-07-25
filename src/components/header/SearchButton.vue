<script setup lang="ts">
</script>

<template>
  <div class="magnifier-container">
    <button class="magnifier-container_button">
        <img
            class="magnifier-container_magnifier-icon"
            alt="magnifier icon"
            src="/src/assets/magnifier_icon.png" />
    </button>
  </div>
</template>

<style scoped>
.magnifier-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.magnifier-container_button {
    background-color: #ffffff;
    border: 0;
}

.magnifier-container_magnifier-icon {
    width: 27px;
}
</style>
