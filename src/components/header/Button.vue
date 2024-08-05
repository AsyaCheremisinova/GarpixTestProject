<script setup lang="ts">
</script>

<template>
  <button class="button">
    Войти
  </button>
</template>

<style scoped>
.button {
  font-family: 'Geometria', sans-serif;
  background-color: var(--white);
  border-color: var(--green);
  border-radius: 8px;
  color: var(--green);
  width: 7em;
  height: 2.7em;
  outline: none;
  border: 2px solid; 
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color:  var(--white);
  color: var(--green);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.button:focus {
  box-shadow: 0 0 3px 3px rgba(0, 211, 109, 0.3);
}

.button:active {
  background-color: var(--green);
  color:  var(--white);
  border-color: var(--green);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(2px);
}
</style>
