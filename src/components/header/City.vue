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
  justify-content: start;
  align-items: center;
  column-gap: 0.5em;
  width: 90%;
  margin-left: 2em;
}

.city-container__label {
  font-size: 0.9em;
  color: var(--gray-text-color);
}

@media (max-width: 770px) {
  .city-container {
    justify-content: end;
    margin-right: 4%;
    flex-direction: column;
  }
}
</style>
