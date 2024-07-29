<script setup lang="ts">
</script>

<template>
  <div class="city-container">
    <img
        alt="City icon"
        src="/src/assets/geo.svg" />
    <label class="city-container__label">
        Санкт-Петербург
    </label>
  </div>
</template>

<style scoped>
.city-container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5em;
  width: 100%;    
  margin-left: 1em;
}

.city-container__label {
  font-size: 0.9em;
}
</style>
